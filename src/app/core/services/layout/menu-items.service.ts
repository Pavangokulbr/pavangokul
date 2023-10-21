import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {

  constructor() {   }
  public getmenuitems(){
    let menuitems=[
      {name:'Home',url:'/home'},
      {name:'About',url:''},
      {name:'Contact',url:''},
    ]
    return menuitems
  }
  public getSocialIcons(){
    let menuitems=[
      {name:'github',url:'https://github.com/Pavangokulbr'},
      {name:'twitter-x',url:'https://twitter.com/pavangokulbr'},
      {name:'linkedin',url:'https://www.linkedin.com/in/pavangokul'},
      {name:'youtube',url:'https://www.youtube.com/@pavangokul'},
      {name:'google',url:'https://www.google.com/search?q=pavangokul'},
    ]
    return menuitems
  }
}
