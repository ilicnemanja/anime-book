import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeCardsListComponent } from './anime-cards-list.component';

describe('AnimeCardsListComponent', () => {
  let component: AnimeCardsListComponent;
  let fixture: ComponentFixture<AnimeCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeCardsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
