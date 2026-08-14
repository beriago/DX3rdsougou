(function () {
  var STORAGE_KEY = "dx3rd_theme";
  function applyTheme(theme) {
    if (theme === "light") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }
  var saved = localStorage.getItem(STORAGE_KEY) || "light";
  applyTheme(saved);

  window.addEventListener("DOMContentLoaded", function () {
    var select = document.getElementById("themeSelect");
    if (!select) return;
    select.value = saved;
    select.addEventListener("change", function () {
      var value = select.value;
      applyTheme(value);
      localStorage.setItem(STORAGE_KEY, value);
    });
  });
})();
