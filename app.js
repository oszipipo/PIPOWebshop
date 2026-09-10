(function () {
  const grid = document.getElementById("product-grid");
  const overlay = document.getElementById("detail-overlay");
  const closeBtn = document.getElementById("detail-close");
  const imgEl = document.getElementById("detail-image");
  const nameEl = document.getElementById("detail-name");
  const priceEl = document.getElementById("detail-price");
  const descEl = document.getElementById("detail-desc");
  const buyBtn = document.getElementById("buy-button");

  let lastFocused = null;

  function renderGrid() {
    grid.innerHTML = "";
    PRODUCTS.forEach((product) => {
      const card = document.createElement("button");
      card.className = "product-card";
      card.type = "button";
      card.setAttribute("aria-haspopup", "dialog");
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="card-body">
          <p class="card-name">${product.name}</p>
          <p class="card-price">${product.price}</p>
        </div>
      `;
      card.addEventListener("click", () => openDetail(product));
      grid.appendChild(card);
    });
  }

  function openDetail(product) {
    lastFocused = document.activeElement;
    imgEl.src = product.image;
    imgEl.alt = product.name;
    nameEl.textContent = product.name;
    priceEl.textContent = product.price;
    descEl.textContent = product.description;
    buyBtn.href = product.affiliateLink;

    overlay.hidden = false;
    closeBtn.focus();
    document.body.style.overflow = "hidden";
  }

  function closeDetail() {
    overlay.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  closeBtn.addEventListener("click", closeDetail);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeDetail();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.hidden) closeDetail();
  });

  renderGrid();
})();
