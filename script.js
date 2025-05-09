window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "rgba(34, 34, 34, 0.9)"; 
    } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; 
    }
};