// Puedes agregar interactividad aquí si lo necesitas
// Por ejemplo, un mensaje de confirmación al hacer clic en el botón de inscripción

function toggleSeccion(id) {
    const seccion = document.getElementById(id);
    if (seccion.style.display === "none" || seccion.style.display === "") {
        seccion.style.display = "block"; // Muestra la sección
    } else {
        seccion.style.display = "none"; // Oculta la sección
    }
}

document.querySelector('.btn').addEventListener('click', function() {
    alert('¡Gracias por tu interés! Serás redirigido al formulario de inscripción.');
});

document.addEventListener('DOMContentLoaded', function () {
    const courses = document.querySelectorAll('.course');

    courses.forEach(course => {
        course.addEventListener('click', function () {
            // Cierra todos los cursos abiertos
            courses.forEach(otherCourse => {
                if (otherCourse !== course && otherCourse.classList.contains('active')) {
                    otherCourse.classList.remove('active');
                }
            });

            // Abre o cierra el curso seleccionado
            course.classList.toggle('active');
        });

        // Cierra el curso cuando el mouse sale del contenedor
        course.addEventListener('mouseleave', function () {
            course.classList.remove('active');
        });
    });
});

