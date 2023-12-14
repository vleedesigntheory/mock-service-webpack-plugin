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
              path: '/home/equipment',
              name: 'Equipment',
              children: [
                {
                  path: '/home/equipment/management',
                  name: 'Management',
                  children: [
                    {
                      path: '/home/equipment/management/cpe',
                      name: 'CPE'
                    },
                    {
                      path: '/home/equipment/management/hub',
                      name: 'Hub'
                    },
                    {
                      path: '/home/equipment/management/switch',
                      name: 'Switch',
                    },
                    {
                      path: '/home/equipment/management/robot',
                      name: 'Robot'
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