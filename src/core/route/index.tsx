import { lazy, Suspense } from "react";
import LayoutIndex from "../../shared/LayoutIndex";

interface Router {
  path: string;
  component?: any;
  children?: Router[];
  element?: any;
}

export const routers: Router[] = [
  {
    path: '',
    component: () => <LayoutIndex />,
    children: [
      {
        path: '/welcome',
        component: lazy(() => import('../../pages/Welcome'))
      },
      {
        path: '/room-message',
        component: lazy(() => import('../../pages/RoomMsg'))
      },
      {
        path: '/people-message',
        component: lazy(() => import('../../pages/PeopleMsg'))
      },
      {
        path: '/feedback',
        component: lazy(() => import('../../pages/Feedback'))
      }
    ]
  }, {
    path: '',
    component: () => <LayoutIndex />,
    children: [
      {
        path: '/my-message',
        component: lazy(() => import('../../pages/MyMessage'))
      }, {
        path: '/recharge',
        component: lazy(() => import('../../pages/Recharge'))
      }
    ]
  }, {
    path: '/login',
    component: lazy(() => import('../../pages/Login'))
  }
]

export const changeRouter = (routers: Router[]) => {
  return routers.map((route: Router) => {
    if (route.children) {
      route.children = changeRouter(route.children)
    }
    route.element = <Suspense>
      <route.component />
    </Suspense>
    return route
  })
}

export const getRouters = () => changeRouter(routers)