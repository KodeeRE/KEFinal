function generateMealPlan() {
    // Get user input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const goal = document.getElementById('goal').value;
    const meal1 = document.getElementById('meal1').value;
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    // Generate new page content
    const content = `
        <h1>Meal Plan for ${name}</h1>
        <h2>Email: ${email}</h2>
        <p>Goal for the Week: ${goal}</p>

        <h2>Meal Plan:</h2>
        <p>Breakfast: ${meal1}</p>
        <!-- Repeat for other meals... -->
    `;

    // Open a new window and write content
    const newWindow = window.open();
    newWindow.document.write(content);
}

function clearMealPlan() {
    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('goal').value = '';
    document.getElementById('meal1').value = '';
    // Repeat for other meals...
}

function printOrDownload() {
    // You can implement print or download functionality here
}

function isValidEmail(email) {
    // You can implement a simple email validation here
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
