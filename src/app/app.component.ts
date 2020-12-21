import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
export interface TodoList {
  task: any;
  status: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  constructor() { }
  title = 'Your TO-DO List'
  text = new FormControl('', Validators.required);
  item: TodoList;
  list = []


  ngOnInit() { }

  addTask() {
    this.item = {
      task: this.text.value,
      status: false
    }
    this.list.unshift(this.item);
    this.text.setValue('');
  }

  taskDone(item) {
    this.list.forEach(el => {
      if (el.task == item.task)
        return el.status = !el.status
    });
  }

  deleteTask(item) {
    this.list = this.list.filter(el => el.task != item.task);
  }
}


