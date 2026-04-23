const contenedor = document.getElementById('contenedor-peliculas');
const urlGhibli = 'https://ghibliapi.vercel.app/films';

function cargarPeliculas() {
    fetch(urlGhibli)
        .then(respuesta => respuesta.json()) 
        .then(peliculas => {
            contenedor.innerHTML = '';

            peliculas.forEach(pelicula => {
                contenedor.innerHTML += `
                <div class="col-md-4 d-flex justify-content-center">
                    <div class="card" style="width: 18rem;">
                        <img src="${pelicula.image}" class="card-img-top" alt="${pelicula.title}">
                        <div class="card-body">
                            <h5 class="card-title">${pelicula.title}</h5>
                            <p class="card-text">
                                <strong>Director:</strong> ${pelicula.director}<br>
                                <strong>Año:</strong> ${pelicula.release_date}<br>
                                <strong>Puntuación:</strong> ${pelicula.rt_score}
                            </p>
                        </div>
                    </div>
                </div>
                `;
            });
        })
        .catch(error => console.error('Error al obtener datos:', error));
}
cargarPeliculas();