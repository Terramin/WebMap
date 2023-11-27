window.addEventListener('load', () => {
    var list = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
    list.forEach(function(element) {
        element.setAttribute('href', 'image/favicon-a.png');
    });
});
document.getElementById('telegram').addEventListener("click", function () {
/*    window.open('https://vk.com/im?sel=20865285', '_blank');*/
});
function createRipple(event) {
    const button = event.currentTarget;

    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    button.appendChild(ripple);

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.style.width = ripple.style.height = size + "px";

    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.left = x + "px";
    ripple.style.top = y + "px";

    ripple.addEventListener("animationend", () => {
        ripple.remove();
    });
}