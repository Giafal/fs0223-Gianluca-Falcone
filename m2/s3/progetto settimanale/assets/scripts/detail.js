const PRODUCTS_URL = "https://striveschool-api.herokuapp.com/api/product/";

const fillDetailsPage = function (productDetails) {
  let colContent = `
          <img src=${productDetails.imageUrl} />
          <div>
          <p>${productDetails.name}</p>
          </div>
          <div>
          <p>${productDetails.description}</p>
          <div>
          <div>
          <p>${productDetails.brand}</p>
          </div>
          <div>
          <p>${productDetails.price}€</p>
          </div>
          <div>
          <a href="./homepage.html" class="btn btn-primary">INDIETRO</a>
          </div>
      `;
  let colToFill = document.querySelector(".col-12.col-md-8");
  colToFill.innerHTML = colContent;
};

const getSingleProduct = function () {
  let productIdFromAddressBar = new URLSearchParams(window.location.search).get(
    "productId"
  );
  fetch(PRODUCTS_URL + productIdFromAddressBar, {
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmQ5Mjg4Zjc0MDAwMTQyODc0NWIiLCJpYXQiOjE2ODM4ODEzNjMsImV4cCI6MTY4NTA5MDk2M30.-gLB3nzwSyc5lS4Em9K42KC5emwz0Y49eqwhGE5Y_GE",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Error getting single product details");
      }
    })
    .then((singleProductDetails) => {
      fillDetailsPage(singleProductDetails);
    })
    .catch((err) => {
      console.log(err);
    });
};

window.onload = function () {
  getSingleProduct();
};
