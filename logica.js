const casas = [
    {
        casa:"Yronwood" ,
        asentamiento:"Palosanto" ,
        lema:"Nosotros protegemos el camino" ,
        blason:"https://static.wikia.nocookie.net/hieloyfuego/images/3/35/Casa_Yronwood.png/revision/latest?cb=20130415204423" ,
        blasonDescrpcion:"Un porticullis de sable en campo arena",
        señor:"Lord Anders Yronwood" ,
        region:"Dorne" ,
        vasallaje:"casa Martell de Lanza del Sol" ,
        guarnicion: {
            caballeros:"22" ,
            soldados:"1400" ,
            arqueros:"500" ,
        }

    },
    {
        casa:"Bolton" ,
        asentamiento:"Fuerte Terror" ,
        lema:"Nuestras espadas están afiladas" ,
        blason:"https://static.wikia.nocookie.net/hieloyfuego/images/3/36/Casa_Bolton.png/revision/latest?cb=20161230200704" ,
        blasonDescrpcion:"Un hombre desollado de gules en campo carnación de sangre",
        señor:"Lord Roose Bolton" ,
        region:"El Norte" ,
        vasallaje:"Casa Stark de Invernalia" ,
        guarnicion: {
            caballeros:"0" ,
            soldados:"900" ,
            arqueros:"400" ,
        }

    },
    {
        casa:"Marbrand" ,
        asentamiento:"Marcaceniza" ,
        lema:"Ardiendo con intensidad" ,
        blason:"https://static.wikia.nocookie.net/hieloyfuego/images/4/41/Casa_Marbrand.png/revision/latest?cb=20140602053653" ,
        blasonDescrpcion:"Un árbol ardiendo, naranja sobre cenizo",
        señor:"Lord Damon Marbrand" ,
        region:"Tierras del Oeste" ,
        vasallaje:"Casa Lannister de Roca Casterly" ,
        guarnicion: {
            caballeros:"16" ,
            soldados:"800" ,
            arqueros:"300" ,
        }


    },
    {
        casa:"Mallister" ,
        asentamiento:"Varamar" ,
        lema:"Por encima del resto" ,
        blason:"https://static.wikia.nocookie.net/hieloyfuego/images/1/11/Casa_Mallister.png/revision/latest?cb=20220720191300" ,
        blasonDescrpcion:"Un águila plateada sobre campo púrpura",
        señor:"Lord Jason Mallister" ,
        region:"Tierra de los Ríos" ,
        vasallaje:"Casa Tyrell de Altojardin" ,
        guarnicion: {
            caballeros:"11" ,
            soldados:"660" ,
            arqueros:"190" ,
        }


    },
    {
        casa:"Caron" ,
        asentamiento:"Nocturnia" ,
        lema:"Ninguna canción más dulce" ,
        blason:"https://static.wikia.nocookie.net/hieloyfuego/images/1/1a/Casa_Caron.png/revision/latest?cb=20170529042907" ,
        blasonDescrpcion:"Un campo de oro con ruiseñores de sable",
        señor:"Lord Bryce Caron" ,
        region:"Tierras de la Tormentas" ,
        vasallaje:"Casa Baratheon de Bastión de Tormentas" ,
        guarnicion: {
            caballeros:"7" ,
            soldados:"400" ,
            arqueros:"100" ,
        }


    },
    {
        casa:"Royce" ,
        asentamiento:"Piedra de las Runas" ,
        lema:"Nosotros recordamos" ,
        blason:"https://static.wikia.nocookie.net/hieloyfuego/images/5/5b/Casa_Royce.png/revision/latest?cb=20130502215119" ,
        blasonDescrpcion:"Una lluvia de piedras sobre campo de bronce con bordura de runas",
        señor:"Lord Yohn Royce" ,
        region:"Valle de Arryn" ,
        vasallaje:"Casa Arryn de Nido de Águilas" ,
        guarnicion: {
            caballeros:"18" ,
            soldados:"1200" ,
            arqueros:"200" ,
        }


    },
    {
        casa:"Oakheart" ,
        asentamiento:"Roble viejo" ,
        lema:"Nuestras Raíces son Profundas" ,
        blason:"https://static.wikia.nocookie.net/hieloyfuego/images/d/d7/Casa_Oakheart.png/revision/latest?cb=20170529034614" ,
        blasonDescrpcion:"Tres hojas de roble de sinople en campo de oro",
        señor:"Lady Arwyn Oakheart" ,
        region:"El Dominio" ,
        vasallaje:"Casa Tyrell de Altojardin" ,
        guarnicion: {
            caballeros:"13" ,
            soldados:"330" ,
            arqueros:"100" ,
        }


    },
    {
        casa:"Crakehall" ,
        asentamiento:"Refugio Quebrado" ,
        lema:"Ninguno más Fiero" ,
        blason:"https://static.wikia.nocookie.net/hieloyfuego/images/a/a1/Casa_Crakehall.png/revision/latest?cb=20170514200929" ,
        blasonDescrpcion:"Un jabalí negro y blanco sobre fondo marrón",
        señor:"Lord Roland Crakehall" ,
        region:"Tierras del Oeste" ,
        vasallaje:"Casa Lannister de Roca Casterly" ,
        guarnicion: {
            caballeros:"8" ,
            soldados:"500" ,
            arqueros:"120" ,
        }


    },
    {
        casa:"Hightower" ,
        asentamiento:"Antigua" ,
        lema:"Iluminamos el camino" ,
        blason:"https://static.wikia.nocookie.net/hieloyfuego/images/a/a2/Casa_Hightower.png/revision/latest?cb=20130415202823" ,
        blasonDescrpcion:"Un faro de piedra blanca con una llama en la punta",
        señor:"Lord Leyton Hightower" ,
        region:"El Dominio" ,
        vasallaje:"Casa Tyrell de Altojardin" ,
        guarnicion: {
            caballeros:"30" ,
            soldados:"1600" ,
            arqueros:"500" ,
        }


    },
    {
        casa:"Fossoway" ,
        asentamiento:"La Sidra" ,
        lema:"El sabor de la gloria" ,
        blason:"https://static.wikia.nocookie.net/hieloyfuego/images/9/9b/Casa_Fossoway_Manzana_Roja.png/revision/latest?cb=20140410190120" ,
        blasonDescrpcion:"Una manzana de gules en campo de oro",
        señor:"Lord Owen Fossoway" ,
        region:"El Dominio" ,
        vasallaje:"Casa Tyrell de Altojardin" ,
        guarnicion: {
            caballeros:"12" ,
            soldados:"700" ,
            arqueros:"510" ,
        }


    },
    
   


]

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
  
        Swal.fire({
            title: '¡Te has unido como caballero!',
            icon: 'success',
            html: `
                <p>Ahora eres un caballero de la Casa ${casaNombre}.</p>
                <img src="${casaBlason}" alt="Blason de ${casaNombre}" style="max-width: 100px;">
            `,
            confirmButtonText: 'Aceptar'
        });
    }
}




function generarCard(casa) {
    return `
        <div class="col-md-3 mb-4 flex-fill">
            <div class="card h-100 bg-dark text-light">
                <div class="card-header">
                    <h5 class="card-title">${casa.casa}</h5>
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


boton.onclick = () => {
    document.body.className = "dark";
}