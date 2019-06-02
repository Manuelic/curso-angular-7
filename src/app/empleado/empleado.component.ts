import {Component} from '@angular/core';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{
    public nombre_componente = 'Componente de empleado';
    public listado_empleados = 'Pepe, Andrés, Carolina y Paula';
}