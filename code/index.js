// ================================================ Tableau body ======================================================================//

let myArray; //========= array impoted from json file


function getData() {  //  get data from the file and give it to th myArray variable
	$.ajax({

		url: "index.json",  // specifiyning the url of the json file
		success: function (data) {

			myArray = data;  //asigning data to myArray
			buildTable(myArray); // build table and replace the parameter with myArray

		},
	});
}

getData();  // self invoke the function that gets the data  and asign it to the array

/* */

// build the function that builds the films data tables

function buildTable(data) {

	let table = document.getElementById("myTable"); // get the table id from html

	for (let i = 0; i < data.length; i++) {

		let row1, row2;

		//first row build
		row1 =
			`<tr>
					 <td>${data[i].film}</td>
					 <td>${data[i].director}</td>
					 <td>${data[i].runtime + " "}<spanp>min</spanp></td>
					 <td>${data[i].year}</td>
						 <td>
							 <img src="${data[i].poster}" alt="Poster">
						 </td>
						 ` +  				for (let j = 0; j < myArray[i].festivals.length; j++) {


			row2 += `
									<td>
										<li>${data[i].festivals[j]} </li>
									</td>
		
									<td>
										<li>${data[i].actors[j].firstName + " " + data[i].actors[j].lastName + ' : ' + data[i].actors[j].nationality}</li>
									</td>
							</tr>`
		};

		//second row build




		// la somme of th two rows
		let row = row1

		// creation of rows to apear in html
		table.innerHTML += row;
	}
}



























// ===============================   sort string    ===============================================//
function SortTable(n) {
	let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	table = document.getElementById("myTable");
	switching = true;
	dir = "asc";
	console.log(switchcount);

	while (switching) {

		switching = false;
		rows = table.rows;

		for (i = 1; i < (rows.length - 1); i++) {

			shouldSwitch = false;

			x = rows[i].getElementsByTagName("TD")[n];
			y = rows[i + 1].getElementsByTagName("TD")[n];

			if (dir == "asc") {
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

					shouldSwitch = true;
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

			switchcount++;
		} else {

			if (switchcount == 0 && dir == "asc") {
				dir = "desc";
				switching = true;
			}
		}
	}
}

// ====================================================   sort number   ========================================================//

const NumberSort = () => {

}




//===================================================   search function   =====================================================//

const FilmSearch = () => {

}