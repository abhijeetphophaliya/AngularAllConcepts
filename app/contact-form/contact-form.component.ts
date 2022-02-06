import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {

  contactDetails="this is the contact form developed using angular template driven form."


  contactMethods = [
    {
      id: 1,
      name: 'email',
    },
    {
      id: 2,
      name: 'phone',
    },
    {
      id: 3,
      name: 'message',
    },
    {
      id: 4,
      name: 'facebook',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  log(firstName: any) {
    console.log(firstName);
  }

  submit(f: any) {
    console.log(f.value);
  }
}
