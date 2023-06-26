import { Component } from "@angular/core";



@Component({
    selector: 'app-account',
    template:

        `<section>
        

    `,
    standalone: true
})
export class BankAccountComponent {



    private balance = 5000;




    deposit(amount: number) {
        this.balance += amount;
    }



    withdraw(amount: number) {
        this.balance -= amount;
    }
}