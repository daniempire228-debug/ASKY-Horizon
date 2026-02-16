// Script for demo interactivity

// Function to display the current date and time
function displayDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit',
                     hour: '2-digit', minute: '2-digit', second: '2-digit',
                     timeZone: 'UTC', hour12: false };
    const formattedDate = now.toLocaleString('sv-SE', options).replace(' ', ' T');
    console.log(`Current Date and Time (UTC): ${formattedDate}`);
}

// Call the function every second
setInterval(displayDateTime, 1000);