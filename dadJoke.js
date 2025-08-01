//if we use id="jokeBox" instead of id="text", it will use display:flex and all other properties, so, setup and punchline would be displayed side-by-side

// const jokeBox = document.getElementById("jokeBox");
const text = document.getElementById("text"); 
    
async function joke() {
    // jokeBox.textContent = 'Wait a sec...🕑';
    text.textContent = 'Wait a sec...🕑';

    try {
        const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
        const json = await response.json();
        console.log(json);
        // jokeBox.innerHTML = `${json.setup} <br> <strong class="text-warning">${json.punchline}</strong>`;
        text.innerHTML = `${json.setup} <br> <strong class="text-warning">${json.punchline}</strong>`;
    } 
    
    catch (error) {
        // jokeBox.innerHTML = `😞 Failed to get a joke. Please try again.`;
        text.innerHTML = `😞 Failed to get a joke. Please try again.`;
    } 
    
    finally {
        console.log("Execution complete.");
    }
}

jokeButton.addEventListener('click', joke); //('eventType', callback function)
