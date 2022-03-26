import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  currentYear = new Date();
  year = this.currentYear.getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
