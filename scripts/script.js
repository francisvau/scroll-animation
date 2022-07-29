const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkboxes);

checkboxes();

function checkboxes() {
    const height = window.innerHeight;
    for (const box of boxes) {
        if (box.getBoundingClientRect().bottom < height + 30) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    }
}