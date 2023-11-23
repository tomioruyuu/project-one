let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)


function showRemoveMenuItem() {
    let menuMobile = $(".menu-mobile")
    let menuOverlay = $(".menu-overlay")
    let menuDrawer = $(".menu-drawer")
    let headerMobile = $(".header-mobile")
    
    headerMobile.onclick = function() {
        menuDrawer.classList.remove("show")
        menuOverlay.classList.remove("open")
    }

    menuMobile.onclick = function () {
        menuDrawer.classList.add("show")
        menuOverlay.classList.add("open")
        
    }
}

showRemoveMenuItem()