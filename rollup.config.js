import rollupTypescript from 'rollup-plugin-typescript'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: './dist/use-force-update.cjs.js',
      format: 'cjs'
    },
    {
      file: './dist/use-force-update.esm.js',
      format: 'esm'
    }
  ],
  external: ['react'],
  plugins: [rollupTypescript()]
}
