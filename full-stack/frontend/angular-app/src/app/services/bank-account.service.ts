import { Injectable, signal } from "@angular/core";


@Injectable({ providedIn: 'root' })
export class BankAccount {



    private balance = signal(0);




    getBalance() {
        return this.balance.asReadonly();
    }




    makeDeposit(amount: number) {
        // send it to an API,
        // calculate a bonus
        this.balance.set(this.balance() + amount);
    }



    makeWithdrawal(amount: number) {
        this.balance.set(this.balance() - amount);
    }
}