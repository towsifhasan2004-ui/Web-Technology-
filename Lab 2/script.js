
function showMemberCard(name, age, email, phone, membership) {

    let plans = ["Basic", "Silver", "Gold"];

    for (let i = 0; i < plans.length; i++) {
        console.log(plans[i]);
    }

    let category = age < 13 ? "Junior" : "Regular";

    let fee = membership == "Basic" ? 500 :
              membership == "Silver" ? 1000 : 1500;

    document.getElementById("output").innerHTML =
        "<h2>Member Information</h2>" +
        "Name: " + name + "<br>" +
        "Age: " + age + "<br>" +
        "Email: " + email + "<br>" +
        "Phone: " + phone + "<br>" +
        "Category: " + category + "<br>" +
        "Membership Plan: " + membership + "<br>" +
        "Application Fee: " + fee;
}

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let membership = document.querySelector('input[name="membership"]:checked').value;

    showMemberCard(name, age, email, phone, membership);
});
