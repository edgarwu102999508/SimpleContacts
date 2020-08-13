import { Component, OnInit } from "@angular/core";

@Component({
  selector: "contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  title: string;
  name: string;
  address: string;
  photo: string;
  count: number;

  constructor() {}

  contacts = [
    {
      title: "Mr",
      id: 1,
      photo: "https://picsum.photos/200/300",
      name: "Lachlan van der Velden",
      address: "20 Queen Street, Melbourne",
    },
    {
      title: "Mrs",
      id: 2,
      photo: "https://picsum.photos/200/301",
      name: "Grace Smith",
      address: "21 Queen Street, Melbourne",
    },
    {
      title: "Mx",
      id: 3,
      photo: "https://picsum.photos/200/302",
      name: "Frank George",
      address: "22 Queen Street, Melbourne",
    },
    {
      title: "Mr",
      id: 4,
      photo: "https://picsum.photos/200/303",
      name: "Bob Grange",
      address: "23 Queen Street, Melbourne",
    },
  ];

  delContact(i) {
    this.contacts.splice(i, 1);
    this.count--;
  }

  ngOnInit() {
    this.count = this.contacts.length;
  }
}
