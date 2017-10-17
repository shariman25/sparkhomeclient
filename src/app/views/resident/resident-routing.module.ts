import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyProfileComponent } from './myProfile.component';
import { MyVehicleComponent } from './myVehicle.component';
import { GuestRegComponent } from './guest.reg.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Resident'
        },
        children: [
            {
                path: 'myprofile',
                component: MyProfileComponent,
                data: {
                    title: 'MyProfile'
                }
            },
            {
                path: 'myvehicle',
                component: MyVehicleComponent,
                data: {
                    title: 'MyVehicle'
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
export class ResidentRoutingModule { }
