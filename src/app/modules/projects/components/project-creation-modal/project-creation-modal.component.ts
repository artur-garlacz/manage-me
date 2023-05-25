import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-project-creation-modal',
  templateUrl: './project-creation-modal.component.html',
})
export class ProjectCreationModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ProjectCreationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
