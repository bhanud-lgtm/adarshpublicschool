// Smooth scrolling

document.querySelectorAll("nav a").forEach(function(link) {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Admission button

document.querySelectorAll(".btn").forEach(function(button) {

    button.addEventListener("click", function() {

        if (button.textContent.includes("Admission")) {
            alert("Admissions are open! Please contact the school for more information.");
        }

    });

});
// RESULTS

document.getElementById("resultBtn").addEventListener("click", function() {

    const rollNumber =
        document.getElementById("rollNumber").value.trim();

    const resultMessage =
        document.getElementById("resultMessage");

    if (rollNumber === "") {
        resultMessage.textContent =
            "Please enter your roll number.";
        return;
    }

    resultMessage.textContent =
        "Result for Roll No. " + rollNumber +
        " will be available soon.";

});
// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", function() {
    nav.classList.toggle("active");
});
const admissionForm = document.getElementById("admissionForm");

admissionForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const student = document.getElementById("studentName").value.trim();
    const parent = document.getElementById("parentName").value.trim();
    const className = document.getElementById("className").value;
    const phone = document.getElementById("parentPhone").value.trim();

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    const schoolWhatsApp = "919876543210";

    const message =
        "🎓 *New Admission Enquiry*%0A%0A" +
        "*Student Name:* " + encodeURIComponent(student) + "%0A" +
        "*Parent Name:* " + encodeURIComponent(parent) + "%0A" +
        "*Class:* " + encodeURIComponent(className) + "%0A" +
        "*Mobile:* " + encodeURIComponent(phone);

    const whatsappURL =
        "https://wa.me/" + schoolWhatsApp + "?text=" + message;

    window.open(whatsappURL, "_blank");

    admissionForm.reset();

});
const schoolWhatsApp = "9829473980";