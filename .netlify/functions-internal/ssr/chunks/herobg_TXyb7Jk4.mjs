const herobg = new Proxy({"src":"/_astro/herobg.50ZEB8ix.jpeg","width":9216,"height":4608,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lwright/Documents/gatsby_sites/24hr-2024/src/images/herobg.jpeg";
							}
							
							return target[name];
						}
					});

export { herobg as default };
