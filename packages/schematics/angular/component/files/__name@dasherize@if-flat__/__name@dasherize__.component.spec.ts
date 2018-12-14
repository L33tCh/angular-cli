import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';
import { <%= classify(name) %>SharedModule } from './<%= dasherize(name) %>.module';
// import { of } from 'rxjs';

describe('<%= classify(name) %>Component', () => {
  let component: <%= classify(name) %>Component;
  let fixture: ComponentFixture<<%= classify(name) %>Component>;
  const oldResetTestingModule = TestBed.resetTestingModule;
  // let _<%= classify(name) %>Service: <%= classify(name) %>Service;

  // const mock<%= classify(name) %>Service = {
  //   get<%= classify(name) %>s: () => of([]),
  // };

  beforeAll(done => (async () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ <%= classify(name) %>Component ],
      imports: [<%= classify(name) %>SharedModule],
      // providers: [
      //   {
      //     provide: <%= classify(name) %>Service,
      //     useValue: mock<%= classify(name) %>Service
      //   }
      // ]
    });

    await TestBed.compileComponents();
    TestBed.resetTestingModule = () => TestBed;
  })().then(done).catch(done.fail));

  afterAll(() => {
    TestBed.resetTestingModule = oldResetTestingModule;
    TestBed.resetTestingModule();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(<%= classify(name) %>Component);
    component = fixture.componentInstance;
    // _<%= classify(name) %>Service = fixture.debugElement.injector.get(<%= classify(name) %>Service);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
