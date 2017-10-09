import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { MyApp } from './app.component';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { GreybackProvider } from '../providers/greyback/greyback';
import { AudioProvider } from '../providers/audio/audio';
import { TabHiddenDirective } from '../directives/tab-hidden/tab-hidden';

@NgModule({
	declarations: [
		MyApp,
		TabHiddenDirective
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp, {
			mode: 'ios'
		})
	],
	exports: [
		TabHiddenDirective
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		AuthServiceProvider,
		GreybackProvider,
		AudioProvider,
		InAppBrowser
	]
})
export class AppModule { }
