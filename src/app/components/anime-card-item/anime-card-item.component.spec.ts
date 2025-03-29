import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeCardItemComponent } from './anime-card-item.component';

describe('AnimeCardItemComponent', () => {
  let component: AnimeCardItemComponent;
  let fixture: ComponentFixture<AnimeCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeCardItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
