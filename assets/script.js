function select(element) {
    return document.querySelector(element);
}


let elements = document.querySelectorAll(".checkbox");

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("change", function() {

        if (this.checked === true) {
            this.offsetParent.setAttribute("class", "item checked");
        } else {
            this.offsetParent.setAttribute("class", "item");
        }
    })
}

