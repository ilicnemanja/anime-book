import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeDetailsPageComponent } from './anime-details-page.component';

describe('AnimeDetailsPageComponent', () => {
  let component: AnimeDetailsPageComponent;
  let fixture: ComponentFixture<AnimeDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeDetailsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
