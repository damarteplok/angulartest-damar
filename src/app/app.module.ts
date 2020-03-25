import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShopingEditComponent } from './shoping-list/shoping-edit/shoping-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RecipeNewComponent} from './recipes/recipe-list/recipe-new/recipe-new.component';
import { HilihPipe } from './pipes/hilih.pipe';
import { PostContainerComponent } from './post-container/post-container.component';
import { PostSingleComponent } from './post-single/post-single.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SkillsComponent } from './skills/skills.component';
import { ProfileComponent } from './skills/profile/profile.component';
import { SkillComponent } from './skills/skill/skill.component';
import { SummaryComponent } from './skills/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShopingListComponent,
    ShopingEditComponent,
    RecipeNewComponent,
    HilihPipe,
    PostContainerComponent,
    PostSingleComponent,
    FeedbackComponent,
    SkillsComponent,
    ProfileComponent,
    SkillComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
