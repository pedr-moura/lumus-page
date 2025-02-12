let scroll = 0;
let navbar = 0;
let cookie = 0

window.addEventListener("scroll", function () {

    if (window.scrollY === 0) {
        glowUpColor('buttonoption')

        navbar = 0;
    }

    if (window.scrollY >= 100) {
        if (navbar == 0) {
            console.log("Scroll passou de 100px!");  

            navbar = 1;

            if (cookie == 0) {

                setTimeout(function() {
                    showPopup()
                }, 2000);
            
                cookie += 1;
            }

            glowUpColor('buttonoption')
        }

    }


if (window.scrollY >= 500) {
    if (scroll == 0) {
        console.log("Scroll passou de 300px!");                                   
        scroll += 1;

        showOnScroll('powershell')
    }

}
});

function showOnScroll(id) {
document.getElementById(id).classList.toggle('visible');
}

function glowUpColor(className) {
    let elements = document.getElementsByClassName(className);

    for (let element of elements) {
        element.classList.toggle('glowup');
    }
}
