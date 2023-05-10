fetch("https://striveschool-api.herokuapp.com/books")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Errore");
    }
  })
  .then((books) => {
    let mainRow = document.getElementById("main-row");

    books.forEach((book) => {
      let bookItem = document.createElement("div");
      bookItem.classList.add(
        "col-12",
        "col-sm-6",
        "col-md-4",
        "col-lg-3",
        "d-flex",
        "mb-3"
      );
      bookItem.innerHTML = `
        <div class="card">
                <img src=${book.img} class="card-img-top altezza" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">Price $${book.price}</p>
                    <button class="btn btn-primary add-cart">Buy now</button>
                    <button class="btn btn-danger delete-btn">Discard</button>
                    </div>
        </div>`;
      mainRow.appendChild(bookItem);

      const buttons = bookItem.querySelectorAll(".delete-btn");
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          const card = button.closest(".card");
          card.remove();
        });
      });

      const cart = bookItem.querySelectorAll(".add-cart");
      cart.forEach((item) => {
        item.addEventListener("click", () => {
          const fullCart = document.getElementById("cart-row");
          const addCard = item.closest(".card");
          const div = document.createElement("div");
          div.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3");
          div.appendChild(addCard);
          fullCart.appendChild(div);
        });
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });
