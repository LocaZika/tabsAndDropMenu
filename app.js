const app = {
  /**
   * Querry selector
   * @param {string} selector Css selector
   * @returns Node element
   */
  element: (selector) => document.querySelector(selector),
  /**
   * Querry selector all
   * @param {string} selector Css selector
   * @returns Node list elements
   */
  elements: (selector) => document.querySelectorAll(selector),
  /*====Tabs====*/
  tabBtns: function () {
    return this.elements(".tabBtn");
  },
  tabContents: function () {
    return this.elements(".tabContent");
  },
  tabName: function () {
    return this.element(".tabsName");
  },
  addTabDialog: function () {
    return this.element(".addTabDialog");
  },
  formNewTab: function () {
    return this.element(".formNewTab");
  },
  newTabBtn: function () {
    return this.element("#newTabBtn");
  },
  tabsContainer: function () {
    return this.element(".tabsContainer");
  },
  inputNameTab: function () {
    return this.element("#nameNewTab");
  },
  inputTitleTab: function () {
    return this.element("#titleNewTab");
  },
  inputContentTab: function () {
    return this.element("#contentNewTab");
  },
  addTabBtn: function () {
    return this.element("#addTabBtn");
  },
  closeNewTabBtn: function () {
    return this.element("#closeTabBtn");
  },
  inputContentTab: function () {
    return this.element("#contentNewTab");
  },
  inputContentTab: function () {
    return this.element("#contentNewTab");
  },
  disableAddTabDialog: function () {
    return (this.addTabDialog().style.top = "-100%");
  },
  enableAddTabDialog: function () {
    return (this.addTabDialog().style.top = "0");
  },
  clickOutForm: function () {
    this.addTabDialog().addEventListener("click", () => {
      this.disableAddTabDialog();
    });
    this.formNewTab().addEventListener("click", (e) => {
      e.stopPropagation();
    });
  },
  btnEvent: function () {
    this.tabBtns().forEach((btn) => {
      btn.addEventListener("click", () => {
        this.tabContents().forEach((content) => {
          content.style.display = "none";
        });
        let tabId = btn.getAttribute("tabId");
        this.element(tabId).style.display = "block";
      });
    });
  },
  addNewTabEvent: function () {
    this.newTabBtn().addEventListener("click", () => {
      this.enableAddTabDialog();
    });
  },
  closeNewTabEvent: function () {
    this.closeNewTabBtn().addEventListener("click", () => {
      this.disableAddTabDialog();
    });
  },
  addTabEvent: function () {
    this.addTabBtn().addEventListener("click", () => {
      const btn = document.createElement("button");
      btn.className = "tabBtn";
      btn.setAttribute("tabId", `#tab${this.tabBtns().length}`);
      btn.innerText = this.inputNameTab().value;
      /**
       * ES6: $("#tabAddBtn").before(btn);
       */
      this.tabName().insertBefore(btn, this.tabName().children[this.tabBtns().length - 1]);
      const h2 = document.createElement("h2");
      h2.innerText = this.inputTitleTab().value;
      const p = document.createElement("p");
      p.innerText = this.inputContentTab().value;
      const tabContent = document.createElement("div");
      tabContent.id = `tab${this.tabBtns().length - 1}`;
      tabContent.className = "tabContent";
      tabContent.append(h2, p);
      this.tabsContainer().appendChild(tabContent);
      this.tabBtns();
      this.tabContents();
      this.btnEvent();
      this.disableAddTabDialog();
    });
  },
  /*====Dropdown====*/
  dropBtns: function () {
    return this.elements(".dropdownBtn");
  },
  dropItemsList: function () {
    return this.elements(".dropdownItems");
  },
  disableDropdown: function () {
    document.body.addEventListener("click", () => {
      this.dropItemsList().forEach((dropItem) => {
        dropItem.classList.remove("active");
      });
    });
  },
  dropBtnEvent: function () {
    this.dropBtns().forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        let dropMenuId = btn.getAttribute("dropMenuId");
        this.element(dropMenuId).classList.toggle("active");
      });
    });
  },
  start: function () {
    this.btnEvent();
    this.addNewTabEvent();
    this.closeNewTabEvent();
    this.addTabEvent();
    this.clickOutForm();
    this.disableDropdown();
    this.dropBtnEvent();
  },
};
app.start();
