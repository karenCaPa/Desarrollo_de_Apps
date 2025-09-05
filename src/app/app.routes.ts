import { Routes } from '@angular/router';
import { ListaComponent } from './ejercicio4/Lista/Lista.component';
import { cambioTituloComponent } from './ejercicio4/cambioTitulo/cambioTitulo.component'; 
import { sumaComponent } from './ejercicio4/suma/suma.component';

export const routes: Routes = [
    {path:'Lista',component:ListaComponent},
    { path: 'cambioTitulo', component: cambioTituloComponent } ,
    {path:'suma',component:sumaComponent}
];
