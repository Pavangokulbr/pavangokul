import { Component } from '@angular/core';
import { MenuItemsService } from 'src/app/core/services/layout/menu-items.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  socialIcons:any;
  constructor(private menuItemService:MenuItemsService){ }
  ngOnInit(): void {
    this.socialIcons=this.menuItemService.getSocialIcons();
  }
}
