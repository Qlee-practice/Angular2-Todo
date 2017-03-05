import {Component} from '@angular/core';
@Component({
  selector: '[todo-list]',
  templateUrl: 'app/templates/todo-list.html',
  styleUrls: ['app/styles/todo-list.css']
})
export default class {
  list = [];
  todoName = '';

  create(input) {
    if (input.value == '') return;
    this.list.push({name: input.value});
    input.value = '';
  }
}