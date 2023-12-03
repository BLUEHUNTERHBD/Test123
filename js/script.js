function profile() {
    var username = document.getElementById("username").value;
    var fullname = document.getElementById("fullname").value;
    var country = document.getElementById("country").value;

    var userProfile = {
        username: username,
        fullname: fullname,
        country: country
    }

    var jsonString = JSON.stringify(userProfile);
    localStorage.setItem("info", JSON.stringify(userProfile));

    var jsonStringFromLocalStorage = localStorage.getItem("info");
    var retrievedUserProfile = JSON.parse(jsonStringFromLocalStorage);

    alert("Info Saved!");
}

function navigateToUpdateProfile() {
    window.location.href = 'updateProfile.html';
}

function navigateToAccount() {
    window.location.href = 'account.html';
}

function updateProfile() {
    var newUsername = document.getElementById('update-username').value;
    var newFullname = document.getElementById('update-fullname').value;
    var newCountry = document.getElementById('update-country').value;

    var updatedUserProfile = {
        username: newUsername,
        fullname: newFullname,
        country: newCountry
    };

    localStorage.setItem('info', JSON.stringify(updatedUserProfile));

    alert("Profile information updated!");
}

function navigateToMain() {
    window.location.href = 'Startup.html';
}

function calculatePercentage() {
    var percentage = parseFloat(document.getElementById('percentage').value);
    var fullAmount = parseFloat(document.getElementById('full-amount').value);

    if (isNaN(percentage) || isNaN(fullAmount)) {
        alert("Please enter valid numeric values for percentage and full amount.");
        return;
    }

    var calculatedPercentage = (percentage / 100) * fullAmount;
    alert(`Calculated Percentage: ${calculatedPercentage}`);
}

function saveGoal() {
    // Get input values
    const goalName = document.getElementById('goalName').value;
    const goalAmount = document.getElementById('goalAmount').value;
    const goalType = document.getElementById('goalType').value;
    const dueDate = document.getElementById('dueDate').value;
    const currentSavings = document.getElementById('currentSavings').value;
    const completed = document.getElementById('completed').value;

    // Create a goal object
    const goal = {
        name: goalName,
        amount: goalAmount,
        type: goalType,
        date: dueDate,
        savings: currentSavings,
        completed: completed
    };

    // Check if goals array exists in local storage
    let goals = JSON.parse(localStorage.getItem('goals')) || [];

    // Add the new goal to the array
    goals.push(goal);

    // Save the updated goals array to local storage
    localStorage.setItem('goals', JSON.stringify(goals));

    // Notify the user
    alert(' Your Goal information has been saved!');
}


if (username) { const username = localStorage.getItem('username');

        // If username is set, display welcome message
        alert(`Welcome to the Goals and Wishes Savings App!`);
        document.body.innerHTML = `
            <h1>Savings App</h1>
            <p>Welcome, ${username}!</p>
        `;
    } else {
        // If username is not set, display button to set username
		alert(`Welcome to the Goals and Wishes Savings App!`);
        document.body.innerHTML = `
            
            <button onclick="redirectToSetUsername()">Set Username</button>
	`;
	}
	
	function redirectToSetUsername() {
        // Direct to set profile
        window.location.href = 'profile.html';
    } 

document.addEventListener('DOMContentLoaded', displayGoals);

function displayGoals() {
    // Get goals from local storage
    const goals = JSON.parse(localStorage.getItem('goals')) || [];

    // Get the goal list element
    const goalList = document.getElementById('goalList');

    // Display each goal in the list
    goals.forEach(goal => {
        const li = document.createElement('li');
        li.textContent = `Name: ${goal.name}, Amount: ${goal.amount}, Type: ${goal.type}, Due Date: ${goal.date}, Current Savings: ${goal.savings}, Completed: ${goal.completed}`;
        goalList.appendChild(li);
    });
}


function saveWishlist() {
    const wishName = document.getElementById('wishName').value;
    const wishAmount = document.getElementById('wishAmount').value;
    const wishType = document.getElementById('wishType').value;
    const wishdueDate = document.getElementById('wishdueDate').value;
    const CurrentSavings = document.getElementById('CurrentSavings').value;
    const completionstatus = document.getElementById('completionstatus').value;

    const wish = {
        Wname: wishName,
        Wamount: wishAmount,
        Wtype: wishType,
        Wdate: wishdueDate,
        Wsavings: CurrentSavings,
        Wcompleted: completionstatus,
    };

    let wishes = JSON.parse(localStorage.getItem('wishes')) || [];

    wishes.push(wish);

    localStorage.setItem('wishes', JSON.stringify(wishes));

    // Notify the user
    alert('Wishlist information has saved!');
}

document.addEventListener('DOMContentLoaded', displayWishes);

function displayWishes() {
    const wishes = JSON.parse(localStorage.getItem('wishes')) || [];
    const wishList = document.getElementById('WishList');

    wishes.forEach(wish => {
        const li = document.createElement('li');
        li.textContent = `Name: ${wish.Wname}, Amount: ${wish.Wamount}, Type: ${wish.Wtype}, Due Date: ${wish.Wdate}, Current Savings: ${wish.Wsavings}, Completed: ${wish.Wcompleted}`;
        wishList.appendChild(li);
    });
}

// Function to format currency
function formatCurrency(amount) {
    // Implement your logic to format currency here, for example:
    return '$' + amount.toFixed(2); // Assuming 'amount' is a number
}
