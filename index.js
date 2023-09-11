// JavaScript code to handle the form submission and display the booked ticket
const bookBtn = document.getElementById('btn1');
const fillForm = document.getElementById('form');
const ticketOutput = document.getElementById('ticketOutput');

bookBtn.addEventListener('click', function(event) {
    event.preventDefault();
    // Access form input values
    const selectedTicketType = document.getElementById('ticketType').value;
    const name = document.getElementById('name').value;
    const once = document.getElementById('once').value;
    const check = document.getElementById('check').value;
    const date = document.getElementById('date').value;
    // Check if all fields are filled
    if (selectedTicketType && once && check && date && name ) {
        // Construct a message with the booked ticket information
        const ticketInfo = `
            <h2>Ticket Booked</h2>
            <p><strong>Destination:</strong> ${name}</p>
            <p><strong>Destination:</strong> ${once}</p>
            <p><strong>Check in Date:</strong> ${check}</p>
            <p><strong>Check out Date:</strong> ${date}</p>
            <p><strong>Ticket Type:</strong> ${selectedTicketType}</p>
            <button id="ok" onclick="closeTicketInfo()">OK!</button>
        `;

        // Display the ticket information on the page
        ticketOutput.innerHTML = ticketInfo;
        ticketOutput.style.display = 'block';

        // Add an event listener to the "OK" button
        const okButton = document.getElementById('ok');
        okButton.addEventListener('click', function() {
            // Close the ticket output
            ticketOutput.style.display = 'none';

            // Clear the form inputs
            document.getElementById('name').value = '';
            document.getElementById('once').value = '';
            document.getElementById('check').value = '';
            document.getElementById('date').value = '';
        });
    } else {
        alert("Please fill out all fields before booking a ticket.");
    }
});

// Function to close the ticket information
function closeTicketInfo() {
    ticketOutput.style.display = 'none';
}
