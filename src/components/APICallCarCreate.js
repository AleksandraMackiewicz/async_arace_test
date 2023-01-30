
import { APICallBase } from "./APICallBase.js";

export class APICallCarCreate extends APICallBase {
    constructor(name, color){
    let args = {
        name: name,
        color: color
    };
    
    let json_str = JSON.stringify(args);
    console.log("json string in APICallCarCreate is " + json_str);
    let parms = {
        method: 'POST',
        body: json_str,
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    super("/garage", parms);
    }
   
}