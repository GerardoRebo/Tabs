window.addEventListener("load", function () {
    var tabs = this.document.querySelectorAll("ul.nav-tabs > li");
    for (let index = 0; index < tabs.length; index++) {
        tabs[index].addEventListener("click", switchTab);
    }
})
function switchTab(event) {
    document.querySelector("ul.nav-tabs li.active").classList.remove("active");
    document.querySelector(".tab-pane.active").classList.remove("active");

    let el = event.currentTarget
    el.classList.add("active")
    let s = el.firstElementChild.getAttribute("href")
    document.querySelector(s).classList.add("active");
}