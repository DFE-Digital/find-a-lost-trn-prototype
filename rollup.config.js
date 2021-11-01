import multi from '@rollup/plugin-multi-entry'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import scss from 'rollup-plugin-scss'
import copy from 'rollup-plugin-copy'

export default [{
  context: 'window',
  input: [
    'node_modules/govuk-frontend/govuk/all.js',
    'app/assets/javascripts/application.js',
    'app/components/**/*.js'
  ],
  output: {
    dir: 'public/javascripts',
    sourcemap: true
  },
  plugins: [
    // Copy all assets other than scripts and styles to public folder
    copy({
      targets: [{
        src: 'app/assets/!(javascripts|stylesheets)',
        dest: 'public'
      }]
    }),
    // Bundle govuk-frontend, application and component scripts
    multi({
      entryFileName: 'application.js'
    }),
    // Resolve modules imported from node_modules
    nodeResolve(),
    // Concatenate govuk-frontend, application and component styles
    scss({
      includePaths: ['node_modules'],
      output: 'public/stylesheets/application.css',
      quietDeps: true,
      sourceMap: true,
      verbose: false,
      watch: ['app/assets/stylesheets', 'app/components']
    })
  ]
}]
