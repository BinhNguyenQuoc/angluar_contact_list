import { Component, OnInit } from '@angular/core';
import { Contact, ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  searchTerm: string = '';
  displayedColumns: string[] = ['name', 'email', 'phone', 'address'];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }

  filterContacts(): Contact[] {
    return this.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
