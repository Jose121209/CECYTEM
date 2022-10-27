const apiMorty = async(pagina) => {
    let url = "https://rickandmortyapi.com/api/location/?page=" + pagina;
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
          <h5 class="card-title">LOCACION:</h5>
          <hr>
          <h6 class="card-subtitle mb-2 text-muted">${item.id}</h6>
          <p class="card-text">${item.created}</p>
          <p class="card-text">${item.dimension}</p>
          <p class="card-text">${item.name}</p>
        </div>
      </div>
      `
        divRes.appendChild(divItem);
    });
}
apiMorty(1);