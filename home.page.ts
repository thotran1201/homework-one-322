import { Component } from '@angular/core';
import { DetailService } from '../services/detail.service';
//import { title } from 'process';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public cards = [];

  constructor(private detailService:DetailService) {}

  ngOnInit() {
    console.log(this.detailService.cards);
    this.cards = this.detailService.cards;
  }

  buttonClicked(arg: String) {
    console.log('hello ' + arg);
  }

  addCard() {
    console.log('add card');
  }
}
