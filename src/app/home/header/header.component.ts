import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
//import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 
  image: String ="assets/img/undraw_profile.png";

  constructor(  
    public authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    ) { 
      this.authService.loadCurrentUser();
    }

  ngOnInit(): void {
  }


  logout(){

    this.authService.logout();
    this.toastr.success("Vous êtes déconnecté" ,"SUCCESS" );
    this.router.navigate(['/login']);
    return false;

  }
}
