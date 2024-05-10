const routes = [
  {
<<<<<<< HEAD
    path: '/AgendarConsultas',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/AgendarConsultas', name: 'AgendarConsultas', component: () => import('pages/AgendarConsultas.vue') },
      { path: '/Consultas', name: 'Consultas', component: () => import('pages/ConsultasAtendimentos.vue') }
    ]
  },
  {
    path: '/LoginInicio',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '/LoginInicio', name: 'Login', component: () => import('src/pages/LoginInicio.vue') },
      { path: '/Criar', name: 'Criar', component: () => import('pages/CriarConta.vue') }

=======
    path: '/index',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), name: 'index' }, 
      { path: '/cadastro-cliente', component: () => import('pages/cadastro-cliente.vue'), name: 'cadastro-cliente' }, 
      { path: '/lista-clientes', component: () => import('pages/lista-clientes.vue'), name: 'lista-clientes' }
>>>>>>> 32d4f7579a5d328a53750c30abdeb961ccaa87ca
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
<<<<<<< HEAD
    redirect: '/LoginInicio',
=======
>>>>>>> 32d4f7579a5d328a53750c30abdeb961ccaa87ca
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
