import { APICallBase } from "./APICallBase.js";

export class APICallCarEngineState extends APICallBase {
    constructor(id, status){
        let args = {
            id: id,
            status: status
        }
        let json_str = JSON.stringify(args)
        let parms = {
            method: 'PATCH'
        }
       super("/engine?id="+id+"&status="+status, parms);
    }
}
//test
function emptyCallback() {  }
function test2(a, b){
    console.log('tesing function');
    let t1 = new APICallCarEngineState(a,b);
    return t1.processRequestJSON(emptyCallback(), )

}

window.test2 = test2;
