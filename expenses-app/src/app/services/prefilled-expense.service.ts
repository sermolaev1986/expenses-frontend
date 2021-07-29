import {Injectable} from '@angular/core';
import {Expense} from "../Expense";

@Injectable({
  providedIn: 'root'
})
export class PrefilledExpenseService {

  setExpense(expense: Expense): void {
    console.log("?????? Set new Expense : " + expense.amount + "  " + expense.category)
    window.localStorage.setItem("expense", JSON.stringify(expense));
  }

  detExpense(): Expense {
    let expense: Expense = JSON.parse(window.localStorage.getItem("expense") || "");
    return expense != null ? expense : new Expense();
  }
}
