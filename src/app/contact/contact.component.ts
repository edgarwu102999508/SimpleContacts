import { Component, OnInit } from "@angular/core";

@Component({
  selector: "contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  name: string;
  address: string;
  photo: string;
  constructor() {}

  contacts = [
    {
      id: 1,
      photo: "https://picsum.photos/200/300",
      name: "Mr.Lachlan van der Velden",
      address: "20 Queen Street, Melbourne",
    },
    {
      id: 2,
      photo: "https://picsum.photos/200/301",
      name: "Mrs.Grace Smith",
      address: "20 Queen Street, Melbourne",
    },
    {
      id: 3,
      photo: "https://picsum.photos/200/302",
      name: "Mx.Frank George",
      address: "20 Queen Street, Melbourne",
    },
    {
      id: 4,
      photo: "https://picsum.photos/200/303",
      name: "Mr.Bob Grange",
      address: "20 Queen Street, Melbourne",
    },
  ];

  ngOnInit(): void {}
}
