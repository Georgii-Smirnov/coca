export function useAccordion() {
  const items = document.querySelectorAll(".footer__item");
  items.forEach((item) => {
    const title = item.querySelector(".footer__item-title");
    title.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      // Закрываем все элементы
      items.forEach((el) => el.classList.remove("is-open"));
      // Если кликнули по уже открытому — не открываем его снова
      if (!isOpen) {
        item.classList.add("is-open");
      }
    });
  });
}
