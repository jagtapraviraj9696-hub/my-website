// १. वॉटर कॅल्क्युलेटर
function calculateWater() {
    let members = document.getElementById("members").value;
    if (members == "" || members <= 0) {
        document.getElementById("result").innerHTML = "कृपया वैध सदस्य संख्या टाका.";
        return;
    }
    document.getElementById("result").innerHTML = "💧 अंदाजित दैनिक पाणी गरज: " + (members * 135) + " लिटर";
}

// २. वीज बिल कॅल्क्युलेटर
function calculateBill() {
    let units = document.getElementById("units").value;
    if (units == "" || units <= 0) {
        document.getElementById("billResult").innerHTML = "कृपया वैध युनिट्स टाका.";
        return;
    }
    document.getElementById("billResult").innerHTML = "⚡ अंदाजित वीज बिल: ₹" + (units * 8);
}

// ३. कार्बन फूटप्रिंट कॅल्क्युलेटर
function calculateCarbon() {
    let units = document.getElementById("carbonUnits").value;
    if (units == "" || units <= 0) {
        document.getElementById("carbonResult").innerHTML = "कृपया वैध युनिट्स टाका.";
        return;
    }
    document.getElementById("carbonResult").innerHTML = "🌍 अंदाजित कार्बन उत्सर्जन: " + (units * 0.82).toFixed(2) + " kg CO₂ / महिना";
}

// ४. क्विझ फंक्शन
function checkQuiz() {
    let score = 0;
    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');

    if(q1) score += Number(q1.value);
    if(q2) score += Number(q2.value);
    if(q3) score += Number(q3.value);

    document.getElementById("quizResult").innerHTML = "🎉 तुमचा स्कोअर: " + score + " / 3";
}

// ५. इतर फंक्शन्स
function increaseTree() {
    let count = parseInt(document.getElementById("treeNumber").innerHTML) + 1;
    document.getElementById("treeNumber").innerHTML = count;
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

function showMessage() {
    alert("🌿 EcoSmartVillage मध्ये तुमचे स्वागत आहे!");
}

function toggleChat() {
    const chat = document.getElementById("chatBox");
    chat.style.display = (chat.style.display === "block") ? "none" : "block";
}
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}
