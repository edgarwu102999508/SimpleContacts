import { Component, OnInit } from "@angular/core";
import { ContactsService } from "../services/contacts.service";
import { Contact } from "../contact/contact";
import { ContactListComponent } from "../contact-list/contact-list.component";

@Component({
  selector: "contact-create",
  templateUrl: "./contact-create.component.html",
  styleUrls: ["./contact-create.component.css"],
})
export class ContactCreateComponent implements OnInit {
  contactTitle: string;
  contactName: string;
  contactAddress: string;

  constructor(
    public contactService: ContactsService,
    public contacts: ContactListComponent
  ) {}

  ngOnInit(): void {}

  changePhoto() {
    return Math.floor(Math.random() * 10);
  }

  createContact() {
    this.contactService.addContact(
      new Contact(
        1,
        this.contactTitle,
        this.contactName,
        this.contactAddress,
        "https://picsum.photos/200/30" + this.changePhoto()
      )
    );
    this.contactName = "";
    this.contactAddress = "";
    this.contactTitle = "";
    this.contacts.count++;
  }
}
