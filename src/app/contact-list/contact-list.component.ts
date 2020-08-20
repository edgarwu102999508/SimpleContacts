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
    if (confirm("Do you really want to Delete?") == true) {
      this.contactService.contacts.splice(
        this.contactService.contacts.indexOf(i),
        1
      );
      this.count--;
    } else {
      return;
    }
  }

  ngOnInit() {
    this.count = this.contactService.contacts.length;
  }
}
