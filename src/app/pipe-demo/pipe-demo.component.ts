import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent {

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Here comes the data!")
    }, 3000);
  })

  contact_no = 987654321;

  filteredStatus = "";

  todos = [{
    label: "Buy grocery",
    status: "done"
  }, {
    label: "Renew Insurance",
    status: "pending"
  }, {
    label: "Pot the Plant",
    status: "done"
  }, {
    label: "Read the books",
    status: "pending"
  }]

  onAddNewTodo() {
    this.todos.push({ label: "New Item", status: "pending" });
  }

}
