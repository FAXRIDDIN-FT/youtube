const sharePopup = document.querySelector(".share__popup")
const overlayEl = document.querySelector(".overlay")
const menuPopup = document.querySelector(".menu__popup")

function showSharePopup() {
    sharePopup.classList.add("show")
    showOverlay()
}
function hideSharePopup() {
    sharePopup.classList.remove("show")
    hideOverlay()
}

function showOverlay() {
    overlayEl.classList.add("show")
}

function hideOverlay() {
    overlayEl.classList.remove("show")

}

function closeAllPopap() {
    hideSharePopup()
    hidemenuPopup()
}

function showmenuPopup() {
    menuPopup.classList.add("show")
    hideOverlay()
}
function hidemenuPopup() {
    menuPopup.classList.remove("show")
    hideOverlay()
}