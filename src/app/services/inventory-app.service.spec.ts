import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { InventoryAppService } from './inventory-app.service';

describe('InventoryAppService', () => {
  let service: InventoryAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(InventoryAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
