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
// build the function that builds the films data tables
function buildTable(data) {
	let table = document.getElementById("tBody");
	table.innerHTML = "";
	// get the table id from html
	for (let i = 0; i < data.length; i++) {
		let row = "";
		//first row build
	 row +=
			`<tr>
					 <td>${data[i].film}</td>
					 <td>${data[i].director}</td>
					 <td>${data[i].runtime}<span>min</span></td>
					 <td>${data[i].year}</td>
						 <td>
							 <img src="${data[i].poster}" alt="Poster">
						 </td>
						 <td>  `  ;
		for (let j = 0; j < myArray[i].festivals.length; j++) {
		 row += ` <li>${data[i].festivals[j]} </li> `
		};
	 row += `</td><td>`;
		for (let j = 0; j < myArray[i].actors.length; j++) {
		 row += ` <li>${data[i].actors[j].firstName + " " + data[i].actors[j].lastName + ' : ' + data[i].actors[j].nationality}</li> `
		};
	 row += `</td></tr> `;
		// creation of reaplaceds to apear in html
		table.innerHTML += row;
	}
}
//===================================================   search function   =====================================================//
const searchInput = document.getElementById("search");
searchInput.addEventListener("keyup", function (event) {
	const rows = document.querySelectorAll("tbody tr");
	const q = event.target.value.toLowerCase();
	rows.forEach((row) => {
		row.querySelector("td").textContent.toLowerCase().includes(q)
			? (row.style.display = "")
			: (row.style.display = "none");
	});
});
// ===============================   sort string    ===============================================//
const StringSort = (n) => {
	let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
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
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function () {
	myArray.sort(function (a, b) {
		return a.runtime - b.runtime;
	});
	buildTable(myArray)
	document.getElementById("btn1").style.display ="none"
	document.getElementById("btn2").style.display ="inline"
});
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
	myArray.sort(function (a, b) {
		return b.runtime - a.runtime;
	});
	buildTable(myArray)
	document.getElementById("btn2").style.display ="none"
	document.getElementById("btn1").style.display ="inline"
});
