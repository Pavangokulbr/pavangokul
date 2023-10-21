import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
technicalSkillset=[
  {
    heading:'Operating system',
    skills:[
      {icon:'fa-brands fa-windows',name:'Windows'},
      {icon:'fa-brands fa-linux',name:'Linux'}
    ]
  },
  {
    heading:'Programming Languages',
    skills:[
      {icon:'fa fa-code',name:'C'},
      {icon:'fa fa-code',name:'C++'},
      {icon:'fa fa-database',name:'SQL'},
      {icon:'fa-brands fa-windows',name:'.NET Core'},
      {icon:'fa fa-shield',name:'C#'},
    ]
  },
  {
    heading:'Cloud Technology',
    skills:[
      {icon:'fa fa-cloud',name:'Microsoft Azure'},
    ]
  },
  {
    heading:'Web Technologies',
    skills:[
      {icon:'fa-brands fa-html5',name:'HTML'},
      {icon:'fa-brands fa-css3',name:'CSS'},
      {icon:'fa-brands fa-js',name:'JavaScript'},
      {icon:'fa-brands fa-html5',name:'TypeScript'},
      {icon:'fa-brands fa-angular',name:'Angular'},
      {icon:'fa-brands fa-bootstrap',name:'Bootstrap'},
    ]
  },
  {
    heading:'Other',
    skills:[
      {icon:'fa fa-cogs',name:'DevOps'},
      {icon:'fa-brands fa-github',name:'GitHub'},
    ]
  }
]
}
