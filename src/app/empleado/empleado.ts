export class Empleado{

    constructor(
        public nombre:string,
        public edad:number,
        public cargo:string,
        public contratado:boolean
    ){

    }

    /*

    Esta es la forma clásica de definir una clase, pero
    con TS se puede definir de la forma que vamos a ver en el código

    public nombre:string;
    public edad:number;
    public cargo:string;
    public contratado:boolean;

    constructor(nombre, edad, cargo, contratado){
        this.nombre = nombre;
        this.edad = edad;
        this.cargo = cargo;
        this.contratado = contratado;
    }*/
}