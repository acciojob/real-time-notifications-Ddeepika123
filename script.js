//your JS code here. If required.
async function getEmployees() {
    try {
        const response = await fetch("employees.json");

        const employees = await response.json();

        employees.sort((a, b) => a.age - b.age);

        console.log(employees);
    } catch (error) {
        console.error("Error fetching employee data:", error);
    }
}

getEmployees();