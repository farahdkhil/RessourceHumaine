import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,

  ) {

    let formControls = {
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
    }

    this.loginUserForm = this.fb.group(formControls)
  }

  get email() { return this.loginUserForm.get('email') }
  get password() { return this.loginUserForm.get('password') }


  ngOnInit(): void {
    let isLoggedIn = this.userService.isLoggedIn();

    if (isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

  login() {

    let data = this.loginUserForm.value;

    let user = new User(undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      data.email,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      data.password,
      undefined);

    this.userService.loginAdmin(user).subscribe(
      (res: any) => {
        console.log(res);
        let token = res.token;

        localStorage.setItem("myToken", token);
        this.router.navigate(['/dashboard']);
      },
      (err: any) => {
        console.log(err);

      }
    )

  }

}
