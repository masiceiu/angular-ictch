import { Component, OnInit, Provider  } from '@angular/core';
import { EmailInputDirective, emailPatternToken } from './email-input.directive';
const emailProvider: Provider = {
      provide: emailPatternToken,
      // Source: http://form.guide/best-practices/validate-email-address-using-javascript.html
      useValue: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
};
@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css'],
  providers: [emailProvider],
})
export class EmailInputComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  public onSubmit(event: Event): void {
    this.stopSynchronousPostRequest(event);
    if (this.isValid(event.target as HTMLFormElement)) {
      alert('You are now subscribed');
    } else {
      alert('You need to enter a correct email address.')
    }
  }

  private isValid(form: HTMLFormElement): boolean {
    return form.checkValidity();
  }

  private stopSynchronousPostRequest(event: Event): void {
    event.preventDefault();
  }
}