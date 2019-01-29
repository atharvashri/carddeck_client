import { TestBed } from '@angular/core/testing';

import { CardDeckService } from './card-deck.service';

describe('CardDeckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardDeckService = TestBed.get(CardDeckService);
    expect(service).toBeTruthy();
  });
});
