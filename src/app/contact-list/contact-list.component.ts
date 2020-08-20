import { Component, OnInit } from "@angular/core";
import { ContactsService } from "../services/contacts.service";

@Component({
  selector: "contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.css"],
})
export class ContactListComponent implements OnInit {
  count: number;
  constructor(public contactService: ContactsService) {}

  delContact(i) {
    this.contactService.contacts.splice(
      this.contactService.contacts.indexOf(i),
      1
    );
    this.count--;
    console.log("test");
  }

  ngOnInit() {
    this.count = this.contactService.contacts.length;
  }
}
