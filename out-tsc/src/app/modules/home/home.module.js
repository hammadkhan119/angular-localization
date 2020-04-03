import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
let HomeModule = class HomeModule {
};
HomeModule = __decorate([
    NgModule({
        declarations: [LoginComponent],
        exports: [
            LoginComponent
        ],
        imports: [
            CommonModule,
            MatInputModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
        ]
    })
], HomeModule);
export { HomeModule };
//# sourceMappingURL=home.module.js.map