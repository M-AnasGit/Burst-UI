import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default {
	input: 'src/index.ts',
	output: {
		file: 'dist/index.esm.js',
		format: 'esm', // Only the ESM format
		sourcemap: true,
	},
	plugins: [
		peerDepsExternal(),
		resolve(),
		typescript({
			tsconfig: './tsconfig.json',
		}),
		postcss({
			extract: true,
			minimize: true,
		}),
	],
	external: ['react', 'react-dom'],
}
