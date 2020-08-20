import { Component, OnInit, Input } from "@angular/core";
import { Contact } from "./contact";
import { ContactsService } from "../services/contacts.service";
import { ContactListComponent } from "../contact-list/contact-list.component";

@Component({
  selector: "contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  @Input()
  contact: Contact;

  constructor(
    public contactService: ContactsService,
    public contacts: ContactListComponent
  ) {}

  ngOnInit(): void {}
}
