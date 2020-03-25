import { Component, OnInit } from '@angular/core';
import {ProfileModel} from '../shared/profile.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  percentNow: number = 0;
  profile: ProfileModel;
  constructor() { }

  ngOnInit(): void {
  }

  onNotifyParent1(val: {name: string, country: string, email: string, username: string, age: number, gender: string, percent: number}) {
    console.log(val);
    this.profile = new ProfileModel(val.name, val.country, val.email, val.username, val.age, val.gender);
    this.percentNow = val.percent;
  }
}
