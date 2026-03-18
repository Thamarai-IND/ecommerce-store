// Standard Angular test bootstrap
// Load Zone.js core first so the runtime is patched before Angular loads.
// Import the minimal runtime, then the testing helpers.
import 'zone.js/dist/zone';
import 'zone.js/testing';

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Configure a base testing module that includes RouterTestingModule so
// standalone components that use router directives/providers work by default.
getTestBed().configureTestingModule({ imports: [RouterTestingModule] });

// Provide a global ActivatedRoute mock as a fallback for any test that
// depends on it at component construction time.
TestBed.overrideProvider(ActivatedRoute, {
  useValue: {
    snapshot: { params: {} },
    params: of({}),
    queryParams: of({}),
  },
});

// Inject RouterTestingModule and a simple ActivatedRoute mock into every
// TestBed.configureTestingModule call so standalone components and tests
// relying on routing providers don't fail with NG0201.
const _origConfigure = (TestBed as any).configureTestingModule.bind(TestBed);
(TestBed as any).configureTestingModule = (moduleDef: any = {}) => {
  moduleDef.imports = [...(moduleDef.imports || []), RouterTestingModule];
  moduleDef.providers = [
    ...(moduleDef.providers || []),
    {
      provide: ActivatedRoute,
      useValue: {
        snapshot: { params: {} },
        params: of({}),
        queryParams: of({}),
      },
    },
  ];
  return _origConfigure(moduleDef);
};

// Auto-load all spec files
declare const require: any;
const context = require.context('./', true, /\.spec\.ts$/);
context.keys().map(context);
