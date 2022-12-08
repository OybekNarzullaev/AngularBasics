import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template:
    '<div class="absolute w-full bottom-0 left-0 flex justify-center items-center p-5 bg-orange-300"> &copy; {{currentYear}} Footer </div>',
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  currentYear = new Date().getFullYear();
}
