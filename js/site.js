/*
    Austin McCowan
    04/13/2021
    js file used for handling pieces of javascript here and there
*/

// Changes page to button clicked
function pagechange(button) {
    // Change the page to the selected one
    document.getElementById("iframe-id").src = button.value;
    // Revert current page button css to normal
    document.getElementsByClassName("btn-currentpage")[0].className = "btn-page";
    // Change the css of the nav button that was just clicked to indicate what page the user is currently on
    button.className = "btn-currentpage";
}

// Changes page on refresh to current iframe page
function pagechange_onrefresh(){
    let iframe = document.getElementById("iframe-id");
    document.getElementsByClassName("btn-currentpage")[0].className = "btn-page";
    let buttons = document.getElementById("main-nav").getElementsByTagName("button");

    // Loop through elements in nav bar and change them
    var i;
    var button_value;
    for (i = 0; i < buttons.length; i++) {
        button_value = "file:///home/amccowan/GIT/portfolio" + buttons[i].value.slice('1');
        console.log(button_value);
        if (button_value == iframe.src) {
            buttons[i].className = "btn-currentpage";
            console.log("changed page");
            break;
        }
    }
}

// Set event trigger
document.getElementById("iframe-id").onload = function(){pagechange_onrefresh}



// Set iframe size based on load of page and resize of window


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