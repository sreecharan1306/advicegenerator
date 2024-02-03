let quote = document.getElementsByClassName("quote");
const dice=document.getElementById("dice");

dice.addEventListener("click",newquote);
function newquote() {
    // Fetch advice from the API
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            // Access the advice from the JSON response
            const advice = data.slip.advice;
            let m = `\" ${advice} \"`
            quote[0].innerText = m;
            // Log the advice to the console (you can use it as needed)
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Error fetching advice:', error.response);
        });

}
newquote();