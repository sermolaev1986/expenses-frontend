import {Component, ElementRef, ViewChild} from '@angular/core';
import {ExpensesService} from "../expenses.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Expense} from "../Expense";
import {formatDate} from "@angular/common";

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

  date: Date;

  onSubmit() {
    let datePickerDate = this.form.value['date'];
    let date = new Date(datePickerDate.year,datePickerDate.month,datePickerDate.day);

    let expense: Expense = {
      amount: this.form.value['amount'],
      category: this.form.value['category'],
      date: formatDate(date, 'yyyy-MM-dd', 'en-US')
    }

    this.expensesService.postExpense(expense).then(expense => {
      this.successfullySubmitted = true;
    });
  }

  focusOnNextInput() {
    this.categoryElement.nativeElement.focus();
  }
}
