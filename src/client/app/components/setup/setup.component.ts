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
    private setupForm: ControlGroup;
    
    @Output() done: EventEmitter<any> = new EventEmitter();
    
    constructor(private fb: FormBuilder) {
        this.setupForm = this.fb.group({
            fname: ['', Validators.required],
            lname: ['', Validators.pattern('[a-zA-Z]+')]
        });
    }

    // validate input and 
    setup(event: UIEvent): void {
        if (event) {
            event.preventDefault();
        }
            
        console.log(this.setupForm.value);
        for (let [k, v] of this.setupForm.value) {
            console.log(k, v);
        }
        
        this.done.emit(this.setupForm.value);
    }
}
