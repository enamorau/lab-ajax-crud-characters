const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {

    charactersAPI.getFullList()
      .then(response => {
        console.log('post successful and the response is: ', response);

        const container = $(".characters-container")

        response.data.forEach(element => {

          const characterInfoDiv = $(
            
      `<div class="character-info">
       
                <div class="name">name: ${element.name}</div>
                <div class="occupation">occupation: ${element.occupation}</div>
                <div class="weapon">weapon: ${element.weapon}</div>
       
       </div>`
       )

          container.append(characterInfoDiv)

        });

      })
      .catch(error => {
        console.log('Oh No! Error is: ', error);
      })
  }

  document.getElementById('fetch-one').onclick = function () {

  }

  document.getElementById('delete-one').onclick = function () {

  }

  document.getElementById('edit-character-form').onsubmit = function () {

  }

  document.getElementById('new-character-form').onsubmit = function () {

  }
})
