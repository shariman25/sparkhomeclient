import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagementActivityComponent } from './management.activity.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Office'
        },
        children: [
            {
                path: 'activityManagement',
                component: ManagementActivityComponent,
                data: {
                    title: 'ActivityManagement'
                }
                
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OfficeRoutingModule { }
