const {sassPlugin} = require('esbuild-sass-plugin')
const esbuild = require('esbuild');
const {nodeExternalsPlugin} = require('esbuild-node-externals')

esbuild.build({
  entryPoints: ['src/index.ts'],
  outdir: 'dist/esm',
  bundle: true,
  sourcemap: true,
  minify: true,
  splitting: true,
  // external:['react'],
  format: 'esm',
  target: 'esnext',
  plugins: [sassPlugin(),nodeExternalsPlugin()],
})

esbuild.build({
  entryPoints: ['src/index.ts'],
  outdir: 'dist/cjs',
  bundle: true,
  sourcemap: true,
  minify: true,
  format: 'cjs',
  // external:['react'],
  target: 'esnext',
  plugins: [sassPlugin(),nodeExternalsPlugin()],
})