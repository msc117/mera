import {
it,
inject,
injectAsync,
describe,
beforeEachProviders,
TestComponentBuilder
} from 'angular2/testing';
import {Home} from './home.component';

describe('Home', () => {
   it('should log ngOnInit', inject([Home], (home) => {
      spyOn(console, 'log');
      expect(console.log).not.toHaveBeenCalled();

      home.ngOnInit();
      expect(console.log).toHaveBeenCalled();
   }));
});
