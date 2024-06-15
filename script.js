const screen = document.querySelector(".screen");
const btn = document.querySelectorAll(".btn");

btn.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonPressed = button.textContent;

    if (button.id === "c") {
      screen.textContent = "0";
      return;
    }

    if (button.id === "delete") {
      if (screen.textContent.length === 1 || screen.textContent === "Error!") {
        screen.textContent = "0";
      } else {
        screen.textContent = screen.textContent.slice(0, -1);
      }
      return;
    }

    if (button.id === "equal") {
      try {
        const result = new Function("return " + screen.textContent)();
        if (isNaN(result) || !isFinite(result)) {
          throw new Error("Error!");
        }
        screen.textContent = result;
      } catch (error) {
        screen.textContent = "Error!";
      }
      return;
    }

    if (screen.textContent === "0" || screen.textContent === "Error!") {
      screen.textContent = buttonPressed;
    } else {
      screen.textContent += buttonPressed;
    }
  });
});
