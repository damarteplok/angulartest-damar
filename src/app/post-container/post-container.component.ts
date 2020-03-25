import {Component, OnInit, AfterContentInit, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import {PostSingleComponent} from '../post-single/post-single.component';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit, AfterContentInit {
  @ViewChild('container', {read: ViewContainerRef, static: true}) container: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PostSingleComponent);
    const component = this.container.createComponent(componentFactory);

    component.instance.title = 'Sesuatu';
  }

}
