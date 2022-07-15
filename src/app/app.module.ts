import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroAppComponent } from './03-组件样式/hero-app.component';
import { HeroAppMainComponent } from './03-组件样式/hero-app-main.component';
import { HeroDetailsComponent } from './03-组件样式/hero-details.component';
import { HeroControlsComponent } from './03-组件样式/hero-controls.component';
import { QuestSummaryComponent } from './03-组件样式/quest-summary.component';
import { HeroTeamComponent } from './03-组件样式/hero-team.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    HeroAppComponent,
    HeroAppMainComponent,
    HeroDetailsComponent,
    HeroControlsComponent,
    QuestSummaryComponent,
    HeroTeamComponent
  ],
  bootstrap: [ HeroAppComponent ]
})
export class AppModule { }
