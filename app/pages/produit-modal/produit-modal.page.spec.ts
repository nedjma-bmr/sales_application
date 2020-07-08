import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProduitModalPage } from './produit-modal.page';

describe('ProduitModalPage', () => {
  let component: ProduitModalPage;
  let fixture: ComponentFixture<ProduitModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProduitModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
