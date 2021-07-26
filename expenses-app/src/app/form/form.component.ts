import {Component, ElementRef, ViewChild} from '@angular/core';
import {ExpensesService} from "../expenses.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Expense} from "../Expense";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @ViewChild("category")
  private categoryElement: ElementRef;

  public successfullySubmitted = false;

  constructor(private expensesService: ExpensesService) {
  }

  public form = new FormGroup({
    category: new FormControl(''),
    amount: new FormControl(''),
    date: new FormControl(''),
  });

  onSubmit() {
    let expense: Expense = {
      amount: this.form.value['amount'],
      category: this.form.value['category'],
      date: this.form.value['date']
    }

    this.expensesService.postExpense(expense).then(expense => {
      this.successfullySubmitted = true;
    });
  }

  focusOnNextInput() {
    this.categoryElement.nativeElement.focus();
  }
}
