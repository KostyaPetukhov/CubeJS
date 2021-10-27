"use strict";

// let currentRow = 0;
// let currentColumn = 0;

class Cube {
        constructor (rows, columns) {
            this.rows = rows;
            this.columns = columns;
            this.currentRow = 0;
            this.currentColumn = 0;
            this.createBasicElements();
        }
        
        createBasicElements = () => {

            this.deleteColsButton = document.createElement('button');
            this.deleteColsButton.classList.add('deleteButton');
            this.deleteColsButton.id = 'deleteColsButton';
            this.deleteColsButton.innerHTML = "&minus;";
            this.deleteColsButton.addEventListener('click', this.deleteColumn);
            this.deleteColsButton.addEventListener('mouseenter', this.showDeleteButtons);
            
             
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
            this.currentRow = e.target.parentElement.rowIndex;
            this.currentColumn = e.target.cellIndex;
        
              if (this.currentRow != undefined) {
                console.log(`Строка: ${this.currentRow}, Ячейка ${this.currentColumn}`);
                document.getElementById('deleteRowsButton').style.top = `${this.currentRow*37}px`;
                document.getElementById('deleteColsButton').style.left = `${this.currentColumn*37}px`;
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

            if(this.rows > 1) {
                
                this.table.removeChild(document.querySelectorAll('tr')[this.currentRow]);
                this.rows--;
                }
                if (this.rows == this.currentRow) {
                document.getElementById('deleteRowsButton').style.top = `${(this.currentRow-1)*37}px`;
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





    
    
