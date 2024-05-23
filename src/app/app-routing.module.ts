import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login-form/login-form.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FindingQualifiedComponent } from './finding-qualified/finding-qualified.component';
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';
import { HrComplianceComponent } from './hr-compliance/hr-compliance.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { SearchParentComponent } from './search-parent/search-parent.component';
import { StateFindingComponent } from './state-finding/state-finding.component';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';
import { WhyChooseComponent } from './why-choose/why-choose.component';
import { AuthGuard } from './auth.service';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  // { path: '', redirectTo: '/landing-page', pathMatch: 'full' }, 
  { path: '', component: LandingPageComponent }, 
  { path: 'login-form', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {path: 'landing-page', component: LandingPageComponent },
  {path: 'home', component: HomeComponent, },
  {path: 'about-us', component: AboutUsComponent, },
  {path: 'services', component: ServicesComponent, },
  {path: 'why-choose', component: WhyChooseComponent, },
  {path: 'register', component: RegisterComponent, },
  {path: 'finding-qualified', component: FindingQualifiedComponent, },
  {path: 'navbar', component: DashboardNavComponent, },
  {path: 'hr-comliance', component: HrComplianceComponent, },
  {path: 'search-employee', component: SearchEmployeeComponent, },
  {path: 'search-parent', component: SearchParentComponent, },
  {path: 'state-finding', component: StateFindingComponent, },
  {path: 'additional-info', component: AdditionalInfoComponent, },
  {path: 'user-list', component: UserListComponent, },
  {path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
