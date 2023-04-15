import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SampleProject';
  pageTitle:string='data binding in angular';
  imageUrl='assets/pic.jpg'
  username:string | undefined;
  data:any=["A1","A2","A3"]
  
  hello(){
    alert('you clicked me')
  }
}
