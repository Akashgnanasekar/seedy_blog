// Show Back to Top Button
window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
};

// Scroll to Top Animation
document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
