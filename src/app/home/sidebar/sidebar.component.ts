import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  image:string = "assets/img/undraw_rocket.png"
  constructor( public authService: AuthService) { }

  ngOnInit(): void {
  }

}
