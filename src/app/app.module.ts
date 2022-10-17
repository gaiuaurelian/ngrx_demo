import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LibraryModule } from './library/library.module';
import { LibraryEffects } from './library/state/library.effects';
import { libraryReducer } from './library/state/library.reducer';

const COMPONENTS = [AppComponent];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LibraryModule,
    MatDialogModule,
    StoreModule.forRoot({ library: libraryReducer }),
    EffectsModule.forRoot([LibraryEffects]),
  ],
  declarations: COMPONENTS,
  bootstrap: COMPONENTS,
})
export class AppModule {}
