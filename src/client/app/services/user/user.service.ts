import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';
import {LocalStorage} from 'angular2-loader/WebStorage';

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
    @LocalStorage() private user: User = false;
    private router: Router;

    constructor(router: Router) {
        this.router = router;
    }
    
    public getUser(): User {
        if (!this.user)
            this.router.navigateTo(['Setup']);
        else
            return this.user
    }
    
    public update(user: User): void {
        console.log(`updating ${this.user} with ${user}`);
        this.user = user;
    }
}
