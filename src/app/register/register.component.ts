import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
//SERVICE
import { AuthService } from '../shared/auth.service';
import { ValidateService } from '../shared/validate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nom: String;
  prenom: String;
  email: String;
  password: String;
  userRole: String = "user";

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private validateService: ValidateService,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
  }


  onRegisterSubmit(){

    const user = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      password: this.password,
      userRole: this.userRole,

    };


  // Required Fields
  if (!this.validateService.validateRegister(user)) {
    this.toastr.warning("Merci de remplir tous les champs","WARNING" );
    return false;
  }
  
  // Validate Email
  if (!this.validateService.validateEmail(user.email)) {
    this.toastr.warning("Veuillez utiliser une adresse e-mail valide","WARNING" );
    return false;
}

  // Register user
  this.authService.registerUser(user).subscribe(data => {
    if (data.success) {
      this.toastr.success("Vous êtes maintenant inscrit et pouvez vous connecter","SUCCESS" );
      this.router.navigate(['/login']);
    } else {
      this.toastr.error("Quelque chose s'est mal passé !","ERROR" );
      this.router.navigate(['/register']);
    }
  });

}
}