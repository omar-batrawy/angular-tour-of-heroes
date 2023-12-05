import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { NgIf, NgFor, UpperCasePipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent, HerosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
