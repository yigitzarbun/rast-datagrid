import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import PageLoading from "../components/loading/PageLoading";
import MainLayout from "../components/layout/MainLayout";

import paths from "./Paths";

const Home = lazy(() => import("../modules/home/Home"));
const AddAccount = lazy(() => import("../modules/new-account/AddAccount"));

interface Routes {
  path: string;
  element: React.ReactNode;
}

const getRouteElement = (Component: React.ElementType): React.ReactNode => (
  <Suspense fallback={<PageLoading />}>
    <MainLayout>
      <Component />
    </MainLayout>
  </Suspense>
);

const routes: Routes[] = [
  { path: paths.HOME, element: getRouteElement(Home) },
  { path: paths.ADD_ACCOUNT, element: getRouteElement(AddAccount) },
];

export default createBrowserRouter(routes);
