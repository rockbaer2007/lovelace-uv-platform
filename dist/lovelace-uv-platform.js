//#region src/registry/Registry.ts
var e = class {
	items = /* @__PURE__ */ new Map();
	register(e) {
		this.items.set(e.id, e);
	}
	unregister(e) {
		return this.items.delete(e);
	}
	has(e) {
		return this.items.has(e);
	}
	get(e) {
		return this.items.get(e);
	}
	getAll() {
		return [...this.items.values()];
	}
	clear() {
		this.items.clear();
	}
	count() {
		return this.items.size;
	}
}, t = class {
	registry = new e();
	version = "0.1.0-alpha.1";
	start() {
		console.info(`🚀 Lovelace UV Platform ${this.version} started`);
	}
};
//#endregion
//#region src/bootstrap/bootstrap.ts
function n() {
	new t().start();
}
//#endregion
//#region src/main.ts
n();
//#endregion

//# sourceMappingURL=lovelace-uv-platform.js.map