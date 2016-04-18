import {Component} from 'angular2/core';
import {
   FormBuilder,
   ControlGroup,
   Validators,
   FORM_DIRECTIVES
} from 'angular2/common';
import {CanActivate} from 'angular2/router';

@Component({
    selector: 'mera-setup',
    template: require('./setup.html'),
    // styles: [ require('./setup.scss') ],
    providers: [FormBuilder],
    directives: [FORM_DIRECTIVES]
})
@CanActivate({
    // check if actually is new user
    // if not redirect Home
    return true;
})
export class MeraSetup {
    @LocalStorage() private user: User = false;
    setupForm: ControlGroup;
    
    constructor(private fb: FormBuilder) {}
    
    ngOnInit() {
        this.setupForm = this.fb.group({
            fname: ['', Validators.required],
            lname: ['', Validators.pattern('[a-zA-Z]+')]
        });
    }
    
    // validate input and 
    setup(): void {
        console.log(this.setupForm);
        for (let k, v of this.setupForm.value) {
            console.log(k, v);
        }
    }
}
