import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeResumeComponent } from './employee-resume/employee-resume.component';
import { EmployeeResumeProjectsComponent } from './employee-resume-projects/employee-resume-projects.component';
import { EmployeeResumeHobbiesComponent } from './employee-resume-hobbies/employee-resume-hobbies.component';
import { EmployeeResumeNotesComponent } from './employee-resume-notes/employee-resume-notes.component';
import { EmployeeResumeInfoComponent } from './employee-resume-info/employee-resume-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employeeDetails/:id', component: EmployeeDetailsComponent },
  { path: 'employeeDetails/resume/:id', component: EmployeeResumeComponent,
    children: [
      { path: 'info/:id', component: EmployeeResumeInfoComponent },
      { path: 'projects/:id', component: EmployeeResumeProjectsComponent },
      { path: 'hobbies/:id', component: EmployeeResumeHobbiesComponent },
      { path: 'notes/:id', component:EmployeeResumeNotesComponent }
    ]
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
                                  EmployeeListComponent,
                                  HomeComponent,
                                  EmployeeDetailsComponent,
                                  EmployeeResumeComponent,
                                  EmployeeResumeProjectsComponent,
                                  EmployeeResumeHobbiesComponent,
                                  EmployeeResumeNotesComponent,
                                  EmployeeResumeInfoComponent
                                ];
