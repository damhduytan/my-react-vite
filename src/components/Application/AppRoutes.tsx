const HomePage = lazyloadWithLoader(() => import('pages/HomePage'));

export default [
  {
    path: '/',
    element: <HomePage />,
  },
];
