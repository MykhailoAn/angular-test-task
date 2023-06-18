import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  @Input() public password: string = '';

  public getStrengthClass(index: number): string {
    if (!this.password) {
      return 'gray';
    }

    if (this.password.length < 8) {
      return 'red';
    }

    // strong
    if (
      (/^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()\-=_+[\]{}|\\;:'",.<>/?])(?=.*[0-9]).+$/).test(this.password)
    ) {
      return 'green';
    }

    // medium
    if ((index === 0 || index === 1) && (/^(?=.*[a-zA-Z!@#$%^&*()\-=_+[\]{}|\\;:'",.<>/?])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*()\-=_+[\]{}|\\;:'",.<>/?]+$/).test(this.password)) {
      return 'yellow';
    }

    // easy
    if (index === 0 && /[a-zA-Z0-9]/.test(this.password)) {
      return 'red';
    }

    return 'gray';
  }
}
