  // Function to display a initial message
  function help() {
    alert("You must change the calling function at the end of the code");
  }

  // Function to get a valid number from the user
  function getUserNumber(promptMessage) {
    let input = prompt(promptMessage);
    let parsedNumber = parseInt(input);
    if (Number.isNaN(parsedNumber)) {
      alert("Invalid input. Please enter a number.");
      return getUserNumber(promptMessage);
    }
    return parsedNumber;
  }

  // Function to add 7 to numbers selected by the user
  function add7() {
    let number = getUserNumber("Enter the number you wanna add 7 to:");
    if (number !== null) {
      let result = number + 7;
      alert(result);
    }
  }

  // Function to multiply two numbers selected by the user
  function multiply() {
    let firstNumber = getUserNumber("Enter the selected first number to multiply:");
    let secondNumber = getUserNumber("Enter the second one:");
    if (firstNumber !== null && secondNumber !== null) {
      let result = firstNumber * secondNumber;
      alert(result);
    }
  }
  
  // Function to capitalize each word of a phrase selected by the user
  function capitalizeAnyWord() {
    let words = prompt("Enter the string you want to capitalize each word");
    let capitalizeStrings = (str) =>
      str[0].toUpperCase() + 
      str.slice(1).toLowerCase();
    let separatedWords = words.split(' ').map(capitalizeStrings).join(' ');
    alert(separatedWords);
  }

  // Function to capitalize the first letter of a phrase selected by the user
  function capitalize() {
    let words = prompt("Enter the phrase you want to capitalize the first word");
    let capitalizeWord = words[0].toUpperCase() + words.slice(1).toLowerCase();
    alert(capitalizeWord);
  }

  // Function to display the last letter of a phrase selected by the user
  function lastLetter() {
    let phrase = prompt("Enter the phrase you want to know the last letter of")
    let lastLetter = phrase.slice(-1);
    if (lastLetter == " ") {
      alert("The last letter is blank")
    } else { 
      alert(lastLetter) 
    }
  }

// Calling the initial help function
help()