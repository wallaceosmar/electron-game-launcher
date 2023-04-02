import {
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  useRouteError,
} from 'react-router-dom';
import Root from './root';
import { lazy } from 'react';

function ErrorBoundary() {
  let error = useRouteError();
  
  console.error(error);
  

  return (
    <>
      <Root>
        <div>Dang!</div>
      </Root>
    </>
  );
}

// Load pages
const RecentPage = lazy(() => import('/@/pages/App/Revcent'));
const OwnedGames = lazy(() => import('/@/pages/App/OwnedGames'));
// Component
const Router: React.FC = () => {
  return <RouterProvider router={createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorBoundary />}>
        <Route path="/recent" element={<RecentPage />} />
        <Route path="/owned-games" element={<OwnedGames />} />
      </Route>
    )
  )} />;
}
export default Router;