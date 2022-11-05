import { Component} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  users = [
    {
      username: 'Nikolay',
      password: 'ueifwiueb',
    },
    {
      username: 'Petar',
      password: 'iojdfiwjvj',
    },
  ];

  show = true;

  constructor() {}

  butClick(event: MouseEvent) {
    
    this.show = !this.show;
  }
}
