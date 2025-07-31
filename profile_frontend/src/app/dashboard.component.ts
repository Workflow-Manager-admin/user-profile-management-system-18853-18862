import { Component } from '@angular/core';

interface ProfileTableRow {
  name: string;
  devices: string;
  type: 'Impromptu' | 'Schedule';
  status: 'Active' | 'Inactive';
  createdDate: string;
}

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class DashboardComponent {
  // PUBLIC_INTERFACE
  filters = ['All', 'Impromptu', 'Schedule'];
  selectedFilter = 'All';

  // PUBLIC_INTERFACE
  cards = [
    { title: 'Total Profiles', value: '6', badge: '+2 from yesterday' },
    { title: 'Created Today', value: '5', badge: 'Last created 2h ago' },
    { title: 'Active Devices', value: '3', badge: '71.5% active rate' }
  ];

  // PUBLIC_INTERFACE
  profiles: ProfileTableRow[] = [
    {
      name: 'John Doe',
      devices: '2',
      type: 'Impromptu',
      status: 'Active',
      createdDate: '2024-06-22'
    },
    {
      name: 'Jane Smith',
      devices: '1',
      type: 'Schedule',
      status: 'Inactive',
      createdDate: '2024-06-21'
    },
    {
      name: 'Alex Lee',
      devices: '3',
      type: 'Schedule',
      status: 'Active',
      createdDate: '2024-06-20'
    },
    {
      name: 'Emily Chen',
      devices: '2',
      type: 'Impromptu',
      status: 'Inactive',
      createdDate: '2024-06-20'
    },
    {
      name: 'Michael Tan',
      devices: '1',
      type: 'Impromptu',
      status: 'Active',
      createdDate: '2024-06-19'
    },
    {
      name: 'Sophia Patel',
      devices: '2',
      type: 'Schedule',
      status: 'Inactive',
      createdDate: '2024-06-19'
    }
  ];

  // PUBLIC_INTERFACE
  search = '';

  // PUBLIC_INTERFACE
  get filteredProfiles(): ProfileTableRow[] {
    return this.profiles.filter(profile => {
      const typeMatches = this.selectedFilter === 'All' || profile.type === this.selectedFilter;
      const searchMatch =
        !this.search ||
        profile.name.toLowerCase().includes(this.search.trim().toLowerCase());
      return typeMatches && searchMatch;
    });
  }

  // PUBLIC_INTERFACE
  selectFilter(filter: string) {
    this.selectedFilter = filter;
  }

  // Action icons are stubbed for now (Edit/Download/Delete)
  // PUBLIC_INTERFACE
  onCreateProfile() {
    // Here you would route to create profile form/modal
    // Replace alert for demo
    console.log('Create Profile triggered!');
  }
  // PUBLIC_INTERFACE
  onEdit(profile: ProfileTableRow) {
    console.log('Edit profile:', profile.name);
  }
  // PUBLIC_INTERFACE
  onDownload(profile: ProfileTableRow) {
    console.log('Download profile:', profile.name);
  }
  // PUBLIC_INTERFACE
  onDelete(profile: ProfileTableRow) {
    console.log('Delete profile:', profile.name);
  }
}
