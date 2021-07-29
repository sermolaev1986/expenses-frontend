import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Expense} from "../Expense";

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private http: HttpClient) {
  }

  public getExpenses(): Promise<Array<Expense>> {
    return this.http.get<Array<Expense>>('https://verbrauch.herokuapp.com/expenses').toPromise();
  }

  public postExpense(expense: Expense): Promise<Expense> {
    return this.http.post<Expense>('https://verbrauch.herokuapp.com/expenses', expense).toPromise();
  }
}
