import { AfterViewInit, Directive, ElementRef } from '@angular/core';

import 'highlight';

declare var hljs: any;

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements AfterViewInit {

  constructor(public el: ElementRef) {  }

  ngAfterViewInit() {
    hljs.highlightBlock(this.el.nativeElement);
  }

}
