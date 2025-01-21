const container = document.querySelector(".container");
const input = document.querySelector("input");
const btn = document.querySelector("button");
let colorHex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f"];

btn.addEventListener("click", () => {
  let divSize = input.value;

  if (divSize < 100 && divSize > 0) {
    const squareSize = Math.floor(960 / divSize) - 4;

    container.innerHTML = "";
    for (let i = 0; i < divSize * divSize; i++) {
      const div = document.createElement("div");
      div.style.width = `${squareSize}px`;
      div.style.height = `${squareSize}px`;
      div.setAttribute("class", "div");
      container.append(div);
    }

    const div = document.querySelectorAll(".div");

    div.forEach((divv) => {
      divv.addEventListener("mouseover", () => {
        let color = "#";

        for (let i = 0; i < 6; i++) {
          let rndomIndex = Math.floor(Math.random() * colorHex.length);
          let letterColor = colorHex[rndomIndex];
          color += letterColor;
        }
        divv.style.backgroundColor = color;
      });
    });
  }
});
