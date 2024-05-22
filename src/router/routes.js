const routes = [
  {
    path: '/AgendarConsultas',
    component: () => import('layouts/MainLayout.vue'),
    children: [ // Rota padrão ao acessar /AgendarConsultas
      { path: 'ProdutosProcedimentos', name: 'ProdutosProcedimentos', component: () => import('pages/ProdutosProcedimentos.vue') },
      { path: 'Agendamentos', name: 'Agendamentos', component: () => import('pages/AgendamentosPendentes.vue') },
      { path: 'Agendados', name: 'Agendados', component: () => import('pages/AgendadosCliente.vue') },
      { path: 'ProdutosCadastrados', name: 'ProdutosCadastrados', component: () => import('pages/ProdutosCadastrados.vue') },
      { path: 'HorariosDisponiveis', name: 'HorariosDisponiveis', component: () => import('pages/HorariosDisponiveis.vue') }
    ]
  },
  {
    path: '/LoginInicio',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', name: 'Login', component: () => import('pages/LoginInicio.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    redirect: '/LoginInicio',
    component: () => import('pages/ErrorNotFound.vue') // Rota para página 404
  }
]

export default routes
