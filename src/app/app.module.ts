import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ColumnDataService } from './column-data.service';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ColumnDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
