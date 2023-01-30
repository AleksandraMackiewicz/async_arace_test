import { APICallBase } from "./APICallBase.js";

export class APICallCarUpdate extends APICallBase {
    constructor(id, name, color) {


        let args = {
            name: name,
            color: color
        };
        
        let json_str = JSON.stringify(args);
        console.log("json string in APICallCarUpdate is " + json_str);

        let parms = {
            method: 'PUT',
            body: json_str,
            headers: {
                'Content-Type' : 'application/json'
            }

        }
        super("/garage/" + id, parms);
    }
};