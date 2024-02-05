// Function for generating a random vacancy name
export function generateRandomVacancyName() {
    return "Vacancy_" + Math.floor(Math.random() * 1000);
}

// Function for generating a random amount
export function generateRandomAmount() {
    return (Math.random() * 1000).toFixed(2);
}

// Function for generating a random date
export function generateRandomDate() {
    const year = 2023;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
}