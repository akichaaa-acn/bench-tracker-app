import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Resources } from './resources';

describe('Resources', () => {
  let component: Resources;
  let fixture: ComponentFixture<Resources>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resources],
    }).compileComponents();

    fixture = TestBed.createComponent(Resources);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter employees by a case-insensitive search term', () => {
    component.searchTerm = 'KUBERNETES';

    expect(component.filteredResources.map(resource => resource.name))
      .toEqual(['Alex Santos', 'Sarah Garcia']);
  });

  it('should return no employees when the search has no matches', () => {
    component.searchTerm = 'no matching employee';

    expect(component.filteredResources).toEqual([]);
  });
});
