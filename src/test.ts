// Zoneless test bootstrap for Angular 20 applications.
//
// For zoneless apps we avoid loading full Zone.js in tests. However,
// Angular internals sometimes check for the presence of `Zone` and call
// `Zone.assertZonePatched()`. To satisfy those checks without enabling
// full Zone behavior we provide a minimal, noop shim that implements the
// small subset Angular expects during initialization.

// Provide a minimal global Zone shim only if Zone is missing.
if (typeof (globalThis as any).Zone === 'undefined') {
  (globalThis as any).Zone = {
    // Minimal current zone with run/runOutsideAngular helpers used by some libs.
    current: {
      run(fn: Function) {
        return fn();
      },
      runOutsideAngular(fn: Function) {
        return fn();
      },
      // onError is used in a few places; provide a subscribe noop
      onError: { subscribe: () => ({ unsubscribe: () => {} }) },
    },
    // Angular calls this during setup; make it a no-op.
    assertZonePatched() {},
    // Zone.__symbol__ is sometimes referenced; provide a simple implementation.
    __symbol__(name: string) {
      return `__zone_symbol__${name}`;
    },
  };
}

// Initialize the Angular testing environment.
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Auto-load all spec files
declare const require: any;
const context = require.context('./', true, /\.spec\.ts$/);
context.keys().map(context);
