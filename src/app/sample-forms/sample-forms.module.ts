import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SampleFormComponent} from './sample-form/sample-form.component';
import {SampleFormsRoutingModule} from './sample-forms-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCardContent, MatCardModule, MatCheckboxModule, MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule, MatNativeDateModule,
    MatSelectModule, MatSlideToggleModule
} from '@angular/material';

@NgModule({
    declarations: [SampleFormComponent],
    imports: [
        CommonModule,
        SampleFormsRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatSlideToggleModule
    ]
})
export class SampleFormsModule {
}
