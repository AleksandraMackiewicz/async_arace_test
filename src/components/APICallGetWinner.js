import { APICallBase } from "./APICallBase.js";

export class APICallGetWinner extends APICallBase {
    constructor(id){
        let parms = {
            method: 'GET'
        }
    
    super('/winners' + id, parms)
    
    }

    
}
//test
function emptyCallback() {  }

function test4(a){
	console.log("Funkcja testowa!");
	let t1 = new APICallGetWinner(a);
      t1.processRequestJSON(emptyCallback);
}
window.test4 = test4;