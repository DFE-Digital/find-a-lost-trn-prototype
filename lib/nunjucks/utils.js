import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

import { dateFilters } from './filters/date.js'
import { helperFilters } from './filters/helper.js'
import { numberFilters } from './filters/number.js'
import { stringFilters } from './filters/string.js'
import { libGlobals } from './globals.js'

/**
 * Merge provided filters with any added by the prototype author.
 *
 * @param {Object} nunjucksAppEnv Nunjucks environment
 */
export async function loadFilters (nunjucksAppEnv) {
  const appFiltersPath = fileURLToPath(new URL('../../app/filters.js', import.meta.url))

  let appFilters
  if (fs.existsSync(appFiltersPath)) {
    appFilters = await import(appFiltersPath)
    appFilters = appFilters.default()
  }

  const filters = {
    ...dateFilters,
    ...helperFilters,
    ...numberFilters,
    ...stringFilters,
    ...appFilters
  }

  for (const filter of Object.keys(filters)) {
    nunjucksAppEnv.addFilter(filter, filters[filter])
  }
}

/**
 * Merge provided globals with any added by the prototype author.
 *
 * @param {Object} nunjucksAppEnv Nunjucks environment
 */
export async function loadGlobals (nunjucksAppEnv) {
  const appGlobalsPath = fileURLToPath(new URL('../../app/globals.js', import.meta.url))

  let appGlobals
  if (fs.existsSync(appGlobalsPath)) {
    appGlobals = await import(appGlobalsPath)
    appGlobals = appGlobals.default()
  }

  const globals = {
    ...libGlobals,
    ...appGlobals
  }

  for (const global of Object.keys(globals)) {
    nunjucksAppEnv.addGlobal(global, globals[global])
  }
}

/**
 * Normalise value provided to a filter. Checks that a given value exists
 * before performing a transformation.
 *
 * @param {*} value Input value
 * @param {*} defaultValue Value to fallback to if no value given
 * @returns defaultValue
 */
export function normalize (value, defaultValue) {
  if (value === null || value === undefined || value === false) {
    return defaultValue
  }

  return value
}

export const nunjucksUtils = {
  loadFilters,
  loadGlobals,
  normalize
}