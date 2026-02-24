import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Home {

}
