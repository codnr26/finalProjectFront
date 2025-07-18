
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {TaskModel} from "../models/task.model";


@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private apiUrl: string = 'http://localhost:8080/api/tasks';

    constructor(private http: HttpClient) {}

    //Récupérer tous les taches
    getAllTasks(): Observable<TaskModel[]> {
        return this.http.get<TaskModel[]>(this.apiUrl);
    }

    //Récupérer une seul tache par ID
    getTaskById(id: number): Observable<TaskModel> {
        return this.http.get<TaskModel>(`${this.apiUrl}/${id}`);
    }

    //Ajouter une tache
    addTask(task: Partial<TaskModel>): Observable<TaskModel> {
        return this.http.post<TaskModel>(this.apiUrl, task);
    }

    //Mettre à jour une tache
    updateTask(id: number, task: Partial<TaskModel>): Observable<TaskModel> {
        return this.http.put<TaskModel>(`${this.apiUrl}/${id}`, task);
    }

    //Supprimer une tache
    deleteTask(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }


}

