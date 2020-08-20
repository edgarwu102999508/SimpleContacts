export class Contact {
  id: number;
  title: string;
  name: string;
  address: string;
  photo: string;

  constructor(
    id: number,
    title: string,
    name: string,
    address: string,
    photo: string
  ) {
    this.id = id;
    this.title = title;
    this.name = name;
    this.address = address;
    this.photo = photo;
  }
}
