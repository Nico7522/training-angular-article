import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[testDirective]'
})
export class TestDirective implements OnChanges {
  @Input() name!: string; 

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges) {
    this.name = changes['name'].currentValue;
    
    


  }

  @HostListener('mouseenter') onMouseEnter(){
    if (this.name === "Pain") {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    }
    
  }
}

