import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";


import {Router, RouterLink} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TaskService} from "../../../service/task.service";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [

    ReactiveFormsModule,
    MatButton,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    RouterLink,


  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent implements OnInit{


  taskForm!: FormGroup;

  constructor(
      private fb: FormBuilder,
      private taskService: TaskService,
      private router: Router,
      private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
     content: ['', Validators.required],
      title: ['', Validators.required],
    });
  }

  save(): void {


    this.taskService.addTask(this.taskForm.value).subscribe({
      next: () => {
        this.snackBar.open('Utilisateur ajouté avec succès.', 'Fermer', {
          duration: 3000
        });
        this.router.navigate(['/list-tasks']); // rediriger vers la liste après ajout
      },
      error: (err) => {
        console.error('Erreur lors de l’ajout', err);
        this.snackBar.open(`Erreur lors de l’ajout de l’utilisateur.`, 'Fermer', {
          duration: 3000
        });
      }
    });
  }

  reset(): void {
    this.taskForm.reset();
  }








}





