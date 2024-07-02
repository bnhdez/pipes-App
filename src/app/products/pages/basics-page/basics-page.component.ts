import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower:string = 'boris';
  public nameUpper:string = 'BORIS';
  public fullName:string = 'bOrIs hERnáNDeZ';

  public customDate:Date = new Date();
}
