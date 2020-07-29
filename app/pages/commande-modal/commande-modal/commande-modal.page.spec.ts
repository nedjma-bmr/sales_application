import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommandeModalPage } from './commande-modal.page';

describe('CommandeModalPage', () => {
  let component: CommandeModalPage;
  let fixture: ComponentFixture<CommandeModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommandeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
