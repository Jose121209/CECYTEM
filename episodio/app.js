const apiMorty = async(pagina) => {
    let url = "https://rickandmortyapi.com/api/episode/?page=" + pagina;
    const api = await fetch(url);
    const data = await api.json();
    console.log(data);
    divRes = document.querySelector("#resultado1");
    divRes.innerHTML = ""
    data.results.map(item => {
        divItem = document.createElement('div');
        divItem.innerHTML = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">EPISODIO:</h5>
          <hr>
          <h6 class="card-subtitle mb-2 text-muted">${item.air_date}</h6>
          <p class="card-text">${item.name}</p>
          <p class="card-text">${item.episode}</p>
          <p class="card-text">${item.id}</p>
          <p class="card-text">${item.created}</p>
        </div>
      </div>
      `
        divRes.appendChild(divItem);
    });
}
apiMorty(1);