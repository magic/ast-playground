export const View = ({ page, state }) => {
  page = page ? page(state) : '404 - not found'

  const magicProps = {
    id: 'Magic',
  }

  const wrapperProps = {
    class: 'Wrapper',
  }

  if (state.pageClass) {
    magicProps.class = state.pageClass
  }

  if (state.theme) {
    if (!magicProps.class) {
      magicProps.class = state.theme
    } else if (!magicProps.class.includes(state.theme)) {
      magicProps.class += ` ${state.theme}`
    }
  }

  const props = {
    class: 'Page',
  }

  return div(magicProps, div(wrapperProps, Route({ state, page })))
}

export const Link = ({ to, ...p }, children) => {
  const { href, text, nofollow, noreferrer, onclick = false, ...props } = p
  to = to || href || ''
  props.href = to

  const isLocal = to.startsWith('/')

  if (isLocal) {
    props.onclick = [actions.go, helpers.mapClickToGo]
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
  pageClass: '',
}

export const actions = {
  page: {
    addClass: (state, cl) => {
      if (state.pageClass.includes(cl)) {
        return state
      }

      return {
        ...state,
        pageClass: `${state.pageClass} ${cl}`,
      }
    },

    removeClass: (state, cl) => {
      if (!state.pageClass.includes(cl)) {
        return state
      }

      cl = state.pageClass.replace(cl, '').replace(/\s\s+/g, ' ')

      return {
        ...state,
        pageClass: cl,
      }
    },

    toggleClass: (state, cl) => {
      if (state.pageClass.includes(cl)) {
        return actions.page.addClass(state, cl)
      } else {
        return actions.page.removeClass(state, cl)
      }
    },
    replaceClass: (state, [cl1, cl2]) => {
      if (state.pageClass.includes(cl1)) {
        state = actions.page.removeClass(state, cl1)
      }
      if (!state.pageClass.includes(cl2)) {
        state = actions.page.addClass(state, cl2)
      }
      return {
        ...state,
      }
    },
  },

  pop: (state, e) => {
    let { pathname: url, hash } = window.location
    hash = hash.substring(1)

    if (e.state) {
      url = e.state.url
      hash = e.state.hash
    }

    if (hash) {
      window.location.hash = hash
    } else {
      window.scrollTo(0, 0)
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
      return state
    }

    window.history.pushState({ url, hash }, '', to)

    if (hash) {
      // window.scrollTo without window.location.hash will not work
      // :target css pseudoclasses won't work without
      // resetting the hash here
      const t = document.getElementById(hash)
      if (t) {
        window.scrollTo(0, t.scrollTop)
      }
      window.location.hash = hash
    } else {
      // we want to scroll to the top if there is no hash
      window.scrollTo(0, 0)
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
  mapClickToGo: e => {
    e.preventDefault()
    return e
  },

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
