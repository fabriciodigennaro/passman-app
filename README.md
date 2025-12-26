# Passman App

**Passman App** is a mobile application for **local password management**.  
It allows you to securely store and manage passwords directly on your device without relying on cloud services.

## Technologies

- Angular 21
- Capacitor
- Android

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to http://localhost:4200/. The application will automatically reload whenever you modify any of the source files.

### Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as components, directives, or pipes), run:

```bash
ng generate --help
```

Building for web

To build the project for production, run:

```bash
ng build
```

The build artifacts will be stored in the dist/ directory. This build is optimized for performance.

Building for Android (APK)

Install Capacitor dependencies:

npm install @capacitor/core @capacitor/cli

Initialize Capacitor (if not done yet):

```bash
npx cap init
```

Add Android platform:

```bash
npx cap add android
```

Sync the Angular build with Capacitor:

```bash
ng build
npx cap sync
```

Open the project in Android Studio:

```bash
npx cap open android
```

In Android Studio:

Select an emulator or connected device

`Build the project: Build → Build Bundle(s) / APK(s) → Build APK(s)`

The generated APK will be located at:

android/app/build/outputs/apk/debug/app-debug.apk

You can install this APK directly on your device for testing.

Running unit tests

To execute unit tests with Vitest
, use:

```bash
ng test
```

Running end-to-end tests

For e2e testing, run:

```bash
ng e2e
```

Angular CLI does not come with a default e2e framework. You can choose one that suits your needs.

Additional Resources

https://angular.dev/tools/cli

https://capacitorjs.com/docs

https://developer.android.com/studio
