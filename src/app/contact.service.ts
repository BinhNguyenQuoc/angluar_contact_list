import { Injectable } from '@angular/core';

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [
    { id: 1, name: 'Binh Nguyen', email: 'binh.nguyen@example.com', phone: '123-456-789', address: '123 HCM St' },
    { id: 2, name: 'Daniel Doan', email: 'daniel.doan@example.com', phone: '987-654-3210', address: '456 HCM St' },
    // Add more mock data here
  ];

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContact(id: number): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }
}
