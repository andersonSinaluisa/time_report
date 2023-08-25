import type { VerticalNavItems } from '@/@layouts/types'

export default [
  {
    title: 'Home',
    to: { name: 'index' },
    icon: { icon: 'tabler-smart-home' },
  },
  {
    title: 'Second page',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'Usuarios',
    to: { name: 'users' },
    icon: { icon: 'tabler-users' },
  },
  {
    title: 'Roles',
    to: { name: 'roles' },
    icon: { icon: 'tabler-user-check' },
  },
  {
    title: 'Permisos',
    to: { name: 'permissions' },
    icon: { icon: 'tabler-key' },
  },
  {
    title: 'Clientes',
    to: { name: 'clients' },
    icon: { icon: 'tabler-user' },
  },
  {
    title: 'Proyectos',
    to: { name: 'projects' },
    icon: { icon: 'tabler-file-search' },
  },
] as VerticalNavItems
