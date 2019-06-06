export const View = props => {
  CHECK_PROPS(props, propTypes, 'MenuItem')
  const { text, items = [], state, parentTo = undefined, collapse, ...item } = props
  const { url, root } = state
  // if the item has no values, we quit
  if (!item.to && !text) {
    return
  }

  const p = {
    class: {},
  }

  let to = item.to

  if (to.startsWith('/#')) {
    to = to.substr(1)
  }

  const first = item.to[0]
  const isLocal = first === '/' || first === '-' || first === '#'

  if (parentTo && isLocal) {
    if (first === '-') {
      to = parentTo + to
    } else if (first === '#') {
      to = parentTo + to
    } else {
      const start = to.split('/')[1]
      if (start) {
        const startsLikeParentEnds = parentTo.endsWith(`/${start}/`)

        if (!startsLikeParentEnds && isLocal) {
          console.log({ parentTo, to, startsLikeParentEnds, start })
          to = parentTo + to
        }
      }
    }
  }

  const isRooted = to.startsWith(root)
  if (root && isLocal && !isRooted) {
    to = root + to
  }

  item.to = to.replace(/\/\//g, '/')

  const active = url && url.includes(item.to)
  if (url.endsWith(item.to)) {
    p.class.active = true
  }

  let children = []
  if ((items.length && active) || !collapse) {
    children = ul(items.map(i => MenuItem({ parentTo: item.to, state, collapse, ...i })))
  }

  return li(p, [item.to ? Link(item, text) : span(item, text), children])
}

export const propTypes = {
  MenuItem: [
    { key: 'url', type: 'string' },
    { key: 'text', type: ['string', 'array'] },
    { key: 'items', type: 'array' },
    { key: 'parentTo', type: 'string' },
    { key: 'collapse', type: 'boolean' },
    { key: 'to', type: 'string' },
  ],
}
