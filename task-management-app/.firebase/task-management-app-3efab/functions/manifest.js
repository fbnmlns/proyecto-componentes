export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.e9690aaa.js","app":"_app/immutable/entry/app.dfad4a58.js","imports":["_app/immutable/entry/start.e9690aaa.js","_app/immutable/chunks/scheduler.cc9b4bb6.js","_app/immutable/chunks/singletons.b6d39ab2.js","_app/immutable/entry/app.dfad4a58.js","_app/immutable/chunks/scheduler.cc9b4bb6.js","_app/immutable/chunks/index.2442d2de.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
