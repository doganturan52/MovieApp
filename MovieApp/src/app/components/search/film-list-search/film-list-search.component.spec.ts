import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmListSearchComponent } from './film-list-search.component';

describe('FilmListSearchComponent', () => {
  let component: FilmListSearchComponent;
  let fixture: ComponentFixture<FilmListSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmListSearchComponent]
    });
    fixture = TestBed.createComponent(FilmListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
