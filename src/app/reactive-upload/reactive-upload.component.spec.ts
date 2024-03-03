import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveUploadComponent } from './reactive-upload.component';

describe('ReactiveUploadComponent', () => {
  let component: ReactiveUploadComponent;
  let fixture: ComponentFixture<ReactiveUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
