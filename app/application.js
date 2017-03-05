import 'zone.js';
import 'reflect-metadata';
import {Component, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import TodoItem from 'components/todo-item';
import TodoList from 'components/todo-list';
import RouterModule from 'router';

@Component({
  selector: '[application]',
  template: `
    <div class="application">
      <router-outlet></router-outlet>
    </div>`,
  styleUrls: ['app/styles/application.css']
})
class Application {
}

@NgModule({
  imports: [BrowserModule, RouterModule],
  declarations: [
    Application,
    TodoList,
    TodoItem
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [Application]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);