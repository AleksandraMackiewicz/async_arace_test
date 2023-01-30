import { APICallBase } from "./APICallBase.js";
export class APICallWinnersList extends APICallBase {
    constructor(){
        let parms = {
            method:  'GET',

        }
        let _page = 7;
        let _limit = 7; 
        // let _sort
        // let _order
   
    super(`/winners?_page=${_page}&_limit=${_limit}`, parms)

        
        // super(`/winners?_page=${_page}&_limit=${_limit}&_sort=${sort}}`, parms)
    }
}