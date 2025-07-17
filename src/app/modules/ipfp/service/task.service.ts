
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {TaskModel} from "../models/task.model";


@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private apiUrl: string = 'http://localhost:8080/api/users';

    constructor(private http: HttpClient) {}

    //Récupérer tous les utilisateurs
    getAllTasks(): Observable<TaskModel[]> {
        return this.http.get<TaskModel[]>(this.apiUrl);
    }

    //Récupérer un seul utilisateur par ID
    getTaskById(id: number): Observable<TaskModel> {
        return this.http.get<TaskModel>(`${this.apiUrl}/${id}`);
    }

    //Ajouter un utilisateur
    addTask(task: Partial<TaskModel>): Observable<TaskModel> {
        return this.http.post<TaskModel>(this.apiUrl, task);
    }

    //Mettre à jour un utilisateur
    updateTask(id: number, task: Partial<TaskModel>): Observable<TaskModel> {
        return this.http.put<TaskModel>(`${this.apiUrl}/${id}`, task);
    }

    //Supprimer un utilisateur
    deleteTask(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }


}

