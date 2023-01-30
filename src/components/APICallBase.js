
export class APICallBase {
    constructor(subURL, parms) {
        this.url = "http://127.0.0.1:3000" + subURL;
        this.parms = parms
    }
    async processRequestJSON(callback) {
        const response = await fetch(this.url, this.parms);
        const json = await response.json();
  
        let count = response.headers.get('X-Total-Count')
      
        callback(json, count);
       
 
    }
}

