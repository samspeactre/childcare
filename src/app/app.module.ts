import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { WhyChooseComponent } from './why-choose/why-choose.component';
import { FooterComponent } from './footer/footer.component';
import { RightsBarComponent } from './rights-bar/rights-bar.component';
import { LoginComponent } from './login-form/login-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PayPalPaymentComponent } from './paypal-payment/paypal-payment.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FindingQualifiedComponent } from './finding-qualified/finding-qualified.component';
import { HrComplianceComponent } from './hr-compliance/hr-compliance.component';
import { SearchParentComponent } from './search-parent/search-parent.component';
import { StateFindingComponent } from './state-finding/state-finding.component';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';
import {MatIconModule} from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatListModule} from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MatInputModule } from '@angular/material/input';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    WhyChooseComponent,
    FooterComponent,
    RightsBarComponent,
    LandingPageComponent,
    CopyrightComponent,
    RegisterComponent,
    DashboardComponent,
    DashboardNavComponent,
    SearchEmployeeComponent,
    PayPalPaymentComponent,
    LoginComponent,
    FindingQualifiedComponent,
    HrComplianceComponent,
    SearchParentComponent,
    StateFindingComponent,
    AdditionalInfoComponent,
    ProfilePageComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    RouterModule,
    HttpClientModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatListModule,
    MatMenuModule,
    SidebarModule,
    ButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
