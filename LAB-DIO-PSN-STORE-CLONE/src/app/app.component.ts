import { Component } from '@angular/core';
import { fakeDB } from 'src/assets/fakeDB';

type Game = {
  cover:string,
  gameName:string,
  price:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  games:Game[] = fakeDB;
  title = 'LAB-DIO-PSN-STORE-CLONE';
}
