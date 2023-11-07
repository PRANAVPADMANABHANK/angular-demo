import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { GreenbackgroundDirective } from './greenbackground.directive';
import { DemoComponent } from './demo/demo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { SampleDirectiveDirective } from './sample-directive.directive';
import { DemoDirectiveDirective } from './basic-highlight/demo-directive.directive';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './basic-highlight/better-highlight.directive';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home2Component,
    GreenbackgroundDirective,
    DemoComponent,
    ParentComponent,
    ChildComponent,
    SampleDirectiveDirective,
    DemoDirectiveDirective,
    BasicHighlightDirective,
    BetterHighlightDirective,
    ContactUsComponent,
    AboutUsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
