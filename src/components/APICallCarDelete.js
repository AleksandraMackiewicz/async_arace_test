import { APICallBase } from "./APICallBase.js";

export class APICallCarDelete extends APICallBase {
    constructor(id) {
        let parms = {
            method: 'DELETE'
        }
        super("/garage/" + id, parms);
    }
};