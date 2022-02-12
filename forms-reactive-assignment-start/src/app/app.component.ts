import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;
  forbiddenNames = ['Test'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'projectName' : new FormControl(null, [Validators.required, this.forbiddenProjectNameAsync]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('critical')
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

  forbiddenProjectName(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenProjectNameAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'nameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 2000);
      });
    return promise;
  }
}
