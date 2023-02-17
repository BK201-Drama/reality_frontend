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
      }
    ]
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