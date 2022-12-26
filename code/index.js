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

  for (let i= 0; i < data.length; i++) {
  console.log(i);
    
    
     
      let row =
       `<tr>
           <td>${data[i].film}</td>
           <td>${data[i].director}</td>
           <td>${data[i].runtime + " "}<spanp>min</spanp></td>
           <td>${data[i].year}</td>
             <td>
               <img src="${data[i].poster}" alt="Poster">
             </td> 
             <td>
               <li>${ data[i].festivals[0]} </li>
             </td>
             <td> 
                <li>${data[i].actors[0].firstName+" "+data[0].actors[0].lastName +' '+ data[i].actors[0].nationality}</li> 
              </td>
        </tr>`;    
        
        
        // for (let j = 0 ; j < myArray[0].festivals.length; j++){

        //   row =`<tr>
        //       <td>
        //         <li>${ data[i].festivals[j]} </li>
        //       </td>

        //       <td> 
        //         <li>${data[i].actors[j].firstName+" "+data[0].actors[0].lastName +' '+ data[i].actors[0].nationality}</li> 
        //       </td>
        //   </tr>`
        
        // }
      
        table.innerHTML += row;
}
}







// ===============================   sort string    ===============================================//
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  dir = "asc"; 

  while (switching) {

    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {

      shouldSwitch = false;

      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];

      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {

          shouldSwitch = true;
          break;
        }
      }
    }

    if (shouldSwitch) {

      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;

      switchcount ++;      
    } else {

      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}