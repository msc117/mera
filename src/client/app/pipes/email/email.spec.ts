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
import {Email} from './email';


describe('Email Pipe', () => {

  beforeEachProviders(() => [Email]);


  it('should transform the input', inject([Email], (pipe:Email) => {
      expect(pipe.transform(true)).toBe(null);
  }));

});
