import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['emilys', Validators.required],
      password: ['emilyspass', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
        .subscribe({
          next: (response) => {

            const Token = response.token;

            // localStorage.setItem('name', `${response.firstName} ${response.lastName}`)
            localStorage.setItem('token', Token);
            this.router.navigate(['/dashboard'])
          },
          error: (err) => {
            console.log('erro:r'+err);

            if (err.error){
              Swal.fire({
                icon: 'error',
                title: 'Ups... ha ocurrido un error',
                text: err.error.msg,
                showCancelButton: true,
                confirmButtonText: "Ok"
              });
            }

          }
        })

    }
  }

}
