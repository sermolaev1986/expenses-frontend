import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ExpensesService} from "../services/expenses.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Expense} from "../Expense";
import {formatDate} from "@angular/common";
import {PrefilledExpenseService} from "../services/prefilled-expense.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  @ViewChild("category")
  private categoryElement: ElementRef;

  public successfullySubmitted = false;

  public myCategory:string;
  public amount:number;
  public date:string;

  public form = new FormGroup({
    category: new FormControl(''),
    amount: new FormControl(''),
    date: new FormControl(''),
  });

  constructor(private expensesService: ExpensesService,
              private prefilledExpenseService: PrefilledExpenseService) {
  }

  ngOnInit(): void {
    this.onExpensePrefilled(this.prefilledExpenseService.detExpense());
  }

  onExpensePrefilled(preFilledExpense: Expense): void {
    this.form.controls['category'].setValue( preFilledExpense.category);
    this.form.controls['amount'].setValue( preFilledExpense.amount);
    this.form.controls['date'].setValue( preFilledExpense.date);

    this.myCategory = preFilledExpense.category;
    this.amount = preFilledExpense.amount;
    this.date = preFilledExpense.date;
    console.log("!!!!!!!!!!!!!!!!!!!!!!" + preFilledExpense.category)
    console.log("!!!!!!!!!!!!!!!!!!!!!!" + preFilledExpense.amount)
    console.log("!!!!!!!!!!!!!!!!!!!!!!" + preFilledExpense.date)
  }

  onSubmit() {
    let datePickerDate = this.form.value['date'];
    let date = new Date(datePickerDate.year, datePickerDate.month, datePickerDate.day);

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
