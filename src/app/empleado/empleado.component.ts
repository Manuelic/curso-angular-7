import {Component} from '@angular/core';
import {Empleado} from './empleado';
import { from } from 'rxjs';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{
    public nombre_componente = 'Componente de empleados: ';
    public listado_empleados = 'Pepe, Andrés, Carolina y Paula';
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;
    public color:string;
    public color_seleccionado:string;

    constructor(){
        this.empleado = new Empleado('Raul del Pozo', 34, 'profesor', false);
        this.trabajadores = [
            new Empleado('Pepe López', 46, 'técnico', true),
            new Empleado('Sara Martín', 27, 'recepcionista', true),
            new Empleado('José Perez', 67, 'mantenimiento', false)
        ];
        this.trabajador_externo = true;
        this.color = 'blue';
        this.color_seleccionado = 'yellow';
    }

    ngOnInit(){
        
    }

    cambiarExterno(valor){
        this.trabajador_externo = valor;
    }
}
