// Welcome Message
function showMessage() {
    alert("🌿 Welcome to EcoSmartVillage!\nTogether let's build a cleaner and greener future.");
}

// Water Calculator
function calculateWater() {

    let members = document.getElementById("members").value;

    if (members === "") {
        document.getElementById("result").innerHTML =
            "Please enter the number of family members.";
        return;
    }

    let water = members * 135;

    document.getElementById("result").innerHTML =
        "Estimated Daily Water Requirement: " + water + " Litres";
}

// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-
mode");
}

// Live Search
const sections = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Objectives", id: "objectives" },
    { name: "Benefits", id: "benefits" },
    { name: "Water", id: "water" },
    { name: "Waste", id: "waste" },
    { name: "Farming", id: "farming" },
    { name: "Energy", id: "energy" },
    { name: "Calculator", id: "calculator" },
    { name: "Feedback", id: "feedback" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" }
];

function liveSearch() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    let resultBox = document.getElementById("searchResults");

    resultBox.innerHTML = "";

    if (input === "") {
        resultBox.style.display = "none";
        return;
    }

    let found = false;

    sections.forEach(function(item){

        if(item.name.toLowerCase().includes(input)){

            found = true;

            let div = document.createElement("div");

            div.innerHTML = item.name;

            div.onclick = function(){

                document.getElementById(item.id).scrollIntoView({
                    behavior:"smooth"
                });

                resultBox.style.display = "none";
                document.getElementById("searchInput").value = "";

            };

            resultBox.appendChild(div);

        }

    });

    if(found){
        resultBox.style.display = "block";
    }else{
        resultBox.style.display = "none";
    }

}