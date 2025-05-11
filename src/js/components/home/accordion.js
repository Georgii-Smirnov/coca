export function useAccordion() {
  const items = document.querySelectorAll(".footer__item");
  items.forEach((item) => {
    const title = item.querySelector(".footer__item-title");
    title.addEventListener("click", () => {
      items.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("is-open");
        }
      });
      item.classList.toggle("is-open");
    });
  });
}
