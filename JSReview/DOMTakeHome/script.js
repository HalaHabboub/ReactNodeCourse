const monthSelect = document.getElementById("months");
const monthTitle = document.querySelector("h1");
const daysList = document.querySelector("ul");

const getDaysInMonth = (month, year = new Date().getFullYear()) => {
    return new Date(year, month, 0).getDate(); // month is 1-based
};

// 3. Create an arrow function to generate the calendar
const createCalendar = (monthName) => {
    // Map month names to their numbers
    const months = {
        January: 1, February: 2, March: 3, April: 4,
        May: 5, June: 6, July: 7, August: 8,
        September: 9, October: 10, November: 11, December: 12
    };

    // Get days count
    const daysInMonth = getDaysInMonth(months[monthName]);

    // Update title
    monthTitle.textContent = monthName;

    // Clear existing days
    daysList.innerHTML = "";

    // Create list items for each day
    for (let i = 1; i <= daysInMonth; i++) {
        const li = document.createElement("li");
        li.textContent = i;
        daysList.appendChild(li);
    }
};

monthSelect.addEventListener("change", (e) => {
    createCalendar(e.target.value);
});

window.addEventListener("DOMContentLoaded", () => {
    monthSelect.value = "January";
    createCalendar("January");
});
