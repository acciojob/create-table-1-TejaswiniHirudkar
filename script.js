function insert_Row() {
    //Write your code here
  var tabel=document.getElementById('sampleTable');
	var newRow=tabel.insertRow(0);
	var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
	/ Set the cell values
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
  
}
