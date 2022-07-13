import { build, BuildOptions } from 'esbuild';
import path from 'path';
import { sassPlugin } from 'esbuild-sass-plugin';
import { nodeExternalsPlugin } from 'esbuild-node-externals';

const commonOptions: BuildOptions = {
  entryPoints: [path.resolve(__dirname, 'src', 'index.ts')],
  entryNames: `[dir]/[name]`,
  bundle: true,
  sourcemap: true,
  minify: true,
  splitting: true,
  target: 'esnext',
  plugins: [sassPlugin(), nodeExternalsPlugin()],
  outdir: path.resolve(__dirname, 'dist'),
  format: "esm",
};

build(commonOptions)
