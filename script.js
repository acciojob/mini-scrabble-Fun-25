//your code here
// Get the textbox and the h3 element
const evaluatedText = document.getElementById("evaluatedText");
const letterCount = document.getElementById("letterCount");

// Add event listener to the textbox
evaluatedText.addEventListener("input", updateLetterCount);

// Function to update the letter count
function updateLetterCount() {
  const text = evaluatedText.value;
  const count = text.length;
  letterCount.textContent = count;
}
