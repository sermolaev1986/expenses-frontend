import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Expense} from "../Expense";

@Injectable({
  providedIn: 'root'
})
export class PrefilledExpenseService {

  private readonly expenseSource = new BehaviorSubject<Expense>({ amount: 1, category: "Auto", date: ""});
  preFilledExpense: Observable<Expense> = this.expenseSource.asObservable();

  setExpense(expense: Expense) {
    this.expenseSource.next(expense);
  }
}
