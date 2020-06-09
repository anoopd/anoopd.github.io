//Features Sub Menu

//1. Get the Features list and add Click event 
let featured_link  = document.getElementById('drop-down');
let dropdown = document.getElementById('dropdownmenu');


function displayDropdown() {
    dropdown.className = 'dropdown';
}

function removeDropdown() {
    dropdown.className = "dropdown none";
}

function toggleDropdown() {
    dropdown.classList.toggle('drop-down__menu')
}

var x = window.matchMedia("(max-width: 900px)");


    if(x.matches) {

        console.log( 'Under 900' )
        featured_link.onclick = toggleDropdown;
    }  else {

        console.log( 'Above 900' )


featured_link.onmouseover = displayDropdown;
featured_link.onmouseout = removeDropdown;



    }
