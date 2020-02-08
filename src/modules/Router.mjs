export const View = ({ page, state }, children) => {
  page = page ? page(state) : '404 - not found'

  const magicProps = {
    id: 'Magic',
    class: state.pageClass,
  }

  const wrapperProps = {
    class: {
      Wrapper: true,
    },
  }

  return main(magicProps, div(wrapperProps, [Route({ state, page }), children]))
}

export const Link = ({ to, action = actions.go, ...p }, children) => {
  const { href, text, nofollow, noreferrer, ...props } = p
  to = to || href || ''
  props.href = to

  const isLocal = to[0] === '/' || to[0] === '#'

  if (isLocal) {
    props.onclick = [action, lib.preventDefault]
  } else {
    props.target = '_blank'
    props.rel = 'noopener'
    if (nofollow) {
      props.rel += ' nofollow'
    }
    if (noreferrer) {
      props.rel += ' noreferrer'
    }
  }

  return a(props, [text, children])
}

export const state = {
  pageClass: {},
}

export const actions = {
  pop: (state, e) => {
    let { pathname: url, hash } = window.location
    hash = hash.substring(1)

    let top = 0

    if (e.state) {
      url = e.state.url
      hash = e.state.hash
      top = e.state.scrollY || 0
    }

    if (hash) {
      window.location.hash = hash
    } else {
      window.scroll({ top, behavior: 'smooth' })
    }

    return {
      ...state,
      url,
      hash,
    }
  },

  go: (state, e) => {
    // make sure our to never includes the origin
    // this makes sure we can distinguish between local and external links below
    let to = e.currentTarget.href.replace(window.location.origin, '')

    const [url, hash = ''] = to.split('#')

    // do nothing if url would not change
    if (url === state.url && hash === state.hash) {
      window.location.hash = hash
      return state
    }

    const { scrollY } = window

    const title = state.titles[url]
    if (title) {
      document.title = state.title = title
    }

    window.history.pushState({ url, hash, scrollY }, state.title, to)

    if (url !== state.url) {
      if (!hash) {
        const [html] = document.getElementsByTagName('html')
        // firefox can not access this value via javascript (07.02.2020)
        // which means that it will be an empty string.
        // the hack below works by miracle, not logic.
        const scrollBehavior = html.style.scrollBehavior

        // this allows firefox to scroll to top in some edge-case scenarios
        // example: page with was scrolled manually.
        html.style.scrollBehavior = 'auto'

        window.scrollTo({ top: 0, behavior: 'smooth' })

        // set scrollBehavior back to default.
        html.style.scrollBehavior = scrollBehavior
      }
    } else {
      window.location.hash = hash
    }

    return {
      ...state,
      url,
      hash,
      prev: state.url,
    }
  },
}

export const helpers = {
  listenPopState: (dispatch, action) => {
    const listener = e => dispatch(action, e)

    addEventListener('popstate', listener)

    return () => removeEventListener('popstate', listener)
  },
}

export const subscriptions = [['helpers.listenPopState', 'actions.pop']]

export const global = {
  actions: {
    go: true,
    pop: true,
  },
  state: {
    pageClass: true,
  },
}
