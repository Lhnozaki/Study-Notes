import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app/app.component";
import { TodosComponent } from './pages/todos/todos.component';
import { TodoItemComponent } from './pages/todo-item/todo-item.component';

@NgModule({
  declarations: [AppComponent, TodosComponent, TodoItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
