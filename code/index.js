let myArray; //array impoted from json file

function getData() {  //  get data from the file and give it to th myArray letiable
	$.ajax({
		url: "index.json", // specifiyning the url of the json file
		type: "GET",// precise the method 
		dataType: "json", //precise file type
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
					 <td>${data[i].runtime}<span> min</span></td>
					 <td>${data[i].year}</td>
						 <td>
							 <img src="${data[i].poster}" alt="Poster">
						 </td>
						 <td>  `  ;

						for (let j = 0; j < myArray[i].festivals.length; j++) {
						row += ` <li>${data[i].festivals[j]}</li> `
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

const searchInput = document.getElementById("search");//get input by its id

searchInput.addEventListener("keyup", function (event) { //on key up declare function 

	const rows = document.querySelectorAll("tbody tr"); // select the rows i want to search in 
	const q = event.target.value.toLowerCase();// make the input value to lowercase and 
	rows.forEach((row) => { // target all the rows i want to search in
		row.querySelector("td").textContent.toLowerCase().includes(q) // make sure if the data inputed in the input is included in the search function
			? (row.style.display = "") // display the data that includes the value inputed 
			: (row.style.display = "none"); // hide the data that is not included in the input value
	});
});

// ===============================   sort string    ===============================================//

const StringSort = (n) => {

	let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	table = document.getElementById("myTable");
	switching = true;
	// Set the sorting direction to ascending:
	dir = "asc";
	/* Make a loop that will continue until
	no switching has been done: */
	while (switching) {
		// Start by saying: no switching is done:
		switching = false;
		rows = table.rows;
		/* Loop through all table rows (except the
		first, which contains table headers): */
		for (i = 1; i < (rows.length - 1); i++) {
			// Start by saying there should be no switching:
			shouldSwitch = false;
			/* Get the two elements you want to compare,
			one from current row and one from the next: */
			x = rows[i].getElementsByTagName("td")[n];
			y = rows[i + 1].getElementsByTagName("td")[n];
			/* Check if the two rows should switch place,
			based on the direction, asc or desc: */
			if (dir == "asc") {
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
				// If so, mark as a switch and break the loop:

					shouldSwitch = true;
					break;
				}
			} else if (dir == "desc") {
				if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
				// If so, mark as a switch and break the loop:

					shouldSwitch = true;
					break;
				}
			}
		}
		if (shouldSwitch) {
			/* If a switch has been marked, make the switch
		and mark that a switch has been done: */
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
		// Each time a switch is done, increase this count by 1:
			switchcount++;
		} else {
			/* If no switching has been done AND the direction is "asc",
	  		set the direction to "desc" and run the while loop again.*/

			if (switchcount == 0 && dir == "asc") {
				dir = "desc";
				switching = true;
			}
		}
	}
  }

// ====================================================   sort number   ========================================================//

const btn1 = document.getElementById("btn1"); //target my button of sort 

btn1.addEventListener("click", function () { // add an event to this button 

	myArray.sort(function (a, b) {  // sort myArray ascendent 
		return a.runtime - b.runtime; // the propositions to sort myArray
	});
	buildTable(myArray) //rebuild the table sorted ascendently
	document.getElementById('btn2').style.display ="inline"
	document.getElementById('btn1').style.display ="none"
});

const btn2 = document.getElementById("btn2");//target my button of sort 

btn2.addEventListener("click", function () {// add an event to this button 

	myArray.sort(function (a, b) {// sort myArray descendent 
		return b.runtime - a.runtime; // the propositions to sort myArray
	});
	buildTable(myArray)//rebuild the table sorted descendently
	document.getElementById('btn1').style.display ="inline"
	document.getElementById('btn2').style.display ="none"

});