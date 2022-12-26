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
           <li>${data[i].actors[0].firstName+" "+data[i].actors[0].lastName+" : "+data[i].actors[0].nationality}</li> 
           <li>${data[i].actors[1].firstName+" "+data[i].actors[1].lastName+" : "+data[i].actors[1].nationality}</li> 
           <li>${data[i].actors[2].firstName+" "+data[i].actors[2].lastName+" : "+data[i].actors[2].nationality}</li> 
            <li>${data[i].actors[3].firstName+" "+data[i].actors[3].lastName+" : "+data[i].actors[3].nationality}</li> 
          </td>

     </tr>`;
    table.innerHTML += row;
  }
}


function stringSort(){
  let table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  
  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("td")[0];
      y = rows[i + 1].getElementsByTagName("td")[0];

      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }

}
