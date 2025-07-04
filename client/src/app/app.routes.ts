import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { ExpensesSplitComponent } from './pages/expenses-split/expenses-split.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'expenses', component: ExpensesComponent },
    {path: 'split', component: ExpensesSplitComponent },
    {path: 'about', component: AboutComponent }
];
