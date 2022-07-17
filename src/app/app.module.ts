import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_CONFIG, HERO_DI_CONFIG } from './08-依赖注入/app.config';
import { AppComponent } from './08-依赖注入/app.component';
import { CarComponent } from './08-依赖注入/car/car.component';
import { HeroesComponent } from './08-依赖注入/heroes/heroes.component';
import { HeroesTspComponent } from './08-依赖注入/heroes/heroes-tsp.component';
import { HeroListComponent } from './08-依赖注入/heroes/hero-list.component';
import { InjectorComponent } from './08-依赖注入/injector.component';
import { Logger } from './08-依赖注入/logger.service';
import { TestComponent } from './08-依赖注入/test.component';
import { UserService } from './08-依赖注入/user.service';

import { ProvidersModule } from './08-依赖注入/providers.module';

@NgModule({
  imports: [
    BrowserModule,
    ProvidersModule
  ],
  declarations: [
    AppComponent,
    CarComponent,
    HeroesComponent,
    HeroesTspComponent,
    HeroListComponent,
    InjectorComponent,
    TestComponent
  ],
  providers: [
    Logger,
    UserService,
    { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }
  ],
  exports: [ CarComponent, HeroesComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
