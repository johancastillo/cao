//Accedemos a la galería y a todas sus imágenes.
//Este evento le dirá a JavaScript que ejecute el código cuando la página cargue.
document.addEventListener('DOMContentLoaded', () => {
    //Este es el bloque de código que se ejecutará cuando nuestra página web cargue
    const imgLightBox = document.querySelectorAll('.matrialboxed');
    M.Materialbox.init(imgLightBox, {
        inDuration: 500,
        outDuration: 500
    });
});