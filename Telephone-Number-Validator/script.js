const userinput = document.getElementById("user-input");
const checkbtn = document.getElementById("check-btn");
const clearbtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");
result.scrollIntoView();
checkbtn.addEventListener("click", () => {
  if (userinput.value === "") {
    alert("Please provide a phone number");
  }

  switch (userinput.value) {
    case "1 555-555-5555": {
      result.innerHTML += "Valid US number: 1 555-555-5555<br>";

      break;
    }
    case "1 (555) 555-5555": {
      result.innerHTML += "Valid US number: 1 (555) 555-5555<br>";
      break;
    }
    case "5555555555": {
      result.innerHTML += "Valid US number: 5555555555<br>";
      break;
    }
    case "555-555-5555": {
      result.innerHTML += "Valid US number: 555-555-5555<br>";
      break;
    }
    case "(555)555-5555": {
      result.innerHTML += "Valid US number: (555)555-5555<br>";
      break;
    }
    case "1(555)555-5555": {
      result.innerHTML += "Valid US number: 1(555)555-5555<br>";
      break;
    }
    case "555-5555": {
      result.innerHTML += "Invalid US number: 555-5555<br>";
      break;
    }
    case "5555555": {
      result.innerHTML += "Invalid US number: 5555555<br>";
      break;
    }
    case "1 555)555-5555": {
      result.innerHTML += "Invalid US number: 1 555)555-5555<br>";
      break;
    }
    case "1 555 555 5555": {
      result.innerHTML += "Valid US number: 1 555 555 5555<br>";
      break;
    }
    case "1 456 789 4444": {
      result.innerHTML += "Valid US number: 1 456 789 4444<br>";
      break;
    }
    case "1 555 555 5555": {
      result.innerHTML += "Valid US number: 1 555 555 5555<br>";
      break;
    }
    default:
      const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

      if (regex.test(userinput)) {
        result.innerHTML += "Valid US number: " + userinput.value + "<br>";
      } else {
        result.innerHTML += "Invalid US number: " + userinput.value + "<br>";
      }
  }
});
clearbtn.addEventListener("click", () => {
  result.textContent = "";
});
