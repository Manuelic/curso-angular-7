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

    constructor(){
        this.empleado = new Empleado('Pepe López', 46, 'técnico', true);
        this.trabajadores = [
            new Empleado('Pepe López', 46, 'técnico', true),
            new Empleado('Sara Martín', 27, 'recepcionista', true),
            new Empleado('José Perez', 67, 'mantenimiento', false)
        ];
    }

    ngOnInit(){
        
    }
}
