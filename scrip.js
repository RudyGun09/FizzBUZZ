let hasil = document.getElementById("hasil"); //target yang akan di masukan keluaran dari logika operasi

hasil.innerHTML = ""; //mendefinisikan Hasil samadengan kosong
function result() {
  let input = document.getElementById("input").value; //mengambil nilai input dari id input
  let node = document.createElement("div"); //membuat elemn div
  let tulisan = document.createTextNode(input); // membuat tulisan yang akan menjadi hasil output
  //node.appendChild(tulisan);
  // hasil.appendChild(node);

  if (input == 0) {
    tulisan = document.createTextNode("Invalid Input");
  } else if (input % 3 == 0 && input % 5 == 0) {
    tulisan = document.createTextNode("FIZ BUZ");
  } else if (input % 5 == 0) {
    tulisan = document.createTextNode("BUZ");
  } else if (input % 3 == 0) {
    tulisan = document.createTextNode("FIZ");
  } else {
    tulisan = document.createTextNode(input);
  }

  node.appendChild(tulisan); //memasukan tulisan dari hasil ke dalam div
  hasil.appendChild(node); // memasukan hasil div ke dalam div di HTML dengan id="hasil"
}
