import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-sample-form',
    templateUrl: './sample-form.component.html',
    styleUrls: ['./sample-form.component.scss']
})
export class SampleFormComponent {
    sampleForm: FormGroup;
    titleList = [];

    constructor(private formBuilder: FormBuilder) {
        this.createDataSets();
        this.createForm();
    }

    createForm() {
        this.sampleForm = this.formBuilder.group({
            title: ['', Validators.required],
            firstName: ['', Validators.required],
            middleName: [''],
            lastName: ['', Validators.required],
            company: [''],
            dob: ['']
        });
    }

    createDataSets() {
        this.titleList = this.getTitleList();
    }

    getTitleList(): string[] {
        return ['Mr', 'Ms', 'Miss', 'Dr'];
    }

    onTitleChanged($event) {
        console.log('Title Changed.....');
    }

}
