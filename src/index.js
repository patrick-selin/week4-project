const searchButton = document.getElementById('submit-data');
const searchField = document.getElementById('input-show');



function fetchQuery(searchQuery) {
  fetch('https://api.tvmaze.com/search/shows?q='
    + searchQuery)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let = queryData = data;
      console.log(data);

      for (let i = 0; i < queryData.length; i++) {
        console.log(queryData[i]);
        console.log(queryData[i].show.image.medium);
        console.log(queryData[i].show.name);
        console.log(queryData[i].show.summary);

        const markup = `<div class="show-data"> 
            <img src="${queryData[i].show.image.medium}"> 
            <div class="show-info"> 
                <h1>${queryData[i].show.name}</h1> 
                ${queryData[i].show.summary}
            </div> 
        </div>`;

  

        document.querySelector(".data-container")
        .insertAdjacentHTML('beforeend', markup);

      }


    });
}


searchButton.addEventListener("click", function (event) {
  event.preventDefault()

  const searchQuery = searchField.value;

  fetchQuery(searchQuery);

  // queryData.array.forEach(element => {
  //   console.log(element)
  // });



});

