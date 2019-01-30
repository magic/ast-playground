const Link = ({ to, href, text, nofollow, noreferrer }, children) => (_, actions) => {
  to = to || href || ''
  const props = {
    href: to,
  }

  if (to && to.startsWith('/') && !to.startsWith(`//`)) {
    props.onclick = e => actions.go({ e, to })
  } else {
    props.rel = 'noopener'
    if (nofollow) {
      props.rel += ' nofollow'
    }
    if (noreferrer) {
      props.rel += ' noreferrer'
    }
    props.target = '_blank'
  }

  return a(props, text || children)
}

Link.actions = {
  go: ({ e, to }) => state => {
    e.preventDefault()
    let url = state.url

    if (to) {
      url = to.replace(window.location.origin, '')
      if (url !== state.url) {
        window.history && window.history.pushState({ urlPath: url }, '', url)
      }
    } else {
      if (e.state) {
        url = e.state.urlPath
      } else {
        url = '/'
      }
    }
    return {
      url,
      prev: state.url,
    }
  },
}

Link.global = {
  actions: {
    go: true,
  },
}

module.exports = Link
