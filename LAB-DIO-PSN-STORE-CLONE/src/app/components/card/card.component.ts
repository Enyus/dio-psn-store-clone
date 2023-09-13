import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() gameName:string = 'Nome do Jogo';
  @Input() gameCover:string = 'URL da Capa do Jogo';
  @Input() gamePrice:string = 'R$ XX,xx'
}
