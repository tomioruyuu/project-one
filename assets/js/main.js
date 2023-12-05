let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)


function showRemoveMenuItem() {
   let menuBtn = $(".menu-icon")
   let menuOverlay = $(".menu-overlay")
   let menuDrawer = $(".menu-drawer")
   let headerMobile = $(".header-mobile")

   menuBtn.onclick = function() {
    menuOverlay.classList.add("show")
    menuDrawer.classList.add("open")
   }

   headerMobile.onclick = function() {
    menuOverlay.classList.remove("show")
    menuDrawer.classList.remove("open")
   }
   
}

showRemoveMenuItem()