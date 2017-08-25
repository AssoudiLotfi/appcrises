import { Component, OnInit } from '@angular/core';
import { RouterModule,Router, ActivatedRoute} from '@angular/router';
import { AuthenticationService } from '../service/authentification.service';

@Component({
  selector: 'app-login',
  styleUrls:['./login.component.css'],
  templateUrl:'./login.component.html',
})
export class LoginComponent implements OnInit { 

 model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
        ) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
       // this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    console.log(JSON.parse(localStorage.getItem('currentUser')))
                    if(localStorage.getItem('currentUser')!=undefined){
                        console.log()
                       this.router.navigate(['home']);
                    }
                    else 
                    return 'user not found'
                    
                },
                error => {
                    
                    this.loading = false;
                });
    }


}