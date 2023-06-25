import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectCard } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() cardData!: ProjectCard;
  @Output() onAuthorSocialLink$: EventEmitter<string> =
    new EventEmitter<string>();

  getAuthorName(fullName: string): string {
    return fullName.split(' ')?.[0];
  }

  goToAuthorSocialLink(socialUrl: string | undefined): void {
    if (!!socialUrl) {
      this.onAuthorSocialLink$.emit(socialUrl);
    }
  }
}
