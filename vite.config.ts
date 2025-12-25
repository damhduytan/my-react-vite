import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      eslintrc: {
        enabled: true,
      },
      imports: [
        'react',
        { react: ['cloneElement', 'StrictMode', 'Suspense'] },
        {
          from: 'react',
          imports: [
            'FunctionComponent',
            'ReactNode',
            'ReactElement',
            'Key',
            ['MouseEvent', 'ReactMouseEvent'],
            ['KeyboardEvent', 'ReactKeyboardEvent'],
            'ComponentType',
            'ComponentProps',
            'ChangeEvent',
            'Ref',
            'RefObject',
            'Dispatch',
            'SetStateAction',
          ],
          type: true,
        },
        {
          'react-router-dom': [
            'createBrowserRouter',
            'RouterProvider',
            'Link',
            'useNavigate',
            'NavLink',
            'useParams',
            'Outlet',
            'useLocation',
            'useSearchParams',
            'useBeforeUnload',
            'useMatch',
          ],
        },
        {
          'styled-components': [
            'css',
            'keyframes',
            'createGlobalStyle',
            'ThemeProvider',
            ['default', 'styled'],
          ],
        },
      ],
      dts: 'src/types/auto-imports.d.ts',
    }),
  ],
});
