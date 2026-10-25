
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore, collection, addDoc, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDi40oL-JtE9LXF8CPGFHHLL6Hqe4p_GDA",
  authDomain: "restaurant-63230.firebaseapp.com",
  projectId: "restaurant-63230",
  storageBucket: "restaurant-63230.firebasestorage.app",
  messagingSenderId: "624519670365",
  appId: "1:624519670365:web:f23d10079a9adf2c51bbb4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const foods = [
  { id: "paneer-tikka", name: "Paneer Tikka", price: 209, emoji: "🍢" },
  { id: "butter-paneer", name: "Butter Paneer", price: 250, emoji: "🍛" },
  { id: "kadhai-paneer", name: "Kadhai Paneer", price: 270, emoji: "🥘" },
  { id: "veg-biryani", name: "Veg Biryani", price: 280, emoji: "🍚" },
  { id: "dal-makhani", name: "Dal Makhani", price: 150, emoji: "🥣" },
  { id: "hakka-noodles", name: "Hakka Noodles", price: 180, emoji: "🍜" },
  { id: "manchurian", name: "Manchurian", price: 100, emoji: "🥡" },
  { id: "pizza", name: "Pizza", price: 210, emoji: "🍕" },
  { id: "margherita", name: "Margherita Pizza", price: 240, emoji: "🍕" },
  { id: "burger", name: "Burger", price: 130, emoji: "🍔" },
  { id: "sandwich", name: "Sandwich", price: 100, emoji: "🥪" },
  { id: "dosa", name: "Masala Dosa", price: 80, emoji: "🥞" },
  { id: "pavbhaji", name: "Pav Bhaji", price: 180, emoji: "🍲" },
  { id: "chole", name: "Chole Bhature", price: 150, emoji: "🫓" },
  { id: "thali", name: "Royal Thali", price: 250, emoji: "🍱" },
  { id: "gulabjamun", name: "Gulab Jamun", price: 100, emoji: "🍮" },
  { id: "rasmalai", name: "Rasmalai", price: 100, emoji: "🥛" },
  { id: "brownie", name: "Brownie", price: 200, emoji: "🍫" },
  { id: "coldcoffee", name: "Cold Coffee", price: 80, emoji: "🥤" },
  { id: "mangoshake", name: "Mango Shake", price: 90, emoji: "🥭" }
];

const $ = id => document.getElementById(id);
let customerPhone = "";
let cart = {};
let sending = false;

function toast(message) {
  $("toast").textContent = message;
  $("toast").style.display = "block";
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => $("toast").style.display = "none", 2600);
}

function showPage(page) {
  $("loginPage").classList.toggle("hidden", page !== "login");
  $("menuPage").classList.toggle("hidden", page !== "menu");
  $("cartPage").classList.toggle("hidden", page !== "cart");
}

function renderMenu() {
  $("menuGrid").innerHTML = foods.map(food => `
    <article class="food-card">
      <div class="food-emoji">${food.emoji}</div>
      <h3>${food.name}</h3>
      <div class="price">₹${food.price}</div>
      <div class="qty-row">
        <button data-action="minus" data-id="${food.id}" aria-label="Decrease">−</button>
        <span id="qty-${food.id}">${cart[food.id]?.qty || 1}</span>
        <button data-action="plus" data-id="${food.id}" aria-label="Increase">+</button>
        <button class="add-btn" data-action="add" data-id="${food.id}">Add</button>
      </div>
    </article>
  `).join("");
}

$("continueBtn").addEventListener("click", () => {
  const number = $("mobile").value.replace(/\D/g, "");
  if (!/^[6-9]\d{9}$/.test(number)) {
    $("loginError").textContent = "Please enter a valid 10-digit mobile number.";
    return;
  }

  customerPhone = number;
  $("customerNumber").textContent = "+91 " + number;
  $("loginError").textContent = "";
  renderMenu();
  showPage("menu");
});

$("mobile").addEventListener("input", () => {
  $("mobile").value = $("mobile").value.replace(/\D/g, "").slice(0, 10);
});

$("changeNumber").addEventListener("click", () => {
  showPage("login");
});

$("menuGrid").addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const food = foods.find(item => item.id === button.dataset.id);
  if (!food) return;

  const action = button.dataset.action;
  if (action === "plus" || action === "minus") {
    const current = cart[food.id]?.qty || 1;
    const next = action === "plus" ? current + 1 : Math.max(1, current - 1);
    if (cart[food.id]) cart[food.id].qty = next;
    $("qty-" + food.id).textContent = next;
  }

  if (action === "add") {
    if (!cart[food.id]) cart[food.id] = { ...food, qty: 1 };
    else cart[food.id].qty += 1;
    updateCartCount();
    toast(food.name + " added to cart");
  }
});

function updateCartCount() {
  const count = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
  $("cartCount").textContent = count;
}

function renderCart() {
  const items = Object.values(cart);
  if (!items.length) {
    $("cartItems").innerHTML = "<p>Your cart is empty. Add food from the menu.</p>";
  } else {
    $("cartItems").innerHTML = items.map(item => `
      <div class="cart-row">
        <div><strong>${item.name}</strong><br>₹${item.price} × ${item.qty}</div>
        <div>
          <button data-cart-action="minus" data-id="${item.id}">−</button>
          <strong> ${item.qty} </strong>
          <button data-cart-action="plus" data-id="${item.id}">+</button>
          <button data-cart-action="remove" data-id="${item.id}">Remove</button>
        </div>
      </div>
    `).join("");
  }

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  $("cartTotal").textContent = "₹" + total;
  $("placeOrder").disabled = !items.length || sending;
}

$("cartOpen").addEventListener("click", () => {
  if (!customerPhone) {
    showPage("login");
    return;
  }
  renderCart();
  showPage("cart");
});

$("backToMenu").addEventListener("click", () => showPage("menu"));

$("cartItems").addEventListener("click", event => {
  const button = event.target.closest("button[data-cart-action]");
  if (!button) return;
  const id = button.dataset.id;
  if (!cart[id]) return;

  if (button.dataset.cartAction === "remove") delete cart[id];
  if (button.dataset.cartAction === "plus") cart[id].qty++;
  if (button.dataset.cartAction === "minus") {
    cart[id].qty--;
    if (cart[id].qty <= 0) delete cart[id];
  }

  updateCartCount();
  renderCart();
});

$("placeOrder").addEventListener("click", async () => {
  if (sending) return;
  const items = Object.values(cart).map(item => ({
    id: item.id,
    name: item.name,
    price: item.price,
    qty: item.qty
  }));

  if (!customerPhone || !items.length) {
    toast("Enter your number and add food first.");
    return;
  }

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  sending = true;
  $("placeOrder").disabled = true;
  $("placeOrder").textContent = "Placing Order...";

  try {
    const ref = await addDoc(collection(db, "orders"), {
      customerPhone,
      items,
      total,
      status: "Received",
      paymentStatus: "Unpaid",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });

    cart = {};
    updateCartCount();
    $("orderMessage").textContent = "Order placed successfully! Order ID: " + ref.id;
    $("cartItems").innerHTML = "<h3>✅ Your order has been sent to the restaurant.</h3>";
    $("cartTotal").textContent = "₹0";
    toast("Order placed successfully!");
  } catch (error) {
    console.error(error);
    $("orderMessage").textContent =
      "Order could not be sent. Check internet and Firebase Firestore permissions.";
    toast("Order failed. Please try again.");
  } finally {
    sending = false;
    $("placeOrder").disabled = false;
    $("placeOrder").textContent = "Place Order";
  }
});

renderMenu();
showPage("login");
