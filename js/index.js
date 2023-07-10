const calculator = document.querySelector(".calc");
const screen = document.querySelector(".calc-display");
const btnNumbers = calculator.querySelectorAll(".calc-num");
const btnClear = calculator.querySelector(".calc-clear");
const btnMemory = calculator.querySelectorAll(".calc-mem");
const btnOperators = calculator.querySelectorAll(".calc-opr");
// console.log(btnNumbers);
// console.log(screen.value);

// Função para coletar values dos btn e adicionar a tela.

btnNumbers.forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    // if (screen.value === "0") {
    //   screen.value = "";
    // }
    const value = charKeyBtn.dataset.value;
    screen.value += value;
  });
});

// Função Clear
// btnClear.addEventListener("click", function () {
//   screen.value = "";
// });

//Funções Memory
// console.log(btnMemory);

btnMemory.forEach(function (charKeyBtn) {
  const memKey = charKeyBtn.dataset.value;

  charKeyBtn.addEventListener("click", function () {
    switch (memKey) {
      case "C":
        screen.value = "";
        break;

      case "+/-":
        const convert = parseFloat(screen.value) * -1;
        // console.log(convert);
        screen.value = convert;
        break;

      case "%":
        const percent = parseFloat(screen.value) / 100;
        screen.value = percent;
    }
  });
});

let numSlot1 = "";
let numSlot2 = "";
let opr = "";
let result = "";

// Controle de Operações

btnOperators.forEach(function (charKeyBtn) {
  const oprKey = charKeyBtn.dataset.value;

  charKeyBtn.addEventListener("click", function () {
    switch (oprKey) {
      case "/":
        numSlot1 = parseFloat(screen.value);
        console.log(numSlot1);
        screen.value = "";
        opr = "/";
        console.log(opr);
        break;
      case "*":
        numSlot1 = parseFloat(screen.value);
        console.log(numSlot1);
        screen.value = "";
        opr = "*";
        break;
      case "-":
        numSlot1 = parseFloat(screen.value);
        console.log(numSlot1);
        screen.value = "";
        opr = "-";
        break;
      case "+":
        numSlot1 = parseFloat(screen.value);
        console.log(numSlot1);
        screen.value = "";
        opr = "+";
        break;
      case "=":
        numSlot2 = parseFloat(screen.value);
        console.log(numSlot1);
        console.log(numSlot2);
        console.log(opr);

        switch (opr) {
          case "/":
            result = numSlot1 / numSlot2;
            screen.value = result;
            break;

          case "*":
            result = numSlot1 * numSlot2;
            screen.value = result;
            break;

          case "-":
            result = numSlot1 - numSlot2;
            screen.value = result;
            break;

          case "+":
            result = numSlot1 + numSlot2;
            screen.value = result;
            break;
        }
    }
  });
});
