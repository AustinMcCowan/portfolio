/*
    Austin McCowan
    04/13/2021
    js file used for handling pieces of javascript here and there
*/

function pagechange(button) {
    // Change the page to the selected one
    document.getElementById("iframe-id").src = button.value;
    // Revert current page button css to normal
    document.getElementsByClassName("btn-currentpage")[0].className = "btn-page";
    // Change the css of the nav button that was just clicked to indicate what page the user is currently on
    button.className = "btn-currentpage";
}

// Set automatic offset for nav header based on div header height (IF KEEPING BOTH HEADERS)
/*
try{
    function resize() {
        if (window.getComputedStyle(document.getElementById("div-header")).getPropertyValue('position') != "relative") {
            let offset = document.getElementById("div-header").offsetHeight;
            offset = String(offset) + "px";
            document.getElementById("nav-header").style.top = offset;
        }

        else {
            document.getElementById("nav-header").style.top = "0px";
        }
    }
    resize();

    window.addEventListener('resize', resize);
}
catch {
    console.error("positioning failed");
}
*/