import {Component, Input} from '@angular/core';
@Component({
  selector: 'todo-item',
  templateUrl: 'app/templates/todo-item.html',
  styleUrls: ['app/styles/todo-item.css']
})
export default class {
  @Input() todo = {};
};