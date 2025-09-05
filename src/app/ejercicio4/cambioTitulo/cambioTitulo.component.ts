import { Component } from '@angular/core';

@Component({
  selector: 'app-cambioTitulo',
  standalone: true,
  templateUrl: './cambioTitulo.component.html',
  styleUrl: './cambioTitulo.component.css'
})
export class cambioTituloComponent {
  titulo: string = "Texto inicial";

  cambiarTitulo() {
    this.titulo = "Hola de nuevo ";
  }
}
