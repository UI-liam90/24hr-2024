import { jsx, jsxs } from 'react/jsx-runtime';
import { InView } from 'react-intersection-observer';
import { H as HTMLRender } from './prerender_13EWZoSt.mjs';

const LinkButton = ({ url, type, size, target, children }) => {
  return /* @__PURE__ */ jsx("a", { href: url, className: `button ${type ? `button--${type}` : ""} ${size ? `button--${size}` : ""}`, target, children });
};

const ImageHero = ({ blockData }) => {
  const file = blockData.image;
  return /* @__PURE__ */ jsx(InView, { threshold: "0.25", triggerOnce: "true", children: ({ inView, ref }) => /* @__PURE__ */ jsxs("div", { ref, className: `image-hero toZoomIn ${inView ? "zoomIn" : ""}`, children: [
    /* @__PURE__ */ jsx("img", { className: "hero-image", src: file.mediaItemUrl, alt: file.altText, height: file.mediaDetails.height, width: file.mediaDetails.width }),
    blockData.overlay || blockData.button ? /* @__PURE__ */ jsx(InView, { threshold: "0.25", triggerOnce: "true", children: ({ inView: inView2, ref: ref2 }) => /* @__PURE__ */ jsxs("div", { className: `hero-overlay toFadeIn ${inView2 ? "fadeIn" : ""}`, ref: ref2, children: [
      blockData.overlay && /* @__PURE__ */ jsx(HTMLRender, { data: blockData.overlay }),
      blockData.button && /* @__PURE__ */ jsx(LinkButton, { type: "primary", url: blockData.button.url, target: blockData.button.target, children: blockData.button.title })
    ] }) }) : null
  ] }) });
};

export { ImageHero as default };
