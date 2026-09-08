const theme = document.getElementById("themeButton");
let darkMode = false;

function changeTheme() {
    //Function to change background of webPage
    if (!darkMode) {
        document.body.style.backgroundColor = "rgb(101, 99, 99)";
        theme.textContent = "Light Mode";
        theme.style.backgroundColor = "#222";
        theme.style.color = "#f2f2f2";
        document.body.classList.remove("lightMode");
        document.body.classList.add("darkMode");
        darkMode = true;

    } else {
        document.body.style.backgroundColor = "white";
        theme.textContent = "Dark Mode";
        theme.style.backgroundColor = "#f2f2f2";
        theme.style.color = "#222";
        document.body.classList.remove("darkMode");
        document.body.classList.add("lightMode");
        darkMode = false;
    }
}