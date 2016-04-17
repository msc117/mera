import {Injectable} from 'angular2/core';
import {User, UserService} from '../';

@Injectable()
export class StorageService {
    private userService: UserService;
    
    constructor(us: UserService) {
        this.userService = us;
    }
    
    public getUser(): Promise<User> {
        let self = this;
        let ret = new Promise((resolve) {
            self._getUser()
                .then((user: User) => {
                    console.log(user);
                    return user;
                }, (ret) => {
                    console.log(ret);
                    self.userService.setup();
                });
        });
        
        return ret;
    }
}
