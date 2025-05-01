export function useAccordion() {
  const items = document.querySelectorAll(".footer__item"); // выбираем все элементы .footer__item
  items.forEach((item) => {
    const title = item.querySelector(".footer__item-title"); // находим заголовок внутри каждого .footer__item

    title.addEventListener("click", () => {
      // Закрываем все другие элементы аккордеона
      items.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("is-open"); // убираем класс .is-open у других элементов
        }
      });

      // Переключаем класс .is-open для текущего элемента
      item.classList.toggle("is-open");
    });
  });
}
