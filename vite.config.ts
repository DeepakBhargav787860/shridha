// // For ES Module style vite.config.ts
import path from 'path';

import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  base: '/',
});




// import { BrowserRouter } from 'react-router-dom';

// <BrowserRouter basename="/shridha">
//   {/* all your routes here */}
// </BrowserRouter>



// import { viteStaticCopy } from 'vite-plugin-static-copy'

// export default defineConfig({
//   plugins: [
//     react(),
//     viteStaticCopy({
//       targets: [
//         {
//           src: 'dist/index.html',
//           dest: '', // it will go to dist/404.html
//           rename: '404.html'
//         }
//       ]
//     })
//   ],
//   base: '/shridha/',
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },
// });
