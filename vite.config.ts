import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      containers: path.resolve(__dirname, 'src/containers'),
      config: path.resolve(__dirname, 'src/config'),
      api: path.resolve(__dirname, 'src/api'),
      types: path.resolve(__dirname, 'src/types'),
      styles: path.resolve(__dirname, 'src/styles'),
      pages: path.resolve(__dirname, 'src/pages'),
      i18n: path.resolve(__dirname, 'i18n'),
      utils: path.resolve(__dirname, 'src/utils'),
      assets: path.resolve(__dirname, 'assets'),
      src: path.resolve(__dirname, 'src'),
      modals: path.resolve(__dirname, 'src/modals'),
      enums: path.resolve(__dirname, 'src/enums'),
      store: path.resolve(__dirname, 'src/store'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      context: path.resolve(__dirname, 'src/context'),
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
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
      dirs: ['src/shared'],
    }),
  ],
});
