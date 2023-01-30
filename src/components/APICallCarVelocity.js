import { APICallBase } from "./APICallBase.js";

export class APICallCarVelocity extends APICallBase {
    constructor(id, status){
        console.log(id)
        console.log(status)
        let parms = {
            method: 'PATH',
            status: status

        }
        super('/engine'+id, parms);
    }
}

