import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { BearerTokenAuthInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegistrationFormComponent } from './registration-form';
import { GeneSearchComponent } from './gene-search/gene-search.component';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { ProductionPlansComponent } from './project/production-plans/production-plans.component';
import { ProductionPlanDetailComponent } from './project/production-plan-detail/production-plan-detail.component';
import { PhenotypePlansComponent } from './project/phenotype-plans/phenotype-plans.component';
import { PhenotypePlanDetailComponent } from './project/phenotype-plan-detail/phenotype-plan-detail.component';
import { ConfirmationComponent } from './shared/confirmation/confirmation.component';
import { ProjectsComponent } from './project/projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CrisprAttemptComponent } from './crispr-attempt/crispr-attempt.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        NgMultiSelectDropDownModule.forRoot(),
        NgbModule,
        NgxPaginationModule,
        AutocompleteLibModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegistrationFormComponent,
        GeneSearchComponent,
        ProjectDetailComponent,
        ProductionPlansComponent,
        ProductionPlanDetailComponent,
        PhenotypePlansComponent,
        PhenotypePlanDetailComponent,
        ConfirmationComponent,
        ProjectsComponent,
        HeaderComponent,
        FooterComponent,
        CrisprAttemptComponent,
        CreateProjectComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: BearerTokenAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        fakeBackendProvider
    ],
    bootstrap: [AppComponent],
    entryComponents: [ConfirmationComponent]
})

export class AppModule { }
