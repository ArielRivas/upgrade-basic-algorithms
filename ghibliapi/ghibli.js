const cartelera$$ = document.querySelector(".cartelera");
const buscador$$ = document.querySelector(".input");

//necesito una función asincrona para hacer la llamada a la api (fetch)
const llamadaApi = async () => {

  //Hacemos la llamada a la api y lo convertimos a un json, almacenado en datosApiJSON
  const datosApi = await fetch("https://ghibliapi.herokuapp.com/films");
  const datosApiJSON = await datosApi.json();

  //otra manera más eficiente de hacerlo...
  // fetch("https://ghibliapi.herokuapp.com/films").then((respuesta) => respuesta.json()).then((misDatos) => {
  //     console.log(misDatos);
  // });

  //Para fixear que no ejecute la función sin hacer el input, usamos esta sintáxis
  buscador$$.addEventListener("input", () => buscar(datosApiJSON));
  //al añadir () => hacemos que solo se ejecute al hacer input

  pintar(datosApiJSON);
};

const detalle = (pelicula, cartel$$) => {

  //condition --> si la clase de cartel$$ es === a cartel, cambiamos la clase a cartelPintado (aplica estilos) y pinta lo metido en el innerHTML

  if (cartel$$.className === "cartel") {

    cartel$$.className = "cartelPinchado";

    cartel$$.innerHTML = `

    <h2 class="titulo">${pelicula.title}</h2>
    <img class="imagen" src="${pelicula.image}" alt="${pelicula.title}" />
    <div class="informacion">
      <p>${pelicula.director}</p>
      <p>${pelicula.running_time}</p>
    </div>

    `;

  } else {

    //si no se pincha, se pinta el cartel tal cual está en la función pintar()

    cartel$$.className = "cartel";

    cartel$$.innerHTML = `

        <h2 class="titulo">${pelicula.title}</h2>
        <img class="imagen" src="${pelicula.image}" alt="${pelicula.title}" />
        <div class="informacion">
          <p>${pelicula.release_date}</p>
          <p>${pelicula.rt_score}</p>
        </div>
    `;

  }
};

const buscar = (peliculas) => {

  const peliculasFiltradas = [];

  //Iteramos sobre peliculas para que cuando haga la búsqueda, inserte las películas en el array correspondientes a la película

  for (const pelicula of peliculas) {

    //Si la búsqueda incluye el valor de pelicula.title, lo pushea en el array vacio
    if (
      pelicula.title
        .toLowerCase()
        .includes(buscador$$.value.toLowerCase().trim())
    ) {

      peliculasFiltradas.push(pelicula);

    }
  }

  pintar(peliculasFiltradas);

};

const pintar = (peliculas) => {

  //Con este innerHTML, borramos todo el HTML en la ejecución

  cartelera$$.innerHTML = ``;

  for (const pelicula of peliculas) {
    const cartel$$ = document.createElement("div");

    //OPCIÓN 1 (más optimizada) - usamos un solo innerHTML para que itere sobre el y pinte cada uno de los carteles. En el, agregamos todas las clases y atributos
    //a tener en cuenta...

    cartel$$.innerHTML = `

        <h2 class="titulo">${pelicula.title}</h2>
        <img class="imagen" src="${pelicula.image}" alt="${pelicula.title}" />
        <div class="informacion">
          <p>${pelicula.release_date}</p>
          <p>${pelicula.rt_score}</p>
        </div>
    `;

    //Añadimos la clase cartel a el div creado en cartel$$

    cartel$$.className = "cartel";
    cartel$$.addEventListener("click", () => detalle(pelicula, cartel$$));

    //OPCION 2 - usando document.createElement(), añadiendo clases y atributos a mano y usando appenChild() para pintarlo en el HTML

    // const titulo$$ = document.createElement("h2");
    // const imagen$$ = document.createElement("img");
    // const info$$ = document.createElement("div");
    // const year$$ = document.createElement("p");
    // const rating$$ = document.createElement("p");

    // cartel$$.classList.add("cartel");
    // titulo$$.classList.add("titulo");
    // titulo$$.textContent = pelicula.title;
    // imagen$$.classList.add("imagen");
    // imagen$$.setAttribute("src", pelicula.image);
    // imagen$$.setAttribute("alt", pelicula.title);
    // info$$.className = "informacion";
    // year$$.innerHTML = `${pelicula.release_date}`;
    // rating$$.innerText = pelicula.rt_score;

    // info$$.appendChild(year$$);
    // info$$.appendChild(rating$$);
    // cartel$$.appendChild(titulo$$);
    // cartel$$.appendChild(imagen$$);
    // cartel$$.appendChild(info$$);

    //pintamos...
    cartelera$$.appendChild(cartel$$);
  }
};

//llamamos a la función que carga la api
llamadaApi();