import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent {
  name: string = '';
  alterego: string = '';
  power: string = '';
  enemy: string = '';
  planet: string = '';
  weakness: string = '';
}
