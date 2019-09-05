
fetch('https://jsonplaceholder.typicode.com/todos')
  .then (response => {
    return response.json();
  })
  .then (data => {
    for (var i = 0; i < 10 ; i++) { // Replace 10 with data.length to create a card for each element in the json file
      var card = document.getElementById("cardContainer");
      card.innerHTML += "<div class='cards'> <p> UserId: " + data[i].userId + " </p> <p> Id: " + data[i].id + "</p> <p> Title: " + data[i].title + "</p> <p> Complete: " + data[i].completed +"</div>";
    }

  })
  .catch (err => {
    console.log("The request failed");
  })
