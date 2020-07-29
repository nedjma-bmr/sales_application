import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjouModifClientPage } from './ajou-modif-client.page';

describe('AjouModifClientPage', () => {
  let component: AjouModifClientPage;
  let fixture: ComponentFixture<AjouModifClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouModifClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjouModifClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
