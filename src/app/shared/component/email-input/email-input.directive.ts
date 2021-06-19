import { Directive, ElementRef, Inject, InjectionToken, OnInit, Optional, Renderer2 } from '@angular/core';

export const emailPatternToken: InjectionToken<RegExp> = new InjectionToken<RegExp>(
  'The pattern used to match a valid email address.');

@Directive({
  selector: '[emailInputDirective]',
})
export class EmailInputDirective implements OnInit {
  // The default value is the default pattern for HTML5 email controls.
  private readonly emailPattern: RegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  private get nativeFormControl(): HTMLInputElement {
    return this.elementReference.nativeElement as HTMLInputElement;
  }

  constructor(
    private readonly elementReference: ElementRef,
    private readonly renderer: Renderer2,
    @Optional() @Inject(emailPatternToken) emailPattern: RegExp) {
      if (emailPattern !== undefined) {
        this.emailPattern = emailPattern;
      }
    }
  
  public ngOnInit(): void {
    this.addNativeKeyboard();
    this.addValidation();
  }

  private addNativeKeyboard(): void {
    this.renderer.setProperty(this.nativeFormControl, 'type', 'email');
  }

  private addValidation(): void {
    const patternEncodedForAttribute: string = this.trimSlashes(this.emailPattern.toString());
    this.renderer.setProperty(this.nativeFormControl, 'pattern', patternEncodedForAttribute);
  }

  private trimSlashes(text: string): string {
    return text.replace(/^\/|\/$/g, '');
  }
}
