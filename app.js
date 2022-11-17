const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
/**
 * Tabs
 */
const tabBtns = $$(".tabBtn");
const tabContents = $$(".tabContent");
tabBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    tabContents.forEach((content) => {
      content.style.display = "none";
    });
    let tabId = btn.getAttribute("tabId");
    $(tabId).style.display = "block";
  });
});
/**
 * Dropdown
 */
const dropBtns = $$(".dropdownBtn");
const dropItemsList = $$(".dropdownItems");
dropBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    dropItemsList.forEach((dropItems) => {
      if (dropItems.classList.contains("active")) {
        dropItems.classList.remove("active");
      } else {
        dropItems.classList.add("active");
      }
    });
  });
});
