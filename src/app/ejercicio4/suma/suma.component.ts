import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suma',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './suma.component.html',
  styleUrl: './suma.component.css'
})
export class sumaComponent {

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

    sumar() {
    this.resultado = this.numero1 + this.numero2;
  }

}

