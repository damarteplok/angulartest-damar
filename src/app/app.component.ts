import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {RecipesComponent} from './recipes/recipes.component';
import {ShopingListComponent} from './shoping-list/shoping-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit, OnChanges {
  @ViewChild('mainContainer', {read: ViewContainerRef, static: true}) mainContainer: ViewContainerRef;
  @ViewChild('headerContainer', {read: ViewContainerRef, static: true}) headerContainer: ViewContainerRef;
  showComponent: string = 'recipe-container';
  phoneList = {
    home: '901213',
    work: '312331',
    work2: '23213213'
  };

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
  }

  onChangeComponent(val: string): void {
    this.showComponent = val;
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  ngAfterContentInit(): void {
    // const componentHeader = this.componentFactoryResolver.resolveComponentFactory(HeaderComponent);
    // const componentRecipe = this.componentFactoryResolver.resolveComponentFactory(RecipesComponent);
    // const componentShoping = this.componentFactoryResolver.resolveComponentFactory(ShopingListComponent);
    // const header = this.headerContainer.createComponent(componentHeader);
    // let main;
    // switch (this.showComponent) {
    //   case 'recipe-container':
    //     main = this.mainContainer.createComponent(componentRecipe);
    //     break;
    //   case 'shoping-container':
    //     main = this.mainContainer.createComponent(componentShoping);
    //     break;
    //   case 'skill-container':
    //     main = this.mainContainer.createComponent(componentRecipe);
    //     break;
    //   default:
    //     main = this.mainContainer.createComponent(componentRecipe);
    // }

  }

}
