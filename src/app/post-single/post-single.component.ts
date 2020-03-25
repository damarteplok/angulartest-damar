import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css']
})
export class PostSingleComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit(): void {
  }

  sesuatu():void {

  }
}
