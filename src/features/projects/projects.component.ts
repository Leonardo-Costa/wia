import { Component } from '@angular/core';
import { projects } from 'src/app/components/mocks/projects.mock';
import { ProjectCard } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projectCards: ProjectCard[] = projects;
  modalIsOpen: boolean = false;
  modalContent!: ProjectCard;

  onOpenModal(event: ProjectCard): void {
    this.modalContent = event;
    this.modalIsOpen = true;
  }

  onCloseModal(): void {
    this.modalIsOpen = false;
  }
}
