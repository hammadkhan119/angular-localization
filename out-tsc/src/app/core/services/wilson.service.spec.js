import { TestBed } from '@angular/core/testing';
import { WilsonService } from './wilson.service';
describe('WilsonService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(WilsonService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=wilson.service.spec.js.map