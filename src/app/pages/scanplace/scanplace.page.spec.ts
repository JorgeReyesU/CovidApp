import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScanplacePage } from './scanplace.page';

describe('ScanplacePage', () => {
  let component: ScanplacePage;
  let fixture: ComponentFixture<ScanplacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanplacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScanplacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
