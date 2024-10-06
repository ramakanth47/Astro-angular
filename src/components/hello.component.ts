import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [NgIf],
  template: `
    <p>This is sample astro project with Angular from Ramakanth!!</p>

    <button (click)="toggle()">Toggle</button>
    
    <p *ngIf="show">Toggled</p>
  `,
})
export class HelloComponent {
  show = true;

  toggle() {
    this.show = !this.show;
  }
}