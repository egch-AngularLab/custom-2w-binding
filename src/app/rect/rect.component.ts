import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  //@Input({ required: true }) size!: { width: string; height: string };

  //the name needs to be exactly sizeChange
  //@Output() sizeChange = new EventEmitter<{ width: string; height: string }>();

  //alternative way only available since angular 17.2
  size = model.required<{ width: string; height: string }>();

  onReset() {
    this.size.set({
      width: '200',
      height: '100',
    });
  }
}
