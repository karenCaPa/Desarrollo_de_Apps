import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-Lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './Lista.component.html',
  styleUrl: './Lista.component.css'
})
export class ListaComponent {
title = "Lista";
  nuevoItem = "";         
  items: string[] = [];   

  agregarItem() {
    if (this.nuevoItem.trim() !== "") {
      this.items.push(this.nuevoItem);
      this.nuevoItem = ""; 
    }
  }

  eliminarItem(index: number) {
    this.items.splice(index, 1);
  }
}


