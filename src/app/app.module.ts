import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaActoresComponent } from './page/alta-actores/alta-actores.component';

import { NavbarComponent } from './component/navbar/navbar.component';
import { FormActorComponent } from './component/form-actor/form-actor.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { FormInputComponent } from "./component/form-input/form-input.component";
import { ReactiveFormsModule } from '@angular/forms';

import { provideStorage, getStorage } from '@angular/fire/storage';
import { TablaPaisesComponent } from "./component/tabla-paises/tabla-paises.component";
import { SpinnerComponent } from './component/spinner/spinner.component';
import { LoginComponent } from './page/login/login.component';
import { AltaPeliculaComponent } from './page/alta-pelicula/alta-pelicula.component';
import { TablaActorComponent } from './component/tabla-actor/tabla-actor.component';
import { FormPeliculaComponent } from './component/form-pelicula/form-pelicula.component';
import { FormLoginComponent } from './component/form-login/form-login.component';


@NgModule({
    declarations: [
        AppComponent,
        AltaActoresComponent,
        NavbarComponent,
        SpinnerComponent,
        LoginComponent,
        AltaPeliculaComponent,
        TablaActorComponent,
        FormPeliculaComponent,
        FormLoginComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule.enablePersistence(),
        AngularFireStorageModule,
        FormInputComponent,
        ReactiveFormsModule,
        FormActorComponent,
        TablaPaisesComponent
    ]
})
export class AppModule { }
