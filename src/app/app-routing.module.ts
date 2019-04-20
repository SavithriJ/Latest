import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SampleFormComponent} from './sample-forms/sample-form/sample-form.component';

const routes: Routes = [
    {
        path: 'customers',
        loadChildren: './customers/customers.module#CustomersModule'
    },
    {
        path: 'orders',
        loadChildren: './orders/orders.module#OrdersModule'
    },
    {
        path: 'messages',
        loadChildren: './messages/messages.module#MessagesModule'
    },
    {
        path: '',
        loadChildren: './sample-forms/sample-forms.module#SampleFormsModule'
    },
    // {
    //     path: '',
    //     redirectTo: '',
    //     pathMatch: 'full'
    // }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
