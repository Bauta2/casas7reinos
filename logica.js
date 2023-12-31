/*imagenes blasones*/

const imageUrlMarbrand = "imgs/marbrand.webp";
const ImageUrlYronwood = "imgs/Casa_Yronwood.webp"
const ImageUrlBolton ="imgs/Casa_Bolton.webp"
const ImageUrlMallister="imgs/Casa_Mallister.webp"
const ImageUrlCaron="imgs/Casa_Caron.webp"
const ImageUrlRoyce="imgs/Casa_Royce.webp"
const ImageUrlOakheart="imgs/Casa_Oakheart.webp"
const ImageUrlCrakehall="imgs/Casa_Crakehall.webp"
const ImageUrlHightower="imgs/Casa_Hightower.webp"
const ImageUrlFossoway="imgs/Casa_Fossoway_Manzana_Roja.webp"
const ImageUrlFrey ="imgs/Casa_Frey.webp"
const ImageUrlVelaryon = "imgs/Casa_Velaryon.webp"


/*Función constructora de las casas*/

function Casa(casa, asentamiento, lema, blason, blasonDescrpcion, señor, region, vasallaje, guarnicion) {
    this.casa = casa;
    this.asentamiento = asentamiento;
    this.lema = lema;
    this.blason = blason;
    this.blasonDescrpcion = blasonDescrpcion;
    this.señor = señor;
    this.region = region;
    this.vasallaje = vasallaje;
    this.guarnicion = guarnicion;
}
/*Array de las casas*/
const casas = [
    new Casa(
        "Yronwood",
        "Palosanto",
        "Nosotros protegemos el camino",
        ImageUrlYronwood,
        "Un porticullis de sable en campo arena",
        "Lord Anders Yronwood",
        "Dorne",
        "casa Martell de Lanza del Sol",
        {
            caballeros: "22",
            soldados: "1400",
            arqueros: "500",
        }
    ),
    new Casa(
        "Bolton" ,
        "Fuerte Terror" ,
        "Nuestras espadas están afiladas" ,
        ImageUrlBolton ,
        "Un hombre desollado de gules en campo carnación de sangre",
        "Lord Roose Bolton" ,
        "El Norte" ,
        "Casa Stark de Invernalia" ,
         {
            caballeros:"0" ,
            soldados:"900" ,
            arqueros:"400" ,
         }
    ),
    new Casa(
        "Marbrand" ,
        "Marcaceniza" ,
        "Ardiendo con intensidad" ,
        imageUrlMarbrand ,
        "Un árbol ardiendo, naranja sobre cenizo",
        "Lord Damon Marbrand" ,
        "Tierras del Oeste" ,
        "Casa Lannister de Roca Casterly" ,
        {
            caballeros:"16" ,
            soldados:"800" ,
            arqueros:"300" ,
        }
    ),
    new Casa(
        "Mallister" ,
        "Varamar" ,
        "Por encima del resto" ,
        ImageUrlMallister ,
        "Un águila plateada sobre campo púrpura",
        "Lord Jason Mallister" ,
        "Tierra de los Ríos" ,
        "Casa Tyrell de Altojardin" ,
        {
            caballeros:"11" ,
            soldados:"660" ,
            arqueros:"190" ,
        }
    ),
    new Casa(
        "Caron" ,
        "Nocturnia" ,
        "Ninguna canción más dulce" ,
        ImageUrlCaron ,
        "Un campo de oro con ruiseñores de sable",
        "Lord Bryce Caron" ,
        "Tierras de la Tormentas" ,
        "Casa Baratheon de Bastión de Tormentas" ,
        {
            caballeros:"7" ,
            soldados:"400" ,
            arqueros:"100" ,
        }
    ),
    new Casa(
        "Royce" ,
        "Piedra de las Runas" ,
        "Nosotros recordamos" ,
        ImageUrlRoyce ,
        "Una lluvia de piedras sobre campo de bronce con bordura de runas",
        "Lord Yohn Royce" ,
        "Valle de Arryn" ,
        "Casa Arryn de Nido de Águilas" ,
        {
            caballeros:"18" ,
            soldados:"1200" ,
            arqueros:"200" ,
        }
    ),
    new Casa(
        "Oakheart" ,
        "Roble viejo" ,
        "Nuestras Raíces son Profundas" ,
        ImageUrlOakheart ,
        "Tres hojas de roble de sinople en campo de oro",
        "Lady Arwyn Oakheart" ,
        "El Dominio" ,
        "Casa Tyrell de Altojardin" ,
        {
            caballeros:"13" ,
            soldados:"330" ,
            arqueros:"100" ,
        }
    ),
    new Casa(
        "Crakehall" ,
        "Refugio Quebrado" ,
        "Ninguno más Fiero" ,
        ImageUrlCrakehall ,
        "Un jabalí negro y blanco sobre fondo marrón",
        "Lord Roland Crakehall" ,
        "Tierras del Oeste" ,
        "Casa Lannister de Roca Casterly" ,
        {
            caballeros:"8" ,
            soldados:"500" ,
            arqueros:"120" ,
        }
    ),
    new Casa(
        "Hightower" ,
        "Antigua" ,
        "Iluminamos el camino" ,
        ImageUrlHightower ,
        "Un faro de piedra blanca con una llama en la punta",
        "Lord Leyton Hightower" ,
        "El Dominio" ,
        "Casa Tyrell de Altojardin" ,
        {
            caballeros:"30" ,
            soldados:"1600" ,
            arqueros:"500" ,
        }

    ),
    new Casa(
        "Fossoway" ,
        "La Sidra" ,
        "El sabor de la gloria" ,
        ImageUrlFossoway ,
        "Una manzana de gules en campo de oro",
        "Lord Owen Fossoway" ,
        "El Dominio" ,
        "Casa Tyrell de Altojardin" ,
        {
            caballeros:"12" ,
            soldados:"700" ,
            arqueros:"510" ,
        }

    ),
    new Casa(
        "Frey" ,
        "Los Gemelos" ,
        "Desconocido" ,
        ImageUrlFrey ,
        "Dos torres gemelas azul oscuro sobre un fondo gris plateado",
        "Lord Walder frey" ,
        "Tierra de los Rios" ,
        "Casa Tully de Aguasdulces" ,
        {
            caballeros:"25" ,
            soldados:"1500" ,
            arqueros:"440" ,
        }

    ),
    new Casa(
        "Velaryon" ,
        "Marcaderiva" ,
        "El Viejo, el Verdadero, el Valiente" ,
        ImageUrlVelaryon ,
        "Un caballo de mar de plata sobre campo verde mar",
        "Lord Monford Velaryon" ,
        "Tierras de la Corona" ,
        "Casa Baratheon de Rocadragón" ,
        {
            caballeros:"9" ,
            soldados:"350" ,
            arqueros:"110" ,
        }
    ),
];

/*Función para unirse a una de las casas*/

let usuarioUnido = false;

function unirseComoCaballero(casaNombre, casaBlason) {
    if (!usuarioUnido) {
        const casa = casas.find(c => c.casa === casaNombre);
        const caballerosElement = document.getElementById(`caballeros-${casaNombre}`);
        
        const nuevosCaballeros = parseInt(caballerosElement.textContent.split(' ')[1]) + 1;
    
        caballerosElement.textContent = `Caballeros: ${nuevosCaballeros}`;
    
        usuarioUnido = true;
        const boton = document.querySelector(`button[data-casa="${casaNombre}"]`);
        boton.disabled = true;

        const mensaje = `Has puesto tu espada al servicio de ${casa.señor} de la Casa ${casa.casa} de ${casa.asentamiento}. Sirve con dedicación a tu nuevo señor.`;
        
/*Cartel SweetAlert*/
        Swal.fire({
            title: '¡Te has unido como caballero!',
            icon: 'success',
            text: mensaje,
            html: `
            <p>Has puesto tu espada al servicio de ${casa.señor} de la Casa ${casa.casa} de ${casa.asentamiento}. Sirve con dedicación a tu nuevo señor.</p>
            <img src="${casaBlason}" alt="Blason de ${casaNombre}" style="max-width: 100px;">
        `,
            confirmButtonText: 'Aceptar'
        });
    }
}



/*Tarjetas de casas DOM*/

function generarCard(casa) {
    return `
        <div class="col-md-3 mb-4 flex-fill">
            <div class="card h-100 bg-dark text-light">
                <div class="card-header">
                    <h5 class="card-title">Casa  ${casa.casa}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${casa.asentamiento}</h6>
                </div>
                <img src="${casa.blason}" class="card-img-top" alt="Blason de ${casa.casa}">
                <div class="card-body p-2">
                    <p class="card-text m-0"><strong>Lema:</strong> ${casa.lema}</p>
                    <p class="card-text m-0"><strong>Blasón:</strong> ${casa.blasonDescrpcion}</p>
                    <p class="card-text m-0"><strong>Señor:</strong> ${casa.señor}</p>
                    <p class="card-text m-0"><strong>Región:</strong> ${casa.region}</p>
                    <p class="card-text m-0"><strong>Vasallaje:</strong> ${casa.vasallaje}</p>
                    <p class="card-text m-0"><strong>Guarnición:</strong></p>
                    <ul class="list-unstyled m-0">
                        <li id="caballeros-${casa.casa}">Caballeros: ${casa.guarnicion.caballeros}</li>
                        <li>Soldados: ${casa.guarnicion.soldados}</li>
                        <li>Arqueros: ${casa.guarnicion.arqueros}</li>
                    </ul>
                    <button class="btn btn-primary mt-auto" data-casa="${casa.casa}" ${usuarioUnido ? 'disabled' : ''} onclick="unirseComoCaballero('${casa.casa}', '${casa.blason}')">Unirse como Caballero</button>
                </div>
            </div>
        </div>
    `;
}


const contenedor = document.querySelector('.row');


casas.forEach(casa => {
    contenedor.innerHTML += generarCard(casa);
});

