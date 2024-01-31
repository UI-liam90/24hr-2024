import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_dV0Eudo6.mjs';
import 'cssesc';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/lwright/Documents/gatsby_sites/24hr-2024/src/pages/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/lwright/Documents/gatsby_sites/24hr-2024/src/pages/adventures/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/lwright/Documents/gatsby_sites/24hr-2024/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-manifest":"manifest_RTeYDbpD.mjs","C:/Users/lwright/Documents/gatsby_sites/24hr-2024/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3wEZly-Z.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_tfn8RiAj.mjs","\u0000@astro-page:src/pages/adventures/[slug]@_@astro":"chunks/_slug__hDXfvCdA.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_Q4AS4ldA.mjs","\u0000@astro-page:src/pages/[slug]@_@astro":"chunks/_slug___Rvz3rrY.mjs","C:/Users/lwright/Documents/gatsby_sites/24hr-2024/src/components/FlexibleContent/HeroBlock/ImageHero/index.jsx":"_astro/index.mwnkyRVm.js","C:/Users/lwright/Documents/gatsby_sites/24hr-2024/src/images/banner.png":"chunks/banner_SiHvvKYk.mjs","C:/Users/lwright/Documents/gatsby_sites/24hr-2024/src/images/fb_banner_1.png":"chunks/fb_banner_1_4h9rkoX3.mjs","C:/Users/lwright/Documents/gatsby_sites/24hr-2024/src/images/herobg.jpeg":"chunks/herobg_TXyb7Jk4.mjs","C:/Users/lwright/Documents/gatsby_sites/24hr-2024/src/images/zoes-place.png":"chunks/zoes-place_lwLtJyYq.mjs","@components/Bids":"_astro/Bids.YFmlgdS3.js","C:/Users/lwright/Documents/gatsby_sites/24hr-2024/src/components/FlexibleContent/HeroBlock":"_astro/HeroBlock.U3rP35Y7.js","@astrojs/react/client.js":"_astro/client.mBN5ZAaw.js","@components/GravForm/GravForm":"_astro/GravForm.4YHHmUP6.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/zoes-place-white.ZnrIq1Ib.png","/_astro/map.ayvxX6EH.png","/_astro/roboto-slab-cyrillic-wght-normal.X7RIYZj3.woff2","/_astro/roboto-slab-latin-wght-normal.ZTunnB8J.woff2","/_astro/roboto-slab-greek-wght-normal.uXxd-2Zu.woff2","/_astro/roboto-slab-cyrillic-ext-wght-normal.1l5OvLqt.woff2","/_astro/roboto-slab-vietnamese-wght-normal.onBrATG5.woff2","/_astro/roboto-slab-latin-ext-wght-normal.eQkqjI8g.woff2","/_astro/roboto-cyrillic-400-normal.1Q02bZlk.woff2","/_astro/roboto-vietnamese-400-normal.JAkXt1WZ.woff2","/_astro/roboto-greek-400-normal.UVhwlGKP.woff2","/_astro/roboto-latin-400-normal.JkyEVz-m.woff2","/_astro/roboto-latin-ext-400-normal.OGy6Zcg4.woff2","/_astro/roboto-cyrillic-ext-400-normal.zkSvWxgI.woff2","/_astro/roboto-cyrillic-700-normal.eWQSlgh7.woff2","/_astro/roboto-cyrillic-ext-700-normal.rKwhCSHC.woff2","/_astro/roboto-greek-700-normal.nNk6vBVU.woff2","/_astro/roboto-latin-700-normal.njOYDr_M.woff2","/_astro/roboto-vietnamese-700-normal.EnpEoUH0.woff2","/_astro/roboto-latin-ext-700-normal.WBgqNxqO.woff2","/_astro/roboto-cyrillic-ext-400-italic.l0OQy_M0.woff2","/_astro/roboto-greek-400-italic.9RdnkATo.woff2","/_astro/roboto-cyrillic-400-italic.odpbuwex.woff2","/_astro/roboto-latin-ext-400-italic.zZiezZ9p.woff2","/_astro/roboto-latin-400-italic.LYO0uVHe.woff2","/_astro/roboto-vietnamese-400-italic.fRqBZj7p.woff2","/_astro/roboto-cyrillic-ext-700-italic.3izCHKgO.woff2","/_astro/roboto-greek-700-italic.WrOxnO8f.woff2","/_astro/roboto-cyrillic-700-italic.jD9f6BNf.woff2","/_astro/zoes-place.bclkN35a.png","/_astro/roboto-vietnamese-700-italic.oe_qMv9S.woff2","/_astro/roboto-latin-ext-700-italic.Uz414hX8.woff2","/_astro/roboto-latin-700-italic.1KO9hKvu.woff2","/_astro/fb_banner_1._r9zqShR.png","/_astro/banner.-Na5i24V.png","/_astro/roboto-cyrillic-400-normal.wkKjpXzZ.woff","/_astro/roboto-vietnamese-400-normal.ZBATgFfY.woff","/_astro/roboto-latin-400-normal.VNUqCuId.woff","/_astro/roboto-cyrillic-700-normal.wCMcOcVz.woff","/_astro/roboto-cyrillic-ext-400-normal.PiqLoFV_.woff","/_astro/roboto-latin-ext-400-normal.5aATcKHE.woff","/_astro/roboto-cyrillic-ext-700-normal.HQzrQ3OY.woff","/_astro/roboto-greek-700-normal.o7k6RnxP.woff","/_astro/roboto-vietnamese-700-normal.DHNHOqon.woff","/_astro/roboto-greek-400-normal.ZxjWinlq.woff","/_astro/roboto-latin-700-normal.YeN9SxC4.woff","/_astro/roboto-greek-400-italic.4UJUUoCQ.woff","/_astro/roboto-cyrillic-ext-400-italic._4YBYGt9.woff","/_astro/roboto-latin-ext-700-normal.8FF03k7w.woff","/_astro/roboto-cyrillic-400-italic.gIKnJTA8.woff","/_astro/roboto-latin-ext-400-italic.SULnmeMr.woff","/_astro/roboto-latin-400-italic.xXoXoiQw.woff","/_astro/roboto-vietnamese-400-italic.kb231B52.woff","/_astro/roboto-greek-700-italic.nFWD-MDR.woff","/_astro/roboto-cyrillic-ext-700-italic.i_rUJbs4.woff","/_astro/roboto-cyrillic-700-italic.fM33dveR.woff","/_astro/roboto-latin-ext-700-italic.gR622sGQ.woff","/_astro/roboto-vietnamese-700-italic.6vyYNnKE.woff","/_astro/roboto-latin-700-italic.IM5qOktQ.woff","/_astro/herobg.50ZEB8ix.jpeg","/_astro/_slug_.PJ-WD1g5.css","/favicon.svg","/img/24-hr-party.jpg","/img/625e5fcef7ab80b8c1fe559e_Discord-Logo-Color.png","/img/DEM_LOGO_FNL-140.jpg","/img/dungeonland.jpg","/img/earthdawn-cropped.jpg","/img/earthdawn.jpg","/img/eberon.png","/img/Eh5LtbRVkAAXzls.jpg","/img/ethans-wacky-adventure-2022.jpg","/img/ethans-wacky-adventure.jpg","/img/everyoneisjohnTitle copy.png","/img/everyoneisjohnTitle.webp","/img/facebook.png","/img/FASA-Logo.png","/img/Icewind_Dale_8_cropped.jpg","/img/IMG_1158.jpg","/img/IMG_1158_crop.jpg","/img/IMG_1202.jpg","/img/index.svg","/img/lootquest.jpg","/img/lootquest.psd","/img/magic-of-thaera.png","/img/main-img-old.jpg","/img/main-img.jpg","/img/main-img@x2.jpg","/img/michael.png","/img/pcKAAa9n_400x400.png","/img/pcKAAa9n_400x400@2x.png","/img/polyscatter1.svg","/img/polyscatter2.svg","/img/polyscatter3.svg","/img/polyscatter4.svg","/img/polyscatter5.svg","/img/polyscatter6.svg","/img/Shelter-Logo-small.png","/img/shirts.png","/img/social-image.jpg","/img/spelljammers.jpg","/img/spycraft.jpg","/img/veiled.png","/img/WarriorsOfWaterdeep_DnD_Articles_Header-Image.jpg","/img/Weird-West-Tabletop-RPGs.avif","/img/Weird-West-Tabletop-RPGs.jpg","/img/Weird-West-Tabletop.jpg","/img/yawning-portal.jpg","/_astro/Bids.YFmlgdS3.js","/_astro/client.mBN5ZAaw.js","/_astro/GravForm.4YHHmUP6.js","/_astro/HeroBlock.U3rP35Y7.js","/_astro/index.068npczX.js","/_astro/index.FvBAb_h7.js","/_astro/index.mwnkyRVm.js","/_astro/jsx-runtime.KYujgZxC.js","/_astro/_slug_.mGh_uU5r.css","/img/600w/Artboard 1.png","/img/icons/android-icon-144x144.png","/img/icons/android-icon-192x192.png","/img/icons/android-icon-36x36.png","/img/icons/android-icon-48x48.png","/img/icons/android-icon-72x72.png","/img/icons/android-icon-96x96.png","/img/icons/apple-icon-114x114.png","/img/icons/apple-icon-120x120.png","/img/icons/apple-icon-144x144.png","/img/icons/apple-icon-152x152.png","/img/icons/apple-icon-180x180.png","/img/icons/apple-icon-57x57.png","/img/icons/apple-icon-60x60.png","/img/icons/apple-icon-72x72.png","/img/icons/apple-icon-76x76.png","/img/icons/apple-icon-precomposed.png","/img/icons/apple-icon.png","/img/icons/browserconfig.xml","/img/icons/favicon-16x16.png","/img/icons/favicon-32x32.png","/img/icons/favicon-96x96.png","/img/icons/favicon.ico","/img/icons/ms-icon-144x144.png","/img/icons/ms-icon-150x150.png","/img/icons/ms-icon-310x310.png","/img/icons/ms-icon-70x70.png","/index.html"],"buildFormat":"directory"});

export { manifest };
