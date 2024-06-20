document.addEventListener('DOMContentLoaded', (event) => {
    const navToggle = document.getElementById('nav-toggle');
    const navBar = document.getElementById('nav-bar');
    const mainCollapse = document.getElementById('main-collapse');

    navToggle.addEventListener('click', () => {
        if (navBar.style.display === 'block') {
            navBar.style.display = 'none';
            mainCollapse.style.marginLeft = '0';
        } else {
            navBar.style.display = 'block';
            mainCollapse.style.marginLeft = '200px';
        }
    });
});

function myFunction() {
    var x = document.getElementById("hide_Div");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
