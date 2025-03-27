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

  var _cache, _FontLoader_static, appendStylesheet_fn, loadGoogleFont_fn, loadExtraFont_fn;
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
  const dialogContent = '<div id="fp__modal" class="fpb__modal" tabindex="-1" role="dialog" aria-modal="true"><div class="fpb__modal-header"><h5 id="fp__title" class="fp__modal-title"></h5><button type="button" id="fp__close" class="fpb__btn-close" aria-label="Close">&times;</button></div><div class="fpb__accordion"><div class="fpb__accordion-item fpb__open"><button class="fpb__accordion-toggle fpb__has-icon" type="button"><svg class="fpb__primary" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="currentColor" fill-opacity="0" stroke-dasharray="40" stroke-dashoffset="40" d="M10.76 13.24c-2.34 -2.34 -2.34 -6.14 0 -8.49c2.34 -2.34 6.14 -2.34 8.49 0c2.34 2.34 2.34 6.14 0 8.49c-2.34 2.34 -6.14 2.34 -8.49 0Z"><animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.3s" values="0;0.3"/><animate fill="freeze" attributeName="stroke-dashoffset" dur="1s" values="40;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M10.5 13.5l-7.5 7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.4s" values="12;0"/></path></g></svg><span id="fp__t-filters"></span></button><div class="fpb__accordion-content"><div class="fpb__grid-2"><div><input id="fp__search" class="fpb__input" /></div><div><select id="fp__subsets" class="fpb__input fpb__dropdown"></select></div><div class="fpb__span-2"><div id="fp__categories" class="fpb__hlist"></div></div></div></div></div><div class="fpb__accordion-item"><button class="fpb__accordion-toggle fpb__has-icon" type="button"><svg class="fpb__primary" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h14l-5 6.5v9.5l-4 -4v-5.5Z"><animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.3s" values="0;0.3"/><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="56;0"/></path></svg><span id="fp__t-metrics"></span></button><div class="fpb__accordion-content"><div class="fpb__grid-2"><div><select id="fp__width" class="fpb__input fpb__dropdown"></select></div><div><select id="fp__thickness" class="fpb__input fpb__dropdown"></select></div><div><select id="fp__complexity" class="fpb__input fpb__dropdown"></select></div><div><select id="fp__curvature" class="fpb__input fpb__dropdown"></select></div></div></div></div><div class="fpb__accordion-item"><button class="fpb__accordion-toggle fpb__has-icon" type="button"><svg class="fpb__primary" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="12" stroke-dashoffset="12" d="M17 21l0 -10.5M7 3l0 10.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="12;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M17 10l-4 4M17 10l4 4M7 14l-4 -4M7 14l4 -4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.4s" values="8;0"/></path></g></svg><span id="fp__t-sort"></span></button><div class="fpb__accordion-content"><div class="fpb__input-group"><select id="fp__sort" class="fpb__input fpb__dropdown"></select><input type="checkbox" id="fp__sort-order" class="fpb__hidden-input" /><label for="fp__sort-order" type="button" class="fpb__btn fpb__btn-toggle fpb__btn-flip fpb__has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 9l4-4l4 4M7 5v14m14-4l-4 4l-4-4m4 4V5"/></svg></label></div></div></div></div><div id="fp__fonts" tabindex="0"></div><div class="fp__preview-container"><div id="fp__preview" contenteditable spellcheck="false"></div></div><div id="fp__variants"></div><div class="fpb__modal-footer"><div class="fpb__grow"><button id="fp__clear-filters" type="button" class="fpb__btn fpb__btn-link fpb__btn-secondary fpb__has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="currentColor" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M3 4h14l-5 6.5v9.5l-4 -4v-5.5Z"><animate fill="freeze" attributeName="fill-opacity" begin="2s" dur="0.3s" values="0;0.3"/><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="56;0"/></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M16 15l6 6"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="10;0"/></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M16 21l6 -6"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.4s" values="10;0"/></path></g></svg><span id="fp__t-clear-filters"></span></button></div><button id="fp__cancel" type="button" class="fpb__btn fpb__btn-link fpb__has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-dasharray="24" stroke-dashoffset="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 5l14 14"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.8s" values="24;0"/></path><path d="M19 5l-14 14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.8s" values="24;0"/></path></g></svg><span id="fp__t-cancel"></span></button><button id="fp__clear" type="button" class="fpb__btn fpb__btn-link fpb__has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="64" stroke-dashoffset="64" d="M5.64 5.64c3.51 -3.51 9.21 -3.51 12.73 0c3.51 3.51 3.51 9.21 0 12.73c-3.51 3.51 -9.21 3.51 -12.73 0c-3.51 -3.51 -3.51 -9.21 -0 -12.73Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="64;0"/></path><path stroke-dasharray="20" stroke-dashoffset="20" d="M6 6l12 12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="20;0"/></path></g></svg><span id="fp__t-clear"></span></button><button id="fp__pick" type="button" class="fpb__btn fpb__btn-pill fpb__has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><mask id="lineMdCheckAll0"><g fill="none" stroke="#fff" stroke-dasharray="24" stroke-dashoffset="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M2 13.5l4 4l10.75 -10.75"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.8s" values="24;0"/></path><path stroke="#000" stroke-width="6" d="M7.5 13.5l4 4l10.75 -10.75"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.8s" values="24;0"/></path><path d="M7.5 13.5l4 4l10.75 -10.75"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.8s" values="24;0"/></path></g></mask><rect width="24" height="24" fill="currentColor" mask="url(#lineMdCheckAll0)"/></svg><span id="fp__t-pick"></span></button></div></div><div id="fp__backdrop" class="fpb__backdrop"></div>';
  const heartSVG = `<div class="fp__heart" role="button"><svg xmlns="http://www.w3.org/2000/svg" stroke-width="2" viewBox="0 0 18 18"><path d="M9 2.314 C13.438-2.248 24.534 5.735 9 16-6.534 5.736 4.562-2.248 9 2.314z" /></svg></div>`;
  const createLazyFont = (font) => {
    const $item = document.createElement("div");
    $item.className = "fp__font-item";
    $item.role = "button";
    $item.dataset.family = font.name;
    return $item;
  };
  const hydrateFont = ($item, font) => {
    const $family = document.createElement("span");
    $family.className = "fp__font-family";
    $family.textContent = font.name;
    $family.style.fontFamily = `"${font.name}"`;
    $item.append($family);
    $item.insertAdjacentHTML("beforeend", heartSVG);
  };
  const createRadioToggle = ({
    id,
    name,
    value,
    label,
    classes,
    checked
  }) => {
    const $input = document.createElement("input");
    $input.className = "fpb__hidden-input";
    $input.type = "radio";
    $input.name = name;
    $input.id = id;
    $input.value = value;
    $input.autocomplete = "off";
    if (checked) $input.checked = true;
    const $label = document.createElement("label");
    $label.className = "fpb__btn fpb__btn-pill fpb__btn-small fpb__btn-toggle";
    $label.htmlFor = id;
    $label.textContent = label;
    if (classes) $label.classList.add(...classes);
    return [$input, $label];
  };
  const createCheckToggle = ({
    id,
    value,
    label,
    classes,
    checked
  }) => {
    const $input = document.createElement("input");
    $input.className = "fpb__hidden-input";
    $input.type = "checkbox";
    $input.id = id;
    $input.autocomplete = "off";
    if (value) $input.value = value;
    if (checked) $input.checked = true;
    const $label = document.createElement("label");
    $label.className = "fpb__btn fpb__btn-pill fpb__btn-small fpb__btn-toggle";
    $label.htmlFor = id;
    $label.textContent = label;
    if (classes) $label.classList.add(...classes);
    return [$input, $label];
  };
  const createVariants = (variants) => {
    const weights = Array.from(new Set(variants.map((v) => parseInt(v))));
    return [
      ...weights.flatMap(
        (weight) => createRadioToggle({
          id: `fp__weight-${weight}`,
          name: "fp__weight",
          label: weight.toString(),
          value: weight.toString()
        })
      ),
      ...createCheckToggle({ id: "fp__italic", label: "Italic", classes: ["fpb__btn-secondary"] })
    ];
  };
  const createBadges = (badges) => {
    return Object.entries(badges).flatMap(
      ([value, label]) => createCheckToggle({
        id: `fp__category-${value}`,
        value,
        label
      })
    );
  };
  const setActiveBadges = ($parent, values) => {
    const $inputs = $parent.querySelectorAll(".fpb__hidden-input");
    for (const $input of $inputs) {
      $input.checked = values.includes($input.value);
    }
  };
  const getActiveBadges = ($parent) => {
    const $inputs = $parent.querySelectorAll(".fpb__hidden-input:checked");
    return [...$inputs].map(($input) => $input.value);
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
  class Modal extends EventEmitter$1 {
    constructor($el) {
      super();
      __publicField(this, "$el");
      this.$el = $el;
    }
    get isOpen() {
      return this.$el.classList.contains("fpb__open");
    }
    toggle(force) {
      const open2 = this.$el.classList.toggle("fpb__open", force);
      this.emit(open2 ? "opening" : "closing");
      setTimeout(() => this.emit(open2 ? "opened" : "closed"), 500);
    }
    open() {
      if (!this.isOpen) this.toggle(true);
    }
    close() {
      if (this.isOpen) this.toggle(false);
    }
  }
  class Accordion {
    constructor($el) {
      __publicField(this, "$el");
      this.$el = $el;
      this.$el.addEventListener("click", (event) => {
        const $target = event.target;
        const $accordionToggle = $target.closest(".fpb__accordion-toggle");
        if ($accordionToggle) this.toggleItem($accordionToggle.parentElement);
      });
    }
    getItems() {
      return this.$el.querySelectorAll(".fpb__accordion-item");
    }
    _toggle($item, force) {
      const $content = $item.querySelector(".fpb__accordion-content");
      const height = $content.children[0].clientHeight + "px";
      $content.style.setProperty("--fpb-height", height);
      setTimeout(() => {
        const open2 = $item.classList.toggle("fpb__open", force);
        setTimeout(() => $content.style.removeProperty("--fpb-height"), open2 ? 500 : 0);
      }, 1);
      return open;
    }
    toggleItem($item) {
      const open2 = this._toggle($item);
      if (!open2) return;
      this.getItems().forEach(($otherItem) => {
        if ($otherItem !== $item) this._toggle($otherItem, false);
      });
    }
  }
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
    let start = 0;
    while (start < firstLength && first.charCodeAt(start) === second.charCodeAt(start)) {
      start++;
    }
    firstLength -= start;
    secondLength -= start;
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
      characterCodeCache[index] = first.charCodeAt(start + index);
      array[index] = ++index;
    }
    while (index2 < secondLength) {
      bCharacterCode = second.charCodeAt(start + index2);
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
    toConcise() {
      if (this.family.getDefaultVariant() === this.variant) return this.family.name;
      return this.toId();
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
    static async load(font) {
      const family = font instanceof FontFamily ? font : null;
      const name = font instanceof FontFamily ? font.name : font;
      let promise = __privateGet(this, _cache).get(name);
      if (!promise) {
        const systemFont = systemFonts.find((sf) => sf.name === name);
        const googleFont = googleFonts.find((gf) => gf.name === name);
        if (family && family.url) {
          promise = __privateMethod(this, _FontLoader_static, loadExtraFont_fn).call(this, family);
        } else if (systemFont) {
          promise = Promise.resolve();
        } else if (googleFont) {
          promise = __privateMethod(this, _FontLoader_static, loadGoogleFont_fn).call(this, googleFont);
        } else {
          console.error(`Could not load font ${name}!`);
          promise = Promise.resolve();
        }
        __privateGet(this, _cache).set(name, promise);
      }
      await promise;
    }
  }
  _cache = new WeakMap();
  _FontLoader_static = new WeakSet();
  appendStylesheet_fn = async function(url) {
    const $link = document.createElement("link");
    $link.href = url;
    $link.rel = "stylesheet";
    $link.type = "text/css";
    document.head.append($link);
  };
  loadGoogleFont_fn = async function(font) {
    const url = new URL("https://fonts.googleapis.com/css");
    const name = font.name + ":" + font.variants.join(",");
    url.searchParams.set("family", name);
    url.searchParams.set("display", "swap");
    __privateMethod(this, _FontLoader_static, appendStylesheet_fn).call(this, url.toString());
    await document.fonts.load(`1em "${font.name}"`);
  };
  loadExtraFont_fn = async function(font) {
    const fontFace = new FontFace(font.name, `url(${font.url})`);
    document.fonts.add(await fontFace.load());
    await document.fonts.load(`1em "${font.name}"`);
  };
  __privateAdd(FontLoader, _FontLoader_static);
  __privateAdd(FontLoader, _cache, /* @__PURE__ */ new Map());
  const translations = {
    en: {
      selectFont: "Select a font",
      sampleText: "The quick brown fox jumps over the lazy dog.",
      pickHint: "Pick a font...",
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
      clearFilters: "Clear filters",
      clear: "Clear",
      cancel: "Cancel",
      select: "Select"
    },
    nl: {
      selectFont: "Selecteer een lettertype",
      sampleText: "Wazig tv-filmpje rond chique skybox.",
      pickHint: "Kies een lettertype...",
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
      clearFilters: "Filters wissen",
      clear: "Wissen",
      cancel: "Annuleren",
      select: "Selecteren"
    },
    de: {
      selectFont: "Schriftart auswählen",
      sampleText: "Falsches Üben von Xylophonmusik quält jeden größeren Zwerg.",
      pickHint: "Wähle eine Schriftart...",
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
      clearFilters: "Filter löschen",
      clear: "Löschen",
      cancel: "Abbrechen",
      select: "Auswählen"
    },
    es: {
      selectFont: "Selecciona una fuente",
      sampleText: "El veloz murciélago hindú comía feliz cardillo y kiwi.",
      pickHint: "Elige una fuente...",
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
      clearFilters: "Borrar filtros",
      clear: "Borrar",
      cancel: "Cancelar",
      select: "Seleccionar"
    },
    fr: {
      selectFont: "Sélectionnez une police",
      sampleText: "Portez ce vieux whisky au juge blond qui fume.",
      pickHint: "Choisissez une police...",
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
      clearFilters: "Effacer filtres",
      clear: "Effacer",
      cancel: "Annuler",
      select: "Sélectionner"
    }
  };
  class PickerDialog {
    constructor(parent) {
      __publicField(this, "opened", false);
      __publicField(this, "picker");
      __publicField(this, "config");
      __publicField(this, "observer");
      __publicField(this, "selected");
      __publicField(this, "hovered", null);
      __publicField(this, "modal");
      __publicField(this, "$modal");
      __publicField(this, "$modalBackdrop");
      __publicField(this, "$closeBtn");
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
      __publicField(this, "$clearFiltersBtn");
      __publicField(this, "$cancelBtn");
      __publicField(this, "$clearBtn");
      __publicField(this, "$pickBtn");
      this.createLayout(parent);
      this.observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          const $target = entry.target;
          if (entry.isIntersecting && !$target.childElementCount) {
            const family = this.getFamilyFor($target);
            if (!family) continue;
            hydrateFont($target, family);
            FontLoader.load(family);
          } else if (!entry.isIntersecting && $target.childElementCount) {
            $target.textContent = "";
          }
        }
      });
    }
    createLayout(parent) {
      parent.insertAdjacentHTML("beforeend", dialogContent);
      this.$modal = document.querySelector("#fp__modal");
      this.$modalBackdrop = document.querySelector("#fp__backdrop");
      this.$closeBtn = this.$modal.querySelector("#fp__close");
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
      this.$clearFiltersBtn = this.$modal.querySelector("#fp__clear-filters");
      this.$cancelBtn = this.$modal.querySelector("#fp__cancel");
      this.$clearBtn = this.$modal.querySelector("#fp__clear");
      this.$pickBtn = this.$modal.querySelector("#fp__pick");
      this.modal = new Modal(this.$modal);
      new Accordion(this.$modal.querySelector(".fpb__accordion"));
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
      if (this.selected) {
        const $selected = this.getElementFor(this.selected.family);
        this.$fonts.prepend($selected);
      }
      this.$fonts.scrollTop = 0;
    }
    filterFamilies(filters) {
      const families = this.getFamilies();
      const filtered = families.filter((a) => familyFilter(a, filters));
      const familyNames = filtered.map((filtered2) => filtered2.name);
      for (const $font of this.$fonts.children) {
        const name = $font.dataset.family;
        const hidden = !familyNames.includes(name);
        $font.classList.toggle("fpb__hidden", hidden);
      }
    }
    updateSort() {
      const orderBy = this.$sort.value;
      const reverse = this.$sortOrder.checked;
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
      if (font) {
        this.$preview.style.fontFamily = `"${font.family}"`;
        this.$preview.style.fontWeight = font.weight.toString();
        this.$preview.style.fontStyle = font.style;
      } else {
        this.$preview.style.removeProperty("font-family");
        this.$preview.style.removeProperty("font-weight");
        this.$preview.style.removeProperty("font-style");
      }
    }
    selectFont(font) {
      for (const $font of this.$fonts.querySelectorAll(".fp__selected")) {
        $font.classList.remove("fp__selected");
      }
      this.selected = font;
      if (!font) return;
      this.getElementFor(font.family).classList.add("fp__selected");
      if (!this.config.variants) return;
      this.$variants.textContent = "";
      this.$variants.append(...createVariants(font.family.variants));
      const $weight = this.$variants.querySelector(`#fp__weight-${font.weight}`);
      const $italic = this.$variants.querySelector("#fp__italic");
      if (!$weight) throw new Error("Could not find weight button for selected font.");
      if (!$italic) throw new Error("Could not find italic button for selected font.");
      $weight.checked = true;
      $italic.checked = font.italic;
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
      if (!this.selected) return;
      const $weight = this.$variants.querySelector("[name=fp__weight]:checked");
      const $italic = this.$variants.querySelector("#fp__italic");
      if (!$weight) throw new Error("Could not find weight button for selected font.");
      if (!$italic) throw new Error("Could not find italic button for selected font.");
      let weight = parseInt($weight.value);
      let italic = $italic.checked;
      const hasRegular = this.selected.family.variants.includes(`${weight}`);
      const hasItalic = this.selected.family.variants.includes(`${weight}i`);
      $italic.disabled = !hasRegular || !hasItalic;
      if (!hasRegular) italic = true;
      if (!hasItalic) italic = false;
      $italic.classList.toggle("active", italic);
      this.selected = new Font(this.selected.family, weight, italic);
      this.updatePreview();
    }
    createLazyFontList() {
      for (const font of this.getFamilies()) {
        const $item = createLazyFont(font);
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
      this.$modal.querySelector("#fp__t-clear-filters").textContent = dict.clearFilters;
      this.$modal.querySelector("#fp__t-cancel").textContent = dict.cancel;
      this.$modal.querySelector("#fp__t-clear").textContent = dict.clear;
      this.$modal.querySelector("#fp__t-pick").textContent = dict.select;
    }
    onFontHover(event) {
      var _a;
      const family = this.getFamilyFor(event.target);
      if (!family) return;
      if (family === ((_a = this.selected) == null ? void 0 : _a.family)) {
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
      var _a;
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
      if (!family || family === ((_a = this.selected) == null ? void 0 : _a.family)) return;
      this.selectFont(Font.parse(family));
    }
    onFontDoubleClick(event) {
      if (!this.getFamilyFor(event.target)) return;
      this.submit();
    }
    selectClosestFont(excluded, reverse, $from) {
      if (!this.selected) {
        this.$fonts.firstElementChild.click();
        return;
      }
      let $target = $from ? $from : this.getElementFor(this.selected.family);
      while (excluded || $target.classList.contains("fpb__hidden")) {
        excluded = false;
        const $next = reverse ? $target.previousElementSibling : $target.nextElementSibling;
        if (!$next) return;
        $target = $next;
      }
      this.hovered = null;
      $target.click();
      $target.scrollIntoView({
        behavior: "instant",
        block: "center"
      });
    }
    selectClosestVariant(reverse) {
      var _a, _b;
      const $origin = this.$variants.querySelector("[name=fp__weight]:checked");
      const $next = reverse ? (_a = $origin == null ? void 0 : $origin.previousElementSibling) == null ? void 0 : _a.previousElementSibling : (_b = $origin == null ? void 0 : $origin.nextElementSibling) == null ? void 0 : _b.nextElementSibling;
      if (!$next) return;
      const $target = $next;
      $target.checked = !$target.checked;
      this.updateVariant();
    }
    toggleVariantItalic() {
      const $target = this.$variants.querySelector("#fp__italic");
      if (!$target) return;
      $target.checked = !$target.checked;
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
        if (this.selected) this.favouriteFont(this.selected);
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
      var _a, _b;
      const filterCallback = () => {
        this.filtersChanged();
        this.updateFilter();
      };
      this.$categories.addEventListener("input", filterCallback);
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
      this.$sortOrder.addEventListener("input", sortCallback);
      this.$fonts.addEventListener("mouseover", (event) => this.onFontHover(event));
      this.$fonts.addEventListener("mouseout", (event) => this.onFontUnhover(event));
      this.$fonts.addEventListener("click", (event) => this.onFontClick(event));
      this.$fonts.addEventListener("dblclick", (event) => this.onFontDoubleClick(event));
      this.$variants.addEventListener("input", () => this.updateVariant());
      this.$clearFiltersBtn.addEventListener("click", () => this.assignDefaults());
      this.$pickBtn.addEventListener("click", () => this.submit());
      (_a = this.$clearBtn) == null ? void 0 : _a.addEventListener("click", () => this.clear());
      (_b = this.$cancelBtn) == null ? void 0 : _b.addEventListener("click", () => this.cancel());
      this.$modalBackdrop.addEventListener("click", () => this.cancel());
      this.$closeBtn.addEventListener("click", () => this.cancel());
      this.$modal.addEventListener("keydown", (event) => this.onKeyPressed(event));
    }
    applyConfiguration() {
      this.picker.favourites.forEach((family) => this.getElementFor(family).classList.add("fp__fav"));
      this.$variants.classList.toggle("fpb__hidden", !this.config.variants);
      if (!this.config.showClearButton) this.$clearBtn.remove();
      if (!this.config.showCancelButton) this.$cancelBtn.remove();
    }
    filtersChanged(changed = true) {
      this.$clearFiltersBtn.classList.toggle("fpb__hidden", !changed);
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
      this.createLazyFontList();
      this.selectFont(picker.font);
      this.applyConfiguration();
      this.assignDefaults();
      requestAnimationFrame(() => {
        this.modal.open();
        this.picker.emit("open");
        this.modal.once("opened", () => {
          this.picker.emit("opened");
          this.$fonts.focus();
        });
      });
      await new Promise((resolve) => {
        this.modal.once("closing", () => this.picker.emit("close"));
        this.modal.once("closed", () => resolve());
      });
      this.picker.emit("closed");
      this.$modal.remove();
      this.$modalBackdrop.remove();
    }
    submit() {
      this.picker.setFont(
        this.selected,
        true
        /* Emit events */
      );
      this.close();
    }
    clear() {
      this.picker.clear(
        true
        /* Emit events */
      );
      this.close();
    }
    cancel() {
      this.picker.emit("cancel");
      this.close();
    }
    close() {
      this.opened = false;
      this.modal.close();
    }
    destroy() {
      this.$modal.remove();
    }
  }
  let pickerDialog = null;
  class FontPicker2 extends EventEmitter$1 {
    constructor(el, config = {}) {
      super();
      __publicField(this, "$el");
      __publicField(this, "$inputEl");
      __publicField(this, "orgInputType");
      __publicField(this, "_font");
      __publicField(this, "_families");
      __publicField(this, "_favourites");
      __publicField(this, "_config", {
        language: "en",
        container: document.body,
        previewText: null,
        font: null,
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
        extraFonts: [],
        showCancelButton: true,
        showClearButton: false
      });
      __publicField(this, "clickHandler");
      __publicField(this, "changeHandler");
      this.$el = typeof el === "string" ? document.querySelector(el) : el;
      if (this.$el instanceof HTMLInputElement) {
        this.orgInputType = this.$el.type;
        if (this.$el.value) {
          config.font = this.$el.value;
        }
        const $wrap = document.createElement("button");
        this.$el.after($wrap);
        this.$inputEl = this.$el;
        this.$inputEl.type = "hidden";
        this.$el = $wrap;
        this.changeHandler = () => this.setFont(this.$inputEl.value);
        this.$inputEl.addEventListener("change", this.changeHandler);
      } else if (this.$el.dataset.font) {
        config.font = this.$el.dataset.font;
      }
      this.$el.classList.add("font-picker", "fpb__input", "fpb__dropdown");
      this.clickHandler = this.open.bind(this);
      this.$el.addEventListener("click", this.clickHandler);
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
      if ("container" in options && options.container && !(options.container instanceof HTMLElement)) {
        options.container = document.querySelector(options.container) ?? void 0;
      }
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
    setFont(font, emit = false) {
      if (!font) {
        this._font = null;
      } else if (font instanceof Font) {
        this._font = font;
      } else if (typeof font === "string") {
        const [name, variant] = font.split(":");
        const family = this.getFamily(name);
        this._font = Font.parse(family, variant);
      } else {
        this._font = Font.parse(font);
      }
      if (this.font) {
        if (!this.font.family.variants.includes(this.font.variant)) {
          throw new Error(`Variant ${this.font.variant} not supported by '${this.font.family.name}'!`);
        }
        const text = this._config.verbose ? this.font.toString() : this.font.toConcise();
        this.$el.textContent = text;
        this.$el.dataset.font = this.font.toId();
        if (this.$inputEl) {
          this.$inputEl.value = this.font.toId();
        }
        this.$el.style.fontFamily = `"${this.font.family}"`;
        this.$el.style.fontWeight = this.font.weight.toString();
        this.$el.style.fontStyle = this.font.style;
        FontLoader.load(this.font.family);
      } else {
        this.$el.textContent = translations[this._config.language].pickHint;
        this.$el.dataset.font = "";
        if (this.$inputEl) {
          this.$inputEl.value = "";
        }
        this.$el.style.removeProperty("font-family");
        this.$el.style.removeProperty("font-weight");
        this.$el.style.removeProperty("font-style");
      }
      if (emit) {
        this.emit("pick", this.font);
        if (this.$inputEl) {
          this.$inputEl.dispatchEvent(new Event("change"));
        }
      }
    }
    clear(emit) {
      this.setFont(null, emit);
      if (emit) this.emit("clear");
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
    destroy() {
      this.close();
      pickerDialog == null ? void 0 : pickerDialog.destroy();
      if (this.changeHandler) this.$el.removeEventListener("change", this.changeHandler);
      if (this.clickHandler) this.$el.removeEventListener("click", this.clickHandler);
      this.$el.classList.remove("font-picker", "fpb__input", "fpb__dropdown");
      this.$el.removeAttribute("data-font");
      this.$el.style.removeProperty("font-family");
      this.$el.style.removeProperty("font-weight");
      this.$el.style.removeProperty("font-style");
      if (this.$inputEl) {
        this.$inputEl.type = this.orgInputType;
        this.$el.remove();
      }
    }
  }
  __publicField(FontPicker2, "FontLoader", FontLoader);
  return FontPicker2;
}();
