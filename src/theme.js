(function () {
  var storageKey = "technova-theme";
  var root = document.documentElement;

  function getPreferredTheme() {
    var savedTheme = localStorage.getItem(storageKey);
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
  }

  function toggleTheme(button) {
    var nextTheme =
      root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem(storageKey, nextTheme);
    if (button) {
      button.textContent = nextTheme === "dark" ? "☀" : "☾";
      button.setAttribute(
        "aria-label",
        "Switch to " + (nextTheme === "dark" ? "light" : "dark") + " mode",
      );
      button.setAttribute(
        "title",
        "Switch to " + (nextTheme === "dark" ? "light" : "dark") + " mode",
      );
    }
  }

  applyTheme(getPreferredTheme());

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.createElement("button");
    button.className = "theme-toggle-btn";
    button.type = "button";
    button.textContent = root.getAttribute("data-theme") === "dark" ? "☀" : "☾";
    button.setAttribute(
      "aria-label",
      "Switch to " +
        (root.getAttribute("data-theme") === "dark" ? "light" : "dark") +
        " mode",
    );
    button.setAttribute(
      "title",
      "Switch to " +
        (root.getAttribute("data-theme") === "dark" ? "light" : "dark") +
        " mode",
    );
    button.addEventListener("click", function () {
      toggleTheme(button);
    });
    document.body.appendChild(button);
  });
})();
