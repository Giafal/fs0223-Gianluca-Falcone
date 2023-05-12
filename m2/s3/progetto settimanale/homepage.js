const PRODUCTS_URL = "https://striveschool-api.herokuapp.com/api/product/";

const getProducts = function () {
  fetch(PRODUCTS_URL, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmQ5Mjg4Zjc0MDAwMTQyODc0NWIiLCJpYXQiOjE2ODM4ODEzNjMsImV4cCI6MTY4NTA5MDk2M30.-gLB3nzwSyc5lS4Em9K42KC5emwz0Y49eqwhGE5Y_GE",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel caricamento dei prodotti");
      }
    })
    .then((data) => {
      data.forEach((product) => {
        let colTemplate = `
        <div class="col-12 col-md-3 mb-5">
              <div class="card">
                <img src=${product.imageUrl} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">${product.description}</p>
                  <p class="card-text">${product.brand}</p>
                  <p class="card-text">${product.price}€</p>
                  <a href="./backoffice.html?productId=${product._id}" class="btn btn-primary">Modifica</a>
                  <a href="./detail.html?productId=${product._id}" class="btn btn-secondary">Scopri di più</a>
                </div>
              </div>
            </div>
        `;
        let rowReference = document.getElementById("products-container");
        rowReference.innerHTML += colTemplate;
      });
    })
    .catch((err) => {
      alert(err + "Errore nel caricamento dei prodotti");
    });
};

window.onload = () => {
  getProducts();
};
