//#region src/events/EventBus.ts
var e = class {
	_listeners = /* @__PURE__ */ new Map();
	subscribe(e, t) {
		let n = this._listeners.get(e);
		n || (n = /* @__PURE__ */ new Set(), this._listeners.set(e, n)), n.add(t);
	}
	unsubscribe(e, t) {
		this._listeners.get(e)?.delete(t);
	}
	publish(e) {
		let t = this._listeners.get(e.constructor);
		if (t) for (let n of t) n(e);
	}
}, t = class {
	_keySelector;
	_items = /* @__PURE__ */ new Map();
	constructor(e) {
		this._keySelector = e;
	}
	register(e) {
		let t = this._keySelector(e);
		if (this._items.has(t)) throw Error(`Registry item '${t}' is already registered.`);
		this._items.set(t, e);
	}
	unregister(e) {
		return this._items.delete(e);
	}
	get(e) {
		return this._items.get(e);
	}
	getAll() {
		return [...this._items.values()];
	}
	has(e) {
		return this._items.has(e);
	}
	clear() {
		this._items.clear();
	}
}, n = class {
	_registry = new t((e) => e.id);
	_eventBus = new e();
	get registry() {
		return this._registry;
	}
	get eventBus() {
		return this._eventBus;
	}
}, r = class {
	_services = new n();
	get services() {
		return this._services;
	}
	start() {}
};
//#endregion
//#region src/bootstrap/bootstrap.ts
function i() {
	new r().start();
}
//#endregion
//#region src/main.ts
i();
//#endregion

//# sourceMappingURL=lovelace-uv-platform.js.map