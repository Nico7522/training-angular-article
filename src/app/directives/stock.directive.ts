import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[stockDirective]'
})
export class StockDirective implements OnChanges {
  @Input() stock!: boolean; 

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges) {
    this.stock = changes['stock'].currentValue;
  }

  @HostListener('mouseenter') onMouseEnter(){
    if (!this.stock) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#c57070');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    }
  };

  @HostListener('mouseleave') onMouseLeave() {
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    
  }
}
