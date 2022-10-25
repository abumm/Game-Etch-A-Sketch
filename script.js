//globals
let newXY = 0 ;
//default grid size
let x = 16; 


//creating grid div 
let grid = document.createElement('div');
grid.className = 'grid';

let main = document.querySelector('._container ');
main.appendChild(grid);

//create button to edit size of grid
let gridSize = document.createElement('button');
gridSize.innerText = 'Change Grid Size';
gridSize.className = 'gridButton';
main.appendChild(gridSize);


//call grid function 
gridCreate(x);

//hover listner
addEventListener('mouseover', (event) =>{
    if(event.target.className == 'box'){
        event.target.style.backgroundColor = 'red';
    }
    else {
        //do nothing; 
    }
})
//button listner    
gridSize.addEventListener('click', function()
 { sizeFunction();
});


//creating grid function 
function gridCreate(x){
    /* let rows = document.createElement('div');
    rows.className = 'row';
    let columns = document.createElement('div');
    columns.className = 'column'; */

    for (let r = 0; r < x; r++){
        let rows = document.createElement('div');
        rows.className = 'row';
        for (let c = 0; c < x; c++){
            let gridBox = document.createElement('div');
            gridBox.className = 'box';
            rows.appendChild(gridBox);
        }
        grid.appendChild(rows);
    }
}

function sizeFunction(){
    newXY = prompt("Enter a number to resize your drawing board.");

    if(isNaN(newXY)){
        alert("That's not a number, try again.");
        sizeFunction();
    }
    else{
        grid.replaceChildren();
        gridCreate(newXY);
    }
    }
    console.log(newXY);

    console.log(typeof(newXY));


console.log(newXY);