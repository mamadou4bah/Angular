import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShark]'
})
export class SharkDirective {

  creature = 'Dolphin';

  constructor(element: ElementRef, renderer: Renderer2) {
      const shark = renderer.createText('Directive ');
      renderer.appendChild(element.nativeElement, shark);
  }

}
