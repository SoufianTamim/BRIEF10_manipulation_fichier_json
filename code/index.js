

let myArray;



function getData() {
  $.ajax({
    url: "index.json",
    success: function (data) {
      myArray = data;
      buildTable(myArray);
    },
  });
}





getData();

function buildTable(data) {
  let table = document.getElementById("myTable");


  

for (let i = 0; i < data.length; i++) {
  let row =
   `<tr>
      <td>${data[i].film}</td>
      <td>${data[i].director}</td>
      <td>${data[i].runtime + " "}<spanp>min</spanp></td>
      <td>${data[i].year}</td>
      <td><img src="${data[i].poster}" alt="Poster"></td>
      <td>
        <li>${data[i].festivals[0]}</li>
        <li>${data[i].festivals[1]}</li>
        <li>${data[i].festivals[2]}</li>
        <li>${data[i].festivals[3]}</li>
      </td>
      <td>
        <li>${data[i].actors[0].firstName}</li> 
        <li> ${data[i].actors[0].lastName}</li>
        <li> ${data[i].actors[0].nationality}</li>  
        <li>${data[i].actors[1].firstName}</li> 
        <li> ${data[i].actors[1].lastName}</li> 
        <li> ${data[i].actors[1].nationality}</li> 
        <li>${data[i].actors[2].firstName}</li> 
        <li> ${data[i].actors[2].lastName}</li> 
        <li> ${data[i].actors[2].nationality}</li> 
        <li>${data[i].actors[3].firstName}</li> 
        <li> ${data[i].actors[3].lastName}</li> 
        <li> ${data[i].actors[3].nationality}</li> 
      </td>
    </tr>`;
  
    table.innerHTML += row;

  }
}