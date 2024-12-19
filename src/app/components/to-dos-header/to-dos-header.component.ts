import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-to-dos-header',
  standalone: true,
  imports: [],
  templateUrl: './to-dos-header.component.html',
  styleUrl: './to-dos-header.component.css'
})
export class ToDosHeaderComponent {
  @Input() title: string = '';
}
