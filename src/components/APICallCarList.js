import { APICallBase } from "./APICallBase.js";

export class APICallCarList extends APICallBase {
    constructor(pageIndex, _limit) {
        let parms = {
                method: 'GET'
            }

           
            _limit = 7;
            super(`/garage?_page=${pageIndex}&_limit=${_limit}`, parms)
          
          


        
  

      
      
   

   
}
}
//test
function emptyCallback() {  }

function test1(a, b){
	console.log("Funkcja testowa!");
	let t1 = new APICallCarList(a,b);
      t1.processRequestJSON(emptyCallback);
}
window.test1 = test1;