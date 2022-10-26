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
let gridSizeBtn = document.createElement('button');
gridSizeBtn.innerText = 'Change Grid Size';
gridSizeBtn.className = 'gridButton';
main.prepend(gridSizeBtn);


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
gridSizeBtn.addEventListener('click', function()
 { sizeFunction();
});


//creating grid function 
function gridCreate(x){
    /* let rows = document.createElement('div');
    rows.className = 'row';
    let columns = document.createElement('div');
    columns.className = 'column'; */

    for (let r = 1; r <= x; r++){
        let rows = document.createElement('div');
        rows.className = 'row';
        for (let c = 1; c <= x; c++){
            let gridBox = document.createElement('div');
            gridBox.className = 'box';
            //console.log(x,r,c)
            rows.appendChild(gridBox);
        }
        grid.appendChild(rows);
    }
}

function sizeFunction(){
    newXY = prompt("Enter a number to resize your drawing board.");

    if(isNaN(newXY) || newXY <= 0){
        alert("That's not a number, try again.");
        sizeFunction();
    }
    else if(newXY > 100){
        newXY = 100;
        grid.replaceChildren();
        gridCreate(newXY);
        //console.log(newXY);
    }
    else {
        grid.replaceChildren();
        gridCreate(newXY);
        //console.log(newXY);

    } 
    }
