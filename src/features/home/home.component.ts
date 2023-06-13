import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  logo: string = '../../../assets/images/logo-wia.png';
  unifespLogo: string = '../../assets/images/unifesp-logo.png';
  targetDate: Date = new Date('2023-07-04');

  @Output() $subscribe: EventEmitter<null> = new EventEmitter<null>();

  subscribe(): void {
    this.$subscribe.emit();
  }
}
