import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _69e127c8 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _76e6bd0a = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _55a0e4db = () => interopDefault(import('../pages/cart/index.vue' /* webpackChunkName: "pages/cart/index" */))
const _4375608e = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _150c47ba = () => interopDefault(import('../pages/admin/auth/index.vue' /* webpackChunkName: "pages/admin/auth/index" */))
const _3ac5be30 = () => interopDefault(import('../pages/admin/new-post/index.vue' /* webpackChunkName: "pages/admin/new-post/index" */))
const _6d1e9415 = () => interopDefault(import('../pages/admin/_postid/index.vue' /* webpackChunkName: "pages/admin/_postid/index" */))
const _486f8479 = () => interopDefault(import('../pages/posts/_id/index.vue' /* webpackChunkName: "pages/posts/_id/index" */))
const _75c7d86c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _69e127c8,
    name: "about"
  }, {
    path: "/admin",
    component: _76e6bd0a,
    name: "admin"
  }, {
    path: "/cart",
    component: _55a0e4db,
    name: "cart"
  }, {
    path: "/posts",
    component: _4375608e,
    name: "posts"
  }, {
    path: "/admin/auth",
    component: _150c47ba,
    name: "admin-auth"
  }, {
    path: "/admin/new-post",
    component: _3ac5be30,
    name: "admin-new-post"
  }, {
    path: "/admin/:postid",
    component: _6d1e9415,
    name: "admin-postid"
  }, {
    path: "/posts/:id",
    component: _486f8479,
    name: "posts-id"
  }, {
    path: "/",
    component: _75c7d86c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
