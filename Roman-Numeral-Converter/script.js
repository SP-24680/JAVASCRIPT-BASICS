const number = document.getElementById("number");
const convertbtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
convertbtn.addEventListener("click", () => {
  document.getElementById("output").style.display = "block";
  if (number.value === "") {
    output.innerText = "Please enter a valid number";
  } else if (number.value < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (number.value > 3999) {
    output.innerHTML = "Please enter a number less than or equal to 3999";
  } else {
    const romanNumeral = convertToRomanNumeral(number.value);
    output.innerText = romanNumeral;
  }
});
function convertToRomanNumeral(num) {
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";
  for (const romanNumeral of romanNumerals) {
    while (num >= romanNumeral.value) {
      result += romanNumeral.numeral;
      num -= romanNumeral.value;
    }
  }
  return result;
}
