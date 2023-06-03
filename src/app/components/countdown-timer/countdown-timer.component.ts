import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent implements OnInit {
  @Input() targetDate!: Date;

  days!: number;
  hours!: number;
  minutes!: number;
  seconds!: number;

  ngOnInit() {
    this.updateCountdown();
    setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  private updateCountdown() {
    const now = new Date();
    const timeDiff = this.targetDate?.getTime() - now.getTime();

    this.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    this.hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  }
}
