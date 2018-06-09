// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import * as appSettings from "application-settings";
import { AppModule } from "./app.module";

// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page. 
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers. 
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic, 
// that sets up a NativeScript application and can bootstrap the Angular framework.
import { on as applicationOn, launchEvent, suspendEvent, resumeEvent, exitEvent, lowMemoryEvent, uncaughtErrorEvent, ApplicationEventData } from "application";
import {APP_SET_WAS_SUSPENDED} from "./config";


applicationOn(suspendEvent, (_args: ApplicationEventData) => {
    appSettings.setString(APP_SET_WAS_SUSPENDED, "true");
});

platformNativeScriptDynamic().bootstrapModule(AppModule);
