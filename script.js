const contenido = document.getElementById('contenedor');

const traeDatos = async ()=>{
    try{

    
    const resultados = await fetch('https://rickandmortyapi.com/api/character')
    const datos = await resultados.json();
    const imagenes = datos.results

        imagenes.forEach(ima=>{
           const items = document.createElement('div');
           items.className = 'imagenes-'
           items.innerHTML += `<img src='${ima.image}'> 
           <h3>${ima.name}</h3>
           `;
           contenido.appendChild(items);
        });
    }catch(error){
        console.error('error 2');
    }
}
traeDatos();