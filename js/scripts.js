const btn = document.getElementById("menu-toggle");
const lines = btn.querySelectorAll(".line");
const cls = {
    open: "open",
    close: "close"
};
let btnClass = cls.open;
let menuClass = "visible";

var x = document.getElementById("menu");

btn.addEventListener("click", () => {
    if (btn.classList.contains(cls.open)) {
        btn.classList.remove(btnClass);
        x.classList.remove(menuClass);
        btnClass = cls.close;
    } else if (btn.classList.contains(cls.close)) {
        btn.classList.remove(btnClass);
        x.classList.remove(menuClass);
        btnClass = cls.open;
    }

    void btn.offsetWidth;
    btn.classList.add(btnClass);
    x.classList.add(menuClass);
});
