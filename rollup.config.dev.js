import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: './freezer.js',
  output: {
    file: './build/freezer.js',
    name: 'Freezer',
    format: 'umd'
  },
  plugins: [
    resolve(),
    commonjs(),
  ]
};