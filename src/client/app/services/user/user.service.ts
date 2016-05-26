import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { LocalStorage } from 'angular2-loader/WebStorage';

export interface User {
    firstName: string,
    lastName?: string,
    email?: string,
    widgets: string[],
    settings: any,
    wallpaper: string
}

@Injectable()
export class UserService {
    private user: User;
    // @LocalStorage() private user: User = false;
    
    constructor(private router: Router) {}
    
    public getUser(): User {
        if (!this.user) {
            this.router.navigate(['/setup']);
        } else {
            return this.user;
        }
    }
    
    public update(user: User): void {
        console.log(`updating ${this.user} with ${user}`);
        this.user = user;
    }
}
