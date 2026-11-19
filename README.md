# Maison Wigs — International Wig E-Commerce Store

**Maison Wigs** is a modern, multi-language and multi-currency e-commerce web application for selling wigs (for women, men, and children)[cite: 8]. **English is the primary language of the platform**, with built-in localization support (such as Czech)[cite: 1, 8] and dynamic currency switching (supporting major currencies alongside CZK)[cite: 1, 3, 8] to serve an international customer base.

The project is built as a responsive Single Page Application (SPA) featuring a gamified loyalty program, advanced product filtering, dark/light themes, and a seamless checkout flow[cite: 1, 2, 8].

---

## ✨ Key Features

1. **Multi-Language & Multi-Currency Support:**
   * **English-first interface** with quick language switching in the header and footer (e.g., EN / CZ)[cite: 1, 3].
   * **Multi-currency switcher** (supporting USD/EUR/CZK and automatic price recalculation across the catalog, cart, and loyalty program)[cite: 1, 3, 5, 8].

2. **Product Catalog & Smart Filtering[cite: 8]:**
   * Category navigation: *All*, *Women*, *Men*, *Kids*[cite: 8].
   * Multi-parameter filters: hair length (*Short*, *Bob*, *Medium*, *Long*), material (*Human Hair*, *Heat-resistant fiber*), and a dynamic price range slider[cite: 8].
   * Live search bar in the header and product sorting (e.g., by customer rating)[cite: 8].
   * Helpful buyer guidance widget (*"How to choose a color"*)[cite: 8].

3. **Product Details Modal[cite: 6, 7]:**
   * Interactive photo gallery with view switching (*Front* & *Back*) and hover-to-zoom functionality[cite: 6, 7].
   * Detailed specifications: color, length, material, cap construction, density (%), weight (g), hair length (cm), and care instructions[cite: 6, 7].
   * Customer reviews section featuring a *"Verified Purchase"* badge[cite: 6].

4. **Shopping Cart & Checkout Flow[cite: 1, 5]:**
   * Dynamic order calculation with a visual progress bar tracking eligibility for free shipping[cite: 1, 5].
   * Option to redeem accumulated loyalty centimeters for an instant discount directly at checkout[cite: 1].
   * Flexible delivery options (pick-up points, courier delivery, local pick-up)[cite: 1].
   * Support for international payment methods: Credit/Debit Cards (Visa, Mastercard), Apple Pay, Google Pay, Bank Transfer, and Cash on Delivery[cite: 3].

5. **User Dashboard & Gamified Loyalty Program[cite: 2, 4]:**
   * **"Your Hair is Growing":** Users earn `1 cm` of bonus length for every spending milestone, which can be converted into direct order discounts[cite: 2, 4].
   * Tiered loyalty levels with a visual progress bar (*Short* → *Bob* → *Medium* → *Long*) unlocking perks such as a welcome bonus, birthday gift, early access to new arrivals, and permanent free shipping[cite: 2, 3, 4].
   * **Referral System:** Personal promo code (e.g., `WIG-OLEK5`) with one-click copy — both the user and their invited friend receive +5 cm upon the friend's first purchase[cite: 2, 3, 4].

6. **Additional UX Enhancements:**
   * **Dark / Light Mode** theme switcher located in the top navigation bar[cite: 1, 4].
   * Floating consultation assistant widget (**"Get Advice on Choosing"**) in the bottom right corner[cite: 1, 8].
   * Wishlist functionality (favorite/like buttons on product cards)[cite: 8].

---

## 🛠 Tech Stack

The project is built with modern front-end technologies without unnecessary bloat:

* **JavaScript (ES6+)** — Core application logic (cart state management, multi-currency conversion, localization, filtering algorithms, and loyalty bonus calculations).
* **React** — UI library used to structure the application into independent, reusable **React components/modules** (Header, Product Card, Modal, Cart, User Account), making the codebase easy to maintain and scale.
* **CSS Modules (`*.module.css`)** — Scoped styling approach where CSS class names are compiled locally per component. This prevents style collisions and ensures changes in one module never accidentally break the layout of another.

---

## 🚀 Getting Started (Local Development)

To run this project locally on your machine for development or testing:

1.
   ```bash
   git clone <your-repository-url>
   cd maison-wigs
   npm install
   npm run dev
