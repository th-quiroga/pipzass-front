import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Productos } from './pages/productos/productos';
import { Nosotros } from './pages/nosotros/nosotros';
import { Contactanos } from './pages/contactanos/contactanos';

export const routes: Routes = [
  {path: "", component: Home},
  {path: "home", component: Home},
  {path: "productos", component: Productos},
  {path: "nosotros", component: Nosotros},
  {path: "contactanos", component: Contactanos},
  {path: "**", redirectTo: ""}
];
