import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BankAccountComponent } from './components/bank-account.component';
import { HeadingComponent } from './components/heading/heading.component';
import { NavigationComponent } from "./components/navigation/navigation.component";
import { HeadingComponent_1 as HeadingComponent } from "./complonents/heading/heading.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule,
    RouterOutlet,
    BankAccountComponent,
    HeadingComponent, NavigationComponent, HeadingComponent]
})
export class AppComponent {

}