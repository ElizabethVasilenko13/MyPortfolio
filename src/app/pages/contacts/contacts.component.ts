import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  private fb = inject(FormBuilder);
  sendMessageForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required],
  });

  async sendMessage(): Promise<void> {
    emailjs.init({
      publicKey: 'VijksbOqyXgmIWTu8',
    });
    const { name, email, message } = this.sendMessageForm.value;

    emailjs
      .send('service_vvjvuxp', 'template_iey8bkk', {
        from_name: name,
        to_name: 'Liza',
        from_mail: email,
        message,
      })
      .then(
        () => {
          alert('Message has been sent');
          this.sendMessageForm.reset();
        },
        error => {
          alert(`There is an error ${error.text}, please try again!`);
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        }
      );
  }
}
