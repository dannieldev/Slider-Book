

// Utilizando jQuery
$('.chapterSpines__images').hover(function () {
    $(this).siblings().css('flex', '1');
}, function () {
    $(this).siblings().css('flex', '1');
});

// Utilizando Vanilla JS
document.querySelectorAll('.chapterSpines__images').forEach(function (element) {
    
    var boton = document.querySelectorAll("chapterSpines__button");
    element.addEventListener('mouseover', function () {
        this.parentNode.childNodes.forEach(function (sibling) {
            if (sibling.nodeType === 1 && sibling !== element) {
                sibling.style.flex = '1';
                
            }
        });
        element.style.flex = '4';


        if (boton.style.opacity === "0" || boton.style.opacity === "") {
            // Si el elemento está oculto, mostrarlo
            boton.style.filter = "blur(0)"; // Eliminar el desenfoque
            boton.style.opacity = "1"; // Mostrar el elemento
          } else {
            // Si el elemento está visible, ocultarlo
            boton.style.filter = "blur(10px)"; // Aplicar desenfoque
            boton.style.opacity = "0"; // Ocultar el elemento
          }
    });
    element.addEventListener('mouseout', function () {
        this.parentNode.childNodes.forEach(function (sibling) {
            if (sibling.nodeType === 1 && sibling !== element) {
                sibling.style.flex = '1';
            }
        });
    });
});



  