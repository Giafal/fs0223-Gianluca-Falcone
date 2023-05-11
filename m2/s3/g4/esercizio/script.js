let apiKey = "WZz10WqBIqJvetj6TiAeMqSBY4Jl3k2JWYJv2wrMWwrciMKVoyx7Gqyd";

let loadImagesBtn = document.getElementById("load-images");
let loadImagesBtn2 = document.getElementById("load-images-2");

loadImagesBtn.addEventListener("click", function (e) {
  e.preventDefault();
  fetch("https://api.pexels.com/v1/search?query=animals", {
    headers: {
      authorization: apiKey,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel caricamento delle immagini");
      }
    })
    .then((photos) => {
      console.log(photos);
      let photosArray = photos.photos;
      photosArray.forEach((photo) => {
        let cardTemplate = `
        <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img src="${photo.src.portrait}"/>
                <div class="card-body">
                  <h5 class="card-title">${photo.alt}</h5>
                  <p class="card-text">
                    ${photo.photographer}
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary hide"
                      >
                        Hide
                      </button>
                    </div>
                    <small class="text-muted">${photo.id}</small>
                  </div>
                </div>
              </div>
            </div>`;

        let rowReference = document.getElementById("main-row");
        rowReference.innerHTML += cardTemplate;

        const buttons = document.querySelectorAll(".hide");
        buttons.forEach((button) => {
          button.addEventListener("click", () => {
            const card = button.closest(".col-md-4");
            card.remove();
          });
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

loadImagesBtn2.addEventListener("click", function (e) {
  e.preventDefault();
  fetch("https://api.pexels.com/v1/search?query=colors", {
    headers: {
      authorization: apiKey,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel caricamento delle immagini");
      }
    })
    .then((photos) => {
      console.log(photos);
      let photosArray = photos.photos;
      photosArray.forEach((photo) => {
        let cardTemplate = `
        <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img src="${photo.src.portrait}"/>
                <div class="card-body">
                  <h5 class="card-title">${photo.alt}</h5>
                  <p class="card-text">
                    ${photo.photographer}
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary hide"
                      >
                        Hide
                      </button>
                    </div>
                    <small class="text-muted">${photo.id}</small>
                  </div>
                </div>
              </div>
            </div>`;

        let rowReference = document.getElementById("main-row");
        rowReference.innerHTML += cardTemplate;

        const buttons = document.querySelectorAll(".hide");
        buttons.forEach((button) => {
          button.addEventListener("click", () => {
            const card = button.closest(".col-md-4");
            card.remove();
          });
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

let searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let searchBar = document.getElementById("input-field");
  let param = searchBar.value;
  fetch(`https://api.pexels.com/v1/search?query=${param}`, {
    headers: {
      authorization: apiKey,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel caricamento delle immagini");
      }
    })
    .then((photos) => {
      console.log(photos);
      let photosArray = photos.photos;
      photosArray.forEach((photo) => {
        let cardTemplate = `
          <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                  <img src="${photo.src.portrait}"/>
                  <div class="card-body">
                    <h5 class="card-title">${photo.alt}</h5>
                    <p class="card-text">
                      ${photo.photographer}
                    </p>
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary hide"
                        >
                          Hide
                        </button>
                      </div>
                      <small class="text-muted">${photo.id}</small>
                    </div>
                  </div>
                </div>
              </div>`;

        let rowReference = document.getElementById("main-row");
        rowReference.innerHTML += cardTemplate;

        const buttons = document.querySelectorAll(".hide");
        buttons.forEach((button) => {
          button.addEventListener("click", () => {
            const card = button.closest(".col-md-4");
            card.remove();
          });
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
