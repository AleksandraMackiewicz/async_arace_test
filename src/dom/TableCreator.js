import { CarViewController } from "../components/CarViewController.js";
import { APICallCarEngineState } from "../components/APICallCarEngineState.js"
import { APICallCreateWinner } from "../components/APICallCreateWinner.js";

export class TableCreator {
    constructor(parentElement){
        this.form = document.createElement('form');
        this.table = document.createElement('table');
        this.thead = document.createElement('thead'); 
        this.tbody = document.createElement('tbody');
        this.headeRow = document.createElement('tr');
        
        this.table.appendChild(this.thead);
        this.thead.appendChild(this.headeRow);
        //header object to add this.img?
        this.table.appendChild(this.tbody);
        parentElement.appendChild(this.table);


        // this.tr4 = document.createElement('tr');

    }

    
    appendTableHead(text) {
        
        let td = document.createElement('td');
        td.innerText = text;
        this.headeRow.appendChild(td);
     
    }
    appendTableHeadButton(text) {
        
        let td = document.createElement('td');
        this.btRace = document.createElement('button');
        this.btRace.innerText = text;
        this.btRace.style.backgroundColor = 'red';
        td.appendChild(this.btRace);


       let bt = this.btRace;



        this.headeRow.appendChild(td);
     
    }

    appendTableHeadButtonStop(text) {
        
        let td = document.createElement('td');
        this.btStop = document.createElement('button');
        this.btStop.innerText = text;
        this.btStop.style.backgroundColor = 'red';
        td.appendChild(this.btStop);


       let bt = this.btStop;



        this.headeRow.appendChild(td);
     
    }
    clearBody() {
        this.tbody.innerHTML = '';
    }
    beginRow() {
        this.newRow = document.createElement('tr');
        let newRow = this.newRow
        
        return newRow;
        
    }
    addRowText(text){
        let td = document.createElement('td');
        td.innerText = text;
        this.newRow.appendChild(td);

    }

    addRowObject(obj){
        let td = document.createElement('td');
        // console.log(obj);
        td.appendChild(obj);
        this.newRow.appendChild(td);
    }
    addRowImage(color){


        let td = document.createElement('td');
        td.setAttribute('colspan', '4 ')
        let img = document.createElement('object');
        img.classList.add('car_image');
//------This is needed ----
        this.img = img;
//---------------------
        img.setAttribute('id', 'colorChangeSvg');
        img.setAttribute('type', 'image/svg+xml');
       img.setAttribute('data','./src/assets/racing_car2.svg');
       img.addEventListener("load",  function() {
                    // console.log("loaded"+img);

                    let svg = img.contentDocument;
                    // console.log("Svg" +svg);
                    let element = svg.querySelector("#path12");
                
                // console.log('el'+ element)
                   element.style.fill = color;
                   img.width = 100; img.height = 40;
       });
       

      
        // console.log('show img'+img);
        td.appendChild(img);
        
        this.newRow.appendChild(td);

       // upewnij sie ze nie pokazuje sie przed zmiana koloru!!!
      // console.log("Stary display: " + img.style.display);
      img.width = 1; img.height = 1;


       return this.img;





    }

    addRowIcons(iconClass1, iconClass2, id){
        let td = document.createElement('td');
        let div = document.createElement('icons_div');
        let bt1 = document.createElement('button');
        let bt2 = document.createElement('button');

        let meta = document.createElement('img')
        meta.src = "src/assets/racing-flag.png"
        meta.classList.add('meta')
   
        let editingCarId = id;
        // console.log(iconClass1);
        // console.log(div)
        div.innerText = '';
        bt1.classList.add(iconClass1);
        bt2.classList.add(iconClass2);
        bt1.setAttribute('id', iconClass1)
        bt2.setAttribute('id', iconClass2)
        td.appendChild(div);
        div.appendChild(bt1)
        div.appendChild(bt2)
        div.appendChild(meta);
        this.newRow.appendChild(td);

    
let img = this.img

let btRace = this.btRace



        // this.btRace.addEventListener('click', () => {
 
        //     bt1.click();
          
        // })


        // //----------------------------NEW
        
        // this.btStop.addEventListener('click', () => {
 
        //     bt2.click();
          
        // })





        // bt2.addEventListener('click', () => {
        //     let status = 'stopped';
        //     let aPICallCarEngineState = new APICallCarEngineState(id, status);
            
          

        // });


    //   this.btRace.addEventListener('click', () => {

    //     img.style.animation =  'car_move 2s ease-in'
        
    //   })

    //WELL, it works but without velocity


    this.showButtons(bt1,bt2, img, editingCarId)

    }

    showButtons(bt1,bt2,img, editingCarId){

        let btRace = this.btRace
     let playBts = document.querySelectorAll('.play')
    let isAnimating = false;

        function animation(img){
       
            isAnimating = true;
            btRace.disabled = true;

            let status = 'started';
            let aPICallCarEngineState = new APICallCarEngineState(editingCarId, status);
    
            aPICallCarEngineState.processRequestJSON((res)=> {
            //    let resStr = JSON.stringify(res);
                // console.log('I got ' + res)
               res.velocity = res.velocity * 0.01
            //    res.distance = res.distance * 0.001
                res.distance = 500;
    
                
    // ===========Animation===================
                img.style.animation =  `car_move ${res.velocity}s ease-in`
                img.addEventListener('animationend', () => {
                    isAnimating = false;
                    btRace.disabled = false;
                })


    
         
            })
       

            
    }
    //================Stop Animation===============
        function stopAnimation(){
            isAnimating = false;
            btRace.disabled = false;
            

         img.style.animation = 'none'
         console.log(bt2 +'stopp')
        }
    


            bt1.addEventListener('click', () => {animation(img)});
            bt2.addEventListener('click', () => {stopAnimation()})
    
        
         this.btRace.addEventListener('click', () => {
 
            bt1.click();
          
        })

          this.btStop.addEventListener('click', () => {
 
            bt2.click();
          
        })


    }



    getImg(){
        return this.img;
    }

  


    endRow(){
        this.tbody.appendChild(this.newRow);
        this.newRow = null;
    //  let  tbody = this.tbody
        return this.tbody;
    }
   
 

    getForm(){
        

        return this.form;
        // console.log(this.form)  



    }
}
