class NewPokemon{
    constructor(public id:number,public name:string){

    }

    scream(){
        console.log(`NO`);
    }

    speak(){
        console.log(`No habla`);
    }
}


const MyDecorator = ()=>{
    return (target:Function)=>{
        return  NewPokemon;
    }
}

@MyDecorator()
export class Pokemon{
    constructor(public id:number,public name:string){

    }

    scream(){
        console.log(`${this.name.toUpperCase()}`)
    }

    speak(){
        console.log(`${this.name}, ${this.name}`);
    }
}

export const charmander = new Pokemon(1,'Charmander');
charmander.scream();