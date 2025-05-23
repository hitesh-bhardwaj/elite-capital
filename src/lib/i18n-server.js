import fs from 'fs'
import path from 'path'

export function loadNamespace(locale, ns) {
  const file = path.join(process.cwd(), 'src', 'locales', locale, ns + '.json')
  return JSON.parse(fs.readFileSync(file, 'utf-8'))
}

export function loadTranslations(locale, namespaces = []) {
  const out = {}
  for (const ns of namespaces) {
    out[ns] = loadNamespace(locale, ns)
  }
  return out
}