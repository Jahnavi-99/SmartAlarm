// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AlarmModule } from './alarm/alarm.module'; 
import { AppRoutingModule } from './app-routing.module';
import { SoundpickerComponent } from './soundpicker/soundpicker.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AlarmModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
