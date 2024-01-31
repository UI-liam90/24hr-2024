import { renderers } from './renderers.mjs';
import { manifest } from './manifest_RTeYDbpD.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_tfn8RiAj.mjs');
const _page1 = () => import('./chunks/_slug__hDXfvCdA.mjs');
const _page2 = () => import('./chunks/index_Q4AS4ldA.mjs');
const _page3 = () => import('./chunks/_slug___Rvz3rrY.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/adventures/[slug].astro", _page1],
    ["src/pages/index.astro", _page2],
    ["src/pages/[slug].astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = undefined;
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
serverEntrypointModule.start?.(_manifest, _args);

export { __astrojsSsrVirtualEntry as default, pageMap };
