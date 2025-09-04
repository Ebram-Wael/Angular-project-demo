import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appProductCard]',
  standalone: true
})
export class ProductCardDirective implements  OnChanges {

  @Input() defaultColor: string = 'gray';
  @Input('appProductCard') myColor: string = 'green';

  constructor(public eleRef: ElementRef) { }

  ngOnChanges() {
    this.eleRef.nativeElement.style.border = `5px solid ${this.defaultColor}`;
    this.eleRef.nativeElement.style.transform = 'scale(1)';
  }


  @HostListener('mouseover') functionOne() {
    this.eleRef.nativeElement.style.border = `8px solid ${this.myColor}` ;
    this.eleRef.nativeElement.style.transform = 'scale(1.05)';
  }

  @HostListener('mouseout') functionTwo() {
    this.eleRef.nativeElement.style.border = `5px solid ${this.defaultColor}`;
    this.eleRef.nativeElement.style.transform = 'scale(1)';
  }


}


