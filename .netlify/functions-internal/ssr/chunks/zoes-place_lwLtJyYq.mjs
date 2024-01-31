const zoesPlace = new Proxy({"src":"/_astro/zoes-place.bclkN35a.png","width":1355,"height":871,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lwright/Documents/gatsby_sites/24hr-2024/src/images/zoes-place.png";
							}
							
							return target[name];
						}
					});

export { zoesPlace as default };
