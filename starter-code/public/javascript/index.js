const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {

    charactersAPI.getFullList()
      .then(response => {
        console.log('post successful and the response is: ', response);

        const container = $(".characters-container")

        let str = "";
        response.data.forEach(element => {

          str += `<div class="character-info">
                <div class="name">name: ${element.name}</div>
                <div class="occupation">occupation: ${element.occupation}</div>
                <div class="weapon">weapon: ${element.weapon}</div>
          </div>`;

        });

        container.html(str);

      })
      .catch(error => {
        console.log('Oh No! Error is: ', error);
      })
  }

  document.getElementById('fetch-one').onclick = function () {

    let id = document.getElementById('fetch-one-input').value


    charactersAPI.getOneRegister(id)

      .then(response => {
        console.log('post successful and the response is: ', response);

        const container2 = $(".characters-container")

        let str2 = `<div class="character-info">
              <div class="name">name: ${response.data.name}</div>
              <div class="occupation">occupation: ${response.data.occupation}</div>
              <div class="weapon">weapon: ${response.data.weapon}</div>
        </div>`;

        container2.html(str2);
      })

      .catch(error => {
        console.log('Oh No! Error is: ', error);
      })
  }


  document.getElementById('delete-one').onclick = function () {

  }

  document.getElementById('edit-character-form').onsubmit = function () {

  }

  document.getElementById('new-character-form').onsubmit = function () {

  }
})
