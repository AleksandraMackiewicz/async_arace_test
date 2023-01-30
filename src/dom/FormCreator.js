
export class FormCreator { 
    constructor(){
        this.form = document.createElement('form');
       this.form.setAttribute('onSubmit', 'return false;');

    }

    appendField(type, label, value, name, css, id){
        this.form.appendChild(document.createElement('br'));

     let lab = document.createElement('label');
     lab.for = name;
     lab.innerHTML = label;
    this.form.appendChild(lab);

    let inp = document.createElement('input');
    this.form.appendChild(inp);
    inp.type = type;
    inp.name = name;
    inp.id = name;
    inp.value = value;
    inp.classList.add(css);
    inp.setAttribute('id', id)


    }

    appendButton(text, click, css){
        let bt = document.createElement('button');
        bt.innerHTML = text;
        bt.classList.add(css);
        bt.addEventListener('click', click);
        this.form.appendChild(bt);

     
        
    }

    appendRandom(click){
        let bt = document.createElement('button');
        bt.innerHTML = "Create Random!";
        bt.addEventListener('click', click);
        this.form.appendChild(bt);
    }
  

    getForm(){
        return this.form;
    }

}