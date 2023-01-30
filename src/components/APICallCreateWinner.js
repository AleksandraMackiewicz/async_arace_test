import { APICallBase } from "./APICallBase.js";

export class APICallCreateWinner extends APICallBase {
    constructor(id){
        args = {
            id: id
        }
     

        let json_str = JSON.stringify(args);
        console.log("json string in APICallCarCreate is " + json_str);
        let parms = {
            method: 'POST',
            body: json_str,
            headers: {
                'Content-Type' : 'application/json'
            }
        }
        super("/winners", parms);
    }
}