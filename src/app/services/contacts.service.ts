import { Injectable } from "@angular/core";
import { Contact } from "../contact/contact";
import { Identifiers } from "@angular/compiler";

@Injectable({
  providedIn: "root",
})
export class ContactsService {
  contacts: Contact[] = [
    new Contact(
      1,
      "Mr",
      "Lachlan van der Velden",
      "20 Queen Street, Melbourne",
      "https://picsum.photos/200/300"
    ),
    new Contact(
      2,
      "Mrs",
      "Grace Smith",
      "21 Queen Street, Melbourne",
      "https://picsum.photos/200/301"
    ),
    new Contact(
      3,
      "Mx",
      "Frank George",
      "22 Queen Street, Melbourne",
      "https://picsum.photos/200/302"
    ),
    new Contact(
      4,
      "Mr",
      "Bob Grange",
      "23 Queen Street, Melbourne",
      "https://picsum.photos/200/303"
    ),
  ];
  constructor() {}
}
