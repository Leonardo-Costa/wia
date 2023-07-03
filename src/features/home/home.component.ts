import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  logo: string = '../../../assets/images/logo-wia.png';
  unifespLogo: string = '../../assets/images/unifesp-logo.png';
  targetDate = new Date('2023-07-04T13:00:00-03:00');

  constructor() {}

  subscribe(): void {
    window.location.href =
      'https://sistemas.unifesp.br/acad/proec-siex/index.php?page=INS&acao=2&code=23796';
  }
}
