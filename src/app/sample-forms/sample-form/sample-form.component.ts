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
    stateList = [];

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
            date: [''],
            address1: [''],
            address2: [''],
            state: [''],
            city: ['']
        });
    }

    createDataSets() {
        this.titleList = this.getTitleList();
        this.stateList = this.getStatesList();
    }

    getTitleList(): string[] {
        return ['Mr', 'Ms', 'Miss', 'Dr'];
    }

    getStatesList(): string[] {
        return ['AL', 'AK', 'NY'];
    }

    onTitleChanged($event) {
        console.log('Title Changed.....');
    }

}
