//#region src/core/PlatformCore.ts
var e = class e {
	static instance;
	constructor() {}
	static getInstance() {
		return e.instance ||= new e(), e.instance;
	}
	start() {
		console.info("🚀 Lovelace UV Platform started");
	}
};
//#endregion
//#region src/bootstrap/bootstrap.ts
function t() {
	e.getInstance().start();
}
//#endregion
//#region src/main.ts
t();
//#endregion

//# sourceMappingURL=lovelace-uv-platform.js.map