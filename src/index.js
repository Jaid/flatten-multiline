/** @module flatten-multiline */

import splitLines from "split-lines"

/**
 * @param {string} [input]
 * @param {string} [separator = " "]
 * @returns {string}
 */
export default (input, separator = " ") => {
  const string = String(input)
  if (!string.length) {
    return ""
  }
  const lines = splitLines(string)
    .map(line => line.trim())
    .filter(line => line.length)
  return lines.join(separator)
}