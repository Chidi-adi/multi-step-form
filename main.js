//This program automates the multi-step form.
//It toggles between the different pages of the form.
//It also calculates the prices of invidual plan selected.
//Author: Chidiadi E. Nwosu

/**************Declaration *******************/

const forms = document.querySelectorAll(".form");

/**************UI Class *******************/
class UI {
  static highlight_page(which_sideBar) {
    document.querySelectorAll(".sideBar").forEach((element) => {
      element.children[0].classList.remove("active-bar");
    });
    document
      .querySelector(which_sideBar)
      .children[0].classList.add("active-bar");
  }

  static clear() {
    forms.forEach((form) => {
      form.classList.add("hide");
    });
  }
}

/**************Next Page*******************/
const next_button = document.querySelectorAll(".next");
for (let index = 0; index < next_button.length; index++) {
  next_button[index].addEventListener("click", (e) => {
    e.preventDefault();
    UI.clear();
    if (next_button[index].classList.contains("btn-next-1")) {
      forms[1].classList.remove("hide");
      UI.highlight_page(".sideBar-2");
    }

    if (next_button[index].classList.contains("btn-next-2")) {
      forms[2].classList.remove("hide");
      UI.highlight_page(".sideBar-3");
    }

    if (next_button[index].classList.contains("btn-next-3")) {
      forms[3].classList.remove("hide");
      UI.highlight_page(".sideBar-4");
    }

    if (next_button[index].classList.contains("btn-next-4")) {
      forms[4].classList.remove("hide");
      UI.highlight_page(".sideBar-4");
    }
  });
}

/**************Previous Page*******************/
const back_button = document.querySelectorAll(".btn-back");
for (let index = 0; index < back_button.length; index++) {
  back_button[index].addEventListener("click", (e) => {
    e.preventDefault();
    UI.clear();
    if (back_button[index].classList.contains("btn-back-2")) {
      forms[0].classList.remove("hide");
      UI.highlight_page(".sideBar-1");
    }

    if (back_button[index].classList.contains("btn-back-3")) {
      forms[1].classList.remove("hide");
      UI.highlight_page(".sideBar-2");
    }

    if (back_button[index].classList.contains("btn-back-4")) {
      forms[2].classList.remove("hide");
      UI.highlight_page(".sideBar-3");
    }
  });
}

/**************Jump Page*******************/
sideBars = document.querySelectorAll(".sideBar");
for (let index = 0; index < sideBars.length; index++) {
  sideBars[index].addEventListener("click", () => {
    UI.clear();

    if (sideBars[index].classList.contains("sideBar-1")) {
      forms[0].classList.remove("hide");
      UI.highlight_page(".sideBar-1");
    }
    if (sideBars[index].classList.contains("sideBar-2")) {
      forms[1].classList.remove("hide");
      UI.highlight_page(".sideBar-2");
    }
    if (sideBars[index].classList.contains("sideBar-3")) {
      forms[2].classList.remove("hide");
      UI.highlight_page(".sideBar-3");
    }
    if (sideBars[index].classList.contains("sideBar-4")) {
      forms[3].classList.remove("hide");
      UI.highlight_page(".sideBar-4");
    }
  });
}
