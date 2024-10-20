window.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".input-swatch.variant-selector")
    .forEach((variantSelector) => {
      variantSelector.addEventListener("click", (e) => {
        const label = e.target.closest("label");

        if (label) {
          const variantId = label.getAttribute("data-variant-id");

          const url = new URL(window.location.href);
          url.searchParams.set("variant", variantId);
          window.history.pushState({}, "", url);
        }
      });
    });
});

window.addEventListener("abra:cart:changed", async () => {

  window.monster_refresh();

  const response = await fetch(
    window.Shopify.routes.root + "?sections=ajax-cart,ajax-cart-button"
  );

  if (response.ok) {
    const sections = await response.json();

    document.querySelector("#shopify-section-ajax-cart-button").innerHTML = sections["ajax-cart-button"];

    window.EventBus.emit("cart:updated", {
      sections,
    });
  }
});
