import {Component, OnInit} from '@angular/core';
import {Expense} from "../Expense";
import {ExpensesService} from "../services/expenses.service";

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {
  public expenses: Array<Expense> = [];

  constructor(private expensesService: ExpensesService) {
  }

  ngOnInit(): void {
    this.expensesService.getExpenses().then(expenses => {
      this.expenses = expenses;
    })
  }

}
