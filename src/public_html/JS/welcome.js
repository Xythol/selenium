var password = window.location.search.split("?password=")[1];

document.getElementById("password").innerHTML = "Password: " + password;

function loginpage() {
    window.location.replace("index.html");
}