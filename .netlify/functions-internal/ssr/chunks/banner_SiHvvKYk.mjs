const banner = new Proxy({"src":"/_astro/banner.-Na5i24V.png","width":1920,"height":1005,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lwright/Documents/gatsby_sites/24hr-2024/src/images/banner.png";
							}
							
							return target[name];
						}
					});

export { banner as default };
