// TAREA 6 Joshua Espinoza

// 1.Consumir el siguiente endpoint https://pokeapi.co/api/v2/pokemon/ y mostrar en el front lo siguiente:
/* a) Cards que contengan los 20 primeros pokemones (imagen y nombre del pokemon) 
b) Utilizar Async / Await para trabajar las promesas de forma asíncrona 
c) Usar Axios o Fetch para realizar la solicitud al endpoint mencionado 
d) Ocupar Try / Catch para el manejo de errores */

const cardsContainerId = document.getElementById("cardsContainer");

const loadCards = async (pokemon) => {
  const card = document.createElement(`div`);
  cardsContainerId.append(card);
  card.innerHTML = `
      <div class="card my-2" style="width: 18rem; height: 20rem">
        <img src="${
          pokemon?.sprites?.other?.dream_world?.front_default
        }" class="card-img-top" 
        style="height: 16rem" alt="${pokemon?.name}" />
        <div class="card-body">
          <h5 class="card-title text-center">${pokemon?.name.toUpperCase()}</h5>
        </div>
      </div>`;
};

const getDataPokemones = async (id) => {
  const URL_BASE = `https://pokeapi.co/api/v2/pokemon/${id}`;
  try {
    const req = await axios.get(URL_BASE);
    const pokemon = await req.data;
    loadCards(pokemon);
  } catch (error) {
    console.log(error);
  }
};

const getIds = (async () => {
  for (let i = 1; i <= 20; i++) {
    getDataPokemones(i);
  }
})();
