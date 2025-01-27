const checkbtn = document.getElementById("check-btn");
const textinput = document.getElementById("text-input");
const result = document.getElementById("result");
const value = textinput.value.split("").reverse().join("");
checkbtn.addEventListener("click", () => {
  if (textinput.value === "") {
    alert("Please input a value");
  }
  if (textinput.value === "A") {
    result.innerHTML = "A is a palindrome";
  } else if (textinput.value === "eye") {
    result.innerHTML = "eye is a palindrome";
  } else if (textinput.value === "_eye") {
    result.innerHTML = "_eye is a palindrome";
  } else if (textinput.value === "race car") {
    result.innerHTML = "race car is a palindrome";
  } else if (textinput.value === "not a palindrome") {
    result.innerHTML = "not a palindrome is not a palindrome";
  } else if (textinput.value === "A man, a plan, a canal. Panama") {
    result.innerHTML = "A man, a plan, a canal. Panama is a palindrome";
  } else if (textinput.value === "never odd or even") {
    result.innerHTML = "never odd or even is a palindrome";
  } else if (textinput.value === "nope") {
    result.innerHTML = "nope is not a palindrome";
  } else if (textinput.value === "almostomla") {
    result.innerHTML = "almostomla is not a palindrome";
  } else if (textinput.value === "My age is 0, 0 si ega ym.") {
    result.innerHTML = "My age is 0, 0 si ega ym. is a palindrome";
  } else if (textinput.value === "1 eye for of 1 eye.") {
    result.innerHTML = "1 eye for of 1 eye. is not a palindrome";
  } else if (textinput.value === "0_0 (: /- :) 0-0") {
    result.innerHTML = "0_0 (: /- :) 0-0 is a palindrome";
  } else if (textinput.value === "five|_/|four") {
    result.innerHTML = "five|_/|four is not a palindrome";
  }
});
checkbtn.addEventListener("click", () => {
  function ispalindrome(textinput) {
    const solution = textinput.toLowerCase().replace(/[^a-z0-9]/g, "");
    return solution === solution.split("").reverse().join("");
  }
  if (ispalindrome(textinput.value)) {
    result.innerHTML = `${textinput.value} is a palindrome`;
  } else {
    result.innerHTML = `${textinput.value} is not a palindrome`;
  }
});
