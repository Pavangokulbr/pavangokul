import { Component, OnInit } from '@angular/core';
import { MenuItemsService } from 'src/app/core/services/layout/menu-items.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems:any;
  constructor(private menuItemService:MenuItemsService){ }
  ngOnInit(): void {
    this.menuItems=this.menuItemService.getmenuitems();
  }
}
