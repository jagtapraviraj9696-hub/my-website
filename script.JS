function showMessage() {
    alert("Welcome to EcoSmartVillage! Together, let's build a cleaner and greener future.");
}
function showMessage() {
    alert("Welcome to EcoSmartVillage! Together, let's build a cleaner and greener future.");
}

function calculateWater() {
    let members = document.getElementById("members").value;

    if (members == "") {
        document.getElementById("result").innerHTML = "Please enter the number of family members.";
        return;
    }

    let water = members * 135;

    document.getElementById("result").innerHTML =
        "Estimated daily water requirement: " + water + " Litres";
}
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}