/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'test-component',
  template: `<div highlight></div>`
})
class TestComponent {}


describe('Highlight Directive', () => {



  it('should create an instance', () => {
    /*let directive = new Highlight();
    expect(directive).toBeTruthy();*/
  });
});