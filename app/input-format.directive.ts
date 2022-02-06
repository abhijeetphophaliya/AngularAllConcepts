import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
})
export class InputFormatDirective {

  @Input('format') format : string="";
  @HostListener('blur') onBlur() {
   let value : string= this.ef.nativeElement.value;

   if(this.format === 'lowercase')
   {
    this.ef.nativeElement.value = value.toLowerCase();
   }
   else
   {
    this.ef.nativeElement.value = value.toUpperCase();
   }

  }

  constructor(private ef: ElementRef) {}
}
