import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagementActivityComponent } from './management.activity.component';
import { GuestRegComponent } from './guest.reg.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Guard'
        },
        children: [
            {
                path: 'activityManagement',
                component: ManagementActivityComponent,
                data: {
                    title: 'ActivityManagement'
                }
            },
            {
                path: 'guest',
                component: GuestRegComponent,
                data: {
                    title: 'Guest'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GuardRoutingModule { }
