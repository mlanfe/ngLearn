import { Directive, ElementRef, HostListener, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges{
  // el指的是指令所在的dom, 但是不是原生的dom, 类似于把那个dom变成一个
  constructor(private el: ElementRef) {
    console.log('el========',el)

  }

   ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes['appHighlight'].currentValue)

   }
  @Input() defaultColor = '';

  @Input() appHighlight = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
    // console.log(this)
  }

  private highlight(color: string) {
    if(this.defaultColor) {
      this.el.nativeElement.style.color = 'blue '
    }
    this.el.nativeElement.style.backgroundColor = color;
  }
}
