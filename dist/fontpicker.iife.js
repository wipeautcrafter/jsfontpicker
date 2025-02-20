var FontPicker = function() {
  "use strict";var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

  var _cache, _FontLoader_static, appendStylesheet_fn, loadGoogleFont_fn;
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var events = { exports: {} };
  var R = typeof Reflect === "object" ? Reflect : null;
  var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  };
  var ReflectOwnKeys;
  if (R && typeof R.ownKeys === "function") {
    ReflectOwnKeys = R.ownKeys;
  } else if (Object.getOwnPropertySymbols) {
    ReflectOwnKeys = function ReflectOwnKeys2(target) {
      return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
    };
  } else {
    ReflectOwnKeys = function ReflectOwnKeys2(target) {
      return Object.getOwnPropertyNames(target);
    };
  }
  function ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
  }
  var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
    return value !== value;
  };
  function EventEmitter() {
    EventEmitter.init.call(this);
  }
  events.exports = EventEmitter;
  events.exports.once = once;
  EventEmitter.EventEmitter = EventEmitter;
  EventEmitter.prototype._events = void 0;
  EventEmitter.prototype._eventsCount = 0;
  EventEmitter.prototype._maxListeners = void 0;
  var defaultMaxListeners = 10;
  function checkListener(listener) {
    if (typeof listener !== "function") {
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
    }
  }
  Object.defineProperty(EventEmitter, "defaultMaxListeners", {
    enumerable: true,
    get: function() {
      return defaultMaxListeners;
    },
    set: function(arg) {
      if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
      }
      defaultMaxListeners = arg;
    }
  });
  EventEmitter.init = function() {
    if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
      this._events = /* @__PURE__ */ Object.create(null);
      this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || void 0;
  };
  EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
    }
    this._maxListeners = n;
    return this;
  };
  function _getMaxListeners(that) {
    if (that._maxListeners === void 0)
      return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
  }
  EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
  };
  EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
    var doError = type === "error";
    var events2 = this._events;
    if (events2 !== void 0)
      doError = doError && events2.error === void 0;
    else if (!doError)
      return false;
    if (doError) {
      var er;
      if (args.length > 0)
        er = args[0];
      if (er instanceof Error) {
        throw er;
      }
      var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
      err.context = er;
      throw err;
    }
    var handler = events2[type];
    if (handler === void 0)
      return false;
    if (typeof handler === "function") {
      ReflectApply(handler, this, args);
    } else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        ReflectApply(listeners[i], this, args);
    }
    return true;
  };
  function _addListener(target, type, listener, prepend) {
    var m;
    var events2;
    var existing;
    checkListener(listener);
    events2 = target._events;
    if (events2 === void 0) {
      events2 = target._events = /* @__PURE__ */ Object.create(null);
      target._eventsCount = 0;
    } else {
      if (events2.newListener !== void 0) {
        target.emit(
          "newListener",
          type,
          listener.listener ? listener.listener : listener
        );
        events2 = target._events;
      }
      existing = events2[type];
    }
    if (existing === void 0) {
      existing = events2[type] = listener;
      ++target._eventsCount;
    } else {
      if (typeof existing === "function") {
        existing = events2[type] = prepend ? [listener, existing] : [existing, listener];
      } else if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
      m = _getMaxListeners(target);
      if (m > 0 && existing.length > m && !existing.warned) {
        existing.warned = true;
        var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        w.name = "MaxListenersExceededWarning";
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        ProcessEmitWarning(w);
      }
    }
    return target;
  }
  EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
  };
  EventEmitter.prototype.on = EventEmitter.prototype.addListener;
  EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return _addListener(this, type, listener, true);
  };
  function onceWrapper() {
    if (!this.fired) {
      this.target.removeListener(this.type, this.wrapFn);
      this.fired = true;
      if (arguments.length === 0)
        return this.listener.call(this.target);
      return this.listener.apply(this.target, arguments);
    }
  }
  function _onceWrap(target, type, listener) {
    var state = { fired: false, wrapFn: void 0, target, type, listener };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
  }
  EventEmitter.prototype.once = function once2(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
  };
  EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener);
    this.prependListener(type, _onceWrap(this, type, listener));
    return this;
  };
  EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events2, position, i, originalListener;
    checkListener(listener);
    events2 = this._events;
    if (events2 === void 0)
      return this;
    list = events2[type];
    if (list === void 0)
      return this;
    if (list === listener || list.listener === listener) {
      if (--this._eventsCount === 0)
        this._events = /* @__PURE__ */ Object.create(null);
      else {
        delete events2[type];
        if (events2.removeListener)
          this.emit("removeListener", type, list.listener || listener);
      }
    } else if (typeof list !== "function") {
      position = -1;
      for (i = list.length - 1; i >= 0; i--) {
        if (list[i] === listener || list[i].listener === listener) {
          originalListener = list[i].listener;
          position = i;
          break;
        }
      }
      if (position < 0)
        return this;
      if (position === 0)
        list.shift();
      else {
        spliceOne(list, position);
      }
      if (list.length === 1)
        events2[type] = list[0];
      if (events2.removeListener !== void 0)
        this.emit("removeListener", type, originalListener || listener);
    }
    return this;
  };
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events2, i;
    events2 = this._events;
    if (events2 === void 0)
      return this;
    if (events2.removeListener === void 0) {
      if (arguments.length === 0) {
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
      } else if (events2[type] !== void 0) {
        if (--this._eventsCount === 0)
          this._events = /* @__PURE__ */ Object.create(null);
        else
          delete events2[type];
      }
      return this;
    }
    if (arguments.length === 0) {
      var keys = Object.keys(events2);
      var key;
      for (i = 0; i < keys.length; ++i) {
        key = keys[i];
        if (key === "removeListener") continue;
        this.removeAllListeners(key);
      }
      this.removeAllListeners("removeListener");
      this._events = /* @__PURE__ */ Object.create(null);
      this._eventsCount = 0;
      return this;
    }
    listeners = events2[type];
    if (typeof listeners === "function") {
      this.removeListener(type, listeners);
    } else if (listeners !== void 0) {
      for (i = listeners.length - 1; i >= 0; i--) {
        this.removeListener(type, listeners[i]);
      }
    }
    return this;
  };
  function _listeners(target, type, unwrap) {
    var events2 = target._events;
    if (events2 === void 0)
      return [];
    var evlistener = events2[type];
    if (evlistener === void 0)
      return [];
    if (typeof evlistener === "function")
      return unwrap ? [evlistener.listener || evlistener] : [evlistener];
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
  }
  EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
  };
  EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
  };
  EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === "function") {
      return emitter.listenerCount(type);
    } else {
      return listenerCount.call(emitter, type);
    }
  };
  EventEmitter.prototype.listenerCount = listenerCount;
  function listenerCount(type) {
    var events2 = this._events;
    if (events2 !== void 0) {
      var evlistener = events2[type];
      if (typeof evlistener === "function") {
        return 1;
      } else if (evlistener !== void 0) {
        return evlistener.length;
      }
    }
    return 0;
  }
  EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
  };
  function arrayClone(arr, n) {
    var copy = new Array(n);
    for (var i = 0; i < n; ++i)
      copy[i] = arr[i];
    return copy;
  }
  function spliceOne(list, index) {
    for (; index + 1 < list.length; index++)
      list[index] = list[index + 1];
    list.pop();
  }
  function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for (var i = 0; i < ret.length; ++i) {
      ret[i] = arr[i].listener || arr[i];
    }
    return ret;
  }
  function once(emitter, name) {
    return new Promise(function(resolve, reject) {
      function errorListener(err) {
        emitter.removeListener(name, resolver);
        reject(err);
      }
      function resolver() {
        if (typeof emitter.removeListener === "function") {
          emitter.removeListener("error", errorListener);
        }
        resolve([].slice.call(arguments));
      }
      eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
      if (name !== "error") {
        addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
      }
    });
  }
  function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === "function") {
      eventTargetAgnosticAddListener(emitter, "error", handler, flags);
    }
  }
  function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === "function") {
      if (flags.once) {
        emitter.once(name, listener);
      } else {
        emitter.on(name, listener);
      }
    } else if (typeof emitter.addEventListener === "function") {
      emitter.addEventListener(name, function wrapListener(arg) {
        if (flags.once) {
          emitter.removeEventListener(name, wrapListener);
        }
        listener(arg);
      });
    } else {
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
    }
  }
  var eventsExports = events.exports;
  const EventEmitter$1 = /* @__PURE__ */ getDefaultExportFromCjs(eventsExports);
  const dialogContent = '<div id="fp__modal" class="__fp modal fade" tabindex="-1"><div class="modal-dialog modal-dialog-scrollable"><div class="modal-content"><div class="modal-header"><h5 id="fp__title" class="modal-title fw-bold"></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div id="fp__accord" class="accordion accordion-flush border-bottom"><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button py-2 fp__has-icon" type="button" data-bs-toggle="collapse" data-bs-target="#fp__accord-0"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="text-primary"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="currentColor" fill-opacity="0" stroke-dasharray="40" stroke-dashoffset="40" d="M10.76 13.24c-2.34 -2.34 -2.34 -6.14 0 -8.49c2.34 -2.34 6.14 -2.34 8.49 0c2.34 2.34 2.34 6.14 0 8.49c-2.34 2.34 -6.14 2.34 -8.49 0Z"><animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.3s" values="0;0.3"/><animate fill="freeze" attributeName="stroke-dashoffset" dur="1s" values="40;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M10.5 13.5l-7.5 7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.4s" values="12;0"/></path></g></svg><span id="fp__t-filters"></span></button></h2><div id="fp__accord-0" class="accordion-collapse collapse show" data-bs-parent="#fp__accord"><div class="accordion-body py-2"><div class="row"><div class="col-sm-6 pb-2"><input id="fp__search" class="form-control" /></div><div class="col-sm-6 pb-2"><select id="fp__subsets" class="form-select"></select></div><div class="col-sm-12"><div id="fp__categories" class="d-flex overflow-x-auto gap-2"></div></div></div></div></div></div><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed py-2 fp__has-icon" type="button" data-bs-toggle="collapse" data-bs-target="#fp__accord-1"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="text-primary"><path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h14l-5 6.5v9.5l-4 -4v-5.5Z"><animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.3s" values="0;0.3"/><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="56;0"/></path></svg><span id="fp__t-metrics"></span></button></h2><div id="fp__accord-1" class="accordion-collapse collapse" data-bs-parent="#fp__accord"><div class="accordion-body pt-2 pb-0"><div class="row"><div class="col-sm-6 pb-2"><select id="fp__width" class="form-select"></select></div><div class="col-sm-6 pb-2"><select id="fp__thickness" class="form-select"></select></div><div class="col-sm-6 pb-2"><select id="fp__complexity" class="form-select"></select></div><div class="col-sm-6 pb-2"><select id="fp__curvature" class="form-select"></select></div></div></div></div></div><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed py-2 fp__has-icon" type="button" data-bs-toggle="collapse" data-bs-target="#fp__accord-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="text-primary"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="12" stroke-dashoffset="12" d="M17 21l0 -10.5M7 3l0 10.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="12;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M17 10l-4 4M17 10l4 4M7 14l-4 -4M7 14l4 -4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.4s" values="8;0"/></path></g></svg><span id="fp__t-sort"></span></button></h2><div id="fp__accord-2" class="accordion-collapse collapse" data-bs-parent="#fp__accord"><div class="accordion-body py-2"><div class="input-group"><select id="fp__sort" class="form-select"></select><button id="fp__sort-order" type="button" class="btn btn-primary" data-bs-toggle="button"><div>&#8645;</div></button></div></div></div></div></div><div id="fp__fonts" class="modal-body border-bottom p-1" tabindex="-1"></div><div class="py-1 px-3"><div id="fp__preview" class="text-center fs-5" contenteditable spellcheck="false"></div></div><div id="fp__variants" class="py-2 px-3 d-flex flex-wrap gap-2 justify-content-center border-top"></div><div class="modal-footer"><div class="d-flex flex-grow-1"><button id="fp__clear" type="button" class="btn btn-link link-warning text-decoration-none rounded-pill fp__has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="currentColor" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M3 4h14l-5 6.5v9.5l-4 -4v-5.5Z"><animate fill="freeze" attributeName="fill-opacity" begin="2s" dur="0.3s" values="0;0.3"/><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="56;0"/></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M16 15l6 6"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="10;0"/></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M16 21l6 -6"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.4s" values="10;0"/></path></g></svg><span id="fp__t-clear"></span></button></div><button id="fp__cancel" type="button" class="btn btn-link text-decoration-none rounded-pill fp__has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="64" stroke-dashoffset="64" d="M5.64 5.64c3.51 -3.51 9.21 -3.51 12.73 0c3.51 3.51 3.51 9.21 0 12.73c-3.51 3.51 -9.21 3.51 -12.73 0c-3.51 -3.51 -3.51 -9.21 -0 -12.73Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="64;0"/></path><path stroke-dasharray="20" stroke-dashoffset="20" d="M6 6l12 12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="20;0"/></path></g></svg><span id="fp__t-cancel"></span></button><button id="fp__pick" type="button" class="btn btn-primary rounded-pill fp__has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><mask id="lineMdCheckAll0"><g fill="none" stroke="#fff" stroke-dasharray="24" stroke-dashoffset="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M2 13.5l4 4l10.75 -10.75"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.8s" values="24;0"/></path><path stroke="#000" stroke-width="6" d="M7.5 13.5l4 4l10.75 -10.75"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.8s" values="24;0"/></path><path d="M7.5 13.5l4 4l10.75 -10.75"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.8s" values="24;0"/></path></g></mask><rect width="24" height="24" fill="currentColor" mask="url(#lineMdCheckAll0)"/></svg><span id="fp__t-pick"></span></button></div></div></div></div>';
  const heartSVG = `<svg xmlns="http://www.w3.org/2000/svg" stroke-width="2" viewBox="0 0 18 18"><path d="M9 2.314 C13.438-2.248 24.534 5.735 9 16-6.534 5.736 4.562-2.248 9 2.314z" /></svg>`;
  const createHeart = () => {
    const $heart = document.createElement("div");
    $heart.className = "fp__heart";
    $heart.role = "button";
    $heart.innerHTML = heartSVG;
    return $heart;
  };
  const createFont = (font) => {
    const $item = document.createElement("div");
    $item.className = "px-3 py-1 fp__font-item rounded-pill user-select-none";
    $item.role = "button";
    $item.dataset.family = font.name;
    const $family = document.createElement("span");
    $family.className = "fs-6 pe-none";
    $family.textContent = font.name;
    $family.style.fontFamily = `"${font.name}"`;
    $item.append($family, createHeart());
    return $item;
  };
  const createVariants = (variants) => {
    const weights = Array.from(new Set(variants.map((v) => parseInt(v))));
    const $badge = document.createElement("button");
    $badge.className = "btn btn-outline-warning fp__btn-badge";
    $badge.dataset.bsToggle = "button";
    $badge.textContent = "Italic";
    $badge.id = "fp__italic";
    return [
      ...weights.flatMap((weight) => {
        const id = `fp__weight-${weight}`;
        const $radio = document.createElement("input");
        $radio.type = "radio";
        $radio.className = "btn-check fp__weight";
        $radio.value = weight.toString();
        $radio.id = id;
        $radio.name = "fp__weight";
        const $label = document.createElement("label");
        $label.className = "btn btn-outline-primary fp__btn-badge";
        $label.htmlFor = id;
        $label.textContent = weight.toString();
        return [$radio, $label];
      }),
      $badge
    ];
  };
  const createOption = (key, label) => {
    const $option = document.createElement("option");
    $option.value = key;
    $option.textContent = label;
    return $option;
  };
  const createOptions = (options) => {
    return Object.entries(options).map(([key, label]) => createOption(key, label));
  };
  const createBadge = (key, label) => {
    const $badge = document.createElement("button");
    $badge.className = "btn btn-outline-primary fp__btn-badge";
    $badge.dataset.value = key;
    $badge.dataset.bsToggle = "button";
    $badge.textContent = label;
    return $badge;
  };
  const createBadges = (badges) => {
    return Object.entries(badges).map(([key, label]) => createBadge(key, label));
  };
  const setActiveBadges = ($parent, values) => {
    for (const $category of $parent.children) {
      const value = $category.dataset.value;
      $category.classList.toggle("active", values.includes(value));
    }
  };
  const getActiveBadges = ($parent) => {
    return Array.from($parent.querySelectorAll(".active")).map(
      (item) => item.dataset.value
    );
  };
  var top = "top";
  var bottom = "bottom";
  var right = "right";
  var left = "left";
  var auto = "auto";
  var basePlacements = [top, bottom, right, left];
  var start = "start";
  var end = "end";
  var clippingParents = "clippingParents";
  var viewport = "viewport";
  var popper = "popper";
  var reference = "reference";
  var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []);
  var beforeRead = "beforeRead";
  var read = "read";
  var afterRead = "afterRead";
  var beforeMain = "beforeMain";
  var main = "main";
  var afterMain = "afterMain";
  var beforeWrite = "beforeWrite";
  var write = "write";
  var afterWrite = "afterWrite";
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
  function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
  }
  function getWindow(node) {
    if (node == null) {
      return window;
    }
    if (node.toString() !== "[object Window]") {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
  }
  function isElement$1(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  function isShadowRoot(node) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }
  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name];
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(name2) {
        var value = attributes[name2];
        if (value === false) {
          element.removeAttribute(name2);
        } else {
          element.setAttribute(name2, value === true ? "" : value);
        }
      });
    });
  }
  function effect$2(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
    return function() {
      Object.keys(state.elements).forEach(function(name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
        var style = styleProperties.reduce(function(style2, property) {
          style2[property] = "";
          return style2;
        }, {});
        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  }
  const applyStyles$1 = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect: effect$2,
    requires: ["computeStyles"]
  };
  function getBasePlacement(placement) {
    return placement.split("-")[0];
  }
  var max = Math.max;
  var min = Math.min;
  var round = Math.round;
  function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
      return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
      }).join(" ");
    }
    return navigator.userAgent;
  }
  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && isHTMLElement(element)) {
      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = isElement$1(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
      width,
      height,
      top: y,
      right: x + width,
      bottom: y + height,
      left: x,
      x,
      y
    };
  }
  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element);
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }
    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width,
      height
    };
  }
  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode();
    if (parent.contains(child)) {
      return true;
    } else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;
      do {
        if (next && parent.isSameNode(next)) {
          return true;
        }
        next = next.parentNode || next.host;
      } while (next);
    }
    return false;
  }
  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function isTableElement(element) {
    return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
  }
  function getDocumentElement(element) {
    return ((isElement$1(element) ? element.ownerDocument : (
      // $FlowFixMe[prop-missing]
      element.document
    )) || window.document).documentElement;
  }
  function getParentNode(element) {
    if (getNodeName(element) === "html") {
      return element;
    }
    return (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || // DOM Element detected
      (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element)
    );
  }
  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle$1(element).position === "fixed") {
      return null;
    }
    return element.offsetParent;
  }
  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());
    if (isIE && isHTMLElement(element)) {
      var elementCss = getComputedStyle$1(element);
      if (elementCss.position === "fixed") {
        return null;
      }
    }
    var currentNode = getParentNode(element);
    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }
    while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle$1(currentNode);
      if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }
    return null;
  }
  function getOffsetParent(element) {
    var window2 = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static")) {
      return window2;
    }
    return offsetParent || getContainingBlock(element) || window2;
  }
  function getMainAxisFromPlacement(placement) {
    return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
  }
  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }
  function withinMaxClamp(min2, value, max2) {
    var v = within(min2, value, max2);
    return v > max2 ? max2 : v;
  }
  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }
  function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }
  var toPaddingObject = function toPaddingObject2(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  };
  function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets2) {
      return;
    }
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === "y" ? top : left;
    var maxProp = axis === "y" ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
    var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2;
    var min2 = paddingObject[minProp];
    var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset2 = within(min2, center, max2);
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
  }
  function effect$1(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) {
      return;
    }
    if (typeof arrowElement === "string") {
      arrowElement = state.elements.popper.querySelector(arrowElement);
      if (!arrowElement) {
        return;
      }
    }
    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }
    state.elements.arrow = arrowElement;
  }
  const arrow$1 = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect$1,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };
  function getVariation(placement) {
    return placement.split("-")[1];
  }
  var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x * dpr) / dpr || 0,
      y: round(y * dpr) / dpr || 0
    };
  }
  function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
      x,
      y
    }) : {
      x,
      y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
      var offsetParent = getOffsetParent(popper2);
      var heightProp = "clientHeight";
      var widthProp = "clientWidth";
      if (offsetParent === getWindow(popper2)) {
        offsetParent = getDocumentElement(popper2);
        if (getComputedStyle$1(offsetParent).position !== "static" && position === "absolute") {
          heightProp = "scrollHeight";
          widthProp = "scrollWidth";
        }
      }
      offsetParent = offsetParent;
      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
          // $FlowFixMe[prop-missing]
          offsetParent[heightProp]
        );
        y -= offsetY - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }
      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
          // $FlowFixMe[prop-missing]
          offsetParent[widthProp]
        );
        x -= offsetX - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }
    var commonStyles = Object.assign({
      position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x,
      y
    }, getWindow(popper2)) : {
      x,
      y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
      var _Object$assign;
      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
  }
  function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration,
      isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive,
        roundOffsets
      })));
    }
    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets
      })));
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-placement": state.placement
    });
  }
  const computeStyles$1 = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
  };
  var passive = {
    passive: true
  };
  function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window2 = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.addEventListener("resize", instance.update, passive);
    }
    return function() {
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.removeEventListener("scroll", instance.update, passive);
        });
      }
      if (resize) {
        window2.removeEventListener("resize", instance.update, passive);
      }
    };
  }
  const eventListeners = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {
    },
    effect,
    data: {}
  };
  var hash$1 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
      return hash$1[matched];
    });
  }
  var hash = {
    start: "end",
    end: "start"
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
      return hash[matched];
    });
  }
  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft,
      scrollTop
    };
  }
  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }
  function getViewportRect(element, strategy) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var layoutViewport = isLayoutViewport();
      if (layoutViewport || !layoutViewport && strategy === "fixed") {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x + getWindowScrollBarX(element),
      y
    };
  }
  function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;
    if (getComputedStyle$1(body || html).direction === "rtl") {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }
  function isScrollParent(element) {
    var _getComputedStyle = getComputedStyle$1(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }
  function getScrollParent(node) {
    if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
      return node.ownerDocument.body;
    }
    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }
    return getScrollParent(getParentNode(node));
  }
  function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) {
      list = [];
    }
    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : (
      // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      updatedList.concat(listScrollParents(getParentNode(target)))
    );
  }
  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }
  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }
  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement$1(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  }
  function getClippingParents(element) {
    var clippingParents2 = listScrollParents(getParentNode(element));
    var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$1(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
    if (!isElement$1(clipperElement)) {
      return [];
    }
    return clippingParents2.filter(function(clippingParent) {
      return isElement$1(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
    });
  }
  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents2[0];
    var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }
  function computeOffsets(_ref) {
    var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference2.x + reference2.width / 2 - element.width / 2;
    var commonY = reference2.y + reference2.height / 2 - element.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference2.y - element.height
        };
        break;
      case bottom:
        offsets = {
          x: commonX,
          y: reference2.y + reference2.height
        };
        break;
      case right:
        offsets = {
          x: reference2.x + reference2.width,
          y: commonY
        };
        break;
      case left:
        offsets = {
          x: reference2.x - element.width,
          y: commonY
        };
        break;
      default:
        offsets = {
          x: reference2.x,
          y: reference2.y
        };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
      var len = mainAxis === "y" ? "height" : "width";
      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
          break;
        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
          break;
      }
    }
    return offsets;
  }
  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement$1(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets2 = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: "absolute",
      placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset;
    if (elementContext === popper && offsetData) {
      var offset2 = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function(key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
        overflowOffsets[key] += offset2[axis] * multiply;
      });
    }
    return overflowOffsets;
  }
  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
      return getVariation(placement2) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function(placement2) {
      return allowedAutoPlacements.indexOf(placement2) >= 0;
    });
    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;
    }
    var overflows = allowedPlacements.reduce(function(acc, placement2) {
      acc[placement2] = detectOverflow(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding
      })[getBasePlacement(placement2)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
      return overflows[a] - overflows[b];
    });
  }
  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }
    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }
  function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) {
      return;
    }
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
      return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding,
        flipVariations,
        allowedAutoPlacements
      }) : placement2);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = /* @__PURE__ */ new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements2[0];
    for (var i = 0; i < placements2.length; i++) {
      var placement = placements2[i];
      var _basePlacement = getBasePlacement(placement);
      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? "width" : "height";
      var overflow = detectOverflow(state, {
        placement,
        boundary,
        rootBoundary,
        altBoundary,
        padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }
      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];
      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }
      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }
      if (checks.every(function(check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
      var numberOfChecks = flipVariations ? 3 : 1;
      var _loop = function _loop2(_i2) {
        var fittingPlacement = placements2.find(function(placement2) {
          var checks2 = checksMap.get(placement2);
          if (checks2) {
            return checks2.slice(0, _i2).every(function(check) {
              return check;
            });
          }
        });
        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };
      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);
        if (_ret === "break") break;
      }
    }
    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  }
  const flip$1 = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };
  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }
    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }
  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function(side) {
      return overflow[side] >= 0;
    });
  }
  function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: "reference"
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets,
      popperEscapeOffsets,
      isReferenceHidden,
      hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-reference-hidden": isReferenceHidden,
      "data-popper-escaped": hasPopperEscaped
    });
  }
  const hide$1 = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: hide
  };
  function distanceAndSkiddingToXY(placement, rects, offset2) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
      placement
    })) : offset2, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }
  function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function(acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
  }
  const offset$1 = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: offset
  };
  function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: "absolute",
      placement: state.placement
    });
  }
  const popperOffsets$1 = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
  };
  function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
  }
  function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary,
      rootBoundary,
      padding,
      altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
      x: 0,
      y: 0
    };
    if (!popperOffsets2) {
      return;
    }
    if (checkMainAxis) {
      var _offsetModifierState$;
      var mainSide = mainAxis === "y" ? top : left;
      var altSide = mainAxis === "y" ? bottom : right;
      var len = mainAxis === "y" ? "height" : "width";
      var offset2 = popperOffsets2[mainAxis];
      var min$1 = offset2 + overflow[mainSide];
      var max$1 = offset2 - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide];
      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset2 + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets2[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset2;
    }
    if (checkAltAxis) {
      var _offsetModifierState$2;
      var _mainSide = mainAxis === "x" ? top : left;
      var _altSide = mainAxis === "x" ? bottom : right;
      var _offset = popperOffsets2[altAxis];
      var _len = altAxis === "y" ? "height" : "width";
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      popperOffsets2[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
  }
  const preventOverflow$1 = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: ["offset"]
  };
  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }
  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  }
  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }
  function order(modifiers) {
    var map = /* @__PURE__ */ new Map();
    var visited = /* @__PURE__ */ new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
      map.set(modifier.name, modifier);
    });
    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function(dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);
          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
      if (!visited.has(modifier.name)) {
        sort(modifier);
      }
    });
    return result;
  }
  function orderModifiers(modifiers) {
    var orderedModifiers = order(modifiers);
    return modifierPhases.reduce(function(acc, phase) {
      return acc.concat(orderedModifiers.filter(function(modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }
  function debounce(fn) {
    var pending;
    return function() {
      if (!pending) {
        pending = new Promise(function(resolve) {
          Promise.resolve().then(function() {
            pending = void 0;
            resolve(fn());
          });
        });
      }
      return pending;
    };
  }
  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged2, current) {
      var existing = merged2[current.name];
      merged2[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged2;
    }, {});
    return Object.keys(merged).map(function(key) {
      return merged[key];
    });
  }
  var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return !args.some(function(element) {
      return !(element && typeof element.getBoundingClientRect === "function");
    });
  }
  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper2(reference2, popper2, options) {
      if (options === void 0) {
        options = defaultOptions;
      }
      var state = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference2,
          popper: popper2
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state,
        setOptions: function setOptions(setOptionsAction) {
          var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options2);
          state.scrollParents = {
            reference: isElement$1(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
            popper: listScrollParents(popper2)
          };
          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
          state.orderedModifiers = orderedModifiers.filter(function(m) {
            return m.enabled;
          });
          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }
          var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
          if (!areValidElements(reference3, popper3)) {
            return;
          }
          state.rects = {
            reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
            popper: getLayoutRect(popper3)
          };
          state.reset = false;
          state.placement = state.options.placement;
          state.orderedModifiers.forEach(function(modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }
            var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
            if (typeof fn === "function") {
              state = fn({
                state,
                options: _options,
                name,
                instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function() {
          return new Promise(function(resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };
      if (!areValidElements(reference2, popper2)) {
        return instance;
      }
      instance.setOptions(options).then(function(state2) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state2);
        }
      });
      function runModifierEffects() {
        state.orderedModifiers.forEach(function(_ref) {
          var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
          if (typeof effect2 === "function") {
            var cleanupFn = effect2({
              state,
              name,
              instance,
              options: options2
            });
            var noopFn = function noopFn2() {
            };
            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }
      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function(fn) {
          return fn();
        });
        effectCleanupFns = [];
      }
      return instance;
    };
  }
  var createPopper$2 = /* @__PURE__ */ popperGenerator();
  var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
  var createPopper$1 = /* @__PURE__ */ popperGenerator({
    defaultModifiers: defaultModifiers$1
  });
  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
  var createPopper = /* @__PURE__ */ popperGenerator({
    defaultModifiers
  });
  const Popper = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    afterMain,
    afterRead,
    afterWrite,
    applyStyles: applyStyles$1,
    arrow: arrow$1,
    auto,
    basePlacements,
    beforeMain,
    beforeRead,
    beforeWrite,
    bottom,
    clippingParents,
    computeStyles: computeStyles$1,
    createPopper,
    createPopperBase: createPopper$2,
    createPopperLite: createPopper$1,
    detectOverflow,
    end,
    eventListeners,
    flip: flip$1,
    hide: hide$1,
    left,
    main,
    modifierPhases,
    offset: offset$1,
    placements,
    popper,
    popperGenerator,
    popperOffsets: popperOffsets$1,
    preventOverflow: preventOverflow$1,
    read,
    reference,
    right,
    start,
    top,
    variationPlacements,
    viewport,
    write
  }, Symbol.toStringTag, { value: "Module" }));
  /*!
    * Bootstrap v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    */
  const elementMap = /* @__PURE__ */ new Map();
  const Data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, /* @__PURE__ */ new Map());
      }
      const instanceMap = elementMap.get(element);
      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }
      instanceMap.set(key, instance);
    },
    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }
      return null;
    },
    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }
      const instanceMap = elementMap.get(element);
      instanceMap.delete(key);
      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }
  };
  const MAX_UID = 1e6;
  const MILLISECONDS_MULTIPLIER = 1e3;
  const TRANSITION_END = "transitionend";
  const parseSelector = (selector) => {
    if (selector && window.CSS && window.CSS.escape) {
      selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
    }
    return selector;
  };
  const toType = (object) => {
    if (object === null || object === void 0) {
      return `${object}`;
    }
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  const getUID = (prefix) => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));
    return prefix;
  };
  const getTransitionDurationFromElement = (element) => {
    if (!element) {
      return 0;
    }
    let {
      transitionDuration,
      transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }
    transitionDuration = transitionDuration.split(",")[0];
    transitionDelay = transitionDelay.split(",")[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  const triggerTransitionEnd = (element) => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  const isElement = (object) => {
    if (!object || typeof object !== "object") {
      return false;
    }
    if (typeof object.jquery !== "undefined") {
      object = object[0];
    }
    return typeof object.nodeType !== "undefined";
  };
  const getElement = (object) => {
    if (isElement(object)) {
      return object.jquery ? object[0] : object;
    }
    if (typeof object === "string" && object.length > 0) {
      return document.querySelector(parseSelector(object));
    }
    return null;
  };
  const isVisible = (element) => {
    if (!isElement(element) || element.getClientRects().length === 0) {
      return false;
    }
    const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
    const closedDetails = element.closest("details:not([open])");
    if (!closedDetails) {
      return elementIsVisible;
    }
    if (closedDetails !== element) {
      const summary = element.closest("summary");
      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }
      if (summary === null) {
        return false;
      }
    }
    return elementIsVisible;
  };
  const isDisabled = (element) => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }
    if (element.classList.contains("disabled")) {
      return true;
    }
    if (typeof element.disabled !== "undefined") {
      return element.disabled;
    }
    return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
  };
  const findShadowRoot = (element) => {
    if (!document.documentElement.attachShadow) {
      return null;
    }
    if (typeof element.getRootNode === "function") {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) {
      return element;
    }
    if (!element.parentNode) {
      return null;
    }
    return findShadowRoot(element.parentNode);
  };
  const noop = () => {
  };
  const reflow = (element) => {
    element.offsetHeight;
  };
  const getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
      return window.jQuery;
    }
    return null;
  };
  const DOMContentLoadedCallbacks = [];
  const onDOMContentLoaded = (callback) => {
    if (document.readyState === "loading") {
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener("DOMContentLoaded", () => {
          for (const callback2 of DOMContentLoadedCallbacks) {
            callback2();
          }
        });
      }
      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };
  const isRTL = () => document.documentElement.dir === "rtl";
  const defineJQueryPlugin = (plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
    return typeof possibleCallback === "function" ? possibleCallback(...args) : defaultValue;
  };
  const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({
      target
    }) => {
      if (target !== transitionElement) {
        return;
      }
      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length;
    let index = list.indexOf(activeElement);
    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }
    return list[Math.max(0, Math.min(index, listLength - 1))];
  };
  const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  const stripNameRegex = /\..*/;
  const stripUidRegex = /::\d+$/;
  const eventRegistry = {};
  let uidEvent = 1;
  const customEvents = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  };
  const nativeEvents = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }
  function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn) {
    return function handler(event) {
      hydrateObj(event, {
        delegateTarget: element
      });
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }
      return fn.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);
      for (let {
        target
      } = event; target && target !== this; target = target.parentNode) {
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }
          hydrateObj(event, {
            delegateTarget: target
          });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }
          return fn.apply(target, [event]);
        }
      }
    };
  }
  function findHandler(events2, callable, delegationSelector = null) {
    return Object.values(events2).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
  }
  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === "string";
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }
    return [isDelegated, callable, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== "string" || !element) {
      return;
    }
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    if (originalTypeEvent in customEvents) {
      const wrapFunction = (fn2) => {
        return function(event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn2.call(this, event);
          }
        };
      };
      callable = wrapFunction(callable);
    }
    const events2 = getElementEvents(element);
    const handlers = events2[typeEvent] || (events2[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }
    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
  }
  function removeHandler(element, events2, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events2[typeEvent], handler, delegationSelector);
    if (!fn) {
      return;
    }
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events2[typeEvent][fn.uidEvent];
  }
  function removeNamespacedHandlers(element, events2, typeEvent, namespace) {
    const storeElementEvent = events2[typeEvent] || {};
    for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        removeHandler(element, events2, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }
  function getTypeEvent(event) {
    event = event.replace(stripNameRegex, "");
    return customEvents[event] || event;
  }
  const EventHandler = {
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },
    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },
    off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== "string" || !element) {
        return;
      }
      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events2 = getElementEvents(element);
      const storeElementEvent = events2[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith(".");
      if (typeof callable !== "undefined") {
        if (!Object.keys(storeElementEvent).length) {
          return;
        }
        removeHandler(element, events2, typeEvent, callable, isDelegated ? handler : null);
        return;
      }
      if (isNamespace) {
        for (const elementEvent of Object.keys(events2)) {
          removeNamespacedHandlers(element, events2, elementEvent, originalTypeEvent.slice(1));
        }
      }
      for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
        const handlerKey = keyHandlers.replace(stripUidRegex, "");
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          removeHandler(element, events2, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },
    trigger(element, event, args) {
      if (typeof event !== "string" || !element) {
        return null;
      }
      const $ = getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }
      const evt = hydrateObj(new Event(event, {
        bubbles,
        cancelable: true
      }), args);
      if (defaultPrevented) {
        evt.preventDefault();
      }
      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }
      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }
      return evt;
    }
  };
  function hydrateObj(obj, meta = {}) {
    for (const [key, value] of Object.entries(meta)) {
      try {
        obj[key] = value;
      } catch (_unused) {
        Object.defineProperty(obj, key, {
          configurable: true,
          get() {
            return value;
          }
        });
      }
    }
    return obj;
  }
  function normalizeData(value) {
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
    if (value === Number(value).toString()) {
      return Number(value);
    }
    if (value === "" || value === "null") {
      return null;
    }
    if (typeof value !== "string") {
      return value;
    }
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
      return value;
    }
  }
  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
  }
  const Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes(element) {
      if (!element) {
        return {};
      }
      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, "");
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }
      return attributes;
    },
    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }
  };
  class Config {
    // Getters
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      return config;
    }
    _mergeConfigObj(config, element) {
      const jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, "config") : {};
      return {
        ...this.constructor.Default,
        ...typeof jsonConfig === "object" ? jsonConfig : {},
        ...isElement(element) ? Manipulator.getDataAttributes(element) : {},
        ...typeof config === "object" ? config : {}
      };
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const [property, expectedTypes] of Object.entries(configTypes)) {
        const value = config[property];
        const valueType = isElement(value) ? "element" : toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
      }
    }
  }
  const VERSION = "5.3.3";
  class BaseComponent extends Config {
    constructor(element, config) {
      super();
      element = getElement(element);
      if (!element) {
        return;
      }
      this._element = element;
      this._config = this._getConfig(config);
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }
    // Public
    dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);
      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }
    _queueCallback(callback, element, isAnimated = true) {
      executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    // Static
    static getInstance(element) {
      return Data.get(getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
    }
    static get VERSION() {
      return VERSION;
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }
  }
  const getSelector = (element) => {
    let selector = element.getAttribute("data-bs-target");
    if (!selector || selector === "#") {
      let hrefAttribute = element.getAttribute("href");
      if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
        return null;
      }
      if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
        hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
      }
      selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
    }
    return selector ? selector.split(",").map((sel) => parseSelector(sel)).join(",") : null;
  };
  const SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },
    children(element, selector) {
      return [].concat(...element.children).filter((child) => child.matches(selector));
    },
    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);
      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }
      return parents;
    },
    prev(element, selector) {
      let previous = element.previousElementSibling;
      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }
        previous = previous.previousElementSibling;
      }
      return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;
      while (next) {
        if (next.matches(selector)) {
          return [next];
        }
        next = next.nextElementSibling;
      }
      return [];
    },
    focusableChildren(element) {
      const focusables = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
      return this.find(focusables, element).filter((el) => !isDisabled(el) && isVisible(el));
    },
    getSelectorFromElement(element) {
      const selector = getSelector(element);
      if (selector) {
        return SelectorEngine.findOne(selector) ? selector : null;
      }
      return null;
    },
    getElementFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.findOne(selector) : null;
    },
    getMultipleElementsFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.find(selector) : [];
    }
  };
  const enableDismissTrigger = (component, method = "hide") => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
      if (["A", "AREA"].includes(this.tagName)) {
        event.preventDefault();
      }
      if (isDisabled(this)) {
        return;
      }
      const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target);
      instance[method]();
    });
  };
  const NAME$f = "alert";
  const DATA_KEY$a = "bs.alert";
  const EVENT_KEY$b = `.${DATA_KEY$a}`;
  const EVENT_CLOSE = `close${EVENT_KEY$b}`;
  const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
  const CLASS_NAME_FADE$5 = "fade";
  const CLASS_NAME_SHOW$8 = "show";
  class Alert extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$f;
    }
    // Public
    close() {
      const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
      if (closeEvent.defaultPrevented) {
        return;
      }
      this._element.classList.remove(CLASS_NAME_SHOW$8);
      const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
      this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
    }
    // Private
    _destroyElement() {
      this._element.remove();
      EventHandler.trigger(this._element, EVENT_CLOSED);
      this.dispose();
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = Alert.getOrCreateInstance(this);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  }
  enableDismissTrigger(Alert, "close");
  defineJQueryPlugin(Alert);
  const NAME$e = "button";
  const DATA_KEY$9 = "bs.button";
  const EVENT_KEY$a = `.${DATA_KEY$9}`;
  const DATA_API_KEY$6 = ".data-api";
  const CLASS_NAME_ACTIVE$3 = "active";
  const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
  const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
  class Button extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$e;
    }
    // Public
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = Button.getOrCreateInstance(this);
        if (config === "toggle") {
          data[config]();
        }
      });
    }
  }
  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, (event) => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
  });
  defineJQueryPlugin(Button);
  const NAME$d = "swipe";
  const EVENT_KEY$9 = ".bs.swipe";
  const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
  const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
  const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
  const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
  const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
  const POINTER_TYPE_TOUCH = "touch";
  const POINTER_TYPE_PEN = "pen";
  const CLASS_NAME_POINTER_EVENT = "pointer-event";
  const SWIPE_THRESHOLD = 40;
  const Default$c = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  const DefaultType$c = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
  };
  class Swipe extends Config {
    constructor(element, config) {
      super();
      this._element = element;
      if (!element || !Swipe.isSupported()) {
        return;
      }
      this._config = this._getConfig(config);
      this._deltaX = 0;
      this._supportPointerEvents = Boolean(window.PointerEvent);
      this._initEvents();
    }
    // Getters
    static get Default() {
      return Default$c;
    }
    static get DefaultType() {
      return DefaultType$c;
    }
    static get NAME() {
      return NAME$d;
    }
    // Public
    dispose() {
      EventHandler.off(this._element, EVENT_KEY$9);
    }
    // Private
    _start(event) {
      if (!this._supportPointerEvents) {
        this._deltaX = event.touches[0].clientX;
        return;
      }
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX;
      }
    }
    _end(event) {
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX - this._deltaX;
      }
      this._handleSwipe();
      execute(this._config.endCallback);
    }
    _move(event) {
      this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const absDeltaX = Math.abs(this._deltaX);
      if (absDeltaX <= SWIPE_THRESHOLD) {
        return;
      }
      const direction = absDeltaX / this._deltaX;
      this._deltaX = 0;
      if (!direction) {
        return;
      }
      execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      if (this._supportPointerEvents) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, (event) => this._start(event));
        EventHandler.on(this._element, EVENT_POINTERUP, (event) => this._end(event));
        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, (event) => this._start(event));
        EventHandler.on(this._element, EVENT_TOUCHMOVE, (event) => this._move(event));
        EventHandler.on(this._element, EVENT_TOUCHEND, (event) => this._end(event));
      }
    }
    _eventIsPointerPenTouch(event) {
      return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    }
    // Static
    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
  }
  const NAME$c = "carousel";
  const DATA_KEY$8 = "bs.carousel";
  const EVENT_KEY$8 = `.${DATA_KEY$8}`;
  const DATA_API_KEY$5 = ".data-api";
  const ARROW_LEFT_KEY$1 = "ArrowLeft";
  const ARROW_RIGHT_KEY$1 = "ArrowRight";
  const TOUCHEVENT_COMPAT_WAIT = 500;
  const ORDER_NEXT = "next";
  const ORDER_PREV = "prev";
  const DIRECTION_LEFT = "left";
  const DIRECTION_RIGHT = "right";
  const EVENT_SLIDE = `slide${EVENT_KEY$8}`;
  const EVENT_SLID = `slid${EVENT_KEY$8}`;
  const EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
  const EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
  const EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
  const EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
  const EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
  const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
  const CLASS_NAME_CAROUSEL = "carousel";
  const CLASS_NAME_ACTIVE$2 = "active";
  const CLASS_NAME_SLIDE = "slide";
  const CLASS_NAME_END = "carousel-item-end";
  const CLASS_NAME_START = "carousel-item-start";
  const CLASS_NAME_NEXT = "carousel-item-next";
  const CLASS_NAME_PREV = "carousel-item-prev";
  const SELECTOR_ACTIVE = ".active";
  const SELECTOR_ITEM = ".carousel-item";
  const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
  const SELECTOR_ITEM_IMG = ".carousel-item img";
  const SELECTOR_INDICATORS = ".carousel-indicators";
  const SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
  const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  const KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
  };
  const Default$b = {
    interval: 5e3,
    keyboard: true,
    pause: "hover",
    ride: false,
    touch: true,
    wrap: true
  };
  const DefaultType$b = {
    interval: "(number|boolean)",
    // TODO:v6 remove boolean support
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
  };
  class Carousel extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._interval = null;
      this._activeElement = null;
      this._isSliding = false;
      this.touchTimeout = null;
      this._swipeHelper = null;
      this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
      this._addEventListeners();
      if (this._config.ride === CLASS_NAME_CAROUSEL) {
        this.cycle();
      }
    }
    // Getters
    static get Default() {
      return Default$b;
    }
    static get DefaultType() {
      return DefaultType$b;
    }
    static get NAME() {
      return NAME$c;
    }
    // Public
    next() {
      this._slide(ORDER_NEXT);
    }
    nextWhenVisible() {
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }
    prev() {
      this._slide(ORDER_PREV);
    }
    pause() {
      if (this._isSliding) {
        triggerTransitionEnd(this._element);
      }
      this._clearInterval();
    }
    cycle() {
      this._clearInterval();
      this._updateInterval();
      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      if (!this._config.ride) {
        return;
      }
      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
        return;
      }
      this.cycle();
    }
    to(index) {
      const items = this._getItems();
      if (index > items.length - 1 || index < 0) {
        return;
      }
      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }
      const activeIndex = this._getItemIndex(this._getActive());
      if (activeIndex === index) {
        return;
      }
      const order2 = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
      this._slide(order2, items[index]);
    }
    dispose() {
      if (this._swipeHelper) {
        this._swipeHelper.dispose();
      }
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.defaultInterval = config.interval;
      return config;
    }
    _addEventListeners() {
      if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN$1, (event) => this._keydown(event));
      }
      if (this._config.pause === "hover") {
        EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
        EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
      }
      if (this._config.touch && Swipe.isSupported()) {
        this._addTouchEventListeners();
      }
    }
    _addTouchEventListeners() {
      for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
        EventHandler.on(img, EVENT_DRAG_START, (event) => event.preventDefault());
      }
      const endCallBack = () => {
        if (this._config.pause !== "hover") {
          return;
        }
        this.pause();
        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }
        this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      };
      const swipeConfig = {
        leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
        rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
        endCallback: endCallBack
      };
      this._swipeHelper = new Swipe(this._element, swipeConfig);
    }
    _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }
      const direction = KEY_TO_DIRECTION[event.key];
      if (direction) {
        event.preventDefault();
        this._slide(this._directionToOrder(direction));
      }
    }
    _getItemIndex(element) {
      return this._getItems().indexOf(element);
    }
    _setActiveIndicatorElement(index) {
      if (!this._indicatorsElement) {
        return;
      }
      const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
      activeIndicator.removeAttribute("aria-current");
      const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
        newActiveIndicator.setAttribute("aria-current", "true");
      }
    }
    _updateInterval() {
      const element = this._activeElement || this._getActive();
      if (!element) {
        return;
      }
      const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
      this._config.interval = elementInterval || this._config.defaultInterval;
    }
    _slide(order2, element = null) {
      if (this._isSliding) {
        return;
      }
      const activeElement = this._getActive();
      const isNext = order2 === ORDER_NEXT;
      const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
      if (nextElement === activeElement) {
        return;
      }
      const nextElementIndex = this._getItemIndex(nextElement);
      const triggerEvent = (eventName) => {
        return EventHandler.trigger(this._element, eventName, {
          relatedTarget: nextElement,
          direction: this._orderToDirection(order2),
          from: this._getItemIndex(activeElement),
          to: nextElementIndex
        });
      };
      const slideEvent = triggerEvent(EVENT_SLIDE);
      if (slideEvent.defaultPrevented) {
        return;
      }
      if (!activeElement || !nextElement) {
        return;
      }
      const isCycling = Boolean(this._interval);
      this.pause();
      this._isSliding = true;
      this._setActiveIndicatorElement(nextElementIndex);
      this._activeElement = nextElement;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);
      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
        this._isSliding = false;
        triggerEvent(EVENT_SLID);
      };
      this._queueCallback(completeCallBack, activeElement, this._isAnimated());
      if (isCycling) {
        this.cycle();
      }
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_SLIDE);
    }
    _getActive() {
      return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }
    _getItems() {
      return SelectorEngine.find(SELECTOR_ITEM, this._element);
    }
    _clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }
    _directionToOrder(direction) {
      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }
      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
    _orderToDirection(order2) {
      if (isRTL()) {
        return order2 === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }
      return order2 === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = Carousel.getOrCreateInstance(this, config);
        if (typeof config === "number") {
          data.to(config);
          return;
        }
        if (typeof config === "string") {
          if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  }
  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }
    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute("data-bs-slide-to");
    if (slideIndex) {
      carousel.to(slideIndex);
      carousel._maybeEnableCycle();
      return;
    }
    if (Manipulator.getDataAttribute(this, "slide") === "next") {
      carousel.next();
      carousel._maybeEnableCycle();
      return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
    for (const carousel of carousels) {
      Carousel.getOrCreateInstance(carousel);
    }
  });
  defineJQueryPlugin(Carousel);
  const NAME$b = "collapse";
  const DATA_KEY$7 = "bs.collapse";
  const EVENT_KEY$7 = `.${DATA_KEY$7}`;
  const DATA_API_KEY$4 = ".data-api";
  const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
  const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
  const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
  const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
  const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
  const CLASS_NAME_SHOW$7 = "show";
  const CLASS_NAME_COLLAPSE = "collapse";
  const CLASS_NAME_COLLAPSING = "collapsing";
  const CLASS_NAME_COLLAPSED = "collapsed";
  const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  const CLASS_NAME_HORIZONTAL = "collapse-horizontal";
  const WIDTH = "width";
  const HEIGHT = "height";
  const SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
  const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
  const Default$a = {
    parent: null,
    toggle: true
  };
  const DefaultType$a = {
    parent: "(null|element)",
    toggle: "boolean"
  };
  class Collapse extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isTransitioning = false;
      this._triggerArray = [];
      const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
      for (const elem of toggleList) {
        const selector = SelectorEngine.getSelectorFromElement(elem);
        const filterElement = SelectorEngine.find(selector).filter((foundElement) => foundElement === this._element);
        if (selector !== null && filterElement.length) {
          this._triggerArray.push(elem);
        }
      }
      this._initializeChildren();
      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
      }
      if (this._config.toggle) {
        this.toggle();
      }
    }
    // Getters
    static get Default() {
      return Default$a;
    }
    static get DefaultType() {
      return DefaultType$a;
    }
    static get NAME() {
      return NAME$b;
    }
    // Public
    toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }
    show() {
      if (this._isTransitioning || this._isShown()) {
        return;
      }
      let activeChildren = [];
      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element) => element !== this._element).map((element) => Collapse.getOrCreateInstance(element, {
          toggle: false
        }));
      }
      if (activeChildren.length && activeChildren[0]._isTransitioning) {
        return;
      }
      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
      if (startEvent.defaultPrevented) {
        return;
      }
      for (const activeInstance of activeChildren) {
        activeInstance.hide();
      }
      const dimension = this._getDimension();
      this._element.classList.remove(CLASS_NAME_COLLAPSE);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;
      this._addAriaAndCollapsedClass(this._triggerArray, true);
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
        this._element.style[dimension] = "";
        EventHandler.trigger(this._element, EVENT_SHOWN$6);
      };
      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;
      this._queueCallback(complete, this._element, true);
      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) {
        return;
      }
      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
      if (startEvent.defaultPrevented) {
        return;
      }
      const dimension = this._getDimension();
      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
      for (const trigger of this._triggerArray) {
        const element = SelectorEngine.getElementFromSelector(trigger);
        if (element && !this._isShown(element)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE);
        EventHandler.trigger(this._element, EVENT_HIDDEN$6);
      };
      this._element.style[dimension] = "";
      this._queueCallback(complete, this._element, true);
    }
    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW$7);
    }
    // Private
    _configAfterMerge(config) {
      config.toggle = Boolean(config.toggle);
      config.parent = getElement(config.parent);
      return config;
    }
    _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }
      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
      for (const element of children) {
        const selected = SelectorEngine.getElementFromSelector(element);
        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      }
    }
    _getFirstLevelChildren(selector) {
      const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      return SelectorEngine.find(selector, this._config.parent).filter((element) => !children.includes(element));
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }
      for (const element of triggerArray) {
        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
        element.setAttribute("aria-expanded", isOpen);
      }
    }
    // Static
    static jQueryInterface(config) {
      const _config = {};
      if (typeof config === "string" && /show|hide/.test(config)) {
        _config.toggle = false;
      }
      return this.each(function() {
        const data = Collapse.getOrCreateInstance(this, _config);
        if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  }
  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function(event) {
    if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
      event.preventDefault();
    }
    for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
      Collapse.getOrCreateInstance(element, {
        toggle: false
      }).toggle();
    }
  });
  defineJQueryPlugin(Collapse);
  const NAME$a = "dropdown";
  const DATA_KEY$6 = "bs.dropdown";
  const EVENT_KEY$6 = `.${DATA_KEY$6}`;
  const DATA_API_KEY$3 = ".data-api";
  const ESCAPE_KEY$2 = "Escape";
  const TAB_KEY$1 = "Tab";
  const ARROW_UP_KEY$1 = "ArrowUp";
  const ARROW_DOWN_KEY$1 = "ArrowDown";
  const RIGHT_MOUSE_BUTTON = 2;
  const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
  const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
  const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
  const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
  const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const CLASS_NAME_SHOW$6 = "show";
  const CLASS_NAME_DROPUP = "dropup";
  const CLASS_NAME_DROPEND = "dropend";
  const CLASS_NAME_DROPSTART = "dropstart";
  const CLASS_NAME_DROPUP_CENTER = "dropup-center";
  const CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
  const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
  const SELECTOR_MENU = ".dropdown-menu";
  const SELECTOR_NAVBAR = ".navbar";
  const SELECTOR_NAVBAR_NAV = ".navbar-nav";
  const SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
  const PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
  const PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
  const PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
  const PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
  const PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
  const PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
  const PLACEMENT_TOPCENTER = "top";
  const PLACEMENT_BOTTOMCENTER = "bottom";
  const Default$9 = {
    autoClose: true,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle"
  };
  const DefaultType$9 = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
  };
  class Dropdown extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._popper = null;
      this._parent = this._element.parentNode;
      this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
      this._inNavbar = this._detectNavbar();
    }
    // Getters
    static get Default() {
      return Default$9;
    }
    static get DefaultType() {
      return DefaultType$9;
    }
    static get NAME() {
      return NAME$a;
    }
    // Public
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (isDisabled(this._element) || this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._createPopper();
      if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, "mouseover", noop);
        }
      }
      this._element.focus();
      this._element.setAttribute("aria-expanded", true);
      this._menu.classList.add(CLASS_NAME_SHOW$6);
      this._element.classList.add(CLASS_NAME_SHOW$6);
      EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
    }
    hide() {
      if (isDisabled(this._element) || !this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      this._completeHide(relatedTarget);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper) {
        this._popper.update();
      }
    }
    // Private
    _completeHide(relatedTarget) {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
      if (hideEvent.defaultPrevented) {
        return;
      }
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, "mouseover", noop);
        }
      }
      if (this._popper) {
        this._popper.destroy();
      }
      this._menu.classList.remove(CLASS_NAME_SHOW$6);
      this._element.classList.remove(CLASS_NAME_SHOW$6);
      this._element.setAttribute("aria-expanded", "false");
      Manipulator.removeDataAttribute(this._menu, "popper");
      EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
    }
    _getConfig(config) {
      config = super._getConfig(config);
      if (typeof config.reference === "object" && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== "function") {
        throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }
      return config;
    }
    _createPopper() {
      if (typeof Popper === "undefined") {
        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      }
      let referenceElement = this._element;
      if (this._config.reference === "parent") {
        referenceElement = this._parent;
      } else if (isElement(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (typeof this._config.reference === "object") {
        referenceElement = this._config.reference;
      }
      const popperConfig = this._getPopperConfig();
      this._popper = createPopper(referenceElement, this._menu, popperConfig);
    }
    _isShown() {
      return this._menu.classList.contains(CLASS_NAME_SHOW$6);
    }
    _getPlacement() {
      const parentDropdown = this._parent;
      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
        return PLACEMENT_TOPCENTER;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
        return PLACEMENT_BOTTOMCENTER;
      }
      const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }
      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
      return this._element.closest(SELECTOR_NAVBAR) !== null;
    }
    _getOffset() {
      const {
        offset: offset2
      } = this._config;
      if (typeof offset2 === "string") {
        return offset2.split(",").map((value) => Number.parseInt(value, 10));
      }
      if (typeof offset2 === "function") {
        return (popperData) => offset2(popperData, this._element);
      }
      return offset2;
    }
    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }]
      };
      if (this._inNavbar || this._config.display === "static") {
        Manipulator.setDataAttribute(this._menu, "popper", "static");
        defaultBsPopperConfig.modifiers = [{
          name: "applyStyles",
          enabled: false
        }];
      }
      return {
        ...defaultBsPopperConfig,
        ...execute(this._config.popperConfig, [defaultBsPopperConfig])
      };
    }
    _selectMenuItem({
      key,
      target
    }) {
      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element) => isVisible(element));
      if (!items.length) {
        return;
      }
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = Dropdown.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
    static clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY$1) {
        return;
      }
      const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
      for (const toggle of openToggles) {
        const context = Dropdown.getInstance(toggle);
        if (!context || context._config.autoClose === false) {
          continue;
        }
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);
        if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) {
          continue;
        }
        if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }
        const relatedTarget = {
          relatedTarget: context._element
        };
        if (event.type === "click") {
          relatedTarget.clickEvent = event;
        }
        context._completeHide(relatedTarget);
      }
    }
    static dataApiKeydownHandler(event) {
      const isInput = /input|textarea/i.test(event.target.tagName);
      const isEscapeEvent = event.key === ESCAPE_KEY$2;
      const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }
      if (isInput && !isEscapeEvent) {
        return;
      }
      event.preventDefault();
      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
      const instance = Dropdown.getOrCreateInstance(getToggleButton);
      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();
        instance._selectMenuItem(event);
        return;
      }
      if (instance._isShown()) {
        event.stopPropagation();
        instance.hide();
        getToggleButton.focus();
      }
    }
  }
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });
  defineJQueryPlugin(Dropdown);
  const NAME$9 = "backdrop";
  const CLASS_NAME_FADE$4 = "fade";
  const CLASS_NAME_SHOW$5 = "show";
  const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
  const Default$8 = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: "body"
    // give the choice to place backdrop under different elements
  };
  const DefaultType$8 = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
  };
  class Backdrop extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }
    // Getters
    static get Default() {
      return Default$8;
    }
    static get DefaultType() {
      return DefaultType$8;
    }
    static get NAME() {
      return NAME$9;
    }
    // Public
    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._append();
      const element = this._getElement();
      if (this._config.isAnimated) {
        reflow(element);
      }
      element.classList.add(CLASS_NAME_SHOW$5);
      this._emulateAnimation(() => {
        execute(callback);
      });
    }
    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW$5);
      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
    }
    dispose() {
      if (!this._isAppended) {
        return;
      }
      EventHandler.off(this._element, EVENT_MOUSEDOWN);
      this._element.remove();
      this._isAppended = false;
    }
    // Private
    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement("div");
        backdrop.className = this._config.className;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$4);
        }
        this._element = backdrop;
      }
      return this._element;
    }
    _configAfterMerge(config) {
      config.rootElement = getElement(config.rootElement);
      return config;
    }
    _append() {
      if (this._isAppended) {
        return;
      }
      const element = this._getElement();
      this._config.rootElement.append(element);
      EventHandler.on(element, EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }
    _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  }
  const NAME$8 = "focustrap";
  const DATA_KEY$5 = "bs.focustrap";
  const EVENT_KEY$5 = `.${DATA_KEY$5}`;
  const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
  const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
  const TAB_KEY = "Tab";
  const TAB_NAV_FORWARD = "forward";
  const TAB_NAV_BACKWARD = "backward";
  const Default$7 = {
    autofocus: true,
    trapElement: null
    // The element to trap focus inside of
  };
  const DefaultType$7 = {
    autofocus: "boolean",
    trapElement: "element"
  };
  class FocusTrap extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }
    // Getters
    static get Default() {
      return Default$7;
    }
    static get DefaultType() {
      return DefaultType$7;
    }
    static get NAME() {
      return NAME$8;
    }
    // Public
    activate() {
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      EventHandler.off(document, EVENT_KEY$5);
      EventHandler.on(document, EVENT_FOCUSIN$2, (event) => this._handleFocusin(event));
      EventHandler.on(document, EVENT_KEYDOWN_TAB, (event) => this._handleKeydown(event));
      this._isActive = true;
    }
    deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      EventHandler.off(document, EVENT_KEY$5);
    }
    // Private
    _handleFocusin(event) {
      const {
        trapElement
      } = this._config;
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }
      const elements = SelectorEngine.focusableChildren(trapElement);
      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
    _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
      }
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
  }
  const SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
  const SELECTOR_STICKY_CONTENT = ".sticky-top";
  const PROPERTY_PADDING = "padding-right";
  const PROPERTY_MARGIN = "margin-right";
  class ScrollBarHelper {
    constructor() {
      this._element = document.body;
    }
    // Public
    getWidth() {
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
      const width = this.getWidth();
      this._disableOverFlow();
      this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue) => calculatedValue - width);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow");
      this._resetElementAttributes(this._element, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    // Private
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow");
      this._element.style.overflow = "hidden";
    }
    _setElementAttributes(selector, styleProperty, callback) {
      const scrollbarWidth = this.getWidth();
      const manipulationCallBack = (element) => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }
        this._saveInitialAttribute(element, styleProperty);
        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);
      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProperty, actualValue);
      }
    }
    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = (element) => {
        const value = Manipulator.getDataAttribute(element, styleProperty);
        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
        Manipulator.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
      if (isElement(selector)) {
        callBack(selector);
        return;
      }
      for (const sel of SelectorEngine.find(selector, this._element)) {
        callBack(sel);
      }
    }
  }
  const NAME$7 = "modal";
  const DATA_KEY$4 = "bs.modal";
  const EVENT_KEY$4 = `.${DATA_KEY$4}`;
  const DATA_API_KEY$2 = ".data-api";
  const ESCAPE_KEY$1 = "Escape";
  const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
  const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
  const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
  const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
  const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
  const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
  const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
  const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
  const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
  const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
  const CLASS_NAME_OPEN = "modal-open";
  const CLASS_NAME_FADE$3 = "fade";
  const CLASS_NAME_SHOW$4 = "show";
  const CLASS_NAME_STATIC = "modal-static";
  const OPEN_SELECTOR$1 = ".modal.show";
  const SELECTOR_DIALOG = ".modal-dialog";
  const SELECTOR_MODAL_BODY = ".modal-body";
  const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  const Default$6 = {
    backdrop: true,
    focus: true,
    keyboard: true
  };
  const DefaultType$6 = {
    backdrop: "(boolean|string)",
    focus: "boolean",
    keyboard: "boolean"
  };
  class Modal extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._isShown = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper();
      this._addEventListeners();
    }
    // Getters
    static get Default() {
      return Default$6;
    }
    static get DefaultType() {
      return DefaultType$6;
    }
    static get NAME() {
      return NAME$7;
    }
    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown || this._isTransitioning) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._isTransitioning = true;
      this._scrollBar.hide();
      document.body.classList.add(CLASS_NAME_OPEN);
      this._adjustDialog();
      this._backdrop.show(() => this._showElement(relatedTarget));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._isShown = false;
      this._isTransitioning = true;
      this._focustrap.deactivate();
      this._element.classList.remove(CLASS_NAME_SHOW$4);
      this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
    }
    dispose() {
      EventHandler.off(window, EVENT_KEY$4);
      EventHandler.off(this._dialog, EVENT_KEY$4);
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    // Private
    _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value,
        isAnimated: this._isAnimated()
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _showElement(relatedTarget) {
      if (!document.body.contains(this._element)) {
        document.body.append(this._element);
      }
      this._element.style.display = "block";
      this._element.removeAttribute("aria-hidden");
      this._element.setAttribute("aria-modal", true);
      this._element.setAttribute("role", "dialog");
      this._element.scrollTop = 0;
      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
      if (modalBody) {
        modalBody.scrollTop = 0;
      }
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW$4);
      const transitionComplete = () => {
        if (this._config.focus) {
          this._focustrap.activate();
        }
        this._isTransitioning = false;
        EventHandler.trigger(this._element, EVENT_SHOWN$4, {
          relatedTarget
        });
      };
      this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, (event) => {
        if (event.key !== ESCAPE_KEY$1) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      });
      EventHandler.on(window, EVENT_RESIZE$1, () => {
        if (this._isShown && !this._isTransitioning) {
          this._adjustDialog();
        }
      });
      EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, (event) => {
        EventHandler.one(this._element, EVENT_CLICK_DISMISS, (event2) => {
          if (this._element !== event.target || this._element !== event2.target) {
            return;
          }
          if (this._config.backdrop === "static") {
            this._triggerBackdropTransition();
            return;
          }
          if (this._config.backdrop) {
            this.hide();
          }
        });
      });
    }
    _hideModal() {
      this._element.style.display = "none";
      this._element.setAttribute("aria-hidden", true);
      this._element.removeAttribute("aria-modal");
      this._element.removeAttribute("role");
      this._isTransitioning = false;
      this._backdrop.hide(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);
        this._resetAdjustments();
        this._scrollBar.reset();
        EventHandler.trigger(this._element, EVENT_HIDDEN$4);
      });
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE$3);
    }
    _triggerBackdropTransition() {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const initialOverflowY = this._element.style.overflowY;
      if (initialOverflowY === "hidden" || this._element.classList.contains(CLASS_NAME_STATIC)) {
        return;
      }
      if (!isModalOverflowing) {
        this._element.style.overflowY = "hidden";
      }
      this._element.classList.add(CLASS_NAME_STATIC);
      this._queueCallback(() => {
        this._element.classList.remove(CLASS_NAME_STATIC);
        this._queueCallback(() => {
          this._element.style.overflowY = initialOverflowY;
        }, this._dialog);
      }, this._dialog);
      this._element.focus();
    }
    /**
     * The following methods are used to handle overflowing modals
     */
    _adjustDialog() {
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const scrollbarWidth = this._scrollBar.getWidth();
      const isBodyOverflowing = scrollbarWidth > 0;
      if (isBodyOverflowing && !isModalOverflowing) {
        const property = isRTL() ? "paddingLeft" : "paddingRight";
        this._element.style[property] = `${scrollbarWidth}px`;
      }
      if (!isBodyOverflowing && isModalOverflowing) {
        const property = isRTL() ? "paddingRight" : "paddingLeft";
        this._element.style[property] = `${scrollbarWidth}px`;
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "";
      this._element.style.paddingRight = "";
    }
    // Static
    static jQueryInterface(config, relatedTarget) {
      return this.each(function() {
        const data = Modal.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](relatedTarget);
      });
    }
  }
  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    EventHandler.one(target, EVENT_SHOW$4, (showEvent) => {
      if (showEvent.defaultPrevented) {
        return;
      }
      EventHandler.one(target, EVENT_HIDDEN$4, () => {
        if (isVisible(this)) {
          this.focus();
        }
      });
    });
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
    if (alreadyOpen) {
      Modal.getInstance(alreadyOpen).hide();
    }
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  enableDismissTrigger(Modal);
  defineJQueryPlugin(Modal);
  const NAME$6 = "offcanvas";
  const DATA_KEY$3 = "bs.offcanvas";
  const EVENT_KEY$3 = `.${DATA_KEY$3}`;
  const DATA_API_KEY$1 = ".data-api";
  const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
  const ESCAPE_KEY = "Escape";
  const CLASS_NAME_SHOW$3 = "show";
  const CLASS_NAME_SHOWING$1 = "showing";
  const CLASS_NAME_HIDING = "hiding";
  const CLASS_NAME_BACKDROP = "offcanvas-backdrop";
  const OPEN_SELECTOR = ".offcanvas.show";
  const EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
  const EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
  const EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
  const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
  const EVENT_RESIZE = `resize${EVENT_KEY$3}`;
  const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
  const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
  const Default$5 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  const DefaultType$5 = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
  };
  class Offcanvas extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._addEventListeners();
    }
    // Getters
    static get Default() {
      return Default$5;
    }
    static get DefaultType() {
      return DefaultType$5;
    }
    static get NAME() {
      return NAME$6;
    }
    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._backdrop.show();
      if (!this._config.scroll) {
        new ScrollBarHelper().hide();
      }
      this._element.setAttribute("aria-modal", true);
      this._element.setAttribute("role", "dialog");
      this._element.classList.add(CLASS_NAME_SHOWING$1);
      const completeCallBack = () => {
        if (!this._config.scroll || this._config.backdrop) {
          this._focustrap.activate();
        }
        this._element.classList.add(CLASS_NAME_SHOW$3);
        this._element.classList.remove(CLASS_NAME_SHOWING$1);
        EventHandler.trigger(this._element, EVENT_SHOWN$3, {
          relatedTarget
        });
      };
      this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
      if (!this._isShown) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._focustrap.deactivate();
      this._element.blur();
      this._isShown = false;
      this._element.classList.add(CLASS_NAME_HIDING);
      this._backdrop.hide();
      const completeCallback = () => {
        this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
        this._element.removeAttribute("aria-modal");
        this._element.removeAttribute("role");
        if (!this._config.scroll) {
          new ScrollBarHelper().reset();
        }
        EventHandler.trigger(this._element, EVENT_HIDDEN$3);
      };
      this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    // Private
    _initializeBackDrop() {
      const clickCallback = () => {
        if (this._config.backdrop === "static") {
          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }
        this.hide();
      };
      const isVisible2 = Boolean(this._config.backdrop);
      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible: isVisible2,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible2 ? clickCallback : null
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
        if (event.key !== ESCAPE_KEY) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
      });
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = Offcanvas.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  }
  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    EventHandler.one(target, EVENT_HIDDEN$3, () => {
      if (isVisible(this)) {
        this.focus();
      }
    });
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
    }
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
    for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
      Offcanvas.getOrCreateInstance(selector).show();
    }
  });
  EventHandler.on(window, EVENT_RESIZE, () => {
    for (const element of SelectorEngine.find("[aria-modal][class*=show][class*=offcanvas-]")) {
      if (getComputedStyle(element).position !== "fixed") {
        Offcanvas.getOrCreateInstance(element).hide();
      }
    }
  });
  enableDismissTrigger(Offcanvas);
  defineJQueryPlugin(Offcanvas);
  const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  const DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    dd: [],
    div: [],
    dl: [],
    dt: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  const uriAttributes = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]);
  const SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
  const allowedAttribute = (attribute, allowedAttributeList) => {
    const attributeName = attribute.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attributeName)) {
      if (uriAttributes.has(attributeName)) {
        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
      }
      return true;
    }
    return allowedAttributeList.filter((attributeRegex) => attributeRegex instanceof RegExp).some((regex) => regex.test(attributeName));
  };
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }
    if (sanitizeFunction && typeof sanitizeFunction === "function") {
      return sanitizeFunction(unsafeHtml);
    }
    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
    const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
    for (const element of elements) {
      const elementName = element.nodeName.toLowerCase();
      if (!Object.keys(allowList).includes(elementName)) {
        element.remove();
        continue;
      }
      const attributeList = [].concat(...element.attributes);
      const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
      for (const attribute of attributeList) {
        if (!allowedAttribute(attribute, allowedAttributes)) {
          element.removeAttribute(attribute.nodeName);
        }
      }
    }
    return createdDocument.body.innerHTML;
  }
  const NAME$5 = "TemplateFactory";
  const Default$4 = {
    allowList: DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: "",
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: "<div></div>"
  };
  const DefaultType$4 = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
  };
  const DefaultContentType = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
  };
  class TemplateFactory extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
    }
    // Getters
    static get Default() {
      return Default$4;
    }
    static get DefaultType() {
      return DefaultType$4;
    }
    static get NAME() {
      return NAME$5;
    }
    // Public
    getContent() {
      return Object.values(this._config.content).map((config) => this._resolvePossibleFunction(config)).filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(content) {
      this._checkContent(content);
      this._config.content = {
        ...this._config.content,
        ...content
      };
      return this;
    }
    toHtml() {
      const templateWrapper = document.createElement("div");
      templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
      for (const [selector, text] of Object.entries(this._config.content)) {
        this._setContent(templateWrapper, text, selector);
      }
      const template = templateWrapper.children[0];
      const extraClass = this._resolvePossibleFunction(this._config.extraClass);
      if (extraClass) {
        template.classList.add(...extraClass.split(" "));
      }
      return template;
    }
    // Private
    _typeCheckConfig(config) {
      super._typeCheckConfig(config);
      this._checkContent(config.content);
    }
    _checkContent(arg) {
      for (const [selector, content] of Object.entries(arg)) {
        super._typeCheckConfig({
          selector,
          entry: content
        }, DefaultContentType);
      }
    }
    _setContent(template, content, selector) {
      const templateElement = SelectorEngine.findOne(selector, template);
      if (!templateElement) {
        return;
      }
      content = this._resolvePossibleFunction(content);
      if (!content) {
        templateElement.remove();
        return;
      }
      if (isElement(content)) {
        this._putElementInTemplate(getElement(content), templateElement);
        return;
      }
      if (this._config.html) {
        templateElement.innerHTML = this._maybeSanitize(content);
        return;
      }
      templateElement.textContent = content;
    }
    _maybeSanitize(arg) {
      return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [this]);
    }
    _putElementInTemplate(element, templateElement) {
      if (this._config.html) {
        templateElement.innerHTML = "";
        templateElement.append(element);
        return;
      }
      templateElement.textContent = element.textContent;
    }
  }
  const NAME$4 = "tooltip";
  const DISALLOWED_ATTRIBUTES = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]);
  const CLASS_NAME_FADE$2 = "fade";
  const CLASS_NAME_MODAL = "modal";
  const CLASS_NAME_SHOW$2 = "show";
  const SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
  const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
  const EVENT_MODAL_HIDE = "hide.bs.modal";
  const TRIGGER_HOVER = "hover";
  const TRIGGER_FOCUS = "focus";
  const TRIGGER_CLICK = "click";
  const TRIGGER_MANUAL = "manual";
  const EVENT_HIDE$2 = "hide";
  const EVENT_HIDDEN$2 = "hidden";
  const EVENT_SHOW$2 = "show";
  const EVENT_SHOWN$2 = "shown";
  const EVENT_INSERTED = "inserted";
  const EVENT_CLICK$1 = "click";
  const EVENT_FOCUSIN$1 = "focusin";
  const EVENT_FOCUSOUT$1 = "focusout";
  const EVENT_MOUSEENTER = "mouseenter";
  const EVENT_MOUSELEAVE = "mouseleave";
  const AttachmentMap = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: isRTL() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: isRTL() ? "right" : "left"
  };
  const Default$3 = {
    allowList: DefaultAllowlist,
    animation: true,
    boundary: "clippingParents",
    container: false,
    customClass: "",
    delay: 0,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    html: false,
    offset: [0, 6],
    placement: "top",
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus"
  };
  const DefaultType$3 = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string"
  };
  class Tooltip extends BaseComponent {
    constructor(element, config) {
      if (typeof Popper === "undefined") {
        throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      }
      super(element, config);
      this._isEnabled = true;
      this._timeout = 0;
      this._isHovered = null;
      this._activeTrigger = {};
      this._popper = null;
      this._templateFactory = null;
      this._newContent = null;
      this.tip = null;
      this._setListeners();
      if (!this._config.selector) {
        this._fixTitle();
      }
    }
    // Getters
    static get Default() {
      return Default$3;
    }
    static get DefaultType() {
      return DefaultType$3;
    }
    static get NAME() {
      return NAME$4;
    }
    // Public
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      if (!this._isEnabled) {
        return;
      }
      this._activeTrigger.click = !this._activeTrigger.click;
      if (this._isShown()) {
        this._leave();
        return;
      }
      this._enter();
    }
    dispose() {
      clearTimeout(this._timeout);
      EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
      if (this._element.getAttribute("data-bs-original-title")) {
        this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
      }
      this._disposePopper();
      super.dispose();
    }
    show() {
      if (this._element.style.display === "none") {
        throw new Error("Please use show on visible elements");
      }
      if (!(this._isWithContent() && this._isEnabled)) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
      const shadowRoot = findShadowRoot(this._element);
      const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      }
      this._disposePopper();
      const tip = this._getTipElement();
      this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
      const {
        container
      } = this._config;
      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
      }
      this._popper = this._createPopper(tip);
      tip.classList.add(CLASS_NAME_SHOW$2);
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, "mouseover", noop);
        }
      }
      const complete = () => {
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
        if (this._isHovered === false) {
          this._leave();
        }
        this._isHovered = false;
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    hide() {
      if (!this._isShown()) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
      if (hideEvent.defaultPrevented) {
        return;
      }
      const tip = this._getTipElement();
      tip.classList.remove(CLASS_NAME_SHOW$2);
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, "mouseover", noop);
        }
      }
      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      this._isHovered = null;
      const complete = () => {
        if (this._isWithActiveTrigger()) {
          return;
        }
        if (!this._isHovered) {
          this._disposePopper();
        }
        this._element.removeAttribute("aria-describedby");
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    update() {
      if (this._popper) {
        this._popper.update();
      }
    }
    // Protected
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      if (!this.tip) {
        this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
      }
      return this.tip;
    }
    _createTipElement(content) {
      const tip = this._getTemplateFactory(content).toHtml();
      if (!tip) {
        return null;
      }
      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
      tip.classList.add(`bs-${this.constructor.NAME}-auto`);
      const tipId = getUID(this.constructor.NAME).toString();
      tip.setAttribute("id", tipId);
      if (this._isAnimated()) {
        tip.classList.add(CLASS_NAME_FADE$2);
      }
      return tip;
    }
    setContent(content) {
      this._newContent = content;
      if (this._isShown()) {
        this._disposePopper();
        this.show();
      }
    }
    _getTemplateFactory(content) {
      if (this._templateFactory) {
        this._templateFactory.changeContent(content);
      } else {
        this._templateFactory = new TemplateFactory({
          ...this._config,
          // the `content` var has to be after `this._config`
          // to override config.content in case of popover
          content,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        });
      }
      return this._templateFactory;
    }
    _getContentForTemplate() {
      return {
        [SELECTOR_TOOLTIP_INNER]: this._getTitle()
      };
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    // Private
    _initializeOnDelegatedTarget(event) {
      return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
    }
    _createPopper(tip) {
      const placement = execute(this._config.placement, [this, tip, this._element]);
      const attachment = AttachmentMap[placement.toUpperCase()];
      return createPopper(this._element, tip, this._getPopperConfig(attachment));
    }
    _getOffset() {
      const {
        offset: offset2
      } = this._config;
      if (typeof offset2 === "string") {
        return offset2.split(",").map((value) => Number.parseInt(value, 10));
      }
      if (typeof offset2 === "function") {
        return (popperData) => offset2(popperData, this._element);
      }
      return offset2;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [this._element]);
    }
    _getPopperConfig(attachment) {
      const defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: "flip",
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }, {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "arrow",
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: "preSetPlacement",
          enabled: true,
          phase: "beforeMain",
          fn: (data) => {
            this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
          }
        }]
      };
      return {
        ...defaultBsPopperConfig,
        ...execute(this._config.popperConfig, [defaultBsPopperConfig])
      };
    }
    _setListeners() {
      const triggers = this._config.trigger.split(" ");
      for (const trigger of triggers) {
        if (trigger === "click") {
          EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context.toggle();
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
          EventHandler.on(this._element, eventIn, this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
            context._enter();
          });
          EventHandler.on(this._element, eventOut, this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
            context._leave();
          });
        }
      }
      this._hideModalHandler = () => {
        if (this._element) {
          this.hide();
        }
      };
      EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    }
    _fixTitle() {
      const title = this._element.getAttribute("title");
      if (!title) {
        return;
      }
      if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) {
        this._element.setAttribute("aria-label", title);
      }
      this._element.setAttribute("data-bs-original-title", title);
      this._element.removeAttribute("title");
    }
    _enter() {
      if (this._isShown() || this._isHovered) {
        this._isHovered = true;
        return;
      }
      this._isHovered = true;
      this._setTimeout(() => {
        if (this._isHovered) {
          this.show();
        }
      }, this._config.delay.show);
    }
    _leave() {
      if (this._isWithActiveTrigger()) {
        return;
      }
      this._isHovered = false;
      this._setTimeout(() => {
        if (!this._isHovered) {
          this.hide();
        }
      }, this._config.delay.hide);
    }
    _setTimeout(handler, timeout) {
      clearTimeout(this._timeout);
      this._timeout = setTimeout(handler, timeout);
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(config) {
      const dataAttributes = Manipulator.getDataAttributes(this._element);
      for (const dataAttribute of Object.keys(dataAttributes)) {
        if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
          delete dataAttributes[dataAttribute];
        }
      }
      config = {
        ...dataAttributes,
        ...typeof config === "object" && config ? config : {}
      };
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      config.container = config.container === false ? document.body : getElement(config.container);
      if (typeof config.delay === "number") {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }
      if (typeof config.title === "number") {
        config.title = config.title.toString();
      }
      if (typeof config.content === "number") {
        config.content = config.content.toString();
      }
      return config;
    }
    _getDelegateConfig() {
      const config = {};
      for (const [key, value] of Object.entries(this._config)) {
        if (this.constructor.Default[key] !== value) {
          config[key] = value;
        }
      }
      config.selector = false;
      config.trigger = "manual";
      return config;
    }
    _disposePopper() {
      if (this._popper) {
        this._popper.destroy();
        this._popper = null;
      }
      if (this.tip) {
        this.tip.remove();
        this.tip = null;
      }
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = Tooltip.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  }
  defineJQueryPlugin(Tooltip);
  const NAME$3 = "popover";
  const SELECTOR_TITLE = ".popover-header";
  const SELECTOR_CONTENT = ".popover-body";
  const Default$2 = {
    ...Tooltip.Default,
    content: "",
    offset: [0, 8],
    placement: "right",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click"
  };
  const DefaultType$2 = {
    ...Tooltip.DefaultType,
    content: "(null|string|element|function)"
  };
  class Popover extends Tooltip {
    // Getters
    static get Default() {
      return Default$2;
    }
    static get DefaultType() {
      return DefaultType$2;
    }
    static get NAME() {
      return NAME$3;
    }
    // Overrides
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    // Private
    _getContentForTemplate() {
      return {
        [SELECTOR_TITLE]: this._getTitle(),
        [SELECTOR_CONTENT]: this._getContent()
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = Popover.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  }
  defineJQueryPlugin(Popover);
  const NAME$2 = "scrollspy";
  const DATA_KEY$2 = "bs.scrollspy";
  const EVENT_KEY$2 = `.${DATA_KEY$2}`;
  const DATA_API_KEY = ".data-api";
  const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
  const EVENT_CLICK = `click${EVENT_KEY$2}`;
  const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
  const CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
  const CLASS_NAME_ACTIVE$1 = "active";
  const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  const SELECTOR_TARGET_LINKS = "[href]";
  const SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
  const SELECTOR_NAV_LINKS = ".nav-link";
  const SELECTOR_NAV_ITEMS = ".nav-item";
  const SELECTOR_LIST_ITEMS = ".list-group-item";
  const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
  const SELECTOR_DROPDOWN = ".dropdown";
  const SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle";
  const Default$1 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "0px 0px -25%",
    smoothScroll: false,
    target: null,
    threshold: [0.1, 0.5, 1]
  };
  const DefaultType$1 = {
    offset: "(number|null)",
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
  };
  class ScrollSpy extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
      this._activeTarget = null;
      this._observer = null;
      this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      };
      this.refresh();
    }
    // Getters
    static get Default() {
      return Default$1;
    }
    static get DefaultType() {
      return DefaultType$1;
    }
    static get NAME() {
      return NAME$2;
    }
    // Public
    refresh() {
      this._initializeTargetsAndObservables();
      this._maybeEnableSmoothScroll();
      if (this._observer) {
        this._observer.disconnect();
      } else {
        this._observer = this._getNewObserver();
      }
      for (const section of this._observableSections.values()) {
        this._observer.observe(section);
      }
    }
    dispose() {
      this._observer.disconnect();
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.target = getElement(config.target) || document.body;
      config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
      if (typeof config.threshold === "string") {
        config.threshold = config.threshold.split(",").map((value) => Number.parseFloat(value));
      }
      return config;
    }
    _maybeEnableSmoothScroll() {
      if (!this._config.smoothScroll) {
        return;
      }
      EventHandler.off(this._config.target, EVENT_CLICK);
      EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, (event) => {
        const observableSection = this._observableSections.get(event.target.hash);
        if (observableSection) {
          event.preventDefault();
          const root = this._rootElement || window;
          const height = observableSection.offsetTop - this._element.offsetTop;
          if (root.scrollTo) {
            root.scrollTo({
              top: height,
              behavior: "smooth"
            });
            return;
          }
          root.scrollTop = height;
        }
      });
    }
    _getNewObserver() {
      const options = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver((entries) => this._observerCallback(entries), options);
    }
    // The logic of selection
    _observerCallback(entries) {
      const targetElement = (entry) => this._targetLinks.get(`#${entry.target.id}`);
      const activate = (entry) => {
        this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
        this._process(targetElement(entry));
      };
      const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
      const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = parentScrollTop;
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          this._activeTarget = null;
          this._clearActiveClass(targetElement(entry));
          continue;
        }
        const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (userScrollsDown && entryIsLowerThanPrevious) {
          activate(entry);
          if (!parentScrollTop) {
            return;
          }
          continue;
        }
        if (!userScrollsDown && !entryIsLowerThanPrevious) {
          activate(entry);
        }
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
      for (const anchor of targetLinks) {
        if (!anchor.hash || isDisabled(anchor)) {
          continue;
        }
        const observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);
        if (isVisible(observableSection)) {
          this._targetLinks.set(decodeURI(anchor.hash), anchor);
          this._observableSections.set(anchor.hash, observableSection);
        }
      }
    }
    _process(target) {
      if (this._activeTarget === target) {
        return;
      }
      this._clearActiveClass(this._config.target);
      this._activeTarget = target;
      target.classList.add(CLASS_NAME_ACTIVE$1);
      this._activateParents(target);
      EventHandler.trigger(this._element, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    }
    _activateParents(target) {
      if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
        return;
      }
      for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
        for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
          item.classList.add(CLASS_NAME_ACTIVE$1);
        }
      }
    }
    _clearActiveClass(parent) {
      parent.classList.remove(CLASS_NAME_ACTIVE$1);
      const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
      for (const node of activeNodes) {
        node.classList.remove(CLASS_NAME_ACTIVE$1);
      }
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = ScrollSpy.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  }
  EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
    for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
      ScrollSpy.getOrCreateInstance(spy);
    }
  });
  defineJQueryPlugin(ScrollSpy);
  const NAME$1 = "tab";
  const DATA_KEY$1 = "bs.tab";
  const EVENT_KEY$1 = `.${DATA_KEY$1}`;
  const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
  const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
  const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
  const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
  const EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
  const ARROW_LEFT_KEY = "ArrowLeft";
  const ARROW_RIGHT_KEY = "ArrowRight";
  const ARROW_UP_KEY = "ArrowUp";
  const ARROW_DOWN_KEY = "ArrowDown";
  const HOME_KEY = "Home";
  const END_KEY = "End";
  const CLASS_NAME_ACTIVE = "active";
  const CLASS_NAME_FADE$1 = "fade";
  const CLASS_NAME_SHOW$1 = "show";
  const CLASS_DROPDOWN = "dropdown";
  const SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
  const SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
  const NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE})`;
  const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
  const SELECTOR_OUTER = ".nav-item, .list-group-item";
  const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
  const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
  class Tab extends BaseComponent {
    constructor(element) {
      super(element);
      this._parent = this._element.closest(SELECTOR_TAB_PANEL);
      if (!this._parent) {
        return;
      }
      this._setInitialAttributes(this._parent, this._getChildren());
      EventHandler.on(this._element, EVENT_KEYDOWN, (event) => this._keydown(event));
    }
    // Getters
    static get NAME() {
      return NAME$1;
    }
    // Public
    show() {
      const innerElem = this._element;
      if (this._elemIsActive(innerElem)) {
        return;
      }
      const active = this._getActiveElem();
      const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
        relatedTarget: innerElem
      }) : null;
      const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
        relatedTarget: active
      });
      if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
        return;
      }
      this._deactivate(active, innerElem);
      this._activate(innerElem, active);
    }
    // Private
    _activate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.add(CLASS_NAME_ACTIVE);
      this._activate(SelectorEngine.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.add(CLASS_NAME_SHOW$1);
          return;
        }
        element.removeAttribute("tabindex");
        element.setAttribute("aria-selected", true);
        this._toggleDropDown(element, true);
        EventHandler.trigger(element, EVENT_SHOWN$1, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _deactivate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.remove(CLASS_NAME_ACTIVE);
      element.blur();
      this._deactivate(SelectorEngine.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.remove(CLASS_NAME_SHOW$1);
          return;
        }
        element.setAttribute("aria-selected", false);
        element.setAttribute("tabindex", "-1");
        this._toggleDropDown(element, false);
        EventHandler.trigger(element, EVENT_HIDDEN$1, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _keydown(event) {
      if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, HOME_KEY, END_KEY].includes(event.key)) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      const children = this._getChildren().filter((element) => !isDisabled(element));
      let nextActiveElement;
      if ([HOME_KEY, END_KEY].includes(event.key)) {
        nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
      } else {
        const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
        nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
      }
      if (nextActiveElement) {
        nextActiveElement.focus({
          preventScroll: true
        });
        Tab.getOrCreateInstance(nextActiveElement).show();
      }
    }
    _getChildren() {
      return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((child) => this._elemIsActive(child)) || null;
    }
    _setInitialAttributes(parent, children) {
      this._setAttributeIfNotExists(parent, "role", "tablist");
      for (const child of children) {
        this._setInitialAttributesOnChild(child);
      }
    }
    _setInitialAttributesOnChild(child) {
      child = this._getInnerElement(child);
      const isActive = this._elemIsActive(child);
      const outerElem = this._getOuterElement(child);
      child.setAttribute("aria-selected", isActive);
      if (outerElem !== child) {
        this._setAttributeIfNotExists(outerElem, "role", "presentation");
      }
      if (!isActive) {
        child.setAttribute("tabindex", "-1");
      }
      this._setAttributeIfNotExists(child, "role", "tab");
      this._setInitialAttributesOnTargetPanel(child);
    }
    _setInitialAttributesOnTargetPanel(child) {
      const target = SelectorEngine.getElementFromSelector(child);
      if (!target) {
        return;
      }
      this._setAttributeIfNotExists(target, "role", "tabpanel");
      if (child.id) {
        this._setAttributeIfNotExists(target, "aria-labelledby", `${child.id}`);
      }
    }
    _toggleDropDown(element, open) {
      const outerElem = this._getOuterElement(element);
      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
        return;
      }
      const toggle = (selector, className) => {
        const element2 = SelectorEngine.findOne(selector, outerElem);
        if (element2) {
          element2.classList.toggle(className, open);
        }
      };
      toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
      outerElem.setAttribute("aria-expanded", open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
      if (!element.hasAttribute(attribute)) {
        element.setAttribute(attribute, value);
      }
    }
    _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE);
    }
    // Try to get the inner element (usually the .nav-link)
    _getInnerElement(elem) {
      return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
    }
    // Try to get the outer element (usually the .nav-item)
    _getOuterElement(elem) {
      return elem.closest(SELECTOR_OUTER) || elem;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = Tab.getOrCreateInstance(this);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  }
  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    Tab.getOrCreateInstance(this).show();
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
      Tab.getOrCreateInstance(element);
    }
  });
  defineJQueryPlugin(Tab);
  const NAME = "toast";
  const DATA_KEY = "bs.toast";
  const EVENT_KEY = `.${DATA_KEY}`;
  const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
  const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
  const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const CLASS_NAME_FADE = "fade";
  const CLASS_NAME_HIDE = "hide";
  const CLASS_NAME_SHOW = "show";
  const CLASS_NAME_SHOWING = "showing";
  const DefaultType = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  };
  const Default = {
    animation: true,
    autohide: true,
    delay: 5e3
  };
  class Toast extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._timeout = null;
      this._hasMouseInteraction = false;
      this._hasKeyboardInteraction = false;
      this._setListeners();
    }
    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }
    // Public
    show() {
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._clearTimeout();
      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }
      const complete = () => {
        this._element.classList.remove(CLASS_NAME_SHOWING);
        EventHandler.trigger(this._element, EVENT_SHOWN);
        this._maybeScheduleHide();
      };
      this._element.classList.remove(CLASS_NAME_HIDE);
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
    hide() {
      if (!this.isShown()) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const complete = () => {
        this._element.classList.add(CLASS_NAME_HIDE);
        this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
        EventHandler.trigger(this._element, EVENT_HIDDEN);
      };
      this._element.classList.add(CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
    dispose() {
      this._clearTimeout();
      if (this.isShown()) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }
      super.dispose();
    }
    isShown() {
      return this._element.classList.contains(CLASS_NAME_SHOW);
    }
    // Private
    _maybeScheduleHide() {
      if (!this._config.autohide) {
        return;
      }
      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
        return;
      }
      this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay);
    }
    _onInteraction(event, isInteracting) {
      switch (event.type) {
        case "mouseover":
        case "mouseout": {
          this._hasMouseInteraction = isInteracting;
          break;
        }
        case "focusin":
        case "focusout": {
          this._hasKeyboardInteraction = isInteracting;
          break;
        }
      }
      if (isInteracting) {
        this._clearTimeout();
        return;
      }
      const nextElement = event.relatedTarget;
      if (this._element === nextElement || this._element.contains(nextElement)) {
        return;
      }
      this._maybeScheduleHide();
    }
    _setListeners() {
      EventHandler.on(this._element, EVENT_MOUSEOVER, (event) => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_MOUSEOUT, (event) => this._onInteraction(event, false));
      EventHandler.on(this._element, EVENT_FOCUSIN, (event) => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_FOCUSOUT, (event) => this._onInteraction(event, false));
    }
    _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = Toast.getOrCreateInstance(this, config);
        if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config](this);
        }
      });
    }
  }
  enableDismissTrigger(Toast);
  defineJQueryPlugin(Toast);
  const array = [];
  const characterCodeCache = [];
  function leven(first, second) {
    if (first === second) {
      return 0;
    }
    const swap = first;
    if (first.length > second.length) {
      first = second;
      second = swap;
    }
    let firstLength = first.length;
    let secondLength = second.length;
    while (firstLength > 0 && first.charCodeAt(~-firstLength) === second.charCodeAt(~-secondLength)) {
      firstLength--;
      secondLength--;
    }
    let start2 = 0;
    while (start2 < firstLength && first.charCodeAt(start2) === second.charCodeAt(start2)) {
      start2++;
    }
    firstLength -= start2;
    secondLength -= start2;
    if (firstLength === 0) {
      return secondLength;
    }
    let bCharacterCode;
    let result;
    let temporary;
    let temporary2;
    let index = 0;
    let index2 = 0;
    while (index < firstLength) {
      characterCodeCache[index] = first.charCodeAt(start2 + index);
      array[index] = ++index;
    }
    while (index2 < secondLength) {
      bCharacterCode = second.charCodeAt(start2 + index2);
      temporary = index2++;
      result = index2;
      for (index = 0; index < firstLength; index++) {
        temporary2 = bCharacterCode === characterCodeCache[index] ? temporary : temporary + 1;
        temporary = array[index];
        result = array[index] = temporary > result ? temporary2 > result ? result + 1 : temporary2 : temporary2 > temporary ? temporary + 1 : temporary2;
      }
    }
    return result;
  }
  const familySort = (a, b, key) => {
    if (key === "name") return a.name.localeCompare(b.name);
    if (key === "popularity") {
      if (a.popularity === void 0 && b.popularity === void 0) return 0;
      if (a.popularity === void 0) return Infinity;
      if (b.popularity === void 0) return -Infinity;
      return a.popularity - b.popularity;
    }
    if (a.metrics === void 0 && b.metrics === void 0) return 0;
    if (a.metrics === void 0) return Infinity;
    if (b.metrics === void 0) return -Infinity;
    if (key === "complexity") return b.metrics.complexity - a.metrics.complexity;
    if (key === "curvature") return b.metrics.curvature - a.metrics.curvature;
    if (key === "thickness") return b.metrics.thickness - a.metrics.thickness;
    if (key === "width") return b.metrics.width - a.metrics.width;
    return 0;
  };
  const compareMetric = (value, target) => {
    if (target === "all") return true;
    if (value === void 0) return false;
    return value === parseFloat(target);
  };
  const familyFilter = (a, filters) => {
    var _a, _b, _c, _d;
    if (filters.name) {
      const difference = leven(a.name.toLowerCase(), filters.name.toLowerCase());
      const threshold = [...a.name].length - [...filters.name].length;
      if (difference > threshold) return false;
    }
    if (a.subsets && filters.subset !== "all" && !a.subsets.includes(filters.subset)) return false;
    if (a.category && !filters.categories.includes(a.category)) return false;
    if (!compareMetric((_a = a.metrics) == null ? void 0 : _a.width, filters.width)) return false;
    if (!compareMetric((_b = a.metrics) == null ? void 0 : _b.complexity, filters.complexity)) return false;
    if (!compareMetric((_c = a.metrics) == null ? void 0 : _c.curvature, filters.curvature)) return false;
    if (!compareMetric((_d = a.metrics) == null ? void 0 : _d.thickness, filters.thickness)) return false;
    return true;
  };
  const _Font = class _Font {
    constructor(family, weight, italic) {
      __publicField(this, "family");
      __publicField(this, "weight");
      __publicField(this, "italic");
      this.family = family;
      this.weight = weight;
      this.italic = italic;
    }
    get style() {
      return this.italic ? "italic" : "normal";
    }
    get variant() {
      return this.weight + (this.italic ? "i" : "");
    }
    toId() {
      return `${this.family}:${this.variant}`;
    }
    toString() {
      if (this.family.getDefaultVariant() === this.variant) return this.family.name;
      const entries = [this.family.name];
      entries.push(_Font.weightNames[this.weight]);
      if (this.italic) entries.push("Italic");
      entries.push(`(${this.variant})`);
      return entries.join(" ");
    }
    static parse(family, variant = family.getDefaultVariant()) {
      const weight = parseInt(variant);
      const italic = variant.endsWith("i");
      return new _Font(family, weight, italic);
    }
  };
  __publicField(_Font, "weightNames", {
    100: "Thin",
    200: "Extra Light",
    300: "Light",
    400: "Normal",
    500: "Medium",
    600: "Semi Bold",
    700: "Bold",
    800: "Extra Bold",
    900: "Black"
  });
  let Font = _Font;
  class FontFamily {
    constructor(family) {
      Object.assign(this, family);
    }
    toString() {
      return this.name;
    }
    getDefaultVariant() {
      const weights = Array.from(new Set(this.variants));
      return weights.toSorted((a, b) => {
        return Math.abs(parseInt(a) - 400) - Math.abs(parseInt(b) - 400);
      })[0];
    }
    // parse font family from compressed format
    static parse(raw) {
      const [name, cate, vari, subs, popu, thic, widt, comp, curv] = raw.split("/");
      const family = new FontFamily({
        name,
        category: cate,
        variants: vari.split(","),
        subsets: subs.split(",")
      });
      if (popu) family.popularity = parseInt(popu);
      if (thic && widt && comp && curv)
        family.metrics = {
          thickness: parseFloat(thic),
          width: parseFloat(widt),
          complexity: parseFloat(comp),
          curvature: parseFloat(curv)
        };
      return family;
    }
  }
  const _googleFonts = "Roboto/sans-serif/100,100i,300,300i,400,400i,500,500i,700,700i,900,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/1/3/1/4/0|Open Sans/sans-serif/300,400,500,600,700,800,300i,400i,500i,600i,700i,800i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,math,symbols,vietnamese/2/1/2/0/2|Noto Sans JP/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic,japanese,latin,latin-ext,vietnamese/3/2/2/0/2|Montserrat/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/4/1/3/0/2|Poppins/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext/5/2/3/4/2|Lato/sans-serif/100,100i,300,300i,400,400i,700,700i,900,900i/latin,latin-ext/6/3/1/1/3|Inter/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/7/2/3/0/2|Roboto Condensed/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/9/3/0/1/3|Roboto Mono/monospace/100,200,300,400,500,600,700,100i,200i,300i,400i,500i,600i,700i/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/10/1/4/1/2|Oswald/sans-serif/200,300,400,500,600,700/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/11/4/0/0/2|Noto Sans/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,devanagari,greek,greek-ext,latin,latin-ext,vietnamese/12/2/2/0/2|Raleway/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/13/1/2/0/3|Nunito/sans-serif/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/14/1/2/1/3|Nunito Sans/sans-serif/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/15/1/2/4/1|Ubuntu/sans-serif/300,300i,400,400i,500,500i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext/16/3/2/0/3|Rubik/sans-serif/300,400,500,600,700,800,900,300i,400i,500i,600i,700i,800i,900i/arabic,cyrillic,cyrillic-ext,hebrew,latin,latin-ext/17/3/2/1/3|Playfair Display/serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/cyrillic,latin,latin-ext,vietnamese/18/1/2/2/3|Noto Sans KR/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic,korean,latin,latin-ext,vietnamese/19/2/2/0/2|Roboto Slab/serif/100,200,300,400,500,600,700,800,900/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/20/3/3/0/0|Merriweather/serif/300,300i,400,400i,700,700i,900,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/21/3/3/0/0|PT Sans/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext/22/2/1/0/2|Kanit/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,thai,vietnamese/23/4/1/4/1|Work Sans/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/24/1/3/0/2|Lora/serif/400,500,600,700,400i,500i,600i,700i/cyrillic,cyrillic-ext,latin,latin-ext,math,symbols,vietnamese/25/1/3/2/3|DM Sans/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext/26/2/2/0/2|Quicksand/sans-serif/300,400,500,600,700/latin,latin-ext,vietnamese/27/0/2/1/3|Mulish/sans-serif/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/28/1/2/4/1|Noto Sans TC/sans-serif/100,200,300,400,500,600,700,800,900/chinese-traditional,cyrillic,latin,latin-ext,vietnamese/29/2/2/0/2|Fira Sans/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/30/3/1/4/1|Inconsolata/monospace/200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/31/1/2/0/3|Barlow/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,vietnamese/32/1/1/1/1|Manrope/sans-serif/200,300,400,500,600,700,800/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/33/1/1/0/2|IBM Plex Sans/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/34/2/1/0/2|PT Serif/serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext/36/3/1/1/2|Heebo/sans-serif/100,200,300,400,500,600,700,800,900/hebrew,latin,latin-ext,math,symbols/38/3/1/0/2|Titillium Web/sans-serif/200,200i,300,300i,400,400i,600,600i,700,700i,900/latin,latin-ext/39/2/1/3/0|Karla/sans-serif/200,300,400,500,600,700,800,200i,300i,400i,500i,600i,700i,800i/latin,latin-ext/40/1/1/0/2|Noto Serif/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/41/3/3/1/2|Nanum Gothic/sans-serif/400,700,800/korean,latin/42/1/2/1/2|Bebas Neue/sans-serif/400/latin,latin-ext/43/4/4/3/0|Noto Color Emoji/sans-serif/400/emoji/44/0/4/3/0|Libre Franklin/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/46/2/2/1/2|Outfit/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext/47/3/1/0/2|Josefin Sans/sans-serif/100,200,300,400,500,600,700,100i,200i,300i,400i,500i,600i,700i/latin,latin-ext,vietnamese/48/1/2/4/2|Libre Baskerville/serif/400,400i,700/latin,latin-ext/49/1/4/2/3|Hind Siliguri/sans-serif/300,400,500,600,700/bengali,latin,latin-ext/50/2/1/3/0|Source Code Pro/monospace/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/51/0/4/0/2|Mukta/sans-serif/200,300,400,500,600,700,800/devanagari,latin,latin-ext/52/3/0/0/2|Jost/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,latin,latin-ext/53/1/1/0/2|Archivo/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/54/3/1/0/3|Space Grotesk/sans-serif/300,400,500,600,700/latin,latin-ext,vietnamese/55/1/3/4/0|Dancing Script/handwriting/400,500,600,700/latin,latin-ext,vietnamese/56/0/0/2/4|EB Garamond/serif/400,500,600,700,800,400i,500i,600i,700i,800i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/57/1/0/3/4|Arimo/sans-serif/400,500,600,700,400i,500i,600i,700i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese/58/3/2/4/1|Fira Sans Condensed/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/59/3/0/3/0|Dosis/sans-serif/200,300,400,500,600,700,800/latin,latin-ext,vietnamese/60/1/0/1/3|Cabin/sans-serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext,vietnamese/61/3/1/4/2|Anton/sans-serif/400/latin,latin-ext,vietnamese/62/4/0/4/0|Bitter/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/63/2/2/1/0|Noto Sans SC/sans-serif/100,200,300,400,500,600,700,800,900/chinese-simplified,cyrillic,latin,latin-ext,vietnamese/64/2/2/0/2|Barlow Condensed/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,vietnamese/65/3/0/1/1|Abel/sans-serif/400/latin/66/1/0/1/2|Crimson Text/serif/400,400i,600,600i,700,700i/latin,latin-ext,vietnamese/67/1/0/2/3|PT Sans Narrow/sans-serif/400,700/cyrillic,cyrillic-ext,latin,latin-ext/68/3/0/0/2|Source Sans 3/sans-serif/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/69/2/1/0/2|Figtree/sans-serif/300,400,500,600,700,800,900,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext/70/3/1/0/2|Noto Serif JP/serif/200,300,400,500,600,700,800,900/cyrillic,japanese,latin,latin-ext,vietnamese/71/0/3/2/0|Teko/sans-serif/300,400,500,600,700/devanagari,latin,latin-ext/73/4/4/0/0|Exo 2/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/74/3/1/0/2|Cairo/sans-serif/200,300,400,500,600,700,800,900/arabic,latin,latin-ext/75/2/1/0/2|Hind/sans-serif/300,400,500,600,700/devanagari,latin,latin-ext/76/2/1/3/0|Oxygen/sans-serif/300,400,700/latin,latin-ext/77/2/1/4/2|Public Sans/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/78/3/2/0/2|Assistant/sans-serif/200,300,400,500,600,700,800/hebrew,latin,latin-ext/79/1/0/0/2|Overpass/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/80/3/1/4/2|Plus Jakarta Sans/sans-serif/200,300,400,500,600,700,800,200i,300i,400i,500i,600i,700i,800i/cyrillic-ext,latin,latin-ext,vietnamese/81/2/2/4/2|Varela Round/sans-serif/400/hebrew,latin,latin-ext,vietnamese/82/2/3/1/3|Prompt/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,thai,vietnamese/83/3/3/4/1|Pacifico/handwriting/400/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/84/3/1/2/3|Red Hat Display/sans-serif/300,400,500,600,700,800,900,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext/85/1/1/4/2|Signika Negative/sans-serif/300,400,500,600,700/latin,latin-ext,vietnamese/87/3/1/1/3|Arvo/serif/400,400i,700,700i/latin/88/3/3/1/1|Comfortaa/display/300,400,500,600,700/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/89/1/3/1/3|Lexend/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/90/3/3/0/2|M PLUS Rounded 1c/sans-serif/100,300,400,500,700,800,900/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,japanese,latin,latin-ext,vietnamese/91/1/2/0/3|Fjalla One/sans-serif/400/cyrillic-ext,latin,latin-ext,vietnamese/92/4/0/0/1|IBM Plex Mono/monospace/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/93/0/4/0/1|Caveat/handwriting/400,500,600,700/cyrillic,cyrillic-ext,latin,latin-ext/94/1/0/3/4|Lobster/display/400/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/95/4/0/1/3|Chakra Petch/sans-serif/300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,thai,vietnamese/96/2/1/3/0|Cormorant Garamond/serif/300,300i,400,400i,500,500i,600,600i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/97/0/0/2/3|Maven Pro/sans-serif/400,500,600,700,800,900/latin,latin-ext,vietnamese/98/1/2/4/2|Archivo Black/sans-serif/400/latin,latin-ext/99/4/4/4/0|Schibsted Grotesk/sans-serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/latin,latin-ext/100/2/3/0/2|Noto Sans Arabic/sans-serif/100,200,300,400,500,600,700,800,900/arabic/101/0/3/3/0|Lilita One/display/400/latin,latin-ext/102/4/1/4/2|Zilla Slab/serif/300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext/104/3/1/0/0|Rajdhani/sans-serif/300,400,500,600,700/devanagari,latin,latin-ext/105/0/0/1/0|Sora/sans-serif/100,200,300,400,500,600,700,800/latin,latin-ext/106/3/3/0/1|Asap/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/107/3/1/1/3|Noto Sans HK/sans-serif/100,200,300,400,500,600,700,800,900/chinese-hongkong,cyrillic,latin,latin-ext,vietnamese/108/2/2/0/2|Barlow Semi Condensed/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,vietnamese/109/2/0/1/1|Shadows Into Light/handwriting/400/latin/110/0/0/2/4|Slabo 27px/serif/400/latin,latin-ext/111/3/0/0/0|Satisfy/handwriting/400/latin/112/1/0/3/4|Nanum Myeongjo/serif/400,700,800/korean,latin/113/0/2/2/3|Merriweather Sans/sans-serif/300,400,500,600,700,800,300i,400i,500i,600i,700i,800i/cyrillic-ext,latin,latin-ext,vietnamese/114/3/2/0/2|Permanent Marker/handwriting/400/latin/115/4/3/3/4|Abril Fatface/display/400/latin,latin-ext/116/4/2/0/0|Tajawal/sans-serif/200,300,400,500,700,800,900/arabic,latin/117/1/0/4/0|Roboto Flex/sans-serif/400/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/118/3/1/4/0|Nanum Gothic Coding/handwriting/400,700/korean,latin/119/1/2/1/1|Saira Condensed/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/120/3/0/4/2|IBM Plex Sans Arabic/sans-serif/100,200,300,400,500,600,700/arabic,cyrillic-ext,latin,latin-ext/121/2/1/0/2|Rowdies/display/300,400,700/latin,latin-ext,vietnamese/122/4/3/4/0|DM Serif Display/serif/400,400i/latin,latin-ext/123/4/1/1/1|Questrial/sans-serif/400/latin,latin-ext,vietnamese/124/3/1/4/2|Play/sans-serif/400,700/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/125/3/1/4/0|IBM Plex Serif/serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/126/1/2/1/1|Inter Tight/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/127/3/1/0/2|Urbanist/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext/128/1/1/4/3|Almarai/sans-serif/300,400,700,800/arabic,latin/129/3/1/4/0|Domine/serif/400,500,600,700/latin,latin-ext/130/3/3/1/0|Indie Flower/handwriting/400/latin/131/0/1/2/4|Asap Condensed/sans-serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,vietnamese/132/4/0/1/2|M PLUS 1p/sans-serif/100,300,400,500,700,800,900/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,japanese,latin,latin-ext,vietnamese/133/1/3/3/0|Spicy Rice/display/400/latin/134/4/0/2/4|Cinzel/serif/400,500,600,700,800,900/latin,latin-ext/135/0/3/3/0|Catamaran/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,tamil/136/2/1/4/2|Source Serif 4/serif/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/137/2/3/2/1|Alegreya/serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/138/1/0/2/3|Signika/sans-serif/300,400,500,600,700/latin,latin-ext,vietnamese/139/3/1/1/3|Oxanium/display/200,300,400,500,600,700,800/latin,latin-ext/140/1/2/3/0|Exo/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/141/1/2/0/2|Noto Sans Thai/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,thai/142/2/2/0/2|Vollkorn/serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/143/3/1/2/4|Archivo Narrow/sans-serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext,vietnamese/144/4/0/4/1|Frank Ruhl Libre/serif/300,400,500,600,700,800,900/hebrew,latin,latin-ext/145/2/1/2/2|Sarabun/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i/latin,latin-ext,thai,vietnamese/146/2/1/4/1|Hind Madurai/sans-serif/300,400,500,600,700/latin,latin-ext,tamil/147/2/1/3/0|Noto Kufi Arabic/sans-serif/100,200,300,400,500,600,700,800,900/arabic,latin,latin-ext,math,symbols/148/1/3/0/2|Concert One/display/400/latin,latin-ext/149/4/1/2/4|Marcellus/serif/400/latin,latin-ext/150/1/2/2/4|Cormorant/serif/300,400,500,600,700,300i,400i,500i,600i,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/151/0/0/2/3|Bree Serif/serif/400/latin,latin-ext/152/4/1/0/0|Acme/sans-serif/400/latin/153/4/0/4/0|Great Vibes/handwriting/400/cyrillic,cyrillic-ext,greek-ext,latin,latin-ext,vietnamese/154/0/0/3/4|Be Vietnam Pro/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,vietnamese/155/3/3/0/3|Mate/serif/400,400i/latin,latin-ext/156/1/1/1/2|Amatic SC/handwriting/400,700/cyrillic,hebrew,latin,latin-ext,vietnamese/157/0/4/2/1|Passion One/display/400,700,900/latin,latin-ext/158/4/0/3/0|ABeeZee/sans-serif/400,400i/latin,latin-ext/159/2/2/4/2|Noto Sans Display/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/160/3/1/0/2|Changa/sans-serif/200,300,400,500,600,700,800/arabic,latin,latin-ext/161/3/1/4/1|Lexend Deca/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/162/3/3/0/2|Orbitron/sans-serif/400,500,600,700,800,900/latin/163/2/4/4/0|Righteous/display/400/latin,latin-ext/164/4/2/0/3|Spectral/serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i/cyrillic,latin,latin-ext,vietnamese/165/1/2/0/0|Alfa Slab One/display/400/latin,latin-ext,vietnamese/166/4/4/0/0|Yanone Kaffeesatz/sans-serif/200,300,400,500,600,700/cyrillic,cyrillic-ext,latin,latin-ext,math,symbols,vietnamese/167/4/4/1/4|Tinos/serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese/168/2/1/0/0|Montserrat Alternates/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/169/1/3/4/2|League Spartan/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/170/3/0/0/3|Oleo Script/display/400,700/latin,latin-ext/171/4/0/1/3|Albert Sans/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext/172/1/2/4/2|Chivo/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/173/3/2/0/2|Antic Slab/serif/400/latin/174/1/1/0/0|Rubik Mono One/sans-serif/400/cyrillic,latin,latin-ext/175/4/4/0/1|Alegreya Sans/sans-serif/100,100i,300,300i,400,400i,500,500i,700,700i,800,800i,900,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/176/2/0/0/0|Prata/serif/400/cyrillic,cyrillic-ext,latin,vietnamese/177/1/3/0/0|Noto Sans Bengali/sans-serif/100,200,300,400,500,600,700,800,900/bengali,latin,latin-ext/178/2/2/0/2|Kalam/handwriting/300,400,700/devanagari,latin,latin-ext/179/1/1/1/4|Saira/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/180/2/2/0/3|Encode Sans/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/181/1/1/4/2|Noto Serif KR/serif/200,300,400,500,600,700,800,900/cyrillic,korean,latin,latin-ext,vietnamese/182/0/3/2/0|Amiri/serif/400,400i,700,700i/arabic,latin,latin-ext/183/1/1/3/4|Patua One/display/400/latin/184/4/1/0/0|Gothic A1/sans-serif/100,200,300,400,500,600,700,800,900/korean,latin/185/1/1/4/1|Pirata One/display/400/latin,latin-ext/186/4/0/1/1|Roboto Serif/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/187/2/3/2/2|Cardo/serif/400,400i,700/greek,greek-ext,latin,latin-ext/188/0/2/2/3|Bowlby One/display/400/latin/189/4/4/2/0|Noto Serif TC/serif/200,300,400,500,600,700,800,900/chinese-traditional,cyrillic,latin,latin-ext,vietnamese/190/0/3/2/0|Courgette/handwriting/400/latin,latin-ext/191/3/1/2/3|Squada One/display/400/latin/192/4/0/4/0|Crimson Pro/serif/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/193/2/0/1/1|PT Sans Caption/sans-serif/400,700/cyrillic,cyrillic-ext,latin,latin-ext/194/3/3/0/3|Mate SC/serif/400/latin,latin-ext/195/1/1/1/1|Ubuntu Mono/monospace/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext/196/1/2/0/3|Crete Round/serif/400,400i/latin,latin-ext/197/4/1/1/0|Alata/sans-serif/400/latin,latin-ext,vietnamese/198/3/1/4/2|Merienda/handwriting/300,400,500,600,700,800,900/latin,latin-ext,vietnamese/199/1/3/2/4|Silkscreen/display/400,700/latin,latin-ext/200/1/4/3/0|Didact Gothic/sans-serif/400/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext/201/1/1/4/2|Dela Gothic One/display/400/cyrillic,greek,japanese,latin,latin-ext,vietnamese/202/4/4/0/2|Lobster Two/display/400,400i,700,700i/latin/203/4/0/2/4|Martel/serif/200,300,400,600,700,800,900/devanagari,latin,latin-ext/204/1/3/0/0|Ubuntu Condensed/sans-serif/400/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext/205/3/0/0/3|Baloo Paaji 2/display/400,500,600,700,800/gurmukhi,latin,latin-ext,vietnamese/206/2/1/1/3|Yatra One/display/400/devanagari,latin,latin-ext/207/3/3/0/2|Sawarabi Mincho/serif/400/japanese,latin,latin-ext/208/2/3/1/0|Titan One/display/400/latin,latin-ext/209/4/3/1/3|Zen Kaku Gothic New/sans-serif/300,400,500,700,900/cyrillic,japanese,latin,latin-ext/210/0/1/4/2|Kaushan Script/handwriting/400/latin,latin-ext/211/2/0/2/4|Atkinson Hyperlegible/sans-serif/400,400i,700,700i/latin,latin-ext/212/3/1/4/2|Russo One/sans-serif/400/cyrillic,latin,latin-ext/213/4/3/4/0|Red Hat Text/sans-serif/300,400,500,600,700,300i,400i,500i,600i,700i/latin,latin-ext/214/1/2/4/2|Cantarell/sans-serif/400,400i,700,700i/latin,latin-ext/215/1/2/4/2|Francois One/sans-serif/400/latin,latin-ext,vietnamese/216/4/0/4/1|Space Mono/monospace/400,400i,700,700i/latin,latin-ext,vietnamese/217/1/4/0/1|Luckiest Guy/display/400/latin/218/4/3/1/4|Gloria Hallelujah/handwriting/400/latin/219/0/3/2/-1|Itim/handwriting/400/latin,latin-ext,thai,vietnamese/220/3/1/2/3|Philosopher/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/221/2/1/0/2|Yellowtail/handwriting/400/latin/222/4/0/2/4|Yantramanav/sans-serif/100,300,400,500,700,900/devanagari,latin,latin-ext/223/3/0/3/0|Eczar/serif/400,500,600,700,800/devanagari,greek,greek-ext,latin,latin-ext/224/3/1/2/1|Bodoni Moda/serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/latin,latin-ext,math,symbols/225/0/2/1/2|Sacramento/handwriting/400/latin,latin-ext/226/0/0/3/4|Creepster/display/400/latin/227/4/0/3/4|Bangers/display/400/latin,latin-ext,vietnamese/228/4/0/1/3|Paytone One/sans-serif/400/latin,latin-ext,vietnamese/229/4/3/4/1|Libre Caslon Text/serif/400,400i,700/latin,latin-ext/230/1/3/1/1|Noticia Text/serif/400,400i,700,700i/latin,latin-ext,vietnamese/231/3/2/0/0|Readex Pro/sans-serif/200,300,400,500,600,700/arabic,latin,latin-ext,vietnamese/232/3/3/0/2|Rubik Bubbles/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/233/4/3/3/4|Neucha/handwriting/400/cyrillic,latin/234/1/0/1/3|Old Standard TT/serif/400,400i,700/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/235/1/2/1/1|Rokkitt/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/236/3/1/0/0|Inria Sans/sans-serif/300,300i,400,400i,700,700i/latin,latin-ext/237/2/1/4/0|JetBrains Mono/monospace/100,200,300,400,500,600,700,800,100i,200i,300i,400i,500i,600i,700i,800i/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/238/1/4/-1/0|Quattrocento/serif/400,700/latin,latin-ext/239/0/2/3/3|Bungee/display/400/latin,latin-ext,vietnamese/240/4/4/1/0|DM Serif Text/serif/400,400i/latin,latin-ext/241/4/1/1/1|Yeseva One/display/400/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/242/4/3/1/0|Sanchez/serif/400,400i/latin,latin-ext/243/3/3/1/0|Sawarabi Gothic/sans-serif/400/cyrillic,japanese,latin,latin-ext,vietnamese/244/3/2/4/0|Zeyada/handwriting/400/latin/245/0/0/3/4|Unna/serif/400,400i,700,700i/latin,latin-ext/246/1/0/1/0|Neuton/serif/200,300,400,400i,700,800/latin,latin-ext/247/4/0/1/0|Josefin Slab/serif/100,200,300,400,500,600,700,100i,200i,300i,400i,500i,600i,700i/latin/248/0/1/1/1|Allura/handwriting/400/latin,latin-ext,vietnamese/250/0/0/3/4|Sofia/handwriting/400/latin/251/0/2/2/3|Khand/sans-serif/300,400,500,600,700/devanagari,latin,latin-ext/252/3/0/3/0|Commissioner/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/253/2/2/1/3|Cookie/handwriting/400/latin/254/2/4/2/4|Encode Sans Condensed/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/255/2/0/4/1|Courier Prime/monospace/400,400i,700,700i/latin,latin-ext/256/1/4/2/3|Quattrocento Sans/sans-serif/400,400i,700,700i/latin,latin-ext/257/1/1/0/3|Sen/sans-serif/400,500,600,700,800/latin,latin-ext/258/1/3/0/2|Poiret One/display/400/cyrillic,latin,latin-ext/259/0/1/3/2|Gruppo/sans-serif/400/latin,latin-ext/260/0/2/1/3|Zen Maru Gothic/sans-serif/300,400,500,700,900/cyrillic,greek,japanese,latin,latin-ext/261/0/1/0/2|Tenor Sans/sans-serif/400/cyrillic,latin,latin-ext/262/1/3/0/3|Gelasio/serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext,vietnamese/263/3/2/2/3|Comic Neue/handwriting/300,300i,400,400i,700,700i/latin/264/1/1/1/3|Architects Daughter/handwriting/400/latin/265/0/3/1/3|Taviraj/serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,thai,vietnamese/266/1/2/1/0|Patrick Hand/handwriting/400/latin,latin-ext,vietnamese/267/2/0/1/3|Pathway Gothic One/sans-serif/400/latin,latin-ext/268/4/4/4/0|Tangerine/handwriting/400,700/latin/269/0/4/2/4|Literata/serif/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/270/3/3/2/2|IBM Plex Sans Condensed/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/cyrillic-ext,latin,latin-ext,vietnamese/271/2/0/4/1|Gilda Display/serif/400/latin,latin-ext/272/0/2/2/3|News Cycle/sans-serif/400,700/latin,latin-ext/273/1/0/4/2|Kumbh Sans/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,math,symbols/274/1/2/4/2|Krub/sans-serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,thai,vietnamese/275/1/2/0/2|Special Elite/display/400/latin/276/3/3/4/4|Macondo/display/400/latin/277/1/1/1/4|PT Mono/monospace/400/cyrillic,cyrillic-ext,latin,latin-ext/278/1/4/0/2|Onest/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic,cyrillic-ext,latin,latin-ext/279/3/3/0/3|DM Mono/monospace/300,300i,400,400i,500,500i/latin,latin-ext/280/1/4/4/1|Geologica/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/281/3/3/0/2|Advent Pro/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext/282/1/0/0/3|Fraunces/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/283/3/3/2/3|Aleo/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/284/3/2/2/0|Cuprum/sans-serif/400,500,600,700,400i,500i,600i,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/285/3/0/4/2|Staatliches/display/400/latin,latin-ext/286/4/0/0/0|El Messiri/sans-serif/400,500,600,700/arabic,cyrillic,latin,latin-ext/287/2/1/0/2|Noto Naskh Arabic/serif/400,500,600,700/arabic,latin,latin-ext,math,symbols/288/3/3/1/1|Fugaz One/display/400/latin/289/4/3/0/0|Syne/sans-serif/400,500,600,700,800/greek,latin,latin-ext/290/3/1/0/3|Baskervville/serif/400,400i/latin,latin-ext/291/0/2/2/2|Faustina/serif/300,400,500,600,700,800,300i,400i,500i,600i,700i,800i/latin,latin-ext,vietnamese/292/3/1/1/0|Epilogue/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/293/2/3/0/3|Playfair Display SC/serif/400,400i,700,700i,900,900i/cyrillic,latin,latin-ext,vietnamese/294/1/3/2/2|Parisienne/handwriting/400/latin,latin-ext/295/0/1/3/4|STIX Two Text/serif/400,500,600,700,400i,500i,600i,700i/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/296/2/1/1/2|Jura/sans-serif/300,400,500,600,700/cyrillic,cyrillic-ext,greek,greek-ext,kayah-li,latin,latin-ext,vietnamese/298/0/2/1/1|Unbounded/sans-serif/200,300,400,500,600,700,800,900/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/299/4/4/0/2|Hanken Grotesk/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic-ext,latin,latin-ext,vietnamese/300/2/2/0/2|Kosugi Maru/sans-serif/400/cyrillic,japanese,latin,latin-ext/301/3/2/1/4|Baloo 2/display/400,500,600,700,800/devanagari,latin,latin-ext,vietnamese/302/2/1/1/3|Mitr/sans-serif/200,300,400,500,600,700/latin,latin-ext,thai,vietnamese/303/4/3/1/2|Noto Sans Mono/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/304/1/4/0/2|Noto Sans Tamil/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,tamil/305/2/2/0/2|Sriracha/handwriting/400/latin,latin-ext,thai,vietnamese/306/4/1/2/3|Saira Semi Condensed/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/307/2/0/4/2|Vidaloka/serif/400/latin/308/3/1/1/2|Audiowide/display/400/latin,latin-ext/309/4/4/0/2|Shippori Mincho/serif/400,500,600,700,800/japanese,latin,latin-ext/310/0/3/2/2|Mandali/sans-serif/400/latin,telugu/311/1/2/1/3|Mukta Malar/sans-serif/200,300,400,500,600,700,800/latin,latin-ext,tamil/312/3/1/0/2|Alice/serif/400/cyrillic,cyrillic-ext,latin,latin-ext/313/2/1/2/4|Nerko One/handwriting/400/latin,latin-ext/314/4/0/2/4|Homemade Apple/handwriting/400/latin/315/0/4/3/4|Sofia Sans/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext/316/3/1/1/1|Niramit/sans-serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,thai,vietnamese/317/2/1/0/2|Amaranth/sans-serif/400,400i,700,700i/latin/318/4/1/1/3|Fredoka/sans-serif/300,400,500,600,700/hebrew,latin,latin-ext/319/3/2/1/4|Fira Sans Extra Condensed/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/320/3/0/4/1|Sofia Sans Condensed/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext/321/3/4/1/1|Pridi/serif/200,300,400,500,600,700/latin,latin-ext,thai,vietnamese/322/4/2/0/0|Nothing You Could Do/handwriting/400/latin/323/0/3/2/-1|Reenie Beanie/handwriting/400/latin/324/0/0/3/4|Lalezar/display/400/arabic,latin,latin-ext,vietnamese/325/4/0/0/1|Alex Brush/handwriting/400/latin,latin-ext,vietnamese/326/1/0/3/3|Bai Jamjuree/sans-serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,thai,vietnamese/327/1/2/0/0|Volkhov/serif/400,400i,700,700i/latin/328/3/3/0/0|Noto Serif Bengali/serif/100,200,300,400,500,600,700,800,900/bengali,latin,latin-ext/329/3/3/1/2|Aclonica/sans-serif/400/latin/330/4/3/1/4|Sorts Mill Goudy/serif/400,400i/latin,latin-ext/331/1/1/2/3|Ropa Sans/sans-serif/400,400i/latin,latin-ext/332/3/0/4/0|Bricolage Grotesque/sans-serif/200,300,400,500,600,700,800/latin,latin-ext,vietnamese/333/3/2/0/3|Arsenal/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/334/1/0/4/1|Blinker/sans-serif/100,200,300,400,600,700,800,900/latin,latin-ext/335/3/0/4/1|Handlee/handwriting/400/latin/336/1/1/1/4|Hind Vadodara/sans-serif/300,400,500,600,700/gujarati,latin,latin-ext/337/2/1/3/0|Abhaya Libre/serif/400,500,600,700,800/latin,latin-ext,sinhala/338/2/0/1/0|Hammersmith One/sans-serif/400/latin,latin-ext/339/3/2/0/0|VT323/monospace/400/latin,latin-ext,vietnamese/340/3/0/3/0|Ultra/serif/400/latin/341/4/4/2/3|Istok Web/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext/342/2/2/1/1|Press Start 2P/display/400/cyrillic,cyrillic-ext,greek,latin,latin-ext/343/0/4/3/0|Playfair/serif/300,400,500,600,700,800,900,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/344/2/1/2/3|BIZ UDPGothic/sans-serif/400,700/cyrillic,greek-ext,japanese,latin,latin-ext/345/1/4/0/0|Radio Canada/sans-serif/300,400,500,600,700,300i,400i,500i,600i,700i/canadian-aboriginal,latin,latin-ext,vietnamese/346/3/2/4/2|Cousine/monospace/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese/347/1/4/4/0|Instrument Sans/sans-serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext/348/1/2/4/1|Alexandria/sans-serif/100,200,300,400,500,600,700,800,900/arabic,latin,latin-ext,vietnamese/349/4/3/4/2|Fira Mono/monospace/400,500,700/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext/350/0/4/4/1|Forum/display/400/cyrillic,cyrillic-ext,latin,latin-ext/351/0/0/2/3|Rammetto One/display/400/latin,latin-ext/352/4/4/0/3|Changa One/display/400,400i/latin/353/4/1/3/0|Playball/display/400/latin,latin-ext,vietnamese/354/3/0/3/4|Bad Script/handwriting/400/cyrillic,latin/355/0/0/2/3|Andika/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/356/1/2/0/3|Antonio/sans-serif/100,200,300,400,500,600,700/latin,latin-ext/357/4/0/0/1|Mr Dafoe/handwriting/400/latin,latin-ext/358/3/0/2/4|Mada/sans-serif/200,300,400,500,600,700,800,900/arabic,latin,latin-ext/359/2/1/0/2|Varela/sans-serif/400/latin,latin-ext/360/3/3/3/0|Monda/sans-serif/400,500,600,700/latin,latin-ext,vietnamese/361/2/2/4/1|Nanum Pen Script/handwriting/400/korean,latin/362/1/0/2/4|League Gothic/sans-serif/400/latin,latin-ext,vietnamese/363/4/4/4/1|Gudea/sans-serif/400,400i,700/latin,latin-ext/364/1/1/3/1|Unica One/display/400/latin,latin-ext,vietnamese/365/1/0/4/0|Monoton/display/400/latin/366/4/4/3/1|Noto Sans Malayalam/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,malayalam/367/2/3/0/2|Carter One/display/400/latin/368/4/3/3/4|Wix Madefor Text/sans-serif/400,400i,500,500i,600,600i,700,700i,800,800i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/369/1/2/4/2|Viga/sans-serif/400/latin,latin-ext/370/4/1/4/0|Ruda/sans-serif/400,500,600,700,800,900/cyrillic,latin,latin-ext,vietnamese/371/2/1/0/3|Lusitana/serif/400,700/latin/372/1/1/1/2|Noto Serif SC/serif/200,300,400,500,600,700,800,900/chinese-simplified,cyrillic,latin,latin-ext,vietnamese/373/0/3/2/0|Economica/sans-serif/400,400i,700,700i/latin,latin-ext/374/3/4/0/3|Black Ops One/display/400/cyrillic-ext,latin,latin-ext,vietnamese/375/4/3/3/0|Damion/handwriting/400/latin,latin-ext/376/3/0/3/3|Share Tech Mono/monospace/400/latin/377/1/3/4/0|Ramabhadra/sans-serif/400/latin,telugu/378/4/3/4/1|Rock Salt/handwriting/400/latin/379/1/4/3/4|Quantico/sans-serif/400,400i,700,700i/latin/380/3/2/3/0|Londrina Solid/display/100,300,400,900/latin/381/4/0/2/4|Cabin Condensed/sans-serif/400,500,600,700/latin,latin-ext,vietnamese/382/3/0/4/1|Anonymous Pro/monospace/400,400i,700,700i/cyrillic,greek,latin,latin-ext/383/1/3/0/2|Julius Sans One/sans-serif/400/latin,latin-ext/384/0/4/3/0|Alegreya Sans SC/sans-serif/100,100i,300,300i,400,400i,500,500i,700,700i,800,800i,900,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/385/2/0/3/0|Marck Script/handwriting/400/cyrillic,latin,latin-ext/386/0/1/1/3|Fira Code/monospace/300,400,500,600,700/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext/387/0/4/4/2|Pinyon Script/handwriting/400/latin,latin-ext,vietnamese/388/0/0/3/4|Reem Kufi/sans-serif/400,500,600,700/arabic,latin,latin-ext,vietnamese/389/2/1/4/2|Anuphan/sans-serif/100,200,300,400,500,600,700/latin,latin-ext,thai,vietnamese/390/2/1/0/1|Martel Sans/sans-serif/200,300,400,600,700,800,900/devanagari,latin,latin-ext/391/1/3/4/1|Pangolin/handwriting/400/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/392/3/0/3/3|Actor/sans-serif/400/latin/393/2/1/0/3|Sarala/sans-serif/400,700/devanagari,latin,latin-ext/394/3/1/4/0|Newsreader/serif/200,300,400,500,600,700,800,200i,300i,400i,500i,600i,700i,800i/latin,latin-ext,vietnamese/395/1/1/1/1|Vazirmatn/sans-serif/100,200,300,400,500,600,700,800,900/arabic,latin,latin-ext/396/3/1/0/2|Petrona/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/397/1/1/1/1|Secular One/sans-serif/400/hebrew,latin,latin-ext/398/4/2/4/1|Baloo Bhaijaan 2/display/400,500,600,700,800/arabic,latin,latin-ext,vietnamese/399/2/1/1/3|Rufina/serif/400,700/latin,latin-ext/400/1/2/0/0|Covered By Your Grace/handwriting/400/latin/401/0/0/2/4|Six Caps/sans-serif/400/latin/402/4/4/4/1|Pragati Narrow/sans-serif/400,700/devanagari,latin,latin-ext/403/4/0/4/0|Noto Sans Hebrew/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic-ext,greek-ext,hebrew,latin,latin-ext/404/2/2/0/2|Zen Old Mincho/serif/400,500,600,700,900/cyrillic,greek,japanese,latin,latin-ext/405/1/1/3/4|Libre Bodoni/serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext,vietnamese/406/1/2/1/1|Basic/sans-serif/400/latin,latin-ext/407/4/1/1/3|Cormorant Infant/serif/300,300i,400,400i,500,500i,600,600i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/408/0/0/2/3|Grandstander/display/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/409/3/2/2/4|BenchNine/sans-serif/300,400,700/latin,latin-ext/410/3/4/1/3|Pontano Sans/sans-serif/300,400,500,600,700/latin,latin-ext/411/2/1/4/2|Caveat Brush/handwriting/400/latin,latin-ext/412/4/0/3/1|Italianno/handwriting/400/latin,latin-ext,vietnamese/413/0/4/3/4|Gowun Batang/serif/400,700/korean,latin,latin-ext,vietnamese/414/0/1/2/3|Calistoga/display/400/latin,latin-ext,vietnamese/415/4/2/2/3|Amita/handwriting/400,700/devanagari,latin,latin-ext/416/0/1/1/3|GFS Didot/serif/400/greek/417/1/3/1/0|Black Han Sans/sans-serif/400/korean,latin/418/4/4/4/0|Averia Serif Libre/display/300,300i,400,400i,700,700i/latin/419/3/2/2/2|Balsamiq Sans/display/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext/420/4/2/2/2|Adamina/serif/400/latin/421/2/3/1/1|Hind Guntur/sans-serif/300,400,500,600,700/latin,latin-ext,telugu/422/2/1/3/0|Sansita/sans-serif/400,400i,700,700i,800,800i,900,900i/latin,latin-ext/423/4/0/4/2|Khula/sans-serif/300,400,600,700,800/devanagari,latin,latin-ext/424/1/1/4/1|Noto Sans Devanagari/sans-serif/100,200,300,400,500,600,700,800,900/devanagari,latin,latin-ext/425/2/2/0/2|Alef/sans-serif/400,700/hebrew,latin/426/2/2/1/3|Mrs Saint Delafield/handwriting/400/latin,latin-ext/427/0/4/2/3|Holtwood One SC/serif/400/latin,latin-ext/428/4/4/4/0|Cinzel Decorative/display/400,700,900/latin/429/0/4/1/0|Big Shoulders Display/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/430/4/4/0/2|Gochi Hand/handwriting/400/latin/431/3/0/3/4|Days One/sans-serif/400/latin/432/4/4/0/2|Electrolize/sans-serif/400/latin/433/1/2/1/0|Leckerli One/handwriting/400/latin/434/4/3/2/3|Yrsa/serif/300,400,500,600,700,300i,400i,500i,600i,700i/latin,latin-ext,vietnamese/435/3/0/1/1|Kameron/serif/400,500,600,700/latin,latin-ext/436/3/1/2/3|Arapey/serif/400,400i/latin/437/1/0/1/0|Golos Text/sans-serif/400,500,600,700,800,900/cyrillic,cyrillic-ext,latin,latin-ext/438/3/3/4/2|IBM Plex Sans Thai/sans-serif/100,200,300,400,500,600,700/cyrillic-ext,latin,latin-ext,thai/439/2/1/0/2|Georama/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/440/3/1/0/3|Sintony/sans-serif/400,700/latin,latin-ext/441/2/3/3/1|Shrikhand/display/400/gujarati,latin,latin-ext/442/4/3/2/3|Delius/handwriting/400/latin/443/1/2/1/4|Racing Sans One/display/400/latin,latin-ext/444/4/1/0/3|Berkshire Swash/handwriting/400/latin,latin-ext/445/4/1/3/4|Syncopate/sans-serif/400,700/latin/446/0/4/0/3|Darker Grotesque/sans-serif/300,400,500,600,700,800,900/latin,latin-ext,vietnamese/447/0/0/0/2|Karma/serif/300,400,500,600,700/devanagari,latin,latin-ext/448/1/1/0/1|Athiti/sans-serif/200,300,400,500,600,700/latin,latin-ext,thai,vietnamese/449/1/1/4/0|Judson/serif/400,400i,700/latin,latin-ext,vietnamese/450/3/1/0/1|Alatsi/sans-serif/400/cyrillic-ext,latin,latin-ext,vietnamese/451/4/1/4/1|Bungee Shade/display/400/latin,latin-ext,vietnamese/452/4/4/3/0|Oranienbaum/serif/400/cyrillic,cyrillic-ext,latin,latin-ext/453/1/0/1/2|Kiwi Maru/serif/300,400,500/cyrillic,japanese,latin,latin-ext/454/2/3/3/3|Shippori Mincho B1/serif/400,500,600,700,800/japanese,latin,latin-ext/455/0/3/2/2|Corben/display/400,700/latin,latin-ext/456/3/3/2/3|La Belle Aurore/handwriting/400/latin/457/0/1/2/4|Cabin Sketch/display/400,700/latin/458/3/1/0/2|Charm/handwriting/400,700/latin,latin-ext,thai,vietnamese/459/0/0/2/3|Besley/serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/latin,latin-ext/460/2/3/3/3|Coda/display/400,800/latin,latin-ext/461/3/1/1/4|Herr Von Muellerhoff/handwriting/400/latin,latin-ext/462/0/4/2/3|Noto Nastaliq Urdu/serif/400,500,600,700/arabic,latin,latin-ext/463/3/2/1/1|Telex/sans-serif/400/latin,latin-ext/464/3/2/3/0|Allison/handwriting/400/latin,latin-ext,vietnamese/465/0/4/3/3|Belleza/sans-serif/400/latin,latin-ext/466/1/0/0/3|Gupter/serif/400,500,700/latin/467/2/0/1/1|Glegoo/serif/400,700/devanagari,latin,latin-ext/468/1/3/0/1|Chewy/display/400/latin/469/4/0/2/4|Kreon/serif/300,400,500,600,700/latin,latin-ext/470/3/0/0/1|Laila/sans-serif/300,400,500,600,700/devanagari,latin,latin-ext/471/1/2/0/3|M PLUS 1/sans-serif/100,200,300,400,500,600,700,800,900/japanese,latin,latin-ext,vietnamese/472/1/3/4/1|Lemonada/display/300,400,500,600,700/arabic,latin,latin-ext,vietnamese/473/3/4/2/4|Brygada 1918/serif/400,500,600,700,400i,500i,600i,700i/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/474/1/2/1/1|Just Another Hand/handwriting/400/latin/475/3/4/3/4|Halant/serif/300,400,500,600,700/devanagari,latin,latin-ext/476/1/1/1/2|Julee/handwriting/400/latin,latin-ext/477/1/0/1/3|Candal/sans-serif/400/latin/478/4/4/1/4|Noto Serif Display/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/479/1/3/1/2|Palanquin/sans-serif/100,200,300,400,500,600,700/devanagari,latin,latin-ext/480/1/1/4/1|Marcellus SC/serif/400/latin,latin-ext/481/1/2/2/3|Jaldi/sans-serif/400,700/devanagari,latin,latin-ext/482/3/0/1/2|Fredericka the Great/display/400/latin,latin-ext/483/3/3/3/4|Bevan/serif/400,400i/latin,latin-ext,vietnamese/484/4/4/0/0|Armata/sans-serif/400/latin,latin-ext/485/1/3/0/1|Jua/sans-serif/400/korean,latin/486/4/1/3/4|Michroma/sans-serif/400/latin,latin-ext/487/1/4/0/3|Mali/handwriting/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,thai,vietnamese/488/0/3/1/3|Seaweed Script/display/400/latin,latin-ext/489/1/0/3/4|Saira Extra Condensed/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/490/3/4/4/2|Do Hyeon/sans-serif/400/korean,latin/491/4/1/0/1|Cedarville Cursive/handwriting/400/latin/492/0/2/3/4|Nanum Brush Script/handwriting/400/korean,latin/493/0/4/3/4|Nobile/sans-serif/400,400i,500,500i,700,700i/latin,latin-ext/494/2/3/1/4|Boogaloo/display/400/latin/495/4/0/4/2|BioRhyme/serif/200,300,400,500,600,700,800/latin,latin-ext/496/3/4/2/2|Italiana/serif/400/latin/497/0/1/4/1|Shadows Into Light Two/handwriting/400/latin,latin-ext/498/0/1/2/4|MuseoModerno/display/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/499/3/3/0/3|Livvic/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,900,900i/latin,latin-ext,vietnamese/500/1/1/4/2|BIZ UDGothic/sans-serif/400,700/cyrillic,greek-ext,japanese,latin,latin-ext/501/1/2/4/0|Akshar/sans-serif/300,400,500,600,700/devanagari,latin,latin-ext/502/4/0/1/0|Nixie One/display/400/latin/503/0/3/2/1|Rye/display/400/latin,latin-ext/504/4/3/3/3|Norican/handwriting/400/latin,latin-ext/505/4/0/3/4|PT Serif Caption/serif/400,400i/cyrillic,cyrillic-ext,latin,latin-ext/506/3/3/1/1|Kurale/serif/400/cyrillic,cyrillic-ext,devanagari,latin,latin-ext/507/2/1/2/2|Tomorrow/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext/508/2/3/3/0|Gabarito/display/400,500,600,700,800,900/latin,latin-ext/509/4/1/0/1|Antic/sans-serif/400/latin/510/0/1/4/0|Spinnaker/sans-serif/400/latin,latin-ext/511/1/3/0/0|Allerta Stencil/sans-serif/400/latin/512/3/3/0/2|Alumni Sans/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/513/3/4/0/1|Aldrich/sans-serif/400/latin/514/3/3/4/0|Share/sans-serif/400,400i,700,700i/latin,latin-ext/515/3/0/0/3|Palanquin Dark/sans-serif/400,500,600,700/devanagari,latin,latin-ext/516/4/1/3/1|Cantata One/serif/400/latin,latin-ext/517/1/3/0/0|Krona One/sans-serif/400/latin,latin-ext/518/4/4/0/3|Sofia Sans Extra Condensed/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext/519/4/4/1/1|Graduate/serif/400/latin/520/1/4/3/0|Gravitas One/display/400/latin/521/4/4/2/3|Lustria/serif/400/latin/522/0/2/2/2|Coming Soon/handwriting/400/latin/523/0/2/3/4|Rancho/handwriting/400/latin/524/3/4/3/4|Averia Libre/display/300,300i,400,400i,700,700i/latin/525/3/1/2/2|Overpass Mono/monospace/300,400,500,600,700/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/526/0/4/0/2|Podkova/serif/400,500,600,700,800/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/527/3/1/0/0|Andada Pro/serif/400,500,600,700,800,400i,500i,600i,700i,800i/latin,latin-ext,vietnamese/528/1/2/2/1|Suez One/serif/400/hebrew,latin,latin-ext/529/4/3/1/0|Bellefair/serif/400/hebrew,latin,latin-ext/530/0/0/1/3|Ibarra Real Nova/serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext/531/0/1/2/2|Rozha One/serif/400/devanagari,latin,latin-ext/532/3/2/0/1|Pathway Extreme/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/533/2/3/0/0|Anek Malayalam/sans-serif/100,200,300,400,500,600,700,800/latin,latin-ext,malayalam/534/3/1/0/0|Cutive Mono/monospace/400/latin,latin-ext/535/0/4/2/2|Gantari/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext/536/2/2/4/2|Castoro/serif/400,400i/latin,latin-ext/537/3/2/2/3|Overlock/display/400,400i,700,700i,900,900i/latin,latin-ext/538/1/0/0/3|Arizonia/handwriting/400/latin,latin-ext,vietnamese/539/1/0/3/4|Zen Kaku Gothic Antique/sans-serif/300,400,500,700,900/cyrillic,japanese,latin,latin-ext/540/0/1/4/2|Klee One/handwriting/400,600/cyrillic,greek-ext,japanese,latin,latin-ext/541/0/3/2/3|Scada/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext/542/3/1/0/0|Annie Use Your Telescope/handwriting/400/latin/543/0/0/2/4|K2D/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i/latin,latin-ext,thai,vietnamese/544/3/1/0/2|Rethink Sans/sans-serif/400,500,600,700,800,400i,500i,600i,700i,800i/latin,latin-ext/545/2/2/4/2|Bowlby One SC/display/400/latin,latin-ext/546/4/4/2/3|Lemon/display/400/latin,latin-ext/547/4/4/2/4|Spline Sans/sans-serif/300,400,500,600,700/latin,latin-ext/548/3/1/0/2|Ovo/serif/400/latin/549/1/1/2/3|Knewave/display/400/latin,latin-ext/550/4/1/2/3|Allerta/sans-serif/400/latin/551/3/3/0/3|Caudex/serif/400,400i,700,700i/greek,greek-ext,latin,latin-ext/552/1/2/2/1|Proza Libre/sans-serif/400,400i,500,500i,600,600i,700,700i,800,800i/latin,latin-ext/553/1/3/1/3|Pattaya/sans-serif/400/cyrillic,latin,latin-ext,thai,vietnamese/554/4/0/2/2|Carrois Gothic/sans-serif/400/latin/555/2/1/0/3|Ms Madi/handwriting/400/latin,latin-ext,vietnamese/556/0/0/3/4|Prociono/serif/400/latin/557/3/1/2/3|Kristi/handwriting/400/latin/558/1/4/2/2|Wallpoet/display/400/latin/559/4/4/4/0|Arbutus Slab/serif/400/latin,latin-ext/560/3/3/1/2|B612/sans-serif/400,400i,700,700i/latin/561/1/3/1/3|Hepta Slab/serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/562/1/4/1/0|Encode Sans Semi Condensed/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/563/1/0/4/1|Schoolbell/handwriting/400/latin/564/0/0/3/4|Odibee Sans/display/400/latin/565/4/4/4/0|Yesteryear/handwriting/400/latin/566/3/0/3/4|Kosugi/sans-serif/400/cyrillic,japanese,latin,latin-ext/567/2/2/0/3|David Libre/serif/400,500,700/hebrew,latin,latin-ext,math,symbols,vietnamese/568/1/0/1/3|Rasa/serif/300,400,500,600,700,300i,400i,500i,600i,700i/gujarati,latin,latin-ext,vietnamese/569/3/0/1/1|Short Stack/handwriting/400/latin/570/1/4/3/4|Grand Hotel/handwriting/400/latin,latin-ext/571/3/0/3/4|Enriqueta/serif/400,500,600,700/latin,latin-ext/572/2/1/1/0|Fresca/sans-serif/400/latin,latin-ext/573/3/0/4/2|Oxygen Mono/monospace/400/latin,latin-ext/574/0/4/4/1|Koulen/display/400/khmer,latin/575/4/0/0/0|Sofia Sans Semi Condensed/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext/576/3/0/1/1|Trirong/serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,thai,vietnamese/577/1/3/0/0|Waiting for the Sunrise/handwriting/400/latin/578/0/0/2/4|Limelight/display/400/latin,latin-ext/579/4/3/0/1|Metrophobic/sans-serif/400/latin,latin-ext,vietnamese/580/1/2/4/2|Inria Serif/serif/300,300i,400,400i,700,700i/latin,latin-ext/581/1/1/1/0|Big Shoulders Text/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/582/4/4/0/2|Baloo Da 2/display/400,500,600,700,800/bengali,latin,latin-ext,vietnamese/583/2/1/1/3|Chonburi/display/400/latin,latin-ext,thai,vietnamese/584/4/4/1/1|Rakkas/display/400/arabic,latin,latin-ext/585/4/0/0/0|Shantell Sans/display/300,400,500,600,700,800,300i,400i,500i,600i,700i,800i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/586/1/3/2/4|Lateef/serif/200,300,400,500,600,700,800/arabic,latin,latin-ext/587/3/-1/1/0|Petit Formal Script/handwriting/400/latin,latin-ext/588/0/4/3/4|Contrail One/display/400/latin/589/4/0/1/2|Manjari/sans-serif/100,400,700/latin,latin-ext,malayalam/590/1/1/1/3|Dawning of a New Day/handwriting/400/latin/591/0/0/2/3|UnifrakturMaguntia/display/400/latin/592/4/1/3/3|McLaren/display/400/latin,latin-ext/593/3/3/1/4|Encode Sans Expanded/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/594/1/3/4/1|Oooh Baby/handwriting/400/latin,latin-ext,vietnamese/595/0/0/2/3|Marmelad/sans-serif/400/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/596/2/2/1/3|Amiko/sans-serif/400,600,700/devanagari,latin,latin-ext/597/1/3/4/1|Niconne/handwriting/400/latin,latin-ext/598/2/0/2/4|Markazi Text/serif/400,500,600,700/arabic,latin,latin-ext,vietnamese/599/4/0/1/0|Padauk/sans-serif/400,700/latin,latin-ext,myanmar/600/2/1/4/2|Fahkwang/sans-serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,thai,vietnamese/601/1/3/4/1|Biryani/sans-serif/200,300,400,600,700,800,900/devanagari,latin,latin-ext/602/2/3/3/0|Stardos Stencil/display/400,700/latin/603/3/1/2/1|Average Sans/sans-serif/400/latin,latin-ext/604/2/0/3/0|Maitree/serif/200,300,400,500,600,700/latin,latin-ext,thai,vietnamese/605/1/2/1/1|Noto Sans Khmer/sans-serif/100,200,300,400,500,600,700,800,900/khmer,latin,latin-ext/606/2/2/0/2|Bungee Inline/display/400/latin,latin-ext,vietnamese/607/4/4/2/0|Rosario/sans-serif/300,400,500,600,700,300i,400i,500i,600i,700i/latin,latin-ext,vietnamese/608/3/1/0/3|IBM Plex Sans KR/sans-serif/100,200,300,400,500,600,700/korean,latin,latin-ext/609/2/1/0/2|Glory/sans-serif/100,200,300,400,500,600,700,800,100i,200i,300i,400i,500i,600i,700i,800i/latin,latin-ext,vietnamese/610/1/0/2/4|Rochester/handwriting/400/latin/611/1/0/3/4|Montserrat Subrayada/sans-serif/400,700/latin/612/4/4/3/0|Calligraffitti/handwriting/400/latin/613/0/0/3/4|Alegreya SC/serif/400,400i,500,500i,700,700i,800,800i,900,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/614/3/1/2/2|Wix Madefor Display/sans-serif/400,500,600,700,800/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/615/1/2/4/2|B612 Mono/monospace/400,400i,700,700i/latin/616/0/4/1/3|Bubblegum Sans/display/400/latin,latin-ext/617/4/0/1/3|Skranji/display/400,700/latin,latin-ext/618/4/2/1/3|M PLUS 2/sans-serif/100,200,300,400,500,600,700,800,900/japanese,latin,latin-ext,vietnamese/619/1/3/4/1|Love Ya Like A Sister/display/400/latin,latin-ext/620/3/1/1/0|Monsieur La Doulaise/handwriting/400/latin,latin-ext/621/0/0/3/3|Jomhuria/display/400/arabic,latin,latin-ext/622/4/4/0/1|Radley/serif/400,400i/latin,latin-ext/623/3/1/2/3|Azeret Mono/monospace/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext/624/1/4/4/1|Cormorant Upright/serif/300,400,500,600,700/latin,latin-ext,vietnamese/625/0/0/2/3|Lexend Zetta/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/626/0/4/0/2|IM Fell English/serif/400,400i/latin/627/2/1/4/4|Sigmar One/display/400/latin,latin-ext,vietnamese/628/4/4/3/0|Trocchi/serif/400/latin,latin-ext/629/4/3/1/1|Caladea/serif/400,400i,700,700i/latin,latin-ext/630/3/0/1/1|Gurajada/serif/400/latin,telugu/631/4/4/4/0|Rambla/sans-serif/400,400i,700,700i/latin,latin-ext/632/3/0/3/1|Lexend Exa/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/633/1/4/0/2|Mansalva/handwriting/400/greek,latin,latin-ext,vietnamese/634/1/1/3/3|Vesper Libre/serif/400,500,700,900/devanagari,latin,latin-ext/635/3/1/1/1|Fanwood Text/serif/400,400i/latin/636/1/0/3/3|Poly/serif/400,400i/latin/637/3/1/1/1|Hahmlet/serif/100,200,300,400,500,600,700,800,900/korean,latin,latin-ext,vietnamese/638/1/3/2/0|Spectral SC/serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i/cyrillic,latin,latin-ext,vietnamese/639/2/4/0/0|Updock/handwriting/400/latin,latin-ext,vietnamese/640/1/4/3/4|Ma Shan Zheng/handwriting/400/chinese-simplified,latin/641/3/4/2/3|Inknut Antiqua/serif/300,400,500,600,700,800,900/devanagari,latin,latin-ext/642/2/4/0/0|Magra/sans-serif/400,700/latin,latin-ext/643/3/0/4/1|Kelly Slab/display/400/cyrillic,latin,latin-ext/644/2/1/4/0|Pixelify Sans/display/400,500,600,700/cyrillic,latin,latin-ext/645/4/2/3/0|Major Mono Display/monospace/400/latin,latin-ext,vietnamese/646/0/4/3/0|Irish Grover/display/400/latin/647/4/2/3/4|RocknRoll One/sans-serif/400/japanese,latin,latin-ext/648/4/3/0/2|Bentham/serif/400/latin/649/1/1/2/2|Jockey One/sans-serif/400/latin,latin-ext/650/4/0/3/0|Goudy Bookletter 1911/serif/400/latin/651/1/0/3/4|Over the Rainbow/handwriting/400/latin/652/0/3/2/4|Antic Didone/serif/400/latin/653/0/1/1/0|Average/serif/400/latin,latin-ext/654/1/1/2/4|Poetsen One/display/400/latin,latin-ext/655/4/2/2/4|Solway/serif/300,400,500,700,800/latin/656/3/3/2/1|Geo/sans-serif/400,400i/latin/657/2/0/3/0|Grenze Gotisch/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/658/4/0/2/3|Miriam Libre/sans-serif/400,700/hebrew,latin,latin-ext/659/2/2/1/2|Voltaire/sans-serif/400/latin,latin-ext,vietnamese/660/3/0/4/1|Zen Kurenaido/sans-serif/400/cyrillic,greek,japanese,latin,latin-ext/661/0/0/1/3|Cormorant SC/serif/300,400,500,600,700/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/662/0/1/2/3|KoHo/sans-serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,thai,vietnamese/663/1/1/0/1|Noto Sans Armenian/sans-serif/100,200,300,400,500,600,700,800,900/armenian,latin,latin-ext/664/2/2/0/2|Nova Square/display/400/latin/666/3/3/4/0|Noto Sans Meetei Mayek/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,meetei-mayek/667/2/2/0/2|Sniglet/display/400,800/latin,latin-ext/668/3/1/2/4|Gabriela/serif/400/cyrillic,cyrillic-ext,latin,latin-ext/669/2/3/2/3|Qwigley/handwriting/400/latin,latin-ext,vietnamese/670/0/4/2/2|Noto Serif Devanagari/serif/100,200,300,400,500,600,700,800,900/devanagari,latin,latin-ext/671/3/3/1/2|Familjen Grotesk/sans-serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext,vietnamese/672/4/1/4/1|Aboreto/display/400/latin,latin-ext/673/0/4/4/0|Coustard/serif/400,900/latin/674/4/3/3/4|Style Script/handwriting/400/latin,latin-ext,vietnamese/675/1/0/3/4|Young Serif/serif/400/latin,latin-ext/676/4/3/2/2|Fjord One/serif/400/latin/677/1/1/2/3|Noto Sans Georgian/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic-ext,georgian,greek-ext,latin,latin-ext,math,symbols/678/2/2/0/2|IM Fell DW Pica/serif/400,400i/latin/679/2/1/0/4|Ephesis/handwriting/400/latin,latin-ext,vietnamese/680/0/0/3/2|Poller One/display/400/latin/681/4/4/0/3|Cambay/sans-serif/400,400i,700,700i/devanagari,latin,latin-ext/682/1/1/4/0|Fauna One/serif/400/latin,latin-ext/683/1/3/0/0|Pompiere/display/400/latin/684/0/4/2/3|Copse/serif/400/latin/685/3/2/2/1|Mochiy Pop One/sans-serif/400/japanese,latin/686/4/4/1/4|Meddon/handwriting/400/latin/687/0/4/3/4|Alike/serif/400/latin,latin-ext,math,symbols/688/3/2/2/3|Quintessential/handwriting/400/latin,latin-ext/689/0/0/3/4|Nova Mono/monospace/400/greek,latin/690/0/3/0/0|DotGothic16/sans-serif/400/cyrillic,japanese,latin,latin-ext/691/1/2/0/0|Dongle/sans-serif/300,400,700/korean,latin,latin-ext,vietnamese/692/4/4/1/3|Molengo/sans-serif/400/latin,latin-ext/693/1/1/4/0|Yusei Magic/sans-serif/400/japanese,latin,latin-ext/694/3/2/1/3|Chelsea Market/display/400/latin,latin-ext/695/4/3/1/4|Agdasima/sans-serif/400,700/latin,latin-ext/696/3/4/0/1|Capriola/sans-serif/400/latin,latin-ext/697/3/3/2/2|Marvel/sans-serif/400,400i,700,700i/latin/698/1/0/1/2|Noto Sans NKo Unjoined/sans-serif/400,500,600,700/latin,latin-ext,nko/699/2/2/4/1|Gotu/sans-serif/400/devanagari,latin,latin-ext,vietnamese/700/0/3/1/4|Kadwa/serif/400,700/devanagari,latin/701/3/3/0/0|Turret Road/display/200,300,400,500,700,800/latin,latin-ext/702/0/3/3/0|Cutive/serif/400/latin,latin-ext/703/3/4/2/3|Bellota Text/display/300,300i,400,400i,700,700i/cyrillic,latin,latin-ext,vietnamese/704/0/1/0/1|Thasadith/sans-serif/400,400i,700,700i/latin,latin-ext,thai,vietnamese/705/0/0/0/2|Noto Sans Sinhala/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,sinhala/706/1/3/0/2|Farro/sans-serif/300,400,500,700/latin,latin-ext/707/3/2/4/0|Gluten/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/708/4/3/2/4|Sunflower/sans-serif/300,500,700/korean,latin/709/2/1/4/2|IM Fell English SC/serif/400/latin/710/1/1/0/4|Hanuman/serif/100,300,400,700,900/khmer,latin/711/3/3/0/0|Kaisei Decol/serif/400,500,700/cyrillic,japanese,latin,latin-ext/712/1/3/3/4|Aref Ruqaa/serif/400,700/arabic,latin,latin-ext/713/2/1/2/3|Imbue/serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/714/4/4/1/2|Encode Sans Semi Expanded/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/715/1/2/4/1|Sedgwick Ave/handwriting/400/latin,latin-ext,vietnamese/716/3/1/2/2|Platypi/serif/300,400,500,600,700,800,300i,400i,500i,600i,700i,800i/latin,latin-ext,vietnamese/717/3/3/1/0|Mountains of Christmas/display/400,700/latin/718/0/0/4/3|Quando/serif/400/latin,latin-ext/719/3/4/2/3|Gloock/serif/400/cyrillic-ext,latin,latin-ext/720/4/2/1/1|Federo/sans-serif/400/latin/721/2/1/0/3|Caprasimo/display/400/latin,latin-ext/722/4/3/2/4|Baloo Thambi 2/display/400,500,600,700,800/latin,latin-ext,tamil,vietnamese/723/2/1/1/3|Baloo Chettan 2/display/400,500,600,700,800/latin,latin-ext,malayalam,vietnamese/724/2/1/1/3|Agbalumo/display/400/cyrillic-ext,latin,latin-ext,vietnamese/725/4/2/2/4|Battambang/display/100,300,400,700,900/khmer,latin/726/3/3/0/0|Megrim/display/400/latin/727/0/2/3/1|Mr De Haviland/handwriting/400/latin,latin-ext/728/0/4/2/3|Aladin/display/400/latin,latin-ext/729/4/0/2/3|Arima/display/100,200,300,400,500,600,700/greek,greek-ext,latin,latin-ext,malayalam,tamil,vietnamese/730/1/1/2/3|Arya/sans-serif/400,700/devanagari,latin,latin-ext/731/3/0/4/0|Mogra/display/400/gujarati,latin,latin-ext/732/4/3/2/4|Nokora/sans-serif/100,300,400,700,900/khmer,latin/733/2/2/4/1|Brawler/serif/400,700/latin/734/3/3/0/1|Noto Sans Lao Looped/sans-serif/100,200,300,400,500,600,700,800,900/lao,latin,latin-ext/735/2/2/0/2|Baloo Tamma 2/display/400,500,600,700,800/kannada,latin,latin-ext,vietnamese/736/1/1/1/3|Expletus Sans/display/400,500,600,700,400i,500i,600i,700i/latin,latin-ext/737/2/2/0/3|Reddit Mono/monospace/200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/738/1/3/0/2|Saira Stencil One/display/400/latin,latin-ext,vietnamese/740/4/2/0/0|IBM Plex Sans JP/sans-serif/100,200,300,400,500,600,700/cyrillic,japanese,latin,latin-ext/741/1/2/4/0|Della Respira/serif/400/latin/742/1/2/2/3|Amethysta/serif/400/latin/743/1/3/0/0|Cambo/serif/400/latin,latin-ext/744/3/2/0/1|Prosto One/display/400/cyrillic,latin,latin-ext/745/4/4/4/2|Murecho/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic,cyrillic-ext,greek,japanese,latin,latin-ext/746/3/1/0/3|Sansita Swashed/display/300,400,500,600,700,800,900/latin,latin-ext,vietnamese/747/4/1/2/4|Lekton/monospace/400,400i,700/latin,latin-ext/748/0/2/3/0|Sue Ellen Francisco/handwriting/400/latin/749/0/4/1/0|Hurricane/handwriting/400/latin,latin-ext,vietnamese/750/0/4/3/4|Mouse Memoirs/sans-serif/400/latin,latin-ext/751/4/4/2/4|Noto Emoji/sans-serif/300,400,500,600,700/emoji/752/0/4/3/0|Mallanna/sans-serif/400/latin,telugu/753/1/0/1/2|Supermercado One/display/400/latin/754/4/0/2/2|Aguafina Script/handwriting/400/latin,latin-ext/755/1/4/2/3|Red Rose/display/300,400,500,600,700/latin,latin-ext,vietnamese/756/3/3/1/3|Croissant One/display/400/latin,latin-ext/757/3/4/0/3|Kufam/sans-serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/arabic,latin,latin-ext,vietnamese/758/2/3/0/2|Notable/sans-serif/400/latin/759/4/4/3/0|Noto Sans Kannada/sans-serif/100,200,300,400,500,600,700,800,900/kannada,latin,latin-ext/760/2/2/0/2|Anek Latin/sans-serif/100,200,300,400,500,600,700,800/latin,latin-ext,vietnamese/761/3/0/0/0|Asul/sans-serif/400,700/latin/762/3/1/0/1|Coiny/display/400/latin,latin-ext,tamil,vietnamese/763/4/3/1/4|Sumana/serif/400,700/devanagari,latin,latin-ext/764/2/1/1/1|Tenali Ramakrishna/sans-serif/400/latin,telugu/765/3/0/0/0|Mukta Mahee/sans-serif/200,300,400,500,600,700,800/gurmukhi,latin,latin-ext/766/3/0/0/2|Bigshot One/display/400/latin/767/4/1/2/2|Orelega One/display/400/cyrillic,cyrillic-ext,latin,latin-ext/768/4/1/1/3|Fragment Mono/monospace/400,400i/cyrillic-ext,latin,latin-ext/769/1/4/4/1|Vina Sans/display/400/latin,latin-ext,vietnamese/770/4/4/-1/0|League Script/handwriting/400/latin/771/0/1/3/4|Montaga/serif/400/latin/772/1/1/1/1|Hi Melody/handwriting/400/korean,latin/773/1/-1/2/4|Tiro Bangla/serif/400,400i/bengali,latin,latin-ext/774/3/2/2/3|Fondamento/handwriting/400,400i/latin,latin-ext/775/1/1/2/3|REM/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/776/3/3/0/1|Kablammo/display/400/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/777/4/2/3/4|ZCOOL QingKe HuangYou/sans-serif/400/chinese-simplified,latin/778/4/0/1/0|Inder/sans-serif/400/latin,latin-ext/779/3/2/4/0|ZCOOL XiaoWei/sans-serif/400/chinese-simplified,latin/780/2/1/0/1|Give You Glory/handwriting/400/latin/781/0/3/2/-1|Oleo Script Swash Caps/display/400,700/latin,latin-ext/782/4/0/2/3|Vibur/handwriting/400/latin/783/1/0/2/1|Potta One/display/400/japanese,latin,latin-ext,vietnamese/784/4/4/2/4|Instrument Serif/serif/400,400i/latin,latin-ext/785/3/0/2/2|Happy Monkey/display/400/latin,latin-ext/786/1/3/1/3|Recursive/sans-serif/300,400,500,600,700,800,900/cyrillic-ext,latin,latin-ext,vietnamese/787/2/3/2/4|Allan/display/400,700/latin,latin-ext/789/4/4/1/2|Mukta Vaani/sans-serif/200,300,400,500,600,700,800/gujarati,latin,latin-ext/790/3/0/0/2|Vollkorn SC/serif/400,600,700,900/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/791/1/3/2/2|BIZ UDPMincho/serif/400,700/cyrillic,greek-ext,japanese,latin,latin-ext/792/1/4/1/0|Euphoria Script/handwriting/400/latin,latin-ext/793/1/-1/2/3|Imprima/sans-serif/400/latin,latin-ext/795/2/1/4/1|Rampart One/display/400/cyrillic,japanese,latin,latin-ext/796/3/3/2/1|Suranna/serif/400/latin,telugu/797/1/0/0/0|Libre Caslon Display/serif/400/latin,latin-ext/798/0/0/1/0|Whisper/handwriting/400/latin,latin-ext,vietnamese/799/0/0/3/2|Kodchasan/sans-serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,thai,vietnamese/800/0/3/1/3|Atma/display/300,400,500,600,700/bengali,latin,latin-ext/801/2/0/1/4|Square Peg/handwriting/400/latin,latin-ext,vietnamese/802/0/4/3/2|Zen Dots/display/400/latin,latin-ext/803/4/4/3/0|NTR/sans-serif/400/latin,telugu/804/3/0/1/2|Noto Sans Myanmar/sans-serif/100,200,300,400,500,600,700,800,900/myanmar/805/0/3/3/0|Zen Antique Soft/serif/400/cyrillic,greek,japanese,latin,latin-ext/806/3/3/3/4|Sofadi One/display/400/latin/807/1/3/2/4|Gugi/display/400/korean,latin/808/4/3/1/1|Fuggles/handwriting/400/latin,latin-ext,vietnamese/809/0/4/3/4|Noto Sans Telugu/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,telugu/810/2/2/0/2|Just Me Again Down Here/handwriting/400/latin,latin-ext/811/0/4/1/0|Loved by the King/handwriting/400/latin/812/0/4/0/0|Kaisei Opti/serif/400,500,700/cyrillic,japanese,latin,latin-ext/813/1/3/3/4|Crafty Girls/handwriting/400/latin/814/0/3/3/3|Averia Sans Libre/display/300,300i,400,400i,700,700i/latin/815/3/1/2/2|Ruslan Display/display/400/cyrillic,latin,latin-ext,math,symbols/816/4/4/0/2|Goblin One/display/400/latin/817/4/4/1/3|Alike Angular/serif/400/latin,latin-ext,math,symbols/818/2/2/0/0|Hina Mincho/serif/400/cyrillic,japanese,latin,latin-ext,vietnamese/819/0/0/3/3|Gayathri/sans-serif/100,400,700/latin,malayalam/820/2/1/0/1|Noto Sans Gujarati/sans-serif/100,200,300,400,500,600,700,800,900/gujarati,latin,latin-ext,math,symbols/821/2/2/0/2|Manuale/serif/300,400,500,600,700,800,300i,400i,500i,600i,700i,800i/latin,latin-ext,vietnamese/822/3/1/0/0|Eater/display/400/latin,latin-ext/823/4/4/3/2|Oregano/display/400,400i/latin,latin-ext/824/1/0/3/4|Elsie/display/400,900/latin,latin-ext/825/2/1/1/3|Amarante/display/400/latin,latin-ext/826/3/1/1/2|Esteban/serif/400/latin,latin-ext/827/1/1/2/3|Birthstone/handwriting/400/latin,latin-ext,vietnamese/828/1/4/3/4|Tienne/serif/400,700,900/latin/829/3/3/2/3|Puritan/sans-serif/400,400i,700,700i/latin/830/2/1/4/0|Share Tech/sans-serif/400/latin/831/3/0/4/0|Walter Turncoat/handwriting/400/latin/832/3/2/0/4|Headland One/serif/400/latin,latin-ext/833/2/4/2/1|Noto Serif Thai/serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,thai/834/3/3/1/2|Finger Paint/display/400/latin/835/1/3/3/3|Shojumaru/display/400/latin,latin-ext/836/4/4/2/4|Monomaniac One/sans-serif/400/japanese,latin,latin-ext/837/4/0/1/1|Clicker Script/handwriting/400/latin,latin-ext/838/0/0/3/4|Xanh Mono/monospace/400,400i/latin,latin-ext,vietnamese/839/0/2/1/0|Qwitcher Grypen/handwriting/400,700/latin,latin-ext,vietnamese/840/0/4/3/3|Dynalight/display/400/latin,latin-ext/841/1/0/3/4|Rouge Script/handwriting/400/latin/842/0/4/2/3|Gowun Dodum/sans-serif/400/korean,latin,latin-ext,vietnamese/843/0/1/1/2|Slabo 13px/serif/400/latin,latin-ext/844/2/2/0/0|Iceberg/display/400/latin/845/3/0/3/0|Almendra/serif/400,400i,700,700i/latin,latin-ext/846/2/0/1/1|Syne Mono/monospace/400/latin,latin-ext/847/1/3/4/0|Charis SIL/serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/848/3/2/1/1|Cherry Cream Soda/display/400/latin/849/4/4/2/4|Bubbler One/sans-serif/400/latin,latin-ext/850/0/0/4/1|Faster One/display/400/latin,latin-ext/851/4/4/2/0|Numans/sans-serif/400/latin/852/2/3/0/1|Bellota/display/300,300i,400,400i,700,700i/cyrillic,latin,latin-ext,vietnamese/853/0/2/0/2|IBM Plex Sans Hebrew/sans-serif/100,200,300,400,500,600,700/cyrillic-ext,hebrew,latin,latin-ext/854/2/1/0/2|Wendy One/sans-serif/400/latin,latin-ext/855/4/2/4/2|Kaisei Tokumin/serif/400,500,700,800/cyrillic,japanese,latin,latin-ext/856/1/3/3/4|Tilt Warp/display/400/latin,latin-ext,vietnamese/857/4/2/1/4|Playwrite GB S/handwriting/100,200,300,400,100i,200i,300i,400i/latin/858/0/3/2/4|Metamorphous/display/400/latin,latin-ext/859/1/4/2/1|Carme/sans-serif/400/latin/860/1/2/3/1|Baloo Bhai 2/display/400,500,600,700,800/gujarati,latin,latin-ext,vietnamese/861/2/1/1/3|Salsa/display/400/latin/862/4/1/1/4|Duru Sans/sans-serif/400/latin,latin-ext/863/1/3/0/0|Road Rage/display/400/latin,latin-ext,vietnamese/864/4/4/2/0|Bayon/sans-serif/400/khmer,latin/866/4/0/0/0|Dekko/handwriting/400/devanagari,latin,latin-ext/867/1/0/2/3|Bilbo Swash Caps/handwriting/400/latin,latin-ext/868/0/0/3/4|Kranky/display/400/latin/869/0/2/2/4|Montez/handwriting/400/latin/870/0/4/3/4|Balthazar/serif/400/latin/871/3/0/0/0|Martian Mono/monospace/100,200,300,400,500,600,700,800/cyrillic,cyrillic-ext,latin,latin-ext/872/1/4/4/1|Slackey/display/400/latin/873/4/4/2/4|IM Fell Double Pica/serif/400,400i/latin/874/1/1/4/4|ADLaM Display/display/400/adlam,latin,latin-ext/875/4/3/2/3|Bakbak One/display/400/devanagari,latin,latin-ext/876/4/2/0/1|Galada/display/400/bengali,latin/877/4/0/2/3|Corinthia/handwriting/400,700/latin,latin-ext,vietnamese/878/0/4/3/3|Modak/display/400/devanagari,latin,latin-ext/879/4/2/1/2|Lily Script One/display/400/latin,latin-ext/880/4/1/2/3|Vast Shadow/serif/400/latin/881/4/4/3/1|Goldman/display/400,700/latin,latin-ext,vietnamese/882/4/3/0/0|Dokdo/display/400/korean,latin/883/3/0/2/1|Piazzolla/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/884/1/2/1/0|Gamja Flower/handwriting/400/korean,latin/885/3/0/2/4|Carlito/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/886/3/0/1/3|Charmonman/handwriting/400,700/latin,latin-ext,thai,vietnamese/887/0/1/2/3|Mohave/sans-serif/300,400,500,600,700,300i,400i,500i,600i,700i/latin,latin-ext/888/3/0/4/0|Chivo Mono/monospace/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/889/2/4/0/2|Mako/sans-serif/400/latin,latin-ext/890/3/1/0/2|Cormorant Unicase/serif/300,400,500,600,700/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/891/0/1/2/3|Chicle/display/400/latin,latin-ext/892/4/4/2/3|Kalnia/serif/100,200,300,400,500,600,700/latin,latin-ext,math/893/1/3/1/3|Uncial Antiqua/display/400/latin/894/1/4/2/4|Patrick Hand SC/handwriting/400/latin,latin-ext,vietnamese/895/2/0/1/3|The Girl Next Door/handwriting/400/latin/896/0/2/3/4|Bruno Ace SC/display/400/latin,latin-ext/897/2/4/4/0|Anaheim/sans-serif/400,500,600,700,800/latin,latin-ext,vietnamese/898/1/0/0/1|Kavivanar/handwriting/400/latin,latin-ext,tamil/899/1/1/1/2|Harmattan/sans-serif/400,500,600,700/arabic,latin,latin-ext/900/3/0/1/3|Mirza/serif/400,500,600,700/arabic,latin,latin-ext/901/3/0/1/3|Anybody/display/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/902/3/3/4/0|Unkempt/display/400,700/latin/903/1/1/1/4|Scheherazade New/serif/400,500,600,700/arabic,latin,latin-ext/904/2/0/1/3|Doppio One/sans-serif/400/latin,latin-ext/905/4/2/0/3|Artifika/serif/400/latin/906/3/3/2/3|Zen Antique/serif/400/cyrillic,greek,japanese,latin,latin-ext/907/3/3/3/4|Henny Penny/display/400/latin/908/0/2/3/4|AR One Sans/sans-serif/400,500,600,700/latin,latin-ext,vietnamese/909/2/2/0/1|Lexend Peta/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/910/1/4/0/2|Sarpanch/sans-serif/400,500,600,700,800,900/devanagari,latin,latin-ext/911/2/3/4/0|Red Hat Mono/monospace/300,400,500,600,700,300i,400i,500i,600i,700i/latin,latin-ext/912/0/4/4/2|Raleway Dots/display/400/latin,latin-ext/913/0/2/1/1|Fontdiner Swanky/display/400/latin/914/3/4/1/3|Buenard/serif/400,700/latin,latin-ext/915/1/1/1/1|Germania One/display/400/latin/916/4/0/0/3|BhuTuka Expanded One/serif/400/gurmukhi,latin,latin-ext/917/0/4/1/1|Viaoda Libre/display/400/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/918/0/0/2/2|Baumans/display/400/latin/919/3/1/4/2|DynaPuff/display/400,500,600,700/cyrillic-ext,latin,latin-ext/920/4/3/2/4|Orienta/sans-serif/400/latin,latin-ext/921/3/2/4/2|Lovers Quarrel/handwriting/400/latin,latin-ext,vietnamese/922/0/4/3/2|Codystar/display/300,400/latin,latin-ext/923/0/4/1/3|Afacad/sans-serif/400,500,600,700,400i,500i,600i,700i/cyrillic-ext,latin,latin-ext,math,symbols,vietnamese/924/2/0/4/2|Ledger/serif/400/cyrillic,latin,latin-ext/925/1/3/4/0|Grape Nuts/handwriting/400/latin,latin-ext,vietnamese/926/0/0/3/4|Montagu Slab/serif/100,200,300,400,500,600,700/latin,latin-ext,vietnamese/927/3/3/1/0|Nova Round/display/400/latin/928/3/3/0/0|Noto Sans Gothic/sans-serif/400/gothic,latin,latin-ext/929/2/2/4/1|Gaegu/handwriting/300,400,700/korean,latin/930/0/1/3/4|Shanti/sans-serif/400/latin,latin-ext/931/3/1/0/2|Sulphur Point/sans-serif/300,400,700/latin,latin-ext/932/1/2/4/2|Scope One/serif/400/latin,latin-ext/933/1/2/1/1|Flamenco/display/300,400/latin/934/0/0/1/3|Mochiy Pop P One/sans-serif/400/japanese,latin/935/4/4/1/4|Wire One/sans-serif/400/latin/936/0/4/1/2|Edu SA Beginner/handwriting/400,500,600,700/latin/937/0/0/1/3|Asar/serif/400/devanagari,latin,latin-ext/938/1/1/2/4|Rubik Dirt/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/939/4/3/3/0|Anek Bangla/sans-serif/100,200,300,400,500,600,700,800/bengali,latin,latin-ext/940/3/0/0/0|Smooch/handwriting/400/latin,latin-ext,vietnamese/941/3/0/3/4|Nosifer/display/400/latin,latin-ext/942/4/4/3/2|Freehand/display/400/khmer,latin/943/1/0/0/2|Monofett/monospace/400/latin,latin-ext/944/4/2/1/0|Ceviche One/display/400/latin,latin-ext/945/4/0/0/2|Redressed/handwriting/400/latin/946/2/0/2/4|Pavanam/sans-serif/400/latin,latin-ext,tamil/947/1/0/0/0|Kdam Thmor Pro/sans-serif/400/khmer,latin,latin-ext/948/4/1/4/0|Playpen Sans/handwriting/100,200,300,400,500,600,700,800/emoji,latin,latin-ext,math,vietnamese/949/1/3/2/4|Chocolate Classical Sans/sans-serif/400/chinese-hongkong,cyrillic,latin,latin-ext,vietnamese/950/2/2/0/2|Zilla Slab Highlight/serif/400,700/latin,latin-ext/951/-1/1/0/0|Delius Unicase/handwriting/400,700/latin/953/1/4/1/4|Original Surfer/display/400/latin/954/3/3/2/4|Anek Devanagari/sans-serif/100,200,300,400,500,600,700,800/devanagari,latin,latin-ext/955/3/1/0/0|Belgrano/serif/400/latin/956/2/3/0/0|Yuji Syuku/serif/400/cyrillic,japanese,latin,latin-ext/957/0/3/3/4|Life Savers/display/400,700,800/latin,latin-ext/958/0/1/3/3|Freckle Face/display/400/latin,latin-ext/959/4/1/3/4|Meow Script/handwriting/400/latin,latin-ext,vietnamese/960/0/0/3/4|Katibeh/display/400/arabic,latin,latin-ext/961/4/4/1/2|Reggae One/display/400/cyrillic,japanese,latin,latin-ext/962/4/3/0/2|Homenaje/sans-serif/400/latin/963/4/4/3/0|Voces/sans-serif/400/latin,latin-ext/964/3/2/4/0|Overlock SC/display/400/latin,latin-ext/965/2/1/1/3|Moul/display/400/khmer,latin/966/4/4/0/0|Ribeye/display/400/latin,latin-ext/967/3/4/3/4|MonteCarlo/handwriting/400/latin,latin-ext,vietnamese/968/0/0/3/4|Noto Sans Oriya/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,oriya/969/2/2/0/2|Barrio/display/400/latin,latin-ext/970/1/2/3/2|Varta/sans-serif/300,400,500,600,700/latin,latin-ext,vietnamese/971/1/0/4/2|IM Fell DW Pica SC/serif/400/latin/972/2/1/4/4|Kantumruy Pro/sans-serif/100,200,300,400,500,600,700,100i,200i,300i,400i,500i,600i,700i/khmer,latin,latin-ext/973/1/3/0/2|Modern Antiqua/display/400/latin,latin-ext/975/2/3/2/0|Cherry Swash/display/400,700/latin,latin-ext/976/3/3/0/0|Train One/display/400/cyrillic,japanese,latin,latin-ext/977/3/4/2/2|Chau Philomene One/sans-serif/400,400i/latin,latin-ext/978/4/0/0/3|Convergence/sans-serif/400/latin,latin-ext/979/3/3/4/1|Rum Raisin/sans-serif/400/latin,latin-ext/980/4/0/2/4|Noto Serif Khmer/serif/100,200,300,400,500,600,700,800,900/khmer,latin,latin-ext/981/3/3/1/2|Medula One/display/400/latin/982/4/4/1/2|Chango/display/400/latin,latin-ext/983/4/4/1/3|Noto Serif Malayalam/serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,malayalam/984/2/3/1/2|Trykker/serif/400/latin,latin-ext/985/1/3/1/0|Stick/sans-serif/400/cyrillic,japanese,latin,latin-ext/986/2/3/3/0|Ruthie/handwriting/400/latin,latin-ext,vietnamese/987/0/4/3/2|Tauri/sans-serif/400/latin,latin-ext/988/3/2/0/3|Song Myung/serif/400/korean,latin/989/3/1/2/2|Frijole/display/400/latin/990/4/4/2/4|Noto Sans Ethiopic/sans-serif/100,200,300,400,500,600,700,800,900/ethiopic,latin,latin-ext/991/2/2/0/2|Iceland/display/400/latin/992/1/0/3/0|Peralta/serif/400/latin,latin-ext/993/4/4/1/3|Trade Winds/display/400/latin/994/4/3/3/4|IM Fell French Canon/serif/400,400i/latin/995/1/1/3/4|East Sea Dokdo/handwriting/400/korean,latin/996/2/4/3/1|Rubik Scribble/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext,math,symbols/997/0/3/1/3|Lexend Mega/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/998/1/4/0/2|Lexend Giga/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/999/1/4/0/2|Hachi Maru Pop/handwriting/400/cyrillic,japanese,latin,latin-ext/1000/0/4/2/4|Swanky and Moo Moo/handwriting/400/latin/1001/0/0/3/4|Macondo Swash Caps/display/400/latin/1002/1/1/1/4|Crushed/display/400/latin/1003/2/0/1/4|Sail/display/400/latin,latin-ext/1004/1/1/2/3|Comforter Brush/handwriting/400/cyrillic,latin,latin-ext,vietnamese/1005/0/0/1/0|Rhodium Libre/serif/400/devanagari,latin,latin-ext/1006/3/3/0/0|Akaya Kanadaka/display/400/kannada,latin,latin-ext/1007/3/0/2/4|ZCOOL KuaiLe/sans-serif/400/chinese-simplified,latin/1008/2/3/3/0|Mina/sans-serif/400,700/bengali,latin,latin-ext/1009/1/2/0/3|Sunshiney/handwriting/400/latin/1010/1/0/0/4|Emilys Candy/display/400/latin,latin-ext/1011/3/1/2/3|UnifrakturCook/display/700/latin/1012/4/0/1/1|Miniver/display/400/latin/1013/1/1/3/4|Bona Nova/serif/400,400i,700/cyrillic,cyrillic-ext,greek,hebrew,latin,latin-ext,vietnamese/1014/0/2/1/2|Noto Sans Gurmukhi/sans-serif/100,200,300,400,500,600,700,800,900/gurmukhi,latin,latin-ext/1015/2/2/0/2|Tiro Devanagari Hindi/serif/400,400i/devanagari,latin,latin-ext/1016/3/2/2/3|WindSong/handwriting/400,500/latin,latin-ext,vietnamese/1017/0/4/3/4|Shippori Antique/sans-serif/400/japanese,latin,latin-ext/1018/3/3/4/2|Black And White Picture/display/400/korean,latin/1019/4/0/2/2|Rosarivo/serif/400,400i/latin,latin-ext/1020/0/3/2/2|Londrina Outline/display/400/latin/1021/0/0/3/2|Reddit Sans/sans-serif/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/1022/2/1/0/2|Ubuntu Sans/sans-serif/100,200,300,400,500,600,700,800,100i,200i,300i,400i,500i,600i,700i,800i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext/1023/1/1/0/3|Mystery Quest/display/400/latin,latin-ext/1024/1/1/3/4|Strait/sans-serif/400/latin,latin-ext/1025/2/0/0/2|Sancreek/display/400/latin,latin-ext/1026/4/1/3/4|Baloo Tammudu 2/display/400,500,600,700,800/latin,latin-ext,telugu,vietnamese/1027/2/1/1/3|Texturina/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/1028/3/2/3/4|Atomic Age/display/400/latin/1029/3/3/0/1|Stylish/sans-serif/400/korean,latin/1030/3/0/2/2|Baloo Bhaina 2/display/400,500,600,700,800/latin,latin-ext,oriya,vietnamese/1031/2/1/1/3|Delius Swash Caps/handwriting/400/latin/1032/1/2/1/4|Cute Font/display/400/korean,latin/1033/4/4/0/0|Akaya Telivigala/display/400/latin,latin-ext,telugu/1034/3/0/2/4|Fuzzy Bubbles/handwriting/400,700/latin,latin-ext,vietnamese/1035/0/3/2/4|Tillana/display/400,500,600,700,800/devanagari,latin,latin-ext/1036/0/1/0/2|Rationale/sans-serif/400/latin/1037/3/0/0/0|Akronim/display/400/latin,latin-ext/1038/3/0/3/4|Meera Inimai/sans-serif/400/latin,tamil/1039/3/1/0/1|Beth Ellen/handwriting/400/latin/1040/0/4/3/3|MedievalSharp/display/400/latin,latin-ext/1041/1/2/2/3|Tilt Neon/display/400/latin,latin-ext,vietnamese/1042/3/1/3/4|Radio Canada Big/sans-serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext/1043/4/1/4/1|Tektur/display/400,500,600,700,800,900/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/1044/3/3/3/0|Srisakdi/display/400,700/latin,latin-ext,thai,vietnamese/1045/0/1/2/3|Port Lligat Slab/serif/400/latin/1046/3/0/1/3|Timmana/sans-serif/400/latin,telugu/1047/4/0/4/1|Kulim Park/sans-serif/200,200i,300,300i,400,400i,600,600i,700,700i/latin,latin-ext/1048/2/2/4/2|Edu VIC WA NT Beginner/handwriting/400,500,600,700/latin/1049/0/0/1/3|Baskervville SC/serif/400/latin,latin-ext/1050/0/2/2/2|Gafata/sans-serif/400/latin,latin-ext/1051/1/0/4/1|Denk One/sans-serif/400/cyrillic-ext,latin,latin-ext,vietnamese/1052/4/1/1/3|Maiden Orange/serif/400/latin/1053/4/4/1/3|Ranchers/display/400/latin,latin-ext/1054/4/0/1/3|IM Fell Great Primer/serif/400,400i/latin/1055/1/1/4/4|Yomogi/handwriting/400/cyrillic,japanese,latin,latin-ext,vietnamese/1056/0/2/1/2|Fascinate Inline/display/400/latin/1057/4/3/3/4|Stick No Bills/sans-serif/200,300,400,500,600,700,800/latin,latin-ext,sinhala/1058/3/0/0/2|Meie Script/handwriting/400/latin,latin-ext/1059/0/3/3/4|Chela One/display/400/latin,latin-ext/1060/4/0/1/3|Sura/serif/400,700/devanagari,latin,latin-ext/1061/3/1/2/1|Barriecito/display/400/latin,latin-ext,vietnamese/1062/4/1/2/2|Noto Sans Thai Looped/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,thai/1063/2/2/4/1|Bodoni Moda SC/serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/latin,latin-ext,math,symbols/1064/0/2/1/2|Mooli/sans-serif/400/latin,latin-ext/1065/1/3/0/3|Sedgwick Ave Display/handwriting/400/latin,latin-ext,vietnamese/1066/3/0/2/2|Nova Flat/display/400/latin/1067/3/3/0/0|The Nautigal/handwriting/400,700/latin,latin-ext,vietnamese/1068/0/4/3/4|Delicious Handrawn/handwriting/400/latin,latin-ext/1069/1/0/3/3|Vampiro One/display/400/latin,latin-ext/1070/4/3/0/0|Moon Dance/handwriting/400/latin,latin-ext,vietnamese/1071/0/4/3/4|Handjet/display/100,200,300,400,500,600,700,800,900/arabic,armenian,cyrillic,cyrillic-ext,greek,hebrew,latin,latin-ext,vietnamese/1072/2/4/1/-1|Asset/display/400/cyrillic-ext,latin,latin-ext,math,symbols/1073/4/4/2/3|Metal Mania/display/400/latin,latin-ext/1074/4/0/1/4|Belanosima/sans-serif/400,600,700/latin,latin-ext/1075/4/1/2/3|Carrois Gothic SC/sans-serif/400/latin/1076/2/2/3/0|Ewert/display/400/latin,latin-ext/1077/4/4/3/0|Anek Tamil/sans-serif/100,200,300,400,500,600,700,800/latin,latin-ext,tamil/1078/3/1/0/0|Noto Serif Georgian/serif/100,200,300,400,500,600,700,800,900/georgian,latin,latin-ext/1079/3/3/1/2|Borel/handwriting/400/latin,latin-ext,math,symbols,vietnamese/1080/0/4/2/3|Gulzar/serif/400/arabic,latin,latin-ext/1081/3/1/1/0|Noto Serif HK/serif/200,300,400,500,600,700,800,900/chinese-hongkong,cyrillic,latin,latin-ext,vietnamese/1083/0/3/2/0|Madimi One/sans-serif/400/latin,latin-ext,math,symbols/1084/4/1/1/3|Birthstone Bounce/handwriting/400,500/latin,latin-ext,vietnamese/1085/0/0/3/3|Carattere/handwriting/400/latin,latin-ext,vietnamese/1086/1/0/3/2|Playwrite CU/handwriting/100,200,300,400/latin/1087/0/4/3/4|Habibi/serif/400/latin,latin-ext/1088/1/3/0/0|Fenix/serif/400/latin,latin-ext/1089/3/1/0/0|Sonsie One/display/400/latin,latin-ext/1090/4/4/2/4|Seymour One/sans-serif/400/cyrillic,latin,latin-ext/1091/4/4/1/4|Cherry Bomb One/display/400/japanese,latin,latin-ext,vietnamese/1092/4/2/1/4|IM Fell Double Pica SC/serif/400/latin/1093/1/1/4/4|Gorditas/display/400,700/latin/1094/4/3/2/3|Waterfall/handwriting/400/latin,latin-ext,vietnamese/1095/0/4/3/3|Vujahday Script/handwriting/400/latin,latin-ext,vietnamese/1097/0/0/3/3|Caesar Dressing/display/400/latin/1098/4/1/3/4|Karantina/display/300,400,700/hebrew,latin,latin-ext/1099/4/4/4/0|M PLUS 1 Code/monospace/100,200,300,400,500,600,700/japanese,latin,latin-ext,vietnamese/1100/1/2/4/1|Passions Conflict/handwriting/400/latin,latin-ext,vietnamese/1101/0/4/3/2|Paprika/display/400/latin,latin-ext/1102/2/3/2/4|Genos/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cherokee,latin,latin-ext,vietnamese/1103/3/0/1/3|IM Fell Great Primer SC/serif/400/latin/1104/1/1/-1/4|Stalemate/handwriting/400/latin,latin-ext/1105/0/4/3/4|Londrina Shadow/display/400/latin/1106/0/0/3/1|Abyssinica SIL/serif/400/ethiopic,latin,latin-ext/1107/2/3/1/1|Astloch/display/400,700/latin/1108/0/0/2/1|Kite One/sans-serif/400/latin,latin-ext/1109/0/1/1/4|Angkor/display/400/khmer,latin/1110/4/4/0/0|Protest Strike/display/400/latin,latin-ext,math,symbols,vietnamese/1111/4/1/4/1|Solitreo/handwriting/400/hebrew,latin,latin-ext/1113/2/1/2/4|Margarine/display/400/latin,latin-ext/1114/4/1/4/4|Jomolhari/serif/400/latin,tibetan/1115/2/3/2/3|Keania One/display/400/latin,latin-ext/1116/4/1/1/0|Nova Slim/display/400/latin/1117/1/3/0/0|Noto Sans Lao/sans-serif/100,200,300,400,500,600,700,800,900/lao,latin,latin-ext/1118/2/2/0/2|Ysabeau SC/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic,cyrillic-ext,greek,latin,latin-ext,math,symbols,vietnamese/1119/0/2/4/0|Noto Sans Glagolitic/sans-serif/400/cyrillic-ext,glagolitic,latin,latin-ext,math,symbols/1120/2/2/4/1|Cantora One/sans-serif/400/latin,latin-ext/1121/4/1/1/4|Licorice/handwriting/400/latin,latin-ext,vietnamese/1122/0/4/3/4|Stoke/serif/300,400/latin,latin-ext/1123/2/4/3/3|Port Lligat Sans/sans-serif/400/latin/1124/3/0/0/3|Smythe/display/400/latin/1125/4/4/2/4|IM Fell French Canon SC/serif/400/latin/1126/1/1/3/4|Ramaraja/serif/400/latin,telugu/1127/4/0/2/3|Stint Ultra Expanded/serif/400/latin,latin-ext/1128/0/4/1/2|Kenia/display/400/latin/1129/4/0/2/3|Marko One/serif/400/latin/1130/3/4/2/3|Alkatra/display/400,500,600,700/bengali,devanagari,latin,latin-ext,oriya/1131/4/0/2/4|Underdog/display/400/cyrillic,latin,latin-ext/1132/2/1/4/0|SUSE/sans-serif/100,200,300,400,500,600,700,800/latin,latin-ext/1133/2/1/0/1|Ysabeau Office/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext,math,symbols,vietnamese/1134/0/1/0/2|Donegal One/serif/400/latin,latin-ext/1135/2/3/2/4|Unlock/display/400/latin,latin-ext/1136/4/3/0/0|Sree Krushnadevaraya/serif/400/latin,telugu/1137/3/0/0/0|Engagement/handwriting/400/latin/1138/3/4/3/4|Miltonian Tattoo/display/400/latin/1139/4/3/3/3|Trispace/sans-serif/100,200,300,400,500,600,700,800/latin,latin-ext,vietnamese/1140/1/4/0/3|Jolly Lodger/display/400/latin,latin-ext/1141/4/4/2/4|Kaisei HarunoUmi/serif/400,500,700/cyrillic,japanese,latin,latin-ext/1142/1/3/3/4|Zhi Mang Xing/handwriting/400/chinese-simplified,latin/1143/3/4/2/3|Chilanka/handwriting/400/latin,latin-ext,malayalam/1144/0/2/2/3|Nova Oval/display/400/latin/1145/2/3/0/0|Londrina Sketch/display/400/latin/1146/0/0/3/3|Glass Antiqua/display/400/latin,latin-ext/1147/2/0/1/3|Eagle Lake/handwriting/400/latin,latin-ext/1148/0/4/3/4|Farsan/display/400/gujarati,latin,latin-ext,vietnamese/1149/2/4/2/3|Noto Sans Buhid/sans-serif/400/buhid,latin,latin-ext/1150/2/2/4/1|Ribeye Marrow/display/400/latin,latin-ext/1151/2/4/3/3|Risque/display/400/latin,latin-ext/1152/4/1/1/3|Jacques Francois Shadow/display/400/latin/1153/1/3/3/3|Suwannaphum/serif/100,300,400,700,900/khmer,latin/1154/3/3/0/0|Simonetta/display/400,400i,900,900i/latin,latin-ext/1155/0/0/2/4|Nova Cut/display/400/latin/1156/1/3/4/0|Text Me One/sans-serif/400/latin,latin-ext/1157/0/1/1/2|Lugrasimo/handwriting/400/latin,latin-ext/1159/0/4/2/4|Girassol/display/400/latin,latin-ext/1160/3/0/1/0|Rubik Doodle Shadow/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext,math,symbols/1161/2/3/3/0|Nova Script/display/400/latin/1162/2/3/1/0|Gemunu Libre/sans-serif/200,300,400,500,600,700,800/latin,latin-ext,sinhala/1163/4/0/4/0|Bilbo/handwriting/400/latin,latin-ext,vietnamese/1164/0/4/3/4|Noto Sans Anatolian Hieroglyphs/sans-serif/400/anatolian-hieroglyphs,latin,latin-ext/1165/2/2/4/1|Miltonian/display/400/latin/1166/2/3/3/4|Bungee Spice/display/400/latin,latin-ext,vietnamese/1167/4/4/1/0|Beau Rivage/handwriting/400/latin,latin-ext,vietnamese/1168/0/0/3/4|New Rocker/display/400/latin,latin-ext/1169/4/1/2/4|Cagliostro/sans-serif/400/latin/1170/1/1/1/3|Spline Sans Mono/monospace/300,400,500,600,700,300i,400i,500i,600i,700i/latin,latin-ext/1171/1/4/0/1|New Tegomin/serif/400/japanese,latin,latin-ext/1172/0/3/3/2|Noto Sans Math/sans-serif/400/math/1173/2/2/4/1|Anek Gujarati/sans-serif/100,200,300,400,500,600,700,800/gujarati,latin,latin-ext/1174/3/0/0/0|Lexend Tera/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1175/0/4/0/2|Big Shoulders Stencil Text/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1176/4/4/1/1|Liu Jian Mao Cao/handwriting/400/chinese-simplified,latin/1177/0/0/2/4|Kavoon/display/400/latin,latin-ext/1178/4/3/2/3|Rubik Moonrocks/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1179/4/3/0/2|Comforter/handwriting/400/cyrillic,latin,latin-ext,vietnamese/1180/0/0/3/4|Imperial Script/handwriting/400/latin,latin-ext,vietnamese/1181/1/0/3/2|Finlandica/sans-serif/400,500,600,700,400i,500i,600i,700i/cyrillic,cyrillic-ext,latin,latin-ext/1182/2/0/0/1|Anek Telugu/sans-serif/100,200,300,400,500,600,700,800/latin,latin-ext,telugu/1183/3/1/0/0|Festive/handwriting/400/latin,latin-ext,vietnamese/1184/0/0/3/4|Ruluko/sans-serif/400/latin,latin-ext/1185/1/0/0/2|Gentium Plus/serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/1186/1/0/2/3|Spirax/display/400/latin/1187/1/1/2/4|Junge/serif/400/latin/1188/0/3/2/3|Braah One/sans-serif/400/gurmukhi,latin,latin-ext,vietnamese/1189/4/2/4/1|Lacquer/display/400/latin/1190/1/3/0/3|Dorsa/sans-serif/400/latin/1191/3/4/4/0|Sarina/display/400/latin,latin-ext/1192/4/4/3/3|Almendra SC/serif/400/latin/1193/3/1/2/2|Sono/sans-serif/200,300,400,500,600,700,800/latin,latin-ext,vietnamese/1194/0/4/1/3|Grenze/serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,vietnamese/1195/4/0/1/0|Stint Ultra Condensed/serif/400/latin,latin-ext/1196/4/4/1/1|Tilt Prism/display/400/latin,latin-ext,vietnamese/1197/3/2/3/2|Akatab/sans-serif/400,500,600,700,800,900/latin,latin-ext,tifinagh/1198/1/1/-1/2|Edu TAS Beginner/handwriting/400,500,600,700/latin/1199/0/0/1/3|Joan/serif/400/latin,latin-ext/1200/1/1/1/2|Benne/serif/400/kannada,latin,latin-ext/1201/0/0/2/2|Inclusive Sans/sans-serif/400,400i/latin,latin-ext,vietnamese/1202/2/2/4/2|Kotta One/serif/400/latin,latin-ext/1203/1/1/1/2|Long Cang/handwriting/400/chinese-simplified,latin/1204/0/0/2/4|Kirang Haerang/display/400/korean,latin/1205/2/0/3/3|Mrs Sheppards/handwriting/400/latin,latin-ext/1206/4/0/2/4|Tac One/sans-serif/400/latin,latin-ext,math,symbols,vietnamese/1207/4/0/3/0|Inika/serif/400,700/latin,latin-ext/1208/3/2/1/1|Autour One/display/400/latin,latin-ext/1209/3/4/3/4|Fustat/sans-serif/200,300,400,500,600,700,800/arabic,latin,latin-ext/1210/2/1/0/1|Bungee Hairline/display/400/latin,latin-ext,vietnamese/1211/0/4/0/0|Zen Tokyo Zoo/display/400/latin,latin-ext/1212/1/0/2/0|Chathura/sans-serif/100,300,400,700,800/latin,telugu/1213/1/4/0/0|Alkalami/serif/400/arabic,latin,latin-ext/1214/4/1/2/3|Marhey/display/300,400,500,600,700/arabic,latin,latin-ext/1215/2/3/1/4|Offside/display/400/latin,latin-ext/1216/1/3/0/1|Lavishly Yours/handwriting/400/latin,latin-ext,vietnamese/1217/0/0/3/3|Linden Hill/serif/400,400i/latin/1218/1/0/2/2|Anton SC/sans-serif/400/latin,latin-ext,vietnamese/1219/4/0/4/0|Jacques Francois/serif/400/latin/1220/1/3/2/3|Kumar One Outline/display/400/gujarati,latin,latin-ext/1221/0/4/1/0|IBM Plex Sans Thai Looped/sans-serif/100,200,300,400,500,600,700/cyrillic-ext,latin,latin-ext,thai/1222/2/1/0/2|Elsie Swash Caps/display/400,900/latin,latin-ext/1223/1/1/1/3|Koh Santepheap/serif/100,300,400,700,900/khmer,latin/1224/3/3/2/1|Yaldevi/sans-serif/200,300,400,500,600,700/latin,latin-ext,sinhala/1225/1/1/0/2|Mynerve/handwriting/400/greek,latin,latin-ext,vietnamese/1226/0/1/2/4|Noto Serif Kannada/serif/100,200,300,400,500,600,700,800,900/kannada,latin,latin-ext/1227/3/3/1/2|Protest Revolution/display/400/latin,latin-ext,math,symbols,vietnamese/1228/4/1/3/3|Poor Story/display/400/korean,latin/1229/1/0/4/2|Milonga/display/400/latin,latin-ext/1230/1/2/3/4|Shalimar/handwriting/400/latin,latin-ext,vietnamese/1231/0/4/2/2|Gentium Book Plus/serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/1232/2/0/2/3|Dangrek/display/400/khmer,latin/1233/4/0/2/3|Galdeano/sans-serif/400/latin/1234/3/0/4/0|Fasthand/display/400/khmer,latin/1235/1/0/0/2|Noto Serif Telugu/serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,telugu/1236/2/3/1/2|Englebert/sans-serif/400/latin,latin-ext/1237/3/0/2/4|Smooch Sans/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1238/1/4/4/0|Big Shoulders Stencil Display/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1239/3/4/1/1|Tulpen One/display/400/latin/1240/2/4/0/2|Griffy/display/400/latin,latin-ext/1241/1/1/1/4|BIZ UDMincho/serif/400,700/cyrillic,greek-ext,japanese,latin,latin-ext/1242/0/2/1/0|Content/display/400,700/khmer/1243/0/4/3/0|Condiment/handwriting/400/latin,latin-ext/1244/0/0/2/4|Cairo Play/sans-serif/200,300,400,500,600,700,800,900/arabic,latin,latin-ext/1245/2/1/0/2|Buda/display/300/latin/1246/0/0/0/3|Yeon Sung/display/400/korean,latin/1247/2/0/2/4|Tiny5/sans-serif/400/cyrillic,cyrillic-ext,greek,latin,latin-ext/1248/3/1/3/0|Ysabeau Infant/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext,math,symbols,vietnamese/1249/0/1/0/2|Edu NSW ACT Foundation/handwriting/400,500,600,700/latin/1250/0/0/1/3|Sahitya/serif/400,700/devanagari,latin/1251/1/0/2/2|Averia Gruesa Libre/display/400/latin,latin-ext/1252/3/1/2/2|Bigelow Rules/display/400/latin,latin-ext/1253/2/4/2/3|Playwrite US Trad/handwriting/100,200,300,400/latin/1254/0/4/3/4|Tourney/display/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/1255/3/3/1/0|Peddana/serif/400/latin,telugu/1256/3/4/2/0|Shippori Antique B1/sans-serif/400/japanese,latin,latin-ext/1257/3/3/2/2|Water Brush/handwriting/400/latin,latin-ext,vietnamese/1258/1/0/0/1|Zain/sans-serif/200,300,400,700,800,900/arabic,latin/1259/3/0/0/2|Smokum/display/400/latin/1260/4/4/2/0|Playwrite DE Grund/handwriting/100,200,300,400/latin/1261/0/3/2/4|Poltawski Nowy/serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext,vietnamese/1262/3/2/2/3|Anta/sans-serif/400/latin,latin-ext,math,symbols/1263/3/3/4/0|Tiro Devanagari Sanskrit/serif/400,400i/devanagari,latin,latin-ext/1264/3/2/2/3|Noto Serif Oriya/serif/400,500,600,700/latin,latin-ext,oriya/1265/2/3/1/1|Joti One/display/400/latin,latin-ext/1266/4/3/0/3|Arbutus/serif/400/latin,latin-ext/1267/4/4/3/4|Mingzat/sans-serif/400/latin,latin-ext,lepcha/1268/1/3/4/0|Noto Serif Armenian/serif/100,200,300,400,500,600,700,800,900/armenian,latin,latin-ext/1269/3/3/1/2|Wellfleet/serif/400/latin,latin-ext/1270/4/3/2/0|Kode Mono/monospace/400,500,600,700/latin,latin-ext/1271/0/4/3/0|Gwendolyn/handwriting/400,700/latin,latin-ext,vietnamese/1272/0/0/3/4|Bahiana/display/400/latin,latin-ext/1273/4/4/3/0|Ranga/display/400,700/devanagari,latin,latin-ext/1274/4/4/1/2|Climate Crisis/display/400/latin,latin-ext/1276/-1/4/1/4|Noto Sans Samaritan/sans-serif/400/latin,latin-ext,samaritan/1277/2/2/4/1|Bungee Outline/display/400/latin,latin-ext,vietnamese/1278/0/4/3/0|Ysabeau/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext,math,symbols,vietnamese/1279/0/1/0/2|Aoboshi One/serif/400/japanese,latin,latin-ext/1280/3/3/1/1|Piedra/display/400/latin,latin-ext/1281/4/0/3/3|Odor Mean Chey/serif/400/khmer,latin/1282/4/1/1/0|Fascinate/display/400/latin/1283/4/3/2/4|Big Shoulders Inline Text/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1284/4/4/3/2|Hubballi/sans-serif/400/kannada,latin,latin-ext/1285/0/0/1/3|Phudu/display/300,400,500,600,700,800,900/cyrillic-ext,latin,latin-ext,vietnamese/1286/2/1/4/0|Danfo/serif/400/latin,latin-ext,vietnamese/1287/4/3/3/2|Praise/handwriting/400/latin,latin-ext,vietnamese/1288/4/4/3/4|Butcherman/display/400/latin,latin-ext/1289/4/2/3/0|Bona Nova SC/serif/400,400i,700/cyrillic,cyrillic-ext,greek,hebrew,latin,latin-ext,vietnamese/1290/0/1/1/2|Bonheur Royale/handwriting/400/latin,latin-ext,vietnamese/1291/0/4/3/4|Felipa/handwriting/400/latin,latin-ext/1292/0/0/1/3|Truculenta/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1293/3/0/2/4|Lancelot/display/400/latin,latin-ext/1294/0/0/1/0|Oldenburg/display/400/latin,latin-ext/1295/1/4/2/3|Federant/display/400/latin/1296/4/1/2/1|Sometype Mono/monospace/400,500,600,700,400i,500i,600i,700i/latin,latin-ext/1297/0/3/4/0|Luxurious Script/handwriting/400/latin,latin-ext,vietnamese/1298/1/4/3/4|Romanesco/handwriting/400/latin,latin-ext/1299/4/4/3/4|Anek Gurmukhi/sans-serif/100,200,300,400,500,600,700,800/gurmukhi,latin,latin-ext/1300/3/1/0/0|Encode Sans SC/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1301/2/2/3/0|Dr Sugiyama/handwriting/400/latin,latin-ext/1302/0/4/2/4|Lakki Reddy/handwriting/400/latin,telugu/1303/4/1/3/4|Ravi Prakash/display/400/latin,telugu/1305/4/0/3/0|Moderustic/sans-serif/300,400,500,600,700,800/cyrillic,cyrillic-ext,greek,latin,latin-ext/1306/2/2/4/2|Stalinist One/display/400/cyrillic,latin,latin-ext/1307/4/4/3/0|Rubik Glitch/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1308/4/3/0/0|Qahiri/sans-serif/400/arabic,latin/1309/2/4/4/1|Kumar One/display/400/gujarati,latin,latin-ext/1310/4/4/3/0|Erica One/display/400/latin,latin-ext/1311/4/4/3/0|Galindo/display/400/latin,latin-ext/1312/4/3/2/4|Ballet/handwriting/400/latin,latin-ext,vietnamese/1313/0/1/3/4|LXGW WenKai Mono TC/monospace/300,400,700/chinese-hongkong,cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,lisu,vietnamese/1314/0/2/1/3|Anek Kannada/sans-serif/100,200,300,400,500,600,700,800/kannada,latin,latin-ext/1315/3/1/0/0|Lumanosimo/handwriting/400/latin,latin-ext/1316/2/4/2/4|Rubik Wet Paint/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1317/4/3/0/3|LXGW WenKai TC/handwriting/300,400,700/chinese-hongkong,cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,lisu,vietnamese/1318/0/3/1/3|Protest Riot/display/400/latin,latin-ext,math,symbols,vietnamese/1319/4/1/2/4|Noto Sans Tai Viet/sans-serif/400/latin,latin-ext,tai-viet/1320/2/2/4/1|Plaster/display/400/latin,latin-ext/1321/4/4/4/0|Gasoek One/sans-serif/400/korean,latin,latin-ext/1322/4/4/0/1|Preahvihear/sans-serif/400/khmer,latin/1323/2/3/1/2|Princess Sofia/handwriting/400/latin,latin-ext/1324/0/0/2/3|Caramel/handwriting/400/latin,latin-ext,vietnamese/1325/3/4/3/4|GFS Neohellenic/sans-serif/400,400i,700,700i/greek/1326/1/0/1/1|Flavors/display/400/latin,latin-ext/1327/4/0/1/4|Alumni Sans Pinstripe/sans-serif/400,400i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/1328/0/4/0/2|Metal/display/400/khmer,latin/1329/1/0/2/3|Diplomata SC/display/400/latin,latin-ext/1330/4/4/2/1|Blaka/display/400/arabic,latin,latin-ext/1331/4/0/3/0|Snippet/sans-serif/400/latin/1332/0/2/1/3|Noto Sans Osmanya/sans-serif/400/latin,latin-ext,osmanya/1333/2/3/4/1|Teachers/sans-serif/400,500,600,700,800,400i,500i,600i,700i,800i/greek-ext,latin,latin-ext/1334/1/1/4/3|Molle/handwriting/400i/latin,latin-ext/1335/4/3/2/3|Sedan SC/serif/400/latin,latin-ext/1337/1/2/3/4|Luxurious Roman/display/400/latin,latin-ext,vietnamese/1338/1/2/3/3|Rubik Distressed/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1340/4/3/3/0|Gideon Roman/display/400/latin,latin-ext,vietnamese/1341/1/2/3/2|Mea Culpa/handwriting/400/latin,latin-ext,vietnamese/1343/0/0/3/4|Jacquard 24/display/400/latin,latin-ext/1344/4/0/3/0|Noto Serif Khojki/serif/400,500,600,700/khojki,latin,latin-ext/1345/3/3/1/1|Foldit/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1346/4/4/4/0|New Amsterdam/sans-serif/400/latin,latin-ext/1347/4/0/4/0|Miss Fajardose/handwriting/400/latin,latin-ext/1348/0/4/3/4|Revalia/display/400/latin,latin-ext/1350/3/4/2/4|Arsenal SC/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/1351/1/0/4/2|Sirin Stencil/display/400/latin/1352/1/0/2/3|Freeman/display/400/latin,latin-ext,vietnamese/1353/4/0/4/2|Siemreap/sans-serif/400/khmer/1354/0/4/3/0|Mr Bedfort/handwriting/400/latin,latin-ext/1356/0/0/2/3|Noto Serif Hebrew/serif/100,200,300,400,500,600,700,800,900/hebrew,latin,latin-ext/1357/3/3/1/2|Comme/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext/1358/1/2/0/2|Chenla/display/400/khmer/1359/0/4/3/0|Amiri Quran/serif/400/arabic,latin/1360/1/1/3/4|Babylonica/handwriting/400/latin,latin-ext,vietnamese/1361/0/-1/2/1|Alumni Sans Inline One/display/400,400i/latin,latin-ext,vietnamese/1362/4/4/2/0|Edu AU VIC WA NT Hand/handwriting/400,500,600,700/latin,latin-ext/1363/0/1/1/4|Victor Mono/monospace/100,200,300,400,500,600,700,100i,200i,300i,400i,500i,600i,700i/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/1364/0/4/0/2|Honk/display/400/latin,latin-ext,math,symbols,vietnamese/1365/1/1/0/4|IBM Plex Sans Devanagari/sans-serif/100,200,300,400,500,600,700/cyrillic-ext,devanagari,latin,latin-ext/1366/2/1/0/2|Trochut/display/400,400i,700/latin/1367/3/0/4/0|Uchen/serif/400/latin,tibetan/1368/1/3/2/2|Rubik Iso/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1369/2/3/2/0|Bacasime Antique/serif/400/latin,latin-ext/1370/1/1/2/3|Hanalei Fill/display/400/latin,latin-ext/1372/4/1/3/3|Single Day/display/400/korean/1373/3/0/2/4|Castoro Titling/display/400/latin,latin-ext/1374/0/4/2/3|Fruktur/display/400,400i/cyrillic-ext,latin,latin-ext,vietnamese/1375/4/1/2/4|Reem Kufi Ink/sans-serif/400/arabic,latin,latin-ext,vietnamese/1376/2/1/4/2|Jim Nightshade/handwriting/400/latin,latin-ext/1377/0/4/4/4|Almendra Display/display/400/latin,latin-ext/1378/0/0/2/2|Sevillana/display/400/latin,latin-ext/1379/0/0/3/4|Inspiration/handwriting/400/latin,latin-ext,vietnamese/1380/0/4/3/4|Gidugu/sans-serif/400/latin,telugu/1381/4/4/3/0|Labrada/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/1382/3/1/2/3|BioRhyme Expanded/serif/200,300,400,700,800/latin,latin-ext/1383/1/4/0/0|Butterfly Kids/handwriting/400/latin,latin-ext/1384/0/4/2/3|Bokor/display/400/khmer,latin/1385/4/0/1/1|Tiro Devanagari Marathi/serif/400,400i/devanagari,latin,latin-ext/1386/3/2/2/3|Bagel Fat One/display/400/korean,latin,latin-ext/1387/4/2/1/3|Aubrey/display/400/latin/1388/3/0/0/1|Devonshire/handwriting/400/latin,latin-ext/1389/3/4/2/3|Aref Ruqaa Ink/serif/400,700/arabic,latin,latin-ext/1390/2/1/2/3|Tiro Gurmukhi/serif/400,400i/gurmukhi,latin,latin-ext/1391/3/2/2/3|Emblema One/display/400/latin,latin-ext/1392/4/4/1/3|Darumadrop One/display/400/japanese,latin,latin-ext/1393/4/1/4/3|Rubik Spray Paint/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1394/4/3/3/0|Neonderthaw/handwriting/400/latin,latin-ext,vietnamese/1395/0/1/3/4|Diplomata/display/400/latin,latin-ext/1396/4/4/3/2|Rubik Beastly/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1397/4/3/1/3|Fleur De Leah/handwriting/400/latin,latin-ext,vietnamese/1399/0/0/3/3|Passero One/display/400/latin,latin-ext/1400/4/0/0/0|Kalnia Glaze/display/100,200,300,400,500,600,700/latin,latin-ext/1401/0/3/3/3|Combo/display/400/latin,latin-ext/1402/1/0/1/4|Alumni Sans Collegiate One/sans-serif/400,400i/cyrillic,latin,latin-ext,vietnamese/1403/-1/4/2/0|Noto Serif Tibetan/serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,tibetan/1404/3/3/1/2|Bruno Ace/display/400/latin,latin-ext/1405/3/4/4/1|Tiro Telugu/serif/400,400i/latin,latin-ext,telugu/1406/3/2/2/3|Hedvig Letters Serif/serif/400/latin,latin-ext,math,symbols/1407/1/3/1/1|Cactus Classical Serif/serif/400/chinese-hongkong,cyrillic,latin,latin-ext,vietnamese/1408/0/4/1/0|Island Moments/handwriting/400/latin,latin-ext,vietnamese/1409/0/0/0/3|Noto Serif Sinhala/serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,sinhala/1410/1/3/1/2|Splash/handwriting/400/latin,latin-ext,vietnamese/1411/0/1/3/3|Noto Serif Lao/serif/100,200,300,400,500,600,700,800,900/lao,latin,latin-ext/1412/3/3/1/2|Vibes/display/400/arabic,latin/1413/0/0/1/3|Yuji Boku/serif/400/cyrillic,japanese,latin,latin-ext/1414/1/3/3/4|Dhurjati/sans-serif/400/latin,telugu/1415/4/0/4/0|Diphylleia/serif/400/korean,latin,latin-ext/1416/1/2/2/4|Tiro Tamil/serif/400,400i/latin,latin-ext,tamil/1417/3/2/2/3|Anek Odia/sans-serif/100,200,300,400,500,600,700,800/latin,latin-ext,oriya/1418/3/0/0/0|Orbit/sans-serif/400/korean,latin,latin-ext/1419/0/4/3/0|Reem Kufi Fun/sans-serif/400,500,600,700/arabic,latin,latin-ext,vietnamese/1420/2/1/4/2|Grey Qo/handwriting/400/latin,latin-ext,vietnamese/1421/0/4/3/3|Tai Heritage Pro/serif/400,700/latin,latin-ext,tai-viet,vietnamese/1422/2/1/2/3|Purple Purse/display/400/latin,latin-ext/1423/3/2/2/3|Nuosu SIL/sans-serif/400/latin,latin-ext,yi/1424/2/1/1/0|Explora/handwriting/400/cherokee,latin,latin-ext,vietnamese/1425/0/4/3/4|Noto Sans Javanese/sans-serif/400,500,600,700/javanese,latin,latin-ext/1426/2/2/4/1|Reddit Sans Condensed/sans-serif/200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1427/3/0/0/1|Sigmar/display/400/latin,latin-ext,vietnamese/1429/4/4/3/2|Ruwudu/serif/400,500,600,700/arabic,latin,latin-ext/1430/1/1/2/3|Rubik Glitch Pop/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext,math,symbols/1431/4/3/3/0|Sedan/serif/400,400i/latin,latin-ext/1432/1/2/3/4|Noto Sans Adlam/sans-serif/400,500,600,700/adlam,latin,latin-ext/1435/2/2/4/1|Ruge Boogie/handwriting/400/latin,latin-ext,vietnamese/1436/0/0/3/4|Rubik Doodle Triangles/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext,math,symbols/1437/4/3/3/0|Lunasima/sans-serif/400,700/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese/1438/1/3/4/1|Yuji Mai/serif/400/cyrillic,japanese,latin,latin-ext/1439/3/3/3/4|Nabla/display/400/cyrillic-ext,latin,latin-ext,math,vietnamese/1440/4/1/2/0|Taprom/display/400/khmer,latin/1441/1/0/0/2|Moulpali/sans-serif/400/khmer,latin/1442/3/0/0/2|Love Light/handwriting/400/latin,latin-ext,vietnamese/1443/0/4/3/2|Noto Serif Gujarati/serif/100,200,300,400,500,600,700,800,900/gujarati,latin,latin-ext,math,symbols/1444/2/3/1/2|Noto Sans Mongolian/sans-serif/400/latin,latin-ext,math,mongolian,symbols/1445/2/2/4/1|Tsukimi Rounded/sans-serif/300,400,500,600,700/japanese,latin,latin-ext/1446/0/3/1/3|Bonbon/handwriting/400/latin/1447/1/3/3/4|Matemasie/sans-serif/400/latin,latin-ext/1448/4/4/2/4|Send Flowers/handwriting/400/latin,latin-ext,vietnamese/1449/0/0/3/2|Rubik Vinyl/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1450/1/3/4/4|Big Shoulders Inline Display/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1452/4/4/3/2|Oi/display/400/cyrillic,cyrillic-ext,greek,latin,latin-ext,tamil,vietnamese/1453/-1/4/2/4|Moirai One/display/400/korean,latin,latin-ext/1454/0/3/2/3|Hedvig Letters Sans/sans-serif/400/latin,latin-ext,math,symbols/1455/3/2/4/1|Bahianita/display/400/latin,latin-ext,vietnamese/1456/4/4/3/0|Langar/display/400/gurmukhi,latin,latin-ext/1457/4/1/1/3|Ga Maamli/display/400/latin,latin-ext,vietnamese/1458/4/0/3/4|M PLUS Code Latin/sans-serif/100,200,300,400,500,600,700/latin,latin-ext,vietnamese/1459/1/2/4/1|Konkhmer Sleokchher/display/400/khmer,latin,latin-ext/1460/4/3/4/1|Geostar/display/400/latin/1461/1/4/4/0|Noto Sans Tangsa/sans-serif/400,500,600,700/latin,latin-ext,tangsa/1462/2/2/4/1|Geostar Fill/display/400/latin/1464/2/4/3/0|Beiruti/sans-serif/200,300,400,500,600,700,800,900/arabic,latin,latin-ext,vietnamese/1465/2/0/1/3|Protest Guerrilla/display/400/latin,latin-ext,math,symbols,vietnamese/1466/4/1/4/0|Petemoss/handwriting/400/latin,latin-ext,vietnamese/1467/1/4/3/2|Jaro/sans-serif/400/latin,latin-ext,vietnamese/1468/4/0/1/0|Noto Rashi Hebrew/serif/100,200,300,400,500,600,700,800,900/greek-ext,hebrew,latin,latin-ext/1469/3/3/1/2|Suravaram/serif/400/latin,telugu/1470/3/0/1/1|Noto Sans Sora Sompeng/sans-serif/400,500,600,700/latin,latin-ext,sora-sompeng/1471/2/2/4/1|Bungee Tint/display/400/latin,latin-ext,vietnamese/1472/4/4/1/0|Noto Serif Balinese/serif/400/balinese,latin,latin-ext/1473/3/3/1/1|My Soul/handwriting/400/latin,latin-ext,vietnamese/1474/1/0/3/4|Twinkle Star/handwriting/400/latin,latin-ext,vietnamese/1475/1/2/3/4|Dai Banna SIL/serif/300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,new-tai-lue/1476/2/0/1/3|Namdhinggo/serif/400,500,600,700,800/latin,latin-ext,limbu/1477/1/1/1/3|Jacquard 12/display/400/latin,latin-ext,math,symbols/1478/4/0/4/0|Noto Sans Coptic/sans-serif/400/coptic,latin,latin-ext/1479/2/2/4/1|Snowburst One/display/400/latin,latin-ext/1480/0/4/3/3|Zen Loop/display/400,400i/latin,latin-ext/1481/0/4/1/2|Rock 3D/display/400/japanese,latin/1482/0/4/4/4|Sassy Frass/handwriting/400/latin,latin-ext,vietnamese/1483/0/4/3/4|Edu QLD Beginner/handwriting/400,500,600,700/latin/1484/0/0/2/4|Playwrite IS/handwriting/100,200,300,400/latin/1485/0/3/2/4|Noto Sans Tagalog/sans-serif/400/latin,latin-ext,tagalog/1486/2/2/4/1|Palette Mosaic/display/400/japanese,latin/1487/3/4/3/3|Noto Sans Cypro Minoan/sans-serif/400/cypro-minoan,latin,latin-ext/1488/2/2/4/1|Tiro Kannada/serif/400,400i/kannada,latin,latin-ext/1489/3/2/2/3|Kolker Brush/handwriting/400/latin,latin-ext,vietnamese/1490/1/4/3/1|Noto Serif Myanmar/serif/100,200,300,400,500,600,700,800,900/myanmar/1491/0/3/3/0|Noto Serif Vithkuqi/serif/400,500,600,700/latin,latin-ext,vithkuqi/1492/3/3/1/1|Wittgenstein/serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/latin,latin-ext/1493/2/1/1/0|Playwrite AR/handwriting/100,200,300,400/latin/1494/0/4/3/4|Rubik 80s Fade/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1495/4/3/1/0|Estonia/handwriting/400/latin,latin-ext,vietnamese/1496/0/4/0/2|Hanalei/display/400/latin,latin-ext/1497/3/1/1/3|Grechen Fuemen/handwriting/400/latin,latin-ext,vietnamese/1498/0/2/3/4|Noto Serif Ethiopic/serif/100,200,300,400,500,600,700,800,900/ethiopic,latin,latin-ext/1499/3/3/1/2|Noto Sans Carian/sans-serif/400/carian,latin,latin-ext/1500/2/2/4/1|Noto Sans Canadian Aboriginal/sans-serif/100,200,300,400,500,600,700,800,900/canadian-aboriginal,latin,latin-ext,math,symbols/1501/2/2/0/2|Playwrite BE VLG/handwriting/100,200,300,400/latin/1502/0/4/3/4|Sankofa Display/sans-serif/400/latin,latin-ext,vietnamese/1503/0/0/3/4|Are You Serious/handwriting/400/latin,latin-ext,vietnamese/1504/2/0/3/3|Noto Serif Tangut/serif/400/latin,latin-ext,tangut/1505/0/3/1/0|Playwrite FR Moderne/handwriting/100,200,300,400/latin/1506/0/4/2/4|Noto Sans Old Hungarian/sans-serif/400/latin,latin-ext,old-hungarian/1507/2/2/4/1|Moo Lah Lah/display/400/latin,latin-ext,vietnamese/1508/4/0/3/3|Playwrite AU NSW/handwriting/100,200,300,400/latin/1509/0/3/2/4|Noto Serif Tamil/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,tamil/1510/3/3/1/2|Noto Traditional Nushu/sans-serif/300,400,500,600,700/latin,latin-ext,nushu/1511/1/3/4/1|Shizuru/display/400/japanese,latin/1512/0/4/3/4|Noto Serif NP Hmong/serif/400,500,600,700/latin,nyiakeng-puachue-hmong/1513/3/3/1/1|Noto Sans Sharada/sans-serif/400/latin,latin-ext,sharada/1514/2/2/4/1|Playwrite MX/handwriting/100,200,300,400/latin/1515/0/4/3/4|Cherish/handwriting/400/latin,latin-ext,vietnamese/1516/1/4/4/3|Rubik Gemstones/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1517/4/3/3/0|Kings/handwriting/400/latin,latin-ext,vietnamese/1518/1/0/3/3|Annapurna SIL/serif/400,700/devanagari,latin,latin-ext,math,symbols/1519/3/1/1/0|Syne Tactile/display/400/latin,latin-ext/1520/1/0/3/3|Rubik Puddles/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1521/0/3/0/4|Noto Sans Hanunoo/sans-serif/400/hanunoo,latin,latin-ext/1522/2/2/4/1|Workbench/monospace/400/latin,math,symbols/1523/4/2/3/4|Noto Sans Thaana/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,thaana/1524/2/2/0/2|Playwrite NL/handwriting/100,200,300,400/latin/1525/0/4/3/4|Rubik Burned/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1526/2/3/1/4|Sixtyfour/monospace/400/latin,latin-ext,math,symbols/1527/2/4/3/4|Rubik Marker Hatch/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1528/4/3/4/0|Ole/handwriting/400/latin,latin-ext,vietnamese/1529/0/4/3/2|Grandiflora One/serif/400/korean,latin,latin-ext/1530/0/2/1/1|Ingrid Darling/handwriting/400/latin,latin-ext,vietnamese/1531/0/4/3/4|Playwrite SK/handwriting/100,200,300,400/latin/1532/0/4/3/4|Warnes/display/400/latin,latin-ext/1533/1/4/1/3|Noto Sans Elbasan/sans-serif/400/elbasan,latin,latin-ext/1534/2/2/4/1|Gajraj One/display/400/devanagari,latin,latin-ext/1535/4/4/0/1|Jacquarda Bastarda 9/display/400/latin,latin-ext,math,symbols/1536/2/3/3/0|Ojuju/sans-serif/200,300,400,500,600,700,800/latin,latin-ext,math,symbols,vietnamese/1537/0/1/2/4|Playwrite AU SA/handwriting/100,200,300,400/latin/1538/0/3/2/4|Rubik Pixels/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1539/4/3/3/0|Noto Sans Miao/sans-serif/400/latin,latin-ext,miao/1540/2/2/4/1|Noto Sans Avestan/sans-serif/400/avestan,latin,latin-ext/1541/2/2/4/1|Blaka Hollow/display/400/arabic,latin,latin-ext/1542/4/0/1/0|Playwrite AU VIC/handwriting/100,200,300,400/latin/1543/0/4/2/4|Noto Sans Syloti Nagri/sans-serif/400/latin,latin-ext,syloti-nagri/1544/2/2/4/1|Noto Serif Ottoman Siyaq/serif/400/latin,latin-ext,ottoman-siyaq-numbers/1546/3/3/1/1|Slackside One/handwriting/400/japanese,latin,latin-ext/1547/1/0/3/4|Noto Sans Cham/sans-serif/100,200,300,400,500,600,700,800,900/cham,latin,latin-ext/1548/2/2/0/2|Playwrite AT/handwriting/100,200,300,400,100i,200i,300i,400i/latin/1549/1/3/2/4|Noto Sans Chorasmian/sans-serif/400/chorasmian,latin,latin-ext,math,symbols/1550/2/3/4/1|Noto Sans Cherokee/sans-serif/100,200,300,400,500,600,700,800,900/cherokee,latin,latin-ext/1551/2/2/0/2|Noto Sans Old Italic/sans-serif/400/latin,latin-ext,old-italic/1552/2/2/4/1|Playwrite DK Uloopet/handwriting/100,200,300,400/latin/1553/0/3/2/4|Tapestry/handwriting/400/latin,latin-ext,vietnamese/1554/3/1/3/4|Noto Sans Nandinagari/sans-serif/400/latin,latin-ext,nandinagari/1555/2/3/4/1|Ubuntu Sans Mono/monospace/400,500,600,700,400i,500i,600i,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext/1556/0/3/0/3|Chokokutai/display/400/japanese,latin,latin-ext,vietnamese/1557/1/3/3/0|Playwrite HR/handwriting/100,200,300,400/latin/1558/1/4/2/4|Noto Sans Balinese/sans-serif/400,500,600,700/balinese,latin,latin-ext/1559/2/2/4/1|Rubik Microbe/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1560/4/3/3/0|Noto Sans Imperial Aramaic/sans-serif/400/imperial-aramaic,latin,latin-ext/1561/2/2/4/1|Playwrite DK Loopet/handwriting/100,200,300,400/latin/1562/1/3/2/4|Playwrite NG Modern/handwriting/100,200,300,400/latin/1563/0/3/2/4|Puppies Play/handwriting/400/latin,latin-ext,vietnamese/1564/1/4/3/3|Playwrite ES/handwriting/100,200,300,400/latin/1565/0/4/2/4|Noto Sans Tifinagh/sans-serif/400/latin,latin-ext,tifinagh/1566/2/2/4/1|Noto Sans Nag Mundari/sans-serif/400,500,600,700/latin,latin-ext,nag-mundari/1567/3/2/4/1|Noto Serif Toto/serif/400,500,600,700/latin,latin-ext,toto/1568/3/3/1/1|Noto Serif Khitan Small Script/serif/400/khitan-small-script,latin,latin-ext/1569/1/4/1/1|Playwrite CZ/handwriting/100,200,300,400/latin/1570/0/4/3/4|Noto Sans Deseret/sans-serif/400/deseret,latin,latin-ext/1571/2/2/4/1|Playwrite BE WAL/handwriting/100,200,300,400/latin/1572/0/4/3/4|Playwrite PE/handwriting/100,200,300,400/latin/1573/0/4/3/4|Playwrite NZ/handwriting/100,200,300,400/latin/1574/0/3/2/4|Noto Serif Gurmukhi/serif/100,200,300,400,500,600,700,800,900/gurmukhi,latin,latin-ext/1575/3/3/1/2|Noto Serif Yezidi/serif/400,500,600,700/latin,latin-ext,yezidi/1576/3/3/1/1|Playwrite CL/handwriting/100,200,300,400/latin/1577/0/4/3/4|Playwrite HR Lijeva/handwriting/100,200,300,400/latin/1578/0/4/2/4|Rubik Maps/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext,math,symbols/1579/4/3/4/0|Noto Sans Egyptian Hieroglyphs/sans-serif/400/egyptian-hieroglyphs,latin,latin-ext/1580/2/2/4/1|Noto Sans Vai/sans-serif/400/latin,latin-ext,vai/1581/2/2/4/1|Blaka Ink/display/400/arabic,latin,latin-ext/1582/4/0/3/0|Playwrite HU/handwriting/100,200,300,400/latin/1583/0/4/3/4|Noto Sans Syriac Eastern/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,syriac/1584/2/2/0/2|Playwrite ZA/handwriting/100,200,300,400/latin/1585/0/4/3/4|Playwrite IT Moderna/handwriting/100,200,300,400/latin/1586/0/3/2/4|Rubik Storm/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1587/4/3/3/0|Noto Sans Khojki/sans-serif/400/khojki,latin,latin-ext/1588/2/2/4/1|Playwrite US Modern/handwriting/100,200,300,400/latin/1589/0/3/2/4|Rubik Broken Fax/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext,math,symbols/1590/4/3/2/0|Playwrite CO/handwriting/100,200,300,400/latin/1591/0/4/3/4|Yuji Hentaigana Akari/handwriting/400/japanese,latin,latin-ext/1592/0/4/3/4|Playwrite AU QLD/handwriting/100,200,300,400/latin/1593/0/4/2/4|Lisu Bosa/serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,lisu/1594/2/1/2/0|Playwrite VN/handwriting/100,200,300,400/latin/1595/0/4/3/4|Playwrite AU TAS/handwriting/100,200,300,400/latin/1596/0/3/2/4|Playwrite ES Deco/handwriting/100,200,300,400/latin/1597/0/4/3/4|Playwrite PT/handwriting/100,200,300,400/latin/1598/0/4/3/4|Noto Sans Ol Chiki/sans-serif/400,500,600,700/latin,latin-ext,ol-chiki/1599/2/2/4/1|Noto Sans Vithkuqi/sans-serif/400,500,600,700/latin,latin-ext,vithkuqi/1600/2/2/4/1|Noto Sans Batak/sans-serif/400/batak,latin,latin-ext/1601/2/2/4/1|Noto Sans Kawi/sans-serif/400,500,600,700/kawi,latin,latin-ext/1602/2/2/4/1|Playwrite PL/handwriting/100,200,300,400/latin/1603/0/4/2/4|Noto Sans Sundanese/sans-serif/400,500,600,700/latin,latin-ext,sundanese/1604/2/2/4/1|Noto Sans Kaithi/sans-serif/400/kaithi,latin,latin-ext/1605/2/2/4/1|Maname/serif/400/latin,latin-ext,sinhala,vietnamese/1606/3/1/2/3|Noto Sans Adlam Unjoined/sans-serif/400,500,600,700/adlam,latin,latin-ext/1607/2/2/4/1|Kay Pho Du/serif/400,500,600,700/kayah-li,latin,latin-ext/1608/1/2/0/0|Noto Sans Medefaidrin/sans-serif/400,500,600,700/latin,latin-ext,medefaidrin/1609/2/2/4/1|Noto Sans New Tai Lue/sans-serif/400,500,600,700/latin,latin-ext,new-tai-lue/1610/2/2/4/1|Playwrite NO/handwriting/100,200,300,400/latin/1611/0/4/2/4|Rubik Maze/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1612/4/3/2/0|Noto Serif Ahom/serif/400/ahom,latin,latin-ext/1613/3/3/1/1|Noto Sans Bamum/sans-serif/400,500,600,700/bamum,latin,latin-ext/1614/2/2/4/1|Playwrite FR Trad/handwriting/100,200,300,400/latin/1615/0/4/3/4|Noto Sans Old North Arabian/sans-serif/400/latin,latin-ext,old-north-arabian/1616/2/2/4/1|Jaini/display/400/devanagari,latin,latin-ext/1617/4/4/2/2|Noto Sans Old Turkic/sans-serif/400/latin,latin-ext,old-turkic/1618/2/2/4/1|Noto Sans Lydian/sans-serif/400/latin,latin-ext,lydian/1619/2/2/4/1|Playwrite CA/handwriting/100,200,300,400/latin/1620/0/4/3/4|Noto Sans Marchen/sans-serif/400/latin,latin-ext,marchen/1621/2/2/4/1|Noto Serif Old Uyghur/serif/400/latin,latin-ext,old-uyghur/1622/3/2/1/1|Noto Sans Tagbanwa/sans-serif/400/latin,latin-ext,tagbanwa/1623/2/2/4/1|Noto Sans Old Persian/sans-serif/400/latin,latin-ext,old-persian/1624/2/2/4/1|Noto Sans Zanabazar Square/sans-serif/400/latin,latin-ext,zanabazar-square/1625/2/2/4/1|Rubik Lines/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext,math,symbols/1626/4/3/3/0|Playwrite IE/handwriting/100,200,300,400/latin/1628/0/4/3/4|Playwrite IN/handwriting/100,200,300,400/latin/1629/0/4/3/4|Noto Sans Palmyrene/sans-serif/400/latin,latin-ext,palmyrene/1630/2/2/4/1|Playwrite ID/handwriting/100,200,300,400/latin/1631/0/4/3/4|Noto Sans Osage/sans-serif/400/latin,latin-ext,osage/1632/2/2/4/1|Playwrite RO/handwriting/100,200,300,400/latin/1633/0/4/3/4|Noto Sans Tai Tham/sans-serif/400,500,600,700/latin,latin-ext,tai-tham/1634/1/3/4/1|Noto Sans Grantha/sans-serif/400/grantha,latin,latin-ext/1635/2/2/4/1|Noto Sans Yi/sans-serif/400/latin,latin-ext,yi/1636/2/2/4/1|Noto Sans NKo/sans-serif/400/latin,latin-ext,nko/1637/2/2/4/1|Playwrite DE SAS/handwriting/100,200,300,400/latin/1638/1/3/2/4|Narnoor/serif/400,500,600,700,800/gunjala-gondi,latin,latin-ext,math,symbols/1639/2/1/4/1|Noto Sans Tamil Supplement/sans-serif/400/latin,latin-ext,tamil-supplement/1640/2/2/4/1|Playwrite DE VA/handwriting/100,200,300,400/latin/1641/0/4/2/4|Playwrite DE LA/handwriting/100,200,300,400/latin/1642/1/4/3/4|Noto Serif Grantha/serif/400/grantha,latin,latin-ext/1643/3/3/1/1|Playwrite TZ/handwriting/100,200,300,400/latin/1644/0/4/3/4|Playwrite GB J/handwriting/100,200,300,400,100i,200i,300i,400i/latin/1645/0/3/2/4|Noto Sans Brahmi/sans-serif/400/brahmi,latin,latin-ext,math,symbols/1646/2/2/4/1|Noto Sans Bassa Vah/sans-serif/400,500,600,700/bassa-vah,latin,latin-ext/1649/1/3/4/1|Playwrite BR/handwriting/100,200,300,400/latin/1650/0/4/3/4|Noto Serif Makasar/serif/400/latin,latin-ext,makasar/1651/3/2/1/1|Noto Sans Lisu/sans-serif/400,500,600,700/latin,latin-ext,lisu/1652/2/2/4/1|Noto Sans Tai Le/sans-serif/400/latin,latin-ext,tai-le/1653/2/2/4/1|Noto Sans Multani/sans-serif/400/latin,latin-ext,multani/1654/2/2/4/1|Noto Sans Inscriptional Pahlavi/sans-serif/400/inscriptional-pahlavi,latin,latin-ext/1655/2/2/4/1|Playwrite IT Trad/handwriting/100,200,300,400/latin/1656/0/4/3/4|Noto Sans Mro/sans-serif/400/latin,latin-ext,mro/1657/2/2/4/1|Noto Sans Indic Siyaq Numbers/sans-serif/400/indic-siyaq-numbers,latin,latin-ext/1658/3/1/4/1|Noto Sans Siddham/sans-serif/400/latin,latin-ext,siddham/1659/2/2/4/1|Noto Sans Cuneiform/sans-serif/400/cuneiform,latin,latin-ext/1660/2/2/4/1|Noto Sans Takri/sans-serif/400/latin,latin-ext,takri/1663/2/2/4/1|Noto Sans Warang Citi/sans-serif/400/latin,latin-ext,warang-citi/1664/2/3/4/1|Noto Sans Chakma/sans-serif/400/chakma,latin,latin-ext/1665/2/2/4/1|Noto Sans Duployan/sans-serif/400,700/duployan,latin,latin-ext/1666/2/2/4/1|Noto Sans Rejang/sans-serif/400/latin,latin-ext,rejang/1667/2/2/4/1|Noto Sans Old Permic/sans-serif/400/cyrillic-ext,latin,latin-ext,old-permic/1668/2/2/4/1|Noto Serif Dogra/serif/400/dogra,latin,latin-ext/1669/3/3/1/1|Jaini Purva/display/400/devanagari,latin,latin-ext/1670/4/4/2/2|Padyakke Expanded One/serif/400/kannada,latin,latin-ext/1671/0/4/1/1|Noto Sans Newa/sans-serif/400/latin,latin-ext,newa/1672/2/2/4/1|Noto Sans Psalter Pahlavi/sans-serif/400/latin,latin-ext,psalter-pahlavi/1673/2/2/4/1|Noto Sans Inscriptional Parthian/sans-serif/400/inscriptional-parthian,latin,latin-ext/1674/2/2/4/1|Noto Sans Phoenician/sans-serif/400/latin,latin-ext,phoenician/1676/2/2/4/1|Noto Sans Runic/sans-serif/400/latin,latin-ext,runic/1677/2/2/4/1|Noto Znamenny Musical Notation/sans-serif/400/latin,latin-ext,math,symbols,znamenny/1678/2/2/4/1|Noto Sans Limbu/sans-serif/400/latin,latin-ext,limbu/1680/2/2/4/1|Noto Sans Hanifi Rohingya/sans-serif/400,500,600,700/hanifi-rohingya,latin,latin-ext/1681/2/2/4/1|Noto Sans Kharoshthi/sans-serif/400/kharoshthi,latin,latin-ext/1682/2/2/4/1|Noto Sans Cypriot/sans-serif/400/cypriot,latin,latin-ext/1683/2/2/4/1|Noto Sans Mayan Numerals/sans-serif/400/latin,latin-ext,mayan-numerals/1684/2/2/4/1|Noto Sans Wancho/sans-serif/400/latin,latin-ext,wancho/1685/1/3/4/1|Noto Sans Nabataean/sans-serif/400/latin,latin-ext,nabataean/1687/2/2/4/1|Noto Sans Old South Arabian/sans-serif/400/latin,latin-ext,old-south-arabian/1688/2/2/4/1|Noto Sans Linear A/sans-serif/400/latin,latin-ext,linear-a/1689/2/2/4/1|Noto Sans Pahawh Hmong/sans-serif/400/latin,latin-ext,pahawh-hmong/1690/2/2/4/1|Noto Sans Buginese/sans-serif/400/buginese,latin,latin-ext/1691/2/2/4/1|Noto Sans Linear B/sans-serif/400/latin,latin-ext,linear-b/1692/2/2/4/1|Yuji Hentaigana Akebono/handwriting/400/japanese,latin,latin-ext/1693/0/4/3/4|Noto Sans Phags Pa/sans-serif/400/phags-pa/1694/0/3/3/0|Noto Sans Elymaic/sans-serif/400/elymaic,latin,latin-ext/1695/1/3/4/1|Noto Sans Caucasian Albanian/sans-serif/400/caucasian-albanian,latin,latin-ext/1696/2/3/4/1|Noto Sans Modi/sans-serif/400/latin,latin-ext,modi/1697/2/2/4/1|Noto Sans Shavian/sans-serif/400/latin,latin-ext,shavian/1698/2/2/4/1|Noto Sans Lycian/sans-serif/400/lycian/1699/0/0/3/0|Noto Sans Syriac/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,syriac/1700/2/2/0/2|Noto Sans Mandaic/sans-serif/400/latin,latin-ext,mandaic/1701/2/2/4/1|Noto Sans Saurashtra/sans-serif/400/latin,latin-ext,saurashtra/1702/2/2/4/1|Noto Sans Gunjala Gondi/sans-serif/400,500,600,700/gunjala-gondi,latin,latin-ext/1703/2/2/4/1|Noto Sans Lepcha/sans-serif/400/latin,latin-ext,lepcha/1704/2/2/4/1|Noto Sans Mende Kikakui/sans-serif/400/latin,latin-ext,mende-kikakui/1705/2/2/4/1|Noto Sans Hatran/sans-serif/400/hatran,latin,latin-ext/1706/2/2/4/1|Noto Sans Kayah Li/sans-serif/400,500,600,700/kayah-li,latin,latin-ext/1707/2/2/4/1|Noto Sans Sogdian/sans-serif/400/latin,latin-ext,sogdian/1708/3/1/4/1|Noto Sans Mahajani/sans-serif/400/latin,latin-ext,mahajani/1709/2/2/4/1|Noto Sans Soyombo/sans-serif/400/latin,latin-ext,soyombo/1710/2/2/4/1|Noto Sans Old Sogdian/sans-serif/400/latin,latin-ext,old-sogdian/1711/3/1/4/1|Noto Sans Nushu/sans-serif/400/latin,latin-ext,nushu/1712/2/2/4/1|Noto Sans Ogham/sans-serif/400/latin,latin-ext,ogham/1713/2/2/4/1|Noto Sans Pau Cin Hau/sans-serif/400/latin,latin-ext,pau-cin-hau/1714/2/2/4/1|Noto Sans SignWriting/sans-serif/400/latin,latin-ext,signwriting/1715/0/4/4/1|Noto Sans Tirhuta/sans-serif/400/latin,latin-ext,tirhuta/1716/2/2/4/1|Noto Sans Meroitic/sans-serif/400/latin,latin-ext,meroitic,meroitic-cursive,meroitic-hieroglyphs/1717/2/2/4/1|Noto Sans Khudawadi/sans-serif/400/khudawadi,latin,latin-ext/1718/2/2/4/1|Noto Sans Manichaean/sans-serif/400/latin,latin-ext,manichaean/1719/2/2/4/1|Noto Sans Bhaiksuki/sans-serif/400/bhaiksuki,latin,latin-ext/1720/2/2/4/1|Noto Sans Ugaritic/sans-serif/400/latin,latin-ext,ugaritic/1722/2/2/4/1|Noto Sans Masaram Gondi/sans-serif/400/latin,latin-ext,masaram-gondi/1723/1/3/4/1";
  const _systemFonts = "Arial/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese|Comic Sans MS/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext|Courier New/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese|Georgia/serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext|Helvetica/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese|Impact/sans-serif/400/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext|Tahoma/sans-serif/400,700/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese|Times New Roman/serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese|Trebuchet MS/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext|Verdana/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese\n";
  const googleFonts = _googleFonts.split("|").map(FontFamily.parse);
  const systemFonts = _systemFonts.split("|").map(FontFamily.parse);
  class FontLoader {
    static loaded(name) {
      return __privateGet(this, _cache).has(name);
    }
    static async load(name) {
      let promise;
      const googleFont = googleFonts.find((font) => font.name === name);
      if (googleFont) {
        promise = __privateMethod(this, _FontLoader_static, loadGoogleFont_fn).call(this, googleFont);
      } else {
        promise = Promise.resolve();
      }
      __privateGet(this, _cache).set(name, promise);
      await promise;
    }
  }
  _cache = new WeakMap();
  _FontLoader_static = new WeakSet();
  appendStylesheet_fn = async function(url) {
    const link = document.createElement("link");
    link.href = url;
    link.rel = "stylesheet";
    link.type = "text/css";
    document.head.append(link);
  };
  loadGoogleFont_fn = async function(font) {
    const url = new URL("https://fonts.googleapis.com/css");
    const name = font.name + ":" + font.variants.join(",");
    url.searchParams.set("family", name);
    url.searchParams.set("display", "swap");
    __privateMethod(this, _FontLoader_static, appendStylesheet_fn).call(this, url.toString());
    await document.fonts.load(`1em "${font.name}"`);
  };
  __privateAdd(FontLoader, _FontLoader_static);
  __privateAdd(FontLoader, _cache, /* @__PURE__ */ new Map());
  const translations = {
    en: {
      selectFont: "Select a font",
      sampleText: "The quick brown fox jumps over the lazy dog.",
      filters: "Filters",
      search: "Search",
      subsets: {
        all: "(All Subsets)",
        arabic: "Arabic",
        bengali: "Bengali",
        "chinese-hongkong": "Chinese (Hong Kong)",
        "chinese-simplified": "Chinese (Simplified)",
        "chinese-traditional": "Chinese (Traditional)",
        cyrillic: "Cyrillic",
        "cyrillic-ext": "Cyrillic Extended",
        devanagari: "Devanagari",
        greek: "Greek",
        "greek-ext": "Greek Extended",
        gujarati: "Gujarati",
        gurmukhi: "Gurmukhi",
        hebrew: "Hebrew",
        japanese: "Japanese",
        kannada: "Kannada",
        khmer: "Khmer",
        korean: "Korean",
        latin: "Latin",
        "latin-ext": "Latin Extended",
        malayalam: "Malayalam",
        myanmar: "Myanmar",
        oriya: "Oriya",
        sinhala: "Sinhala",
        tamil: "Tamil",
        telugu: "Telugu",
        thai: "Thai",
        tibetan: "Tibetan",
        vietnamese: "Vietnamese"
      },
      categories: {
        serif: "Serif",
        "sans-serif": "Sans-serif",
        display: "Display",
        handwriting: "Handwriting",
        monospace: "Monospace"
      },
      metrics: "Metrics",
      widths: {
        all: "(All Widths)",
        "0!": "Very narrow",
        "1!": "Narrow",
        "2!": "Medium width",
        "3!": "Wide",
        "4!": "Very wide"
      },
      thicknesses: {
        all: "(All Thicknesses)",
        "0!": "Very thin",
        "1!": "Thin",
        "2!": "Medium thickness",
        "3!": "Thick",
        "4!": "Very thick"
      },
      complexities: {
        all: "(All Complexities)",
        "0!": "Very Simple",
        "1!": "Simple",
        "2!": "Medium complexity",
        "3!": "Complex",
        "4!": "Very complex"
      },
      curvatures: {
        all: "(All Curvatures)",
        "0!": "Very straight",
        "1!": "Straight",
        "2!": "Medium curvature",
        "3!": "Curvy",
        "4!": "Very Curvy"
      },
      sort: "Sort",
      sorts: {
        name: "Sort by Name",
        popularity: "Sort by Popularity",
        width: "Sort by Width",
        thickness: "Sort by Thickness",
        complexity: "Sort by Complexity",
        curvature: "Sort by Curvature"
      },
      clear: "Clear filters",
      cancel: "Cancel",
      select: "Select"
    },
    nl: {
      selectFont: "Selecteer een lettertype",
      sampleText: "Wazig tv-filmpje rond chique skybox.",
      filters: "Filters",
      search: "Zoeken",
      subsets: {
        all: "(Alle subsets)",
        arabic: "Arabisch",
        bengali: "Bengaals",
        "chinese-hongkong": "Chinees (Hongkong)",
        "chinese-simplified": "Chinees (Vereenvoudigd)",
        "chinese-traditional": "Chinees (Traditioneel)",
        cyrillic: "Cyrillisch",
        "cyrillic-ext": "Cyrillisch Uitgebreid",
        devanagari: "Devanagari",
        greek: "Grieks",
        "greek-ext": "Grieks Uitgebreid",
        gujarati: "Gujarati",
        gurmukhi: "Gurmukhi",
        hebrew: "Hebreeuws",
        japanese: "Japans",
        kannada: "Kannada",
        khmer: "Khmer",
        korean: "Koreaans",
        latin: "Latijn",
        "latin-ext": "Latijn Uitgebreid",
        malayalam: "Malayalam",
        myanmar: "Myanmar",
        oriya: "Oriya",
        sinhala: "Sinhala",
        tamil: "Tamil",
        telugu: "Telugu",
        thai: "Thai",
        tibetan: "Tibetaans",
        vietnamese: "Vietnamees"
      },
      categories: {
        serif: "Schreef",
        "sans-serif": "Schreefloos",
        display: "Display",
        handwriting: "Handschrift",
        monospace: "Monospace"
      },
      metrics: "Metriek",
      widths: {
        all: "(Alle breedtes)",
        "0!": "Zeer smal",
        "1!": "Smal",
        "2!": "Normale breedte",
        "3!": "Breed",
        "4!": "Zeer breed"
      },
      thicknesses: {
        all: "(Alle diktes)",
        "0!": "Zeer dun",
        "1!": "Dun",
        "2!": "Normale dikte",
        "3!": "Dik",
        "4!": "Zeer dik"
      },
      complexities: {
        all: "(Alle complexiteiten)",
        "0!": "Zeer eenvoudig",
        "1!": "Eenvoudig",
        "2!": "Normale complexiteit",
        "3!": "Complex",
        "4!": "Zeer complex"
      },
      curvatures: {
        all: "(Alle krommingen)",
        "0!": "Zeer recht",
        "1!": "Recht",
        "2!": "Normale kromming",
        "3!": "Gebogen",
        "4!": "Zeer gebogen"
      },
      sort: "Sorteren",
      sorts: {
        name: "Sorteer op naam",
        popularity: "Sorteer op populariteit",
        width: "Sorteer op breedte",
        thickness: "Sorteer op dikte",
        complexity: "Sorteer op complexiteit",
        curvature: "Sorteer op kromming"
      },
      clear: "Filters wissen",
      cancel: "Annuleren",
      select: "Selecteren"
    },
    de: {
      selectFont: "Schriftart auswählen",
      sampleText: "Falsches Üben von Xylophonmusik quält jeden größeren Zwerg.",
      filters: "Filter",
      search: "Suche",
      subsets: {
        all: "(Alle Untergruppen)",
        arabic: "Arabisch",
        bengali: "Bengalisch",
        "chinese-hongkong": "Chinesisch (Hongkong)",
        "chinese-simplified": "Chinesisch (Vereinfacht)",
        "chinese-traditional": "Chinesisch (Traditionell)",
        cyrillic: "Kyrillisch",
        "cyrillic-ext": "Kyrillisch Erweitert",
        devanagari: "Devanagari",
        greek: "Griechisch",
        "greek-ext": "Griechisch Erweitert",
        gujarati: "Gujarati",
        gurmukhi: "Gurmukhi",
        hebrew: "Hebräisch",
        japanese: "Japanisch",
        kannada: "Kannada",
        khmer: "Khmer",
        korean: "Koreanisch",
        latin: "Lateinisch",
        "latin-ext": "Lateinisch Erweitert",
        malayalam: "Malayalam",
        myanmar: "Myanmar",
        oriya: "Oriya",
        sinhala: "Singhalesisch",
        tamil: "Tamil",
        telugu: "Telugu",
        thai: "Thailändisch",
        tibetan: "Tibetisch",
        vietnamese: "Vietnamesisch"
      },
      categories: {
        serif: "Serifen",
        "sans-serif": "Serifenlos",
        display: "Display",
        handwriting: "Handschrift",
        monospace: "Monospace"
      },
      metrics: "Metriken",
      widths: {
        all: "(Alle Breiten)",
        "0!": "Sehr schmal",
        "1!": "Schmal",
        "2!": "Mittlere Breite",
        "3!": "Breit",
        "4!": "Sehr breit"
      },
      thicknesses: {
        all: "(Alle Strichstärken)",
        "0!": "Sehr dünn",
        "1!": "Dünn",
        "2!": "Mittlere Stärke",
        "3!": "Dick",
        "4!": "Sehr dick"
      },
      complexities: {
        all: "(Alle Komplexitäten)",
        "0!": "Sehr einfach",
        "1!": "Einfach",
        "2!": "Mittlere Komplexität",
        "3!": "Komplex",
        "4!": "Sehr komplex"
      },
      curvatures: {
        all: "(Alle Krümmungen)",
        "0!": "Sehr gerade",
        "1!": "Gerade",
        "2!": "Mittlere Krümmung",
        "3!": "Geschwungen",
        "4!": "Sehr geschwungen"
      },
      sort: "Sortieren",
      sorts: {
        name: "Nach Name sortieren",
        popularity: "Nach Beliebtheit sortieren",
        width: "Nach Breite sortieren",
        thickness: "Nach Strichstärke sortieren",
        complexity: "Nach Komplexität sortieren",
        curvature: "Nach Krümmung sortieren"
      },
      clear: "Filter löschen",
      cancel: "Abbrechen",
      select: "Auswählen"
    },
    es: {
      selectFont: "Selecciona una fuente",
      sampleText: "El veloz murciélago hindú comía feliz cardillo y kiwi.",
      filters: "Filtros",
      search: "Buscar",
      subsets: {
        all: "(Todos los subconjuntos)",
        arabic: "Árabe",
        bengali: "Bengalí",
        "chinese-hongkong": "Chino (Hong Kong)",
        "chinese-simplified": "Chino (Simplificado)",
        "chinese-traditional": "Chino (Tradicional)",
        cyrillic: "Cirílico",
        "cyrillic-ext": "Cirílico extendido",
        devanagari: "Devanagari",
        greek: "Griego",
        "greek-ext": "Griego extendido",
        gujarati: "Gujarati",
        gurmukhi: "Gurmukhi",
        hebrew: "Hebreo",
        japanese: "Japonés",
        kannada: "Canarés",
        khmer: "Jemer",
        korean: "Coreano",
        latin: "Latín",
        "latin-ext": "Latín extendido",
        malayalam: "Malayalam",
        myanmar: "Birmano",
        oriya: "Oriya",
        sinhala: "Cingalés",
        tamil: "Tamil",
        telugu: "Telugu",
        thai: "Tailandés",
        tibetan: "Tibetano",
        vietnamese: "Vietnamita"
      },
      categories: {
        serif: "Serifa",
        "sans-serif": "Sans serif",
        display: "Decorativo",
        handwriting: "Manuscrita",
        monospace: "Monoespaciada"
      },
      metrics: "Métricas",
      widths: {
        all: "(Todas las anchuras)",
        "0!": "Muy estrecha",
        "1!": "Estrecha",
        "2!": "Anchura media",
        "3!": "Ancha",
        "4!": "Muy ancha"
      },
      thicknesses: {
        all: "(Todos los grosores)",
        "0!": "Muy delgada",
        "1!": "Delgada",
        "2!": "Grosor medio",
        "3!": "Gruesa",
        "4!": "Muy gruesa"
      },
      complexities: {
        all: "(Todas las complejidades)",
        "0!": "Muy simple",
        "1!": "Simple",
        "2!": "Complejidad media",
        "3!": "Compleja",
        "4!": "Muy compleja"
      },
      curvatures: {
        all: "(Todas las curvaturas)",
        "0!": "Muy recta",
        "1!": "Recta",
        "2!": "Curvatura media",
        "3!": "Curvada",
        "4!": "Muy curvada"
      },
      sort: "Ordenar",
      sorts: {
        name: "Ordenar por nombre",
        popularity: "Ordenar por popularidad",
        width: "Ordenar por anchura",
        thickness: "Ordenar por grosor",
        complexity: "Ordenar por complejidad",
        curvature: "Ordenar por curvatura"
      },
      clear: "Borrar filtros",
      cancel: "Cancelar",
      select: "Seleccionar"
    },
    fr: {
      selectFont: "Sélectionnez une police",
      sampleText: "Portez ce vieux whisky au juge blond qui fume.",
      filters: "Filtres",
      search: "Rechercher",
      subsets: {
        all: "(Tous les sous-ensembles)",
        arabic: "Arabe",
        bengali: "Bengali",
        "chinese-hongkong": "Chinois (Hong Kong)",
        "chinese-simplified": "Chinois (simplifié)",
        "chinese-traditional": "Chinois (traditionnel)",
        cyrillic: "Cyrillique",
        "cyrillic-ext": "Cyrillique étendu",
        devanagari: "Devanagari",
        greek: "Grec",
        "greek-ext": "Grec étendu",
        gujarati: "Gujarati",
        gurmukhi: "Gurmukhi",
        hebrew: "Hébreu",
        japanese: "Japonais",
        kannada: "Kannada",
        khmer: "Khmer",
        korean: "Coréen",
        latin: "Latin",
        "latin-ext": "Latin étendu",
        malayalam: "Malayalam",
        myanmar: "Myanmar",
        oriya: "Oriya",
        sinhala: "Singhalais",
        tamil: "Tamoul",
        telugu: "Telugu",
        thai: "Thaï",
        tibetan: "Tibétain",
        vietnamese: "Vietnamien"
      },
      categories: {
        serif: "Empattement",
        "sans-serif": "Sans empattement",
        display: "Décoratives",
        handwriting: "Écriture manuscrite",
        monospace: "Monospace"
      },
      metrics: "Métriques",
      widths: {
        all: "(Toutes les largeurs)",
        "0!": "Très étroit",
        "1!": "Étroit",
        "2!": "Largeur moyenne",
        "3!": "Large",
        "4!": "Très large"
      },
      thicknesses: {
        all: "(Toutes les épaisseurs)",
        "0!": "Très fin",
        "1!": "Fin",
        "2!": "Épaisseur moyenne",
        "3!": "Épais",
        "4!": "Très épais"
      },
      complexities: {
        all: "(Toutes les complexités)",
        "0!": "Très simple",
        "1!": "Simple",
        "2!": "Complexité moyenne",
        "3!": "Complexe",
        "4!": "Très complexe"
      },
      curvatures: {
        all: "(Toutes les courbures)",
        "0!": "Très droit",
        "1!": "Droit",
        "2!": "Courbure moyenne",
        "3!": "Courbé",
        "4!": "Très courbé"
      },
      sort: "Trier",
      sorts: {
        name: "Trier par nom",
        popularity: "Trier par popularité",
        width: "Trier par largeur",
        thickness: "Trier par épaisseur",
        complexity: "Trier par complexité",
        curvature: "Trier par courbure"
      },
      clear: "Effacer filtres",
      cancel: "Annuler",
      select: "Sélectionner"
    }
  };
  class PickerDialog {
    constructor(parent) {
      __publicField(this, "opened", false);
      __publicField(this, "picker");
      __publicField(this, "config");
      __publicField(this, "modal");
      __publicField(this, "observer");
      __publicField(this, "selected");
      __publicField(this, "hovered", null);
      __publicField(this, "$modal");
      __publicField(this, "$search");
      __publicField(this, "$subset");
      __publicField(this, "$categories");
      __publicField(this, "$width");
      __publicField(this, "$thickness");
      __publicField(this, "$complexity");
      __publicField(this, "$curvature");
      __publicField(this, "$sort");
      __publicField(this, "$sortOrder");
      __publicField(this, "$preview");
      __publicField(this, "$fonts");
      __publicField(this, "$variants");
      __publicField(this, "$clearBtn");
      __publicField(this, "$cancelBtn");
      __publicField(this, "$pickBtn");
      this.createLayout(parent);
      this.modal = new Modal(this.$modal, { keyboard: false });
      this.observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.intersectionRatio <= 0) return;
          const $target = entry.target;
          const family = $target.dataset.family;
          if (family) FontLoader.load(family);
          this.observer.unobserve($target);
        }
      });
    }
    createLayout(parent) {
      parent.insertAdjacentHTML("afterend", dialogContent);
      this.$modal = document.querySelector("#fp__modal");
      this.$search = this.$modal.querySelector("#fp__search");
      this.$subset = this.$modal.querySelector("#fp__subsets");
      this.$categories = this.$modal.querySelector("#fp__categories");
      this.$width = this.$modal.querySelector("#fp__width");
      this.$thickness = this.$modal.querySelector("#fp__thickness");
      this.$complexity = this.$modal.querySelector("#fp__complexity");
      this.$curvature = this.$modal.querySelector("#fp__curvature");
      this.$sort = this.$modal.querySelector("#fp__sort");
      this.$sortOrder = this.$modal.querySelector("#fp__sort-order");
      this.$preview = this.$modal.querySelector("#fp__preview");
      this.$fonts = this.$modal.querySelector("#fp__fonts");
      this.$variants = this.$modal.querySelector("#fp__variants");
      this.$clearBtn = this.$modal.querySelector("#fp__clear");
      this.$cancelBtn = this.$modal.querySelector("#fp__cancel");
      this.$pickBtn = this.$modal.querySelector("#fp__pick");
    }
    getElementFor(family) {
      const $font = this.$fonts.querySelector(`[data-family="${family.name}"]`);
      if (!$font) throw new Error(`Could not find element for '${family.name}'!`);
      return $font;
    }
    getFamilyFor($element) {
      const name = $element.dataset.family;
      if (!name) return null;
      return this.picker.getFamily(name);
    }
    getFamilies() {
      return Array.from(this.picker.families.values());
    }
    sortFamilies(orderBy, reverse = false) {
      const families = this.getFamilies();
      const sorted = families.sort((a, b) => familySort(a, b, orderBy));
      if (reverse) sorted.reverse();
      for (const family of sorted) {
        this.$fonts.append(this.getElementFor(family));
      }
      for (const favourite of this.picker.favourites) {
        const $favourite = this.getElementFor(favourite);
        this.$fonts.prepend($favourite);
      }
      const $selected = this.getElementFor(this.selected.family);
      this.$fonts.prepend($selected);
      this.$fonts.scrollTop = 0;
    }
    filterFamilies(filters) {
      const families = this.getFamilies();
      const filtered = families.filter((a) => familyFilter(a, filters));
      const familyNames = filtered.map((filtered2) => filtered2.name);
      for (const $font of this.$fonts.children) {
        const name = $font.dataset.family;
        const hidden = !familyNames.includes(name);
        $font.classList.toggle("d-none", hidden);
      }
    }
    updateSort() {
      const orderBy = this.$sort.value;
      const reverse = this.$sortOrder.classList.contains("active");
      this.sortFamilies(orderBy, reverse);
    }
    updateFilter() {
      this.filterFamilies({
        name: this.$search.value,
        subset: this.$subset.value,
        categories: getActiveBadges(this.$categories),
        complexity: this.$complexity.value,
        curvature: this.$curvature.value,
        thickness: this.$thickness.value,
        width: this.$width.value
      });
    }
    updatePreview() {
      const font = this.hovered ?? this.selected;
      this.$preview.style.fontFamily = `"${font.family}"`;
      this.$preview.style.fontWeight = font.weight.toString();
      this.$preview.style.fontStyle = font.style;
    }
    selectFont(font) {
      for (const $font of this.$fonts.querySelectorAll(".fp__selected")) {
        $font.classList.remove("fp__selected");
      }
      this.selected = font;
      this.getElementFor(font.family).classList.add("fp__selected");
      if (!this.config.variants) return;
      this.$variants.textContent = "";
      this.$variants.append(...createVariants(font.family.variants));
      const $weight = this.$variants.querySelector(`[value="${font.weight}"]`);
      const $italic = this.$variants.querySelector("#fp__italic");
      if (!$weight) throw new Error("Could not find weight button for selected font.");
      if (!$italic) throw new Error("Could not find italic button for selected font.");
      $weight.checked = true;
      $italic.classList.toggle("active", font.italic);
      this.updateVariant();
    }
    favouriteFont(font) {
      const $family = this.getElementFor(font.family);
      const value = $family.classList.toggle("fp__fav");
      this.picker.markFavourite(font.family, value);
      this.updateSort();
    }
    updateVariant() {
      if (!this.config.variants) return;
      const $weight = this.$variants.querySelector(".fp__weight:checked");
      const $italic = this.$variants.querySelector("#fp__italic");
      if (!$weight) throw new Error("Could not find weight button for selected font.");
      if (!$italic) throw new Error("Could not find italic button for selected font.");
      let weight = parseInt($weight.value);
      let italic = $italic.classList.contains("active");
      const hasRegular = this.selected.family.variants.includes(`${weight}`);
      const hasItalic = this.selected.family.variants.includes(`${weight}i`);
      $italic.disabled = !hasRegular || !hasItalic;
      if (!hasRegular) italic = true;
      if (!hasItalic) italic = false;
      $italic.classList.toggle("active", italic);
      this.selected.weight = weight;
      this.selected.italic = italic;
      this.updatePreview();
    }
    createFonts() {
      for (const font of this.getFamilies()) {
        const $item = createFont(font);
        this.$fonts.append($item);
        this.observer.observe($item);
      }
    }
    applyTranslations() {
      const dict = translations[this.config.language];
      this.$search.placeholder = dict.search;
      this.$modal.querySelector("#fp__title").textContent = dict.selectFont;
      this.$subset.append(...createOptions(dict.subsets));
      this.$categories.append(...createBadges(dict.categories));
      this.$width.append(...createOptions(dict.widths));
      this.$thickness.append(...createOptions(dict.thicknesses));
      this.$complexity.append(...createOptions(dict.complexities));
      this.$curvature.append(...createOptions(dict.curvatures));
      this.$sort.append(...createOptions(dict.sorts));
      this.$preview.textContent = this.config.previewText ?? dict.sampleText;
      this.$modal.querySelector("#fp__t-filters").textContent = dict.filters;
      this.$modal.querySelector("#fp__t-metrics").textContent = dict.metrics;
      this.$modal.querySelector("#fp__t-sort").textContent = dict.sort;
      this.$modal.querySelector("#fp__t-clear").textContent = dict.clear;
      this.$modal.querySelector("#fp__t-cancel").textContent = dict.cancel;
      this.$modal.querySelector("#fp__t-pick").textContent = dict.select;
    }
    onFontHover(event) {
      const family = this.getFamilyFor(event.target);
      if (!family) return;
      if (family === this.selected.family) {
        this.hovered = null;
      } else {
        this.hovered = Font.parse(family);
      }
      this.updatePreview();
    }
    onFontUnhover(event) {
      if (!this.getFamilyFor(event.target)) return;
      this.hovered = null;
      this.updatePreview();
    }
    onFontClick(event) {
      const $target = event.target;
      if ($target.classList.contains("fp__heart")) {
        const family2 = this.getFamilyFor($target.parentElement);
        if (!family2) return;
        const font = Font.parse(family2);
        this.selectFont(font);
        this.favouriteFont(font);
        return;
      }
      const family = this.getFamilyFor($target);
      if (!family || this.selected.family === family) return;
      this.selectFont(Font.parse(family));
    }
    onFontDoubleClick(event) {
      if (!this.getFamilyFor(event.target)) return;
      this.submit();
    }
    selectClosestFont(excluded, reverse, $from) {
      let $target = $from ? $from : this.getElementFor(this.selected.family);
      while (excluded || $target.classList.contains("d-none")) {
        excluded = false;
        const $next = reverse ? $target.previousElementSibling : $target.nextElementSibling;
        if (!$next) return;
        $target = $next;
      }
      $target.click();
      $target.scrollIntoView({
        behavior: "instant",
        block: "center"
      });
    }
    selectClosestVariant(reverse) {
      var _a, _b;
      const $origin = this.$variants.querySelector(".fp__weight:checked");
      const $next = reverse ? (_a = $origin == null ? void 0 : $origin.previousElementSibling) == null ? void 0 : _a.previousElementSibling : (_b = $origin == null ? void 0 : $origin.nextElementSibling) == null ? void 0 : _b.nextElementSibling;
      if (!$next) return;
      const $target = $next;
      $target.checked = true;
      this.updateVariant();
    }
    toggleVariantItalic() {
      const $target = this.$variants.querySelector("#fp__italic");
      if (!$target) return;
      $target.classList.toggle("active");
      this.updateVariant();
    }
    onKeyPressed(event) {
      if (!this.opened) return;
      const $target = event.target;
      if ($target && $target !== this.$modal && !this.$fonts.contains($target)) {
        return;
      }
      let handled = true;
      if (event.key === "Escape") {
        this.cancel();
      } else if (event.key === "f") {
        this.favouriteFont(this.selected);
      } else if (event.key === "PageUp") {
        this.selectClosestFont(false, false, this.$fonts.firstElementChild);
      } else if (event.key === "PageDown") {
        this.selectClosestFont(false, true, this.$fonts.lastElementChild);
      } else if (event.key === "ArrowUp") {
        this.selectClosestFont(true, true, null);
      } else if (event.key === "ArrowDown") {
        this.selectClosestFont(true, false, null);
      } else if (event.key === "ArrowLeft") {
        this.selectClosestVariant(true);
      } else if (event.key === "ArrowRight") {
        this.selectClosestVariant(false);
      } else if (event.key === "i") {
        this.toggleVariantItalic();
      } else if (event.key === "/") {
        this.$search.focus();
      } else if (event.key === "Enter") {
        this.submit();
      } else {
        handled = false;
      }
      if (handled) event.preventDefault();
    }
    bindEvents() {
      const filterCallback = () => {
        this.filtersChanged();
        this.updateFilter();
      };
      this.$categories.addEventListener("click", filterCallback);
      this.$search.addEventListener("input", filterCallback);
      this.$subset.addEventListener("input", filterCallback);
      this.$width.addEventListener("input", filterCallback);
      this.$thickness.addEventListener("input", filterCallback);
      this.$complexity.addEventListener("input", filterCallback);
      this.$curvature.addEventListener("input", filterCallback);
      const sortCallback = () => {
        this.filtersChanged();
        this.updateSort();
      };
      this.$sort.addEventListener("input", sortCallback);
      this.$sortOrder.addEventListener("click", sortCallback);
      this.$fonts.addEventListener("mouseover", (event) => this.onFontHover(event));
      this.$fonts.addEventListener("mouseout", (event) => this.onFontUnhover(event));
      this.$fonts.addEventListener("click", (event) => this.onFontClick(event));
      this.$fonts.addEventListener("dblclick", (event) => this.onFontDoubleClick(event));
      this.$variants.addEventListener("input", () => this.updateVariant());
      this.$variants.addEventListener("click", () => this.updateVariant());
      this.$clearBtn.addEventListener("click", () => this.assignDefaults());
      this.$pickBtn.addEventListener("click", () => this.submit());
      this.$cancelBtn.addEventListener("click", () => this.cancel());
      this.$modal.addEventListener("keydown", (event) => this.onKeyPressed(event));
    }
    applyConfiguration() {
      this.picker.favourites.forEach((family) => this.getElementFor(family).classList.add("fp__fav"));
      this.$variants.classList.toggle("d-none", !this.config.variants);
    }
    filtersChanged(changed = true) {
      this.$clearBtn.classList.toggle("d-none", !changed);
    }
    assignDefaults() {
      setActiveBadges(this.$categories, this.config.defaultCategories);
      this.$search.value = "";
      this.$subset.value = this.config.defaultSubset;
      this.$width.value = this.config.defaultWidth;
      this.$thickness.value = this.config.defaultThickness;
      this.$complexity.value = this.config.defaultComplexity;
      this.$curvature.value = this.config.defaultCurvature;
      this.$sort.value = this.config.sortBy;
      this.$sortOrder.classList.toggle("active", this.config.sortReverse);
      this.updateSort();
      this.updateFilter();
      this.filtersChanged(false);
    }
    async open(picker) {
      if (this.opened) return;
      this.opened = true;
      this.picker = picker;
      this.config = this.picker.getConfig();
      this.applyTranslations();
      this.bindEvents();
      this.modal.show();
      this.createFonts();
      this.selectFont(picker.font);
      this.applyConfiguration();
      this.assignDefaults();
      this.picker.emit("open");
      await new Promise((resolve) => {
        this.$modal.addEventListener("shown.bs.modal", () => this.$modal.focus());
        this.$modal.addEventListener("hidden.bs.modal", () => resolve());
      });
      this.picker.emit("close");
      this.$modal.remove();
    }
    submit() {
      this.picker.setFont(this.selected);
      this.picker.emit("pick", this.selected);
      this.close();
    }
    cancel() {
      this.picker.emit("cancel");
      this.close();
    }
    close() {
      this.opened = false;
      this.modal.hide();
    }
  }
  let pickerDialog = null;
  class FontPicker2 extends EventEmitter$1 {
    constructor(el, config = {}) {
      super();
      __publicField(this, "$el");
      __publicField(this, "_font");
      __publicField(this, "_families");
      __publicField(this, "_favourites");
      __publicField(this, "_config", {
        language: "en",
        container: document.body,
        previewText: null,
        font: "Arial",
        verbose: false,
        variants: true,
        favourites: [],
        saveFavourites: true,
        storageKey: "fp__favourites",
        defaultSubset: "all",
        defaultCategories: ["display", "handwriting", "monospace", "sans-serif", "serif"],
        defaultWidth: "all",
        defaultThickness: "all",
        defaultComplexity: "all",
        defaultCurvature: "all",
        sortBy: "popularity",
        sortReverse: false,
        googleFonts: null,
        systemFonts: null,
        extraFonts: []
      });
      this.$el = el;
      this.$el.classList.add("__fp", "font-picker", "form-select");
      this.$el.addEventListener("click", this.open.bind(this));
      this.configure(config);
      this.initialize();
    }
    get font() {
      return this._font;
    }
    get families() {
      return this._families;
    }
    get favourites() {
      return this._favourites;
    }
    getConfig() {
      return { ...this._config };
    }
    configure(options) {
      Object.assign(this._config, options);
      const keys = Object.keys(options);
      if (!this.families || keys.includes("googleFonts") || keys.includes("systemFonts") || keys.includes("extraFonts")) {
        this.updateFamilies();
      }
      if (!this.font || keys.includes("font")) {
        this.setFont(this._config.font);
      }
    }
    initialize() {
      const favourites = this._config.favourites.slice();
      if (this._config.saveFavourites) {
        const names = localStorage.getItem(this._config.storageKey);
        if (names) favourites.push(...JSON.parse(names));
      }
      this._favourites = /* @__PURE__ */ new Set();
      for (const name of favourites) {
        try {
          const family = this.getFamily(name);
          this._favourites.add(family);
        } catch (error) {
          console.warn(`Font from favourites is not available: '${name}'!`);
        }
      }
    }
    updateFamilies() {
      const families = [
        ...googleFonts.filter((font) => {
          var _a;
          return ((_a = this._config.googleFonts) == null ? void 0 : _a.includes(font.name)) ?? true;
        }),
        ...systemFonts.filter((font) => {
          var _a;
          return ((_a = this._config.systemFonts) == null ? void 0 : _a.includes(font.name)) ?? true;
        }),
        ...this._config.extraFonts.map((font) => new FontFamily(font))
      ];
      this._families = /* @__PURE__ */ new Map();
      families.forEach((family) => this.families.set(family.name, family));
    }
    getFamily(name) {
      const family = this.families.get(name);
      if (!family) throw new Error(`Could not find font family '${name}'!`);
      return family;
    }
    setFont(font) {
      if (font instanceof Font) {
        this._font = font;
      } else if (typeof font === "string") {
        const [name, variant] = font.split(":");
        const family = this.getFamily(name);
        this._font = Font.parse(family, variant);
      } else {
        this._font = Font.parse(font);
      }
      if (!this.font.family.variants.includes(this.font.variant)) {
        throw new Error(`Variant ${this.font.variant} not supported by '${this.font.family.name}'!`);
      }
      this.$el.textContent = this._config.verbose ? this.font.toString() : this.font.toId();
      this.$el.dataset.font = this.font.toId();
      this.$el.style.fontFamily = `${this.font.family}`;
      this.$el.style.fontWeight = this.font.weight.toString();
      this.$el.style.fontStyle = this.font.style;
      FontLoader.load(this.font.family.name);
    }
    markFavourite(family, value) {
      if (value === void 0) value = !this.favourites.has(family);
      if (value) {
        this.favourites.add(family);
      } else {
        this.favourites.delete(family);
      }
      if (this._config.saveFavourites) {
        const data = Array.from(this.favourites).map((font) => font.name);
        localStorage.setItem(this._config.storageKey, JSON.stringify(data));
      }
      return value;
    }
    async open() {
      this.close();
      pickerDialog = new PickerDialog(this._config.container);
      await pickerDialog.open(this);
      pickerDialog = null;
      return this.font;
    }
    async close() {
      pickerDialog == null ? void 0 : pickerDialog.close();
    }
  }
  __publicField(FontPicker2, "FontLoader", FontLoader);
  return FontPicker2;
}();
