window.onload = function() {
    const brg = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links ul');

    brg.addEventListener('click', () => {
        if (nav.style.visibility == "hidden") {
            console.log(1);
            nav.style.visibility = "visible";
        } else {
            nav.style.visibility = "hidden";
            console.log(2);
        }
    });

}
