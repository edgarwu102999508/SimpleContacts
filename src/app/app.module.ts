import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ContactComponent } from "./contact/contact.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { ContactCreateComponent } from "./contact-create/contact-create.component";

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactListComponent,
    ContactCreateComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
