import { html } from 'snabbdom-jsx' // eslint-disable-line
import h from 'snabbdom/h'

export default function Col ({
  className = '',
  style = {},
  type = ''
}, children = '') {
  const colClasses = type.split(' ').map((col) => `col-${col}`).join(' ')

  return (
    <div
      classNames={`${className} ${colClasses}`}
      style={style}>
      {h('span', children)}
    </div>
  )
}
