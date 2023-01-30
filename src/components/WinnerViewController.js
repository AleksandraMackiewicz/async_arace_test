import { TableCreator } from "../dom/TableCreator.js";
import { APICallCarList} from "./APICallCarList.js"

import { APICallCarDelete } from "./APICallCarDelete.js"

import { APICallWinnersList } from "./APICallWinnersList.js";



export class WinnerViewController {
    constructor(parentElement){
       
     
       
        this.table = new TableCreator(parentElement);
        this.table.appendTableHead('Nr');
        this.table.appendTableHead('Image of the car');
        this.table.appendTableHead('Name of the car');
        this.table.appendTableHead('Wins number');
        this.table.appendTableHead('Best time in seconds');
        
   
      


         this.paginationDiv = document.createElement('div');
            parentElement.appendChild(this.paginationDiv);
        this.paginationDiv.innerText = 'Pagination'

        let next = document.createElement('button');
        let prev = document.createElement('button');

        this.paginationDiv.appendChild(prev)
        this.paginationDiv.appendChild(next)
       

        next.innerHTML = 'next' 
        prev.innerHTML = 'prev ' 

        this.pageIndex = 0;

        next.onclick = () => { 
           
            this.pageIndex ++;
            this.refreshCarTable();
      
        }

        prev.onclick = () => { 
            if(this.pageIndex > 0){
            this.pageIndex --;
            this.refreshCarTable();
          
            }
        }

       
       
    
        this.refreshCarTable();


        let aPICallWinnersList = new APICallWinnersList();

    }
    deleteCar(id){
        let deleter = new APICallCarDelete(id);
        deleter.processRequestJSON(this.refreshCarTable.bind(this));
    }
    showJson(json){
        this.table.clearBody();

        
        let color = document.querySelector("#new_car_color");
        this.json = json; 
     
        for(let i =0; i < json.length; i++) {
            let row_i = json[i];
            let id = row_i['id'];
            let name = row_i['name'];
            let color = row_i['color'];
           
        
        
            // this.table.beginRow();
            // this.table.addRowText(id);
            // this.table.addRowImage(color);
            // this.table.addRowText(name);
            // this.table.addRowText("123");
            // this.table.addRowText("60.00");



           
           
            // this.table.endRow();
       
           



         
        }   
    }
    

     
    
  
     refreshCarTable() {
        this.listener = new APICallCarList(this.pageIndex);
        this.listener.processRequestJSON(this.showJson.bind(this)); ///???????????

    
     }
    
    
    
    }