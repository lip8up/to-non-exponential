/**
 * Convert the number to a non-exponential representation
 * @param num the number
 * Algorithm from: https://www.html.cn/archives/9318
 */
export default function toNonExponential(num: number) {
  const m = num.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/)
  return m == null
    ? String(num)
    : num.toFixed(Math.max(0, (m[1] || '').length - +m[2]))
}
