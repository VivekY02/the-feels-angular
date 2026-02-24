import { Routes } from '@angular/router';
import { Shop } from '../shop/shop';
import { Contact } from '../contact/contact';
import { About } from '../about/about';
import { Home } from '../home/home';

export const routes: Routes = [
    {
        path: '', component: Home 
    },
    {
        path:'shop',component:Shop
    },
    {
        path:'contact',component:Contact
    },
    {
        path:'about',component:About
    }
];
