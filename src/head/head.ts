import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-head',
  imports: [RouterLink],
  templateUrl: './head.html',
  styleUrl: './head.css',
})
export class Head {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
  get logoPath() {
  return this.isScrolled ? '/Logo2.jpg' : '/Logo.png';
}
}