import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';
import {StorageService} from '../';

export interface User {
    init(): Promise,
    firstName: string,
    lastName?: string,
    email?: string,
    new: boolean
}

@Injectable()
export class UserService {
    private user: User = {};
    private storage: StorageService;
    private router: Router;

    constructor(storage: StorageService, router: Router) {
        this.storage = storage;
        this.router = router;
    }
    
    get firstName() {
        return this.user.firstName ? this.user.firstName : '';
    }
    set firstName(fname) {
        if (typeof name !== 'String')
            throw new Error('Name must be string');
        this.user.firstName = fname;
    }
 
    get lastName() {
        return this.user.lastName ? this.user.lastName : '';
    }
    set lastName(lname) {
        if (typeof name !== 'String')
            throw new Error('Name must be string');
        this.user.lastName = lname;
    }
    
    public setup(): void {
        this.router.navigateTo(['Setup']);
    }
}
