import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(wilsonService) {
        this.wilsonService = wilsonService;
    }
    ngOnInit() {
        this.validateCustomer();
    }
    validateCustomer() {
        this.wilsonService.validateCustomer();
    }
};
__decorate([
    Input()
], LoginComponent.prototype, "formGroup", void 0);
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map