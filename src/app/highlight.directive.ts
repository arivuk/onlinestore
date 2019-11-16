import { Directive, ElementRef,HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { 
    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.el.nativeElement.style.padding="20px";

   // this.el.nativeElement.attributes.push({"myitem":"arivu"});
    this.renderer.setAttribute(this.el.nativeElement,"myitem","arivu");
    //this.renderer.setAttribute(this.el.nativeElement,"class","active");
    this.renderer.setAttribute(this.el.nativeElement,"style","background-color:orange")
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor='red';
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor='yellow';
  }
}
