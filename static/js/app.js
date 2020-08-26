// from data.js
var tableData = data;
var tbody = d3.select("tbody")

function populateTable(array){
tbody.html("")
    array.forEach(row => {
        
        var tr = tbody.append("tr")
        tr.append("td").text(row.datetime)
        tr.append("td").text(row.city)
        tr.append("td").text(row.state)
        tr.append("td").text(row.country)
        tr.append("td").text(row.shape)
        tr.append("td").text(row.durationMinutes)
        tr.append("td").text(row.comments)
    });
    
}
function onClick(){
    d3.event.preventDefault()
    var userInput = d3.select("#datetime").property("value")
    var filterData = tableData.filter(row=>row.datetime==userInput)
    populateTable(filterData)
    console.log(filterData);
}


d3.select ("#filter-btn").on("click", onClick)
// YOUR CODE HERE!
populateTable(tableData)