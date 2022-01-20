
"use strict";

function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}






let output = document.getElementById("all");

function BishBosh() {

    

    let range = document.getElementById("rangeInput").value; 
    let bish = document.getElementById("bish").value;
    let bosh = document.getElementById("bosh").value;

    //let inputs = range(1, range);

    for (let i = 1; i < range; i++){
         if (i % bish == 0 && i % bosh == 0) {
             output.innerHTML += 'BishBosh, ';
         }
         else if (i % bish == 0) {
             output.innerHtml += 'Bish, ';
        }
         else if (i % bosh == 0) {
             output.innerHTML += 'Bosh, '
        }
         else {
             output.innerHTML += i;
        }
        
    }
     

    
   
    

    
}



document.getElementById("subBtn").addEventListener('click', BishBosh);

