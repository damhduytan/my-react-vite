import router from './AppRoutes';

const Application: FunctionComponent = () => (
  <StrictMode>
    <RouterProvider router={createBrowserRouter(router)} />
  </StrictMode>
);

export default Application;
