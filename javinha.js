document.addEventListener("DOMContentLoaded", () => {
    const darkModeStorage = localStorage.getItem("dark-mode");
    const html = document.querySelector("html");
    const inputDarkMode = document.getElementById("input-dark-mode");
  
    if (darkModeStorage) {
      html.setAttribute("dark", "true");
    }
  
    inputDarkMode.addEventListener("change", () => {
      if (inputDarkMode.checked) {
        html.setAttribute("dark", "true");
        localStorage.setItem("dark-mode", true);
      } else {
        html.removeAttribute("dark");
        localStorage.removeItem("dark-mode");
      }
    });
  });
  
  window.onload = function () {
    var elementBody = document.querySelector('body');
    var elementBtnIncreaseFont = document.getElementById('increase-font');
    var elementBtnDecreaseFont = document.getElementById('decrease-font');
    // Padrão de tamanho, equivale a 100% do valor definido no Body
    var fontSize = 100;
    // Valor de incremento ou decremento, equivale a 10% do valor do Body
    var increaseDecrease = 10;
  
    // Evento de click para aumentar a fonte
    elementBtnIncreaseFont.addEventListener('click', function (event) {
        fontSize = fontSize + increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });
  
    // Evento de click para diminuir a fonte
    elementBtnDecreaseFont.addEventListener('click', function (event) {
        fontSize = fontSize - increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });
  }