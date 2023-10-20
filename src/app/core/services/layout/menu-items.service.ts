import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {

  constructor() {   }
  public getmenuitems(){
    let menuitems=[
      {name:'Home',url:''},
      {name:'About',url:''},
      {name:'Contact',url:''},
    ]
    return menuitems
  }
  public getSocialIcons(){
    let menuitems=[
      {name:'twitter-x',url:''},
      {name:'github',url:''},
      {name:'linkedin',url:''},
    ]
    return menuitems
  }
}
