document.addEventListener("DOMContentLoaded", function () {
    const categorias = document.querySelectorAll(".categoria");

    categorias.forEach(categoria => {
        categoria.addEventListener("mouseenter", function () {
            this.querySelector(".submenu").style.display = "block";
        });

        categoria.addEventListener("mouseleave", function () {
            this.querySelector(".submenu").style.display = "none";
        });
    });
});

