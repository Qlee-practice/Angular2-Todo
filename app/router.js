import {RouterModule} from '@angular/router';
import TodoList from 'components/todo-list';

const router = [{
  path: 'todos', component: TodoList
}];

export default RouterModule.forRoot(router);
