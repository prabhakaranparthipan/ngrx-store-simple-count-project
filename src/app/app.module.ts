import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterCompenent } from './Counter/counter.component';
import { CountReducer } from './Store/counter.reducer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ count: CountReducer })
  ],
  declarations: [AppComponent, CounterCompenent],
  bootstrap: [AppComponent]
})
export class AppModule {}
