//creating grid div 
let grid = document.createElement('div');
grid.className = 'grid';

let main = document.querySelector('body');
main.appendChild(grid);


//call grid function 
gridCreate();

//creating grid function 
function gridCreate(){
    /* let rows = document.createElement('div');
    rows.className = 'row';
    let columns = document.createElement('div');
    columns.className = 'column'; */

    for (let r = 0; r < 16; r++){
        let rows = document.createElement('div');
        rows.className = 'row';
        for (let c = 0; c < 16; c++){
            let gridBox = document.createElement('div');
            gridBox.className = 'box';
            rows.appendChild(gridBox);
        }
        grid.appendChild(rows);
    }

}