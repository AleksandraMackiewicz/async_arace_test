import { TableCreator } from "../dom/TableCreator.js";
import { APICallCarList} from "./APICallCarList.js"
import { FormCreator } from "../dom/FormCreator.js";
import { APICallCarCreate } from "./APICallCarCreate.js";
import { APICallCarDelete } from "./APICallCarDelete.js"
import { APICallCarUpdate } from "./APICallCarUpdate.js";
import { APICallWinnersList } from "./APICallWinnersList.js";


export class CarViewController {
    constructor(parentElement){

//create update pop up

        this.updateContainer = document.createElement('div')
        this.updateContainer.classList.add('update_container')
        this.updateDiv = document.createElement('div');
        this.updateDiv.classList.add('update_div')
        this.cf2 = new FormCreator();
        this.cf2.appendField("text","New car name", "Volvo", "update_name", 'updateName', 'updateName');

        this.cf2.appendField("color","Your paint", "#000000", "update_color",'updateColor','updateColor');
        

        let garage_ = document.querySelector('.garage_content');
 
        garage_.appendChild(this.updateContainer);
        garage_.appendChild(this.updateDiv)
        this.updateDiv.appendChild(this.cf2.getForm());

  

  

  
        this.updateContainer.style.backgroundColor = 'rgba(171, 171, 171, 0.1)'
        this.updateContainer.style.position = 'absolute';
        this.updateContainer.style.width = '100%';
        this.updateContainer.style.height = '100%';
        this.updateContainer.style.marginLeft = '-70px';
        
        this.updateContainer.style.display = 'none';

        this.updateDiv.style.position = 'absolute'
        this.updateDiv.style.backgroundColor = 'grey'
        this.updateDiv.style.top = '50%';
        this.updateDiv.style.left = '50%';
        this.updateDiv.style.display = 'none'






//create top form
        this.cf = new FormCreator();
        this.cf.appendField("text","New car name", "Volvo", "new_car_name","new_car_name","new_car_name");
        this.cf.appendField("color","Your paint", "#000000", "new_car_color","new_car_color","new_car_color");
        this.cf.appendButton('Create!',this.createCar.bind(this));

        this.cf.appendRandom(this.createRandom.bind(this));
        parentElement.appendChild(this.cf.getForm());
    
       
//create table
        this.garageStatusDiv = document.createElement('div');
        this.garageStatusDiv.innerText = '';
       


        parentElement.appendChild(this.garageStatusDiv)
        this.table = new TableCreator(parentElement);
        
        this.table.appendTableHead('ID');
        this.table.appendTableHead('Name');
        this.table.appendTableHead('Color');
 // ---------button race-----------------
        
        this.table.appendTableHead('');
        this.table.appendTableHeadButton('RACE!')
        this.table.appendTableHeadButtonStop('stop')


   
//create pagination


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

        this.pPageIndex = document.createElement('p');
        this.paginationDiv.appendChild(this.pPageIndex);

        this.pPageIndex.innerText = 1;
        next.onclick = () => { 
           let x = 0;
           x = Math.ceil(this.count / 7)
  



           if(this.pageIndex < x){ 
            this.pageIndex ++;
            this.refreshCarTable();
           
            this.pPageIndex.innerText = this.pageIndex + 1;}
        }

       

        prev.onclick = () => { 
            if(this.pageIndex > 0){
            this.pageIndex --;
            this.refreshCarTable();
          
            this.pPageIndex.innerText = this.pageIndex + 1;
            }
        }

       
       

        this.refreshCarTable();

       
       
    }
    deleteCar(id){
        let deleter = new APICallCarDelete(id);
        deleter.processRequestJSON(this.refreshCarTable.bind(this));
    }


    updateCar(id){
  



        this.editingCarID = id;
        this.updateContainer.style.display = 'block'
        this.updateContainer.style.zIndex = '1';
        this.updateDiv.style.zIndex = '2'
        this.updateDiv.style.display = 'block'


            this.updateContainer.addEventListener('click', ()=>{
            this.updateContainer.style.display = 'none';
            this.updateDiv.style.display = 'none'
            })
 


        
        
     

        this.cf2.appendButton('Done!',this.updateCarDone.bind(this), 'update');

       


    }

    updateCarDone(id){
        id = this.editingCarID
   

        let updateColorField = document.querySelector('#updateColor');
        let updateNameField = document.querySelector('#updateName');

        let color = updateColorField.value;
        let name = updateNameField.value;

        console.log(name)


        this.updateDiv.style.display = 'none'
        this.updateContainer.style.display = 'none'
        // this.cf2.style.display = 'none'

        let updater = new APICallCarUpdate(id, name, color);
        updater.processRequestJSON(this.refreshCarTable.bind(this));
    }


    showJson(json, count){
      this.count = count; 
     
        this.table.clearBody();
     


        let color = document.querySelector("#new_car_color");
        this.json = json;
       
        for(let i =0; i < json.length; i++) {
            let row_i = json[i];
            let id = row_i['id'];
            let name = row_i['name'];
            let color = row_i['color'];
        
        
            this.table.beginRow();
            this.table.addRowText(id);
            this.table.addRowText(name);
            this.table.addRowText(color);
      
            let fc = new FormCreator();
            let that = this;
            fc.appendButton('Delete', function(){that.deleteCar(id)}, 'delete_button');
            fc.appendButton('Update', function(){that.updateCar(id)}, 'upgrade_button');

            this.table.addRowObject(fc.getForm());
            this.table.endRow();
          
           
            this.table.beginRow();
            this.table.addRowImage(color);

           
            
            this.table.endRow();

          
            this.table.beginRow();


            //add play pause icons
        this.table.addRowIcons('play','pause', id);
        
   

           
   
            this.table.endRow();
       
           



         
        }   
        this.garageStatusDiv.innerText =`Cars count: ${this.count}`;
      
    }
    

     createCar() {

        let fieldColor = document.querySelector('#new_car_color');
        let fieldName = document.querySelector('#new_car_name');
    
        let color = fieldColor.value;
     
        let name = fieldName.value;
        
     
        let creator = new APICallCarCreate(name, color);

        creator.processRequestJSON(this.refreshCarTable.bind(this));
    




     }
     createRandom(){ 
     
        let names = ['BMW', 'Nissan','Toyota','Fiat','Chevrolet'];
        let models = ['i8', '3 series', 'S series', '1500 Club Coupe','124 Spider'];


        for(let i = 0; i < 100; i++) {
        let randomName = names[Math.floor(Math.random() * names.length)];
        let randomModel = models[Math.floor(Math.random() * models.length)];
      
        let name = randomName + randomModel;
        console.log(name)

        let letters = '0123456789ABCDEF';
        let color = '#';
        for(let i =0; i < 6; i++) {
            color += letters[Math.floor(Math.random()*16)];

        }

        console.log(color);
       
            console.log(name)
            let aPICallCreate = new APICallCarCreate(name, color);
            aPICallCreate.processRequestJSON(this.refreshCarTable.bind(this)); // I dont get it at all :()
        }
     
     


        

   

     }
     
    
  
     refreshCarTable() {
        this.listener = new APICallCarList(this.pageIndex);
        this.listener.processRequestJSON(this.showJson.bind(this)); ///???????????

 
        
        
     }
    
    
    
    }