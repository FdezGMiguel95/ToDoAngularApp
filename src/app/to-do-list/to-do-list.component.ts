import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit{

  tasks: any = [{taskName: "Clean", isCompleted: false}];
  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit(Form: NgForm) {
    this.tasks.push({
      taskName: Form.controls['task'].value,
      isCompleted: false
    });//push de una nueva tarea al array
    Form.reset();//limpia el formulario y lo pone como lo encuentras
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);//remueve '1' elemento 'index' del array
  }
  onCheck(index: number) {
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted;//asegurarse de que el valor del checkbox se guarda en el array
  }
}
