const HEADERS_INVALID_CHARACTERS = /[^a-z0-9\-#$%&'*+.^_`|~]/i

export function normalizeHeaderName(name: string): string {
  if (typeof name !== 'string') {
    name = String(name)
  }

  if (HEADERS_INVALID_CHARACTERS.test(name) || name.trim() === '') {
    throw new TypeError('Invalid character in header field name')
  }

  return name.toLowerCase()
}
