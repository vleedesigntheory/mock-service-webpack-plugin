const routes = [
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/Login.vue"),
    },
    {
      path: "/",
      name: '/',
      redirect: "/home",
      component: () => import("@/components/Layout.vue"),
      children: [
        {
          path: "/home",
          name: 'Home',
          component: () => import("@/views/Home.vue"),
          children: [
            {
              path: '/home/competition',
              name: 'Competition',
              children: [
                {
                  path: '/home/competition/frontend',
                  name: 'FrontEnd',
                  children: [
                    {
                      path: '/home/competition/frontend/html',
                      name: 'HTML'
                    },
                    {
                      path: '/home/competition/frontend/javascript',
                      name: 'Javascript'
                    },
                    {
                      path: '/home/competition/frontend/css',
                      name: 'CSS',
                    },
                    {
                      path: '/home/competition/frontend/engineering',
                      name: 'Engineering'
                    }
                  ]
                }
              ]
            }
          ]
        },
      ],
    },
    {
      path: "*",
      name: "NotFound",
      component: () => import("@/views/NotFound.vue"),
    },
  ];

  export default routes;