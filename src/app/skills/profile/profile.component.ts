import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Output() notifyParent1 =  new EventEmitter<{name: string, country: string, email: string, username: string, age: number, gender: string, percent: number}>();
  color = new FormControl('');

  feedbackForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    country: ['Indonesia', [Validators.required]],
    username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
    age: ['', Validators.required],
    gender: ['', Validators.required],
  });

  get f() { return this.feedbackForm.controls }
  get t() { return this.f.colors as FormArray}

  submitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  add() {
    this.t.push(this.fb.group({
      colorName: ['']
    }));
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.feedbackForm.valid) {
      let modelProfile = {
        name: this.feedbackForm.get('name').value,
        country: this.feedbackForm.get('country').value,
        email: this.feedbackForm.get('email').value,
        username: this.feedbackForm.get('username').value,
        age: this.feedbackForm.get('age').value,
        gender: this.feedbackForm.get('gender').value,
        percent: 50
      };
      this.notifyParent1.emit(modelProfile);
    }
  }
}
