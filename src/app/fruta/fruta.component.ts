import {Component} from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})

export class FrutaComponent{
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

    public nombre:String;
    public edad:Number;
    public esCierto:Boolean;
    public cosas:Array<any>;

    constructor(){
        this.nombre = 'Un Nombre';
        this.edad = 22;
        this.esCierto = true;
        this.cosas = ['texto', 22, false];
    }

    ngOnInit(){
        this.cambiarNombre();
        this.cambiarEdad();

        //Variables y alcance
        var uno = 1;
        var dos = 2;

        if(uno === 1){
            let uno = 11;
            var dos = 22;
            console.log('Dentro del if, el valor de uno es:' + uno);
        }

        console.log('Fuera del if, el valor de uno es:' + uno);
    }

    cambiarNombre(){
        this.nombre = 'Otro nombre nuevo';
        //alert(this.nombre);
    }

    cambiarEdad(){
        this.edad = 50;
        console.log(this.edad);
    }
}