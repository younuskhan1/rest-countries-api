const loadRestCountries = async () => {
  const url = `https://restcountries.com/v3.1/all`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    receivedRestCountries(data);
  }
  catch (error) {
    console.log(error);
  }
}

const receivedRestCountries = (countries) => {

  const countriesContainer = document.getElementById("rest-countries-container");
  countries.forEach((country) => {
    console.log(country);
    // const borders = country.borders;
    const div = document.createElement("div");
    div.classList.add("each-card");
    div.innerHTML = ` 
        <div class="card-whole">
          <img class="card-image" src="${country.flags.png}" />
        <div class="">
          <h2 class="country-name">${country.name.common}</h2>
          <div class="card-text">
            <div class="card-information">
              <p>Capital : ${country.capital ? country.capital[0] : "capital is none"}</p> 
              <p>Continents : ${country.continents[0]}</p>
              <p> Area : ${country.area}</p>
              <p>Poputations : ${country.population}</p>
            </div>
            <div class="card-button-div">
              <button class="card-button">Details</button>
            </div>
          </div>
        </div>
      </div>
        `;
    countriesContainer.appendChild(div);
  })
}

// {/* <p>borders : ${borders ? borders.map((border) => border) : "border is none"}</p> */}

loadRestCountries();