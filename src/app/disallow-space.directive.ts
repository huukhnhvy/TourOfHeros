import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'input[appDisallowSpace]',
})
export class DisallowSpaceDirective {


  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: { stopPropagation: () => void; }) {
    debugger;
    const current = this._el.nativeElement.value;
    this._el.nativeElement.value = current.replace(/\s/g, '');
    if (current !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}






