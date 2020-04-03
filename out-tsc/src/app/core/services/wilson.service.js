import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let WilsonService = class WilsonService {
    constructor(http) {
        this.http = http;
    }
    validateCustomer() {
        this.http.post(' https://localhost:5001/api/employee/test-employee', {}).subscribe(data => {
            var result = data;
        });
    }
};
WilsonService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], WilsonService);
export { WilsonService };
//# sourceMappingURL=wilson.service.js.map