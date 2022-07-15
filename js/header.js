
// Search_Box start
let search = document.querySelector(".search");
let clear = document.querySelector(".clear");

// Width navbar__search
search.onclick = function(){
    document.querySelector(".navbar__search").classList.toggle('active');
}

// Delete input
clear.onclick = function(){
    document.getElementById("search").value = "";
}
// Search_Box End




// Dark & Light Mode START
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change",() => {
    document.body.classList.toggle(".dark__mode");
    if(document.body.classList.toggle("dark__mode"));
    // else(document.body.classList.toggle("dark__mode"));
})

// Dark & Light Mode END





// ONSCROLL START
const header__container = document.querySelector('.header__container')
window.addEventListener('scroll' , header)

function header(){
    if(window.scrollY > header__container.offsetHeight + 1){
        header__container.classList.add('active')
    }
    else{
        header__container.classList.remove('active')
    }
}

// ONSCROLL END