import { APICallBase } from "./APICallBase.js";

export class APICallCarList extends APICallBase {
    constructor(pageIndex, _limit) {
        let parms = {
                method: 'GET'
            }

           
            _limit = 7;
            super(`/garage?_page=${pageIndex}&_limit=${_limit}`, parms)
            console.log(parms)
          


        
  

      
      
   

   
}
}