import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
  standalone: true
})
export class InputFormatDirective {

  constructor(private elementRef: ElementRef) { }
  @HostListener('blur') onBlur() {
    const inputValue: string = this.elementRef.nativeElement.value;
    this.elementRef.nativeElement.value = inputValue.toUpperCase();
  }

}
