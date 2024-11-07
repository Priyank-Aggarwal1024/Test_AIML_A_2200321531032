const button = document.getElementById("submit")
console.log(button)
const userLogin = () => {
    const username = localStorage.getItem("username")
    const password = localStorage.getItem("password");
    if (!username) {
        return
    }
    if (!password) {
        return
    }
    if (username != "admin" || password != "admin") {
        return
    }
    else {
        localStorage.setItem("username", username)
        localStorage.setItem("password", password)
        window.location.href = "/welcome.html"
    }
}
button.addEventListener("click", () => {
    console.log("Hello")
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (!username) {
        return alert("Enter Username");
    }
    if (!password) {
        return alert("Enter Password");
    }
    if (username != "admin" || password != "admin") {
        return alert("Enter Valid Credentials");
    }
    else {
        localStorage.setItem("username", username)
        localStorage.setItem("password", password)
        window.location.href = "/welcome.html"
    }
})
userLogin();