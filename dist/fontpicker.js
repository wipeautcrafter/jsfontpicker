var L = Object.defineProperty;
var M = (t) => {
  throw TypeError(t);
};
var F = (t, a, i) => a in t ? L(t, a, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[a] = i;
var s = (t, a, i) => F(t, typeof a != "symbol" ? a + "" : a, i), A = (t, a, i) => a.has(t) || M("Cannot " + i);
var w = (t, a, i) => (A(t, a, "read from private field"), i ? i.call(t) : a.get(t)), b = (t, a, i) => a.has(t) ? M("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(t) : a.set(t, i);
var C = (t, a, i) => (A(t, a, "access private method"), i);
import * as _ from "bootstrap";
const j = `<div id="fp__modal" class="modal fade" tabindex="-1">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 id="fp__title" class="modal-title fw-bold"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div id="fp__accord" class="accordion accordion-flush border-bottom">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button py-2 fp__has-icon"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#fp__accord-0"
            >
              <!-- prettier-ignore -->
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="text-primary"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="currentColor" fill-opacity="0" stroke-dasharray="40" stroke-dashoffset="40" d="M10.76 13.24c-2.34 -2.34 -2.34 -6.14 0 -8.49c2.34 -2.34 6.14 -2.34 8.49 0c2.34 2.34 2.34 6.14 0 8.49c-2.34 2.34 -6.14 2.34 -8.49 0Z"><animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.3s" values="0;0.3"/><animate fill="freeze" attributeName="stroke-dashoffset" dur="1s" values="40;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M10.5 13.5l-7.5 7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.4s" values="12;0"/></path></g></svg>
              <span id="fp__t-filters"></span>
            </button>
          </h2>
          <div
            id="fp__accord-0"
            class="accordion-collapse collapse show"
            data-bs-parent="#fp__accord"
          >
            <div class="accordion-body py-2">
              <div class="row">
                <div class="col-sm-6 pb-2">
                  <input id="fp__search" class="form-control" />
                </div>
                <div class="col-sm-6 pb-2">
                  <select id="fp__subsets" class="form-select"></select>
                </div>
                <div class="col-sm-12">
                  <div id="fp__categories" class="d-flex overflow-x-auto gap-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed py-2 fp__has-icon"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#fp__accord-1"
            >
              <!-- prettier-ignore -->
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="text-primary"><path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h14l-5 6.5v9.5l-4 -4v-5.5Z"><animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.3s" values="0;0.3"/><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="56;0"/></path></svg>
              <span id="fp__t-metrics"></span>
            </button>
          </h2>
          <div id="fp__accord-1" class="accordion-collapse collapse" data-bs-parent="#fp__accord">
            <div class="accordion-body pt-2 pb-0">
              <div class="row">
                <div class="col-sm-6 pb-2">
                  <select id="fp__width" class="form-select"></select>
                </div>
                <div class="col-sm-6 pb-2">
                  <select id="fp__thickness" class="form-select"></select>
                </div>
                <div class="col-sm-6 pb-2">
                  <select id="fp__complexity" class="form-select"></select>
                </div>
                <div class="col-sm-6 pb-2">
                  <select id="fp__curvature" class="form-select"></select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed py-2 fp__has-icon"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#fp__accord-2"
            >
              <!-- prettier-ignore -->
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="text-primary"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="12" stroke-dashoffset="12" d="M17 21l0 -10.5M7 3l0 10.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="12;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M17 10l-4 4M17 10l4 4M7 14l-4 -4M7 14l4 -4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.4s" values="8;0"/></path></g></svg>
              <span id="fp__t-sort"></span>
            </button>
          </h2>
          <div id="fp__accord-2" class="accordion-collapse collapse" data-bs-parent="#fp__accord">
            <div class="accordion-body py-2">
              <div class="input-group">
                <select id="fp__sort" class="form-select"></select>
                <button
                  id="fp__sort-order"
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="button"
                >
                  <div>&#8645;</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="fp__fonts" class="modal-body border-bottom p-1"></div>

      <div class="py-1 px-3">
        <div id="fp__preview" class="text-center fs-5" contenteditable spellcheck="false"></div>
      </div>

      <div
        id="fp__variants"
        class="py-2 px-3 d-flex flex-wrap gap-2 justify-content-center border-top"
      ></div>

      <div class="modal-footer">
        <button
          id="fp__cancel"
          type="button"
          class="btn btn-link text-decoration-none rounded-pill fp__has-icon"
        >
          <!-- prettier-ignore -->
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="64" stroke-dashoffset="64" d="M5.64 5.64c3.51 -3.51 9.21 -3.51 12.73 0c3.51 3.51 3.51 9.21 0 12.73c-3.51 3.51 -9.21 3.51 -12.73 0c-3.51 -3.51 -3.51 -9.21 -0 -12.73Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="64;0"/></path><path stroke-dasharray="20" stroke-dashoffset="20" d="M6 6l12 12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="20;0"/></path></g></svg>
          <span id="fp__t-cancel"></span>
        </button>
        <button id="fp__pick" type="button" class="btn btn-primary rounded-pill fp__has-icon">
          <!-- prettier-ignore -->
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><mask id="lineMdCheckAll0"><g fill="none" stroke="#fff" stroke-dasharray="24" stroke-dashoffset="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M2 13.5l4 4l10.75 -10.75"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.8s" values="24;0"/></path><path stroke="#000" stroke-width="6" d="M7.5 13.5l4 4l10.75 -10.75"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.8s" values="24;0"/></path><path d="M7.5 13.5l4 4l10.75 -10.75"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.8s" values="24;0"/></path></g></mask><rect width="24" height="24" fill="currentColor" mask="url(#lineMdCheckAll0)"/></svg>
          <span id="fp__t-pick"></span>
        </button>
      </div>
    </div>
  </div>
</div>
`, G = '<svg xmlns="http://www.w3.org/2000/svg" stroke-width="2" viewBox="0 0 18 18"><path d="M9 2.314 C13.438-2.248 24.534 5.735 9 16-6.534 5.736 4.562-2.248 9 2.314z" /></svg>', R = () => {
  const t = document.createElement("div");
  return t.className = "fp__heart", t.role = "button", t.innerHTML = G, t;
}, E = (t) => {
  const a = document.createElement("div");
  a.className = "px-3 py-1 fp__font-item rounded-pill user-select-none", a.role = "button", a.dataset.family = t.name;
  const i = document.createElement("span");
  return i.className = "fs-6 pe-none", i.textContent = t.name, i.style.fontFamily = `"${t.name}"`, a.append(i, R()), a;
}, D = (t) => {
  const a = Array.from(new Set(t.map((e) => parseInt(e)))), i = document.createElement("button");
  return i.className = "btn btn-outline-warning fp__btn-badge", i.dataset.bsToggle = "button", i.textContent = "Italic", i.id = "fp__italic", [
    ...a.flatMap((e) => {
      const n = `fp__weight-${e}`, l = document.createElement("input");
      l.type = "radio", l.className = "btn-check fp__weight", l.value = e.toString(), l.id = n, l.name = "fp__weight";
      const r = document.createElement("label");
      return r.className = "btn btn-outline-primary fp__btn-badge", r.htmlFor = n, r.textContent = e.toString(), [l, r];
    }),
    i
  ];
}, $ = (t, a) => {
  const i = document.createElement("option");
  return i.value = t, i.textContent = a, i;
}, y = (t) => Object.entries(t).map(([a, i]) => $(a, i)), K = (t, a) => {
  const i = document.createElement("button");
  return i.className = "btn btn-outline-primary fp__btn-badge", i.dataset.value = t, i.dataset.bsToggle = "button", i.textContent = a, i;
}, I = (t) => Object.entries(t).map(([a, i]) => K(a, i)), H = (t, a) => {
  for (const i of t.children) {
    const e = i.dataset.value;
    i.classList.toggle("active", a.includes(e));
  }
}, q = (t) => Array.from(t.querySelectorAll(".active")).map(
  (a) => a.dataset.value
), N = [], P = [];
function V(t, a) {
  if (t === a)
    return 0;
  const i = t;
  t.length > a.length && (t = a, a = i);
  let e = t.length, n = a.length;
  for (; e > 0 && t.charCodeAt(~-e) === a.charCodeAt(~-n); )
    e--, n--;
  let l = 0;
  for (; l < e && t.charCodeAt(l) === a.charCodeAt(l); )
    l++;
  if (e -= l, n -= l, e === 0)
    return n;
  let r, o, c, x, d = 0, h = 0;
  for (; d < e; )
    P[d] = t.charCodeAt(l + d), N[d] = ++d;
  for (; h < n; )
    for (r = a.charCodeAt(l + h), c = h++, o = h, d = 0; d < e; d++)
      x = r === P[d] ? c : c + 1, c = N[d], o = N[d] = c > o ? x > o ? o + 1 : x : x > c ? c + 1 : x;
  return o;
}
const z = (t, a, i) => i === "name" ? t.name.localeCompare(a.name) : i === "popularity" ? t.popularity === void 0 && a.popularity === void 0 ? 0 : t.popularity === void 0 ? 1 / 0 : a.popularity === void 0 ? -1 / 0 : t.popularity - a.popularity : t.metrics === void 0 && a.metrics === void 0 ? 0 : t.metrics === void 0 ? 1 / 0 : a.metrics === void 0 ? -1 / 0 : i === "complexity" ? a.metrics.complexity - t.metrics.complexity : i === "curvature" ? a.metrics.curvature - t.metrics.curvature : i === "thickness" ? a.metrics.thickness - t.metrics.thickness : i === "width" ? a.metrics.width - t.metrics.width : 0, S = (t, a) => a === "all" ? !0 : t === void 0 ? !1 : Math.abs(t - parseFloat(a)) < 0.1, U = (t, a) => {
  var i, e, n, l;
  if (a.name) {
    const r = V(t.name.toLowerCase(), a.name.toLowerCase()), o = [...t.name].length - [...a.name].length;
    if (r > o) return !1;
  }
  return !(t.subsets && a.subset !== "all" && !t.subsets.includes(a.subset) || t.category && !a.categories.includes(t.category) || !S((i = t.metrics) == null ? void 0 : i.width, a.width) || !S((e = t.metrics) == null ? void 0 : e.complexity, a.complexity) || !S((n = t.metrics) == null ? void 0 : n.curvature, a.curvature) || !S((l = t.metrics) == null ? void 0 : l.thickness, a.thickness));
}, u = class u {
  constructor(a, i, e) {
    s(this, "family");
    s(this, "weight");
    s(this, "italic");
    this.family = a, this.weight = i, this.italic = e;
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
    const a = [this.family.name];
    return a.push(u.weightNames[this.weight]), this.italic && a.push("Italic"), a.push(`(${this.variant})`), a.join(" ");
  }
  static parse(a, i = a.getDefaultVariant()) {
    const e = parseInt(i), n = i.endsWith("i");
    return new u(a, e, n);
  }
};
s(u, "weightNames", {
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
let m = u;
class v {
  constructor(a) {
    Object.assign(this, a);
  }
  toString() {
    return this.name;
  }
  getDefaultVariant() {
    return Array.from(new Set(this.variants)).toSorted((i, e) => Math.abs(parseInt(i) - 400) - Math.abs(parseInt(e) - 400))[0];
  }
  // parse font family from compressed format
  static parse(a) {
    const [i, e, n, l, r, o, c, x, d] = a.split("/"), h = new v({
      name: i,
      category: e,
      variants: n.split(","),
      subsets: l.split(",")
    });
    return r && (h.popularity = parseInt(r)), o && c && x && d && (h.metrics = {
      width: parseFloat(o),
      thickness: parseFloat(c),
      complexity: parseFloat(x),
      curvature: parseFloat(d)
    }), h;
  }
}
const J = "Roboto/sans-serif/100,100i,300,300i,400,400i,500,500i,700,700i,900,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/1/0.25/21.89/847/0.79|Open Sans/sans-serif/300,400,500,600,700,800,300i,400i,500i,600i,700i,800i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,math,symbols,vietnamese/2/0.22/21.88/1060/1.19|Noto Sans JP/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic,japanese,latin,latin-ext,vietnamese/3/0.23/20.95/1056/1.17|Montserrat/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/4/0.19/25.43/1019/1.12|Poppins/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext/5/0.23/22.33/898/1.10|Lato/sans-serif/100,100i,300,300i,400,400i,700,700i,900,900i/latin,latin-ext/6/0.24/22.62/1249/1.55|Inter/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/7/0.23/23.67/1082/1.15|Roboto Condensed/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/8/0.25/19.38/1248/1.30|Oswald/sans-serif/200,300,400,500,600,700/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/10/0.31/16.64/1053/1.09|Roboto Mono/monospace/100,200,300,400,500,600,700,100i,200i,300i,400i,500i,600i,700i/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/11/0.20/26.66/1432/1.12|Noto Sans/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,devanagari,greek,greek-ext,latin,latin-ext,vietnamese/12/0.23/22.06/1037/1.17|Raleway/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/13/0.20/23.33/1039/1.29|Nunito Sans/sans-serif/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/14/0.22/23.37/953/1.00|Nunito/sans-serif/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/15/0.21/23.65/1356/1.53|Rubik/sans-serif/300,400,500,600,700,800,900,300i,400i,500i,600i,700i,800i,900i/arabic,cyrillic,cyrillic-ext,hebrew,latin,latin-ext/16/0.25/23.57/1574/1.40|Ubuntu/sans-serif/300,300i,400,400i,500,500i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext/17/0.24/22.17/1124/1.73|Playfair Display/serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/cyrillic,latin,latin-ext,vietnamese/18/0.21/22.15/1933/1.54|Merriweather/serif/300,300i,400,400i,700,700i,900,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/19/0.25/21.37/1231/0.67|Noto Sans KR/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic,korean,latin,latin-ext,vietnamese/20/0.23/20.95/1056/1.17|Roboto Slab/serif/100,200,300,400,500,600,700,800,900/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/21/0.26/23.18/1194/0.65|Noto Sans TC/sans-serif/100,200,300,400,500,600,700,800,900/chinese-traditional,cyrillic,latin,latin-ext,vietnamese/22/0.23/20.95/1056/1.17|PT Sans/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext/23/0.23/21.69/1074/1.24|Kanit/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,thai,vietnamese/24/0.28/23.58/864/0.89|Lora/serif/400,500,600,700,400i,500i,600i,700i/cyrillic,cyrillic-ext,latin,latin-ext,math,symbols,vietnamese/25/0.21/21.76/1795/1.44|Work Sans/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/26/0.21/24.89/1047/1.14|DM Sans/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext/27/0.23/22.78/1010/1.16|Manrope/sans-serif/200,300,400,500,600,700,800/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/28/0.22/21.51/1033/1.14|Mulish/sans-serif/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/29/0.22/22.80/927/0.92|Fira Sans/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/30/0.24/21.17/847/0.87|Quicksand/sans-serif/300,400,500,600,700/latin,latin-ext,vietnamese/31/0.18/23.66/1504/1.63|Barlow/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,vietnamese/32/0.21/22.07/1468/0.95|IBM Plex Sans/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/33/0.23/22.24/1074/1.04|Heebo/sans-serif/100,200,300,400,500,600,700,800,900/hebrew,latin,latin-ext,math,symbols/34/0.24/21.97/1130/1.05|Titillium Web/sans-serif/200,200i,300,300i,400,400i,600,600i,700,700i,900/latin,latin-ext/35/0.23/20.65/761/0.82|PT Serif/serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext/36/0.24/21.86/1559/1.26|Karla/sans-serif/200,300,400,500,600,700,800,200i,300i,400i,500i,600i,700i,800i/latin,latin-ext/38/0.22/22.42/1051/1.17|Noto Serif/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/39/0.24/22.78/1592/1.14|Inconsolata/monospace/200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/40/0.20/25.56/1243/1.46|Bebas Neue/sans-serif/400/latin,latin-ext/41/0.33/19.18/731/0.43|Space Grotesk/sans-serif/300,400,500,600,700/latin,latin-ext,vietnamese/42/0.22/24.58/986/0.83|Hind Siliguri/sans-serif/300,400,500,600,700/bengali,latin,latin-ext/43/0.23/21.86/811/0.80|Noto Color Emoji/sans-serif/400/emoji/44/0.09/44.97/420/0.00|Nanum Gothic/sans-serif/400,700,800/korean,latin/45/0.21/22.95/1411/1.10|Mukta/sans-serif/200,300,400,500,600,700,800/devanagari,latin,latin-ext/47/0.25/20.46/1067/1.22|Josefin Sans/sans-serif/100,200,300,400,500,600,700,100i,200i,300i,400i,500i,600i,700i/latin,latin-ext,vietnamese/48/0.21/22.12/971/1.13|Libre Franklin/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/49/0.23/23.69/1568/1.22|Outfit/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext/50/0.25/22.78/1035/1.14|Libre Baskerville/serif/400,400i,700/latin,latin-ext/51/0.22/23.06/1858/1.59|Arimo/sans-serif/400,500,600,700,400i,500i,600i,700i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese/52/0.25/23.26/971/0.98|Jost/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,latin,latin-ext/53/0.22/19.91/1008/1.26|Dancing Script/handwriting/400,500,600,700/latin,latin-ext,vietnamese/54/0.19/17.32/2278/2.57|Anton/sans-serif/400/latin,latin-ext,vietnamese/55/0.42/17.53/886/0.73|Dosis/sans-serif/200,300,400,500,600,700,800/latin,latin-ext,vietnamese/56/0.20/17.96/1462/1.59|Abel/sans-serif/400/latin/57/0.21/19.39/1304/1.17|Noto Serif JP/serif/200,300,400,500,600,700,800,900/cyrillic,japanese,latin,latin-ext,vietnamese/58/0.19/21.63/1748/0.74|Cabin/sans-serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext,vietnamese/59/0.25/19.98/961/1.07|EB Garamond/serif/400,500,600,700,800,400i,500i,600i,700i,800i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/60/0.19/19.20/2840/1.90|Barlow Condensed/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,vietnamese/61/0.25/17.34/1365/0.89|Fira Sans Condensed/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/62/0.25/19.22/820/0.80|Source Code Pro/monospace/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/63/0.19/27.37/1055/1.11|Noto Sans SC/sans-serif/100,200,300,400,500,600,700,800,900/chinese-simplified,cyrillic,latin,latin-ext,vietnamese/64/0.23/20.95/1056/1.17|PT Sans Narrow/sans-serif/400,700/cyrillic,cyrillic-ext,latin,latin-ext/65/0.25/17.46/1047/1.19|Bitter/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/66/0.23/21.55/1319/0.60|Archivo/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/67/0.26/23.56/1154/1.31|Cairo/sans-serif/200,300,400,500,600,700,800,900/arabic,latin,latin-ext/68/0.24/20.74/1007/1.26|Exo 2/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/69/0.24/23.27/1186/1.12|Teko/sans-serif/300,400,500,600,700/devanagari,latin,latin-ext/70/0.35/16.68/1228/0.44|Oxygen/sans-serif/300,400,700/latin,latin-ext/71/0.23/21.18/918/1.07|Noto Sans Arabic/sans-serif/100,200,300,400,500,600,700,800,900/arabic/72/0.14/32.06/420/0.00|Hind/sans-serif/300,400,500,600,700/devanagari,latin,latin-ext/73/0.23/22.01/811/0.80|Plus Jakarta Sans/sans-serif/200,300,400,500,600,700,800,200i,300i,400i,500i,600i,700i,800i/cyrillic-ext,latin,latin-ext,vietnamese/74/0.23/22.27/995/1.11|Assistant/sans-serif/200,300,400,500,600,700,800/hebrew,latin,latin-ext/75/0.22/20.78/1041/1.13|Figtree/sans-serif/300,400,500,600,700,800,900,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext/76/0.24/22.95/1035/1.12|Source Sans 3/sans-serif/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/78/0.23/21.03/1041/1.13|M PLUS Rounded 1c/sans-serif/100,300,400,500,700,800,900/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,japanese,latin,latin-ext,vietnamese/79/0.21/22.12/1214/1.46|Pacifico/handwriting/400/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/80/0.26/15.14/2045/1.66|Crimson Text/serif/400,400i,600,600i,700,700i/latin,latin-ext,vietnamese/81/0.22/21.51/2369/1.42|Signika Negative/sans-serif/300,400,500,600,700/latin,latin-ext,vietnamese/82/0.26/20.72/1579/1.54|IBM Plex Sans Arabic/sans-serif/100,200,300,400,500,600,700/arabic,cyrillic-ext,latin,latin-ext/83/0.23/22.24/1074/1.04|Fjalla One/sans-serif/400/cyrillic-ext,latin,latin-ext,vietnamese/84/0.33/15.41/1061/0.97|Prompt/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,thai,vietnamese/85/0.24/24.09/856/0.94|Archivo Black/sans-serif/400/latin,latin-ext/86/0.39/27.89/869/0.77|IBM Plex Mono/monospace/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/87/0.19/26.81/1103/1.03|Red Hat Display/sans-serif/300,400,500,600,700,800,900,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext/88/0.22/22.83/948/1.12|Comfortaa/display/300,400,500,600,700/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/89/0.19/24.04/1434/1.64|Public Sans/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/90/0.24/23.83/1012/1.24|Chakra Petch/sans-serif/300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,thai,vietnamese/91/0.22/22.81/656/0.00|Lobster/display/400/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/92/0.35/18.80/1489/1.36|Varela Round/sans-serif/400/hebrew,latin,latin-ext,vietnamese/93/0.23/23.29/1366/1.53|Zilla Slab/serif/300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext/94/0.24/22.72/1034/0.55|Caveat/handwriting/400,500,600,700/cyrillic,cyrillic-ext,latin,latin-ext/95/0.19/16.96/3101/2.25|Maven Pro/sans-serif/400,500,600,700,800,900/latin,latin-ext,vietnamese/97/0.21/23.08/971/1.19|Cormorant Garamond/serif/300,300i,400,400i,500,500i,600,600i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/98/0.15/19.01/2120/1.33|Lexend/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/99/0.25/23.03/1095/1.25|Arvo/serif/400,400i,700,700i/latin/100/0.25/23.15/1333/1.03|Asap/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/101/0.24/21.51/1494/1.53|Rajdhani/sans-serif/300,400,500,600,700/devanagari,latin,latin-ext/102/0.18/21.93/1264/0.66|Overpass/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/103/0.24/22.77/969/1.14|IBM Plex Serif/serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/104/0.22/22.95/1394/0.89|Schibsted Grotesk/sans-serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/latin,latin-ext/105/0.23/23.44/1012/1.07|Saira Condensed/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/106/0.24/17.34/976/1.05|Slabo 27px/serif/400/latin,latin-ext/107/0.24/19.07/1054/0.51|Lilita One/display/400/latin,latin-ext/108/0.42/21.83/988/1.25|Sora/sans-serif/100,200,300,400,500,600,700,800/latin,latin-ext/109/0.25/24.55/1130/1.00|Tajawal/sans-serif/200,300,400,500,700,800,900/arabic,latin/110/0.22/23.10/857/0.64|Shadows Into Light/handwriting/400/latin/111/0.15/15.76/2024/3.30|Play/sans-serif/400,700/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/112/0.24/22.66/963/0.75|Barlow Semi Condensed/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,vietnamese/113/0.23/19.72/1456/0.95|Abril Fatface/display/400/latin,latin-ext/115/0.32/21.83/1160/0.68|M PLUS 1p/sans-serif/100,300,400,500,700,800,900/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,japanese,latin,latin-ext,vietnamese/116/0.20/22.91/780/0.80|Roboto Flex/sans-serif/400/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/117/0.25/21.87/949/0.78|Permanent Marker/handwriting/400/latin/118/0.32/29.04/4309/2.11|Noto Sans HK/sans-serif/100,200,300,400,500,600,700,800,900/chinese-hongkong,cyrillic,latin,latin-ext,vietnamese/119/0.23/20.95/1056/1.17|Merriweather Sans/sans-serif/300,400,500,600,700,800,300i,400i,500i,600i,700i,800i/cyrillic-ext,latin,latin-ext,vietnamese/120/0.27/20.59/1141/1.19|Nanum Myeongjo/serif/400,700,800/korean,latin/121/0.17/21.18/2120/1.43|Nanum Gothic Coding/handwriting/400,700/korean,latin/122/0.21/24.04/1395/1.00|Rowdies/display/300,400,700/latin,latin-ext,vietnamese/123/0.36/22.73/982/0.75|Alegreya/serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/124/0.22/19.61/2212/1.68|Almarai/sans-serif/300,400,700,800/arabic,latin/125/0.25/21.89/901/0.64|Questrial/sans-serif/400/latin,latin-ext,vietnamese/126/0.24/23.30/933/1.18|Indie Flower/handwriting/400/latin/127/0.13/17.06/2407/3.47|DM Serif Display/serif/400,400i/latin,latin-ext/128/0.28/22.46/1501/0.88|Source Serif 4/serif/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/129/0.23/23.17/1851/0.85|Catamaran/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,tamil/130/0.23/21.00/962/1.20|Domine/serif/400,500,600,700/latin,latin-ext/131/0.24/23.92/1415/0.82|Satisfy/handwriting/400/latin/132/0.19/14.84/3126/2.68|Cinzel/serif/400,500,600,700,800,900/latin,latin-ext/133/0.17/25.93/2442/0.76|Archivo Narrow/sans-serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext,vietnamese/134/0.28/19.70/979/0.94|Urbanist/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext/136/0.21/20.78/987/1.31|Mate/serif/400,400i/latin,latin-ext/137/0.20/19.83/1616/1.24|Noto Kufi Arabic/sans-serif/100,200,300,400,500,600,700,800,900/arabic,latin,latin-ext,math,symbols/138/0.22/22.64/1005/1.10|Noto Sans Thai/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,thai/139/0.23/22.06/1037/1.17|Vollkorn/serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/140/0.24/21.53/2277/1.95|Signika/sans-serif/300,400,500,600,700/latin,latin-ext,vietnamese/141/0.27/20.76/1610/1.59|Orbitron/sans-serif/400,500,600,700,800,900/latin/142/0.23/26.89/982/0.68|Be Vietnam Pro/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,vietnamese/143/0.24/23.54/1040/1.31|Frank Ruhl Libre/serif/300,400,500,600,700,800,900/hebrew,latin,latin-ext/144/0.23/23.18/1677/1.23|Acme/sans-serif/400/latin/145/0.32/18.55/883/0.80|Concert One/display/400/latin,latin-ext/146/0.33/23.22/2029/2.47|Sarabun/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i/latin,latin-ext,thai,vietnamese/147/0.23/20.61/898/0.92|Amatic SC/handwriting/400,700/cyrillic,hebrew,latin,latin-ext,vietnamese/148/0.16/13.75/2412/0.87|Inter Tight/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/149/0.25/21.49/1020/1.10|Exo/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/150/0.21/21.50/1092/1.28|Cormorant/serif/300,400,500,600,700,300i,400i,500i,600i,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/151/0.15/18.98/2127/1.73|Hind Madurai/sans-serif/300,400,500,600,700/latin,latin-ext,tamil/152/0.23/22.01/811/0.80|Noto Sans Display/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/153/0.24/20.76/1035/1.17|Alfa Slab One/display/400/latin,latin-ext,vietnamese/154/0.44/25.04/1028/0.51|Marcellus/serif/400/latin,latin-ext/155/0.20/21.28/1928/1.87|Spectral/serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i/cyrillic,latin,latin-ext,vietnamese/156/0.20/21.80/1233/0.71|Great Vibes/handwriting/400/cyrillic,cyrillic-ext,greek-ext,latin,latin-ext,vietnamese/157/0.18/15.29/2942/2.17|Chivo/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/158/0.26/24.46/1155/1.19|Asap Condensed/sans-serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,vietnamese/159/0.28/17.25/1300/1.20|Righteous/display/400/latin,latin-ext/160/0.34/22.88/1170/1.71|Bree Serif/serif/400/latin,latin-ext/161/0.33/22.42/1179/0.72|ABeeZee/sans-serif/400,400i/latin,latin-ext/162/0.24/22.71/951/1.14|Antic Slab/serif/400/latin/163/0.20/21.07/1028/0.58|Montserrat Alternates/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/164/0.20/25.71/965/1.11|Tinos/serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese/165/0.23/22.04/1073/0.55|Amiri/serif/400,400i,700,700i/arabic,latin,latin-ext/166/0.22/21.96/2640/2.08|Lexend Deca/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/167/0.25/23.03/1095/1.25|Yanone Kaffeesatz/sans-serif/200,300,400,500,600,700/cyrillic,cyrillic-ext,latin,latin-ext,math,symbols,vietnamese/168/0.30/15.11/1463/1.94|Changa/sans-serif/200,300,400,500,600,700,800/arabic,latin,latin-ext/169/0.27/22.75/941/0.87|Rubik Mono One/sans-serif/400/cyrillic,latin,latin-ext/170/0.32/47.04/1233/1.02|Oleo Script/display/400,700/latin,latin-ext/171/0.33/18.77/1426/1.50|Readex Pro/sans-serif/200,300,400,500,600,700/arabic,latin,latin-ext,vietnamese/172/0.25/22.94/1091/1.22|Kalam/handwriting/300,400,700/devanagari,latin,latin-ext/173/0.22/19.66/1340/2.64|Alegreya Sans/sans-serif/100,100i,300,300i,400,400i,500,500i,700,700i,800,800i,900,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/174/0.23/20.02/1004/0.68|Yellowtail/handwriting/400/latin/175/0.27/16.65/2028/2.44|Bungee/display/400/latin,latin-ext,vietnamese/176/0.40/32.25/1272/0.73|Saira/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/177/0.23/22.82/1187/1.54|Patua One/display/400/latin/178/0.36/22.23/1155/0.80|Mate SC/serif/400/latin,latin-ext/179/0.21/22.36/1475/0.96|Prata/serif/400/cyrillic,cyrillic-ext,latin,vietnamese/180/0.20/21.04/1208/0.74|Ubuntu Mono/monospace/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext/181/0.21/24.84/1078/1.57|Sawarabi Mincho/serif/400/japanese,latin,latin-ext/182/0.23/24.65/1256/0.65|Lobster Two/display/400,400i,700,700i/latin/183/0.29/18.51/1838/2.14|Passion One/display/400,700,900/latin,latin-ext/184/0.46/21.39/762/0.73|Noto Serif KR/serif/200,300,400,500,600,700,800,900/cyrillic,korean,latin,latin-ext,vietnamese/185/0.19/21.63/1748/0.74|Cardo/serif/400,400i,700/greek,greek-ext,latin,latin-ext/186/0.17/19.31/1924/1.31|Bodoni Moda/serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/latin,latin-ext,math,symbols/187/0.19/21.77/1468/1.17|Gothic A1/sans-serif/100,200,300,400,500,600,700,800,900/korean,latin/188/0.22/21.27/883/0.88|Francois One/sans-serif/400/latin,latin-ext,vietnamese/189/0.35/19.70/857/0.88|Courgette/handwriting/400/latin,latin-ext/190/0.25/18.82/2207/1.72|Alata/sans-serif/400/latin,latin-ext,vietnamese/191/0.26/21.23/946/1.11|Noto Serif TC/serif/200,300,400,500,600,700,800,900/chinese-traditional,cyrillic,latin,latin-ext,vietnamese/192/0.19/21.63/1748/0.74|Merienda/handwriting/300,400,500,600,700,800,900/latin,latin-ext,vietnamese/193/0.20/18.32/1964/2.60|League Spartan/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/194/0.24/21.23/1004/1.33|Gruppo/sans-serif/400/latin,latin-ext/195/0.14/30.72/1399/1.55|Martel/serif/200,300,400,600,700,800,900/devanagari,latin,latin-ext/196/0.22/21.86/1225/0.70|Silkscreen/display/400,700/latin,latin-ext/197/0.20/39.17/690/0.00|Dela Gothic One/display/400/cyrillic,greek,japanese,latin,latin-ext,vietnamese/198/0.38/25.64/1073/1.10|Roboto Serif/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/199/0.23/24.16/1746/1.21|Paytone One/sans-serif/400/latin,latin-ext,vietnamese/200/0.40/24.06/873/1.00|Encode Sans/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/201/0.22/20.07/988/1.08|Cantarell/sans-serif/400,400i,700,700i/latin,latin-ext/202/0.19/22.16/992/1.26|Kaushan Script/handwriting/400/latin,latin-ext/203/0.23/16.15/2209/2.79|Zen Kaku Gothic New/sans-serif/300,400,500,700,900/cyrillic,japanese,latin,latin-ext/204/0.18/22.31/920/1.07|Didact Gothic/sans-serif/400/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext/205/0.20/22.27/890/1.04|Russo One/sans-serif/400/cyrillic,latin,latin-ext/206/0.39/26.74/843/0.51|Libre Caslon Text/serif/400,400i,700/latin,latin-ext/207/0.22/21.27/1400/0.87|Albert Sans/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext/208/0.22/23.92/935/1.16|Neuton/serif/200,300,400,400i,700,800/latin,latin-ext/209/0.28/21.50/1258/0.83|Gloria Hallelujah/handwriting/400/latin/210/0.15/15.42/2017/3.84|Rokkitt/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/211/0.25/26.41/1156/0.63|PT Sans Caption/sans-serif/400,700/cyrillic,cyrillic-ext,latin,latin-ext/212/0.25/24.89/1113/1.31|Rubik Bubbles/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/213/0.43/24.67/4612/3.44|Khand/sans-serif/300,400,500,600,700/devanagari,latin,latin-ext/214/0.27/18.11/769/0.60|Noticia Text/serif/400,400i,700,700i/latin,latin-ext,vietnamese/215/0.24/22.13/1224/0.64|Courier Prime/monospace/400,400i,700,700i/latin,latin-ext/216/0.21/29.68/1846/1.28|Crimson Pro/serif/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/217/0.23/20.98/1635/0.97|Sawarabi Gothic/sans-serif/400/cyrillic,japanese,latin,latin-ext,vietnamese/218/0.25/22.18/933/0.55|Ubuntu Condensed/sans-serif/400/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext/219/0.26/17.76/1089/1.64|Epilogue/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/220/0.23/22.16/1226/1.34|Josefin Slab/serif/100,200,300,400,500,600,700,100i,200i,300i,400i,500i,600i,700i/latin/221/0.14/20.74/1416/0.91|Sacramento/handwriting/400/latin,latin-ext/222/0.12/14.17/3573/2.94|Spicy Rice/display/400/latin/223/0.43/17.98/2409/3.05|Crete Round/serif/400,400i/latin,latin-ext/224/0.29/21.16/1484/0.74|Philosopher/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/225/0.23/23.03/1193/1.19|DM Serif Text/serif/400,400i/latin,latin-ext/226/0.28/22.29/1546/0.90|Yantramanav/sans-serif/100,300,400,500,700,900/devanagari,latin,latin-ext/227/0.24/21.64/828/0.72|Space Mono/monospace/400,400i,700,700i/latin,latin-ext,vietnamese/228/0.20/28.65/1115/1.02|Luckiest Guy/display/400/latin/229/0.43/27.69/1256/1.96|Old Standard TT/serif/400,400i,700/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/230/0.20/22.07/1630/0.96|Commissioner/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/231/0.23/22.61/1536/1.46|Red Hat Text/sans-serif/300,400,500,600,700,300i,400i,500i,600i,700i/latin,latin-ext/232/0.20/22.35/957/1.14|IBM Plex Sans Condensed/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/cyrillic-ext,latin,latin-ext,vietnamese/233/0.23/20.09/992/0.86|Yeseva One/display/400/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/234/0.29/25.50/1318/0.74|Encode Sans Condensed/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/235/0.23/17.30/868/0.92|Noto Sans Mono/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/236/0.20/25.55/1049/1.11|Tenor Sans/sans-serif/400/cyrillic,latin,latin-ext/237/0.20/24.35/1155/1.52|Quattrocento/serif/400,700/latin,latin-ext/238/0.19/21.36/3058/1.55|Geologica/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/239/0.27/23.79/1015/1.25|Anek Devanagari/sans-serif/100,200,300,400,500,600,700,800/devanagari,latin,latin-ext/240/0.25/22.85/1125/0.80|Unna/serif/400,400i,700,700i/latin,latin-ext/241/0.20/19.76/1439/0.78|Yatra One/display/400/devanagari,latin,latin-ext/242/0.27/24.30/1048/1.18|Bangers/display/400/latin,latin-ext,vietnamese/243/0.37/20.00/1611/1.64|Libre Barcode 39/display/400/latin/244/0.30/34.93/1050/0.00|Special Elite/display/400/latin/245/0.25/24.23/8754/2.67|Inria Sans/sans-serif/300,300i,400,400i,700,700i/latin,latin-ext/246/0.23/20.66/910/0.80|Gelasio/serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext,vietnamese/247/0.24/21.51/2145/1.73|Sofia/handwriting/400/latin/248/0.19/16.92/1662/1.66|Noto Naskh Arabic/serif/400,500,600,700/arabic,latin,latin-ext,math,symbols/249/0.24/22.46/1484/0.98|Quattrocento Sans/sans-serif/400,400i,700,700i/latin,latin-ext/250/0.19/20.38/1169/1.48|Pathway Gothic One/sans-serif/400/latin,latin-ext/251/0.30/14.89/838/0.61|Allura/handwriting/400/latin,latin-ext,vietnamese/252/0.17/17.51/3518/2.04|Staatliches/display/400/latin,latin-ext/253/0.33/21.51/1130/0.75|Aleo/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/254/0.25/23.93/2017/0.78|El Messiri/sans-serif/400,500,600,700/arabic,cyrillic,latin,latin-ext/255/0.23/23.03/1217/1.25|Advent Pro/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext/256/0.20/18.84/1092/1.28|Architects Daughter/handwriting/400/latin/257/0.16/20.36/1579/1.44|Baloo Bhaijaan 2/display/400,500,600,700,800/arabic,latin,latin-ext,vietnamese/258/0.23/23.29/1544/1.31|Syne/sans-serif/400,500,600,700,800/greek,latin,latin-ext/259/0.24/23.03/1030/1.28|Squada One/display/400/latin/260/0.39/19.85/900/0.48|Zen Maru Gothic/sans-serif/300,400,500,700,900/cyrillic,greek,japanese,latin,latin-ext/261/0.18/22.31/1200/1.26|Taviraj/serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,thai,vietnamese/262/0.22/23.36/1432/0.84|News Cycle/sans-serif/400,700/latin,latin-ext/263/0.21/19.33/994/1.06|Cuprum/sans-serif/400,500,600,700,400i,500i,600i,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/264/0.26/19.10/935/1.07|Noto Sans Bengali/sans-serif/100,200,300,400,500,600,700,800,900/bengali,latin,latin-ext/265/0.23/22.00/1011/1.11|Sen/sans-serif/400,500,600,700,800/latin,latin-ext/266/0.22/22.97/1005/1.25|Playfair Display SC/serif/400,400i,700,700i,900,900i/cyrillic,latin,latin-ext,vietnamese/267/0.22/26.52/1818/1.12|Bowlby One/display/400/latin/268/0.45/27.23/1954/0.71|Baskervville/serif/400,400i/latin,latin-ext/269/0.18/21.51/1774/1.10|Nerko One/handwriting/400/latin,latin-ext/270/0.33/22.00/1970/3.46|Literata/serif/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/271/0.25/23.04/1665/1.14|Itim/handwriting/400/latin,latin-ext,thai,vietnamese/272/0.26/22.60/2187/1.58|Kumbh Sans/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,math,symbols/273/0.22/22.11/937/1.15|Noto Sans Tamil/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,tamil/274/0.23/22.06/1037/1.17|Jura/sans-serif/300,400,500,600,700/cyrillic,cyrillic-ext,greek,greek-ext,kayah-li,latin,latin-ext,vietnamese/275/0.17/24.42/1273/0.91|Kosugi Maru/sans-serif/400/cyrillic,japanese,latin,latin-ext/276/0.24/24.28/1510/1.87|Tangerine/handwriting/400,700/latin/277/0.14/13.39/2184/2.35|Pirata One/display/400/latin,latin-ext/278/0.35/16.51/1309/0.90|Poiret One/display/400/cyrillic,latin,latin-ext/279/0.12/20.68/738/1.04|JetBrains Mono/monospace/100,200,300,400,500,600,700,800,100i,200i,300i,400i,500i,600i,700i,800i/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/280/0.20/26.80/996/0.82|Patrick Hand/handwriting/400/latin,latin-ext,vietnamese/281/0.23/16.37/1314/1.69|Cookie/handwriting/400/latin/282/0.24/15.64/1861/1.94|Changa One/display/400,400i/latin/283/0.47/24.35/764/0.66|Pridi/serif/200,300,400,500,600,700/latin,latin-ext,thai,vietnamese/284/0.29/25.20/1246/0.73|Viga/sans-serif/400/latin,latin-ext/285/0.32/22.08/838/0.73|Gilda Display/serif/400/latin,latin-ext/286/0.18/21.10/1696/1.71|Sanchez/serif/400,400i/latin,latin-ext/287/0.24/24.30/1520/0.79|Mitr/sans-serif/200,300,400,500,600,700/latin,latin-ext,thai,vietnamese/288/0.28/26.57/1335/1.14|Baloo 2/display/400,500,600,700,800/devanagari,latin,latin-ext,vietnamese/289/0.23/23.29/1522/1.36|DM Mono/monospace/300,300i,400,400i,500,500i/latin,latin-ext/290/0.20/26.98/951/0.96|Shippori Mincho/serif/400,500,600,700,800/japanese,latin,latin-ext/291/0.19/24.16/2014/1.19|Amaranth/sans-serif/400,400i,700,700i/latin/292/0.30/20.82/1310/1.67|Fraunces/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/293/0.24/22.88/2303/1.40|League Gothic/sans-serif/400/latin,latin-ext,vietnamese/294/0.40/12.85/988/0.87|Vidaloka/serif/400/latin/295/0.26/20.96/1535/1.07|Atkinson Hyperlegible/sans-serif/400,400i,700,700i/latin,latin-ext/296/0.24/23.11/954/1.18|Comic Neue/handwriting/300,300i,400,400i,700,700i/latin/297/0.20/23.30/1386/1.49|Mukta Malar/sans-serif/200,300,400,500,600,700,800/latin,latin-ext,tamil/298/0.24/20.88/1067/1.22|Neucha/handwriting/400/cyrillic,latin/299/0.22/16.54/1298/1.70|Saira Semi Condensed/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/300/0.23/20.16/980/1.06|Lalezar/display/400/arabic,latin,latin-ext,vietnamese/301/0.40/22.13/1019/0.89|Ultra/serif/400/latin/302/0.43/28.54/1646/1.31|Six Caps/sans-serif/400/latin/303/0.34/9.02/904/0.92|Parisienne/handwriting/400/latin,latin-ext/304/0.15/16.22/3242/3.17|Bad Script/handwriting/400/cyrillic,latin/305/0.14/13.19/1824/1.78|VT323/monospace/400/latin,latin-ext,vietnamese/306/0.27/23.79/3025/0.76|Abhaya Libre/serif/400,500,600,700,800/latin,latin-ext,sinhala/307/0.22/23.48/1478/0.60|Noto Serif Bengali/serif/100,200,300,400,500,600,700,800,900/bengali,latin,latin-ext/308/0.24/22.72/1592/1.14|Alice/serif/400/cyrillic,cyrillic-ext,latin,latin-ext/309/0.23/22.39/2337/1.89|Ropa Sans/sans-serif/400,400i/latin,latin-ext/310/0.27/19.92/885/0.71|Hind Vadodara/sans-serif/300,400,500,600,700/gujarati,latin,latin-ext/311/0.23/22.01/811/0.80|Hammersmith One/sans-serif/400/latin,latin-ext/312/0.25/19.74/1209/0.82|Press Start 2P/display/400/cyrillic,cyrillic-ext,greek,latin,latin-ext/313/0.15/42.75/658/0.00|Fredoka/sans-serif/300,400,500,600,700/hebrew,latin,latin-ext/314/0.24/23.93/1608/2.23|Homemade Apple/handwriting/400/latin/315/0.14/14.84/8249/2.35|BIZ UDPGothic/sans-serif/400,700/cyrillic,greek-ext,japanese,latin,latin-ext/316/0.22/27.43/1017/0.58|Handlee/handwriting/400/latin/317/0.20/19.72/1362/1.98|Sofia Sans Condensed/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext/318/0.27/17.38/1400/0.94|Carter One/display/400/latin/319/0.37/21.19/2614/2.39|Faustina/serif/300,400,500,600,700,800,300i,400i,500i,600i,700i,800i/latin,latin-ext,vietnamese/320/0.26/22.78/1301/0.82|Fira Sans Extra Condensed/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/321/0.26/17.58/838/0.85|Unbounded/sans-serif/200,300,400,500,600,700,800,900/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/322/0.28/29.25/1043/1.10|Rock Salt/handwriting/400/latin/323/0.22/22.93/7778/1.87|Sofia Sans/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext/324/0.25/22.33/1404/0.95|Sorts Mill Goudy/serif/400,400i/latin,latin-ext/325/0.20/21.62/2192/1.73|Arsenal/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/326/0.20/18.48/930/0.99|Blinker/sans-serif/100,200,300,400,600,700,800,900/latin,latin-ext/327/0.27/23.17/885/0.90|PT Mono/monospace/400/cyrillic,cyrillic-ext,latin,latin-ext/328/0.20/27.80/1178/1.26|Audiowide/display/400/latin,latin-ext/329/0.29/27.26/1135/1.20|Playball/display/400/latin,latin-ext,vietnamese/330/0.24/18.07/3024/1.93|Forum/display/400/cyrillic,cyrillic-ext,latin,latin-ext/331/0.19/21.68/1736/1.58|Volkhov/serif/400,400i,700,700i/latin/332/0.24/20.83/1037/0.58|Krub/sans-serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,thai,vietnamese/333/0.20/21.43/1003/1.07|Unica One/display/400/latin,latin-ext,vietnamese/334/0.21/23.19/894/0.73|Hanken Grotesk/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic-ext,latin,latin-ext,vietnamese/335/0.24/23.25/1030/1.17|Titan One/display/400/latin,latin-ext/336/0.48/26.43/1262/1.60|STIX Two Text/serif/400,500,600,700,400i,500i,600i,700i/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/337/0.23/21.98/1630/1.17|Antonio/sans-serif/100,200,300,400,500,600,700/latin,latin-ext/338/0.29/16.21/1042/1.01|Alex Brush/handwriting/400/latin,latin-ext,vietnamese/339/0.21/19.22/2616/1.42|Share Tech Mono/monospace/400/latin/340/0.20/26.53/891/0.53|Onest/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic,cyrillic-ext,latin,latin-ext/341/0.24/23.46/1042/1.39|Istok Web/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext/342/0.23/23.37/1249/0.91|Nanum Pen Script/handwriting/400/korean,latin/343/0.20/21.21/1937/2.63|Reenie Beanie/handwriting/400/latin/344/0.13/17.32/2512/2.91|Gudea/sans-serif/400,400i,700/latin,latin-ext/345/0.22/20.78/759/0.87|Monoton/display/400/latin/346/0.34/29.22/3053/1.01|Lusitana/serif/400,700/latin/347/0.22/19.99/1440/1.10|Alef/sans-serif/400,700/hebrew,latin/348/0.23/23.12/1356/1.33|Zeyada/handwriting/400/latin/349/0.10/12.32/3042/3.12|Anuphan/sans-serif/100,200,300,400,500,600,700/latin,latin-ext,thai,vietnamese/350/0.23/22.29/1018/0.92|Playfair/serif/300,400,500,600,700,800,900,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/351/0.23/24.25/1860/1.47|Cousine/monospace/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese/352/0.21/27.55/913/0.84|Quantico/sans-serif/400,400i,700,700i/latin/353/0.25/23.22/543/0.00|Bai Jamjuree/sans-serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,thai,vietnamese/354/0.22/23.62/1013/0.69|Ruda/sans-serif/400,500,600,700,800,900/cyrillic,latin,latin-ext,vietnamese/355/0.23/22.09/1188/1.31|Sriracha/handwriting/400/latin,latin-ext,thai,vietnamese/356/0.28/19.68/1661/1.59|Mada/sans-serif/200,300,400,500,600,700,800,900/arabic,latin,latin-ext/357/0.23/20.97/1041/1.13|Ramabhadra/sans-serif/400/latin,telugu/358/0.32/24.47/894/0.85|Radio Canada/sans-serif/300,400,500,600,700,300i,400i,500i,600i,700i/canadian-aboriginal,latin,latin-ext,vietnamese/359/0.25/23.34/990/1.11|Fira Mono/monospace/400,500,700/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext/360/0.19/26.11/878/0.84|Balsamiq Sans/display/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext/361/0.28/22.92/2090/1.23|Eczar/serif/400,500,600,700,800/devanagari,greek,greek-ext,latin,latin-ext/362/0.25/21.29/1933/0.88|Mandali/sans-serif/400/latin,telugu/363/0.21/23.96/1336/1.28|Electrolize/sans-serif/400/latin/364/0.22/21.39/1508/0.78|Julius Sans One/sans-serif/400/latin,latin-ext/365/0.15/26.51/700/0.81|Varela/sans-serif/400/latin,latin-ext/366/0.24/23.42/728/0.76|Damion/handwriting/400/latin,latin-ext/367/0.27/18.09/2512/1.78|Secular One/sans-serif/400/hebrew,latin,latin-ext/368/0.33/22.52/877/0.95|Newsreader/serif/200,300,400,500,600,700,800,200i,300i,400i,500i,600i,700i,800i/latin,latin-ext,vietnamese/369/0.21/21.54/1438/0.90|Reem Kufi/sans-serif/400,500,600,700/arabic,latin,latin-ext,vietnamese/370/0.24/20.65/934/1.04|Wix Madefor Text/sans-serif/400,400i,500,500i,600,600i,700,700i,800,800i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/371/0.21/23.51/911/1.04|Allison/handwriting/400/latin,latin-ext,vietnamese/372/0.17/12.09/3016/1.48|Oxanium/display/200,300,400,500,600,700,800/latin,latin-ext/373/0.22/23.20/696/0.25|Marck Script/handwriting/400/cyrillic,latin,latin-ext/374/0.17/18.27/1404/1.65|Alegreya Sans SC/sans-serif/100,100i,300,300i,400,400i,500,500i,700,700i,800,800i,900,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/375/0.23/22.85/822/0.42|Pangolin/handwriting/400/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/376/0.27/20.44/6271/1.32|Rammetto One/display/400/latin,latin-ext/377/0.41/24.83/1042/1.39|Noto Serif SC/serif/200,300,400,500,600,700,800,900/chinese-simplified,cyrillic,latin,latin-ext,vietnamese/378/0.19/21.63/1748/0.74|Black Ops One/display/400/cyrillic-ext,latin,latin-ext,vietnamese/380/0.40/27.67/690/0.00|Laila/sans-serif/300,400,500,600,700/devanagari,latin,latin-ext/381/0.21/21.80/1167/1.41|Alexandria/sans-serif/100,200,300,400,500,600,700,800,900/arabic,latin,latin-ext,vietnamese/382/0.28/24.85/989/1.23|Amita/handwriting/400,700/devanagari,latin,latin-ext/383/0.19/16.72/1489/1.34|Noto Sans Hebrew/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic-ext,greek-ext,hebrew,latin,latin-ext/384/0.23/21.81/1029/1.16|Monda/sans-serif/400,500,600,700/latin,latin-ext,vietnamese/385/0.23/23.76/990/0.99|Basic/sans-serif/400/latin,latin-ext/386/0.27/21.19/1405/1.44|Khula/sans-serif/300,400,600,700,800/devanagari,latin,latin-ext/387/0.22/22.09/841/0.89|Martel Sans/sans-serif/200,300,400,600,700,800,900/devanagari,latin,latin-ext/388/0.21/21.03/920/0.98|Cabin Condensed/sans-serif/400,500,600,700/latin,latin-ext,vietnamese/389/0.26/17.42/870/0.92|Pinyon Script/handwriting/400/latin,latin-ext,vietnamese/390/0.15/15.84/3022/2.14|Actor/sans-serif/400/latin/391/0.23/20.21/1140/1.38|Darker Grotesque/sans-serif/300,400,500,600,700,800,900/latin,latin-ext,vietnamese/392/0.19/23.31/1075/1.28|Anonymous Pro/monospace/400,400i,700,700i/cyrillic,greek,latin,latin-ext/393/0.20/27.78/1060/1.14|Cormorant Infant/serif/300,300i,400,400i,500,500i,600,600i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/394/0.15/19.09/2058/1.33|Pontano Sans/sans-serif/300,400,500,600,700/latin,latin-ext/395/0.23/21.51/962/1.22|Italianno/handwriting/400/latin,latin-ext,vietnamese/396/0.17/14.21/3014/1.97|Nanum Brush Script/handwriting/400/korean,latin/397/0.16/18.25/2516/2.32|Holtwood One SC/serif/400/latin,latin-ext/398/0.50/31.98/987/0.52|Economica/sans-serif/400,400i,700,700i/latin,latin-ext/399/0.24/15.40/1215/1.35|Pragati Narrow/sans-serif/400,700/devanagari,latin,latin-ext/400/0.28/19.69/902/0.75|Nothing You Could Do/handwriting/400/latin/401/0.12/19.71/1957/4.55|Libre Bodoni/serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext,vietnamese/402/0.22/19.73/1471/0.88|Niramit/sans-serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,thai,vietnamese/403/0.23/21.29/1004/1.06|Noto Sans Malayalam/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,malayalam/404/0.23/22.39/1037/1.17|Vazirmatn/sans-serif/100,200,300,400,500,600,700,800,900/arabic,latin,latin-ext/405/0.24/22.07/1128/1.05|Andika/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/406/0.22/21.30/1239/1.58|Black Han Sans/sans-serif/400/korean,latin/407/0.44/25.33/877/0.75|Aclonica/sans-serif/400/latin/408/0.29/23.21/1415/2.39|Hind Guntur/sans-serif/300,400,500,600,700/latin,latin-ext,telugu/409/0.23/22.01/811/0.80|Gochi Hand/handwriting/400/latin/410/0.27/20.63/2503/2.86|Julee/handwriting/400/latin,latin-ext/411/0.22/18.38/1635/1.79|Adamina/serif/400/latin/412/0.23/21.39/1534/0.95|Mr Dafoe/handwriting/400/latin,latin-ext/413/0.27/15.27/2106/1.89|BenchNine/sans-serif/300,400,700/latin,latin-ext/414/0.27/14.28/1632/1.38|Leckerli One/handwriting/400/latin/415/0.30/20.83/1895/1.77|GFS Didot/serif/400/greek/416/0.20/22.98/1285/0.70|Covered By Your Grace/handwriting/400/latin/417/0.19/15.22/2353/2.35|Instrument Sans/sans-serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext/418/0.22/22.89/980/0.95|Zen Old Mincho/serif/400,500,600,700,900/cyrillic,greek,japanese,latin,latin-ext/419/0.20/22.66/2630/1.94|Londrina Solid/display/100,300,400,900/latin/420/0.40/18.52/2251/2.76|Sansita/sans-serif/400,400i,700,700i,800,800i,900,900i/latin,latin-ext/421/0.32/19.70/966/1.05|Charm/handwriting/400,700/latin,latin-ext,thai,vietnamese/422/0.16/13.81/2196/1.51|Jaldi/sans-serif/400,700/devanagari,latin,latin-ext/423/0.24/21.64/1372/1.20|Kiwi Maru/serif/300,400,500/cyrillic,japanese,latin,latin-ext/424/0.23/24.40/2693/1.57|IBM Plex Sans Thai/sans-serif/100,200,300,400,500,600,700/cyrillic-ext,latin,latin-ext,thai/425/0.23/22.24/1074/1.04|Shrikhand/display/400/gujarati,latin,latin-ext/426/0.43/25.72/2212/1.49|Caveat Brush/handwriting/400/latin,latin-ext/427/0.29/17.38/3536/0.97|Big Shoulders Display/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/428/0.28/13.24/1242/1.20|Calistoga/display/400/latin,latin-ext,vietnamese/429/0.35/20.93/1756/1.54|Belleza/sans-serif/400/latin,latin-ext/430/0.22/21.22/1032/1.32|Averia Serif Libre/display/300,300i,400,400i,700,700i/latin/431/0.25/23.09/2008/1.19|Fugaz One/display/400/latin/432/0.34/21.66/1080/0.83|Cinzel Decorative/display/400,700,900/latin/433/0.19/27.05/1451/0.77|Sarala/sans-serif/400,700/devanagari,latin,latin-ext/434/0.25/21.46/835/0.80|Bricolage Grotesque/sans-serif/200,300,400,500,600,700,800/latin,latin-ext,vietnamese/435/0.26/24.78/1179/1.33|Petrona/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/436/0.20/20.49/1603/0.97|Karma/serif/300,400,500,600,700/devanagari,latin,latin-ext/437/0.22/22.28/1189/0.89|Lemonada/display/300,400,500,600,700/arabic,latin,latin-ext,vietnamese/438/0.25/24.82/1900/2.23|Yrsa/serif/300,400,500,600,700,300i,400i,500i,600i,700i/latin,latin-ext,vietnamese/439/0.24/21.79/1517/0.87|Bevan/serif/400,400i/latin,latin-ext,vietnamese/440/0.42/26.52/1068/0.65|Coda/display/400,800/latin,latin-ext/441/0.26/21.94/1485/1.98|Telex/sans-serif/400/latin,latin-ext/442/0.24/21.28/811/0.80|Rufina/serif/400,700/latin,latin-ext/443/0.21/21.48/1082/0.73|Days One/sans-serif/400/latin/444/0.35/29.43/1177/1.22|Cabin Sketch/display/400,700/latin/445/0.25/21.86/11860/1.21|Seaweed Script/display/400/latin,latin-ext/446/0.20/14.87/8178/1.96|Chewy/display/400/latin/447/0.38/17.33/2075/3.54|Golos Text/sans-serif/400,500,600,700,800,900/cyrillic,cyrillic-ext,latin,latin-ext/448/0.25/24.32/994/1.08|Berkshire Swash/handwriting/400/latin,latin-ext/449/0.31/20.61/2542/3.04|Syncopate/sans-serif/400,700/latin/450/0.13/46.23/1186/1.77|Noto Sans Devanagari/sans-serif/100,200,300,400,500,600,700,800,900/devanagari,latin,latin-ext/451/0.23/22.00/1035/1.17|Fira Code/monospace/300,400,500,600,700/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext/452/0.19/26.11/988/1.07|Akshar/sans-serif/300,400,500,600,700/devanagari,latin,latin-ext/453/0.28/18.67/1504/0.62|Arapey/serif/400,400i/latin/454/0.21/21.30/1248/0.77|Allerta Stencil/sans-serif/400/latin/455/0.24/22.86/1224/1.24|Noto Serif Devanagari/serif/100,200,300,400,500,600,700,800,900/devanagari,latin,latin-ext/456/0.24/22.74/1587/1.13|Kreon/serif/300,400,500,600,700/latin,latin-ext/457/0.26/19.39/1240/0.95|Saira Extra Condensed/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/458/0.26/14.63/966/1.04|Voltaire/sans-serif/400/latin,latin-ext,vietnamese/459/0.27/17.14/896/1.03|Noto Serif Display/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/460/0.20/22.50/1629/1.19|Glegoo/serif/400,700/devanagari,latin,latin-ext/461/0.21/22.85/1239/0.99|Athiti/sans-serif/200,300,400,500,600,700/latin,latin-ext,thai,vietnamese/462/0.19/22.85/966/0.81|Tomorrow/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext/463/0.23/24.27/612/0.00|Shippori Mincho B1/serif/400,500,600,700,800/japanese,latin,latin-ext/464/0.19/24.16/2337/1.16|Scada/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext/465/0.26/21.83/1000/0.73|Spinnaker/sans-serif/400/latin,latin-ext/466/0.22/23.55/1042/0.82|Sofia Sans Semi Condensed/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext/467/0.25/21.45/1400/0.94|Marcellus SC/serif/400/latin,latin-ext/468/0.20/21.77/1839/1.67|Creepster/display/400/latin/469/0.33/22.20/3603/2.61|Grandstander/display/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/470/0.25/22.52/1914/2.86|Racing Sans One/display/400/latin,latin-ext/471/0.40/24.75/1185/1.32|Brygada 1918/serif/400,500,600,700,400i,500i,600i,700i/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/472/0.20/22.10/1497/0.89|Fredericka the Great/display/400/latin,latin-ext/473/0.26/22.68/49643/1.98|Herr Von Muellerhoff/handwriting/400/latin,latin-ext/474/0.15/10.62/2099/1.60|Palanquin/sans-serif/100,200,300,400,500,600,700/devanagari,latin,latin-ext/475/0.22/21.97/840/0.91|Mali/handwriting/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,thai,vietnamese/476/0.19/21.98/1630/1.56|Kameron/serif/400,500,600,700/latin,latin-ext/477/0.25/24.85/1890/1.53|Do Hyeon/sans-serif/400/korean,latin/478/0.33/23.23/1047/0.95|M PLUS 1/sans-serif/100,200,300,400,500,600,700,800,900/japanese,latin,latin-ext,vietnamese/479/0.21/23.94/890/0.90|Michroma/sans-serif/400/latin,latin-ext/480/0.22/30.91/1136/1.44|Lustria/serif/400/latin/481/0.19/20.19/1786/1.13|Arya/sans-serif/400,700/devanagari,latin,latin-ext/482/0.26/22.10/834/0.80|Trocchi/serif/400/latin,latin-ext/483/0.27/23.02/1406/0.92|Alumni Sans/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/484/0.27/17.97/1013/0.96|Sofia Sans Extra Condensed/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext/485/0.29/14.15/1398/0.94|Armata/sans-serif/400/latin,latin-ext/486/0.20/22.12/1136/0.90|Mrs Saint Delafield/handwriting/400/latin,latin-ext/487/0.15/12.27/2001/1.81|Sintony/sans-serif/400,700/latin,latin-ext/488/0.22/22.08/776/0.90|Candal/sans-serif/400/latin/489/0.35/25.36/1293/2.04|PT Serif Caption/serif/400,400i/cyrillic,cyrillic-ext,latin,latin-ext/490/0.26/24.95/1375/0.98|Shantell Sans/display/300,400,500,600,700,800,300i,400i,500i,600i,700i,800i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/491/0.22/22.95/2117/2.83|Alatsi/sans-serif/400/cyrillic-ext,latin,latin-ext,vietnamese/492/0.30/19.96/886/0.93|Jua/sans-serif/400/korean,latin/493/0.30/21.63/2551/2.20|Bellefair/serif/400/hebrew,latin,latin-ext/494/0.17/18.96/1309/1.34|Graduate/serif/400/latin/495/0.22/30.64/815/0.00|K2D/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i/latin,latin-ext,thai,vietnamese/496/0.25/22.79/1209/1.17|Coming Soon/handwriting/400/latin/497/0.14/17.20/3032/2.31|Podkova/serif/400,500,600,700,800/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/498/0.24/24.14/1086/0.65|Contrail One/display/400/latin/499/0.31/16.99/1252/1.12|Poetsen One/display/400/latin,latin-ext/500/0.39/22.77/2021/2.77|Arizonia/handwriting/400/latin,latin-ext,vietnamese/501/0.20/18.01/3043/1.88|Averia Libre/display/300,300i,400,400i,700,700i/latin/502/0.25/22.70/1897/1.08|Palanquin Dark/sans-serif/400,500,600,700/devanagari,latin,latin-ext/503/0.31/22.86/828/0.87|Livvic/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,900,900i/latin,latin-ext,vietnamese/504/0.22/22.12/900/1.05|Suez One/serif/400/hebrew,latin,latin-ext/505/0.37/22.05/1311/0.77|Delius/handwriting/400/latin/506/0.21/21.50/1353/2.26|Just Another Hand/handwriting/400/latin/507/0.25/9.85/2962/2.50|David Libre/serif/400,500,700/hebrew,latin,latin-ext,math,symbols,vietnamese/508/0.21/19.23/1589/1.37|Glory/sans-serif/100,200,300,400,500,600,700,800,100i,200i,300i,400i,500i,600i,700i,800i/latin,latin-ext,vietnamese/509/0.22/20.00/1801/1.85|Rozha One/serif/400/devanagari,latin,latin-ext/510/0.27/23.13/1090/0.86|Corben/display/400,700/latin,latin-ext/511/0.25/24.14/1866/1.63|Cantata One/serif/400/latin,latin-ext/512/0.22/22.69/1164/0.66|Odibee Sans/display/400/latin/513/0.32/14.26/887/0.58|Shadows Into Light Two/handwriting/400/latin,latin-ext/514/0.17/16.72/1761/3.65|Italiana/serif/400/latin/515/0.16/20.12/950/1.02|Cutive Mono/monospace/400/latin,latin-ext/516/0.15/34.12/1840/1.27|BioRhyme/serif/200,300,400,500,600,700,800/latin,latin-ext/517/0.26/27.10/1668/1.10|Marmelad/sans-serif/400/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/518/0.23/22.28/1536/1.54|Koulen/display/400/khmer,latin/519/0.31/22.74/1179/0.69|Ovo/serif/400/latin/520/0.21/22.60/2312/1.35|Krona One/sans-serif/400/latin,latin-ext/521/0.29/28.43/1149/1.59|Aldrich/sans-serif/400/latin/522/0.26/25.72/845/0.68|Inknut Antiqua/serif/300,400,500,600,700,800,900/devanagari,latin,latin-ext/523/0.23/23.15/1110/0.64|Cedarville Cursive/handwriting/400/latin/524/0.12/15.79/3484/2.50|Rye/display/400/latin,latin-ext/525/0.32/22.91/4439/1.30|Share/sans-serif/400,400i,700,700i/latin,latin-ext/526/0.24/20.65/1084/1.35|Ibarra Real Nova/serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext/527/0.18/21.43/1755/1.07|Kurale/serif/400/cyrillic,cyrillic-ext,devanagari,latin,latin-ext/528/0.23/21.88/1685/1.19|Annie Use Your Telescope/handwriting/400/latin/529/0.13/14.78/1717/3.56|Overlock/display/400,400i,700,700i,900,900i/latin,latin-ext/530/0.21/18.94/1224/1.83|La Belle Aurore/handwriting/400/latin/531/0.10/12.88/2387/3.23|Nobile/sans-serif/400,400i,500,500i,700,700i/latin,latin-ext/532/0.23/21.84/1278/1.90|Boogaloo/display/400/latin/533/0.33/16.46/922/1.26|Biryani/sans-serif/200,300,400,600,700,800,900/devanagari,latin,latin-ext/534/0.23/21.08/829/0.82|Besley/serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/latin,latin-ext/535/0.23/23.56/2587/1.43|Judson/serif/400,400i,700/latin,latin-ext,vietnamese/536/0.24/24.14/1211/0.86|Castoro/serif/400,400i/latin,latin-ext/537/0.24/21.36/2047/1.74|Antic/sans-serif/400/latin/538/0.19/19.84/864/0.82|Gupter/serif/400,500,700/latin/539/0.23/20.38/1539/0.99|Ms Madi/handwriting/400/latin,latin-ext,vietnamese/540/0.17/15.98/3581/2.08|Pattaya/sans-serif/400/cyrillic,latin,latin-ext,thai,vietnamese/541/0.35/18.80/2034/1.07|Caudex/serif/400,400i,700,700i/greek,greek-ext,latin,latin-ext/542/0.20/21.73/2019/0.92|Halant/serif/300,400,500,600,700/devanagari,latin,latin-ext/543/0.20/20.87/1312/1.19|Limelight/display/400/latin,latin-ext/544/0.31/25.83/1146/0.90|Knewave/display/400/latin,latin-ext/545/0.37/18.25/1954/1.74|Oranienbaum/serif/400/cyrillic,cyrillic-ext,latin,latin-ext/546/0.21/19.12/1560/1.10|Trirong/serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,thai,vietnamese/547/0.21/23.60/1193/0.81|Pathway Extreme/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/548/0.23/24.50/1016/0.79|Kosugi/sans-serif/400/cyrillic,japanese,latin,latin-ext/549/0.23/24.30/1046/1.37|Baloo Da 2/display/400,500,600,700,800/bengali,latin,latin-ext,vietnamese/550/0.23/23.29/1522/1.36|Overpass Mono/monospace/300,400,500,600,700/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/551/0.19/28.22/1022/1.11|Rancho/handwriting/400/latin/552/0.27/15.62/2552/2.41|Noto Nastaliq Urdu/serif/400,500,600,700/arabic,latin,latin-ext/553/0.25/21.71/1484/0.98|Allerta/sans-serif/400/latin/554/0.25/22.86/1188/1.52|Yesteryear/handwriting/400/latin/555/0.25/14.67/3007/3.27|M PLUS 2/sans-serif/100,200,300,400,500,600,700,800,900/japanese,latin,latin-ext,vietnamese/556/0.21/23.72/941/1.00|Zen Kaku Gothic Antique/sans-serif/300,400,500,700,900/cyrillic,japanese,latin,latin-ext/557/0.18/22.31/920/1.07|Arbutus Slab/serif/400/latin,latin-ext/558/0.25/23.32/1513/1.07|Lemon/display/400/latin,latin-ext/559/0.37/24.83/1870/2.21|Klee One/handwriting/400,600/cyrillic,greek-ext,japanese,latin,latin-ext/560/0.17/25.43/2062/1.80|Nixie One/display/400/latin/561/0.13/25.67/1674/1.03|Gabarito/display/400,500,600,700,800,900/latin,latin-ext/562/0.27/23.35/1007/1.01|Wallpoet/display/400/latin/563/0.30/36.04/834/0.00|Irish Grover/display/400/latin/564/0.28/22.43/3041/1.96|Rambla/sans-serif/400,400i,700,700i/latin,latin-ext/565/0.26/19.70/794/0.99|Fresca/sans-serif/400/latin,latin-ext/566/0.24/19.52/889/1.12|Rasa/serif/300,400,500,600,700,300i,400i,500i,600i,700i/gujarati,latin,latin-ext,vietnamese/567/0.24/21.79/1517/0.87|Average Sans/sans-serif/400/latin,latin-ext/568/0.23/20.30/808/0.82|Cormorant Upright/serif/300,400,500,600,700/latin,latin-ext,vietnamese/569/0.16/18.29/1885/1.50|Manjari/sans-serif/100,400,700/latin,latin-ext,malayalam/570/0.22/22.83/1429/1.63|Macondo/display/400/latin/571/0.20/19.12/1295/2.60|Metrophobic/sans-serif/400/latin,latin-ext,vietnamese/572/0.22/23.77/931/1.04|RocknRoll One/sans-serif/400/japanese,latin,latin-ext/573/0.28/24.12/1024/1.13|Bowlby One SC/display/400/latin,latin-ext/574/0.38/33.72/2224/1.34|Petit Formal Script/handwriting/400/latin,latin-ext/575/0.16/24.71/2753/2.53|Norican/handwriting/400/latin,latin-ext/576/0.29/18.11/2422/2.28|Georama/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/577/0.24/21.72/1218/1.62|B612/sans-serif/400,400i,700,700i/latin/578/0.22/21.37/1265/1.48|Oooh Baby/handwriting/400/latin,latin-ext,vietnamese/579/0.14/17.54/2204/1.53|Sigmar One/display/400/latin,latin-ext,vietnamese/580/0.46/30.70/3993/0.76|Gravitas One/display/400/latin/581/0.36/32.59/1748/1.62|Grand Hotel/handwriting/400/latin,latin-ext/582/0.24/13.82/2906/3.02|Niconne/handwriting/400/latin,latin-ext/583/0.23/19.05/1959/2.05|Chonburi/display/400/latin,latin-ext,thai,vietnamese/584/0.30/27.53/1410/0.85|Montserrat Subrayada/sans-serif/400,700/latin/585/0.29/32.72/833/0.36|Jomhuria/display/400/arabic,latin,latin-ext/586/0.43/20.60/1104/1.02|Markazi Text/serif/400,500,600,700/arabic,latin,latin-ext,vietnamese/587/0.28/22.16/1628/0.45|UnifrakturMaguntia/display/400/latin/588/0.27/20.78/2494/1.39|Magra/sans-serif/400,700/latin,latin-ext/589/0.26/19.80/905/0.87|Kristi/handwriting/400/latin/590/0.20/11.08/1759/1.27|B612 Mono/monospace/400,400i,700,700i/latin/591/0.18/26.00/1344/1.58|Spline Sans/sans-serif/300,400,500,600,700/latin,latin-ext/592/0.25/20.98/1066/1.08|Fahkwang/sans-serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,thai,vietnamese/593/0.21/26.89/912/1.01|Big Shoulders Text/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/594/0.29/14.83/1242/1.20|Encode Sans Semi Condensed/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/595/0.22/18.71/865/0.91|Azeret Mono/monospace/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext/596/0.22/29.51/969/0.95|Grenze Gotisch/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/597/0.31/19.99/2016/1.63|Alegreya SC/serif/400,400i,500,500i,700,700i,800,800i,900,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/598/0.24/24.18/1984/1.16|Schoolbell/handwriting/400/latin/599/0.19/16.31/2499/2.16|Murecho/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic,cyrillic-ext,greek,japanese,latin,latin-ext/600/0.24/20.65/1135/1.31|Zen Kurenaido/sans-serif/400/cyrillic,greek,japanese,latin,latin-ext/601/0.16/19.57/1326/1.42|Lateef/serif/200,300,400,500,600,700,800/arabic,latin,latin-ext/602/0.27/21.45/1488/0.78|Fanwood Text/serif/400,400i/latin/603/0.20/19.21/2413/1.65|Proza Libre/sans-serif/400,400i,500,500i,600,600i,700,700i,800,800i/latin,latin-ext/604/0.22/21.39/1263/1.69|Enriqueta/serif/400,500,600,700/latin,latin-ext/605/0.23/20.55/1342/0.78|Encode Sans Expanded/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/606/0.21/22.82/853/0.88|Gurajada/serif/400/latin,telugu/607/0.35/20.41/876/0.68|Lexend Exa/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/608/0.22/28.27/1095/1.25|Love Ya Like A Sister/display/400/latin,latin-ext/609/0.24/20.46/14172/0.35|Amiko/sans-serif/400,600,700/devanagari,latin,latin-ext/610/0.21/23.28/855/0.86|Miriam Libre/sans-serif/400,700/hebrew,latin,latin-ext/611/0.23/22.47/1521/1.17|Oxygen Mono/monospace/400/latin,latin-ext/612/0.19/25.82/836/0.90|Rosario/sans-serif/300,400,500,600,700,300i,400i,500i,600i,700i/latin,latin-ext,vietnamese/613/0.24/19.99/1184/1.51|Skranji/display/400,700/latin,latin-ext/614/0.33/20.33/15657/1.65|DotGothic16/sans-serif/400/cyrillic,japanese,latin,latin-ext/615/0.22/24.45/1026/0.00|Hahmlet/serif/100,200,300,400,500,600,700,800,900/korean,latin,latin-ext,vietnamese/616/0.22/24.12/2303/0.80|Dongle/sans-serif/300,400,700/korean,latin,latin-ext,vietnamese/617/0.30/23.16/1396/1.40|Quintessential/handwriting/400/latin,latin-ext/618/0.17/14.97/2846/2.65|Radley/serif/400,400i/latin,latin-ext/619/0.24/24.65/1823/1.31|Hepta Slab/serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/620/0.21/25.98/1370/0.72|Bubblegum Sans/display/400/latin,latin-ext/621/0.30/18.10/1491/1.62|Doppio One/sans-serif/400/latin,latin-ext/622/0.28/21.55/1216/1.43|Mallanna/sans-serif/400/latin,telugu/623/0.22/23.78/1333/1.26|Maitree/serif/200,300,400,500,600,700/latin,latin-ext,thai,vietnamese/624/0.21/23.58/1503/0.96|Waiting for the Sunrise/handwriting/400/latin/625/0.11/15.51/2078/2.64|Molengo/sans-serif/400/latin,latin-ext/626/0.22/20.88/994/0.76|IBM Plex Sans KR/sans-serif/100,200,300,400,500,600,700/korean,latin,latin-ext/627/0.23/22.24/1074/1.04|Bungee Inline/display/400/latin,latin-ext,vietnamese/628/0.40/32.25/2311/0.74|BIZ UDGothic/sans-serif/400,700/cyrillic,greek-ext,japanese,latin,latin-ext/629/0.21/22.55/988/0.57|Alike/serif/400/latin,latin-ext,math,symbols/630/0.24/21.17/1775/1.39|IM Fell English/serif/400,400i/latin/631/0.23/20.41/8843/1.86|Dawning of a New Day/handwriting/400/latin/632/0.10/14.50/2228/1.73|Lexend Zetta/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/633/0.18/36.06/1095/1.25|Mansalva/handwriting/400/greek,latin,latin-ext,vietnamese/634/0.20/18.64/2451/1.39|Gloock/serif/400/cyrillic-ext,latin,latin-ext/635/0.28/21.67/1528/1.02|Monsieur La Doulaise/handwriting/400/latin,latin-ext/636/0.13/13.08/2594/1.64|Calligraffitti/handwriting/400/latin/637/0.14/13.98/3185/2.30|Spectral SC/serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i/cyrillic,latin,latin-ext,vietnamese/638/0.23/29.81/1038/0.45|Vesper Libre/serif/400,500,700,900/devanagari,latin,latin-ext/639/0.24/21.69/1349/0.90|Turret Road/display/200,300,400,500,700,800/latin,latin-ext/640/0.17/24.20/651/0.00|Style Script/handwriting/400/latin,latin-ext,vietnamese/641/0.22/14.31/3259/1.95|Sunflower/sans-serif/300,500,700/korean,latin/642/0.23/20.70/979/1.07|Coustard/serif/400,900/latin/643/0.29/24.09/2442/2.07|Short Stack/handwriting/400/latin/644/0.20/24.87/2712/3.43|Yusei Magic/sans-serif/400/japanese,latin,latin-ext/645/0.26/22.25/1457/1.39|Zen Dots/display/400/latin,latin-ext/646/0.32/31.91/787/0.54|Caladea/serif/400,400i,700,700i/latin,latin-ext/647/0.26/21.00/1347/0.93|Average/serif/400/latin,latin-ext/648/0.22/20.82/2112/1.84|Ma Shan Zheng/handwriting/400/chinese-simplified,latin/649/0.27/12.33/1926/1.75|Mochiy Pop One/sans-serif/400/japanese,latin/650/0.36/24.47/1459/1.99|Montagu Slab/serif/100,200,300,400,500,600,700/latin,latin-ext,vietnamese/651/0.26/25.55/1509/0.76|Rochester/handwriting/400/latin/652/0.22/15.88/3190/2.72|Carrois Gothic/sans-serif/400/latin/653/0.23/21.91/1025/1.34|Antic Didone/serif/400/latin/654/0.16/21.15/1274/0.76|Stardos Stencil/display/400,700/latin/655/0.26/23.07/1789/0.88|Goudy Bookletter 1911/serif/400/latin/656/0.22/20.31/2847/1.84|Anek Malayalam/sans-serif/100,200,300,400,500,600,700,800/latin,latin-ext,malayalam/657/0.25/23.00/1125/0.80|IM Fell English SC/serif/400/latin/658/0.21/20.65/10177/2.03|Sniglet/display/400,800/latin,latin-ext/659/0.26/20.11/1932/3.01|Cormorant SC/serif/300,400,500,600,700/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/660/0.17/23.39/2195/1.33|Jockey One/sans-serif/400/latin,latin-ext/661/0.38/20.10/749/0.51|Fjord One/serif/400/latin/662/0.21/19.56/1957/1.78|Gabriela/serif/400/cyrillic,cyrillic-ext,latin,latin-ext/663/0.23/21.44/1764/1.31|IM Fell DW Pica/serif/400,400i/latin/664/0.23/19.66/10086/2.28|Aboreto/display/400/latin,latin-ext/665/0.17/27.79/842/0.78|Reddit Mono/monospace/200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/666/0.20/24.95/1088/1.04|Bungee Shade/display/400/latin,latin-ext,vietnamese/667/0.35/32.45/3670/0.70|Cambay/sans-serif/400,400i,700,700i/devanagari,latin,latin-ext/668/0.22/21.88/876/0.72|Playwrite CU/handwriting/100,200,300,400/latin/669/0.16/15.35/2611/2.58|Wix Madefor Display/sans-serif/400,500,600,700,800/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/670/0.21/23.69/995/1.05|Noto Sans Lao Looped/sans-serif/100,200,300,400,500,600,700,800,900/lao,latin,latin-ext/671/0.23/22.06/1035/1.17|Prosto One/display/400/cyrillic,latin,latin-ext/672/0.29/28.74/950/1.19|Bentham/serif/400/latin/673/0.21/22.67/1731/1.19|MuseoModerno/display/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/674/0.25/23.96/1099/1.39|Inria Serif/serif/300,300i,400,400i,700,700i/latin,latin-ext/675/0.21/22.14/1424/0.82|Thasadith/sans-serif/400,400i,700,700i/latin,latin-ext,thai,vietnamese/676/0.15/21.49/1195/1.26|Bellota Text/display/300,300i,400,400i,700,700i/cyrillic,latin,latin-ext,vietnamese/677/0.18/21.49/1029/1.02|Fauna One/serif/400/latin,latin-ext/678/0.21/23.34/1104/0.74|Andada Pro/serif/400,500,600,700,800,400i,500i,600i,700i,800i/latin,latin-ext,vietnamese/679/0.22/21.84/1999/1.03|Cambo/serif/400/latin,latin-ext/680/0.24/21.95/1122/0.91|Baloo Thambi 2/display/400,500,600,700,800/latin,latin-ext,tamil,vietnamese/681/0.23/23.29/1522/1.36|Capriola/sans-serif/400/latin,latin-ext/682/0.25/20.72/1662/1.15|Quando/serif/400/latin,latin-ext/683/0.24/23.21/2322/1.34|Copse/serif/400/latin/684/0.27/21.97/2119/0.85|Baloo Paaji 2/display/400,500,600,700,800/gurmukhi,latin,latin-ext,vietnamese/685/0.23/23.29/1522/1.36|Sansita Swashed/display/300,400,500,600,700,800,900/latin,latin-ext,vietnamese/686/0.31/19.95/2022/2.24|Kaisei Decol/serif/400,500,700/cyrillic,japanese,latin,latin-ext/687/0.21/24.01/3153/2.00|Patrick Hand SC/handwriting/400/latin,latin-ext,vietnamese/688/0.23/23.35/1360/1.68|Aladin/display/400/latin,latin-ext/689/0.30/15.00/1874/1.57|Agbalumo/display/400/cyrillic-ext,latin,latin-ext,vietnamese/690/0.37/23.02/2037/2.25|Marvel/sans-serif/400,400i,700,700i/latin/691/0.20/16.47/1248/1.28|Chelsea Market/display/400/latin,latin-ext/692/0.28/23.36/13149/1.92|Notable/sans-serif/400/latin/693/0.35/43.26/827/0.67|Kodchasan/sans-serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,thai,vietnamese/694/0.19/22.15/1405/1.40|KoHo/sans-serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,thai,vietnamese/695/0.20/21.54/1026/0.95|Cutive/serif/400/latin,latin-ext/696/0.25/24.46/1968/1.37|Della Respira/serif/400/latin/697/0.20/21.54/1852/1.55|Brawler/serif/400,700/latin/698/0.24/22.42/1213/0.84|Baloo Chettan 2/display/400,500,600,700,800/latin,latin-ext,malayalam,vietnamese/699/0.23/23.29/1522/1.36|Expletus Sans/display/400,500,600,700,400i,500i,600i,700i/latin,latin-ext/700/0.23/21.38/1110/1.32|Gotu/sans-serif/400/devanagari,latin,latin-ext,vietnamese/701/0.19/22.38/1495/2.16|Meddon/handwriting/400/latin/702/0.14/17.72/4434/2.85|Rakkas/display/400/arabic,latin,latin-ext/703/0.34/19.63/1106/0.59|Kelly Slab/display/400/cyrillic,latin,latin-ext/704/0.23/20.70/878/0.22|Angkor/display/400/khmer,latin/705/0.40/27.44/1109/0.61|Fondamento/handwriting/400,400i/latin,latin-ext/706/0.20/18.28/1868/1.39|Sedgwick Ave/handwriting/400/latin,latin-ext,vietnamese/707/0.24/15.11/2101/1.25|Uncial Antiqua/display/400/latin/708/0.21/19.63/2167/2.27|Almendra/serif/400,400i,700,700i/latin,latin-ext/709/0.23/19.79/1560/1.01|Major Mono Display/monospace/400/latin,latin-ext,vietnamese/710/0.12/40.36/779/0.69|Tenali Ramakrishna/sans-serif/400/latin,telugu/711/0.25/25.47/1094/0.83|Croissant One/display/400/latin,latin-ext/712/0.26/24.47/1182/1.35|ZCOOL XiaoWei/sans-serif/400/chinese-simplified,latin/713/0.23/23.03/1118/1.04|McLaren/display/400/latin,latin-ext/714/0.24/22.21/1438/2.04|Xanh Mono/monospace/400,400i/latin,latin-ext,vietnamese/715/0.18/22.80/1368/0.78|Supermercado One/display/400/latin/716/0.29/19.76/1799/1.10|ZCOOL QingKe HuangYou/sans-serif/400/chinese-simplified,latin/717/0.31/19.69/1422/0.56|Barriecito/display/400/latin,latin-ext,vietnamese/718/0.32/22.00/2313/1.10|Noto Sans Sinhala/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,sinhala/719/0.21/23.92/1037/1.17|Montaga/serif/400/latin/720/0.21/20.99/1436/0.92|Over the Rainbow/handwriting/400/latin/721/0.13/15.11/2299/3.67|IBM Plex Sans JP/sans-serif/100,200,300,400,500,600,700/cyrillic,japanese,latin,latin-ext/722/0.22/22.19/965/0.81|Black And White Picture/display/400/korean,latin/723/0.30/18.23/16447/1.24|Federo/sans-serif/400/latin/724/0.23/20.73/1089/1.45|Headland One/serif/400/latin,latin-ext/725/0.23/23.58/1846/0.92|Noto Sans Meetei Mayek/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,meetei-mayek/726/0.23/22.16/1003/1.10|Kaisei Opti/serif/400,500,700/cyrillic,japanese,latin,latin-ext/727/0.21/24.01/3153/2.00|Potta One/display/400/japanese,latin,latin-ext,vietnamese/728/0.35/26.28/2133/2.83|Aguafina Script/handwriting/400/latin,latin-ext/729/0.20/9.31/2371/1.39|Asul/sans-serif/400,700/latin/730/0.24/20.79/1218/0.84|Shippori Antique/sans-serif/400/japanese,latin,latin-ext/731/0.26/23.22/970/1.07|Encode Sans Semi Expanded/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/732/0.21/21.42/849/0.87|Noto Sans NKo Unjoined/sans-serif/400,500,600,700/latin,latin-ext,nko/733/0.23/22.06/953/0.98|Young Serif/serif/400/latin,latin-ext/734/0.29/23.39/2296/1.11|Harmattan/sans-serif/400,500,600,700/arabic,latin,latin-ext/735/0.24/21.37/1252/1.52|Qwigley/handwriting/400/latin,latin-ext,vietnamese/736/0.16/13.60/2246/1.16|Rethink Sans/sans-serif/400,500,600,700,800,400i,500i,600i,700i,800i/latin,latin-ext/737/0.23/22.90/962/1.16|Kadwa/serif/400,700/devanagari,latin/738/0.27/21.98/1108/0.67|Noto Sans Khmer/sans-serif/100,200,300,400,500,600,700,800,900/khmer,latin,latin-ext/739/0.23/22.06/1035/1.17|Hanuman/serif/100,300,400,700,900/khmer,latin/740/0.25/23.99/1243/0.56|Imbue/serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/741/0.28/13.31/1408/1.07|Amethysta/serif/400/latin/742/0.22/22.49/1209/0.77|Oregano/display/400,400i/latin,latin-ext/743/0.21/15.14/3712/3.20|Lekton/monospace/400,400i,700/latin,latin-ext/744/0.17/24.54/757/0.80|Hurricane/handwriting/400/latin,latin-ext,vietnamese/745/0.18/15.07/3110/2.25|Aref Ruqaa/serif/400,700/arabic,latin,latin-ext/746/0.23/21.44/1973/1.69|Goblin One/display/400/latin/747/0.33/31.41/1455/1.60|Mr De Haviland/handwriting/400/latin,latin-ext/748/0.16/11.21/2024/1.80|Poly/serif/400,400i/latin/749/0.24/21.27/1404/0.96|Battambang/display/100,300,400,700,900/khmer,latin/750/0.25/23.99/1243/0.56|Hina Mincho/serif/400/cyrillic,japanese,latin,latin-ext,vietnamese/751/0.19/21.32/2615/1.41|Bruno Ace SC/display/400/latin,latin-ext/752/0.23/37.57/844/0.76|Noto Sans Georgian/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic-ext,georgian,greek-ext,latin,latin-ext,math,symbols/753/0.23/22.00/1035/1.17|Anek Latin/sans-serif/100,200,300,400,500,600,700,800/latin,latin-ext,vietnamese/754/0.25/22.83/1125/0.80|Oleo Script Swash Caps/display/400,700/latin,latin-ext/755/0.33/17.89/1657/1.61|Walter Turncoat/handwriting/400/latin/756/0.24/27.06/11166/2.07|Sue Ellen Francisco/handwriting/400/latin/757/0.13/8.44/1259/0.60|Gantari/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext/758/0.23/25.05/949/1.14|Saira Stencil One/display/400/latin,latin-ext,vietnamese/759/0.39/23.27/1196/0.71|Suranna/serif/400/latin,telugu/760/0.21/21.00/1049/0.64|Nova Mono/monospace/400/greek,latin/761/0.19/25.75/1039/0.70|Noto Emoji/sans-serif/300,400,500,600,700/emoji/762/0.10/39.71/420/0.00|Libre Barcode 39 Extended Text/display/400/latin/763/0.33/33.97/3042/0.23|Allan/display/400,700/latin,latin-ext/764/0.29/15.16/1306/1.10|Pixelify Sans/display/400,500,600,700/cyrillic,latin,latin-ext/765/0.28/26.33/724/0.00|Geo/sans-serif/400,400i/latin/766/0.23/20.10/452/0.00|Mukta Vaani/sans-serif/200,300,400,500,600,700,800/gujarati,latin,latin-ext/767/0.25/20.39/1067/1.22|Pompiere/display/400/latin/768/0.15/12.53/1779/1.74|Padauk/sans-serif/400,700/latin,latin-ext,myanmar/769/0.23/24.97/978/1.27|Kaisei Tokumin/serif/400,500,700,800/cyrillic,japanese,latin,latin-ext/770/0.21/24.01/3153/2.00|Loved by the King/handwriting/400/latin/771/0.14/11.38/1182/0.45|Syne Mono/monospace/400/latin,latin-ext/772/0.21/26.24/969/0.52|Mountains of Christmas/display/400,700/latin/773/0.15/13.66/8424/1.43|Familjen Grotesk/sans-serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext,vietnamese/774/0.27/22.96/898/0.86|Megrim/display/400/latin/775/0.12/23.77/699/0.92|Inder/sans-serif/400/latin,latin-ext/776/0.24/23.98/911/0.71|Nova Round/display/400/latin/777/0.24/23.01/1028/0.62|Baloo Tamma 2/display/400,500,600,700,800/kannada,latin,latin-ext,vietnamese/778/0.22/24.22/1544/1.31|Ephesis/handwriting/400/latin,latin-ext,vietnamese/779/0.17/16.77/2562/1.20|Goldman/display/400,700/latin,latin-ext,vietnamese/780/0.30/29.07/1120/0.83|Vollkorn SC/serif/400,600,700,900/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/781/0.22/25.63/1803/1.28|Euphoria Script/handwriting/400/latin,latin-ext/782/0.20/16.26/1936/1.57|Mouse Memoirs/sans-serif/400/latin,latin-ext/783/0.39/14.64/1710/2.40|Nova Square/display/400/latin/784/0.25/23.00/881/0.31|Gugi/display/400/korean,latin/785/0.28/24.01/1547/0.91|Baloo Bhai 2/display/400,500,600,700,800/gujarati,latin,latin-ext,vietnamese/786/0.23/23.29/1522/1.36|Fuggles/handwriting/400/latin,latin-ext,vietnamese/787/0.14/13.81/3048/1.90|Libre Caslon Display/serif/400/latin,latin-ext/788/0.18/19.15/1379/0.82|Ruslan Display/display/400/cyrillic,latin,latin-ext,math,symbols/789/0.32/27.11/1014/1.06|IM Fell Double Pica/serif/400,400i/latin/790/0.21/19.01/8990/2.16|Averia Sans Libre/display/300,300i,400,400i,700,700i/latin/791/0.24/21.89/1690/1.05|Libre Barcode 39 Text/display/400/latin/792/0.38/21.40/1943/0.20|BIZ UDPMincho/serif/400,700/cyrillic,greek-ext,japanese,latin,latin-ext/793/0.20/27.31/1633/0.67|Mukta Mahee/sans-serif/200,300,400,500,600,700,800/gurmukhi,latin,latin-ext/794/0.25/20.39/1067/1.22|Vina Sans/display/400/latin,latin-ext,vietnamese/795/0.41/17.92/997/0.76|Alike Angular/serif/400/latin,latin-ext,math,symbols/796/0.24/21.17/1165/0.00|Zen Antique Soft/serif/400/cyrillic,greek,japanese,latin,latin-ext/797/0.24/24.30/2581/1.87|Slabo 13px/serif/400/latin,latin-ext/798/0.23/22.23/1015/0.49|Happy Monkey/display/400/latin,latin-ext/799/0.21/23.28/1286/1.40|Puritan/sans-serif/400,400i,700,700i/latin/800/0.23/21.00/935/0.65|Caprasimo/display/400/latin,latin-ext/801/0.41/26.23/2284/1.91|Orelega One/display/400/cyrillic,cyrillic-ext,latin,latin-ext/802/0.36/25.70/1469/1.30|Rampart One/display/400/cyrillic,japanese,latin,latin-ext/803/0.25/23.48/2149/0.99|Hi Melody/handwriting/400/korean,latin/804/0.20/21.40/1999/2.44|Give You Glory/handwriting/400/latin/805/0.11/16.31/2407/4.11|Freehand/display/400/khmer,latin/806/0.20/15.06/10360/1.25|Bakbak One/display/400/devanagari,latin,latin-ext/807/0.37/25.44/1016/0.98|Coiny/display/400/latin,latin-ext,tamil,vietnamese/808/0.38/25.76/1439/2.04|BhuTuka Expanded One/serif/400/gurmukhi,latin,latin-ext/809/0.12/45.34/1355/0.99|Esteban/serif/400/latin,latin-ext/810/0.21/19.72/1652/1.50|Cherry Cream Soda/display/400/latin/811/0.29/27.17/1937/2.80|Metamorphous/display/400/latin,latin-ext/812/0.21/22.58/1714/1.03|ADLaM Display/display/400/adlam,latin,latin-ext/813/0.32/22.24/1823/1.35|Asar/serif/400/devanagari,latin,latin-ext/814/0.22/20.12/2091/2.08|REM/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/815/0.25/23.06/1003/0.98|Crafty Girls/handwriting/400/latin/816/0.15/19.99/3987/1.57|Codystar/display/300,400/latin,latin-ext/817/0.05/31.87/13144/1.55|Bellota/display/300,300i,400,400i,700,700i/cyrillic,latin,latin-ext,vietnamese/818/0.18/21.49/1217/1.13|Nokora/sans-serif/100,300,400,700,900/khmer,latin/819/0.23/22.01/984/0.88|NTR/sans-serif/400/latin,telugu/820/0.24/23.45/1259/1.26|Rouge Script/handwriting/400/latin/821/0.18/15.66/2250/1.52|Finger Paint/display/400/latin/822/0.22/18.73/6689/1.63|Vibur/handwriting/400/latin/823/0.20/15.52/2193/0.96|Red Rose/display/300,400,500,600,700/latin,latin-ext,vietnamese/824/0.25/24.66/1595/1.54|Anybody/display/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/825/0.26/22.00/938/0.80|Elsie/display/400,900/latin,latin-ext/826/0.23/22.05/1495/1.35|Kranky/display/400/latin/827/0.18/21.45/16490/2.04|Galada/display/400/bengali,latin/828/0.35/18.80/1640/1.49|Montez/handwriting/400/latin/829/0.16/13.86/2667/3.09|Gluten/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/830/0.29/27.03/2156/3.07|Bigshot One/display/400/latin/831/0.34/24.03/1677/1.07|Ruthie/handwriting/400/latin,latin-ext,vietnamese/832/0.15/12.67/3442/1.21|Clicker Script/handwriting/400/latin,latin-ext/833/0.14/14.41/3198/2.97|Lexend Peta/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/834/0.20/32.44/1095/1.25|Flow Circular/display/400/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/835/0.00/75.21/770/1.50|Vast Shadow/serif/400/latin/836/0.28/32.59/3316/1.01|Buenard/serif/400,700/latin,latin-ext/837/0.22/20.33/1453/1.00|Slackey/display/400/latin/838/0.35/31.30/2271/2.62|Amarante/display/400/latin,latin-ext/839/0.26/20.97/1576/1.21|League Script/handwriting/400/latin/840/0.09/19.15/4179/2.59|Passions Conflict/handwriting/400/latin,latin-ext,vietnamese/841/0.15/15.87/3279/1.17|Balthazar/serif/400/latin/842/0.25/21.28/1074/0.43|Poller One/display/400/latin/843/0.34/27.20/1150/1.59|Carme/sans-serif/400/latin/844/0.21/21.42/767/0.86|Noto Sans Hanunoo/sans-serif/400/hanunoo,latin,latin-ext/845/0.23/22.06/936/0.94|Noto Sans Myanmar/sans-serif/100,200,300,400,500,600,700,800,900/myanmar/846/0.14/32.06/420/0.00|Faster One/display/400/latin,latin-ext/847/0.38/39.16/1943/0.29|Atma/display/300,400,500,600,700/bengali,latin,latin-ext/848/0.23/17.00/1452/1.99|Numans/sans-serif/400/latin/849/0.22/27.52/1158/1.02|Kufam/sans-serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/arabic,latin,latin-ext,vietnamese/850/0.23/22.75/1125/1.09|Gowun Dodum/sans-serif/400/korean,latin,latin-ext,vietnamese/851/0.17/22.35/1275/1.04|Mingzat/sans-serif/400/latin,latin-ext,lepcha/852/0.21/26.15/916/0.66|Original Surfer/display/400/latin/853/0.25/23.52/1646/2.56|Bilbo Swash Caps/handwriting/400/latin,latin-ext/854/0.18/15.62/2588/1.83|Dokdo/display/400/korean,latin/855/0.25/28.85/2395/0.99|Germania One/display/400/latin/856/0.34/18.05/1066/1.38|Mirza/serif/400,500,600,700/arabic,latin,latin-ext/857/0.26/23.57/1352/1.44|Share Tech/sans-serif/400/latin/858/0.25/20.96/876/0.55|Noto Serif Telugu/serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,telugu/859/0.24/22.96/1579/1.12|Prociono/serif/400/latin/860/0.24/20.72/1774/1.44|Gayathri/sans-serif/100,400,700/latin,malayalam/861/0.23/24.11/1151/0.97|Reggae One/display/400/cyrillic,japanese,latin,latin-ext/862/0.27/24.34/1027/1.28|Gowun Batang/serif/400,700/korean,latin,latin-ext,vietnamese/863/0.17/22.95/2222/1.60|Wendy One/sans-serif/400/latin,latin-ext/864/0.43/25.04/855/1.07|Cormorant Unicase/serif/300,400,500,600,700/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/865/0.17/23.58/2192/1.37|Duru Sans/sans-serif/400/latin,latin-ext/866/0.20/23.03/1042/0.75|Solway/serif/300,400,500,700,800/latin/867/0.24/23.36/1652/0.87|Trade Winds/display/400/latin/868/0.30/21.69/6489/2.32|Viaoda Libre/display/400/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/869/0.17/17.45/1867/1.05|Gamja Flower/handwriting/400/korean,latin/870/0.24/22.30/1997/2.37|Mako/sans-serif/400/latin,latin-ext/871/0.24/21.55/1149/1.06|Tienne/serif/400,700,900/latin/872/0.24/24.08/2254/1.74|Imprima/sans-serif/400/latin,latin-ext/873/0.23/21.35/878/0.98|Bona Nova/serif/400,400i,700/cyrillic,cyrillic-ext,greek,hebrew,latin,latin-ext,vietnamese/874/0.18/19.46/1599/1.25|Salsa/display/400/latin/875/0.29/21.34/1305/2.03|Licorice/handwriting/400/latin,latin-ext,vietnamese/876/0.16/12.76/2904/2.56|Scope One/serif/400/latin,latin-ext/877/0.20/24.67/1533/0.88|Instrument Serif/serif/400,400i/latin,latin-ext/878/0.24/16.69/2041/1.16|Eater/display/400/latin,latin-ext/879/0.31/23.04/8104/1.08|Bayon/sans-serif/400/khmer,latin/880/0.31/22.74/1179/0.69|Charis SIL/serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/881/0.24/22.29/1401/0.90|Farro/sans-serif/300,400,500,700/latin,latin-ext/882/0.27/21.65/967/0.70|IM Fell Great Primer/serif/400,400i/latin/883/0.22/20.21/9194/2.48|Kode Mono/monospace/400,500,600,700/latin,latin-ext/884/0.19/25.73/688/0.00|Just Me Again Down Here/handwriting/400/latin,latin-ext/885/0.16/13.94/1312/0.58|Sarpanch/sans-serif/400,500,600,700,800,900/devanagari,latin,latin-ext/886/0.23/28.65/875/0.44|Libre Barcode 128/display/400/latin/887/0.26/23.85/630/0.00|Noto Sans Symbols/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,symbols/888/0.23/22.06/1003/1.10|Raleway Dots/display/400/latin,latin-ext/889/0.07/23.06/13930/1.00|Handjet/display/100,200,300,400,500,600,700,800,900/arabic,armenian,cyrillic,cyrillic-ext,greek,hebrew,latin,latin-ext,vietnamese/890/0.23/16.77/133400/5.00|Artifika/serif/400/latin/891/0.24/24.65/1696/1.74|Fasthand/display/400/khmer,latin/892/0.20/15.06/10360/1.25|Iceberg/display/400/latin/893/0.25/18.00/568/0.00|Overlock SC/display/400/latin,latin-ext/894/0.23/24.21/1444/1.38|Unkempt/display/400,700/latin/895/0.20/22.06/14830/1.95|Sulphur Point/sans-serif/300,400,700/latin,latin-ext/896/0.22/24.26/962/1.15|Tiro Devanagari Hindi/serif/400,400i/devanagari,latin,latin-ext/897/0.24/21.68/2047/1.74|Qwitcher Grypen/handwriting/400,700/latin,latin-ext,vietnamese/898/0.16/15.93/5557/1.62|Martian Mono/monospace/100,200,300,400,500,600,700,800/cyrillic,cyrillic-ext,latin,latin-ext/899/0.22/28.06/956/0.87|Recursive/sans-serif/300,400,500,600,700,800,900/cyrillic-ext,latin,latin-ext,vietnamese/900/0.23/22.30/2350/2.18|Shanti/sans-serif/400/latin,latin-ext/901/0.24/21.95/1031/1.13|Rubik Scribble/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext,math,symbols/902/0.12/24.80/14915/1.70|Dynalight/display/400/latin,latin-ext/903/0.20/15.80/2984/2.21|Anaheim/sans-serif/400,500,600,700,800/latin,latin-ext,vietnamese/904/0.20/21.71/1030/0.94|Lily Script One/display/400/latin,latin-ext/905/0.33/18.83/1743/1.42|Homenaje/sans-serif/400/latin/906/0.29/16.63/823/0.64|Meow Script/handwriting/400/latin,latin-ext,vietnamese/907/0.19/17.07/3448/1.98|Birthstone/handwriting/400/latin,latin-ext,vietnamese/908/0.20/14.46/2560/2.04|Road Rage/display/400/latin,latin-ext,vietnamese/909/0.41/15.32/17251/0.76|ZCOOL KuaiLe/sans-serif/400/chinese-simplified,latin/910/0.23/28.31/507/0.00|Square Peg/handwriting/400/latin,latin-ext,vietnamese/911/0.14/11.07/2541/1.18|Fontdiner Swanky/display/400/latin/912/0.24/19.13/1450/1.61|Playpen Sans/handwriting/100,200,300,400,500,600,700,800/emoji,latin,latin-ext,math,vietnamese/913/0.21/21.60/2169/2.69|Sumana/serif/400,700/devanagari,latin,latin-ext/914/0.23/21.64/1554/0.92|Modak/display/400/devanagari,latin,latin-ext/915/0.51/23.58/1611/1.27|Tilt Warp/display/400/latin,latin-ext,vietnamese/916/0.38/22.52/1379/2.33|Mogra/display/400/gujarati,latin,latin-ext/917/0.31/19.65/1874/1.87|Cherry Swash/display/400,700/latin,latin-ext/918/0.26/23.30/1074/0.83|Ledger/serif/400/cyrillic,latin,latin-ext/919/0.19/22.07/986/0.63|Macondo Swash Caps/display/400/latin/920/0.20/19.31/1386/2.62|Ceviche One/display/400/latin,latin-ext/921/0.43/22.81/1238/1.24|Delius Unicase/handwriting/400,700/latin/922/0.19/32.32/1357/2.15|Wire One/sans-serif/400/latin/923/0.16/11.59/1545/1.11|The Girl Next Door/handwriting/400/latin/924/0.11/17.98/2444/3.09|Reddit Sans/sans-serif/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/925/0.23/22.06/1113/1.11|Monomaniac One/sans-serif/400/japanese,latin,latin-ext/926/0.35/21.04/1491/1.00|Zen Antique/serif/400/cyrillic,greek,japanese,latin,latin-ext/927/0.24/24.30/2438/1.90|Belgrano/serif/400/latin/928/0.23/22.82/1049/0.73|Baumans/display/400/latin/929/0.25/21.30/941/1.07|Shojumaru/display/400/latin,latin-ext/930/0.36/29.30/2204/2.22|Fragment Mono/monospace/400,400i/cyrillic-ext,latin,latin-ext/931/0.20/27.91/925/0.98|Noto Serif Thai/serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,thai/932/0.24/22.78/1592/1.14|Zilla Slab Highlight/serif/400,700/latin,latin-ext/933/0.71/18.47/1239/0.44|Life Savers/display/400,700,800/latin,latin-ext/934/0.14/18.86/2754/1.70|Stick/sans-serif/400/cyrillic,japanese,latin,latin-ext/935/0.22/21.74/500/0.00|Smooch/handwriting/400/latin,latin-ext,vietnamese/936/0.25/16.42/4437/2.01|Afacad/sans-serif/400,500,600,700,400i,500i,600i,700i/cyrillic-ext,latin,latin-ext,math,symbols,vietnamese/937/0.23/21.18/982/1.19|Gaegu/handwriting/300,400,700/korean,latin/938/0.18/23.90/2458/1.96|Rosarivo/serif/400,400i/latin,latin-ext/939/0.16/17.88/1824/1.21|IM Fell Great Primer SC/serif/400/latin/940/0.21/21.13/9989/2.32|Yuji Syuku/serif/400/cyrillic,japanese,latin,latin-ext/941/0.18/28.32/3230/2.05|SUSE/sans-serif/100,200,300,400,500,600,700,800/latin,latin-ext/942/0.23/22.14/1050/0.97|Corinthia/handwriting/400,700/latin,latin-ext,vietnamese/943/0.16/13.81/2831/1.32|Noto Serif HK/serif/200,300,400,500,600,700,800,900/chinese-hongkong,cyrillic,latin,latin-ext,vietnamese/944/0.19/21.63/1748/0.74|Charmonman/handwriting/400,700/latin,latin-ext,thai,vietnamese/945/0.10/11.18/2096/1.70|Manuale/serif/300,400,500,600,700,800,300i,400i,500i,600i,700i,800i/latin,latin-ext,vietnamese/946/0.25/22.28/1241/0.83|Kdam Thmor Pro/sans-serif/400/khmer,latin,latin-ext/947/0.31/19.49/868/0.47|IBM Plex Sans Hebrew/sans-serif/100,200,300,400,500,600,700/cyrillic-ext,hebrew,latin,latin-ext/948/0.23/22.24/1074/1.04|Monofett/monospace/400/latin,latin-ext/949/0.44/31.93/1579/0.43|Lovers Quarrel/handwriting/400/latin,latin-ext,vietnamese/950/0.19/12.37/3203/1.06|Sancreek/display/400/latin,latin-ext/951/0.37/19.34/3214/2.31|Chau Philomene One/sans-serif/400,400i/latin,latin-ext/952/0.34/18.54/1185/1.31|Noto Sans Telugu/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,telugu/953/0.23/22.24/1037/1.17|Dekko/handwriting/400/devanagari,latin,latin-ext/954/0.22/18.48/1825/1.76|UnifrakturCook/display/700/latin/955/0.34/19.68/1360/0.90|Orienta/sans-serif/400/latin,latin-ext/956/0.24/22.00/948/1.06|Mochiy Pop P One/sans-serif/400/japanese,latin/957/0.36/24.47/1459/1.99|Flamenco/display/300,400/latin/958/0.17/19.16/1299/1.50|Birthstone Bounce/handwriting/400,500/latin,latin-ext,vietnamese/959/0.18/13.32/3754/1.77|Pavanam/sans-serif/400/latin,latin-ext,tamil/960/0.21/21.22/1008/0.69|Redressed/handwriting/400/latin/961/0.23/17.94/2083/2.39|Chango/display/400/latin,latin-ext/962/0.41/33.76/1394/1.81|Convergence/sans-serif/400/latin,latin-ext/963/0.26/22.54/836/0.97|Voces/sans-serif/400/latin,latin-ext/964/0.24/22.36/927/0.82|Sura/serif/400,700/devanagari,latin,latin-ext/965/0.24/21.01/1681/0.92|Kalnia/serif/100,200,300,400,500,600,700/latin,latin-ext,math/966/0.21/26.01/1608/1.29|IM Fell DW Pica SC/serif/400/latin/967/0.23/21.09/9684/2.24|Anek Bangla/sans-serif/100,200,300,400,500,600,700,800/bengali,latin,latin-ext/968/0.25/22.53/1125/0.80|Emilys Candy/display/400/latin,latin-ext/969/0.24/20.48/18851/1.82|Timmana/sans-serif/400/latin,telugu/970/0.31/20.23/891/0.93|Frijole/display/400/latin/971/0.37/34.69/22079/1.99|Comforter Brush/handwriting/400/cyrillic,latin,latin-ext,vietnamese/972/0.16/11.92/15033/0.76|Kantumruy Pro/sans-serif/100,200,300,400,500,600,700,100i,200i,300i,400i,500i,600i,700i/khmer,latin,latin-ext/973/0.20/23.62/1054/1.15|Varta/sans-serif/300,400,500,600,700/latin,latin-ext,vietnamese/974/0.22/20.74/994/1.04|Hachi Maru Pop/handwriting/400/cyrillic,japanese,latin,latin-ext/975/0.18/33.74/1900/2.08|Lexend Giga/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/976/0.21/30.35/1095/1.25|MonteCarlo/handwriting/400/latin,latin-ext,vietnamese/977/0.17/15.54/3672/1.85|Katibeh/display/400/arabic,latin,latin-ext/978/0.31/23.11/1524/1.05|Arima/display/100,200,300,400,500,600,700/greek,greek-ext,latin,latin-ext,malayalam,tamil,vietnamese/979/0.22/21.54/1740/1.81|Noto Serif Georgian/serif/100,200,300,400,500,600,700,800,900/georgian,latin,latin-ext/980/0.24/22.78/1592/1.14|Chivo Mono/monospace/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/981/0.22/28.34/1126/1.06|Protest Guerrilla/display/400/latin,latin-ext,math,symbols,vietnamese/982/0.42/21.68/897/0.72|Ribeye/display/400/latin,latin-ext/983/0.26/24.45/3220/2.27|Strait/sans-serif/400/latin,latin-ext/984/0.24/20.23/1025/1.22|Libre Barcode 128 Text/display/400/latin/985/0.32/14.49/1842/0.40|IM Fell French Canon/serif/400,400i/latin/986/0.22/22.29/4325/2.42|Crushed/display/400/latin/987/0.23/22.10/1564/2.45|Platypi/serif/300,400,500,600,700,800,300i,400i,500i,600i,700i,800i/latin,latin-ext,vietnamese/988/0.24/23.19/1389/0.51|Freckle Face/display/400/latin,latin-ext/989/0.35/19.66/5365/3.06|Noto Sans Armenian/sans-serif/100,200,300,400,500,600,700,800,900/armenian,latin,latin-ext/990/0.23/22.06/1037/1.17|Noto Serif Malayalam/serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,malayalam/991/0.23/23.17/1579/1.12|Medula One/display/400/latin/992/0.36/13.31/1269/1.10|Henny Penny/display/400/latin/993/0.17/14.24/4096/3.23|Rationale/sans-serif/400/latin/994/0.25/18.13/1142/0.76|Scheherazade New/serif/400,500,600,700/arabic,latin,latin-ext/995/0.23/22.46/1593/1.39|Tilt Neon/display/400/latin,latin-ext,vietnamese/996/0.26/22.30/2597/3.51|Trykker/serif/400/latin,latin-ext/997/0.20/21.98/1365/0.58|Song Myung/serif/400/korean,latin/998/0.27/22.52/2064/1.05|Rhodium Libre/serif/400/devanagari,latin,latin-ext/999/0.24/24.83/1091/0.70|Tauri/sans-serif/400/latin,latin-ext/1000/0.26/20.14/1131/1.49|Peralta/serif/400/latin,latin-ext/1001/0.32/26.82/1621/1.48|Ysabeau Office/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext,math,symbols,vietnamese/1002/0.17/19.99/1062/1.14|Ramaraja/serif/400/latin,telugu/1003/0.30/22.47/2176/1.53|Yomogi/handwriting/400/cyrillic,japanese,latin,latin-ext,vietnamese/1004/0.13/25.74/1498/1.10|Modern Antiqua/display/400/latin,latin-ext/1005/0.23/23.91/1776/0.76|Miniver/display/400/latin/1006/0.22/17.02/3434/2.14|Sail/display/400/latin,latin-ext/1007/0.22/22.12/1660/1.67|Sunshiney/handwriting/400/latin/1008/0.21/16.22/10633/2.08|Denk One/sans-serif/400/cyrillic-ext,latin,latin-ext,vietnamese/1009/0.33/19.02/1436/1.32|Maiden Orange/serif/400/latin/1010/0.33/16.70/1632/1.49|Rubik Dirt/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1011/0.43/24.90/49446/0.00|Ubuntu Sans/sans-serif/100,200,300,400,500,600,700,800,100i,200i,300i,400i,500i,600i,700i,800i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext/1012/0.21/21.97/1060/1.57|Delius Swash Caps/handwriting/400/latin/1013/0.21/21.30/1543/1.88|Edu SA Beginner/handwriting/400,500,600,700/latin/1014/0.16/15.43/1420/1.66|Red Hat Mono/monospace/300,400,500,600,700,300i,400i,500i,600i,700i/latin,latin-ext/1015/0.17/26.86/962/1.08|Lexend Mega/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1016/0.20/31.41/1095/1.25|Carlito/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/1017/0.25/22.01/1270/1.59|Mina/sans-serif/400,700/bengali,latin,latin-ext/1018/0.20/20.62/1130/1.29|Karantina/display/300,400,700/hebrew,latin,latin-ext/1019/0.40/14.19/893/0.36|MedievalSharp/display/400/latin,latin-ext/1020/0.21/22.55/2027/1.30|Swanky and Moo Moo/handwriting/400/latin/1021/0.13/19.17/2476/3.00|Baloo Bhaina 2/display/400,500,600,700,800/latin,latin-ext,oriya,vietnamese/1022/0.23/23.29/1544/1.31|Delicious Handrawn/handwriting/400/latin,latin-ext/1023/0.22/13.34/2740/1.76|Nova Flat/display/400/latin/1024/0.25/23.00/1016/0.63|Akronim/display/400/latin,latin-ext/1025/0.25/13.31/7460/2.51|Baskervville SC/serif/400/latin,latin-ext/1026/0.18/21.51/1774/1.10|Iceland/display/400/latin/1027/0.22/22.99/683/0.26|Sedgwick Ave Display/handwriting/400/latin,latin-ext,vietnamese/1028/0.24/13.56/2317/1.28|Reddit Sans Condensed/sans-serif/200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1029/0.25/19.34/1025/0.93|Radio Canada Big/sans-serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext/1030/0.28/23.23/977/0.96|Abyssinica SIL/serif/400/ethiopic,latin,latin-ext/1031/0.23/23.60/1427/0.90|Anek Tamil/sans-serif/100,200,300,400,500,600,700,800/latin,latin-ext,tamil/1032/0.25/23.37/1125/0.80|Rum Raisin/sans-serif/400/latin,latin-ext/1033/0.35/15.91/2064/2.57|East Sea Dokdo/handwriting/400/korean,latin/1034/0.23/18.52/6837/0.94|Suwannaphum/serif/100,300,400,700,900/khmer,latin/1035/0.25/23.99/1243/0.56|Chocolate Classical Sans/sans-serif/400/chinese-hongkong,cyrillic,latin,latin-ext,vietnamese/1036/0.23/21.03/1001/1.05|Tektur/display/400,500,600,700,800,900/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/1037/0.26/27.08/495/0.00|Noto Serif Khmer/serif/100,200,300,400,500,600,700,800,900/khmer,latin,latin-ext/1038/0.24/22.78/1587/1.13|Jomolhari/serif/400/latin,tibetan/1039/0.22/22.37/1862/1.46|Port Lligat Slab/serif/400/latin/1040/0.26/20.75/1506/1.33|Noto Sans Anatolian Hieroglyphs/sans-serif/400/anatolian-hieroglyphs,latin,latin-ext/1041/0.23/22.06/936/0.94|Carattere/handwriting/400/latin,latin-ext,vietnamese/1042/0.20/14.80/2599/1.14|Ranchers/display/400/latin,latin-ext/1043/0.45/16.88/1285/1.67|WindSong/handwriting/400,500/latin,latin-ext,vietnamese/1044/0.10/21.52/3600/2.11|Tiro Bangla/serif/400,400i/bengali,latin,latin-ext/1045/0.24/21.81/2047/1.74|Zain/sans-serif/200,300,400,700,800,900/arabic,latin/1046/0.26/21.85/1221/1.14|Stick No Bills/sans-serif/200,300,400,500,600,700,800/latin,latin-ext,sinhala/1047/0.26/19.84/1178/1.07|Protest Revolution/display/400/latin,latin-ext,math,symbols,vietnamese/1048/0.28/19.47/29497/1.45|Noto Sans Buhid/sans-serif/400/buhid,latin,latin-ext/1049/0.23/22.00/936/0.94|AR One Sans/sans-serif/400,500,600,700/latin,latin-ext,vietnamese/1050/0.23/23.40/1177/0.87|Noto Sans Gujarati/sans-serif/100,200,300,400,500,600,700,800,900/gujarati,latin,latin-ext,math,symbols/1051/0.23/22.06/1037/1.17|Noto Sans Kannada/sans-serif/100,200,300,400,500,600,700,800,900/kannada,latin,latin-ext/1052/0.23/22.28/1037/1.17|Moul/display/400/khmer,latin/1053/0.40/27.44/1109/0.61|Sree Krushnadevaraya/serif/400/latin,telugu/1054/0.24/22.64/1112/0.63|IM Fell Double Pica SC/serif/400/latin/1055/0.20/19.43/9464/2.07|Beth Ellen/handwriting/400/latin/1056/0.19/16.87/3836/1.63|Mooli/sans-serif/400/latin,latin-ext/1057/0.22/22.51/1075/1.30|Vujahday Script/handwriting/400/latin,latin-ext,vietnamese/1058/0.17/18.54/5080/1.71|Donegal One/serif/400/latin,latin-ext/1059/0.23/22.72/2104/1.85|M PLUS 1 Code/monospace/100,200,300,400,500,600,700/japanese,latin,latin-ext,vietnamese/1060/0.21/22.05/926/0.90|Piazzolla/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/1061/0.22/22.43/1422/0.84|Tillana/display/400,500,600,700,800/devanagari,latin,latin-ext/1062/0.19/19.42/1169/1.21|Texturina/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/1063/0.24/21.59/2695/2.19|Genos/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cherokee,latin,latin-ext,vietnamese/1064/0.26/30.03/1337/1.75|Barrio/display/400/latin,latin-ext/1065/0.22/29.10/2815/1.10|Alkatra/display/400,500,600,700/bengali,devanagari,latin,latin-ext,oriya/1066/0.32/21.22/1825/1.88|Whisper/handwriting/400/latin,latin-ext,vietnamese/1067/0.17/16.59/2872/1.16|Gulzar/serif/400/arabic,latin,latin-ext/1068/0.25/21.09/1311/0.74|Finlandica/sans-serif/400,500,600,700,400i,500i,600i,700i/cyrillic,cyrillic-ext,latin,latin-ext/1069/0.23/20.07/1090/1.00|Borel/handwriting/400/latin,latin-ext,math,symbols,vietnamese/1070/0.17/16.79/1779/1.48|Cute Font/display/400/korean,latin/1071/0.29/23.84/1200/0.72|Fenix/serif/400/latin,latin-ext/1072/0.24/21.18/1140/0.64|Caesar Dressing/display/400/latin/1073/0.27/24.85/7080/1.97|Akaya Telivigala/display/400/latin,latin-ext,telugu/1074/0.25/20.07/2100/1.97|Sofadi One/display/400/latin/1075/0.20/22.77/1659/2.02|Spline Sans Mono/monospace/300,400,500,600,700,300i,400i,500i,600i,700i/latin,latin-ext/1076/0.21/25.20/1140/0.99|Marko One/serif/400/latin/1077/0.25/22.46/1670/1.75|Mrs Sheppards/handwriting/400/latin,latin-ext/1078/0.32/15.37/1692/2.58|Benne/serif/400/kannada,latin,latin-ext/1079/0.19/19.46/2318/1.19|Stoke/serif/300,400/latin,latin-ext/1080/0.22/24.67/2611/1.43|Londrina Outline/display/400/latin/1081/0.14/18.26/4384/1.08|Carrois Gothic SC/sans-serif/400/latin/1082/0.23/23.66/771/0.82|Nova Oval/display/400/latin/1083/0.23/23.25/1142/0.72|Sonsie One/display/400/latin,latin-ext/1084/0.37/32.16/1979/2.00|Asset/display/400/cyrillic-ext,latin,latin-ext,math,symbols/1085/0.34/46.83/2133/1.47|Srisakdi/display/400,700/latin,latin-ext,thai,vietnamese/1086/0.14/18.54/2073/1.44|Edu VIC WA NT Beginner/handwriting/400,500,600,700/latin/1087/0.16/16.73/1573/1.81|Smythe/display/400/latin/1088/0.28/15.83/2104/1.94|Noto Serif Kannada/serif/100,200,300,400,500,600,700,800,900/kannada,latin,latin-ext/1089/0.24/22.55/1584/1.13|Solitreo/handwriting/400/hebrew,latin,latin-ext/1090/0.23/19.05/1824/2.73|Rubik Moonrocks/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1091/0.41/25.10/12223/1.26|Kulim Park/sans-serif/200,200i,300,300i,400,400i,600,600i,700,700i/latin,latin-ext/1092/0.23/23.40/914/1.19|Kenia/display/400/latin/1093/0.34/17.20/2024/1.72|Stalemate/handwriting/400/latin,latin-ext/1094/0.10/9.20/3174/2.85|Seymour One/sans-serif/400/cyrillic,latin,latin-ext/1095/0.35/30.13/1523/1.86|Nova Slim/display/400/latin/1096/0.22/23.00/1037/0.61|Habibi/serif/400/latin,latin-ext/1097/0.20/21.12/1234/0.61|Stylish/sans-serif/400/korean,latin/1098/0.25/22.78/2228/1.25|Grape Nuts/handwriting/400/latin,latin-ext,vietnamese/1099/0.16/19.97/2661/1.94|Gemunu Libre/sans-serif/200,300,400,500,600,700,800/latin,latin-ext,sinhala/1100/0.28/19.04/922/0.47|Gafata/sans-serif/400/latin,latin-ext/1101/0.20/20.39/958/0.93|Fascinate Inline/display/400/latin/1102/0.35/22.47/2457/2.05|Chicle/display/400/latin,latin-ext/1103/0.39/14.88/1685/1.66|IM Fell French Canon SC/serif/400/latin/1104/0.21/23.10/4369/2.13|Meie Script/handwriting/400/latin,latin-ext/1105/0.13/20.61/3484/2.92|Zen Tokyo Zoo/display/400/latin,latin-ext/1106/0.22/23.13/1859/0.66|Yaldevi/sans-serif/200,300,400,500,600,700/latin,latin-ext,sinhala/1107/0.22/18.74/1098/1.20|Baloo Tammudu 2/display/400,500,600,700,800/latin,latin-ext,telugu,vietnamese/1108/0.23/23.29/1522/1.36|Moon Dance/handwriting/400/latin,latin-ext,vietnamese/1109/0.15/14.35/2953/2.22|Ysabeau SC/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic,cyrillic-ext,greek,latin,latin-ext,math,symbols,vietnamese/1110/0.19/24.55/865/0.76|Girassol/display/400/latin,latin-ext/1111/0.24/22.38/1339/0.73|Shippori Antique B1/sans-serif/400/japanese,latin,latin-ext/1112/0.26/23.22/1671/1.19|Paprika/display/400/latin,latin-ext/1113/0.23/20.02/1961/2.71|Bungee Spice/display/400/latin,latin-ext,vietnamese/1114/0.40/32.25/1272/0.73|Kite One/sans-serif/400/latin,latin-ext/1115/0.18/16.87/1527/2.00|Meera Inimai/sans-serif/400/latin,tamil/1116/0.24/22.04/1102/1.03|Mohave/sans-serif/300,400,500,600,700,300i,400i,500i,600i,700i/latin,latin-ext/1117/0.25/17.82/930/0.75|Miltonian Tattoo/display/400/latin/1118/0.29/23.82/2744/1.29|Zhi Mang Xing/handwriting/400/chinese-simplified,latin/1119/0.27/12.33/1926/1.75|The Nautigal/handwriting/400,700/latin,latin-ext,vietnamese/1120/0.15/12.95/3240/1.98|Simonetta/display/400,400i,900,900i/latin,latin-ext/1121/0.18/19.09/2408/2.54|Cantora One/sans-serif/400/latin,latin-ext/1122/0.30/19.58/1555/2.21|Noto Sans Thai Looped/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,thai/1123/0.23/22.00/936/0.94|Unlock/display/400/latin,latin-ext/1124/0.38/24.31/1047/0.59|Waterfall/handwriting/400/latin,latin-ext,vietnamese/1125/0.14/15.34/2930/1.78|Stint Ultra Expanded/serif/400/latin,latin-ext/1126/0.19/32.38/1370/1.14|Astloch/display/400,700/latin/1127/0.14/18.66/1828/0.90|Nosifer/display/400/latin,latin-ext/1128/0.38/31.05/3105/1.18|Nova Cut/display/400/latin/1129/0.22/23.25/986/0.46|Farsan/display/400/gujarati,latin,latin-ext,vietnamese/1130/0.23/16.24/1640/1.45|Metal Mania/display/400/latin,latin-ext/1131/0.31/17.36/15201/1.84|Belanosima/sans-serif/400,600,700/latin,latin-ext/1132/0.29/22.65/1998/1.68|Fuzzy Bubbles/handwriting/400,700/latin,latin-ext,vietnamese/1133/0.18/23.18/2306/2.32|Engagement/handwriting/400/latin/1134/0.24/13.18/3539/2.81|Anek Telugu/sans-serif/100,200,300,400,500,600,700,800/latin,latin-ext,telugu/1136/0.25/23.03/1125/0.80|Gorditas/display/400,700/latin/1137/0.33/24.11/2372/1.42|Koh Santepheap/serif/100,300,400,700,900/khmer,latin/1138/0.24/22.77/1672/0.92|Margarine/display/400/latin,latin-ext/1139/0.30/19.06/8827/2.45|Bodoni Moda SC/serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/latin,latin-ext,math,symbols/1140/0.19/21.70/1468/1.17|Mystery Quest/display/400/latin,latin-ext/1141/0.21/16.33/3055/2.84|Akaya Kanadaka/display/400/kannada,latin,latin-ext/1142/0.25/19.90/2100/1.97|Jacques Francois Shadow/display/400/latin/1143/0.21/23.14/3349/1.40|Train One/display/400/cyrillic,japanese,latin,latin-ext/1144/0.25/24.99/1893/1.07|Noto Sans Ethiopic/sans-serif/100,200,300,400,500,600,700,800,900/ethiopic,latin,latin-ext/1145/0.23/22.06/1037/1.17|Redacted/display/400/latin,latin-ext/1146/0.91/13.15/210/0.00|Beau Rivage/handwriting/400/latin,latin-ext,vietnamese/1147/0.17/14.47/3472/2.22|Stint Ultra Condensed/serif/400/latin,latin-ext/1148/0.30/13.55/1282/1.00|Lexend Tera/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1149/0.19/33.47/1095/1.25|New Rocker/display/400/latin,latin-ext/1150/0.30/18.90/2232/1.91|Miltonian/display/400/latin/1151/0.23/23.82/5190/2.74|Text Me One/sans-serif/400/latin,latin-ext/1152/0.15/21.43/1362/1.20|Tac One/sans-serif/400/latin,latin-ext,math,symbols,vietnamese/1153/0.46/22.39/740/0.74|Nova Script/display/400/latin/1154/0.23/23.28/1395/0.66|Long Cang/handwriting/400/chinese-simplified,latin/1155/0.17/24.18/1896/2.56|Trispace/sans-serif/100,200,300,400,500,600,700,800/latin,latin-ext,vietnamese/1156/0.21/27.70/1234/1.47|Dorsa/sans-serif/400/latin/1157/0.27/7.96/836/0.66|Poltawski Nowy/serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext,vietnamese/1158/0.24/23.10/1998/1.34|Vampiro One/display/400/latin,latin-ext/1159/0.33/23.48/1122/0.80|Ribeye Marrow/display/400/latin,latin-ext/1160/0.23/24.45/2887/1.37|Eagle Lake/handwriting/400/latin,latin-ext/1161/0.17/18.91/2623/3.00|Underdog/display/400/cyrillic,latin,latin-ext/1162/0.23/22.20/857/0.01|Grenze/serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,vietnamese/1163/0.30/20.19/1261/0.82|Sarina/display/400/latin,latin-ext/1164/0.31/28.65/2483/1.49|Risque/display/400/latin,latin-ext/1165/0.29/22.57/1544/1.76|Gentium Plus/serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/1166/0.20/19.19/1662/1.34|Ewert/display/400/latin,latin-ext/1167/0.32/36.82/5069/0.75|Liu Jian Mao Cao/handwriting/400/chinese-simplified,latin/1168/0.13/15.11/2299/3.67|Noto Serif Khojki/serif/400,500,600,700/khojki,latin,latin-ext/1169/0.24/22.78/1484/0.98|Braah One/sans-serif/400/gurmukhi,latin,latin-ext,vietnamese/1170/0.37/24.14/874/0.97|Noto Sans Glagolitic/sans-serif/400/cyrillic-ext,glagolitic,latin,latin-ext,math,symbols/1171/0.23/22.06/936/0.94|Noto Sans Math/sans-serif/400/math/1172/0.23/22.06/936/0.94|Sahitya/serif/400,700/devanagari,latin/1173/0.22/19.68/1917/1.25|Milonga/display/400/latin,latin-ext/1174/0.22/20.19/2461/2.31|Gentium Book Plus/serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/1175/0.23/19.57/1648/1.32|Atomic Age/display/400/latin/1176/0.25/22.99/1141/1.00|Bubbler One/sans-serif/400/latin,latin-ext/1177/0.15/17.33/858/0.94|Wellfleet/serif/400/latin,latin-ext/1178/0.29/22.67/1865/0.79|Spirax/display/400/latin/1179/0.22/20.34/1668/2.10|Sono/sans-serif/200,300,400,500,600,700,800/latin,latin-ext,vietnamese/1180/0.17/26.08/1487/1.67|Jolly Lodger/display/400/latin,latin-ext/1181/0.33/14.76/2354/3.57|Edu TAS Beginner/handwriting/400,500,600,700/latin/1182/0.16/15.95/1468/1.73|Almendra SC/serif/400/latin/1183/0.25/21.50/1652/1.05|Shalimar/handwriting/400/latin,latin-ext,vietnamese/1184/0.14/12.84/2027/1.12|Edu NSW ACT Foundation/handwriting/400,500,600,700/latin/1185/0.17/14.75/1536/1.78|Port Lligat Sans/sans-serif/400/latin/1186/0.25/20.78/1155/1.68|Comforter/handwriting/400/cyrillic,latin,latin-ext,vietnamese/1187/0.16/11.94/3201/2.12|Junge/serif/400/latin/1188/0.16/21.09/1789/1.54|Kavivanar/handwriting/400/latin,latin-ext,tamil/1189/0.20/17.09/1295/1.22|Ruluko/sans-serif/400/latin,latin-ext/1190/0.21/19.36/1069/1.06|New Tegomin/serif/400/japanese,latin,latin-ext/1191/0.19/23.94/2887/1.13|Noto Sans Lao/sans-serif/100,200,300,400,500,600,700,800,900/lao,latin,latin-ext/1192/0.23/22.06/1035/1.17|Kaisei HarunoUmi/serif/400,500,700/cyrillic,japanese,latin,latin-ext/1193/0.21/24.01/3153/2.00|Rubik Doodle Shadow/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext,math,symbols/1194/0.23/24.09/44352/0.69|Inika/serif/400,700/latin,latin-ext/1195/0.25/22.25/1301/1.02|Galdeano/sans-serif/400/latin/1196/0.24/20.54/870/0.65|Madimi One/sans-serif/400/latin,latin-ext,math,symbols/1197/0.32/20.75/1301/1.57|Lugrasimo/handwriting/400/latin,latin-ext/1198/0.18/20.60/2211/2.21|Englebert/sans-serif/400/latin,latin-ext/1199/0.25/16.77/1682/2.39|Anek Gujarati/sans-serif/100,200,300,400,500,600,700,800/gujarati,latin,latin-ext/1200/0.25/22.75/1125/0.80|Imperial Script/handwriting/400/latin,latin-ext,vietnamese/1201/0.20/17.12/3119/1.19|Big Shoulders Stencil Text/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1202/0.28/14.85/1347/1.00|Praise/handwriting/400/latin,latin-ext,vietnamese/1203/0.38/17.99/2941/1.95|Lacquer/display/400/latin/1204/0.20/17.61/10521/1.40|Smokum/display/400/latin/1205/0.31/15.52/1866/0.79|Plaster/display/400/latin,latin-ext/1206/0.30/28.21/883/0.45|Protest Riot/display/400/latin,latin-ext,math,symbols,vietnamese/1207/0.36/19.61/1775/2.15|Protest Strike/display/400/latin,latin-ext,math,symbols,vietnamese/1208/0.44/21.68/867/0.89|Alkalami/serif/400/arabic,latin,latin-ext/1209/0.28/21.10/1995/1.61|Chathura/sans-serif/100,300,400,700,800/latin,telugu/1210/0.22/21.07/1225/0.73|Agdasima/sans-serif/400,700/latin,latin-ext/1211/0.25/16.95/1142/0.99|Cagliostro/sans-serif/400/latin/1212/0.21/20.99/1586/1.75|Kotta One/serif/400/latin,latin-ext/1213/0.21/19.44/1420/1.04|Noto Sans Oriya/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,oriya/1214/0.23/21.98/1035/1.17|Festive/handwriting/400/latin,latin-ext,vietnamese/1215/0.19/13.27/3593/2.06|Ysabeau Infant/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext,math,symbols,vietnamese/1216/0.17/20.11/1042/1.14|BIZ UDMincho/serif/400,700/cyrillic,greek-ext,japanese,latin,latin-ext/1217/0.19/23.12/1583/0.66|Averia Gruesa Libre/display/400/latin,latin-ext/1218/0.25/22.42/1781/1.18|Buda/display/300/latin/1219/0.16/20.57/1245/1.42|Keania One/display/400/latin,latin-ext/1220/0.35/21.60/1488/0.81|Tulpen One/display/400/latin/1221/0.23/9.27/1134/1.15|Akatab/sans-serif/400,500,600,700,800,900/latin,latin-ext,tifinagh/1222/0.21/21.86/999/1.04|Aoboshi One/serif/400/japanese,latin,latin-ext/1223/0.27/21.44/1489/0.94|Linden Hill/serif/400,400i/latin/1224/0.20/18.88/1926/1.21|Londrina Shadow/display/400/latin/1225/0.19/17.80/4301/0.94|Tilt Prism/display/400/latin,latin-ext,vietnamese/1226/0.25/26.56/7085/1.16|Noto Sans Symbols 2/sans-serif/400/braille,latin,latin-ext,math,mayan-numerals,symbols/1227/0.23/22.06/936/0.94|Offside/display/400/latin,latin-ext/1228/0.20/22.64/1232/0.96|Bungee Tint/display/400/latin,latin-ext,vietnamese/1229/0.40/32.25/1272/0.73|Anek Gurmukhi/sans-serif/100,200,300,400,500,600,700,800/gurmukhi,latin,latin-ext/1230/0.25/23.37/1125/0.80|Bilbo/handwriting/400/latin,latin-ext,vietnamese/1231/0.16/13.79/2605/2.19|Condiment/handwriting/400/latin,latin-ext/1232/0.19/11.09/1754/1.95|Jacques Francois/serif/400/latin/1233/0.21/22.37/2347/1.75|Arbutus/serif/400/latin,latin-ext/1234/0.32/27.80/4395/3.01|Anta/sans-serif/400/latin,latin-ext,math,symbols/1235/0.27/25.00/866/0.69|Joti One/display/400/latin,latin-ext/1236/0.30/23.40/1063/1.30|Ysabeau/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext,math,symbols,vietnamese/1237/0.17/19.99/1062/1.14|Federant/display/400/latin/1238/0.28/22.20/1712/1.00|Autour One/display/400/latin,latin-ext/1239/0.25/24.61/3073/2.95|GFS Neohellenic/sans-serif/400,400i,700,700i/greek/1240/0.19/22.34/1343/1.01|Noto Sans Gothic/sans-serif/400/gothic,latin,latin-ext/1241/0.23/22.00/936/0.94|IBM Plex Sans Thai Looped/sans-serif/100,200,300,400,500,600,700/cyrillic-ext,latin,latin-ext,thai/1242/0.23/22.24/1074/1.04|Piedra/display/400/latin,latin-ext/1243/0.38/17.16/3608/1.42|Tiro Devanagari Marathi/serif/400,400i/devanagari,latin,latin-ext/1244/0.24/21.81/2047/1.74|Water Brush/handwriting/400/latin,latin-ext,vietnamese/1245/0.20/13.32/12132/0.97|Elsie Swash Caps/display/400,900/latin,latin-ext/1246/0.21/20.10/1636/1.53|Content/display/400,700/khmer/1247/0.05/45.16/420/0.00|Cairo Play/sans-serif/200,300,400,500,600,700,800,900/arabic,latin,latin-ext/1248/0.24/20.74/1007/1.26|Sometype Mono/monospace/400,500,600,700,400i,500i,600i,700i/latin,latin-ext/1249/0.18/26.29/848/0.84|New Amsterdam/sans-serif/400/latin,latin-ext/1250/0.34/22.04/969/0.76|Marhey/display/300,400,500,600,700/arabic,latin,latin-ext/1251/0.23/20.93/1376/2.37|Romanesco/handwriting/400/latin,latin-ext/1252/0.30/13.06/2939/3.00|Ranga/display/400,700/devanagari,latin,latin-ext/1253/0.28/15.90/1465/1.17|Noto Serif Armenian/serif/100,200,300,400,500,600,700,800,900/armenian,latin,latin-ext/1254/0.24/22.78/1592/1.14|Kumar One Outline/display/400/gujarati,latin,latin-ext/1255/0.19/20.75/1264/0.00|Smooch Sans/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1256/0.22/17.33/931/0.79|Kirang Haerang/display/400/korean,latin/1257/0.23/18.12/4758/1.74|Mynerve/handwriting/400/greek,latin,latin-ext,vietnamese/1258/0.16/17.05/2180/2.14|Sevillana/display/400/latin,latin-ext/1259/0.19/15.34/2940/1.98|Kavoon/display/400/latin,latin-ext/1260/0.42/22.12/2120/1.54|Climate Crisis/display/400/latin,latin-ext/1261/0.53/35.21/1609/2.22|Yeon Sung/display/400/korean,latin/1262/0.23/19.28/2322/2.81|Fascinate/display/400/latin/1263/0.36/22.47/1873/2.04|Dangrek/display/400/khmer,latin/1264/0.35/21.86/1862/1.49|Glass Antiqua/display/400/latin,latin-ext/1265/0.23/21.94/1483/1.41|Tourney/display/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/1266/0.25/24.71/1300/0.00|Lancelot/display/400/latin,latin-ext/1267/0.18/17.44/1553/0.79|Chilanka/handwriting/400/latin,latin-ext,malayalam/1268/0.18/21.39/1975/1.49|Qahiri/sans-serif/400/arabic,latin/1269/0.23/10.10/850/0.89|Truculenta/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1270/0.24/18.65/2107/2.37|Anton SC/sans-serif/400/latin,latin-ext,vietnamese/1271/0.42/17.53/886/0.73|Encode Sans SC/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1272/0.22/24.16/833/0.83|Alumni Sans Inline One/display/400,400i/latin,latin-ext,vietnamese/1273/0.49/17.39/2065/0.64|Uchen/serif/400/latin,tibetan/1274/0.20/25.15/1820/1.24|Ravi Prakash/display/400/latin,telugu/1275/0.31/23.45/781/0.81|Felipa/handwriting/400/latin,latin-ext/1276/0.19/15.59/1402/1.30|IBM Plex Sans Devanagari/sans-serif/100,200,300,400,500,600,700/cyrillic-ext,devanagari,latin,latin-ext/1277/0.23/22.24/1074/1.04|Bahiana/display/400/latin,latin-ext/1278/0.30/14.50/661/0.20|Bonheur Royale/handwriting/400/latin,latin-ext,vietnamese/1279/0.18/15.59/3343/2.20|Poor Story/display/400/korean,latin/1280/0.22/20.23/972/1.25|Joan/serif/400/latin,latin-ext/1281/0.20/19.05/1454/1.20|Labrada/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/1282/0.24/21.72/2215/1.73|Gwendolyn/handwriting/400,700/latin,latin-ext,vietnamese/1283/0.16/16.81/3659/1.97|Bungee Outline/display/400/latin,latin-ext,vietnamese/1284/0.14/31.51/3605/0.75|Amiri Quran/serif/400/arabic,latin/1285/0.22/21.96/2640/2.08|Erica One/display/400/latin,latin-ext/1286/0.49/28.49/828/0.80|Gidugu/sans-serif/400/latin,telugu/1287/0.36/21.56/719/0.79|Kumar One/display/400/gujarati,latin,latin-ext/1288/0.30/20.75/757/0.00|Galindo/display/400/latin,latin-ext/1289/0.33/23.32/1680/2.02|Sedan SC/serif/400/latin,latin-ext/1290/0.20/20.32/2661/1.84|Molle/handwriting/400i/latin,latin-ext/1291/0.29/21.41/2178/1.58|Noto Serif Hebrew/serif/100,200,300,400,500,600,700,800,900/hebrew,latin,latin-ext/1292/0.24/22.74/1587/1.13|Bungee Hairline/display/400/latin,latin-ext,vietnamese/1293/0.03/41.14/1039/0.74|Anek Kannada/sans-serif/100,200,300,400,500,600,700,800/kannada,latin,latin-ext/1294/0.25/23.11/1125/0.80|Noto Sans Samaritan/sans-serif/400/latin,latin-ext,samaritan/1295/0.23/22.00/936/0.94|Gideon Roman/display/400/latin,latin-ext,vietnamese/1296/0.20/25.23/2737/1.13|Preahvihear/sans-serif/400/khmer,latin/1297/0.23/22.86/1612/1.24|Suravaram/serif/400/latin,telugu/1298/0.25/24.03/1525/0.90|Odor Mean Chey/serif/400/khmer,latin/1299/0.36/22.54/1294/0.79|Anek Odia/sans-serif/100,200,300,400,500,600,700,800/latin,latin-ext,oriya/1300/0.25/22.83/1125/0.80|Dhurjati/sans-serif/400/latin,telugu/1301/0.34/27.14/907/0.41|Luxurious Script/handwriting/400/latin,latin-ext,vietnamese/1302/0.19/14.75/2847/2.09|Blaka/display/400/arabic,latin,latin-ext/1303/0.42/18.39/720/0.00|Lumanosimo/handwriting/400/latin,latin-ext/1304/0.23/26.70/2093/2.65|Chela One/display/400/latin,latin-ext/1305/0.41/19.61/1261/1.35|Phudu/display/300,400,500,600,700,800,900/cyrillic-ext,latin,latin-ext,vietnamese/1306/0.23/26.98/875/0.76|Peddana/serif/400/latin,telugu/1307/0.25/23.76/2096/0.76|Comme/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext/1308/0.22/21.88/1016/1.25|Griffy/display/400/latin,latin-ext/1309/0.20/17.89/15897/1.84|DynaPuff/display/400,500,600,700/cyrillic-ext,latin,latin-ext/1310/0.34/23.31/1685/2.11|Big Shoulders Inline Text/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1311/0.29/14.94/3775/1.17|Oldenburg/display/400/latin,latin-ext/1312/0.22/23.89/1964/1.28|Hubballi/sans-serif/400/kannada,latin,latin-ext/1313/0.17/24.48/1408/1.57|Moderustic/sans-serif/300,400,500,600,700,800/cyrillic,cyrillic-ext,greek,latin,latin-ext/1314/0.23/22.51/913/1.07|Metal/display/400/khmer,latin/1315/0.22/19.75/2237/1.50|Diplomata SC/display/400/latin,latin-ext/1316/0.34/53.24/2314/1.03|Jersey 15/display/400/latin,latin-ext/1317/0.36/23.95/16818/0.00|Chenla/display/400/khmer/1318/0.05/45.16/420/0.00|Snippet/sans-serif/400/latin/1319/0.18/21.80/1390/1.61|Flavors/display/400/latin,latin-ext/1320/0.30/17.45/14551/1.90|Tiro Telugu/serif/400,400i/latin,latin-ext,telugu/1321/0.24/21.81/2047/1.74|Sirin Stencil/display/400/latin/1322/0.22/17.82/2301/1.52|Rubik Glitch/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1323/0.46/25.27/12280/0.27|Noto Sans Warang Citi/sans-serif/400/latin,latin-ext,warang-citi/1324/0.23/22.32/936/0.94|Jersey 20 Charted/display/400/latin,latin-ext/1325/0.82/17.43/89384/0.00|Libre Barcode 39 Extended/display/400/latin/1326/0.28/56.08/1830/0.00|Siemreap/sans-serif/400/khmer/1327/0.05/45.16/420/0.00|Revalia/display/400/latin,latin-ext/1328/0.26/32.24/1691/2.03|Aref Ruqaa Ink/serif/400,700/arabic,latin,latin-ext/1329/0.23/21.42/1973/1.69|Single Day/display/400/korean/1330/0.24/21.02/2303/1.86|Mea Culpa/handwriting/400/latin,latin-ext,vietnamese/1331/0.19/14.37/4114/1.97|Fruktur/display/400,400i/cyrillic-ext,latin,latin-ext,vietnamese/1332/0.41/20.01/2225/1.84|Updock/handwriting/400/latin,latin-ext,vietnamese/1333/0.20/14.51/2946/1.84|Libre Barcode EAN13 Text/display/400/latin/1334/0.25/7.05/1348/0.49|Lakki Reddy/handwriting/400/latin,telugu/1335/0.29/21.77/3041/1.96|Castoro Titling/display/400/latin,latin-ext/1336/0.19/29.47/2205/1.77|Princess Sofia/handwriting/400/latin,latin-ext/1337/0.16/13.16/19981/1.76|Victor Mono/monospace/100,200,300,400,500,600,700,100i,200i,300i,400i,500i,600i,700i/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/1338/0.18/24.36/1053/1.26|Bigelow Rules/display/400/latin,latin-ext/1339/0.23/12.14/2302/1.78|Stalinist One/display/400/cyrillic,latin,latin-ext/1340/0.36/45.51/573/0.00|Trochut/display/400,400i,700/latin/1341/0.25/18.79/968/0.83|Honk/display/400/latin,latin-ext,math,symbols,vietnamese/1342/0.22/29.53/11054/3.15|Bruno Ace/display/400/latin,latin-ext/1343/0.25/31.60/929/0.99|Grey Qo/handwriting/400/latin,latin-ext,vietnamese/1344/0.15/13.01/3323/1.77|Jim Nightshade/handwriting/400/latin,latin-ext/1345/0.16/11.85/9598/2.50|Dr Sugiyama/handwriting/400/latin,latin-ext/1346/0.18/11.44/1735/2.25|Tiny5/sans-serif/400/cyrillic,cyrillic-ext,greek,latin,latin-ext/1347/0.24/22.86/634/0.00|Babylonica/handwriting/400/latin,latin-ext,vietnamese/1348/0.13/14.40/19878/0.96|Edu AU VIC WA NT Hand/handwriting/400,500,600,700/latin,latin-ext/1349/0.14/15.36/1573/1.89|Darumadrop One/display/400/japanese,latin,latin-ext/1350/0.35/23.52/8593/1.69|Noto Sans Gurmukhi/sans-serif/100,200,300,400,500,600,700,800,900/gurmukhi,latin,latin-ext/1351/0.23/22.00/1037/1.17|Noto Sans Osmanya/sans-serif/400/latin,latin-ext,osmanya/1352/0.23/22.32/936/0.94|Hanalei Fill/display/400/latin,latin-ext/1353/0.44/22.88/4911/1.31|Bonbon/handwriting/400/latin/1354/0.20/22.21/3167/2.04|Lavishly Yours/handwriting/400/latin,latin-ext,vietnamese/1355/0.13/12.40/3257/1.28|Emblema One/display/400/latin,latin-ext/1356/0.35/30.42/1506/1.71|Almendra Display/display/400/latin,latin-ext/1357/0.10/18.59/2040/1.11|Foldit/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1358/0.30/15.95/896/0.00|Ballet/handwriting/400/latin,latin-ext,vietnamese/1359/0.14/13.65/3268/2.19|Mr Bedfort/handwriting/400/latin,latin-ext/1360/0.15/13.05/1968/1.80|Rubik Iso/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1361/0.22/24.62/2234/0.00|Big Shoulders Stencil Display/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1362/0.26/13.26/1347/1.00|Matemasie/sans-serif/400/latin,latin-ext/1363/0.42/24.68/1820/2.52|Luxurious Roman/display/400/latin,latin-ext,vietnamese/1364/0.22/25.22/2717/1.68|Gasoek One/sans-serif/400/korean,latin,latin-ext/1365/0.52/26.30/1064/0.98|Aubrey/display/400/latin/1366/0.24/18.16/1064/1.03|Noto Serif Sinhala/serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,sinhala/1367/0.22/24.70/1587/1.13|Reem Kufi Fun/sans-serif/400,500,600,700/arabic,latin,latin-ext,vietnamese/1368/0.24/20.65/934/1.04|BioRhyme Expanded/serif/200,300,400,700,800/latin,latin-ext/1369/0.22/44.56/1226/0.79|Reem Kufi Ink/sans-serif/400/arabic,latin,latin-ext,vietnamese/1370/0.24/20.65/901/1.10|Bokor/display/400/khmer,latin/1371/0.34/17.03/1526/1.03|Kalnia Glaze/display/100,200,300,400,500,600,700/latin,latin-ext/1372/0.13/25.54/2858/1.39|Passero One/display/400/latin,latin-ext/1373/0.29/18.20/1122/0.70|Cherry Bomb One/display/400/japanese,latin,latin-ext,vietnamese/1374/0.39/24.34/1446/2.64|Jacquard 12/display/400/latin,latin-ext,math,symbols/1375/0.29/26.73/9132/0.00|Butcherman/display/400/latin,latin-ext/1376/0.38/24.09/4581/0.58|Bacasime Antique/serif/400/latin,latin-ext/1377/0.20/24.14/1761/1.43|Neonderthaw/handwriting/400/latin,latin-ext,vietnamese/1378/0.19/18.99/6032/2.10|Freeman/display/400/latin,latin-ext,vietnamese/1379/0.37/19.70/951/1.06|Teachers/sans-serif/400,500,600,700,800,400i,500i,600i,700i,800i/greek-ext,latin,latin-ext/1380/0.19/19.98/978/1.29|Noto Rashi Hebrew/serif/100,200,300,400,500,600,700,800,900/greek-ext,hebrew,latin,latin-ext/1381/0.24/22.74/1579/1.12|Caramel/handwriting/400/latin,latin-ext,vietnamese/1382/0.25/19.41/2749/2.24|Devonshire/handwriting/400/latin,latin-ext/1383/0.27/12.33/1926/1.75|Arsenal SC/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/1384/0.20/18.48/992/1.14|Butterfly Kids/handwriting/400/latin,latin-ext/1385/0.14/12.96/16486/1.77|Inclusive Sans/sans-serif/400,400i/latin,latin-ext,vietnamese/1386/0.23/23.21/933/1.14|M PLUS Code Latin/sans-serif/100,200,300,400,500,600,700/latin,latin-ext,vietnamese/1387/0.21/22.05/937/0.93|Noto Serif Tibetan/serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,tibetan/1388/0.24/22.74/1584/1.13|Kolker Brush/handwriting/400/latin,latin-ext,vietnamese/1389/0.22/16.07/4616/0.95|Explora/handwriting/400/cherokee,latin,latin-ext,vietnamese/1390/0.13/14.42/2986/1.86|Hedvig Letters Sans/sans-serif/400/latin,latin-ext,math,symbols/1391/0.24/22.16/883/0.99|Tiro Devanagari Sanskrit/serif/400,400i/devanagari,latin,latin-ext/1392/0.24/21.81/2047/1.74|Twinkle Star/handwriting/400/latin,latin-ext,vietnamese/1393/0.21/20.62/3686/1.99|Love Light/handwriting/400/latin,latin-ext,vietnamese/1394/0.15/12.51/3335/1.14|Inspiration/handwriting/400/latin,latin-ext,vietnamese/1395/0.15/12.01/3019/1.96|Yuji Boku/serif/400/cyrillic,japanese,latin,latin-ext/1396/0.20/26.95/3777/2.22|Nabla/display/400/cyrillic-ext,latin,latin-ext,math,vietnamese/1397/0.39/18.38/2349/0.39|Moulpali/sans-serif/400/khmer,latin/1398/0.24/20.69/1096/1.05|Island Moments/handwriting/400/latin,latin-ext,vietnamese/1399/0.15/18.72/11504/1.46|Miss Fajardose/handwriting/400/latin,latin-ext/1400/0.17/12.46/2706/1.89|Playwrite AR/handwriting/100,200,300,400/latin/1401/0.16/16.21/2748/2.63|Alumni Sans Pinstripe/sans-serif/400,400i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/1402/0.13/17.57/1047/1.04|Rubik Wet Paint/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1403/0.44/22.98/10820/1.43|Londrina Sketch/display/400/latin/1404/0.18/18.21/7667/1.73|Noto Sans Coptic/sans-serif/400/coptic,latin,latin-ext/1405/0.23/22.06/936/0.94|Tiro Kannada/serif/400,400i/kannada,latin,latin-ext/1406/0.24/21.81/2047/1.74|Diplomata/display/400/latin,latin-ext/1407/0.28/38.93/2465/1.18|Playwrite US Trad/handwriting/100,200,300,400/latin/1408/0.18/17.26/2697/2.65|Purple Purse/display/400/latin,latin-ext/1409/0.27/22.87/1914/1.74|Yuji Mai/serif/400/cyrillic,japanese,latin,latin-ext/1410/0.24/28.23/3675/2.31|Jersey 10/display/400/latin,latin-ext/1411/0.39/25.08/8064/0.00|Micro 5/display/400/latin,latin-ext,math,symbols/1412/0.32/27.00/1674/0.00|Combo/display/400/latin,latin-ext/1413/0.21/18.71/1365/2.31|Flow Rounded/display/400/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/1414/0.00/75.71/630/1.00|Splash/handwriting/400/latin,latin-ext,vietnamese/1415/0.18/15.09/36959/1.32|Alumni Sans Collegiate One/sans-serif/400,400i/cyrillic,latin,latin-ext,vietnamese/1416/0.55/17.12/2345/0.69|My Soul/handwriting/400/latin,latin-ext,vietnamese/1417/0.20/18.31/3914/2.19|Fustat/sans-serif/200,300,400,500,600,700,800/arabic,latin,latin-ext/1418/0.23/22.63/1092/0.98|Rubik Distressed/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1419/0.44/24.79/30113/0.00|Jersey 20/display/400/latin,latin-ext/1420/0.35/22.73/29130/0.00|Noto Serif Lao/serif/100,200,300,400,500,600,700,800,900/lao,latin,latin-ext/1421/0.24/22.78/1587/1.13|Jaro/sans-serif/400/latin,latin-ext,vietnamese/1422/0.42/22.07/1314/0.54|Bagel Fat One/display/400/korean,latin,latin-ext/1423/0.41/21.78/1535/1.65|Sedan/serif/400,400i/latin,latin-ext/1424/0.20/20.32/2661/1.84|Rubik Beastly/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1425/0.47/21.13/12682/1.80|Nuosu SIL/sans-serif/400/latin,latin-ext,yi/1426/0.23/21.97/1546/0.66|Noto Serif Gujarati/serif/100,200,300,400,500,600,700,800,900/gujarati,latin,latin-ext,math,symbols/1427/0.23/23.09/1584/1.13|Hedvig Letters Serif/serif/400/latin,latin-ext,math,symbols/1428/0.22/21.18/1538/0.95|Big Shoulders Inline Display/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1429/0.28/13.37/3775/1.17|Fleur De Leah/handwriting/400/latin,latin-ext,vietnamese/1430/0.19/13.78/5785/1.77|Noto Sans Adlam/sans-serif/400,500,600,700/adlam,latin,latin-ext/1431/0.23/21.98/953/0.98|Bona Nova SC/serif/400,400i,700/cyrillic,cyrillic-ext,greek,hebrew,latin,latin-ext,vietnamese/1432/0.18/19.42/1599/1.25|Orbit/sans-serif/400/korean,latin,latin-ext/1433/0.19/26.87/777/0.80|Petemoss/handwriting/400/latin,latin-ext,vietnamese/1434/0.20/13.16/2448/1.12|Sankofa Display/sans-serif/400/latin,latin-ext,vietnamese/1435/0.17/19.79/5741/1.87|Tsukimi Rounded/sans-serif/300,400,500,600,700/japanese,latin,latin-ext/1436/0.15/19.91/1579/1.60|Noto Serif Balinese/serif/400/balinese,latin,latin-ext/1437/0.24/22.74/1451/0.94|Beiruti/sans-serif/200,300,400,500,600,700,800,900/arabic,latin,latin-ext,vietnamese/1438/0.23/18.63/1386/1.36|Noto Sans Javanese/sans-serif/400,500,600,700/javanese,latin,latin-ext/1439/0.23/22.06/953/0.98|Langar/display/400/gurmukhi,latin,latin-ext/1440/0.31/19.30/1511/1.39|Wittgenstein/serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/latin,latin-ext/1441/0.23/20.89/1350/0.61|Diphylleia/serif/400/korean,latin,latin-ext/1442/0.20/23.06/1874/2.01|Bahianita/display/400/latin,latin-ext,vietnamese/1443/0.33/12.07/792/0.31|Taprom/display/400/khmer,latin/1444/0.20/15.06/10360/1.25|Sigmar/display/400/latin,latin-ext,vietnamese/1445/0.43/22.54/3794/1.18|Palette Mosaic/display/400/japanese,latin/1446/0.24/27.40/2692/1.63|Tiro Tamil/serif/400,400i/latin,latin-ext,tamil/1447/0.24/21.68/2047/1.74|Noto Sans Tangsa/sans-serif/400,500,600,700/latin,latin-ext,tangsa/1448/0.23/22.06/953/0.98|Rubik Vinyl/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1449/0.21/22.92/9008/1.88|Dai Banna SIL/serif/300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,new-tai-lue/1450/0.23/20.09/1627/1.28|Konkhmer Sleokchher/display/400/khmer,latin,latin-ext/1451/0.33/23.65/919/0.94|Oi/display/400/cyrillic,cyrillic-ext,greek,latin,latin-ext,tamil,vietnamese/1452/0.59/34.64/1985/2.10|Tai Heritage Pro/serif/400,700/latin,latin-ext,tai-viet,vietnamese/1453/0.23/22.36/2028/1.74|Redacted Script/display/300,400,700/latin,latin-ext/1454/0.27/62.22/2224/1.89|Lunasima/sans-serif/400,700/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese/1455/0.22/23.57/933/0.93|Noto Music/sans-serif/400/latin,latin-ext,music/1456/0.23/22.06/936/0.94|Noto Sans Mongolian/sans-serif/400/latin,latin-ext,math,mongolian,symbols/1457/0.23/22.06/936/0.94|Rubik Glitch Pop/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext,math,symbols/1458/0.30/25.11/77301/0.78|Send Flowers/handwriting/400/latin,latin-ext,vietnamese/1459/0.18/18.05/2697/1.25|Noto Serif Myanmar/serif/100,200,300,400,500,600,700,800,900/myanmar/1460/0.14/32.79/420/0.00|Vibes/display/400/arabic,latin/1461/0.15/16.46/1316/1.35|Tiro Gurmukhi/serif/400,400i/gurmukhi,latin,latin-ext/1462/0.24/21.68/2047/1.74|Snowburst One/display/400/latin,latin-ext/1463/0.15/23.48/2668/1.49|Geostar/display/400/latin/1464/0.20/34.15/914/0.02|Sassy Frass/handwriting/400/latin,latin-ext,vietnamese/1465/0.18/13.75/3654/2.05|Edu QLD Beginner/handwriting/400,500,600,700/latin/1466/0.17/16.14/1683/1.84|Jacquard 24/display/400/latin,latin-ext/1467/0.30/25.19/38082/0.00|Playwrite FR Moderne/handwriting/100,200,300,400/latin/1468/0.14/14.70/1675/2.10|Noto Serif NP Hmong/serif/400,500,600,700/latin,nyiakeng-puachue-hmong/1469/0.24/22.74/1484/0.98|Grechen Fuemen/handwriting/400/latin,latin-ext,vietnamese/1470/0.19/25.62/2443/2.16|Kablammo/display/400/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/1471/0.35/22.34/6044/2.20|Noto Sans Syloti Nagri/sans-serif/400/latin,latin-ext,syloti-nagri/1472/0.23/22.06/936/0.94|Geostar Fill/display/400/latin/1473/0.23/34.15/686/0.02|Noto Serif Ethiopic/serif/100,200,300,400,500,600,700,800,900/ethiopic,latin,latin-ext/1474/0.24/22.78/1587/1.13|LXGW WenKai TC/handwriting/300,400,700/chinese-hongkong,cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,lisu,vietnamese/1475/0.19/25.37/1492/1.43|Ruge Boogie/handwriting/400/latin,latin-ext,vietnamese/1476/0.18/13.74/4358/1.99|Rubik Spray Paint/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1477/0.47/24.20/26241/0.00|Rubik 80s Fade/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1478/0.42/25.54/156353/0.33|Noto Sans Tagalog/sans-serif/400/latin,latin-ext,tagalog/1479/0.23/22.06/936/0.94|Flow Block/display/400/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/1480/0.00/75.41/210/0.00|Playwrite BE VLG/handwriting/100,200,300,400/latin/1481/0.18/17.17/2640/2.60|Moirai One/display/400/korean,latin,latin-ext/1482/0.08/23.68/2346/1.33|Noto Serif Vithkuqi/serif/400,500,600,700/latin,latin-ext,vithkuqi/1483/0.24/22.74/1484/0.98|Noto Sans Sora Sompeng/sans-serif/400,500,600,700/latin,latin-ext,sora-sompeng/1484/0.23/22.00/953/0.98|Noto Sans Canadian Aboriginal/sans-serif/100,200,300,400,500,600,700,800,900/canadian-aboriginal,latin,latin-ext,math,symbols/1485/0.23/22.26/1003/1.10|Workbench/monospace/400/latin,math,symbols/1486/0.28/22.09/4396/2.00|Syne Tactile/display/400/latin,latin-ext/1487/0.20/16.38/3348/1.63|Zen Loop/display/400,400i/latin,latin-ext/1488/0.13/12.85/1309/1.18|Noto Serif Tamil/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,tamil/1489/0.24/22.78/1592/1.14|Ruwudu/serif/400,500,600,700/arabic,latin,latin-ext/1490/0.22/19.90/2010/1.64|Noto Serif Tangut/serif/400/latin,latin-ext,tangut/1491/0.18/23.33/1347/0.50|Noto Sans Carian/sans-serif/400/carian,latin,latin-ext/1492/0.23/22.06/936/0.94|Playwrite AU SA/handwriting/100,200,300,400/latin/1493/0.16/16.35/1675/2.10|Estonia/handwriting/400/latin,latin-ext,vietnamese/1494/0.12/12.11/11508/1.09|Noto Sans Batak/sans-serif/400/batak,latin,latin-ext/1495/0.23/22.06/936/0.94|Noto Sans Old Hungarian/sans-serif/400/latin,latin-ext,old-hungarian/1496/0.23/22.06/936/0.94|Playwrite AU NSW/handwriting/100,200,300,400/latin/1497/0.16/16.18/1748/2.19|Noto Sans Egyptian Hieroglyphs/sans-serif/400/egyptian-hieroglyphs,latin,latin-ext/1498/0.23/21.87/936/0.94|Cactus Classical Serif/serif/400/chinese-hongkong,cyrillic,latin,latin-ext,vietnamese/1499/0.17/23.26/1299/0.54|Noto Sans Sharada/sans-serif/400/latin,latin-ext,sharada/1500/0.23/21.82/916/0.89|Cherish/handwriting/400/latin,latin-ext,vietnamese/1501/0.21/14.73/9751/1.28|Ga Maamli/display/400/latin,latin-ext,vietnamese/1502/0.28/25.59/2418/2.02|Ole/handwriting/400/latin,latin-ext,vietnamese/1503/0.16/14.65/2982/1.08|Rock 3D/display/400/japanese,latin/1504/0.12/29.71/8744/1.85|Slackside One/handwriting/400/japanese,latin,latin-ext/1505/0.20/25.61/2971/1.89|Noto Sans Cypro Minoan/sans-serif/400/cypro-minoan,latin,latin-ext/1506/0.23/22.00/936/0.94|Tapestry/handwriting/400/latin,latin-ext,vietnamese/1507/0.24/22.03/3712/1.92|Gajraj One/display/400/devanagari,latin,latin-ext/1508/0.48/30.73/1013/0.97|Jersey 25/display/400/latin,latin-ext/1509/0.37/23.87/46026/0.00|Rubik Pixels/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1510/0.35/25.91/333148/0.00|Hanalei/display/400/latin,latin-ext/1511/0.26/22.88/13046/1.76|Sixtyfour/monospace/400/latin,latin-ext,math,symbols/1512/0.24/44.00/3836/2.00|Shizuru/display/400/japanese,latin/1513/0.15/24.71/4844/2.11|Noto Sans Kaithi/sans-serif/400/kaithi,latin,latin-ext/1514/0.23/22.07/936/0.94|Warnes/display/400/latin,latin-ext/1515/0.21/25.98/1571/1.29|Noto Sans Thaana/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,thaana/1516/0.23/22.06/1005/1.10|Playwrite NG Modern/handwriting/100,200,300,400/latin/1517/0.15/16.19/1693/2.11|Grandiflora One/serif/400/korean,latin,latin-ext/1518/0.09/22.34/1353/0.95|Are You Serious/handwriting/400/latin,latin-ext,vietnamese/1519/0.23/15.38/7765/1.52|Playwrite AU VIC/handwriting/100,200,300,400/latin/1520/0.16/16.53/1951/2.34|Noto Serif Ottoman Siyaq/serif/400/latin,latin-ext,ottoman-siyaq-numbers/1521/0.24/22.78/1451/0.94|Moo Lah Lah/display/400/latin,latin-ext,vietnamese/1522/0.34/18.68/5165/1.32|Playwrite DE Grund/handwriting/100,200,300,400/latin/1523/0.17/17.66/1642/2.08|Noto Serif Khitan Small Script/serif/400/khitan-small-script,latin,latin-ext/1524/0.21/25.46/1451/0.94|LXGW WenKai Mono TC/monospace/300,400,700/chinese-hongkong,cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,lisu,vietnamese/1525/0.19/24.12/1639/1.31|Noto Serif Toto/serif/400,500,600,700/latin,latin-ext,toto/1526/0.24/22.74/1484/0.98|Noto Sans Bamum/sans-serif/400,500,600,700/bamum,latin,latin-ext/1527/0.23/22.06/953/0.98|Playwrite ES/handwriting/100,200,300,400/latin/1528/0.17/16.56/2359/2.49|Noto Sans Chorasmian/sans-serif/400/chorasmian,latin,latin-ext,math,symbols/1529/0.23/22.38/936/0.94|Ingrid Darling/handwriting/400/latin,latin-ext,vietnamese/1530/0.19/12.43/4069/1.94|Playwrite MX/handwriting/100,200,300,400/latin/1531/0.18/17.03/2697/2.69|Rubik Puddles/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1532/0.14/20.17/10132/1.86|Rubik Doodle Triangles/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext,math,symbols/1533/0.46/24.39/51679/0.47|Playwrite IS/handwriting/100,200,300,400/latin/1534/0.18/18.91/1774/2.22|Playwrite HR/handwriting/100,200,300,400/latin/1535/0.20/19.67/2395/2.49|Rubik Burned/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1536/0.23/23.33/15888/1.94|Noto Sans Cherokee/sans-serif/100,200,300,400,500,600,700,800,900/cherokee,latin,latin-ext/1537/0.23/22.06/1003/1.10|Ubuntu Sans Mono/monospace/400,500,600,700,400i,500i,600i,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext/1538/0.19/24.84/1087/1.58|Rubik Marker Hatch/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1539/0.39/25.35/9931/0.00|Noto Sans Old Italic/sans-serif/400/latin,latin-ext,old-italic/1540/0.23/22.00/936/0.94|Noto Traditional Nushu/sans-serif/300,400,500,600,700/latin,latin-ext,nushu/1541/0.20/24.78/974/1.03|Noto Sans Deseret/sans-serif/400/deseret,latin,latin-ext/1542/0.23/22.06/936/0.94|Playwrite AT/handwriting/100,200,300,400,100i,200i,300i,400i/latin/1543/0.20/19.14/2269/2.48|Noto Sans Tamil Supplement/sans-serif/400/latin,latin-ext,tamil-supplement/1544/0.23/22.06/936/0.94|Playwrite DK Loopet/handwriting/100,200,300,400/latin/1545/0.19/18.56/1974/2.30|Playwrite ES Deco/handwriting/100,200,300,400/latin/1546/0.18/17.48/2849/2.65|Kings/handwriting/400/latin,latin-ext,vietnamese/1547/0.22/18.62/3030/1.78|Playwrite DK Uloopet/handwriting/100,200,300,400/latin/1548/0.18/18.55/1751/2.18|Blaka Hollow/display/400/arabic,latin,latin-ext/1549/0.41/18.39/1500/0.00|Playwrite GB S/handwriting/100,200,300,400,100i,200i,300i,400i/latin/1550/0.18/18.77/1693/2.11|Noto Sans Vai/sans-serif/400/latin,latin-ext,vai/1551/0.23/22.06/936/0.94|Maname/serif/400/latin,latin-ext,sinhala,vietnamese/1552/0.26/23.48/2123/1.70|Noto Sans Tifinagh/sans-serif/400/latin,latin-ext,tifinagh/1553/0.23/22.06/936/0.94|Blaka Ink/display/400/arabic,latin,latin-ext/1554/0.42/18.39/720/0.00|Noto Sans Miao/sans-serif/400/latin,latin-ext,miao/1555/0.23/22.00/936/0.94|Playwrite NL/handwriting/100,200,300,400/latin/1556/0.14/13.36/2597/2.62|Playwrite BE WAL/handwriting/100,200,300,400/latin/1557/0.13/12.51/2916/2.70|Noto Sans Tai Viet/sans-serif/400/latin,latin-ext,tai-viet/1558/0.23/22.06/936/0.94|Noto Serif Yezidi/serif/400,500,600,700/latin,latin-ext,yezidi/1559/0.24/22.78/1484/0.98|Yuji Hentaigana Akari/handwriting/400/japanese,latin,latin-ext/1560/0.19/31.83/3332/2.22|Rubik Gemstones/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1561/0.42/24.22/6404/0.00|Playwrite HR Lijeva/handwriting/100,200,300,400/latin/1562/0.19/19.75/2395/2.49|Namdhinggo/serif/400,500,600,700,800/latin,latin-ext,limbu/1563/0.21/20.72/1639/1.30|Playwrite HU/handwriting/100,200,300,400/latin/1564/0.18/18.32/2445/2.53|Playwrite CL/handwriting/100,200,300,400/latin/1565/0.15/15.40/2817/2.63|Noto Serif Grantha/serif/400/grantha,latin,latin-ext/1566/0.24/22.74/1451/0.94|Noto Sans Imperial Aramaic/sans-serif/400/imperial-aramaic,latin,latin-ext/1567/0.23/22.00/936/0.94|Lisu Bosa/serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,lisu/1568/0.23/22.77/1679/0.71|Rubik Microbe/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1569/0.30/25.86/48776/0.53|Playwrite PE/handwriting/100,200,300,400/latin/1570/0.18/17.51/2799/2.67|Ojuju/sans-serif/200,300,400,500,600,700,800/latin,latin-ext,math,symbols,vietnamese/1571/0.15/21.09/1823/2.44|Noto Sans Adlam Unjoined/sans-serif/400,500,600,700/adlam,latin,latin-ext/1572/0.23/21.92/953/0.98|Noto Sans New Tai Lue/sans-serif/400,500,600,700/latin,latin-ext,new-tai-lue/1573/0.23/22.06/953/0.98|Noto Sans Khojki/sans-serif/400/khojki,latin,latin-ext/1574/0.23/22.06/936/0.94|Annapurna SIL/serif/400,700/devanagari,latin,latin-ext,math,symbols/1575/0.24/22.55/1290/0.69|Noto Sans Nandinagari/sans-serif/400/latin,latin-ext,nandinagari/1576/0.23/22.38/936/0.94|Noto Sans Syriac Eastern/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,syriac/1577/0.23/22.00/1003/1.10|Playwrite NZ/handwriting/100,200,300,400/latin/1578/0.16/16.09/1693/2.11|Rubik Maps/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext,math,symbols/1579/0.42/25.07/91916/0.16|Puppies Play/handwriting/400/latin,latin-ext,vietnamese/1580/0.20/14.48/3467/1.29|Noto Serif Gurmukhi/serif/100,200,300,400,500,600,700,800,900/gurmukhi,latin,latin-ext/1581/0.24/22.78/1579/1.12|Playwrite IT Moderna/handwriting/100,200,300,400/latin/1582/0.18/18.92/1747/2.14|Wavefont/display/100,200,300,400,500,600,700,800,900/latin/1583/0.31/4.34/1750/1.20|Playwrite PT/handwriting/100,200,300,400/latin/1584/0.16/15.72/2797/2.62|Playwrite SK/handwriting/100,200,300,400/latin/1585/0.18/17.24/2529/2.55|Noto Serif Ahom/serif/400/ahom,latin,latin-ext/1586/0.24/22.45/1451/0.94|Narnoor/serif/400,500,600,700,800/gunjala-gondi,latin,latin-ext,math,symbols/1587/0.23/23.20/986/1.01|Noto Sans Vithkuqi/sans-serif/400,500,600,700/latin,latin-ext,vithkuqi/1588/0.23/22.00/953/0.98|Noto Serif Oriya/serif/400,500,600,700/latin,latin-ext,oriya/1589/0.23/23.86/1484/0.98|Noto Sans Marchen/sans-serif/400/latin,latin-ext,marchen/1590/0.23/21.68/936/0.94|Noto Sans Cuneiform/sans-serif/400/cuneiform,latin,latin-ext/1591/0.23/22.06/936/0.94|Playwrite CZ/handwriting/100,200,300,400/latin/1592/0.18/17.24/2529/2.55|Jacquard 12 Charted/display/400/latin,latin-ext,math,symbols/1593/0.69/19.08/40148/0.00|Playwrite CO/handwriting/100,200,300,400/latin/1594/0.18/16.74/2705/2.62|Noto Sans Avestan/sans-serif/400/avestan,latin,latin-ext/1595/0.23/22.00/936/0.94|Rubik Maze/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1596/0.38/25.57/17898/0.00|Playwrite AU TAS/handwriting/100,200,300,400/latin/1597/0.16/16.09/1693/2.11|Playwrite IE/handwriting/100,200,300,400/latin/1598/0.18/17.52/2524/2.60|Noto Sans Linear A/sans-serif/400/latin,latin-ext,linear-a/1599/0.23/22.06/936/0.94|Playwrite US Modern/handwriting/100,200,300,400/latin/1600/0.16/17.52/1777/2.15|Playwrite AU QLD/handwriting/100,200,300,400/latin/1601/0.16/16.56/1910/2.30|Noto Serif Old Uyghur/serif/400/latin,latin-ext,old-uyghur/1602/0.24/22.29/1451/0.94|Playwrite ZA/handwriting/100,200,300,400/latin/1603/0.17/16.95/2541/2.59|Playwrite PL/handwriting/100,200,300,400/latin/1604/0.16/17.22/2246/2.44|Noto Sans Old Persian/sans-serif/400/latin,latin-ext,old-persian/1605/0.23/22.06/936/0.94|Noto Sans Balinese/sans-serif/400,500,600,700/balinese,latin,latin-ext/1606/0.23/22.00/953/0.98|Noto Sans Yi/sans-serif/400/latin,latin-ext,yi/1607/0.23/21.93/936/0.94|Noto Sans Cham/sans-serif/100,200,300,400,500,600,700,800,900/cham,latin,latin-ext/1608/0.23/22.00/1003/1.10|Noto Sans Indic Siyaq Numbers/sans-serif/400/indic-siyaq-numbers,latin,latin-ext/1609/0.24/20.97/936/0.94|Noto Sans Tagbanwa/sans-serif/400/latin,latin-ext,tagbanwa/1610/0.23/22.06/936/0.94|Playwrite NO/handwriting/100,200,300,400/latin/1611/0.17/17.42/2143/2.43|Danfo/serif/400/latin,latin-ext,vietnamese/1612/0.44/32.05/2715/1.04|Jaini/display/400/devanagari,latin,latin-ext/1613/0.32/16.68/1865/1.27|Noto Sans Kawi/sans-serif/400,500,600,700/kawi,latin,latin-ext/1614/0.23/21.58/953/0.98|Linefont/display/100,200,300,400,500,600,700,800,900/latin/1615/0.07/4.34/630/3.00|Rubik Storm/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1616/0.44/24.78/34144/0.00|Noto Sans Lydian/sans-serif/400/latin,latin-ext,lydian/1617/0.23/22.06/936/0.94|Noto Sans Old North Arabian/sans-serif/400/latin,latin-ext,old-north-arabian/1618/0.23/22.06/936/0.94|Noto Sans Inscriptional Pahlavi/sans-serif/400/inscriptional-pahlavi,latin,latin-ext/1619/0.23/22.00/936/0.94|Noto Sans Inscriptional Parthian/sans-serif/400/inscriptional-parthian,latin,latin-ext/1620/0.23/22.00/936/0.94|Noto Sans Tai Tham/sans-serif/400,500,600,700/latin,latin-ext,tai-tham/1621/0.22/23.05/953/0.98|Playwrite FR Trad/handwriting/100,200,300,400/latin/1622/0.12/12.45/2740/2.67|Noto Sans Sundanese/sans-serif/400,500,600,700/latin,latin-ext,sundanese/1623/0.23/22.06/953/0.98|Noto Sans Masaram Gondi/sans-serif/400/latin,latin-ext,masaram-gondi/1624/0.22/22.96/936/0.94|Noto Sans Osage/sans-serif/400/latin,latin-ext,osage/1625/0.23/22.06/936/0.94|Playwrite VN/handwriting/100,200,300,400/latin/1626/0.14/13.70/2761/2.68|Noto Sans Brahmi/sans-serif/400/brahmi,latin,latin-ext,math,symbols/1627/0.23/22.06/936/0.94|Noto Sans NKo/sans-serif/400/latin,latin-ext,nko/1628/0.23/22.06/936/0.94|Noto Sans Chakma/sans-serif/400/chakma,latin,latin-ext/1629/0.23/22.06/936/0.94|Noto Sans Nag Mundari/sans-serif/400,500,600,700/latin,latin-ext,nag-mundari/1630/0.24/21.52/953/0.98|Noto Sans Siddham/sans-serif/400/latin,latin-ext,siddham/1631/0.23/21.58/936/0.94|Noto Sans Palmyrene/sans-serif/400/latin,latin-ext,palmyrene/1632/0.23/22.06/936/0.94|Noto Sans Old Turkic/sans-serif/400/latin,latin-ext,old-turkic/1633/0.23/22.00/936/0.94|Rubik Broken Fax/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext,math,symbols/1634/0.41/25.64/22822/0.00|Playwrite RO/handwriting/100,200,300,400/latin/1635/0.18/16.99/2801/2.61|Noto Sans Multani/sans-serif/400/latin,latin-ext,multani/1636/0.23/22.06/936/0.94|Noto Serif Makasar/serif/400/latin,latin-ext,makasar/1637/0.24/22.25/1451/0.94|Noto Sans Runic/sans-serif/400/latin,latin-ext,runic/1638/0.23/22.06/936/0.94|Noto Sans Medefaidrin/sans-serif/400,500,600,700/latin,latin-ext,medefaidrin/1639/0.23/22.00/953/0.98|Playwrite CA/handwriting/100,200,300,400/latin/1640/0.19/17.37/2729/2.65|Noto Sans Rejang/sans-serif/400/latin,latin-ext,rejang/1641/0.23/22.06/936/0.94|Noto Sans Ol Chiki/sans-serif/400,500,600,700/latin,latin-ext,ol-chiki/1642/0.23/22.06/953/0.98|Noto Sans Bassa Vah/sans-serif/400,500,600,700/bassa-vah,latin,latin-ext/1643/0.22/22.65/953/0.98|Padyakke Expanded One/serif/400/kannada,latin,latin-ext/1644/0.13/44.23/1341/0.98|Noto Sans Duployan/sans-serif/400,700/duployan,latin,latin-ext/1645/0.23/22.00/936/0.94|Noto Sans Lisu/sans-serif/400,500,600,700/latin,latin-ext,lisu/1646/0.23/22.00/953/0.98|Jaini Purva/display/400/devanagari,latin,latin-ext/1647/0.32/16.68/1865/1.27|Noto Sans Newa/sans-serif/400/latin,latin-ext,newa/1648/0.23/22.00/936/0.94|Noto Sans Limbu/sans-serif/400/latin,latin-ext,limbu/1649/0.23/22.00/936/0.94|Noto Sans Grantha/sans-serif/400/grantha,latin,latin-ext/1650/0.23/22.00/936/0.94|Noto Sans Hanifi Rohingya/sans-serif/400,500,600,700/hanifi-rohingya,latin,latin-ext/1651/0.23/22.06/953/0.98|Noto Sans Mro/sans-serif/400/latin,latin-ext,mro/1652/0.23/22.06/936/0.94|Noto Sans Tai Le/sans-serif/400/latin,latin-ext,tai-le/1653/0.23/22.00/936/0.94|Noto Sans Sogdian/sans-serif/400/latin,latin-ext,sogdian/1654/0.24/21.12/936/0.94|Noto Sans Cypriot/sans-serif/400/cypriot,latin,latin-ext/1655/0.23/22.06/936/0.94|Noto Sans Old Permic/sans-serif/400/cyrillic-ext,latin,latin-ext,old-permic/1656/0.23/21.93/936/0.94|Yuji Hentaigana Akebono/handwriting/400/japanese,latin,latin-ext/1657/0.19/31.83/3332/2.22|Noto Sans Old South Arabian/sans-serif/400/latin,latin-ext,old-south-arabian/1658/0.23/22.06/936/0.94|Playwrite TZ/handwriting/100,200,300,400/latin/1659/0.18/17.12/2730/2.62|Noto Sans Modi/sans-serif/400/latin,latin-ext,modi/1660/0.23/22.06/936/0.94|Playwrite BR/handwriting/100,200,300,400/latin/1661/0.15/15.23/2755/2.61|Noto Sans Takri/sans-serif/400/latin,latin-ext,takri/1662/0.23/22.06/936/0.94|Noto Sans Nabataean/sans-serif/400/latin,latin-ext,nabataean/1663/0.23/22.06/936/0.94|Playwrite DE VA/handwriting/100,200,300,400/latin/1664/0.17/16.78/2219/2.46|Playwrite GB J/handwriting/100,200,300,400,100i,200i,300i,400i/latin/1665/0.18/18.91/1765/2.15|Noto Sans Ogham/sans-serif/400/latin,latin-ext,ogham/1666/0.23/22.06/936/0.94|Noto Serif Dogra/serif/400/dogra,latin,latin-ext/1667/0.24/22.62/1451/0.94|Noto Sans Kayah Li/sans-serif/400,500,600,700/kayah-li,latin,latin-ext/1668/0.23/22.00/953/0.98|Noto Sans Wancho/sans-serif/400/latin,latin-ext,wancho/1669/0.22/23.12/936/0.94|Noto Sans Zanabazar Square/sans-serif/400/latin,latin-ext,zanabazar-square/1670/0.23/22.06/936/0.94|Playwrite IN/handwriting/100,200,300,400/latin/1671/0.18/16.83/2688/2.64|Playwrite DE LA/handwriting/100,200,300,400/latin/1672/0.19/18.59/2493/2.58|Playwrite DE SAS/handwriting/100,200,300,400/latin/1673/0.19/18.78/2253/2.46|Playwrite ID/handwriting/100,200,300,400/latin/1674/0.12/11.77/2578/2.57|Noto Sans Gunjala Gondi/sans-serif/400,500,600,700/gunjala-gondi,latin,latin-ext/1675/0.23/22.14/953/0.98|Jersey 15 Charted/display/400/latin,latin-ext/1676/0.78/16.88/55162/0.00|Chokokutai/display/400/japanese,latin,latin-ext,vietnamese/1677/0.22/27.05/625/0.00|Rubik Lines/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext,math,symbols/1678/0.41/25.80/29742/0.00|Jersey 10 Charted/display/400/latin,latin-ext/1679/0.65/15.05/26504/0.00|Noto Sans Mahajani/sans-serif/400/latin,latin-ext,mahajani/1680/0.23/22.00/936/0.94|Jersey 25 Charted/display/400/latin,latin-ext/1681/0.85/18.12/61332/0.00|Noto Sans Psalter Pahlavi/sans-serif/400/latin,latin-ext,psalter-pahlavi/1682/0.23/22.00/936/0.94|Noto Sans Mayan Numerals/sans-serif/400/latin,latin-ext,mayan-numerals/1683/0.23/22.06/936/0.94|Noto Sans Lycian/sans-serif/400/lycian/1684/0.16/27.28/420/0.00|Playwrite IT Trad/handwriting/100,200,300,400/latin/1685/0.18/18.01/2644/2.64|Noto Sans Mandaic/sans-serif/400/latin,latin-ext,mandaic/1686/0.23/22.00/936/0.94|Noto Sans Caucasian Albanian/sans-serif/400/caucasian-albanian,latin,latin-ext/1687/0.23/22.38/936/0.94|Noto Sans Syriac/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,syriac/1688/0.23/22.06/1003/1.10|Noto Sans Phags Pa/sans-serif/400/phags-pa/1689/0.14/32.06/420/0.00|Noto Sans Elymaic/sans-serif/400/elymaic,latin,latin-ext/1690/0.22/23.18/936/0.94|Noto Sans Buginese/sans-serif/400/buginese,latin,latin-ext/1691/0.23/22.00/936/0.94|Noto Sans Shavian/sans-serif/400/latin,latin-ext,shavian/1692/0.23/22.06/936/0.94|Noto Sans Pahawh Hmong/sans-serif/400/latin,latin-ext,pahawh-hmong/1693/0.23/22.00/936/0.94|Noto Sans Lepcha/sans-serif/400/latin,latin-ext,lepcha/1694/0.23/22.00/936/0.94|Noto Sans Linear B/sans-serif/400/latin,latin-ext,linear-b/1695/0.23/22.06/936/0.94|Noto Sans Saurashtra/sans-serif/400/latin,latin-ext,saurashtra/1696/0.23/22.21/936/0.94|Noto Sans Old Sogdian/sans-serif/400/latin,latin-ext,old-sogdian/1697/0.24/21.12/936/0.94|Noto Sans Manichaean/sans-serif/400/latin,latin-ext,manichaean/1698/0.23/22.06/936/0.94|Noto Sans Soyombo/sans-serif/400/latin,latin-ext,soyombo/1699/0.23/22.00/936/0.94|Jacquarda Bastarda 9/display/400/latin,latin-ext,math,symbols/1700/0.23/26.50/4098/0.00|Noto Sans Phoenician/sans-serif/400/latin,latin-ext,phoenician/1701/0.23/22.06/936/0.94|Noto Sans Elbasan/sans-serif/400/elbasan,latin,latin-ext/1702/0.23/22.06/936/0.94|Noto Sans Hatran/sans-serif/400/hatran,latin,latin-ext/1703/0.23/22.06/936/0.94|Noto Sans SignWriting/sans-serif/400/latin,latin-ext,signwriting/1704/0.18/27.98/936/0.94|Noto Sans Kharoshthi/sans-serif/400/kharoshthi,latin,latin-ext/1705/0.23/22.00/936/0.94|Noto Sans Bhaiksuki/sans-serif/400/bhaiksuki,latin,latin-ext/1706/0.23/21.74/936/0.94|Noto Znamenny Musical Notation/sans-serif/400/latin,latin-ext,math,symbols,znamenny/1707/0.23/22.06/936/0.94|Noto Sans Nushu/sans-serif/400/latin,latin-ext,nushu/1708/0.23/22.06/936/0.94|Noto Sans Mende Kikakui/sans-serif/400/latin,latin-ext,mende-kikakui/1709/0.23/22.06/936/0.94|Noto Sans Pau Cin Hau/sans-serif/400/latin,latin-ext,pau-cin-hau/1710/0.23/22.17/936/0.94|Micro 5 Charted/display/400/latin,latin-ext,math,symbols/1711/0.50/14.73/8286/0.00|Noto Sans Tirhuta/sans-serif/400/latin,latin-ext,tirhuta/1712/0.23/22.06/936/0.94|Jacquarda Bastarda 9 Charted/display/400/latin,latin-ext,math,symbols/1713/0.49/18.75/27486/0.00|Yarndings 12/display/400/latin,math,symbols/1714/0.23/40.68/14514/0.00|Noto Sans Khudawadi/sans-serif/400/khudawadi,latin,latin-ext/1715/0.23/22.00/936/0.94|Noto Sans Ugaritic/sans-serif/400/latin,latin-ext,ugaritic/1716/0.23/22.06/936/0.94|Noto Sans Meroitic/sans-serif/400/latin,latin-ext,meroitic,meroitic-cursive,meroitic-hieroglyphs/1717/0.23/22.06/936/0.94|Yarndings 20/display/400/latin,math,symbols/1718/0.22/36.30/33000/0.00|Jacquard 24 Charted/display/400/latin,latin-ext/1719/0.87/18.11/159752/0.00|Kay Pho Du/serif/400,500,600,700/kayah-li,latin,latin-ext/1720/0.20/21.09/1199/0.60|Yarndings 12 Charted/display/400/latin,math,symbols/1721/0.59/30.98/32176/0.00|Yarndings 20 Charted/display/400/latin,math,symbols/1722/0.54/30.24/70026/0.00", W = `Arial/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese|Comic Sans MS/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext|Courier New/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese|Georgia/serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext|Helvetica/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese|Impact/sans-serif/400/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext|Tahoma/sans-serif/400,700/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese|Times New Roman/serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese|Trebuchet MS/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext|Verdana/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese
`, B = J.split("|").map(v.parse), Z = W.split("|").map(v.parse);
var g, p, T, O;
class k {
  static loaded(a) {
    return w(this, g).has(a);
  }
  static async load(a) {
    let i;
    const e = B.find((n) => n.name === a);
    e ? i = C(this, p, O).call(this, e) : i = Promise.resolve(), w(this, g).set(a, i), await i;
  }
}
g = new WeakMap(), p = new WeakSet(), T = async function(a) {
  const i = document.createElement("link");
  i.href = a, i.rel = "stylesheet", i.type = "text/css", document.head.append(i);
}, O = async function(a) {
  const i = new URL("https://fonts.googleapis.com/css"), e = a.name + ":" + a.variants.join(",");
  i.searchParams.set("family", e), i.searchParams.set("display", "swap"), C(this, p, T).call(this, i.toString()), await document.fonts.load(`1em "${a.name}"`);
}, b(k, p), b(k, g, /* @__PURE__ */ new Map());
const Y = {
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
      "0.1": "Very narrow",
      "0.3": "Narrow",
      "0.5": "Medium width",
      "0.7": "Wide",
      "0.9": "Very wide"
    },
    thicknesses: {
      all: "(All Thicknesses)",
      "0.1": "Very thin",
      "0.3": "Thin",
      "0.5": "Medium thickness",
      "0.7": "Thick",
      "0.9": "Very thick"
    },
    complexities: {
      all: "(All Complexities)",
      "0.1": "Very Simple",
      "0.3": "Simple",
      "0.5": "Medium complexity",
      "0.7": "Complex",
      "0.9": "Very complex"
    },
    curvatures: {
      all: "(All Curvatures)",
      "0.1": "Very straight",
      "0.3": "Straight",
      "0.5": "Medium curvature",
      "0.7": "Curvy",
      "0.9": "Very Curvy"
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
      "0.1": "Zeer smal",
      "0.3": "Smal",
      "0.5": "Normale breedte",
      "0.7": "Breed",
      "0.9": "Zeer breed"
    },
    thicknesses: {
      all: "(Alle diktes)",
      "0.1": "Zeer dun",
      "0.3": "Dun",
      "0.5": "Normale dikte",
      "0.7": "Dik",
      "0.9": "Zeer dik"
    },
    complexities: {
      all: "(Alle complexiteiten)",
      "0.1": "Zeer eenvoudig",
      "0.3": "Eenvoudig",
      "0.5": "Normale complexiteit",
      "0.7": "Complex",
      "0.9": "Zeer complex"
    },
    curvatures: {
      all: "(Alle krommingen)",
      "0.1": "Zeer recht",
      "0.3": "Recht",
      "0.5": "Normale kromming",
      "0.7": "Gebogen",
      "0.9": "Zeer gebogen"
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
      "0.1": "Sehr schmal",
      "0.3": "Schmal",
      "0.5": "Mittlere Breite",
      "0.7": "Breit",
      "0.9": "Sehr breit"
    },
    thicknesses: {
      all: "(Alle Strichstärken)",
      "0.1": "Sehr dünn",
      "0.3": "Dünn",
      "0.5": "Mittlere Stärke",
      "0.7": "Dick",
      "0.9": "Sehr dick"
    },
    complexities: {
      all: "(Alle Komplexitäten)",
      "0.1": "Sehr einfach",
      "0.3": "Einfach",
      "0.5": "Mittlere Komplexität",
      "0.7": "Komplex",
      "0.9": "Sehr komplex"
    },
    curvatures: {
      all: "(Alle Krümmungen)",
      "0.1": "Sehr gerade",
      "0.3": "Gerade",
      "0.5": "Mittlere Krümmung",
      "0.7": "Geschwungen",
      "0.9": "Sehr geschwungen"
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
      "0.1": "Muy estrecha",
      "0.3": "Estrecha",
      "0.5": "Anchura media",
      "0.7": "Ancha",
      "0.9": "Muy ancha"
    },
    thicknesses: {
      all: "(Todos los grosores)",
      "0.1": "Muy delgada",
      "0.3": "Delgada",
      "0.5": "Grosor medio",
      "0.7": "Gruesa",
      "0.9": "Muy gruesa"
    },
    complexities: {
      all: "(Todas las complejidades)",
      "0.1": "Muy simple",
      "0.3": "Simple",
      "0.5": "Complejidad media",
      "0.7": "Compleja",
      "0.9": "Muy compleja"
    },
    curvatures: {
      all: "(Todas las curvaturas)",
      "0.1": "Muy recta",
      "0.3": "Recta",
      "0.5": "Curvatura media",
      "0.7": "Curvada",
      "0.9": "Muy curvada"
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
      "0.1": "Très étroit",
      "0.3": "Étroit",
      "0.5": "Largeur moyenne",
      "0.7": "Large",
      "0.9": "Très large"
    },
    thicknesses: {
      all: "(Toutes les épaisseurs)",
      "0.1": "Très fin",
      "0.3": "Fin",
      "0.5": "Épaisseur moyenne",
      "0.7": "Épais",
      "0.9": "Très épais"
    },
    complexities: {
      all: "(Toutes les complexités)",
      "0.1": "Très simple",
      "0.3": "Simple",
      "0.5": "Complexité moyenne",
      "0.7": "Complexe",
      "0.9": "Très complexe"
    },
    curvatures: {
      all: "(Toutes les courbures)",
      "0.1": "Très droit",
      "0.3": "Droit",
      "0.5": "Courbure moyenne",
      "0.7": "Courbé",
      "0.9": "Très courbé"
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
    cancel: "Annuler",
    select: "Sélectionner"
  }
};
class Q extends HTMLElement {
  constructor() {
    super(...arguments);
    s(this, "opened", !1);
    s(this, "picker");
    s(this, "config");
    s(this, "modal");
    s(this, "observer");
    s(this, "selected");
    s(this, "hovered", null);
    s(this, "$modal");
    s(this, "$search");
    s(this, "$subset");
    s(this, "$categories");
    s(this, "$width");
    s(this, "$thickness");
    s(this, "$complexity");
    s(this, "$curvature");
    s(this, "$sort");
    s(this, "$sortOrder");
    s(this, "$preview");
    s(this, "$fonts");
    s(this, "$variants");
    s(this, "$cancelBtn");
    s(this, "$pickBtn");
  }
  connectedCallback() {
    this.createLayout(), this.modal = new _.Modal(this.$modal), this.observer = new IntersectionObserver((i) => {
      for (const e of i) {
        if (e.intersectionRatio <= 0) return;
        const n = e.target, l = n.dataset.family;
        l && k.load(l), this.observer.unobserve(n);
      }
    });
  }
  createLayout() {
    this.innerHTML = j, this.$modal = this.querySelector("#fp__modal"), this.$search = this.querySelector("#fp__search"), this.$subset = this.querySelector("#fp__subsets"), this.$categories = this.querySelector("#fp__categories"), this.$width = this.querySelector("#fp__width"), this.$thickness = this.querySelector("#fp__thickness"), this.$complexity = this.querySelector("#fp__complexity"), this.$curvature = this.querySelector("#fp__curvature"), this.$sort = this.querySelector("#fp__sort"), this.$sortOrder = this.querySelector("#fp__sort-order"), this.$preview = this.querySelector("#fp__preview"), this.$fonts = this.querySelector("#fp__fonts"), this.$variants = this.querySelector("#fp__variants"), this.$cancelBtn = this.querySelector("#fp__cancel"), this.$pickBtn = this.querySelector("#fp__pick");
  }
  getElementFor(i) {
    const e = this.$fonts.querySelector(`[data-family="${i.name}"]`);
    if (!e) throw new Error(`Could not find element for '${i.name}'!`);
    return e;
  }
  getFamilyFor(i) {
    const e = i.dataset.family;
    return e ? this.picker.getFamily(e) : null;
  }
  getFamilies() {
    return Array.from(this.picker.families.values());
  }
  sortFamilies(i, e = !1) {
    const l = this.getFamilies().sort((o, c) => z(o, c, i));
    e && l.reverse();
    for (const o of l)
      this.$fonts.append(this.getElementFor(o));
    for (const o of this.picker.favourites) {
      const c = this.getElementFor(o);
      this.$fonts.prepend(c);
    }
    const r = this.getElementFor(this.selected.family);
    this.$fonts.prepend(r), this.$fonts.scrollTop = 0;
  }
  filterFamilies(i) {
    const l = this.getFamilies().filter((r) => U(r, i)).map((r) => r.name);
    for (const r of this.$fonts.children) {
      const o = r.dataset.family, c = !l.includes(o);
      r.classList.toggle("d-none", c);
    }
  }
  updateSort() {
    const i = this.$sort.value, e = this.$sortOrder.classList.contains("active");
    this.sortFamilies(i, e);
  }
  updateFilter() {
    this.filterFamilies({
      name: this.$search.value,
      subset: this.$subset.value,
      categories: q(this.$categories),
      complexity: this.$complexity.value,
      curvature: this.$curvature.value,
      thickness: this.$thickness.value,
      width: this.$width.value
    });
  }
  updatePreview() {
    const i = this.hovered ?? this.selected;
    this.$preview.style.fontFamily = `"${i.family}"`, this.$preview.style.fontWeight = i.weight.toString(), this.$preview.style.fontStyle = i.style;
  }
  selectFont(i) {
    for (const l of this.$fonts.querySelectorAll(".fp__selected"))
      l.classList.remove("fp__selected");
    if (this.selected = i, this.getElementFor(i.family).classList.add("fp__selected"), !this.config.variants) return;
    this.$variants.textContent = "", this.$variants.append(...D(i.family.variants));
    const e = this.$variants.querySelector(`[value="${i.weight}"]`), n = this.$variants.querySelector("#fp__italic");
    if (!e) throw new Error("Could not find weight button for selected font.");
    if (!n) throw new Error("Could not find italic button for selected font.");
    e.checked = !0, n.classList.toggle("active", i.italic), this.updateVariant();
  }
  favouriteFont(i) {
    const n = this.getElementFor(i.family).classList.toggle("fp__fav");
    this.picker.markFavourite(i.family, n), this.updateSort();
  }
  updateVariant() {
    if (!this.config.variants) return;
    const i = this.$variants.querySelector(".fp__weight:checked"), e = this.$variants.querySelector("#fp__italic");
    if (!i) throw new Error("Could not find weight button for selected font.");
    if (!e) throw new Error("Could not find italic button for selected font.");
    let n = parseInt(i.value), l = e.classList.contains("active");
    const r = this.selected.family.variants.includes(`${n}`), o = this.selected.family.variants.includes(`${n}i`);
    e.disabled = !r || !o, r || (l = !0), o || (l = !1), e.classList.toggle("active", l), this.selected.weight = n, this.selected.italic = l, this.updatePreview();
  }
  createFonts() {
    for (const i of this.getFamilies()) {
      const e = E(i);
      this.$fonts.append(e), this.observer.observe(e);
    }
  }
  applyTranslations() {
    const i = Y[this.config.language];
    this.$search.placeholder = i.search, this.querySelector("#fp__title").textContent = i.selectFont, this.$subset.append(...y(i.subsets)), this.$categories.append(...I(i.categories)), this.$width.append(...y(i.widths)), this.$thickness.append(...y(i.thicknesses)), this.$complexity.append(...y(i.complexities)), this.$curvature.append(...y(i.curvatures)), this.$sort.append(...y(i.sorts)), this.$preview.textContent = this.config.previewText ?? i.sampleText, this.querySelector("#fp__t-filters").textContent = i.filters, this.querySelector("#fp__t-metrics").textContent = i.metrics, this.querySelector("#fp__t-sort").textContent = i.sort, this.querySelector("#fp__t-cancel").textContent = i.cancel, this.querySelector("#fp__t-pick").textContent = i.select;
  }
  onFontHover(i) {
    const e = this.getFamilyFor(i.target);
    e && (e === this.selected.family ? this.hovered = null : this.hovered = m.parse(e), this.updatePreview());
  }
  onFontUnhover(i) {
    this.getFamilyFor(i.target) && (this.hovered = null, this.updatePreview());
  }
  onFontClick(i) {
    const e = i.target;
    if (e.classList.contains("fp__heart")) {
      const l = this.getFamilyFor(e.parentElement);
      if (!l) return;
      const r = m.parse(l);
      this.selectFont(r), this.favouriteFont(r);
      return;
    }
    const n = this.getFamilyFor(e);
    !n || this.selected.family === n || this.selectFont(m.parse(n));
  }
  onFontDoubleClick(i) {
    this.getFamilyFor(i.target) && this.submit();
  }
  bindEvents() {
    const i = () => this.updateFilter();
    this.$categories.addEventListener("click", i), this.$search.addEventListener("input", i), this.$subset.addEventListener("input", i), this.$width.addEventListener("input", i), this.$thickness.addEventListener("input", i), this.$complexity.addEventListener("input", i), this.$curvature.addEventListener("input", i);
    const e = () => this.updateSort();
    this.$sort.addEventListener("input", e), this.$sortOrder.addEventListener("click", e), this.$fonts.addEventListener("mouseover", (n) => this.onFontHover(n)), this.$fonts.addEventListener("mouseout", (n) => this.onFontUnhover(n)), this.$fonts.addEventListener("click", (n) => this.onFontClick(n)), this.$fonts.addEventListener("dblclick", (n) => this.onFontDoubleClick(n)), this.$variants.addEventListener("click", () => this.updateVariant()), this.$pickBtn.addEventListener("click", () => this.submit()), this.$cancelBtn.addEventListener("click", () => this.cancel());
  }
  assignDefaults() {
    H(this.$categories, this.config.defaultCategories), this.$subset.value = this.config.defaultSubset, this.$width.value = this.config.defaultWidth, this.$thickness.value = this.config.defaultThickness, this.$complexity.value = this.config.defaultComplexity, this.$curvature.value = this.config.defaultCurvature, this.$sort.value = this.config.sortBy, this.$sortOrder.classList.toggle("active", this.config.sortReverse), this.picker.favourites.forEach((i) => this.getElementFor(i).classList.add("fp__fav")), this.$variants.classList.toggle("d-none", !this.config.variants);
  }
  async open(i) {
    this.opened || (this.opened = !0, this.picker = i, this.config = this.picker.getConfig(), this.applyTranslations(), this.bindEvents(), this.modal.show(), this.createFonts(), this.selectFont(i.font), this.assignDefaults(), this.updateSort(), this.updateFilter(), this.picker.dispatchEvent(new Event("open")), await new Promise((e) => {
      this.$modal.addEventListener("shown.bs.modal", () => this.$modal.focus()), this.$modal.addEventListener("hidden.bs.modal", () => e());
    }), this.picker.dispatchEvent(new Event("close")));
  }
  submit() {
    this.picker.setFont(this.selected), this.picker.dispatchEvent(new Event("pick")), this.close();
  }
  cancel() {
    this.picker.dispatchEvent(new Event("cancel")), this.close();
  }
  close() {
    this.opened = !1, this.modal.hide();
  }
}
let f = null;
class X extends HTMLButtonElement {
  constructor() {
    super(...arguments);
    s(this, "initialized", !1);
    s(this, "_font");
    s(this, "_families");
    s(this, "_favourites");
    s(this, "_config", {
      language: "en",
      container: document.body,
      font: "Arial",
      verbose: !1,
      variants: !0,
      favourites: [],
      saveFavourites: !0,
      storageKey: "fp__favourites",
      defaultSubset: "all",
      defaultCategories: ["display", "handwriting", "monospace", "sans-serif", "serif"],
      defaultWidth: "all",
      defaultThickness: "all",
      defaultComplexity: "all",
      defaultCurvature: "all",
      sortBy: "popularity",
      sortReverse: !1,
      googleFonts: null,
      systemFonts: null,
      extraFonts: []
    });
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
  connectedCallback() {
    this.disabled = !0, this.classList.add("font-picker", "form-select"), this.addEventListener("click", this.open.bind(this));
  }
  configure(i) {
    Object.assign(this._config, i);
    const e = Object.keys(i);
    (!this.families || e.includes("googleFonts") || e.includes("systemFonts") || e.includes("extraFonts")) && this.updateFamilies(), (!this.font || e.includes("font")) && this.setFont(this._config.font), this.initialized || this.initialize();
  }
  initialize() {
    this.initialized = !0, this.disabled = !1;
    const i = this._config.favourites.slice();
    if (this._config.saveFavourites) {
      const e = localStorage.getItem(this._config.storageKey);
      e && i.push(...JSON.parse(e));
    }
    this._favourites = /* @__PURE__ */ new Set();
    for (const e of i)
      try {
        const n = this.getFamily(e);
        this._favourites.add(n);
      } catch {
        console.warn(`Font from favourites is not available: '${e}'!`);
      }
  }
  updateFamilies() {
    const i = [
      ...B.filter((e) => {
        var n;
        return ((n = this._config.googleFonts) == null ? void 0 : n.includes(e.name)) ?? !0;
      }),
      ...Z.filter((e) => {
        var n;
        return ((n = this._config.systemFonts) == null ? void 0 : n.includes(e.name)) ?? !0;
      }),
      ...this._config.extraFonts.map((e) => new v(e))
    ];
    this._families = /* @__PURE__ */ new Map(), i.forEach((e) => this.families.set(e.name, e));
  }
  getFamily(i) {
    const e = this.families.get(i);
    if (!e) throw new Error(`Could not find font family '${i}'!`);
    return e;
  }
  setFont(i) {
    if (i instanceof m)
      this._font = i;
    else if (typeof i == "string") {
      const [e, n] = i.split(":"), l = this.getFamily(e);
      this._font = m.parse(l, n);
    } else
      this._font = m.parse(i);
    if (!this.font.family.variants.includes(this.font.variant))
      throw new Error(`Variant ${this.font.variant} not supported by '${this.font.family.name}'!`);
    this.textContent = this._config.verbose ? this.font.toString() : this.font.toId(), this.style.fontFamily = `${this.font.family}`, this.style.fontWeight = this.font.weight.toString(), this.style.fontStyle = this.font.style, k.load(this.font.family.name);
  }
  markFavourite(i, e) {
    if (e === void 0 && (e = !this.favourites.has(i)), e ? this.favourites.add(i) : this.favourites.delete(i), this._config.saveFavourites) {
      const n = Array.from(this.favourites).map((l) => l.name);
      localStorage.setItem(this._config.storageKey, JSON.stringify(n));
    }
    return e;
  }
  async open() {
    return this.close(), f = document.createElement("font-picker-dialog"), this._config.container.append(f), await f.open(this), f.remove(), f = null, this.font;
  }
  async close() {
    f == null || f.close();
  }
}
customElements.define("font-picker-dialog", Q);
customElements.define("font-picker", X, {
  extends: "button"
});
export {
  k as FontLoader,
  X as FontPicker
};
