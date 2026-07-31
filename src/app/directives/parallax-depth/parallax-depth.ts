import { Directive, ElementRef, Renderer2, effect, inject, input } from '@angular/core';
import { Scroll } from '../../services/scroll';

/** Translates the host element vertically by scrollY * factor — mirrors the original data-depth behaviour. */
@Directive({
  selector: '[appParallaxDepth]',
})
export class ParallaxDepth {
  readonly appParallaxDepth = input.required<number>();

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly scroll = inject(Scroll);

  constructor() {
    effect(() => {
      const offset = this.scroll.scrollY() * this.appParallaxDepth();
      this.renderer.setStyle(this.el.nativeElement, 'transform', `translate3d(0, ${offset}px, 0)`);
    });
  }
}
