import { 
   Component,
   Output,
   EventEmitter } from '@angular/core';
import {
   FormBuilder,
   ControlGroup,
   Validators,
   FORM_DIRECTIVES } from '@angular/common';

@Component({
    selector: 'mera-setup',
    template: require('./setup.html'),
    // styles: [ require('./setup.scss') ],
    providers: [FormBuilder],
    directives: [FORM_DIRECTIVES]
})
export class Setup {
    private formError: string;
    private setupForm: ControlGroup;
    
    @Output() done: EventEmitter<any> = new EventEmitter();
    
    constructor(private fb: FormBuilder) {
        this.setupForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.pattern('[a-zA-Z]+')]
        });
    }

    // validate input and 
    setup(event: UIEvent): void {
        if (event) {
            event.preventDefault();
        }
        
        console.log(this.setupForm.value, this.setupForm.valid);
        if (this.setupForm.valid) { 
            this.formError = undefined;
            this.done.emit(this.setupForm.value);
        } else {
            this.formError = 'Form not valid';
        }
    }
}
