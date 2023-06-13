import { Component, Input } from '@angular/core';
import { ProjectCard } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() cardData!: ProjectCard;
}
