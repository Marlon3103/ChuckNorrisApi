const but = document.querySelector('button');
const parrafo = document.querySelector('i')
const loadingIndicator = document.querySelector('#loading-indicator');
const reiniciarBoton = document.querySelector('#reiniciar-boton');


but.addEventListener('click', getData);


reiniciarBoton.addEventListener('click', reiniciar)


async function getData() {
    try {

        loadingIndicator.style.display = 'block';

        const data = await fetch('https://api.chucknorris.io/jokes/random');
        const json = await data.json();

        parrafo.textContent = json.value;
        parrafo.style.color = 'black'

    

    } catch (e) {
        console.error(e);

    }

    
    parrafo.style.display = 'inline-block';
    loadingIndicator.style.display = 'none';
}

function reiniciar() {



    parrafo.textContent = '';
    loadingIndicator.style.display = 'none';
    parrafo.style.display = 'none';


}



