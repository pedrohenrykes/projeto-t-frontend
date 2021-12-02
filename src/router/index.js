import Vue from 'vue';
import VueRouter from 'vue-router';
import EmployeesList from '../views/Employees';
import UsersList from '../views/Users';

Vue.use(VueRouter);

const routes = [
  {
    path: '/employees',
    name: 'Colaboradores',
    component: EmployeesList
  },
  {
    path: '/users',
    name: 'Usuários',
    component: UsersList
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router