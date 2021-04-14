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