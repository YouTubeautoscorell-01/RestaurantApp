
"use strict";

/* =========================================
   ROYAL NAVSARI DINING - SELF ORDERING
   No login required
========================================= */

const FOOD_ITEMS = [
  {
    id: "burger1", name: "Classic Burger", price: 149,
    category: "Burgers", emoji: "🍔",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    description: "Classic burger with fresh vegetables."
  },
  {
    id: "burger2", name: "Paneer Burger", price: 169,
    category: "Burgers", emoji: "🍔",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?auto=format&fit=crop&w=600&q=80",
    description: "Delicious burger with a paneer filling."
  },
  {
    id: "burger3", name: "Spicy Veg Burger", price: 179,
    category: "Burgers", emoji: "🍔",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80",
    description: "Spicy patty with a flavourful sauce."
  },
  {
    id: "burger4", name: "Double Cheese Burger", price: 229,
    category: "Burgers", emoji: "🍔",
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=600&q=80",
    description: "A cheesy burger packed with flavour."
  },
  {
    id: "pizza1", name: "Margherita Pizza", price: 199,
    category: "Pizza", emoji: "🍕",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=600&q=80",
    description: "Cheese, tomato sauce and herbs."
  },
  {
    id: "pizza2", name: "Farmhouse Pizza", price: 249,
    category: "Pizza", emoji: "🍕",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    description: "Pizza with a colourful vegetable topping."
  },
  {
    id: "pizza3", name: "Paneer Pizza", price: 269,
    category: "Pizza", emoji: "🍕",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80",
    description: "Paneer, cheese and delicious spices."
  },
  {
    id: "pizza4", name: "Cheese Pizza", price: 239,
    category: "Pizza", emoji: "🍕",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
    description: "A rich and cheesy pizza."
  },
  {
    id: "indian1", name: "Paneer Tikka", price: 209,
    category: "Indian", emoji: "🍢",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
    description: "Grilled paneer with Indian spices."
  },
  {
    id: "indian2", name: "Butter Paneer", price: 250,
    category: "Indian", emoji: "🍛",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
    description: "Paneer in a creamy tomato gravy."
  },
  {
    id: "indian3", name: "Veg Biryani", price: 280,
    category: "Indian", emoji: "🍚",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=600&q=80",
    description: "Aromatic rice with vegetables and spices."
  },
  {
    id: "indian4", name: "Dal Makhani", price: 150,
    category: "Indian", emoji: "🥣",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    description: "Slow-cooked lentils with a creamy texture."
  },
  {
    id: "snack1", name: "Veg Sandwich", price: 100,
    category: "Snacks", emoji: "🥪",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
    description: "Fresh vegetables in toasted bread."
  },
  {
    id: "snack2", name: "French Fries", price: 99,
    category: "Snacks", emoji: "🍟",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
    description: "Golden crispy potato fries."
  },
  {
    id: "snack3", name: "Hakka Noodles", price: 180,
    category: "Snacks", emoji: "🍜",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
    description: "Noodles tossed with vegetables."
  },
  {
    id: "snack4", name: "Manchurian", price: 100,
    category: "Snacks", emoji: "🥢",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
    description: "A spicy Indo-Chinese favourite."
  },
  {
    id: "dessert1", name: "Gulab Jamun", price: 100,
    category: "Dessert", emoji: "🍮",
    image: "https://images.unsplash.com/photo-1666190092159-efc2e3b2b6d5?auto=format&fit=crop&w=600&q=80",
    description: "Traditional Indian sweet."
  },
  {
    id: "dessert2", name: "Chocolate Brownie", price: 150,
    category: "Dessert", emoji: "🍫",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
    description: "Rich chocolate dessert."
  },
  {
    id: "drink1", name: "Cold Coffee", price: 80,
    category: "Drinks", emoji: "☕",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80",
    description: "Chilled and refreshing coffee."
  },
  {
    id: "drink2", name: "Mango Shake", price: 90,
    category: "Drinks", emoji: "🥭",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=600&q=80",
    description: "A sweet and creamy mango drink."
  }
];

const CART_KEY = "royalDiningSelfOrderCartV2";

let cart = [];
let activeCategory = "All";
let searchTerm = "";
let toastTimer = null;
let orderInProgress = false;

const $ = id => document.getElementById(id);

function money(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

/* =========================================
   CART STORAGE
========================================= */

function saveCart() {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (error) {
    console.warn("Cart could not be saved locally.", error);
  }
}

function loadCart() {
  try {
    const stored = localStorage.getItem(CART_KEY);
    if (!stored) return;

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) return;

    cart = parsed
      .filter(item => FOOD_ITEMS.some(food => food.id === item.id))
      .map(item => {
        const food = FOOD_ITEMS.find(f => f.id === item.id);
        return {
          id: food.id,
          name: food.name,
          price: food.price,
          image: food.image,
          qty: Math.min(99, Math.max(1, Math.floor(Number(item.qty) || 1)))
        };
      });
  } catch (error) {
    console.warn("Saved cart could not be loaded.", error);
    cart = [];
  }
}

/* =========================================
   FOOD MENU
========================================= */

function getVisibleFoods() {
  return FOOD_ITEMS.filter(food => {
    const matchesCategory =
      activeCategory === "All" || food.category === activeCategory;

    const matchesSearch =
      (food.name + " " + food.category + " " + food.description)
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });
}

function renderFoods() {
  const grid = $("foodGrid");
  const foods = getVisibleFoods();

  $("menuTitle").textContent =
    activeCategory === "All" ? "Popular Food" : activeCategory;

  $("itemCount").textContent =
    foods.length + (foods.length === 1 ? " item" : " items");

  $("emptyState").hidden = foods.length !== 0;

  grid.innerHTML = foods.map(food => {
    const cartItem = cart.find(item => item.id === food.id);

    const button = cartItem
      ? `<div class="quantity-control">
           <button type="button" data-action="decrease" data-id="${food.id}" aria-label="Decrease ${escapeHTML(food.name)}">−</button>
           <span>${cartItem.qty}</span>
           <button type="button" data-action="increase" data-id="${food.id}" aria-label="Increase ${escapeHTML(food.name)}">+</button>
         </div>`
      : `<button type="button" class="add-button" data-action="add" data-id="${food.id}" aria-label="Add ${escapeHTML(food.name)} to cart">+</button>`;

    return `
      <article class="food-card">
        <div class="food-image-wrap">
          <img class="food-image"
               src="${food.image}"
               alt="${escapeHTML(food.name)}"
               loading="lazy"
               data-fallback="${food.emoji}">
          <span class="veg-mark" title="Vegetarian"></span>
        </div>
        <div class="food-info">
          <h3>${escapeHTML(food.name)}</h3>
          <p class="food-description">${escapeHTML(food.description)}</p>
          <div class="food-bottom">
            <span class="food-price">${money(food.price)}</span>
            ${button}
          </div>
        </div>
      </article>`;
  }).join("");

  grid.querySelectorAll("img[data-fallback]").forEach(img => {
    img.addEventListener("error", () => {
      if (img.dataset.failed) return;
      img.dataset.failed = "true";

      const placeholder = document.createElement("div");
      placeholder.className = "food-image food-placeholder";
      placeholder.style.display = "grid";
      placeholder.style.placeItems = "center";
      placeholder.style.fontSize = "55px";
      placeholder.textContent = img.dataset.fallback;

      img.replaceWith(placeholder);
    }, { once: true });
  });
}

/* =========================================
   CART OPERATIONS
========================================= */

function addToCart(id) {
  const food = FOOD_ITEMS.find(item => item.id === id);
  if (!food) return;

  const existing = cart.find(item => item.id === id);

  if (existing) {
    if (existing.qty >= 99) {
      showToast("Maximum quantity is 99.");
      return;
    }
    existing.qty++;
  } else {
    cart.push({
      id: food.id,
      name: food.name,
      price: food.price,
      image: food.image,
      qty: 1
    });
  }

  saveCart();
  renderFoods();
  renderCart();
  showToast(food.name + " added to cart.");
}

function changeQuantity(id, change) {
  const item = cart.find(item => item.id === id);
  if (!item) return;

  const newQuantity = item.qty + change;

  if (newQuantity <= 0) {
    cart = cart.filter(cartItem => cartItem.id !== id);
  } else if (newQuantity <= 99) {
    item.qty = newQuantity;
  }

  saveCart();
  renderFoods();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderFoods();
  renderCart();
  showToast("Item removed from cart.");
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function renderCart() {
  const cartItems = $("cartItems");
  const total = getCartTotal();
  const count = getCartCount();

  $("cartBadge").textContent = count;
  $("cartTitleCount").textContent = "(" + count + ")";
  $("subtotal").textContent = money(total);
  $("cartTotal").textContent = money(total);
  $("checkoutTotal").textContent = money(total);
  $("confirmTotal").textContent = money(total);

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <span>🛒</span>
        <h3>Your cart is empty</h3>
        <p>Add your favourite food to get started.</p>
      </div>`;
    return;
  }

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-row">
      <img class="cart-thumb"
           src="${item.image}"
           alt="${escapeHTML(item.name)}"
           loading="lazy">
      <div class="cart-product">
        <h3>${escapeHTML(item.name)}</h3>
        <p>${money(item.price * item.qty)}</p>
      </div>
      <div class="cart-actions">
        <button type="button" data-cart-action="decrease" data-id="${item.id}" aria-label="Decrease quantity">−</button>
        <span>${item.qty}</span>
        <button type="button" data-cart-action="increase" data-id="${item.id}" aria-label="Increase quantity">+</button>
        <button type="button" class="cart-remove" data-cart-action="remove" data-id="${item.id}">Remove</button>
      </div>
    </div>
  `).join("");
}

/* =========================================
   SEARCH AND CATEGORIES
========================================= */

$("categories").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;

  $("categories").querySelectorAll(".category").forEach(category => {
    category.classList.toggle("active", category === button);
  });

  renderFoods();
});

$("searchInput").addEventListener("input", event => {
  searchTerm = event.target.value.trim();
  $("clearSearch").style.display = searchTerm ? "block" : "none";
  renderFoods();
});

$("clearSearch").addEventListener("click", () => {
  $("searchInput").value = "";
  searchTerm = "";
  $("clearSearch").style.display = "none";
  renderFoods();
  $("searchInput").focus();
});

$("searchFocus").addEventListener("click", () => {
  $("searchInput").focus();
  window.scrollTo({
    top: $("searchInput").getBoundingClientRect().top + window.scrollY - 100,
    behavior: "smooth"
  });
});

/* =========================================
   EVENT DELEGATION
========================================= */

$("foodGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const id = button.dataset.id;

  if (button.dataset.action === "add") addToCart(id);
  if (button.dataset.action === "increase") changeQuantity(id, 1);
  if (button.dataset.action === "decrease") changeQuantity(id, -1);
});

$("cartItems").addEventListener("click", event => {
  const button = event.target.closest("[data-cart-action]");
  if (!button) return;

  const id = button.dataset.id;
  const action = button.dataset.cartAction;

  if (action === "increase") changeQuantity(id, 1);
  if (action === "decrease") changeQuantity(id, -1);
  if (action === "remove") removeFromCart(id);
});

$("cartShortcut").addEventListener("click", () => {
  $("cartSection").scrollIntoView({ behavior: "smooth", block: "start" });
});

$("continueShopping").addEventListener("click", () => {
  $("menuSection").scrollIntoView({ behavior: "smooth", block: "start" });
});

/* =========================================
   TOAST MESSAGE
========================================= */

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

/* =========================================
   ORDER CONFIRMATION MODAL
========================================= */

$("checkoutBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Please add food to your cart first.");
    return;
  }

  $("confirmTotal").textContent = money(getCartTotal());
  $("orderModal").hidden = false;
});

$("closeModal").addEventListener("click", () => {
  $("orderModal").hidden = true;
});

$("orderModal").addEventListener("click", event => {
  if (event.target === $("orderModal")) {
    $("orderModal").hidden = true;
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    $("orderModal").hidden = true;
  }
});

/* =========================================
   FIREBASE ORDER SUBMISSION
   Uses existing firebase.js
========================================= */

async function placeOrder() {
  if (orderInProgress) return;

  if (cart.length === 0) {
    showToast("Your cart is empty.");
    $("orderModal").hidden = true;
    return;
  }

  const db = window.db;
  const fb = window.fb;

  if (!db || !fb || typeof fb.addDoc !== "function") {
    showToast("Firebase is not ready. Please try again.");
    return;
  }

  const button = $("confirmOrderBtn");
  orderInProgress = true;
  button.disabled = true;
  button.textContent = "Placing order...";

  try {
    // Use current product prices, not prices supplied by the browser cart.
    const orderItems = cart.map(item => {
      const food = FOOD_ITEMS.find(f => f.id === item.id);

      if (!food) throw new Error("A food item is no longer available.");

      return {
        id: food.id,
        name: food.name,
        price: food.price,
        qty: Math.max(1, Math.min(99, Math.floor(Number(item.qty) || 1)))
      };
    });

    const total = orderItems.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );

    const tableNumber = $("tableNumber").value.trim();

    // No customer login or phone number is required.
    // Firestore rules must explicitly permit this write.
    const orderData = {
      items: orderItems,
      total: total,
      status: "Received",
      orderType: "Self Ordering",
      tableNumber: tableNumber,
      createdAt: fb.serverTimestamp(),
      updatedAt: fb.serverTimestamp()
    };

    await fb.addDoc(fb.collection(db, "orders"), orderData);

    cart = [];
    saveCart();
    renderFoods();
    renderCart();

    $("tableNumber").value = "";
    $("orderModal").hidden = true;
    showToast("Order placed successfully!");

  } catch (error) {
    console.error("Order submission failed:", error);

    if (error && error.code === "permission-denied") {
      showToast("Firebase security rules are blocking this order.");
    } else if (error && error.code === "unavailable") {
      showToast("Connection problem. Please try again.");
    } else {
      showToast("Order failed. Please check Firebase settings.");
    }
  } finally {
    orderInProgress = false;
    button.disabled = false;
    button.textContent = "Confirm Order";
  }
}

$("confirmOrderBtn").addEventListener("click", placeOrder);

/* =========================================
   INITIALIZATION
========================================= */

loadCart();
renderFoods();
renderCart();

console.log("Royal Dining Self Ordering initialized.");