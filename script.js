"use strict";

let currentRow = 0;
let currentColumn = 0;

class Cube {
        constructor (rows, columns) {
            this.rows = rows;
            this.columns = columns;
            this.createBasicElements();
            // this.addRows();
            // this.addColumn();
        
        }
        
        createBasicElements = () => {

            this.deleteColsButton = document.createElement('button');
            this.deleteColsButton.classList.add('deleteButton');
            this.deleteColsButton.id = 'deleteColsButton';
            this.deleteColsButton.innerHTML = "&minus;";
            this.deleteColsButton.addEventListener('click', this.deleteColumn);
            this.deleteColsButton.addEventListener('mouseenter', this.showDeleteButtons);
            // this.deleteColsButton.style.left = `${currentRow*37}px`;
            
           
            
            this.deleteRowsButton = document.createElement('button'); 
            this.deleteRowsButton.classList.add('deleteButton');             
            this.deleteRowsButton.id = 'deleteRowsButton';
            this.deleteRowsButton.innerHTML = "&minus;";
            this.deleteRowsButton.addEventListener('click', this.deleteRow);
            this.deleteRowsButton.addEventListener('mouseenter', this.showDeleteButtons);
            
                
            this.table = document.createElement('table');
            this.table.id = 'table';
            this.table.addEventListener('mouseenter', this.showDeleteButtons);
            this.table.addEventListener('mouseleave', this.hideDeleteButtons);
            this.table.addEventListener('mouseover', this.getCurrentIndex);
            
            
            
            this.addColsButton = document.createElement('button');
            this.addColsButton.classList.add('addButton');
            this.addColsButton.id = 'addColsButton';
            this.addColsButton.innerHTML = "+";
            this.addColsButton.addEventListener('click', this.addColumn);
               

            this.addRowsButton = document.createElement('button');
            this.addRowsButton.classList.add('addButton');
            this.addRowsButton.id = 'addRowsButton';
            this.addRowsButton.innerHTML = "+";
            this.addRowsButton.addEventListener('click', this.addRow);
            // this.addRowsButton.onclick = this.addRow;
            
            
        }
        render = () => {

            const root = document.getElementById("root");
            
            const deleteCol = document.createElement('div');
            deleteCol.classList.add('deleteCol');
            deleteCol.append(this.deleteColsButton);
            root.append(deleteCol);

            const middleContext = document.createElement('div');
            middleContext.classList.add('middleContext');

            const deleteRow = document.createElement('div');
            deleteRow.append(this.deleteRowsButton);
            root.append(middleContext);
            middleContext.append(deleteRow);  

                for (let i = 0; i < this.rows; i++){
                    const tr = document.createElement('tr');
                    for (let j = 0; j < this.columns; j++){
                        const td = document.createElement('td');
                        tr.append(td);
                    }
                    this.table.append(tr);
                }
                middleContext.append(this.table);
            
            middleContext.append(this.addColsButton);

            const addRow = document.createElement('div');
            addRow.classList.add('addRow');
            addRow.append(this.addRowsButton);
            root.append(addRow);
            
        }

        getCurrentIndex = () => {

        this.table.addEventListener("mouseover", function (e) {
            let rowIndex = e.target.parentElement.rowIndex;
            let cellIndex = e.target.cellIndex;
        
              if (rowIndex != undefined) {
                console.log(`Строка: ${rowIndex}, Ячейка ${cellIndex}`);
                currentRow = rowIndex;
                currentColumn = cellIndex;
                return currentColumn, currentRow;
                // this.deleteColsButton.style.left =  20 +'px';//`${cellIndex*37}px`;
                // this.deleteRowsButton.style.top = `${rowIndex*37}px`;
              }
          });
        }

        addRow = () => {
           
            const tr = document.createElement('tr');

              for (let i = 0; i < this.columns; i++){
                const td = document.createElement('td');
                tr.append(td);
              }
            this.table.append(tr);
            this.rows++;
            console.log(currentRow);
        }
   

        addColumn = () => {
            
            const rows = this.table.querySelectorAll('tr');

            for (let i = 0; i < this.rows; i++) {
                const td = document.createElement('td');
                rows[i].append(td);
            }
            this.columns++;
        }
        
        deleteRow = () => {
            // let currentRow = currentIndex.row;
           
              if(this.rows > 1)
              {
                this.table.removeChild(this.table.querySelectorAll('tr')[0]);
                this.rows--;
            }
        }

        deleteColumn = () => {
            // let currentColumn = currentIndex.column;
            const rows = this.table.querySelectorAll('tr');
            
                if (this.columns > 1) {
                for (let i = 0; i < this.rows; i++) {
                    rows[i].removeChild(rows[i].getElementsByTagName('td')[0]);
                }
                this.columns--;
                }
        }

        showDeleteButtons = () => {
            if(this.columns > 1) {
            this.deleteColsButton.style.visibility = "visible";
            }
            if (this.rows > 1 ) {
            this.deleteRowsButton.style.visibility = "visible";
            }
        }
          
        hideDeleteButtons = () => {
            this.deleteColsButton.style.visibility = "hidden";
            this.deleteRowsButton.style.visibility = "hidden";
        }
        
}

const firstCube = new Cube(4, 4);
firstCube.render();

// const secondCube = new Cube(5, 5);
// secondCube.render();





    
    
