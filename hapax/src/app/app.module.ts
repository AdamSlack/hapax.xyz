import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CarouselHighlightsComponent } from './components/carousel-highlights/carousel-highlights.component';

const appRoutes: Routes = [
  { path: '',         component: HomePageComponent      },
  { path: 'home',     component: HomePageComponent      },
  { path: 'about',    component: AboutPageComponent     },
  { path: 'projects', component: ProjectsPageComponent  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderBarComponent,
    NavBarComponent,
    ProjectsPageComponent,
    AboutPageComponent,
    CarouselHighlightsComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
