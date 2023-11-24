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
        // console.log(country);
        const borders = country.borders;
        console.log(borders);
        const div = document.createElement("div");
        div.classList.add("each-card");
        div.innerHTML = ` 
        <div class="">
          <img class="card-image" src="${country.flags.png}" />
        <div class="">
          <h2 class="country-name">${country.name.common}</h2>
          <p>Capital : ${country.capital ? country.capital[0] : "capital is none"}</p>
          <p>borders : ${borders ? borders.map((border) => border) : "border is none"}</p>
          <p>Continents : ${country.continents[0]}</p>
          <p>Poputations : ${country.population} Area : ${country.area}</p>

          <div class="">
            <button class="">Buy Now</button>
          </div>
        </div>
      </div>
        `;
        countriesContainer.appendChild(div);
    })
}

loadRestCountries();