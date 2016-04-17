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
import {DashService} from './dash-service';


describe('DashService Service', () => {

  beforeEachProviders(() => [DashService]);


  it('should ...', inject([DashService], (service: DashService) => {

  }));

});
