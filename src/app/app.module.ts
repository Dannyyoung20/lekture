import { routes } from './shared/routes/routes';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ContentLoaderModule } from '@netbasal/content-loader';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './shared/components/nav/nav.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { CourseCardComponent } from './shared/components/course-card/course-card.component';
import { CourseSectionComponent } from './shared/components/course-section/course-section.component';
import { LoadingModule } from './shared/modules/loading/loading.module';
import { NgxContentLoadingModule } from 'ngx-content-loading';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './shared/guards/auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    HomeComponent,
    NotFoundComponent,
    CourseCardComponent,
    CourseSectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ContentLoaderModule,
    LoadingModule,
    NgxContentLoadingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
