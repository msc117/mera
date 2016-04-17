import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {UserService} from './user-service';


describe('UserService Service', () => {

  beforeEachProviders(() => [UserService]);


  it('should ...', inject([UserService], (service: UserService) => {

  }));

});
