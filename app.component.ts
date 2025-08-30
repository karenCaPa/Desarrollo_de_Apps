import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('lista', { static: true }) lista!: ElementRef<HTMLUListElement>;

  agregarItem(input: HTMLInputElement) {
    const texto = input.value.trim();
    if (texto === '') return;

    
    const li = document.createElement('li');
    li.textContent = texto;

    
    const btn = document.createElement('button');
    btn.textContent = 'borrar';
    btn.style.marginLeft = '10px';

    btn.addEventListener('click', () => {
      li.remove();
    });

    
    li.appendChild(btn);
    this.lista.nativeElement.appendChild(li);

    
    input.value = '';
  }
}

