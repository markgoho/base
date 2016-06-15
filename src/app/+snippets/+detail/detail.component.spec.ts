import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, provide } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { ReplaySubject } from 'rxjs/ReplaySubject';

import { DetailComponent } from './detail.component';

class MockActivatedRoute {
  params: ReplaySubject<string>;
  constructor() {
    this.params = new ReplaySubject<string>();
    this.params.next('1');
  }
}

describe('Component: Detail', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    provide(ActivatedRoute, {useClass: MockActivatedRoute}),
    DetailComponent
  ]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([DetailComponent],
      (component: DetailComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(DetailComponentTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(DetailComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test-comp',
  template: `
    <app-detail></app-detail>
  `,
  directives: [DetailComponent]
})
class DetailComponentTestControllerComponent {
}
