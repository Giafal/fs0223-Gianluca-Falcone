const PRODUCTS_URL = "https://striveschool-api.herokuapp.com/api/product/";

let addressBarContent = new URLSearchParams(window.location.search);
let productId = addressBarContent.get("productId");

if (productId) {
  document.getElementsByTagName("h2")[0].innerText =
    "Backoffice page - Modifica prodotto";

  let createButton = document.getElementById("create-button");
  createButton.classList.add("d-none");

  let modifyButton = document.getElementById("modify-button");
  modifyButton.classList.remove("d-none");

  let deleteButton = document.getElementById("delete-button");
  deleteButton.classList.remove("d-none");
  deleteButton.addEventListener("click", () => {
    const confirmed = confirm(
      "Sei sicuro di voler eliminare questo prodotto? Una volta confermato non potrai tornare indietro"
    );
    if (confirmed) {
      fetch(PRODUCTS_URL + productId, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmQ5Mjg4Zjc0MDAwMTQyODc0NWIiLCJpYXQiOjE2ODM4ODEzNjMsImV4cCI6MTY4NTA5MDk2M30.-gLB3nzwSyc5lS4Em9K42KC5emwz0Y49eqwhGE5Y_GE",
        },
      })
        .then((res) => {
          if (res.ok) {
            alert("eliminazione completata con successo");
            location.assign("./homepage.html");
          } else {
            throw new Error("Problema nell'eliminazione dell'evento");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  fetch(PRODUCTS_URL + productId, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmQ5Mjg4Zjc0MDAwMTQyODc0NWIiLCJpYXQiOjE2ODM4ODEzNjMsImV4cCI6MTY4NTA5MDk2M30.-gLB3nzwSyc5lS4Em9K42KC5emwz0Y49eqwhGE5Y_GE",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel recupero del prodotto");
      }
    })
    .then((product) => {
      console.log(product);
      document.getElementById("name").value = product.name;
      document.getElementById("description").value = product.description;
      document.getElementById("image").value = product.imageUrl;
      document.getElementById("price").value = product.price;
      document.getElementById("brand").value = product.brand;
    })
    .catch((error) => {
      console.log(error);
    });
}

const productForm = document.getElementById("product-form");
productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let nameInput = document.getElementById("name");
  let descriptionInput = document.getElementById("description");
  let priceInput = document.getElementById("price");
  let brandInput = document.getElementById("brand");
  let imageInput = document.getElementById("image");

  let newProduct = {
    name: nameInput.value,
    description: descriptionInput.value,
    price: priceInput.value,
    brand: brandInput.value,
    imageUrl: imageInput.value,
  };

  fetch(productId ? PRODUCTS_URL + productId : PRODUCTS_URL, {
    method: productId ? "PUT" : "POST",
    body: JSON.stringify(newProduct),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmQ5Mjg4Zjc0MDAwMTQyODc0NWIiLCJpYXQiOjE2ODM4ODEzNjMsImV4cCI6MTY4NTA5MDk2M30.-gLB3nzwSyc5lS4Em9K42KC5emwz0Y49eqwhGE5Y_GE",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        alert(productId ? "PRODOTTO MODIFICATO!" : "PRODOTTO CREATO!");
        location.assign("./homepage.html");
      } else {
        alert("ERRORE NEL SALVATAGGIO");
        throw new Error("ERRORE NEL SALVATAGGIO");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

let resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
  const confirmed = confirm("Sei sicuro di voler resettare tutti i campi?");

  if (confirmed) {
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
    document.getElementById("image").value = "";
    document.getElementById("price").value = "";
    document.getElementById("brand").value = "";
  }
});
