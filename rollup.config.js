import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default {
  input: './freezer.js',
  output: {
    file: './build/freezer.min.js',
    name: 'Freezer',
    format: 'umd'
  },
  plugins: [
    resolve(),
    commonjs(),
    uglify()
  ]
};