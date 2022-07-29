var personajes = JSON.parse(file).results
let nombreInput = document.getElementById("nombreInput")
let container = document.getElementById("container")
let noResultados = document.getElementById("noResultados")
let containerExtra = document.getElementById("container_extra")
let imagenes = [
"http://cdn.wccftech.com/wp-content/uploads/2015/06/Battlefront-3.jpg", 
"https://d39bmof8blmz8u.cloudfront.net/wp-content/uploads/2015/12/r2d2-and-c3po-star-wars.jpg", 
"https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/05/03/15885120366138.jpg", 
"https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_3.0,f_auto,w_500/5379499_png/star-wars-%E2%80%93-darth-vader-swarovski-5379499.png",
"https://i0.wp.com/eneagramadelapersonalidad.com/wp-content/uploads/2013/06/princesa-leia-organa.jpg?resize=300%2C240&ssl=1",
"https://i.pinimg.com/originals/b5/3a/5a/b53a5ae9a90265578ecec1a99b0134cc.png",
"http://pm1.narvii.com/6168/ff4e27ef435e7191ca5429126c31754115a93776_00.jpg",
"http://pm1.narvii.com/6886/355af6474e4bdb75b5402fdeaa2b48b06d83fd46r1-1177-720v2_uhq.jpg",
"https://www.rebelscum.com/2021/gentle-giant-ltd-biggs-darklighter-mini-bust.jpg",
"https://media.revistagq.com/photos/604735a0d1187a598fb4960f/2:3/w_515,h_773,c_limit/38225-original.jpg"]

const nombresPersonajes = [
    {nombre1: 'luke', nombre2: 'skywalker'},
    {nombre1: 'c3', nombre2:'3po'},
    {nombre1: 'r2', nombre2: 'd2'},
    {nombre1: 'darth', nombre2: 'vader'},
    {nombre1: 'leia', nombre2: 'organa'},
    {nombre1: 'owen', nombre2: 'lars'},
    {nombre1: 'beru', nombre2: 'whitesun'},
    {nombre1: 'r5', nombre2: 'd4'},
    {nombre1: 'biggs', nombre2: 'darklighter'},
    {nombre1: 'obi-wan', nombre2: 'kenobi'},
]


function buscarBtn() {
  document.getElementById('container_extra').style.display= "none";
  let personaje = buscar(nombreInput.value)
  
  if (personaje ){
    let imagenPersonaje = agregarImagen(personaje.name)

  container.innerHTML = `
    <div class="card mb-3 text-bg-warning mb-3 text-white" style="max-width: 540px; d-flex justify-content-center d-flex align-items-center">
      <div class= "row g-0">
        <div class ="col-md-4 d-flex justify-content-center d-flex align-items-center">
          <img src=${imagenPersonaje} class="img-fluid rounded-start">
        </div>
        <div class="col-md-8">
          <div class= "card-body">
            <span class='cardText' ><strong>Nombre: </strong> ${personaje.name}</span><br>
            <span class='cardText'>Altura: ${personaje.height}cm</span><br>
            <span class='cardText'>Peso: ${personaje.mass}kg</span><br>
            <span class='cardText'>Color de cabello: ${personaje.hair_color}</span><br>
            <span class='cardText'>Color de piel: ${personaje.skin_color}</span><br>
            <span class='cardText'>Color de ojos: ${personaje.eye_color}</span><br>
            <span class='cardText'>Año de nacimiento: ${personaje.birth_year}</span><br>
            <span class='cardText'>Género: ${personaje.gender}</span><br>
          </div>
        </div>
      </div>
    </div>
  `
  noResultados.innerHTML = `
    <span class="noResultado d-flex justify-content-center"> </span>
  `
  }
  else {
    container.innerHTML =`
    <img id="'imagenInicio" src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/06/que-orden-ver-peliculas-star-wars.jpg?itok=rTLETD_n" class="d-block w-80 img-fluid" alt="..." style="max-width: 700px;">
    `
    noResultados.innerHTML = `
    <span class="noResultado d-flex justify-content-center"> No se encontraron resultados </span>
  `
  }
    
}


function buscar(nombre) {  
  for(let i = 0; i<personajes.length;i++) {
    if((nombre.toLowerCase()) === (personajes[i].name.toLowerCase()) || (nombre.toLowerCase()) === nombresPersonajes[i].nombre1 || (nombre.toLowerCase()) === nombresPersonajes[i].nombre2) {
      return personajes[i]
    }
  }
}

function agregarImagen(personaje){
        for(let i = 0; i<personajes.length;i++){
        if(personaje === personajes[i].name){
            return imagenes[i];
        }
    }
}

function todosLosPersonajes(){
  container.innerHTML =`
    <img id="'imagenInicio" src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/06/que-orden-ver-peliculas-star-wars.jpg?itok=rTLETD_n" class="d-block w-80 img-fluid" alt="..." style="max-width: 700px;">
    `
  document.getElementById('container_extra').style.display= "flex";
    let cards = ''
        for(let i = 0; i<personajes.length;i++) {
          let imagenPersonaje = agregarImagen(personajes[i].name)

          cards += `
          <div class="col-2">
            <div class="card" style="width: 18rem;">
            <img src=${imagenPersonaje} class="card-img-top imgCard" style ="width: 18rem height: 30rem ">
            <div class="card-body">
              <span class='cardText' ><strong>Nombre: </strong> ${personajes[i].name}</span><br>
              </div>
            </div>
          </div>
          `
        }
        containerExtra.innerHTML = cards
        
}

function estaturaPersonajes(){
  container.innerHTML =`
    <img id="'imagenInicio" src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/06/que-orden-ver-peliculas-star-wars.jpg?itok=rTLETD_n" class="d-block w-80 img-fluid" alt="..." style="max-width: 700px;">
    `
  document.getElementById('container_extra').style.display= "flex";
  let cards = ''
  for(let i = 0; i<personajes.length;i++) {
    let imagenPersonaje = agregarImagen(personajes[i].name)

    cards += `
    <div class="col">
      <div class="card" style="width: 18rem;">
        <img src=${imagenPersonaje} class="card-img-top">
        <div class="card-body">
         <span class='cardText' ><strong>Nombre: </strong> ${personajes[i].name}</span><br>
         <span class='cardText'>Altura: ${personajes[i].height}cm</span><br>
        </div>
      </div>
    </div>
    `
  }
  containerExtra.innerHTML = cards
}

function buscarGeneroPersonajes(){
  container.innerHTML =`
    <img id="'imagenInicio" src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/06/que-orden-ver-peliculas-star-wars.jpg?itok=rTLETD_n" class="d-block w-80 img-fluid" alt="..." style="max-width: 700px;">
    `
  document.getElementById('container_extra').style.display= "flex";
  let cards = ''
  for(let i = 0; i<personajes.length;i++) {
    let imagenPersonaje = agregarImagen(personajes[i].name)

    cards += `
    <div class="col">
      <div class="card" style="width: 18rem;">
      <img src=${imagenPersonaje} class="card-img-top imgCard">
      <div class="card-body">
        <span class='cardText' ><strong>Nombre: </strong> ${personajes[i].name}</span><br>
        <span class='cardText'>Género: ${personajes[i].gender}</span><br>
        </div>
      </div>
    </div>
    `
  }
  containerExtra.innerHTML = cards
}

function alturaPersonaje(){
  let containerBusqueda = document.getElementById('buttonBusqueda')

    containerBusqueda.innerHTML= `
  <div class="d-flex justify-content-center d-flex align-items-center ">
            <input class="nombreInput text-white" id="nombreInput" autocomplete="off" />
          </div>
           <div class="d-flex justify-content-center flex-column d-flex align-items-center col">
            <button class="buttonBuscar text-white" onclick="buscarAlturaPersonaje()">
              Buscar altura de personaje
              </button>
              `
}
