//#region src/registry/Registry.ts
var e = class {
	items = /* @__PURE__ */ new Map();
	register(e) {
		if (this.items.has(e.id)) throw Error(`Registry item '${e.id}' is already registered.`);
		this.items.set(e.id, e);
	}
	unregister(e) {
		return this.items.delete(e);
	}
	get(e) {
		return this.items.get(e);
	}
	has(e) {
		return this.items.has(e);
	}
	getAll() {
		return [...this.items.values()];
	}
	clear() {
		this.items.clear();
	}
	get size() {
		return this.items.size;
	}
}, t = class {
	_registry = new e();
	get registry() {
		return this._registry;
	}
}, n = class {
	_services = new t();
	get services() {
		return this._services;
	}
	start() {}
};
//#endregion
//#region src/bootstrap/bootstrap.ts
function r() {
	new n().start();
}
//#endregion
//#region src/main.ts
r();
//#endregion

//# sourceMappingURL=lovelace-uv-platform.js.map