var L = Object.defineProperty;
var M = (t) => {
  throw TypeError(t);
};
var F = (t, e, i) => e in t ? L(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var r = (t, e, i) => F(t, typeof e != "symbol" ? e + "" : e, i), A = (t, e, i) => e.has(t) || M("Cannot " + i);
var w = (t, e, i) => (A(t, e, "read from private field"), i ? i.call(t) : e.get(t)), b = (t, e, i) => e.has(t) ? M("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i);
var C = (t, e, i) => (A(t, e, "access private method"), i);
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

      <div id="fp__fonts" class="modal-body border-bottom p-1" tabindex="-1"></div>

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
`, E = '<svg xmlns="http://www.w3.org/2000/svg" stroke-width="2" viewBox="0 0 18 18"><path d="M9 2.314 C13.438-2.248 24.534 5.735 9 16-6.534 5.736 4.562-2.248 9 2.314z" /></svg>', G = () => {
  const t = document.createElement("div");
  return t.className = "fp__heart", t.role = "button", t.innerHTML = E, t;
}, R = (t) => {
  const e = document.createElement("div");
  e.className = "px-3 py-1 fp__font-item rounded-pill user-select-none", e.role = "button", e.dataset.family = t.name;
  const i = document.createElement("span");
  return i.className = "fs-6 pe-none", i.textContent = t.name, i.style.fontFamily = `"${t.name}"`, e.append(i, G()), e;
}, D = (t) => {
  const e = Array.from(new Set(t.map((a) => parseInt(a)))), i = document.createElement("button");
  return i.className = "btn btn-outline-warning fp__btn-badge", i.dataset.bsToggle = "button", i.textContent = "Italic", i.id = "fp__italic", [
    ...e.flatMap((a) => {
      const n = `fp__weight-${a}`, l = document.createElement("input");
      l.type = "radio", l.className = "btn-check fp__weight", l.value = a.toString(), l.id = n, l.name = "fp__weight";
      const s = document.createElement("label");
      return s.className = "btn btn-outline-primary fp__btn-badge", s.htmlFor = n, s.textContent = a.toString(), [l, s];
    }),
    i
  ];
}, $ = (t, e) => {
  const i = document.createElement("option");
  return i.value = t, i.textContent = e, i;
}, y = (t) => Object.entries(t).map(([e, i]) => $(e, i)), K = (t, e) => {
  const i = document.createElement("button");
  return i.className = "btn btn-outline-primary fp__btn-badge", i.dataset.value = t, i.dataset.bsToggle = "button", i.textContent = e, i;
}, I = (t) => Object.entries(t).map(([e, i]) => K(e, i)), H = (t, e) => {
  for (const i of t.children) {
    const a = i.dataset.value;
    i.classList.toggle("active", e.includes(a));
  }
}, q = (t) => Array.from(t.querySelectorAll(".active")).map(
  (e) => e.dataset.value
), N = [], P = [];
function V(t, e) {
  if (t === e)
    return 0;
  const i = t;
  t.length > e.length && (t = e, e = i);
  let a = t.length, n = e.length;
  for (; a > 0 && t.charCodeAt(~-a) === e.charCodeAt(~-n); )
    a--, n--;
  let l = 0;
  for (; l < a && t.charCodeAt(l) === e.charCodeAt(l); )
    l++;
  if (a -= l, n -= l, a === 0)
    return n;
  let s, o, c, x, d = 0, h = 0;
  for (; d < a; )
    P[d] = t.charCodeAt(l + d), N[d] = ++d;
  for (; h < n; )
    for (s = e.charCodeAt(l + h), c = h++, o = h, d = 0; d < a; d++)
      x = s === P[d] ? c : c + 1, c = N[d], o = N[d] = c > o ? x > o ? o + 1 : x : x > c ? c + 1 : x;
  return o;
}
const z = (t, e, i) => i === "name" ? t.name.localeCompare(e.name) : i === "popularity" ? t.popularity === void 0 && e.popularity === void 0 ? 0 : t.popularity === void 0 ? 1 / 0 : e.popularity === void 0 ? -1 / 0 : t.popularity - e.popularity : t.metrics === void 0 && e.metrics === void 0 ? 0 : t.metrics === void 0 ? 1 / 0 : e.metrics === void 0 ? -1 / 0 : i === "complexity" ? e.metrics.complexity - t.metrics.complexity : i === "curvature" ? e.metrics.curvature - t.metrics.curvature : i === "thickness" ? e.metrics.thickness - t.metrics.thickness : i === "width" ? e.metrics.width - t.metrics.width : 0, S = (t, e) => e === "all" ? !0 : t === void 0 ? !1 : Math.abs(t - parseFloat(e)) <= 0.1, U = (t, e) => {
  var i, a, n, l;
  if (e.name) {
    const s = V(t.name.toLowerCase(), e.name.toLowerCase()), o = [...t.name].length - [...e.name].length;
    if (s > o) return !1;
  }
  return !(t.subsets && e.subset !== "all" && !t.subsets.includes(e.subset) || t.category && !e.categories.includes(t.category) || !S((i = t.metrics) == null ? void 0 : i.width, e.width) || !S((a = t.metrics) == null ? void 0 : a.complexity, e.complexity) || !S((n = t.metrics) == null ? void 0 : n.curvature, e.curvature) || !S((l = t.metrics) == null ? void 0 : l.thickness, e.thickness));
}, u = class u {
  constructor(e, i, a) {
    r(this, "family");
    r(this, "weight");
    r(this, "italic");
    this.family = e, this.weight = i, this.italic = a;
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
    const e = [this.family.name];
    return e.push(u.weightNames[this.weight]), this.italic && e.push("Italic"), e.push(`(${this.variant})`), e.join(" ");
  }
  static parse(e, i = e.getDefaultVariant()) {
    const a = parseInt(i), n = i.endsWith("i");
    return new u(e, a, n);
  }
};
r(u, "weightNames", {
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
  constructor(e) {
    Object.assign(this, e);
  }
  toString() {
    return this.name;
  }
  getDefaultVariant() {
    return Array.from(new Set(this.variants)).toSorted((i, a) => Math.abs(parseInt(i) - 400) - Math.abs(parseInt(a) - 400))[0];
  }
  // parse font family from compressed format
  static parse(e) {
    const [i, a, n, l, s, o, c, x, d] = e.split("/"), h = new v({
      name: i,
      category: a,
      variants: n.split(","),
      subsets: l.split(",")
    });
    return s && (h.popularity = parseInt(s)), o && c && x && d && (h.metrics = {
      width: parseFloat(o),
      thickness: parseFloat(c),
      complexity: parseFloat(x),
      curvature: parseFloat(d)
    }), h;
  }
}
const W = "Roboto/sans-serif/100,100i,300,300i,400,400i,500,500i,700,700i,900,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/1/0.41/0.46/1.00/0.18|Open Sans/sans-serif/300,400,500,600,700,800,300i,400i,500i,600i,700i,800i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,math,symbols,vietnamese/2/0.31/0.46/1.00/0.35|Noto Sans JP/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic,japanese,latin,latin-ext,vietnamese/3/0.36/0.41/1.00/0.34|Montserrat/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/4/0.22/0.67/1.00/0.32|Poppins/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext/5/0.35/0.49/1.00/0.31|Lato/sans-serif/100,100i,300,300i,400,400i,700,700i,900,900i/latin,latin-ext/6/0.40/0.51/1.00/0.51|Inter/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/7/0.37/0.57/1.00/0.34|Roboto Condensed/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/8/0.45/0.32/1.00/0.40|Oswald/sans-serif/200,300,400,500,600,700/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/10/0.65/0.16/1.00/0.31|Roboto Mono/monospace/100,200,300,400,500,600,700,100i,200i,300i,400i,500i,600i,700i/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/11/0.24/0.75/0.40/0.32|Noto Sans/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,devanagari,greek,greek-ext,latin,latin-ext,vietnamese/12/0.35/0.47/1.00/0.34|Raleway/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/13/0.22/0.55/1.00/0.39|Nunito/sans-serif/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/14/0.29/0.57/0.68/0.50|Nunito Sans/sans-serif/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/15/0.31/0.55/1.00/0.27|Rubik/sans-serif/300,400,500,600,700,800,900,300i,400i,500i,600i,700i,800i,900i/arabic,cyrillic,cyrillic-ext,hebrew,latin,latin-ext/16/0.44/0.56/0.00/0.44|Playfair Display/serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/cyrillic,latin,latin-ext,vietnamese/17/0.27/0.48/0.00/0.50|Ubuntu/sans-serif/300,300i,400,400i,500,500i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext/18/0.41/0.48/1.00/0.58|Merriweather/serif/300,300i,400,400i,700,700i,900,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/19/0.43/0.43/1.00/0.13|Noto Sans KR/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic,korean,latin,latin-ext,vietnamese/20/0.36/0.41/1.00/0.34|Roboto Slab/serif/100,200,300,400,500,600,700,800,900/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/21/0.46/0.54/1.00/0.12|PT Sans/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext/22/0.37/0.45/1.00/0.37|Kanit/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,thai,vietnamese/23/0.56/0.56/1.00/0.22|Lora/serif/400,500,600,700,400i,500i,600i,700i/cyrillic,cyrillic-ext,latin,latin-ext,math,symbols,vietnamese/24/0.28/0.46/0.00/0.46|Work Sans/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/25/0.27/0.64/1.00/0.33|DM Sans/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext/26/0.36/0.52/1.00/0.34|Noto Sans TC/sans-serif/100,200,300,400,500,600,700,800,900/chinese-traditional,cyrillic,latin,latin-ext,vietnamese/27/0.36/0.41/1.00/0.34|Mulish/sans-serif/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/28/0.31/0.52/1.00/0.24|Manrope/sans-serif/200,300,400,500,600,700,800/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/29/0.32/0.44/1.00/0.33|Fira Sans/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/30/0.39/0.42/1.00/0.22|Quicksand/sans-serif/300,400,500,600,700/latin,latin-ext,vietnamese/31/0.16/0.57/0.13/0.54|Barlow/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,vietnamese/32/0.28/0.48/0.27/0.25|IBM Plex Sans/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/33/0.34/0.49/1.00/0.29|Mukta/sans-serif/200,300,400,500,600,700,800/devanagari,latin,latin-ext/34/0.41/0.38/1.00/0.37|Heebo/sans-serif/100,200,300,400,500,600,700,800,900/hebrew,latin,latin-ext,math,symbols/35/0.41/0.47/1.00/0.29|PT Serif/serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext/36/0.40/0.46/0.00/0.38|Material Symbols Outlined/monospace/100,200,300,400,500,600,700/latin/37/0.04/1.00/1.00/0.10|Titillium Web/sans-serif/200,200i,300,300i,400,400i,600,600i,700,700i,900/latin,latin-ext/38/0.36/0.39/1.00/0.19|Bebas Neue/sans-serif/400/latin,latin-ext/39/0.73/0.31/1.00/0.03|Karla/sans-serif/200,300,400,500,600,700,800,200i,300i,400i,500i,600i,700i,800i/latin,latin-ext/40/0.30/0.50/1.00/0.34|Noto Serif/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/41/0.38/0.52/0.00/0.33|Nanum Gothic/sans-serif/400,700,800/korean,latin/42/0.26/0.53/0.48/0.32|Space Grotesk/sans-serif/300,400,500,600,700/latin,latin-ext,vietnamese/43/0.33/0.62/1.00/0.20|Noto Color Emoji/sans-serif/400/emoji/45/0.00/1.00/1.00/0.00|Libre Franklin/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/46/0.33/0.57/0.00/0.36|Inconsolata/monospace/200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/47/0.23/0.68/1.00/0.47|Hind Siliguri/sans-serif/300,400,500,600,700/bengali,latin,latin-ext/48/0.37/0.46/1.00/0.19|Outfit/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext/49/0.42/0.52/1.00/0.33|Josefin Sans/sans-serif/100,200,300,400,500,600,700,100i,200i,300i,400i,500i,600i,700i/latin,latin-ext,vietnamese/50/0.29/0.48/1.00/0.33|Fira Sans Condensed/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/51/0.42/0.31/1.00/0.19|Jost/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,latin,latin-ext/52/0.31/0.35/1.00/0.38|Anton/sans-serif/400/latin,latin-ext,vietnamese/53/1.00/0.21/1.00/0.15|Libre Baskerville/serif/400,400i,700/latin,latin-ext/54/0.32/0.53/0.00/0.52|Barlow Condensed/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,vietnamese/55/0.44/0.20/0.65/0.23|Dancing Script/handwriting/400,500,600,700/latin,latin-ext,vietnamese/56/0.21/0.20/0.00/0.94|Arimo/sans-serif/400,500,600,700,400i,500i,600i,700i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese/57/0.42/0.55/1.00/0.26|EB Garamond/serif/400,500,600,700,800,400i,500i,600i,700i,800i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/58/0.21/0.31/0.00/0.66|Dosis/sans-serif/200,300,400,500,600,700,800/latin,latin-ext,vietnamese/59/0.25/0.23/0.29/0.52|Archivo/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/60/0.48/0.56/1.00/0.40|Noto Serif JP/serif/200,300,400,500,600,700,800,900/cyrillic,japanese,latin,latin-ext,vietnamese/61/0.20/0.45/0.00/0.16|Abel/sans-serif/400/latin/62/0.26/0.32/0.87/0.34|Cabin/sans-serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext,vietnamese/63/0.42/0.35/1.00/0.30|Noto Sans SC/sans-serif/100,200,300,400,500,600,700,800,900/chinese-simplified,cyrillic,latin,latin-ext,vietnamese/64/0.36/0.41/1.00/0.34|Bitter/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/65/0.35/0.44/0.82/0.10|Teko/sans-serif/300,400,500,600,700/devanagari,latin,latin-ext/66/0.81/0.16/1.00/0.03|PT Sans Narrow/sans-serif/400,700/cyrillic,cyrillic-ext,latin,latin-ext/67/0.43/0.20/1.00/0.35|Figtree/sans-serif/300,400,500,600,700,800,900,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext/68/0.38/0.53/1.00/0.32|Exo 2/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/69/0.39/0.55/1.00/0.32|Source Code Pro/monospace/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/70/0.18/0.79/1.00/0.32|Hind/sans-serif/300,400,500,600,700/devanagari,latin,latin-ext/71/0.37/0.47/1.00/0.19|Source Sans 3/sans-serif/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/72/0.37/0.41/1.00/0.33|Assistant/sans-serif/200,300,400,500,600,700,800/hebrew,latin,latin-ext/73/0.30/0.40/1.00/0.33|Cairo/sans-serif/200,300,400,500,600,700,800,900/arabic,latin,latin-ext/74/0.37/0.40/1.00/0.38|Oxygen/sans-serif/300,400,700/latin,latin-ext/76/0.36/0.42/1.00/0.30|Overpass/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/77/0.38/0.52/1.00/0.33|Noto Sans Arabic/sans-serif/100,200,300,400,500,600,700,800,900/arabic/78/0.01/1.00/1.00/0.00|Plus Jakarta Sans/sans-serif/200,300,400,500,600,700,800,200i,300i,400i,500i,600i,700i,800i/cyrillic-ext,latin,latin-ext,vietnamese/79/0.34/0.49/1.00/0.32|Varela Round/sans-serif/400/hebrew,latin,latin-ext,vietnamese/80/0.37/0.55/0.64/0.50|Signika Negative/sans-serif/300,400,500,600,700/latin,latin-ext,vietnamese/81/0.47/0.40/0.00/0.50|M PLUS Rounded 1c/sans-serif/100,300,400,500,700,800,900/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,japanese,latin,latin-ext,vietnamese/82/0.26/0.48/1.00/0.47|Pacifico/handwriting/400/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/83/0.46/0.07/0.00/0.55|Prompt/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,thai,vietnamese/84/0.38/0.59/1.00/0.25|Archivo Black/sans-serif/400/latin,latin-ext/85/0.97/0.82/1.00/0.17|IBM Plex Sans Arabic/sans-serif/100,200,300,400,500,600,700/arabic,cyrillic-ext,latin,latin-ext/86/0.34/0.49/1.00/0.29|Crimson Text/serif/400,400i,600,600i,700,700i/latin,latin-ext,vietnamese/87/0.33/0.44/0.00/0.45|Fjalla One/sans-serif/400/cyrillic-ext,latin,latin-ext,vietnamese/88/0.74/0.08/1.00/0.26|Chakra Petch/sans-serif/300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,thai,vietnamese/89/0.33/0.52/1.00/0.00|Public Sans/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/90/0.38/0.58/1.00/0.37|Red Hat Display/sans-serif/300,400,500,600,700,800,900,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext/91/0.31/0.52/1.00/0.32|Comfortaa/display/300,400,500,600,700/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/92/0.21/0.59/0.39/0.54|IBM Plex Mono/monospace/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/93/0.21/0.75/1.00/0.28|Lobster/display/400/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/94/0.82/0.28/0.19/0.42|Lilita One/display/400/latin,latin-ext/95/1.00/0.46/1.00/0.38|Saira Condensed/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/96/0.40/0.20/1.00/0.29|Cormorant Garamond/serif/300,300i,400,400i,500,500i,600,600i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/97/0.06/0.30/0.00/0.41|Zilla Slab/serif/300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext/98/0.38/0.51/1.00/0.08|Caveat/handwriting/400,500,600,700/cyrillic,cyrillic-ext,latin,latin-ext/99/0.21/0.17/0.00/0.80|Lexend/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/101/0.44/0.53/1.00/0.38|Maven Pro/sans-serif/400,500,600,700,800,900/latin,latin-ext,vietnamese/102/0.26/0.54/1.00/0.35|Arvo/serif/400,400i,700,700i/latin/103/0.44/0.54/0.77/0.28|Schibsted Grotesk/sans-serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/latin,latin-ext/104/0.35/0.56/1.00/0.30|Slabo 27px/serif/400/latin,latin-ext/105/0.40/0.30/1.00/0.06|Rajdhani/sans-serif/300,400,500,600,700/devanagari,latin,latin-ext/106/0.16/0.47/1.00/0.13|Asap/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/107/0.38/0.44/0.17/0.50|Noto Sans HK/sans-serif/100,200,300,400,500,600,700,800,900/chinese-hongkong,cyrillic,latin,latin-ext,vietnamese/108/0.36/0.41/1.00/0.34|Permanent Marker/handwriting/400/latin/109/0.72/0.89/0.00/0.74|Tajawal/sans-serif/200,300,400,500,700,800,900/arabic,latin/110/0.30/0.54/1.00/0.12|IBM Plex Serif/serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/111/0.32/0.53/0.54/0.23|Nanum Myeongjo/serif/400,700,800/korean,latin/112/0.11/0.42/0.00/0.45|Shadows Into Light/handwriting/400/latin/113/0.06/0.10/0.00/1.00|Sora/sans-serif/100,200,300,400,500,600,700,800/latin,latin-ext/114/0.42/0.62/1.00/0.27|Alegreya/serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/115/0.32/0.33/0.00/0.56|Barlow Semi Condensed/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,vietnamese/116/0.34/0.34/0.31/0.25|Play/sans-serif/400,700/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/117/0.40/0.51/1.00/0.16|Nanum Gothic Coding/handwriting/400,700/korean,latin/119/0.26/0.59/0.54/0.27|Rowdies/display/300,400,700/latin,latin-ext,vietnamese/120/0.87/0.51/1.00/0.17|M PLUS 1p/sans-serif/100,300,400,500,700,800,900/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,japanese,latin,latin-ext,vietnamese/121/0.25/0.53/1.00/0.19|Merriweather Sans/sans-serif/300,400,500,600,700,800,300i,400i,500i,600i,700i,800i/cyrillic-ext,latin,latin-ext,vietnamese/122/0.49/0.39/1.00/0.35|Abril Fatface/display/400/latin,latin-ext/123/0.71/0.46/1.00/0.14|Spicy Rice/display/400/latin/124/1.00/0.23/0.00/1.00|Roboto Flex/sans-serif/400/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/125/0.41/0.46/1.00/0.18|Almarai/sans-serif/300,400,700,800/arabic,latin/126/0.43/0.46/1.00/0.12|DM Serif Display/serif/400,400i/latin,latin-ext/127/0.56/0.50/0.15/0.22|Questrial/sans-serif/400/latin,latin-ext,vietnamese/128/0.39/0.55/1.00/0.35|Mate/serif/400,400i/latin,latin-ext/129/0.24/0.34/0.00/0.37|Material Symbols Rounded/monospace/100,200,300,400,500,600,700/latin/130/0.04/1.00/1.00/0.10|Inter Tight/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/131/0.43/0.44/1.00/0.31|Indie Flower/handwriting/400/latin/132/0.00/0.18/0.00/1.00|Domine/serif/400,500,600,700/latin,latin-ext/133/0.41/0.58/0.46/0.19|Concert One/display/400/latin,latin-ext/134/0.75/0.54/0.00/0.90|Be Vietnam Pro/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,vietnamese/135/0.39/0.56/1.00/0.40|Satisfy/handwriting/400/latin/136/0.22/0.05/0.00/0.99|Source Serif 4/serif/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/137/0.37/0.54/0.00/0.21|Noto Sans Thai/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,thai/138/0.35/0.47/1.00/0.34|Cinzel/serif/400,500,600,700,800,900/latin,latin-ext/139/0.14/0.70/0.00/0.17|Archivo Narrow/sans-serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext,vietnamese/140/0.53/0.34/1.00/0.24|Catamaran/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,tamil/141/0.37/0.41/1.00/0.35|Vollkorn/serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/142/0.38/0.44/0.00/0.68|Noto Kufi Arabic/sans-serif/100,200,300,400,500,600,700,800,900/arabic,latin,latin-ext,math,symbols/143/0.33/0.51/1.00/0.31|Asap Condensed/sans-serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,vietnamese/144/0.53/0.19/0.89/0.36|Signika/sans-serif/300,400,500,600,700/latin,latin-ext,vietnamese/145/0.51/0.40/0.00/0.52|Oleo Script/display/400,700/latin,latin-ext/146/0.75/0.28/0.42/0.48|Frank Ruhl Libre/serif/300,400,500,600,700,800,900/hebrew,latin,latin-ext/147/0.36/0.54/0.00/0.37|Hind Madurai/sans-serif/300,400,500,600,700/latin,latin-ext,tamil/148/0.37/0.47/1.00/0.19|Exo/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/149/0.29/0.44/1.00/0.39|Righteous/display/400/latin,latin-ext/150/0.76/0.52/1.00/0.57|Urbanist/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext/151/0.26/0.40/1.00/0.40|Acme/sans-serif/400/latin/152/0.68/0.27/1.00/0.18|Orbitron/sans-serif/400,500,600,700,800,900/latin/153/0.35/0.76/1.00/0.13|Sarabun/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i/latin,latin-ext,thai,vietnamese/154/0.36/0.39/1.00/0.24|Amatic SC/handwriting/400,700/cyrillic,hebrew,latin,latin-ext,vietnamese/155/0.08/0.00/0.00/0.21|Noto Sans Display/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/156/0.38/0.40/1.00/0.34|Bree Serif/serif/400/latin,latin-ext/157/0.74/0.50/1.00/0.15|Changa/sans-serif/200,300,400,500,600,700,800/arabic,latin,latin-ext/158/0.50/0.52/1.00/0.22|Cormorant/serif/300,400,500,600,700,300i,400i,500i,600i,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/159/0.05/0.29/0.00/0.58|Marcellus/serif/400/latin,latin-ext/160/0.25/0.43/0.00/0.64|Yanone Kaffeesatz/sans-serif/200,300,400,500,600,700/cyrillic,cyrillic-ext,latin,latin-ext,math,symbols,vietnamese/161/0.64/0.07/0.29/0.67|Pirata One/display/400/latin,latin-ext/162/0.81/0.15/0.86/0.23|Montserrat Alternates/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/163/0.22/0.69/1.00/0.32|Silkscreen/display/400,700/latin,latin-ext/164/0.22/1.00/1.00/0.00|Old Standard TT/serif/400,400i,700/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/165/0.24/0.48/0.00/0.25|League Spartan/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/166/0.38/0.43/1.00/0.41|Patua One/display/400/latin/167/0.88/0.49/1.00/0.19|Bowlby One/display/400/latin/168/1.00/0.78/0.00/0.15|Squada One/display/400/latin/169/0.97/0.34/1.00/0.05|Rubik Mono One/sans-serif/400/cyrillic,latin,latin-ext/170/0.69/1.00/1.00/0.28|Mate SC/serif/400/latin,latin-ext/171/0.26/0.49/0.24/0.25|Khand/sans-serif/300,400,500,600,700/devanagari,latin,latin-ext/172/0.51/0.24/1.00/0.10|Great Vibes/handwriting/400/cyrillic,cyrillic-ext,greek-ext,latin,latin-ext,vietnamese/173/0.16/0.08/0.00/0.77|Rubik Bubbles/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/174/1.00/0.63/0.00/1.00|ABeeZee/sans-serif/400,400i/latin,latin-ext/175/0.37/0.51/1.00/0.33|Antic Slab/serif/400/latin/176/0.23/0.42/1.00/0.09|Tinos/serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese/177/0.34/0.47/1.00/0.08|Lexend Deca/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/178/0.44/0.53/1.00/0.38|Spectral/serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i/cyrillic,latin,latin-ext,vietnamese/179/0.25/0.46/1.00/0.15|Gothic A1/sans-serif/100,200,300,400,500,600,700,800,900/korean,latin/180/0.30/0.43/1.00/0.22|Noto Serif TC/serif/200,300,400,500,600,700,800,900/chinese-traditional,cyrillic,latin,latin-ext,vietnamese/181/0.20/0.45/0.00/0.16|Noto Sans Bengali/sans-serif/100,200,300,400,500,600,700,800,900/bengali,latin,latin-ext/182/0.36/0.47/1.00/0.32|Bangers/display/400/latin,latin-ext,vietnamese/183/0.89/0.35/0.00/0.54|Amiri/serif/400,400i,700,700i/arabic,latin,latin-ext/184/0.30/0.47/0.00/0.73|Prata/serif/400/cyrillic,cyrillic-ext,latin,vietnamese/185/0.24/0.41/1.00/0.16|Baloo Paaji 2/display/400,500,600,700,800/gurmukhi,latin,latin-ext,vietnamese/186/0.37/0.55/0.07/0.42|Alfa Slab One/display/400/latin,latin-ext,vietnamese/187/1.00/0.65/1.00/0.06|Passion One/display/400,700,900/latin,latin-ext/188/1.00/0.44/1.00/0.16|Kalam/handwriting/300,400,700/devanagari,latin,latin-ext/189/0.31/0.33/0.74/0.97|Martel/serif/200,300,400,600,700,800,900/devanagari,latin,latin-ext/190/0.32/0.46/1.00/0.14|Roboto Serif/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/191/0.36/0.60/0.00/0.36|Crimson Pro/serif/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/192/0.37/0.41/0.00/0.26|Inria Sans/sans-serif/300,300i,400,400i,700,700i/latin,latin-ext/193/0.37/0.39/1.00/0.19|Zen Kaku Gothic New/sans-serif/300,400,500,700,900/cyrillic,japanese,latin,latin-ext/194/0.17/0.49/1.00/0.30|Alegreya Sans/sans-serif/100,100i,300,300i,400,400i,500,500i,700,700i,800,800i,900,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/195/0.37/0.36/1.00/0.14|Itim/handwriting/400/latin,latin-ext,thai,vietnamese/196/0.48/0.51/0.00/0.52|Saira/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/197/0.34/0.52/1.00/0.50|Noto Serif KR/serif/200,300,400,500,600,700,800,900/cyrillic,korean,latin,latin-ext,vietnamese/198/0.20/0.45/0.00/0.16|Yellowtail/handwriting/400/latin/199/0.52/0.16/0.00/0.88|Cardo/serif/400,400i,700/greek,greek-ext,latin,latin-ext/200/0.13/0.31/0.00/0.40|Sawarabi Mincho/serif/400/japanese,latin,latin-ext/201/0.33/0.63/1.00/0.12|Josefin Slab/serif/100,200,300,400,500,600,700,100i,200i,300i,400i,500i,600i,700i/latin/202/0.00/0.40/0.46/0.23|Ubuntu Mono/monospace/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext/203/0.28/0.64/1.00/0.51|Bungee/display/400/latin,latin-ext,vietnamese/204/0.99/1.00/0.99/0.16|Didact Gothic/sans-serif/400/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext/205/0.25/0.49/1.00/0.29|Chivo/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/206/0.46/0.62/1.00/0.35|Courgette/handwriting/400/latin,latin-ext/207/0.43/0.28/0.00/0.58|Lobster Two/display/400,400i,700,700i/latin/208/0.57/0.27/0.00/0.76|Alata/sans-serif/400/latin,latin-ext,vietnamese/209/0.45/0.43/1.00/0.32|Albert Sans/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext/210/0.30/0.58/1.00/0.34|Russo One/sans-serif/400/cyrillic,latin,latin-ext/211/0.98/0.75/1.00/0.06|Bodoni Moda/serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/latin,latin-ext,math,symbols/212/0.20/0.46/0.27/0.34|Readex Pro/sans-serif/200,300,400,500,600,700/arabic,latin,latin-ext,vietnamese/213/0.45/0.53/1.00/0.37|Libre Caslon Text/serif/400,400i,700/latin,latin-ext/214/0.30/0.43/0.52/0.22|Cantarell/sans-serif/400,400i,700,700i/latin,latin-ext/215/0.21/0.48/1.00/0.38|Yeseva One/display/400/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/216/0.59/0.68/0.82/0.16|Encode Sans/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/217/0.30/0.36/1.00/0.31|Space Mono/monospace/400,400i,700,700i/latin,latin-ext,vietnamese/218/0.22/0.86/1.00/0.28|Red Hat Text/sans-serif/300,400,500,600,700,300i,400i,500i,600i,700i/latin,latin-ext/219/0.25/0.49/1.00/0.33|Luckiest Guy/display/400/latin/220/1.00/0.81/1.00/0.68|Noticia Text/serif/400,400i,700,700i/latin,latin-ext,vietnamese/221/0.38/0.48/1.00/0.12|Kaushan Script/handwriting/400/latin,latin-ext/222/0.36/0.13/0.00/1.00|Rokkitt/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/223/0.44/0.73/1.00/0.11|Sawarabi Gothic/sans-serif/400/cyrillic,japanese,latin,latin-ext,vietnamese/224/0.42/0.48/1.00/0.08|Francois One/sans-serif/400/latin,latin-ext,vietnamese/225/0.81/0.34/1.00/0.22|Yantramanav/sans-serif/100,300,400,500,700,900/devanagari,latin,latin-ext/226/0.41/0.45/1.00/0.15|PT Sans Caption/sans-serif/400,700/cyrillic,cyrillic-ext,latin,latin-ext/227/0.42/0.64/1.00/0.40|Philosopher/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/228/0.35/0.53/1.00/0.35|Sacramento/handwriting/400/latin,latin-ext/229/0.00/0.01/0.00/1.00|Encode Sans Condensed/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/230/0.36/0.19/1.00/0.24|Crete Round/serif/400,400i/latin,latin-ext/231/0.60/0.42/0.21/0.16|Ubuntu Condensed/sans-serif/400/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext/232/0.46/0.22/1.00/0.54|Yatra One/display/400/devanagari,latin,latin-ext/233/0.51/0.61/1.00/0.35|DM Serif Text/serif/400,400i/latin,latin-ext/234/0.56/0.49/0.00/0.23|Zen Maru Gothic/sans-serif/300,400,500,700,900/cyrillic,greek,japanese,latin,latin-ext/235/0.17/0.49/1.00/0.38|Courier Prime/monospace/400,400i,700,700i/latin,latin-ext/237/0.29/0.92/0.00/0.39|Gloria Hallelujah/handwriting/400/latin/238/0.03/0.08/0.00/1.00|Staatliches/display/400/latin,latin-ext/239/0.73/0.44/1.00/0.16|Sen/sans-serif/400,500,600,700,800/latin,latin-ext/240/0.30/0.53/1.00/0.38|Neuton/serif/200,300,400,400i,700,800/latin,latin-ext/241/0.56/0.44/1.00/0.20|Commissioner/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/242/0.34/0.51/0.02/0.47|Kumbh Sans/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,math,symbols/243/0.30/0.48/1.00/0.34|Quattrocento Sans/sans-serif/400,400i,700,700i/latin,latin-ext/244/0.21/0.38/1.00/0.48|Tenor Sans/sans-serif/400/cyrillic,latin,latin-ext/245/0.22/0.61/1.00/0.49|Merienda/handwriting/300,400,500,600,700,800,900/latin,latin-ext,vietnamese/246/0.23/0.25/0.00/0.95|Noto Naskh Arabic/serif/400,500,600,700/arabic,latin,latin-ext,math,symbols/247/0.40/0.50/0.21/0.26|Quattrocento/serif/400,700/latin,latin-ext/248/0.19/0.43/0.00/0.50|Unna/serif/400,400i,700,700i/latin,latin-ext/249/0.24/0.34/0.38/0.18|Special Elite/display/400/latin/250/0.44/0.60/0.00/0.98|News Cycle/sans-serif/400,700/latin,latin-ext/251/0.28/0.31/1.00/0.30|Gilda Display/serif/400/latin,latin-ext/252/0.14/0.42/0.00/0.57|Taviraj/serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,thai,vietnamese/253/0.33/0.55/0.40/0.20|Gruppo/sans-serif/400/latin,latin-ext/254/0.02/0.98/0.52/0.51|JetBrains Mono/monospace/100,200,300,400,500,600,700,800,100i,200i,300i,400i,500i,600i,700i,800i/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/255/0.23/0.75/1.00/0.19|IBM Plex Sans Condensed/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/cyrillic-ext,latin,latin-ext,vietnamese/256/0.36/0.36/1.00/0.21|Dela Gothic One/display/400/cyrillic,greek,japanese,latin,latin-ext,vietnamese/257/0.93/0.69/1.00/0.31|El Messiri/sans-serif/400,500,600,700/arabic,cyrillic,latin,latin-ext/258/0.35/0.53/1.00/0.38|Poiret One/display/400/cyrillic,latin,latin-ext/259/0.00/0.39/1.00/0.29|Paytone One/sans-serif/400/latin,latin-ext,vietnamese/260/1.00/0.59/1.00/0.27|Noto Sans Tamil/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,tamil/261/0.35/0.47/1.00/0.34|Gelasio/serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext,vietnamese/262/0.38/0.44/0.00/0.58|Baskervville/serif/400,400i/latin,latin-ext/263/0.15/0.44/0.00/0.31|Noto Sans Mono/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/264/0.23/0.68/1.00/0.32|Architects Daughter/handwriting/400/latin/265/0.08/0.37/0.00/0.46|Jura/sans-serif/300,400,500,600,700/cyrillic,cyrillic-ext,greek,greek-ext,kayah-li,latin,latin-ext,vietnamese/266/0.14/0.61/0.99/0.23|Aleo/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/267/0.44/0.59/0.00/0.18|Advent Pro/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext/268/0.24/0.29/1.00/0.39|Saira Semi Condensed/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/269/0.37/0.36/1.00/0.29|Allura/handwriting/400/latin,latin-ext,vietnamese/270/0.14/0.21/0.00/0.71|Unica One/display/400/latin,latin-ext,vietnamese/271/0.29/0.54/1.00/0.15|Literata/serif/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/272/0.41/0.53/0.00/0.33|Tangerine/handwriting/400,700/latin/273/0.00/0.00/0.00/0.84|Cuprum/sans-serif/400,500,600,700,400i,500i,600i,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/274/0.48/0.30/1.00/0.30|Atkinson Hyperlegible/sans-serif/400,400i,700,700i/latin,latin-ext/275/0.40/0.54/1.00/0.35|Pathway Gothic One/sans-serif/400/latin,latin-ext/276/0.61/0.05/1.00/0.10|Geologica/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/277/0.51/0.58/1.00/0.38|Sanchez/serif/400,400i/latin,latin-ext/278/0.38/0.61/0.08/0.18|Cookie/handwriting/400/latin/279/0.37/0.10/0.00/0.67|Kosugi Maru/sans-serif/400/cyrillic,japanese,latin,latin-ext/280/0.38/0.61/0.11/0.64|Sofia/handwriting/400/latin/281/0.19/0.17/0.00/0.55|Comic Neue/handwriting/300,300i,400,400i,700,700i/latin/282/0.25/0.55/0.57/0.48|Shippori Mincho/serif/400,500,600,700,800/japanese,latin,latin-ext/283/0.21/0.60/0.00/0.35|Patrick Hand/handwriting/400/latin,latin-ext,vietnamese/284/0.35/0.14/0.84/0.57|Pridi/serif/200,300,400,500,600,700/latin,latin-ext,thai,vietnamese/285/0.59/0.66/1.00/0.16|Mitr/sans-serif/200,300,400,500,600,700/latin,latin-ext,thai,vietnamese/286/0.53/0.74/0.76/0.33|Playfair Display SC/serif/400,400i,700,700i,900,900i/cyrillic,latin,latin-ext,vietnamese/287/0.31/0.74/0.00/0.32|Onest/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic,cyrillic-ext,latin,latin-ext/288/0.39/0.56/1.00/0.44|Syne/sans-serif/400,500,600,700,800/greek,latin,latin-ext/289/0.41/0.53/1.00/0.39|Fraunces/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/290/0.39/0.52/0.00/0.44|Bai Jamjuree/sans-serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,thai,vietnamese/291/0.31/0.57/1.00/0.14|Bricolage Grotesque/sans-serif/200,300,400,500,600,700,800/latin,latin-ext,vietnamese/292/0.46/0.63/1.00/0.41|Fredoka/sans-serif/300,400,500,600,700/hebrew,latin,latin-ext/293/0.39/0.58/0.00/0.79|Vidaloka/serif/400/latin/294/0.47/0.41/0.02/0.30|DM Mono/monospace/300,300i,400,400i,500,500i/latin,latin-ext/295/0.24/0.76/1.00/0.25|Unbounded/sans-serif/200,300,400,500,600,700,800,900/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/296/0.55/0.90/1.00/0.31|League Gothic/sans-serif/400/latin,latin-ext,vietnamese/297/1.00/0.00/1.00/0.22|BIZ UDPGothic/sans-serif/400,700/cyrillic,greek-ext,japanese,latin,latin-ext/298/0.31/0.79/1.00/0.09|Ropa Sans/sans-serif/400,400i/latin,latin-ext/299/0.49/0.35/1.00/0.15|Mukta Malar/sans-serif/200,300,400,500,600,700,800/latin,latin-ext,tamil/300/0.39/0.41/1.00/0.37|Amaranth/sans-serif/400,400i,700,700i/latin/301/0.63/0.40/0.85/0.56|Baloo 2/display/400,500,600,700,800/devanagari,latin,latin-ext,vietnamese/302/0.37/0.55/0.07/0.42|Fira Sans Extra Condensed/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/303/0.47/0.21/1.00/0.21|Faustina/serif/300,400,500,600,700,800,300i,400i,500i,600i,700i,800i/latin,latin-ext,vietnamese/304/0.46/0.52/0.89/0.19|Lalezar/display/400/arabic,latin,latin-ext,vietnamese/305/1.00/0.48/1.00/0.23|Monda/sans-serif/400,500,600,700/latin,latin-ext,vietnamese/306/0.37/0.57/1.00/0.27|Material Symbols Sharp/monospace/100,200,300,400,500,600,700/latin/307/0.04/1.00/1.00/0.10|Changa One/display/400,400i/latin/308/1.00/0.61/1.00/0.12|Hammersmith One/sans-serif/400/latin,latin-ext/309/0.43/0.34/1.00/0.20|Alice/serif/400/cyrillic,cyrillic-ext,latin,latin-ext/310/0.37/0.49/0.00/0.65|Hind Vadodara/sans-serif/300,400,500,600,700/gujarati,latin,latin-ext/311/0.37/0.47/1.00/0.19|Baloo Bhaijaan 2/display/400,500,600,700,800/arabic,latin,latin-ext,vietnamese/312/0.37/0.55/0.00/0.40|Audiowide/display/400/latin,latin-ext/313/0.59/0.78/1.00/0.35|Krub/sans-serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,thai,vietnamese/314/0.24/0.44/1.00/0.30|Ultra/serif/400/latin/315/1.00/0.86/0.00/0.40|Epilogue/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/316/0.34/0.48/1.00/0.42|Nerko One/handwriting/400/latin,latin-ext/317/0.73/0.47/0.00/1.00|Titan One/display/400/latin,latin-ext/318/1.00/0.73/1.00/0.53|Parisienne/handwriting/400/latin,latin-ext/319/0.05/0.13/0.00/1.00|Abhaya Libre/serif/400,500,600,700,800/latin,latin-ext,sinhala/320/0.33/0.56/0.23/0.10|Bad Script/handwriting/400/cyrillic,latin/321/0.00/0.00/0.00/0.60|VT323/monospace/400/latin,latin-ext,vietnamese/322/0.50/0.58/0.00/0.17|Noto Sans Malayalam/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,malayalam/323/0.34/0.49/1.00/0.34|Volkhov/serif/400,400i,700,700i/latin/324/0.40/0.40/1.00/0.09|Noto Serif Bengali/serif/100,200,300,400,500,600,700,800,900/bengali,latin,latin-ext/325/0.39/0.51/0.00/0.33|Hanken Grotesk/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic-ext,latin,latin-ext,vietnamese/326/0.38/0.54/1.00/0.34|Arsenal/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/327/0.23/0.26/1.00/0.27|Homemade Apple/handwriting/400/latin/328/0.00/0.05/0.00/0.85|Rozha One/serif/400/devanagari,latin,latin-ext/329/0.49/0.54/1.00/0.21|Mandali/sans-serif/400/latin,telugu/330/0.29/0.59/0.76/0.39|Handlee/handwriting/400/latin/331/0.23/0.34/0.66/0.69|Nanum Pen Script/handwriting/400/korean,latin/332/0.25/0.42/0.00/0.96|Wix Madefor Text/sans-serif/400,400i,500,500i,600,600i,700,700i,800,800i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/333/0.28/0.56/1.00/0.29|Press Start 2P/display/400/cyrillic,cyrillic-ext,greek,latin,latin-ext/334/0.06/1.00/1.00/0.00|Antonio/sans-serif/100,200,300,400,500,600,700/latin,latin-ext/335/0.59/0.13/1.00/0.28|PT Mono/monospace/400/cyrillic,cyrillic-ext,latin,latin-ext/336/0.24/0.81/1.00/0.38|Playball/display/400/latin,latin-ext,vietnamese/337/0.40/0.24/0.00/0.67|Sorts Mill Goudy/serif/400,400i/latin,latin-ext/338/0.22/0.45/0.00/0.58|Sriracha/handwriting/400/latin,latin-ext,thai,vietnamese/339/0.55/0.33/0.00/0.52|Playfair/serif/300,400,500,600,700,800,900,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/340/0.34/0.60/0.00/0.47|Petrona/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/341/0.23/0.38/0.00/0.26|Blinker/sans-serif/100,200,300,400,600,700,800,900/latin,latin-ext/342/0.49/0.54/1.00/0.23|Forum/display/400/cyrillic,cyrillic-ext,latin,latin-ext/343/0.19/0.45/0.00/0.52|Zeyada/handwriting/400/latin/344/0.00/0.00/0.00/1.00|Vazirmatn/sans-serif/100,200,300,400,500,600,700,800,900/arabic,latin,latin-ext/345/0.41/0.48/1.00/0.29|Rammetto One/display/400/latin,latin-ext/346/1.00/0.64/1.00/0.44|Istok Web/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext/347/0.37/0.55/1.00/0.23|Alex Brush/handwriting/400/latin,latin-ext,vietnamese/348/0.26/0.31/0.00/0.45|Viga/sans-serif/400/latin,latin-ext/349/0.72/0.48/1.00/0.16|Reenie Beanie/handwriting/400/latin/350/0.00/0.20/0.00/1.00|Ramabhadra/sans-serif/400/latin,telugu/351/0.71/0.62/1.00/0.21|Lusitana/serif/400,700/latin/352/0.31/0.35/0.37/0.31|Carter One/display/400/latin/353/0.89/0.42/0.00/0.86|Sofia Sans Condensed/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext/354/0.50/0.20/0.52/0.25|Sofia Sans/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext/355/0.44/0.49/0.50/0.25|Eczar/serif/400,500,600,700,800/devanagari,greek,greek-ext,latin,latin-ext/356/0.45/0.43/0.00/0.22|Radio Canada/sans-serif/300,400,500,600,700,300i,400i,500i,600i,700i/canadian-aboriginal,latin,latin-ext,vietnamese/357/0.41/0.55/1.00/0.32|Gudea/sans-serif/400,400i,700/latin,latin-ext/358/0.32/0.40/1.00/0.22|Alegreya Sans SC/sans-serif/100,100i,300,300i,400,400i,500,500i,700,700i,800,800i,900,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/359/0.37/0.52/1.00/0.02|Aclonica/sans-serif/400/latin/360/0.60/0.54/0.46/0.86|Anuphan/sans-serif/100,200,300,400,500,600,700/latin,latin-ext,thai,vietnamese/361/0.34/0.49/1.00/0.24|Oxanium/display/200,300,400,500,600,700,800/latin,latin-ext/362/0.33/0.54/1.00/0.00|Noto Sans Devanagari/sans-serif/100,200,300,400,500,600,700,800,900/devanagari,latin,latin-ext/363/0.36/0.47/1.00/0.34|Londrina Solid/display/100,300,400,900/latin/364/1.00/0.27/0.00/1.00|Cousine/monospace/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese/365/0.27/0.80/1.00/0.20|Mada/sans-serif/200,300,400,500,600,700,800,900/arabic,latin,latin-ext/366/0.36/0.41/1.00/0.33|Balsamiq Sans/display/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext/367/0.55/0.53/0.00/0.37|Secular One/sans-serif/400/hebrew,latin,latin-ext/368/0.75/0.50/1.00/0.25|Quantico/sans-serif/400,400i,700,700i/latin/369/0.44/0.54/1.00/0.00|Monoton/display/400/latin/370/0.76/0.90/0.00/0.27|Share Tech Mono/monospace/400/latin/371/0.25/0.74/1.00/0.07|Neucha/handwriting/400/cyrillic,latin/372/0.31/0.15/0.90/0.57|Rock Salt/handwriting/400/latin/373/0.33/0.53/0.00/0.64|Reem Kufi/sans-serif/400,500,600,700/arabic,latin,latin-ext,vietnamese/374/0.37/0.39/1.00/0.29|Ruda/sans-serif/400,500,600,700,800,900/cyrillic,latin,latin-ext,vietnamese/375/0.37/0.48/1.00/0.40|Creepster/display/400/latin/376/0.74/0.48/0.00/0.96|STIX Two Text/serif/400,500,600,700,400i,500i,600i,700i/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/377/0.36/0.47/0.00/0.34|Fira Mono/monospace/400,500,700/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext/378/0.19/0.71/1.00/0.20|Noto Sans Hebrew/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic-ext,greek-ext,hebrew,latin,latin-ext/379/0.35/0.46/1.00/0.34|Pangolin/handwriting/400/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/380/0.50/0.38/0.00/0.41|Alef/sans-serif/400,700/hebrew,latin/381/0.37/0.54/0.68/0.41|Six Caps/sans-serif/400/latin/382/0.79/0.00/1.00/0.24|Julius Sans One/sans-serif/400/latin,latin-ext/383/0.03/0.74/1.00/0.19|Damion/handwriting/400/latin,latin-ext/384/0.49/0.24/0.00/0.60|Varela/sans-serif/400/latin,latin-ext/385/0.38/0.56/1.00/0.17|Qwitcher Grypen/handwriting/400,700/latin,latin-ext,vietnamese/386/0.09/0.11/0.00/0.53|Zen Old Mincho/serif/400,500,600,700,900/cyrillic,greek,japanese,latin,latin-ext/387/0.25/0.51/0.00/0.67|Niramit/sans-serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,thai,vietnamese/388/0.36/0.43/1.00/0.30|Pinyon Script/handwriting/400/latin,latin-ext,vietnamese/389/0.06/0.11/0.00/0.76|Instrument Sans/sans-serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext/390/0.31/0.52/1.00/0.25|Anonymous Pro/monospace/400,400i,700,700i/cyrillic,greek,latin,latin-ext/391/0.23/0.81/1.00/0.33|Marck Script/handwriting/400/cyrillic,latin,latin-ext/392/0.11/0.25/0.50/0.55|Noto Serif SC/serif/200,300,400,500,600,700,800,900/chinese-simplified,cyrillic,latin,latin-ext,vietnamese/393/0.20/0.45/0.00/0.16|Nothing You Could Do/handwriting/400/latin/394/0.00/0.34/0.00/1.00|Cormorant Infant/serif/300,300i,400,400i,500,500i,600,600i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/395/0.05/0.30/0.00/0.41|Newsreader/serif/200,300,400,500,600,700,800,200i,300i,400i,500i,600i,700i,800i/latin,latin-ext,vietnamese/396/0.27/0.44/0.38/0.23|Amita/handwriting/400,700/devanagari,latin,latin-ext/397/0.18/0.16/0.19/0.42|Darker Grotesque/sans-serif/300,400,500,600,700,800,900/latin,latin-ext,vietnamese/398/0.20/0.55/1.00/0.39|Basic/sans-serif/400/latin,latin-ext/399/0.53/0.42/0.50/0.46|GFS Didot/serif/400/greek/400/0.24/0.53/0.94/0.14|Hind Guntur/sans-serif/300,400,500,600,700/latin,latin-ext,telugu/401/0.37/0.47/1.00/0.19|Martel Sans/sans-serif/200,300,400,600,700,800,900/devanagari,latin,latin-ext/402/0.29/0.41/1.00/0.26|Gowun Batang/serif/400,700/korean,latin,latin-ext,vietnamese/403/0.13/0.53/0.00/0.53|Libre Bodoni/serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext,vietnamese/404/0.31/0.34/0.26/0.22|Suez One/serif/400/hebrew,latin,latin-ext/405/0.90/0.47/0.85/0.17|Economica/sans-serif/400,400i,700,700i/latin,latin-ext/406/0.38/0.08/1.00/0.42|Calistoga/display/400/latin,latin-ext,vietnamese/407/0.83/0.41/0.00/0.50|Cabin Condensed/sans-serif/400,500,600,700/latin,latin-ext,vietnamese/408/0.47/0.20/1.00/0.24|Caveat Brush/handwriting/400/latin,latin-ext/409/0.60/0.20/0.00/0.26|Pontano Sans/sans-serif/300,400,500,600,700/latin,latin-ext/410/0.34/0.44/1.00/0.36|BenchNine/sans-serif/300,400,700/latin,latin-ext/411/0.51/0.02/0.00/0.43|Fugaz One/display/400/latin/412/0.80/0.45/1.00/0.20|Black Ops One/display/400/cyrillic-ext,latin,latin-ext,vietnamese/413/1.00/0.81/1.00/0.00|Pragati Narrow/sans-serif/400,700/devanagari,latin,latin-ext/414/0.55/0.34/1.00/0.16|Leckerli One/handwriting/400/latin/415/0.64/0.40/0.00/0.60|Covered By Your Grace/handwriting/400/latin/416/0.21/0.07/0.00/0.84|Italianno/handwriting/400/latin,latin-ext,vietnamese/417/0.10/0.01/0.00/0.68|Averia Serif Libre/display/300,300i,400,400i,700,700i/latin/418/0.43/0.54/0.00/0.35|Sansita/sans-serif/400,400i,700,700i,800,800i,900,900i/latin,latin-ext/419/0.69/0.34/1.00/0.29|Alexandria/sans-serif/100,200,300,400,500,600,700,800,900/arabic,latin,latin-ext,vietnamese/420/0.54/0.64/1.00/0.37|Actor/sans-serif/400/latin/421/0.33/0.37/1.00/0.43|Sarala/sans-serif/400,700/devanagari,latin,latin-ext/422/0.42/0.44/1.00/0.19|Holtwood One SC/serif/400/latin,latin-ext/423/1.00/1.00/1.00/0.07|Kiwi Maru/serif/300,400,500/cyrillic,japanese,latin,latin-ext/424/0.34/0.61/0.00/0.51|IBM Plex Sans Thai/sans-serif/100,200,300,400,500,600,700/cyrillic-ext,latin,latin-ext,thai/425/0.34/0.49/1.00/0.29|Karma/serif/300,400,500,600,700/devanagari,latin,latin-ext/426/0.30/0.49/1.00/0.22|Mr Dafoe/handwriting/400/latin,latin-ext/427/0.51/0.08/0.00/0.65|Big Shoulders Display/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/428/0.53/0.00/1.00/0.35|Electrolize/sans-serif/400/latin/429/0.33/0.44/0.12/0.18|Khula/sans-serif/300,400,600,700,800/devanagari,latin,latin-ext/430/0.33/0.48/1.00/0.23|Cinzel Decorative/display/400,700,900/latin/431/0.20/0.77/0.33/0.17|Andika/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/432/0.33/0.43/1.00/0.52|Shrikhand/display/400/gujarati,latin,latin-ext/433/1.00/0.69/0.00/0.48|Adamina/serif/400/latin/434/0.36/0.44/0.02/0.25|Days One/sans-serif/400/latin/435/0.82/0.91/1.00/0.36|Voltaire/sans-serif/400/latin,latin-ext,vietnamese/436/0.50/0.19/1.00/0.28|Charm/handwriting/400,700/latin,latin-ext,thai,vietnamese/437/0.10/0.00/0.00/0.49|Black Han Sans/sans-serif/400/korean,latin/438/1.00/0.67/1.00/0.17|Glegoo/serif/400,700/devanagari,latin,latin-ext/439/0.28/0.52/1.00/0.27|Arapey/serif/400,400i/latin/440/0.26/0.43/1.00/0.17|Lemonada/display/300,400,500,600,700/arabic,latin,latin-ext,vietnamese/441/0.42/0.64/0.00/0.80|Syncopate/sans-serif/400,700/latin/442/0.00/1.00/1.00/0.60|Judson/serif/400,400i,700/latin,latin-ext,vietnamese/443/0.39/0.60/1.00/0.21|Shippori Mincho B1/serif/400,500,600,700,800/japanese,latin,latin-ext/444/0.21/0.60/0.00/0.34|Allison/handwriting/400/latin,latin-ext,vietnamese/445/0.11/0.00/0.00/0.47|Athiti/sans-serif/200,300,400,500,600,700/latin,latin-ext,thai,vietnamese/446/0.21/0.52/1.00/0.19|Racing Sans One/display/400/latin,latin-ext/447/1.00/0.63/1.00/0.41|Golos Text/sans-serif/400,500,600,700,800,900/cyrillic,cyrillic-ext,latin,latin-ext/448/0.41/0.61/1.00/0.31|Julee/handwriting/400/latin,latin-ext/449/0.33/0.26/0.00/0.61|Belleza/sans-serif/400/latin,latin-ext/450/0.32/0.43/1.00/0.41|Coda/display/400,800/latin,latin-ext/451/0.45/0.47/0.21/0.69|Rufina/serif/400,700/latin,latin-ext/452/0.28/0.44/1.00/0.16|M PLUS 1/sans-serif/100,200,300,400,500,600,700,800,900/japanese,latin,latin-ext,vietnamese/453/0.28/0.59/1.00/0.23|Chewy/display/400/latin/454/0.92/0.20/0.00/1.00|Fira Code/monospace/300,400,500,600,700/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext/455/0.19/0.71/1.00/0.30|Laila/sans-serif/300,400,500,600,700/devanagari,latin,latin-ext/456/0.28/0.46/1.00/0.45|Jaldi/sans-serif/400,700/devanagari,latin,latin-ext/457/0.40/0.45/0.62/0.36|Georama/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/458/0.40/0.45/1.00/0.54|Berkshire Swash/handwriting/400/latin,latin-ext/459/0.68/0.39/0.00/1.00|Yrsa/serif/300,400,500,600,700,300i,400i,500i,600i,700i/latin,latin-ext,vietnamese/460/0.40/0.46/0.09/0.22|Bevan/serif/400,400i/latin,latin-ext,vietnamese/461/1.00/0.74/1.00/0.12|Seaweed Script/display/400/latin,latin-ext/462/0.24/0.05/0.00/0.68|Kreon/serif/300,400,500,600,700/latin,latin-ext/463/0.48/0.32/1.00/0.25|Saira Extra Condensed/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/464/0.47/0.04/1.00/0.29|Gochi Hand/handwriting/400/latin/465/0.50/0.39/0.00/1.00|Lustria/serif/400/latin/466/0.18/0.36/0.00/0.33|Alatsi/sans-serif/400/cyrillic-ext,latin,latin-ext,vietnamese/467/0.62/0.35/1.00/0.24|Noto Serif Display/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/468/0.24/0.50/0.00/0.35|Alumni Sans/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/469/0.50/0.23/1.00/0.25|Michroma/sans-serif/400/latin,latin-ext/470/0.32/1.00/1.00/0.46|Telex/sans-serif/400/latin,latin-ext/471/0.38/0.43/1.00/0.19|Grandstander/display/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/472/0.42/0.50/0.00/1.00|Jua/sans-serif/400/korean,latin/473/0.63/0.45/0.00/0.78|Akshar/sans-serif/300,400,500,600,700/devanagari,latin,latin-ext/474/0.57/0.28/0.13/0.11|Gravitas One/display/400/latin/475/0.87/1.00/0.00/0.53|Armata/sans-serif/400/latin,latin-ext/476/0.25/0.48/1.00/0.23|Nanum Brush Script/handwriting/400/korean,latin/477/0.08/0.25/0.00/0.83|Gabarito/display/400,500,600,700,800,900/latin,latin-ext/478/0.52/0.55/1.00/0.27|Cabin Sketch/display/400,700/latin/479/0.42/0.46/0.00/0.36|Palanquin/sans-serif/100,200,300,400,500,600,700/devanagari,latin,latin-ext/480/0.33/0.47/1.00/0.23|Arbutus Slab/serif/400/latin,latin-ext/481/0.44/0.55/0.10/0.30|Marcellus SC/serif/400/latin,latin-ext/482/0.23/0.46/0.00/0.56|Do Hyeon/sans-serif/400/korean,latin/483/0.75/0.54/1.00/0.25|Herr Von Muellerhoff/handwriting/400/latin,latin-ext/484/0.04/0.00/0.00/0.53|Kameron/serif/400,500,600,700/latin,latin-ext/485/0.43/0.64/0.00/0.50|David Libre/serif/400,500,700/hebrew,latin,latin-ext,math,symbols,vietnamese/486/0.26/0.31/0.00/0.43|Mrs Saint Delafield/handwriting/400/latin,latin-ext/487/0.04/0.00/0.00/0.61|Fredericka the Great/display/400/latin,latin-ext/488/0.46/0.51/0.00/0.69|Brygada 1918/serif/400,500,600,700,400i,500i,600i,700i/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/489/0.25/0.48/0.16/0.22|PT Serif Caption/serif/400,400i/cyrillic,cyrillic-ext,latin,latin-ext/490/0.46/0.64/0.61/0.26|Noto Nastaliq Urdu/serif/400,500,600,700/arabic,latin,latin-ext/491/0.43/0.45/0.21/0.26|Corben/display/400,700/latin,latin-ext/492/0.45/0.60/0.00/0.54|Gupter/serif/400,500,700/latin/493/0.34/0.38/0.01/0.27|Carrois Gothic/sans-serif/400/latin/494/0.35/0.47/1.00/0.42|Candal/sans-serif/400/latin/495/0.82/0.67/0.91/0.71|K2D/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i/latin,latin-ext,thai,vietnamese/496/0.42/0.52/1.00/0.34|Aldrich/sans-serif/400/latin/497/0.47/0.69/1.00/0.14|Besley/serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/latin,latin-ext/498/0.34/0.56/0.00/0.46|Sintony/sans-serif/400,700/latin,latin-ext/499/0.33/0.48/1.00/0.23|Cantata One/serif/400/latin,latin-ext/500/0.33/0.51/1.00/0.13|Contrail One/display/400/latin/501/0.67/0.18/1.00/0.32|Poetsen One/display/400/latin,latin-ext/502/0.96/0.52/0.00/1.00|Palanquin Dark/sans-serif/400,500,600,700/devanagari,latin,latin-ext/503/0.67/0.52/1.00/0.21|La Belle Aurore/handwriting/400/latin/504/0.00/0.00/0.00/1.00|Shadows Into Light Two/handwriting/400/latin,latin-ext/505/0.13/0.16/0.00/1.00|Allerta Stencil/sans-serif/400/latin/506/0.41/0.52/1.00/0.37|Anek Malayalam/sans-serif/100,200,300,400,500,600,700,800/latin,latin-ext,malayalam/507/0.43/0.53/1.00/0.19|Antic/sans-serif/400/latin/508/0.20/0.34/1.00/0.20|BioRhyme/serif/200,300,400,500,600,700,800/latin,latin-ext/509/0.49/0.77/0.00/0.31|Boogaloo/display/400/latin/510/0.74/0.15/1.00/0.38|Podkova/serif/400,500,600,700,800/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/511/0.40/0.60/1.00/0.12|Nixie One/display/400/latin/512/0.00/0.69/0.00/0.28|MuseoModerno/display/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/513/0.42/0.59/1.00/0.43|Arizonia/handwriting/400/latin,latin-ext,vietnamese/514/0.23/0.24/0.00/0.65|Tomorrow/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext/515/0.35/0.60/1.00/0.00|Graduate/serif/400/latin/516/0.30/0.98/1.00/0.00|Delius/handwriting/400/latin/517/0.28/0.44/0.69/0.81|Just Another Hand/handwriting/400/latin/518/0.45/0.00/0.00/0.91|Livvic/sans-serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,900,900i/latin,latin-ext,vietnamese/519/0.31/0.48/1.00/0.29|Share/sans-serif/400,400i,700,700i/latin,latin-ext/520/0.41/0.39/1.00/0.42|Odibee Sans/display/400/latin/521/0.69/0.02/1.00/0.09|Nobile/sans-serif/400,400i,500,500i,700,700i/latin,latin-ext/522/0.36/0.46/0.97/0.65|Bowlby One SC/display/400/latin,latin-ext/523/0.92/1.00/0.00/0.42|Annie Use Your Telescope/handwriting/400/latin/524/0.00/0.05/0.00/1.00|Spinnaker/sans-serif/400/latin,latin-ext/525/0.30/0.56/1.00/0.19|Rye/display/400/latin,latin-ext/526/0.69/0.52/0.00/0.40|Pathway Extreme/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/527/0.37/0.62/1.00/0.18|Cutive Mono/monospace/400/latin,latin-ext/528/0.04/1.00/0.00/0.39|Krona One/sans-serif/400/latin,latin-ext/529/0.57/0.85/1.00/0.52|Zen Kaku Gothic Antique/sans-serif/300,400,500,700,900/cyrillic,japanese,latin,latin-ext/530/0.17/0.49/1.00/0.30|Overlock/display/400,400i,700,700i,900,900i/latin,latin-ext/531/0.26/0.29/1.00/0.62|Mali/handwriting/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,thai,vietnamese/532/0.21/0.47/0.00/0.51|Ovo/serif/400/latin/533/0.28/0.51/0.00/0.42|Fresca/sans-serif/400/latin,latin-ext/534/0.41/0.33/1.00/0.32|Italiana/serif/400/latin/535/0.07/0.36/1.00/0.28|Halant/serif/300,400,500,600,700/devanagari,latin,latin-ext/536/0.24/0.40/0.84/0.35|Chonburi/display/400/latin,latin-ext,thai,vietnamese/537/0.61/0.80/0.48/0.21|Fahkwang/sans-serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,thai,vietnamese/538/0.27/0.76/1.00/0.28|Cedarville Cursive/handwriting/400/latin/539/0.00/0.11/0.00/0.91|Trirong/serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,thai,vietnamese/540/0.29/0.57/1.00/0.19|Averia Libre/display/300,300i,400,400i,700,700i/latin/541/0.43/0.51/0.00/0.31|Padauk/sans-serif/400,700/latin,latin-ext,myanmar/542/0.35/0.65/1.00/0.38|Coming Soon/handwriting/400/latin/543/0.02/0.19/0.00/0.83|Kurale/serif/400/cyrillic,cyrillic-ext,devanagari,latin,latin-ext/544/0.34/0.46/0.00/0.35|Overpass Mono/monospace/300,400,500,600,700/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/545/0.18/0.84/1.00/0.32|Oranienbaum/serif/400/cyrillic,cyrillic-ext,latin,latin-ext/546/0.27/0.30/0.00/0.31|Sofia Sans Extra Condensed/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext/547/0.60/0.01/0.53/0.24|Manjari/sans-serif/100,400,700/latin,latin-ext,malayalam/548/0.33/0.52/0.41/0.54|Ms Madi/handwriting/400/latin,latin-ext,vietnamese/549/0.11/0.12/0.00/0.73|Kosugi/sans-serif/400/cyrillic,japanese,latin,latin-ext/550/0.34/0.61/1.00/0.43|Rasa/serif/300,400,500,600,700,300i,400i,500i,600i,700i/gujarati,latin,latin-ext,vietnamese/551/0.40/0.46/0.09/0.22|Lateef/serif/200,300,400,500,600,700,800/arabic,latin,latin-ext/552/0.49/0.44/0.19/0.18|Ibarra Real Nova/serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext/553/0.18/0.44/0.00/0.30|Allerta/sans-serif/400/latin/554/0.43/0.52/1.00/0.49|Scada/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext/555/0.46/0.46/1.00/0.16|Castoro/serif/400,400i/latin,latin-ext/556/0.40/0.43/0.00/0.58|Average Sans/sans-serif/400/latin,latin-ext/557/0.36/0.37/1.00/0.19|Klee One/handwriting/400,600/cyrillic,greek-ext,japanese,latin,latin-ext/558/0.11/0.67/0.00/0.61|Montserrat Subrayada/sans-serif/400,700/latin/559/0.59/1.00/1.00/0.00|Biryani/sans-serif/200,300,400,600,700,800,900/devanagari,latin,latin-ext/560/0.34/0.42/1.00/0.20|Sigmar One/display/400/latin,latin-ext,vietnamese/561/1.00/0.98/0.00/0.17|Rancho/handwriting/400/latin/562/0.51/0.10/0.00/0.87|Noto Sans Khmer/sans-serif/100,200,300,400,500,600,700,800,900/khmer,latin,latin-ext/563/0.35/0.47/1.00/0.34|Baloo Da 2/display/400,500,600,700,800/bengali,latin,latin-ext,vietnamese/564/0.37/0.55/0.07/0.42|Petit Formal Script/handwriting/400/latin,latin-ext/565/0.08/0.63/0.00/0.92|Marmelad/sans-serif/400/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/566/0.36/0.49/0.02/0.50|Bellefair/serif/400/hebrew,latin,latin-ext/567/0.14/0.29/0.86/0.41|Wallpoet/display/400/latin/568/0.63/1.00/1.00/0.00|Yesteryear/handwriting/400/latin/569/0.44/0.04/0.00/1.00|Inknut Antiqua/serif/300,400,500,600,700,800,900/devanagari,latin,latin-ext/570/0.36/0.54/1.00/0.12|Cormorant Upright/serif/300,400,500,600,700/latin,latin-ext,vietnamese/571/0.07/0.25/0.00/0.49|Knewave/display/400/latin,latin-ext/572/0.88/0.25/0.00/0.58|Norican/handwriting/400/latin,latin-ext/573/0.57/0.24/0.00/0.81|Metrophobic/sans-serif/400/latin,latin-ext,vietnamese/574/0.30/0.58/1.00/0.29|Hepta Slab/serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/575/0.27/0.71/0.63/0.15|Galada/display/400/bengali,latin/576/0.82/0.28/0.00/0.48|Pattaya/sans-serif/400/cyrillic,latin,latin-ext,thai,vietnamese/577/0.82/0.28/0.00/0.30|Grand Hotel/handwriting/400/latin,latin-ext/578/0.39/0.00/0.00/1.00|Koulen/display/400/khmer,latin/579/0.66/0.52/1.00/0.14|UnifrakturMaguntia/display/400/latin/580/0.52/0.40/0.00/0.44|Amiko/sans-serif/400,600,700/devanagari,latin,latin-ext/581/0.28/0.55/1.00/0.21|Caudex/serif/400,400i,700,700i/greek,greek-ext,latin,latin-ext/582/0.23/0.46/0.00/0.24|Rambla/sans-serif/400,400i,700,700i/latin,latin-ext/583/0.49/0.34/1.00/0.27|Jomhuria/display/400/arabic,latin,latin-ext/584/1.00/0.39/1.00/0.28|Oooh Baby/handwriting/400/latin,latin-ext,vietnamese/585/0.00/0.21/0.00/0.50|Irish Grover/display/400/latin/586/0.55/0.50/0.00/0.68|RocknRoll One/sans-serif/400/japanese,latin,latin-ext/587/0.56/0.60/1.00/0.33|Bungee Shade/display/400/latin,latin-ext,vietnamese/588/0.82/1.00/0.00/0.14|Miriam Libre/sans-serif/400,700/hebrew,latin,latin-ext/589/0.35/0.50/0.07/0.34|Markazi Text/serif/400,500,600,700/arabic,latin,latin-ext,vietnamese/590/0.55/0.48/0.00/0.04|Radley/serif/400,400i/latin,latin-ext/591/0.38/0.63/0.00/0.40|Big Shoulders Text/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/592/0.57/0.05/1.00/0.35|Noto Serif Devanagari/serif/100,200,300,400,500,600,700,800,900/devanagari,latin,latin-ext/593/0.38/0.51/0.00/0.33|Kristi/handwriting/400/latin/594/0.25/0.00/0.00/0.38|IM Fell English/serif/400,400i/latin/595/0.34/0.38/0.00/0.64|BIZ UDGothic/sans-serif/400,700/cyrillic,greek-ext,japanese,latin,latin-ext/596/0.29/0.50/1.00/0.09|Limelight/display/400/latin,latin-ext/597/0.67/0.70/1.00/0.23|Encode Sans Semi Condensed/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/598/0.32/0.28/1.00/0.23|Lemon/display/400/latin,latin-ext/599/0.89/0.64/0.00/0.78|Niconne/handwriting/400/latin,latin-ext/600/0.36/0.30/0.00/0.72|Glory/sans-serif/100,200,300,400,500,600,700,800,100i,200i,300i,400i,500i,600i,700i,800i/latin,latin-ext,vietnamese/601/0.31/0.35/0.00/0.63|Rochester/handwriting/400/latin/602/0.30/0.11/0.00/1.00|Noto Sans Telugu/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,telugu/603/0.34/0.49/1.00/0.34|M PLUS 2/sans-serif/100,200,300,400,500,600,700,800,900/japanese,latin,latin-ext,vietnamese/604/0.28/0.57/1.00/0.27|Rosario/sans-serif/300,400,500,600,700,300i,400i,500i,600i,700i/latin,latin-ext,vietnamese/605/0.38/0.35/1.00/0.49|Waiting for the Sunrise/handwriting/400/latin/606/0.00/0.09/0.00/0.97|Bungee Inline/display/400/latin,latin-ext,vietnamese/607/0.99/1.00/0.00/0.16|Trocchi/serif/400/latin,latin-ext/608/0.52/0.53/0.50/0.24|Proza Libre/sans-serif/400,400i,500,500i,600,600i,700,700i,800,800i/latin,latin-ext/609/0.30/0.44/1.00/0.56|Alegreya SC/serif/400,400i,500,500i,700,700i,800,800i,900,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/610/0.40/0.60/0.00/0.34|Oxygen Mono/monospace/400/latin,latin-ext/611/0.20/0.70/1.00/0.23|B612/sans-serif/400,400i,700,700i/latin/612/0.31/0.43/1.00/0.47|Love Ya Like A Sister/display/400/latin,latin-ext/613/0.40/0.38/0.00/0.00|Enriqueta/serif/400,500,600,700/latin,latin-ext/614/0.34/0.39/0.73/0.18|Fanwood Text/serif/400,400i/latin/615/0.23/0.31/0.00/0.55|Magra/sans-serif/400,700/latin,latin-ext/616/0.49/0.34/1.00/0.21|Pixelify Sans/display/400,500,600,700/cyrillic,latin,latin-ext/617/0.54/0.73/1.00/0.00|IBM Plex Sans KR/sans-serif/100,200,300,400,500,600,700/korean,latin,latin-ext/618/0.34/0.49/1.00/0.29|Maitree/serif/200,300,400,500,600,700/latin,latin-ext,thai,vietnamese/619/0.28/0.56/0.14/0.26|Grenze Gotisch/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/620/0.67/0.35/0.00/0.54|Cambay/sans-serif/400,400i,700,700i/devanagari,latin,latin-ext/621/0.30/0.46/1.00/0.15|Schoolbell/handwriting/400/latin/622/0.19/0.14/0.00/0.76|DotGothic16/sans-serif/400/cyrillic,japanese,latin,latin-ext/623/0.30/0.62/1.00/0.00|Zen Kurenaido/sans-serif/400/cyrillic,greek,japanese,latin,latin-ext/624/0.08/0.33/0.79/0.45|Poller One/display/400/latin/625/0.79/0.78/1.00/0.52|Major Mono Display/monospace/400/latin,latin-ext,vietnamese/626/0.00/1.00/1.00/0.14|Jockey One/sans-serif/400/latin,latin-ext/627/0.91/0.36/1.00/0.06|Macondo/display/400/latin/628/0.23/0.30/0.91/0.95|Quintessential/handwriting/400/latin,latin-ext/629/0.12/0.06/0.00/0.97|Spline Sans/sans-serif/300,400,500,600,700/latin,latin-ext/630/0.44/0.41/1.00/0.30|Molengo/sans-serif/400/latin,latin-ext/631/0.30/0.41/1.00/0.17|Cormorant SC/serif/300,400,500,600,700/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/632/0.12/0.55/0.00/0.41|Lexend Zetta/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/633/0.17/1.00/1.00/0.38|Bentham/serif/400/latin/634/0.26/0.51/0.00/0.35|Hahmlet/serif/100,200,300,400,500,600,700,800,900/korean,latin,latin-ext,vietnamese/635/0.33/0.60/0.00/0.19|Spectral SC/serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i/cyrillic,latin,latin-ext,vietnamese/636/0.34/0.93/1.00/0.04|Lexend Exa/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/637/0.30/0.84/1.00/0.38|Calligraffitti/handwriting/400/latin/638/0.02/0.00/0.00/0.83|Noto Emoji/sans-serif/300,400,500,600,700/emoji/639/0.00/1.00/1.00/0.00|Buenard/serif/400,700/latin,latin-ext/640/0.30/0.37/0.32/0.27|Mansalva/handwriting/400/greek,latin,latin-ext,vietnamese/641/0.24/0.27/0.00/0.44|Brawler/serif/400,700/latin/642/0.41/0.50/1.00/0.20|Gabriela/serif/400/cyrillic,cyrillic-ext,latin,latin-ext/643/0.34/0.44/0.00/0.40|B612 Mono/monospace/400,400i,700,700i/latin/644/0.16/0.71/0.73/0.52|Dongle/sans-serif/300,400,700/korean,latin,latin-ext,vietnamese/645/0.61/0.54/0.53/0.44|Sniglet/display/400,800/latin,latin-ext/646/0.48/0.36/0.00/1.00|Stardos Stencil/display/400,700/latin/647/0.45/0.53/0.00/0.22|Style Script/handwriting/400/latin,latin-ext,vietnamese/648/0.32/0.02/0.00/0.68|Tenali Ramakrishna/sans-serif/400/latin,telugu/649/0.42/0.68/1.00/0.20|Vesper Libre/serif/400,500,700,900/devanagari,latin,latin-ext/650/0.39/0.45/0.71/0.23|IM Fell DW Pica/serif/400,400i/latin/651/0.37/0.33/0.00/0.82|Turret Road/display/200,300,400,500,700,800/latin,latin-ext/652/0.12/0.60/1.00/0.00|Dawning of a New Day/handwriting/400/latin/653/0.00/0.03/0.00/0.58|Yusei Magic/sans-serif/400/japanese,latin,latin-ext/654/0.47/0.49/0.31/0.44|Azeret Mono/monospace/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext/655/0.32/0.91/1.00/0.25|Fjord One/serif/400/latin/656/0.28/0.33/0.00/0.60|Antic Didone/serif/400/latin/657/0.09/0.42/0.98/0.17|Short Stack/handwriting/400/latin/658/0.24/0.64/0.00/1.00|Coustard/serif/400,900/latin/659/0.60/0.59/0.00/0.73|Gurajada/serif/400/latin,telugu/660/0.83/0.38/1.00/0.13|Goudy Bookletter 1911/serif/400/latin/661/0.32/0.37/0.00/0.63|Mochiy Pop One/sans-serif/400/japanese,latin/662/0.84/0.62/0.30/0.69|Sofia Sans Semi Condensed/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext/663/0.43/0.44/0.52/0.25|Chelsea Market/display/400/latin,latin-ext/664/0.55/0.55/0.00/0.66|IM Fell English SC/serif/400/latin/665/0.28/0.39/0.00/0.71|Monsieur La Doulaise/handwriting/400/latin,latin-ext/666/0.00/0.00/0.00/0.54|Aboreto/display/400/latin,latin-ext/667/0.11/0.81/1.00/0.18|Caladea/serif/400,400i,700,700i/latin,latin-ext/668/0.45/0.41/0.72/0.24|Andada Pro/serif/400,500,600,700,800,400i,500i,600i,700i,800i/latin,latin-ext,vietnamese/669/0.31/0.46/0.00/0.28|Inria Serif/serif/300,300i,400,400i,700,700i/latin,latin-ext/670/0.28/0.48/0.43/0.19|Nova Square/display/400/latin/671/0.42/0.53/1.00/0.00|Mallanna/sans-serif/400/latin,telugu/672/0.31/0.58/0.77/0.38|Gotu/sans-serif/400/devanagari,latin,latin-ext,vietnamese/673/0.18/0.49/0.17/0.77|Wix Madefor Display/sans-serif/400,500,600,700,800/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/674/0.27/0.57/1.00/0.29|Alike/serif/400/latin,latin-ext,math,symbols/675/0.39/0.42/0.00/0.44|Noto Sans Kannada/sans-serif/100,200,300,400,500,600,700,800,900/kannada,latin,latin-ext/676/0.35/0.49/1.00/0.34|Noto Sans Lao Looped/sans-serif/100,200,300,400,500,600,700,800,900/lao,latin,latin-ext/677/0.35/0.47/1.00/0.34|Encode Sans Expanded/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/678/0.26/0.52/1.00/0.22|Bubblegum Sans/display/400/latin,latin-ext/679/0.64/0.24/0.18/0.53|Meddon/handwriting/400/latin/680/0.00/0.22/0.00/1.00|Agbalumo/display/400/cyrillic-ext,latin,latin-ext,vietnamese/681/0.88/0.53/0.00/0.80|Rethink Sans/sans-serif/400,500,600,700,800,400i,500i,600i,700i,800i/latin,latin-ext/682/0.37/0.52/1.00/0.34|Notable/sans-serif/400/latin/683/0.83/1.00/1.00/0.13|Baloo Chettan 2/display/400,500,600,700,800/latin,latin-ext,malayalam,vietnamese/684/0.37/0.55/0.07/0.42|Baloo Thambi 2/display/400,500,600,700,800/latin,latin-ext,tamil,vietnamese/685/0.37/0.55/0.07/0.42|Poly/serif/400,400i/latin/686/0.38/0.43/0.50/0.25|Rakkas/display/400/arabic,latin,latin-ext/687/0.76/0.33/1.00/0.10|Kaisei Decol/serif/400,500,700/cyrillic,japanese,latin,latin-ext/688/0.26/0.59/0.00/0.69|Prosto One/display/400/cyrillic,latin,latin-ext/689/0.57/0.87/1.00/0.35|Cambo/serif/400/latin,latin-ext/690/0.39/0.47/1.00/0.23|KoHo/sans-serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,thai,vietnamese/691/0.23/0.44/1.00/0.25|Average/serif/400/latin,latin-ext/692/0.30/0.40/0.00/0.63|Copse/serif/400/latin/693/0.49/0.47/0.00/0.21|Ma Shan Zheng/handwriting/400/chinese-simplified,latin/694/0.51/0.00/0.00/0.59|Bellota Text/display/300,300i,400,400i,700,700i/cyrillic,latin,latin-ext,vietnamese/695/0.16/0.44/1.00/0.28|Noto Sans Georgian/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic-ext,georgian,greek-ext,latin,latin-ext,math,symbols/696/0.36/0.47/1.00/0.34|Murecho/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic,cyrillic-ext,greek,japanese,latin,latin-ext/697/0.39/0.39/1.00/0.40|Noto Sans Sinhala/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,sinhala/698/0.28/0.58/1.00/0.34|Sedgwick Ave/handwriting/400/latin,latin-ext,vietnamese/699/0.39/0.07/0.00/0.38|Capriola/sans-serif/400/latin,latin-ext/700/0.42/0.40/0.00/0.33|Shantell Sans/display/300,400,500,600,700,800,300i,400i,500i,600i,700i,800i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/701/0.31/0.53/0.00/1.00|Fauna One/serif/400/latin,latin-ext/702/0.28/0.55/1.00/0.16|Noto Sans Gujarati/sans-serif/100,200,300,400,500,600,700,800,900/gujarati,latin,latin-ext,math,symbols/703/0.35/0.47/1.00/0.34|Expletus Sans/display/400,500,600,700,400i,500i,600i,700i/latin,latin-ext/704/0.36/0.43/1.00/0.41|REM/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/705/0.41/0.53/1.00/0.26|Young Serif/serif/400/latin,latin-ext/706/0.60/0.55/0.00/0.32|Baloo Tamma 2/display/400,500,600,700,800/kannada,latin,latin-ext,vietnamese/707/0.33/0.60/0.00/0.40|Fondamento/handwriting/400,400i/latin,latin-ext/708/0.25/0.25/0.00/0.44|Marvel/sans-serif/400,400i,700,700i/latin/709/0.23/0.15/1.00/0.39|IBM Plex Sans JP/sans-serif/100,200,300,400,500,600,700/cyrillic,japanese,latin,latin-ext/710/0.30/0.48/1.00/0.19|Sansita Swashed/display/300,400,500,600,700,800,900/latin,latin-ext,vietnamese/711/0.64/0.35/0.00/0.80|Cutive/serif/400/latin,latin-ext/712/0.42/0.62/0.00/0.43|Gantari/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext/713/0.36/0.65/1.00/0.33|Quando/serif/400/latin,latin-ext/714/0.39/0.54/0.00/0.42|Asul/sans-serif/400,700/latin/715/0.38/0.40/1.00/0.20|Aladin/display/400/latin,latin-ext/716/0.61/0.06/0.00/0.51|Gloock/serif/400/cyrillic-ext,latin,latin-ext/717/0.54/0.45/0.05/0.28|Noto Serif Malayalam/serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,malayalam/718/0.37/0.54/0.00/0.32|Encode Sans Semi Expanded/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/719/0.28/0.44/1.00/0.22|Thasadith/sans-serif/400,400i,700,700i/latin,latin-ext,thai,vietnamese/720/0.04/0.44/1.00/0.38|Saira Stencil One/display/400/latin,latin-ext,vietnamese/721/0.96/0.55/1.00/0.15|Noto Sans Oriya/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,oriya/722/0.36/0.47/1.00/0.34|Arya/sans-serif/400,700/devanagari,latin,latin-ext/723/0.47/0.48/1.00/0.18|Kelly Slab/display/400/cyrillic,latin,latin-ext/724/0.37/0.39/1.00/0.00|Noto Sans Meetei Mayek/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,meetei-mayek/725/0.34/0.48/1.00/0.31|Megrim/display/400/latin/726/0.00/0.58/1.00/0.24|Sunflower/sans-serif/300,500,700/korean,latin/727/0.36/0.39/1.00/0.30|Kodchasan/sans-serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,thai,vietnamese/728/0.19/0.48/0.50/0.44|Skranji/display/400,700/latin,latin-ext/729/0.75/0.37/0.00/0.55|Familjen Grotesk/sans-serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext,vietnamese/730/0.52/0.53/1.00/0.21|Supermercado One/display/400/latin/731/0.59/0.34/0.00/0.31|McLaren/display/400/latin,latin-ext/732/0.40/0.48/0.38/0.71|Della Respira/serif/400/latin/733/0.22/0.44/0.00/0.50|Metamorphous/display/400/latin,latin-ext/734/0.27/0.51/0.00/0.28|Kadwa/serif/400,700/devanagari,latin/735/0.49/0.47/1.00/0.13|Federo/sans-serif/400/latin/736/0.35/0.40/1.00/0.46|Mouse Memoirs/sans-serif/400/latin,latin-ext/737/0.95/0.04/0.00/0.86|Reddit Mono/monospace/200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/738/0.24/0.64/1.00/0.29|Vina Sans/display/400/latin,latin-ext,vietnamese/739/1.00/0.23/1.00/0.17|Battambang/display/100,300,400,700,900/khmer,latin/740/0.42/0.59/1.00/0.08|Xanh Mono/monospace/400,400i/latin,latin-ext,vietnamese/741/0.18/0.52/0.64/0.18|Potta One/display/400/japanese,latin,latin-ext,vietnamese/742/0.82/0.72/0.00/1.00|Croissant One/display/400/latin,latin-ext/743/0.47/0.62/1.00/0.42|Suranna/serif/400/latin,telugu/744/0.29/0.41/1.00/0.12|Zen Dots/display/400/latin,latin-ext/745/0.72/1.00/1.00/0.08|Sue Ellen Francisco/handwriting/400/latin/746/0.00/0.00/1.00/0.10|Kaisei Opti/serif/400,500,700/cyrillic,japanese,latin,latin-ext/747/0.26/0.59/0.00/0.69|Noto Sans Gurmukhi/sans-serif/100,200,300,400,500,600,700,800,900/gurmukhi,latin,latin-ext/748/0.36/0.47/1.00/0.34|Libre Caslon Display/serif/400/latin,latin-ext/749/0.17/0.30/0.60/0.19|Goblin One/display/400/latin/750/0.73/1.00/0.32/0.53|Mountains of Christmas/display/400,700/latin/751/0.06/0.00/0.00/0.45|ZCOOL XiaoWei/sans-serif/400/chinese-simplified,latin/752/0.35/0.53/1.00/0.29|Mr De Haviland/handwriting/400/latin,latin-ext/753/0.07/0.00/0.00/0.61|Almendra/serif/400,400i,700,700i/latin,latin-ext/754/0.35/0.34/0.00/0.27|Mukta Vaani/sans-serif/200,300,400,500,600,700,800/gujarati,latin,latin-ext/755/0.41/0.38/1.00/0.37|Caprasimo/display/400/latin,latin-ext/756/1.00/0.72/0.00/0.66|Ephesis/handwriting/400/latin,latin-ext,vietnamese/757/0.12/0.16/0.00/0.36|Aref Ruqaa/serif/400,700/arabic,latin,latin-ext/758/0.34/0.44/0.00/0.56|Allan/display/400,700/latin,latin-ext/759/0.58/0.07/0.87/0.32|Qwigley/handwriting/400/latin,latin-ext,vietnamese/760/0.07/0.00/0.00/0.34|Hurricane/handwriting/400/latin,latin-ext,vietnamese/761/0.15/0.06/0.00/0.80|Over the Rainbow/handwriting/400/latin/762/0.00/0.07/0.00/1.00|Aguafina Script/handwriting/400/latin,latin-ext/763/0.22/0.00/0.00/0.44|Imbue/serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/764/0.54/0.00/0.49/0.30|Amethysta/serif/400/latin/765/0.30/0.50/1.00/0.17|Loved by the King/handwriting/400/latin/766/0.00/0.00/1.00/0.04|Sumana/serif/400,700/devanagari,latin,latin-ext/767/0.35/0.45/0.00/0.24|Noto Sans Armenian/sans-serif/100,200,300,400,500,600,700,800,900/armenian,latin,latin-ext/768/0.35/0.47/1.00/0.34|Hi Melody/handwriting/400/korean,latin/769/0.25/0.44/0.00/0.88|Coiny/display/400/latin,latin-ext,tamil,vietnamese/770/0.93/0.69/0.38/0.71|Hanuman/serif/100,300,400,700,900/khmer,latin/771/0.42/0.59/1.00/0.08|Oregano/display/400,400i/latin,latin-ext/772/0.28/0.07/0.00/1.00|Fuggles/handwriting/400/latin,latin-ext,vietnamese/773/0.00/0.00/0.00/0.65|Geo/sans-serif/400,400i/latin/774/0.36/0.36/1.00/0.00|Kaisei Tokumin/serif/400,500,700,800/cyrillic,japanese,latin,latin-ext/776/0.26/0.59/0.00/0.69|Hina Mincho/serif/400/cyrillic,japanese,latin,latin-ext,vietnamese/777/0.19/0.43/0.00/0.44|Nova Mono/monospace/400/greek,latin/778/0.21/0.69/1.00/0.14|ZCOOL QingKe HuangYou/sans-serif/400/chinese-simplified,latin/779/0.66/0.34/0.44/0.08|Pompiere/display/400/latin/780/0.06/0.00/0.00/0.59|Noto Sans NKo Unjoined/sans-serif/400,500,600,700/latin,latin-ext,nko/781/0.35/0.47/1.00/0.26|Lekton/monospace/400,400i,700/latin,latin-ext/782/0.13/0.62/1.00/0.19|Vibur/handwriting/400/latin/783/0.23/0.09/0.00/0.25|Euphoria Script/handwriting/400/latin,latin-ext/784/0.22/0.13/0.00/0.51|Instrument Serif/serif/400,400i/latin,latin-ext/785/0.38/0.16/0.00/0.34|Montaga/serif/400/latin/786/0.28/0.41/0.39/0.24|Rampart One/display/400/cyrillic,japanese,latin,latin-ext/787/0.43/0.56/0.00/0.27|Anek Latin/sans-serif/100,200,300,400,500,600,700,800/latin,latin-ext,vietnamese/788/0.44/0.52/1.00/0.19|Oleo Script Swash Caps/display/400,700/latin,latin-ext/789/0.75/0.23/0.00/0.53|Ruslan Display/display/400/cyrillic,latin,latin-ext,math,symbols/790/0.71/0.77/1.00/0.30|Walter Turncoat/handwriting/400/latin/791/0.38/0.77/0.00/0.73|Gowun Dodum/sans-serif/400/korean,latin,latin-ext,vietnamese/792/0.12/0.49/0.98/0.29|Inder/sans-serif/400/latin,latin-ext/793/0.39/0.59/1.00/0.15|BIZ UDPMincho/serif/400,700/cyrillic,greek-ext,japanese,latin,latin-ext/794/0.24/0.78/0.00/0.13|Syne Mono/monospace/400/latin,latin-ext/795/0.28/0.72/1.00/0.06|Balthazar/serif/400/latin/796/0.42/0.43/1.00/0.03|IM Fell Double Pica/serif/400,400i/latin/797/0.28/0.30/0.00/0.76|Protest Strike/display/400/latin,latin-ext,math,symbols,vietnamese/798/1.00/0.45/1.00/0.22|Zen Antique Soft/serif/400/cyrillic,greek,japanese,latin,latin-ext/799/0.40/0.61/0.00/0.64|Charis SIL/serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/800/0.40/0.49/0.52/0.23|Vollkorn SC/serif/400,600,700,900/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/801/0.33/0.69/0.00/0.39|Kufam/sans-serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/arabic,latin,latin-ext,vietnamese/802/0.36/0.52/1.00/0.31|Mukta Mahee/sans-serif/200,300,400,500,600,700,800/gurmukhi,latin,latin-ext/803/0.41/0.38/1.00/0.37|Uncial Antiqua/display/400/latin/804/0.27/0.33/0.00/0.81|Nokora/sans-serif/100,300,400,700,900/khmer,latin/805/0.35/0.47/1.00/0.22|Recursive/sans-serif/300,400,500,600,700,800,900/cyrillic-ext,latin,latin-ext,vietnamese/806/0.34/0.49/0.00/0.77|Happy Monkey/display/400/latin,latin-ext/808/0.28/0.55/0.94/0.44|Lexend Peta/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/809/0.22/1.00/1.00/0.38|Zen Antique/serif/400/cyrillic,greek,japanese,latin,latin-ext/811/0.40/0.61/0.00/0.65|Gugi/display/400/korean,latin/812/0.57/0.59/0.00/0.23|League Script/handwriting/400/latin/813/0.00/0.30/0.00/0.95|Black And White Picture/display/400/korean,latin/814/0.64/0.25/0.00/0.37|Crafty Girls/handwriting/400/latin/815/0.04/0.35/0.00/0.51|Puritan/sans-serif/400,400i,700,700i/latin/816/0.36/0.41/1.00/0.12|Bruno Ace SC/display/400/latin,latin-ext/817/0.35/1.00/1.00/0.17|Clicker Script/handwriting/400/latin,latin-ext/818/0.00/0.02/0.00/1.00|Goldman/display/400,700/latin,latin-ext,vietnamese/819/0.63/0.89/1.00/0.20|Noto Sans Myanmar/sans-serif/100,200,300,400,500,600,700,800,900/myanmar/820/0.01/1.00/1.00/0.00|Cormorant Unicase/serif/300,400,500,600,700/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/821/0.13/0.56/0.00/0.43|Whisper/handwriting/400/latin,latin-ext,vietnamese/822/0.11/0.15/0.00/0.34|Mochiy Pop P One/sans-serif/400/japanese,latin/823/0.84/0.62/0.30/0.69|Cherry Cream Soda/display/400/latin/824/0.58/0.78/0.00/1.00|Alike Angular/serif/400/latin,latin-ext,math,symbols/825/0.38/0.42/1.00/0.00|Kranky/display/400/latin/826/0.17/0.44/0.00/0.71|Gamja Flower/handwriting/400/korean,latin/827/0.39/0.49/0.00/0.85|Give You Glory/handwriting/400/latin/828/0.00/0.14/0.00/1.00|Gluten/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/829/0.59/0.77/0.00/1.00|Esteban/serif/400/latin,latin-ext/830/0.28/0.34/0.00/0.48|Pavanam/sans-serif/400/latin,latin-ext,tamil/831/0.27/0.43/1.00/0.14|Averia Sans Libre/display/300,300i,400,400i,700,700i/latin/832/0.40/0.46/0.00/0.29|NTR/sans-serif/400/latin,telugu/833/0.41/0.56/1.00/0.38|Rouge Script/handwriting/400/latin/834/0.15/0.10/0.00/0.49|Salsa/display/400/latin/835/0.59/0.43/0.87/0.71|Road Rage/display/400/latin,latin-ext,vietnamese/836/1.00/0.08/0.00/0.17|Tilt Warp/display/400/latin,latin-ext,vietnamese/837/0.91/0.50/0.60/0.84|Carme/sans-serif/400/latin/838/0.29/0.44/1.00/0.21|Modak/display/400/devanagari,latin,latin-ext/839/1.00/0.56/0.00/0.39|Orelega One/display/400/cyrillic,cyrillic-ext,latin,latin-ext/840/0.86/0.69/0.26/0.40|Faster One/display/400/latin,latin-ext/841/0.95/1.00/0.00/0.00|Atma/display/300,400,500,600,700/bengali,latin,latin-ext/842/0.35/0.18/0.33/0.69|Finger Paint/display/400/latin/843/0.32/0.28/0.00/0.54|ADLaM Display/display/400/adlam,latin,latin-ext/844/0.68/0.49/0.00/0.42|Bakbak One/display/400/devanagari,latin,latin-ext/845/0.88/0.67/1.00/0.26|IBM Plex Sans Hebrew/sans-serif/100,200,300,400,500,600,700/cyrillic-ext,hebrew,latin,latin-ext/846/0.34/0.49/1.00/0.29|Tienne/serif/400,700,900/latin/847/0.38/0.59/0.00/0.58|Slackey/display/400/latin/848/0.83/1.00/0.00/0.96|BhuTuka Expanded One/serif/400/gurmukhi,latin,latin-ext/849/0.00/1.00/0.69/0.26|Elsie/display/400,900/latin,latin-ext/850/0.33/0.47/0.17/0.42|Amarante/display/400/latin,latin-ext/851/0.47/0.41/0.00/0.36|Bellota/display/300,300i,400,400i,700,700i/cyrillic,latin,latin-ext,vietnamese/852/0.15/0.44/1.00/0.33|Wendy One/sans-serif/400/latin,latin-ext/854/1.00/0.65/1.00/0.30|Dokdo/display/400/korean,latin/855/0.44/0.87/0.00/0.26|Scheherazade New/serif/400,500,600,700/arabic,latin,latin-ext/856/0.35/0.50/0.00/0.44|Reggae One/display/400/cyrillic,japanese,latin,latin-ext/857/0.52/0.61/1.00/0.39|Lovers Quarrel/handwriting/400/latin,latin-ext,vietnamese/858/0.18/0.00/0.00/0.30|Germania One/display/400/latin/859/0.76/0.24/1.00/0.43|Smooch/handwriting/400/latin,latin-ext,vietnamese/860/0.45/0.14/0.00/0.70|Bigshot One/display/400/latin/861/0.79/0.59/0.00/0.30|Vast Shadow/serif/400/latin/862/0.56/1.00/0.00/0.27|Anybody/display/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/863/0.45/0.47/1.00/0.19|Duru Sans/sans-serif/400/latin,latin-ext/864/0.25/0.53/1.00/0.16|Platypi/serif/300,400,500,600,700,800,300i,400i,500i,600i,700i,800i/latin,latin-ext,vietnamese/865/0.38/0.54/0.56/0.06|Bilbo Swash Caps/handwriting/400/latin,latin-ext/866/0.15/0.10/0.00/0.62|Birthstone/handwriting/400/latin,latin-ext,vietnamese/867/0.25/0.03/0.00/0.72|Solway/serif/300,400,500,700,800/latin/868/0.41/0.55/0.00/0.21|Imprima/sans-serif/400/latin,latin-ext/869/0.36/0.43/1.00/0.26|Original Surfer/display/400/latin/870/0.43/0.56/0.00/0.94|Baloo Bhai 2/display/400,500,600,700,800/gujarati,latin,latin-ext,vietnamese/871/0.37/0.55/0.07/0.42|Just Me Again Down Here/handwriting/400/latin,latin-ext/872/0.10/0.00/0.84/0.09|Manuale/serif/300,400,500,600,700,800,300i,400i,500i,600i,700i,800i/latin,latin-ext,vietnamese/873/0.43/0.49/1.00/0.20|Bayon/sans-serif/400/khmer,latin/874/0.66/0.52/1.00/0.14|Reddit Sans/sans-serif/200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/875/0.36/0.47/1.00/0.32|Varta/sans-serif/300,400,500,600,700/latin,latin-ext,vietnamese/876/0.33/0.40/1.00/0.29|Codystar/display/300,400/latin,latin-ext/877/0.00/1.00/0.00/0.50|Mohave/sans-serif/300,400,500,600,700,300i,400i,500i,600i,700i/latin,latin-ext/878/0.43/0.22/1.00/0.16|New Amsterdam/sans-serif/400/latin,latin-ext/879/0.77/0.47/1.00/0.17|Sarpanch/sans-serif/400,500,600,700,800,900/devanagari,latin,latin-ext/880/0.34/0.86/1.00/0.03|Noto Sans Buhid/sans-serif/400/buhid,latin,latin-ext/881/0.36/0.47/1.00/0.24|Headland One/serif/400/latin,latin-ext/882/0.35/0.56/0.00/0.24|Macondo Swash Caps/display/400/latin/883/0.25/0.31/0.57/0.96|Montez/handwriting/400/latin/884/0.09/0.00/0.00/1.00|Viaoda Libre/display/400/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/885/0.14/0.20/0.00/0.29|Slabo 13px/serif/400/latin,latin-ext/886/0.36/0.48/1.00/0.06|Eater/display/400/latin,latin-ext/887/0.65/0.53/0.00/0.30|Doppio One/sans-serif/400/latin,latin-ext/888/0.54/0.44/1.00/0.45|Dynalight/display/400/latin,latin-ext/889/0.22/0.11/0.00/0.79|Unkempt/display/400,700/latin/890/0.23/0.48/0.00/0.68|Baumans/display/400/latin/891/0.44/0.43/1.00/0.30|Artifika/serif/400/latin/892/0.39/0.63/0.00/0.59|Handjet/display/100,200,300,400,500,600,700,800,900/arabic,armenian,cyrillic,cyrillic-ext,greek,hebrew,latin,latin-ext,vietnamese/893/0.34/0.16/0.00/1.00|Chocolate Classical Sans/sans-serif/400/chinese-hongkong,cyrillic,latin,latin-ext,vietnamese/894/0.35/0.41/1.00/0.29|Hachi Maru Pop/handwriting/400/cyrillic,japanese,latin,latin-ext/895/0.14/1.00/0.00/0.73|Mako/sans-serif/400/latin,latin-ext/896/0.39/0.44/1.00/0.29|Numans/sans-serif/400/latin/897/0.33/0.80/1.00/0.28|Farro/sans-serif/300,400,500,700/latin,latin-ext/898/0.51/0.45/1.00/0.14|Katibeh/display/400/arabic,latin,latin-ext/899/0.67/0.54/0.06/0.29|Kalnia/serif/100,200,300,400,500,600,700/latin,latin-ext,math/900/0.29/0.71/0.00/0.39|Playpen Sans/handwriting/100,200,300,400,500,600,700,800/emoji,latin,latin-ext,math,vietnamese/901/0.26/0.45/0.00/0.99|Fontdiner Swanky/display/400/latin/902/0.39/0.30/0.33/0.53|Bodoni Moda SC/serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/latin,latin-ext,math,symbols/903/0.20/0.45/0.27/0.34|Meow Script/handwriting/400/latin,latin-ext,vietnamese/904/0.19/0.18/0.00/0.69|Share Tech/sans-serif/400/latin/905/0.42/0.41/1.00/0.08|Anek Bangla/sans-serif/100,200,300,400,500,600,700,800/bengali,latin,latin-ext/906/0.44/0.50/1.00/0.19|Kdam Thmor Pro/sans-serif/400/khmer,latin,latin-ext/907/0.66/0.32/1.00/0.05|Homenaje/sans-serif/400/latin/908/0.60/0.15/1.00/0.12|Red Rose/display/300,400,500,600,700/latin,latin-ext,vietnamese/909/0.44/0.63/0.00/0.50|Shanti/sans-serif/400/latin,latin-ext/910/0.39/0.47/1.00/0.32|Afacad/sans-serif/400,500,600,700,400i,500i,600i,700i/cyrillic-ext,latin,latin-ext,math,symbols,vietnamese/911/0.35/0.42/1.00/0.35|Rubik Dirt/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/912/1.00/0.64/0.00/0.00|Mirza/serif/400,500,600,700/arabic,latin,latin-ext/913/0.46/0.56/0.70/0.46|Lily Script One/display/400/latin,latin-ext/914/0.75/0.28/0.00/0.45|Ruthie/handwriting/400/latin,latin-ext,vietnamese/915/0.03/0.00/0.00/0.36|Anaheim/sans-serif/400,500,600,700,800/latin,latin-ext,vietnamese/916/0.25/0.45/1.00/0.25|Prociono/serif/400/latin/917/0.40/0.40/0.00/0.46|Harmattan/sans-serif/400,500,600,700/arabic,latin,latin-ext/918/0.38/0.43/1.00/0.49|The Girl Next Door/handwriting/400/latin/919/0.00/0.23/0.00/1.00|Mogra/display/400/gujarati,latin,latin-ext/920/0.65/0.33/0.00/0.64|Asar/serif/400/devanagari,latin,latin-ext/921/0.32/0.36/0.00/0.73|Ledger/serif/400/cyrillic,latin,latin-ext/922/0.22/0.48/1.00/0.11|Chau Philomene One/sans-serif/400,400i/latin,latin-ext/923/0.77/0.27/1.00/0.40|Gayathri/sans-serif/100,400,700/latin,malayalam/924/0.35/0.60/1.00/0.26|Raleway Dots/display/400/latin,latin-ext/925/0.00/0.53/0.00/0.27|Henny Penny/display/400/latin/926/0.13/0.01/0.00/1.00|Monomaniac One/sans-serif/400/japanese,latin,latin-ext/927/0.82/0.41/0.18/0.27|Gaegu/handwriting/300,400,700/korean,latin/928/0.14/0.58/0.00/0.68|Sofadi One/display/400/latin/929/0.23/0.52/0.00/0.70|Scope One/serif/400/latin,latin-ext/930/0.23/0.63/0.03/0.22|Stick/sans-serif/400/cyrillic,japanese,latin,latin-ext/931/0.33/0.46/1.00/0.00|Patrick Hand SC/handwriting/400/latin,latin-ext,vietnamese/932/0.36/0.55/0.67/0.56|Baloo Bhaina 2/display/400,500,600,700,800/latin,latin-ext,oriya,vietnamese/933/0.37/0.55/0.00/0.40|Akaya Kanadaka/display/400/kannada,latin,latin-ext/934/0.44/0.35/0.00/0.69|Corinthia/handwriting/400,700/latin,latin-ext,vietnamese/935/0.10/0.00/0.00/0.41|Shojumaru/display/400/latin,latin-ext/936/0.84/0.90/0.00/0.79|Nova Round/display/400/latin/937/0.38/0.53/1.00/0.11|Wire One/sans-serif/400/latin/938/0.08/0.00/0.00/0.32|Arima/display/100,200,300,400,500,600,700/greek,greek-ext,latin,latin-ext,malayalam,tamil,vietnamese/939/0.32/0.44/0.00/0.61|Delius Unicase/handwriting/400,700/latin/940/0.21/1.00/0.68/0.76|Life Savers/display/400,700,800/latin,latin-ext/941/0.02/0.29/0.00/0.57|Trade Winds/display/400/latin/942/0.61/0.45/0.00/0.83|Londrina Outline/display/400/latin/943/0.02/0.25/0.00/0.31|IM Fell DW Pica SC/serif/400/latin/944/0.37/0.42/0.00/0.80|ZCOOL KuaiLe/sans-serif/400/chinese-simplified,latin/945/0.35/0.84/1.00/0.00|Montagu Slab/serif/100,200,300,400,500,600,700/latin,latin-ext,vietnamese/946/0.48/0.68/0.12/0.17|Sancreek/display/400/latin,latin-ext/947/0.90/0.31/0.00/0.83|Fragment Mono/monospace/400,400i/cyrillic-ext,latin,latin-ext/949/0.25/0.82/1.00/0.26|Baskervville SC/serif/400/latin,latin-ext/950/0.15/0.44/0.00/0.31|Cherry Swash/display/400,700/latin,latin-ext/951/0.45/0.55/1.00/0.20|Yuji Syuku/serif/400/cyrillic,japanese,latin,latin-ext/952/0.17/0.84/0.00/0.72|Overlock SC/display/400/latin,latin-ext/953/0.34/0.60/0.36/0.43|Noto Serif Thai/serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,thai/954/0.38/0.52/0.00/0.33|Medula One/display/400/latin/955/0.85/0.00/1.00/0.31|Square Peg/handwriting/400/latin,latin-ext,vietnamese/956/0.00/0.00/0.00/0.35|Charmonman/handwriting/400,700/latin,latin-ext,thai,vietnamese/957/0.00/0.00/0.00/0.57|Flamenco/display/300,400/latin/958/0.11/0.30/0.89/0.48|Kantumruy Pro/sans-serif/100,200,300,400,500,600,700,100i,200i,300i,400i,500i,600i,700i/khmer,latin,latin-ext/959/0.25/0.57/1.00/0.34|Rubik Scribble/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext,math,symbols/960/0.00/0.64/0.00/0.57|Tilt Neon/display/400/latin,latin-ext,vietnamese/961/0.46/0.49/0.00/1.00|Orienta/sans-serif/400/latin,latin-ext/962/0.38/0.47/1.00/0.30|Edu VIC WA NT Beginner/handwriting/400,500,600,700/latin/963/0.06/0.16/0.00/0.61|Piazzolla/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/964/0.31/0.50/0.44/0.20|Ceviche One/display/400/latin,latin-ext/965/1.00/0.52/1.00/0.37|Song Myung/serif/400/korean,latin/966/0.50/0.50/0.00/0.29|Radio Canada Big/sans-serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext/967/0.53/0.54/1.00/0.26|Freckle Face/display/400/latin,latin-ext/968/0.80/0.33/0.00/1.00|Iceberg/display/400/latin/969/0.43/0.24/1.00/0.00|Belgrano/serif/400/latin/970/0.36/0.52/1.00/0.15|Dekko/handwriting/400/devanagari,latin,latin-ext/971/0.33/0.26/0.00/0.59|Tiro Bangla/serif/400,400i/bengali,latin,latin-ext/972/0.38/0.46/0.00/0.58|MonteCarlo/handwriting/400/latin,latin-ext,vietnamese/973/0.14/0.09/0.00/0.63|Comforter Brush/handwriting/400/cyrillic,latin,latin-ext,vietnamese/974/0.09/0.00/0.00/0.17|Frijole/display/400/latin/975/0.91/1.00/0.00/0.69|Ribeye/display/400/latin,latin-ext/977/0.46/0.62/0.00/0.81|Monofett/monospace/400/latin,latin-ext/978/1.00/1.00/0.00/0.03|Licorice/handwriting/400/latin,latin-ext,vietnamese/979/0.08/0.00/0.00/0.94|Freehand/display/400/khmer,latin/980/0.23/0.06/0.00/0.38|Timmana/sans-serif/400/latin,telugu/981/0.67/0.37/1.00/0.24|Karantina/display/300,400,700/hebrew,latin,latin-ext/982/1.00/0.01/1.00/0.00|Convergence/sans-serif/400/latin,latin-ext/983/0.48/0.50/1.00/0.26|IM Fell French Canon/serif/400,400i/latin/984/0.32/0.49/0.00/0.87|Rhodium Libre/serif/400/devanagari,latin,latin-ext/985/0.41/0.64/1.00/0.14|Mooli/sans-serif/400/latin,latin-ext/986/0.32/0.50/1.00/0.40|Sail/display/400/latin,latin-ext/987/0.32/0.48/0.00/0.55|Emilys Candy/display/400/latin,latin-ext/988/0.38/0.38/0.00/0.62|Voces/sans-serif/400/latin,latin-ext/989/0.41/0.49/1.00/0.19|Ubuntu Sans/sans-serif/100,200,300,400,500,600,700,800,100i,200i,300i,400i,500i,600i,700i,800i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext/990/0.27/0.47/1.00/0.51|Birthstone Bounce/handwriting/400,500/latin,latin-ext,vietnamese/991/0.15/0.00/0.00/0.60|Redressed/handwriting/400/latin/992/0.34/0.23/0.00/0.86|Bona Nova/serif/400,400i,700/cyrillic,cyrillic-ext,greek,hebrew,latin,latin-ext,vietnamese/993/0.15/0.32/0.00/0.38|Delius Swash Caps/handwriting/400/latin/994/0.28/0.43/0.00/0.65|Chango/display/400/latin,latin-ext/995/1.00/1.00/0.54/0.62|Sulphur Point/sans-serif/300,400,700/latin,latin-ext/996/0.30/0.60/1.00/0.33|Rum Raisin/sans-serif/400/latin,latin-ext/997/0.81/0.11/0.00/0.94|Tiro Devanagari Hindi/serif/400,400i/devanagari,latin,latin-ext/998/0.38/0.45/0.00/0.58|Miniver/display/400/latin/999/0.32/0.18/0.00/0.76|Red Hat Mono/monospace/300,400,500,600,700,300i,400i,500i,600i,700i/latin,latin-ext/1000/0.13/0.76/1.00/0.31|Rosarivo/serif/400,400i/latin,latin-ext/1001/0.10/0.23/0.00/0.36|Anek Devanagari/sans-serif/100,200,300,400,500,600,700,800/devanagari,latin,latin-ext/1002/0.44/0.52/1.00/0.19|Peralta/serif/400/latin,latin-ext/1003/0.70/0.76/0.00/0.48|Kode Mono/monospace/400,500,600,700/latin,latin-ext/1004/0.19/0.69/1.00/0.00|UnifrakturCook/display/700/latin/1005/0.77/0.33/0.67/0.23|Shippori Antique/sans-serif/400/japanese,latin,latin-ext/1006/0.48/0.54/1.00/0.30|Carlito/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/1007/0.42/0.47/1.00/0.52|Crushed/display/400/latin/1008/0.35/0.48/0.00/0.89|Sunshiney/handwriting/400/latin/1009/0.28/0.13/0.00/0.73|Nosifer/display/400/latin,latin-ext/1010/0.95/1.00/0.00/0.35|MedievalSharp/display/400/latin,latin-ext/1011/0.27/0.50/0.00/0.40|Ysabeau Office/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext,math,symbols,vietnamese/1012/0.13/0.35/1.00/0.33|Denk One/sans-serif/400/cyrillic-ext,latin,latin-ext,vietnamese/1013/0.74/0.30/0.39/0.41|Edu SA Beginner/handwriting/400,500,600,700/latin/1014/0.09/0.08/0.45/0.55|Rationale/sans-serif/400/latin/1015/0.43/0.24/1.00/0.17|Delicious Handrawn/handwriting/400/latin,latin-ext/1017/0.31/0.00/0.00/0.59|Sura/serif/400,700/devanagari,latin,latin-ext/1018/0.41/0.41/0.00/0.23|Noto Sans Glagolitic/sans-serif/400/cyrillic-ext,glagolitic,latin,latin-ext,math,symbols/1019/0.35/0.47/1.00/0.24|Modern Antiqua/display/400/latin,latin-ext/1020/0.34/0.58/0.00/0.17|Londrina Shadow/display/400/latin/1021/0.20/0.22/0.00/0.25|Meera Inimai/sans-serif/400/latin,tamil/1022/0.39/0.47/1.00/0.28|Martian Mono/monospace/100,200,300,400,500,600,700,800/cyrillic,cyrillic-ext,latin,latin-ext/1023/0.30/0.83/1.00/0.21|AR One Sans/sans-serif/400,500,600,700/latin,latin-ext,vietnamese/1024/0.35/0.55/1.00/0.22|Swanky and Moo Moo/handwriting/400/latin/1025/0.00/0.30/0.00/1.00|Gulzar/serif/400/arabic,latin,latin-ext/1026/0.45/0.42/0.85/0.16|Strait/sans-serif/400/latin,latin-ext/1027/0.38/0.37/1.00/0.37|Yomogi/handwriting/400/cyrillic,japanese,latin,latin-ext,vietnamese/1028/0.00/0.69/0.16/0.31|Kay Pho Du/serif/400,500,600,700/kayah-li,latin,latin-ext/1029/0.23/0.42/1.00/0.10|Jomolhari/serif/400/latin,tibetan/1030/0.33/0.49/0.00/0.47|Playwrite CU/handwriting/100,200,300,400/latin/1031/0.07/0.08/0.00/0.94|Passions Conflict/handwriting/400/latin,latin-ext,vietnamese/1032/0.05/0.11/0.00/0.34|Tauri/sans-serif/400/latin,latin-ext/1033/0.48/0.36/1.00/0.48|IM Fell Great Primer/serif/400,400i/latin/1034/0.33/0.37/0.00/0.90|Lexend Giga/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1035/0.26/0.96/1.00/0.38|Lexend Mega/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1036/0.24/1.00/1.00/0.38|Chivo Mono/monospace/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/1037/0.33/0.84/1.00/0.29|East Sea Dokdo/handwriting/400/korean,latin/1038/0.34/0.27/0.00/0.24|Iceland/display/400/latin/1039/0.32/0.53/1.00/0.00|WindSong/handwriting/400,500/latin,latin-ext,vietnamese/1040/0.00/0.44/0.00/0.74|Gafata/sans-serif/400/latin,latin-ext/1041/0.24/0.38/1.00/0.24|Maiden Orange/serif/400/latin/1042/0.73/0.16/0.00/0.48|Caesar Dressing/display/400/latin/1043/0.52/0.64/0.00/0.68|Nova Flat/display/400/latin/1044/0.41/0.53/1.00/0.11|Carattere/handwriting/400/latin,latin-ext,vietnamese/1045/0.24/0.05/0.00/0.33|Stick No Bills/sans-serif/200,300,400,500,600,700,800/latin,latin-ext,sinhala/1046/0.46/0.34/1.00/0.30|Borel/handwriting/400/latin,latin-ext,math,symbols,vietnamese/1047/0.11/0.16/0.00/0.48|Mina/sans-serif/400,700/bengali,latin,latin-ext/1048/0.25/0.39/1.00/0.39|Trykker/serif/400/latin,latin-ext/1049/0.24/0.47/0.65/0.09|Akronim/display/400/latin,latin-ext/1050/0.45/0.00/0.00/0.91|Anek Tamil/sans-serif/100,200,300,400,500,600,700,800/latin,latin-ext,tamil/1051/0.41/0.55/1.00/0.19|Waterfall/handwriting/400/latin,latin-ext,vietnamese/1052/0.02/0.08/0.00/0.60|IM Fell Double Pica SC/serif/400/latin/1053/0.25/0.32/0.00/0.72|Moul/display/400/khmer,latin/1054/1.00/0.79/1.00/0.10|Tillana/display/400,500,600,700,800/devanagari,latin,latin-ext/1056/0.20/0.32/1.00/0.36|Suwannaphum/serif/100,300,400,700,900/khmer,latin/1057/0.42/0.59/1.00/0.08|Chicle/display/400/latin,latin-ext/1058/0.96/0.05/0.00/0.55|Meie Script/handwriting/400/latin,latin-ext/1059/0.00/0.39/0.00/1.00|Zen Tokyo Zoo/display/400/latin,latin-ext/1060/0.31/0.54/0.00/0.13|Tektur/display/400,500,600,700,800,900/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/1061/0.48/0.77/1.00/0.00|Noto Serif Georgian/serif/100,200,300,400,500,600,700,800,900/georgian,latin,latin-ext/1062/0.38/0.52/0.00/0.33|Abyssinica SIL/serif/400/ethiopic,latin,latin-ext/1063/0.34/0.57/0.42/0.23|Metal Mania/display/400/latin,latin-ext/1064/0.67/0.20/0.00/0.63|Zilla Slab Highlight/serif/400,700/latin,latin-ext/1065/1.00/0.26/1.00/0.03|Angkor/display/400/khmer,latin/1066/1.00/0.79/1.00/0.10|Noto Serif Khmer/serif/100,200,300,400,500,600,700,800,900/khmer,latin,latin-ext/1067/0.38/0.52/0.00/0.33|Stalemate/handwriting/400/latin,latin-ext/1068/0.00/0.00/0.00/1.00|Noto Serif HK/serif/200,300,400,500,600,700,800,900/chinese-hongkong,cyrillic,latin,latin-ext,vietnamese/1069/0.20/0.45/0.00/0.16|Ysabeau SC/sans-serif/100,200,300,400,500,600,700,800,900/cyrillic,cyrillic-ext,greek,latin,latin-ext,math,symbols,vietnamese/1071/0.20/0.62/1.00/0.17|Genos/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cherokee,latin,latin-ext,vietnamese/1073/0.45/0.94/0.75/0.59|Stylish/sans-serif/400/korean,latin/1074/0.45/0.52/0.00/0.38|Baloo Tammudu 2/display/400,500,600,700,800/latin,latin-ext,telugu,vietnamese/1075/0.37/0.55/0.07/0.42|Grape Nuts/handwriting/400/latin,latin-ext,vietnamese/1076/0.09/0.35/0.00/0.67|Cute Font/display/400/korean,latin/1077/0.58/0.58/1.00/0.15|Alkatra/display/400,500,600,700/bengali,devanagari,latin,latin-ext,oriya/1078/0.68/0.43/0.00/0.65|Ranchers/display/400/latin,latin-ext/1079/1.00/0.17/0.94/0.56|Beth Ellen/handwriting/400/latin/1080/0.18/0.17/0.00/0.54|IM Fell Great Primer SC/serif/400/latin/1081/0.27/0.42/0.00/0.83|Barrio/display/400/latin,latin-ext/1082/0.32/0.89/0.00/0.31|Fenix/serif/400/latin,latin-ext/1083/0.38/0.42/1.00/0.12|Belanosima/sans-serif/400,600,700/latin,latin-ext/1084/0.59/0.51/0.00/0.56|Stoke/serif/300,400/latin,latin-ext/1085/0.33/0.63/0.00/0.45|Noto Sans Thai Looped/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,thai/1086/0.36/0.47/1.00/0.24|Akaya Telivigala/display/400/latin,latin-ext,telugu/1087/0.43/0.36/0.00/0.69|Ramaraja/serif/400/latin,telugu/1089/0.63/0.50/0.00/0.50|Texturina/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/1090/0.38/0.45/0.00/0.78|Sonsie One/display/400/latin,latin-ext/1091/0.89/1.00/0.00/0.70|Habibi/serif/400/latin,latin-ext/1092/0.23/0.42/1.00/0.10|Spline Sans Mono/monospace/300,400,500,600,700,300i,400i,500i,600i,700i/latin,latin-ext/1093/0.27/0.66/1.00/0.27|M PLUS 1 Code/monospace/100,200,300,400,500,600,700/japanese,latin,latin-ext,vietnamese/1094/0.26/0.47/1.00/0.23|Madimi One/sans-serif/400/latin,latin-ext,math,symbols/1095/0.72/0.40/0.89/0.51|Smythe/display/400/latin/1096/0.54/0.11/0.00/0.67|Asset/display/400/cyrillic-ext,latin,latin-ext,math,symbols/1097/0.79/1.00/0.00/0.47|Kenia/display/400/latin/1098/0.77/0.19/0.00/0.58|Seymour One/sans-serif/400/cyrillic,latin,latin-ext/1099/0.80/0.95/0.06/0.64|Moon Dance/handwriting/400/latin,latin-ext,vietnamese/1100/0.02/0.02/0.00/0.79|Simonetta/display/400,400i,900,900i/latin,latin-ext/1101/0.18/0.30/0.00/0.93|Atomic Age/display/400/latin/1102/0.43/0.53/1.00/0.27|Donegal One/serif/400/latin,latin-ext/1103/0.36/0.51/0.00/0.63|Paprika/display/400/latin,latin-ext/1104/0.35/0.35/0.00/1.00|The Nautigal/handwriting/400,700/latin,latin-ext,vietnamese/1105/0.05/0.00/0.00/0.69|Nova Slim/display/400/latin/1106/0.30/0.53/1.00/0.10|Underdog/display/400/cyrillic,latin,latin-ext/1107/0.34/0.48/1.00/0.00|Astloch/display/400,700/latin/1108/0.00/0.27/0.00/0.23|SUSE/sans-serif/100,200,300,400,500,600,700,800/latin,latin-ext/1109/0.36/0.48/1.00/0.26|Gemunu Libre/sans-serif/200,300,400,500,600,700,800/latin,latin-ext,sinhala/1110/0.54/0.30/1.00/0.05|Sree Krushnadevaraya/serif/400/latin,telugu/1111/0.38/0.51/1.00/0.11|Margarine/display/400/latin,latin-ext/1112/0.62/0.30/0.00/0.89|Mystery Quest/display/400/latin,latin-ext/1113/0.28/0.14/0.00/1.00|Nova Oval/display/400/latin/1114/0.36/0.54/1.00/0.15|Protest Revolution/display/400/latin,latin-ext,math,symbols,vietnamese/1115/0.55/0.32/0.00/0.46|IM Fell French Canon SC/serif/400/latin/1116/0.26/0.54/0.00/0.75|Zhi Mang Xing/handwriting/400/chinese-simplified,latin/1117/0.51/0.00/0.00/0.59|Sono/sans-serif/200,300,400,500,600,700,800/latin,latin-ext,vietnamese/1118/0.10/0.71/0.20/0.56|Vujahday Script/handwriting/400/latin,latin-ext,vietnamese/1119/0.12/0.27/0.00/0.57|Solitreo/handwriting/400/hebrew,latin,latin-ext/1120/0.34/0.30/0.00/1.00|Train One/display/400/cyrillic,japanese,latin,latin-ext/1121/0.42/0.65/0.00/0.30|Port Lligat Slab/serif/400/latin/1122/0.48/0.40/0.13/0.41|Carrois Gothic SC/sans-serif/400/latin/1123/0.34/0.57/1.00/0.19|Engagement/handwriting/400/latin/1125/0.40/0.00/0.00/1.00|Anek Telugu/sans-serif/100,200,300,400,500,600,700,800/latin,latin-ext,telugu/1126/0.43/0.53/1.00/0.19|Londrina Sketch/display/400/latin/1127/0.17/0.25/0.00/0.58|Sedgwick Ave Display/handwriting/400/latin,latin-ext,vietnamese/1128/0.41/0.00/0.00/0.39|Kite One/sans-serif/400/latin,latin-ext/1129/0.15/0.17/0.05/0.70|Text Me One/sans-serif/400/latin,latin-ext/1130/0.06/0.44/0.66/0.36|Miltonian Tattoo/display/400/latin/1131/0.57/0.58/0.00/0.39|Koh Santepheap/serif/100,300,400,700,900/khmer,latin/1132/0.38/0.52/0.00/0.24|Ysabeau/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext,math,symbols,vietnamese/1133/0.13/0.35/1.00/0.33|Beau Rivage/handwriting/400/latin,latin-ext,vietnamese/1134/0.13/0.03/0.00/0.79|Ewert/display/400/latin,latin-ext/1135/0.69/1.00/0.00/0.16|Edu TAS Beginner/handwriting/400,500,600,700/latin/1136/0.07/0.12/0.27/0.58|Cagliostro/sans-serif/400/latin/1137/0.28/0.41/0.00/0.59|Playwrite DE Grund/handwriting/100,200,300,400/latin/1138/0.10/0.22/0.00/0.73|Nova Cut/display/400/latin/1139/0.32/0.54/1.00/0.04|Ysabeau Infant/sans-serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/cyrillic,cyrillic-ext,greek,latin,latin-ext,math,symbols,vietnamese/1140/0.13/0.36/1.00/0.33|Gentium Plus/serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/1141/0.26/0.31/0.00/0.41|Tilt Prism/display/400/latin,latin-ext,vietnamese/1142/0.43/0.74/0.00/0.34|Kulim Park/sans-serif/200,200i,300,300i,400,400i,600,600i,700,700i/latin,latin-ext/1143/0.34/0.55/1.00/0.35|Tac One/sans-serif/400/latin,latin-ext,math,symbols,vietnamese/1144/1.00/0.49/1.00/0.16|Marko One/serif/400/latin/1145/0.42/0.50/0.00/0.59|Farsan/display/400/gujarati,latin,latin-ext,vietnamese/1146/0.36/0.13/0.00/0.46|Mrs Sheppards/handwriting/400/latin,latin-ext/1147/0.69/0.08/0.00/0.94|Stint Ultra Condensed/serif/400/latin,latin-ext/1148/0.63/0.00/0.96/0.27|Nova Script/display/400/latin/1149/0.37/0.55/0.54/0.13|Sarina/display/400/latin,latin-ext/1150/0.68/0.86/0.00/0.48|Yaldevi/sans-serif/200,300,400,500,600,700/latin,latin-ext,sinhala/1151/0.30/0.28/1.00/0.36|Mynerve/handwriting/400/greek,latin,latin-ext,vietnamese/1152/0.07/0.18/0.00/0.76|Cantora One/sans-serif/400/latin,latin-ext/1153/0.64/0.33/0.00/0.79|Trispace/sans-serif/100,200,300,400,500,600,700,800/latin,latin-ext,vietnamese/1154/0.26/0.81/1.00/0.47|Girassol/display/400/latin,latin-ext/1155/0.40/0.49/0.74/0.15|Vampiro One/display/400/latin,latin-ext/1156/0.73/0.56/1.00/0.18|Braah One/sans-serif/400/gurmukhi,latin,latin-ext,vietnamese/1157/0.88/0.60/1.00/0.26|Miltonian/display/400/latin/1158/0.35/0.58/0.00/1.00|Rubik Moonrocks/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1159/1.00/0.65/0.00/0.38|New Rocker/display/400/latin,latin-ext/1160/0.63/0.29/0.00/0.66|Risque/display/400/latin,latin-ext/1161/0.57/0.50/0.00/0.59|Fuzzy Bubbles/handwriting/400,700/latin,latin-ext,vietnamese/1162/0.16/0.54/0.00/0.83|Cairo Play/sans-serif/200,300,400,500,600,700,800,900/arabic,latin,latin-ext/1163/0.37/0.40/1.00/0.38|Jolly Lodger/display/400/latin,latin-ext/1164/0.74/0.05/0.00/1.00|Noto Sans Ethiopic/sans-serif/100,200,300,400,500,600,700,800,900/ethiopic,latin,latin-ext/1165/0.35/0.47/1.00/0.34|Rubik Doodle Shadow/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext,math,symbols/1166/0.34/0.59/0.00/0.14|Eagle Lake/handwriting/400/latin,latin-ext/1167/0.11/0.29/0.00/1.00|Noto Serif Oriya/serif/400,500,600,700/latin,latin-ext,oriya/1168/0.34/0.58/0.21/0.26|Dorsa/sans-serif/400/latin/1169/0.49/0.00/1.00/0.13|Fasthand/display/400/khmer,latin/1170/0.23/0.06/0.00/0.38|Benne/serif/400/kannada,latin,latin-ext/1171/0.20/0.32/0.00/0.35|Ranga/display/400,700/devanagari,latin,latin-ext/1172/0.56/0.11/0.28/0.34|Noto Sans Math/sans-serif/400/math/1173/0.35/0.47/1.00/0.24|Agdasima/sans-serif/400,700/latin,latin-ext/1174/0.44/0.17/1.00/0.27|Inika/serif/400,700/latin,latin-ext/1175/0.42/0.49/0.89/0.28|Port Lligat Sans/sans-serif/400/latin/1176/0.42/0.40/1.00/0.56|Autour One/display/400/latin,latin-ext/1177/0.41/0.63/0.00/1.00|Festive/handwriting/400/latin,latin-ext,vietnamese/1178/0.19/0.00/0.00/0.72|Gorditas/display/400,700/latin/1179/0.75/0.60/0.00/0.45|Junge/serif/400/latin/1180/0.10/0.42/0.00/0.50|Comforter/handwriting/400/cyrillic,latin,latin-ext,vietnamese/1181/0.09/0.00/0.00/0.75|Sedan SC/serif/400/latin,latin-ext/1182/0.22/0.37/0.00/0.63|Bubbler One/sans-serif/400/latin,latin-ext/1183/0.03/0.20/1.00/0.24|Kaisei HarunoUmi/serif/400,500,700/cyrillic,japanese,latin,latin-ext/1184/0.26/0.59/0.00/0.69|Galdeano/sans-serif/400/latin/1185/0.41/0.39/1.00/0.12|Lacquer/display/400/latin/1186/0.24/0.21/0.00/0.44|Spirax/display/400/latin/1187/0.31/0.37/0.00/0.74|Grenze/serif/100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,vietnamese/1188/0.61/0.36/1.00/0.20|Barriecito/display/400/latin,latin-ext,vietnamese/1189/0.72/0.47/0.00/0.31|Shalimar/handwriting/400/latin,latin-ext,vietnamese/1190/0.01/0.00/0.00/0.32|Stint Ultra Expanded/serif/400/latin,latin-ext/1191/0.20/1.00/0.63/0.33|Offside/display/400/latin,latin-ext/1192/0.22/0.51/1.00/0.25|Keania One/display/400/latin,latin-ext/1193/0.82/0.45/0.19/0.19|Alkalami/serif/400/arabic,latin,latin-ext/1194/0.53/0.42/0.00/0.53|Smokum/display/400/latin/1195/0.65/0.09/0.00/0.18|Kavivanar/handwriting/400/latin,latin-ext,tamil/1196/0.23/0.18/0.91/0.36|Shippori Antique B1/sans-serif/400/japanese,latin,latin-ext/1197/0.48/0.54/0.00/0.35|Milonga/display/400/latin,latin-ext/1198/0.31/0.36/0.00/0.83|Smooch Sans/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1199/0.32/0.20/1.00/0.18|Liu Jian Mao Cao/handwriting/400/chinese-simplified,latin/1200/0.00/0.07/0.00/1.00|Akatab/sans-serif/400,500,600,700,800,900/latin,latin-ext,tifinagh/1201/0.28/0.46/1.00/0.29|Long Cang/handwriting/400/chinese-simplified,latin/1202/0.12/0.60/0.00/0.94|Lexend Tera/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1203/0.20/1.00/1.00/0.38|Bungee Spice/display/400/latin,latin-ext,vietnamese/1204/0.99/1.00/0.99/0.16|Kotta One/serif/400/latin,latin-ext/1205/0.27/0.32/0.45/0.29|Zain/sans-serif/200,300,400,700,800,900/arabic,latin/1206/0.47/0.46/1.00/0.33|Glass Antiqua/display/400/latin,latin-ext/1207/0.35/0.47/0.21/0.45|BIZ UDMincho/serif/400,700/cyrillic,greek-ext,japanese,latin,latin-ext/1208/0.18/0.54/0.00/0.13|Anton SC/sans-serif/400/latin,latin-ext,vietnamese/1209/1.00/0.21/1.00/0.15|Marhey/display/300,400,500,600,700/arabic,latin,latin-ext/1210/0.37/0.41/0.61/0.85|Anek Gujarati/sans-serif/100,200,300,400,500,600,700,800/gujarati,latin,latin-ext/1211/0.44/0.52/1.00/0.19|Big Shoulders Stencil Display/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1212/0.48/0.00/0.72/0.27|Imperial Script/handwriting/400/latin,latin-ext,vietnamese/1213/0.23/0.18/0.00/0.35|Bilbo/handwriting/400/latin,latin-ext,vietnamese/1214/0.09/0.00/0.00/0.78|Linden Hill/serif/400,400i/latin/1215/0.26/0.29/0.00/0.36|Englebert/sans-serif/400/latin,latin-ext/1216/0.43/0.16/0.00/0.86|Poltawski Nowy/serif/400,500,600,700,400i,500i,600i,700i/latin,latin-ext,vietnamese/1217/0.38/0.54/0.00/0.41|Jacques Francois/serif/400/latin/1218/0.26/0.49/0.00/0.59|Noto Sans Gothic/sans-serif/400/gothic,latin,latin-ext/1219/0.36/0.47/1.00/0.24|New Tegomin/serif/400/japanese,latin,latin-ext/1220/0.20/0.59/0.00/0.33|Gentium Book Plus/serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese/1221/0.35/0.33/0.00/0.40|Averia Gruesa Libre/display/400/latin,latin-ext/1222/0.43/0.50/0.00/0.35|Srisakdi/display/400,700/latin,latin-ext,thai,vietnamese/1223/0.00/0.27/0.00/0.46|Lugrasimo/handwriting/400/latin,latin-ext/1224/0.16/0.39/0.00/0.79|Arbutus/serif/400/latin,latin-ext/1225/0.71/0.81/0.00/1.00|Sahitya/serif/400,700/devanagari,latin/1226/0.31/0.33/0.00/0.38|Kavoon/display/400/latin,latin-ext/1227/1.00/0.48/0.00/0.50|Anta/sans-serif/400/latin,latin-ext,math,symbols/1228/0.50/0.65/1.00/0.14|Almendra SC/serif/400/latin/1229/0.44/0.44/0.00/0.29|Piedra/display/400/latin,latin-ext/1231/0.94/0.19/0.00/0.45|Joti One/display/400/latin,latin-ext/1232/0.61/0.55/1.00/0.40|Finlandica/sans-serif/400,500,600,700,400i,500i,600i,700i/cyrillic,cyrillic-ext,latin,latin-ext/1233/0.34/0.36/1.00/0.27|IBM Plex Sans Thai Looped/sans-serif/100,200,300,400,500,600,700/cyrillic-ext,latin,latin-ext,thai/1234/0.34/0.49/1.00/0.29|Blaka/display/400/arabic,latin,latin-ext/1235/1.00/0.26/1.00/0.00|Tourney/display/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/1236/0.43/0.63/0.89/0.00|Condiment/handwriting/400/latin,latin-ext/1237/0.21/0.00/0.00/0.68|Moderustic/sans-serif/300,400,500,600,700,800/cyrillic,cyrillic-ext,greek,latin,latin-ext/1238/0.37/0.50/1.00/0.30|Tulpen One/display/400/latin/1239/0.35/0.00/1.00/0.33|Dangrek/display/400/khmer,latin/1240/0.83/0.46/0.00/0.48|Kirang Haerang/display/400/korean,latin/1241/0.37/0.24/0.00/0.58|Buda/display/300/latin/1242/0.10/0.39/1.00/0.45|Ruluko/sans-serif/400/latin,latin-ext/1243/0.26/0.32/1.00/0.30|Updock/handwriting/400/latin,latin-ext,vietnamese/1244/0.24/0.03/0.00/0.63|Content/display/400,700/khmer/1245/0.00/1.00/1.00/0.00|Elsie Swash Caps/display/400,900/latin,latin-ext/1246/0.26/0.36/0.00/0.50|Lancelot/display/400/latin,latin-ext/1248/0.15/0.20/0.00/0.18|Mingzat/sans-serif/400/latin,latin-ext,lepcha/1249/0.29/0.72/1.00/0.13|Kumar One Outline/display/400/gujarati,latin,latin-ext/1250/0.20/0.40/1.00/0.00|Babylonica/handwriting/400/latin,latin-ext,vietnamese/1251/0.00/0.02/0.00/0.25|Bungee Outline/display/400/latin,latin-ext,vietnamese/1252/0.00/1.00/0.00/0.16|Princess Sofia/handwriting/400/latin,latin-ext/1253/0.10/0.00/0.00/0.59|Anek Gurmukhi/sans-serif/100,200,300,400,500,600,700,800/gurmukhi,latin,latin-ext/1254/0.41/0.55/1.00/0.19|Bigelow Rules/display/400/latin,latin-ext/1255/0.36/0.00/0.00/0.60|Griffy/display/400/latin,latin-ext/1256/0.22/0.23/0.00/0.63|Truculenta/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1257/0.38/0.27/0.00/0.86|Kumar One/display/400/gujarati,latin,latin-ext/1258/0.62/0.40/1.00/0.00|Wellfleet/serif/400/latin,latin-ext/1259/0.57/0.51/0.00/0.18|Noto Serif Khojki/serif/400,500,600,700/khojki,latin,latin-ext/1260/0.38/0.52/0.21/0.26|Climate Crisis/display/400/latin,latin-ext/1261/1.00/1.00/0.00/0.79|Yeon Sung/display/400/korean,latin/1262/0.34/0.31/0.00/1.00|Bahiana/display/400/latin,latin-ext/1263/0.63/0.03/1.00/0.00|Protest Riot/display/400/latin,latin-ext,math,symbols,vietnamese/1264/0.85/0.33/0.00/0.76|Water Brush/handwriting/400/latin,latin-ext,vietnamese/1265/0.22/0.00/0.00/0.26|Bungee Hairline/display/400/latin,latin-ext,vietnamese/1266/0.00/1.00/1.00/0.16|Metal/display/400/khmer,latin/1267/0.31/0.34/0.00/0.48|Anek Kannada/sans-serif/100,200,300,400,500,600,700,800/kannada,latin,latin-ext/1268/0.42/0.54/1.00/0.19|Protest Guerrilla/display/400/latin,latin-ext,math,symbols,vietnamese/1269/1.00/0.45/1.00/0.15|Odor Mean Chey/serif/400/khmer,latin/1270/0.85/0.50/0.91/0.18|Fascinate/display/400/latin/1271/0.87/0.50/0.00/0.71|Noto Serif Kannada/serif/100,200,300,400,500,600,700,800,900/kannada,latin,latin-ext/1272/0.39/0.50/0.00/0.32|Poor Story/display/400/korean,latin/1273/0.31/0.37/1.00/0.38|Praise/handwriting/400/latin,latin-ext,vietnamese/1274/0.94/0.24/0.00/0.68|Snippet/sans-serif/400/latin/1275/0.15/0.46/0.56/0.53|Chilanka/handwriting/400/latin,latin-ext,malayalam/1276/0.16/0.44/0.00/0.48|Lavishly Yours/handwriting/400/latin,latin-ext,vietnamese/1277/0.00/0.00/0.00/0.39|Fascinate Inline/display/400/latin/1278/0.82/0.50/0.00/0.72|Noto Sans Anatolian Hieroglyphs/sans-serif/400/anatolian-hieroglyphs,latin,latin-ext/1279/0.35/0.47/1.00/0.24|Ruge Boogie/handwriting/400/latin,latin-ext,vietnamese/1280/0.15/0.00/0.00/0.69|Felipa/handwriting/400/latin,latin-ext/1281/0.20/0.09/0.51/0.40|Cherry Bomb One/display/400/japanese,latin,latin-ext,vietnamese/1282/0.99/0.61/0.35/0.97|Chathura/sans-serif/100,300,400,700,800/latin,telugu/1283/0.33/0.42/1.00/0.15|Jacques Francois Shadow/display/400/latin/1284/0.29/0.54/0.00/0.44|Unlock/display/400/latin,latin-ext/1285/0.92/0.61/1.00/0.10|Noto Serif Hebrew/serif/100,200,300,400,500,600,700,800,900/hebrew,latin,latin-ext/1286/0.38/0.51/0.00/0.33|Arsenal SC/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/1287/0.23/0.26/1.00/0.33|Romanesco/handwriting/400/latin,latin-ext/1288/0.62/0.00/0.00/1.00|Aoboshi One/serif/400/japanese,latin,latin-ext/1289/0.50/0.44/0.19/0.24|Noto Sans Samaritan/sans-serif/400/latin,latin-ext,samaritan/1290/0.36/0.47/1.00/0.24|Preahvihear/sans-serif/400/khmer,latin/1291/0.37/0.52/0.00/0.37|Ribeye Marrow/display/400/latin,latin-ext/1292/0.34/0.62/0.00/0.43|Fustat/sans-serif/200,300,400,500,600,700,800/arabic,latin,latin-ext/1293/0.36/0.51/1.00/0.26|Gwendolyn/handwriting/400,700/latin,latin-ext,vietnamese/1294/0.10/0.17/0.00/0.68|Lumanosimo/handwriting/400/latin,latin-ext/1295/0.34/0.75/0.00/0.97|Edu NSW ACT Foundation/handwriting/400,500,600,700/latin/1296/0.13/0.04/0.02/0.60|Sometype Mono/monospace/400,500,600,700,400i,500i,600i,700i/latin,latin-ext/1297/0.15/0.72/1.00/0.20|Victor Mono/monospace/100,200,300,400,500,600,700,100i,200i,300i,400i,500i,600i,700i/cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese/1298/0.17/0.61/1.00/0.38|Foldit/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1299/0.63/0.12/1.00/0.00|Chela One/display/400/latin,latin-ext/1300/1.00/0.33/1.00/0.42|Encode Sans SC/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1301/0.33/0.60/1.00/0.20|Noto Serif Telugu/serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,telugu/1302/0.38/0.53/0.00/0.32|Ravi Prakash/display/400/latin,telugu/1303/0.66/0.56/1.00/0.19|Big Shoulders Stencil Text/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1304/0.53/0.05/0.72/0.27|Noto Sans Cherokee/sans-serif/100,200,300,400,500,600,700,800,900/cherokee,latin,latin-ext/1305/0.35/0.47/1.00/0.31|Joan/serif/400/latin,latin-ext/1306/0.24/0.30/0.32/0.36|GFS Neohellenic/sans-serif/400,400i,700,700i/greek/1307/0.21/0.49/0.73/0.28|Gidugu/sans-serif/400/latin,telugu/1308/0.86/0.45/1.00/0.18|Playwrite US Trad/handwriting/100,200,300,400/latin/1309/0.18/0.19/0.00/0.97|Big Shoulders Inline Text/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1310/0.57/0.06/0.00/0.34|Molle/handwriting/400i/latin,latin-ext/1311/0.58/0.44/0.00/0.52|Bonheur Royale/handwriting/400/latin,latin-ext,vietnamese/1312/0.15/0.09/0.00/0.78|Phudu/display/300,400,500,600,700,800,900/cyrillic-ext,latin,latin-ext,vietnamese/1313/0.34/0.76/1.00/0.17|IBM Plex Sans Devanagari/sans-serif/100,200,300,400,500,600,700/cyrillic-ext,devanagari,latin,latin-ext/1314/0.34/0.49/1.00/0.29|Oldenburg/display/400/latin,latin-ext/1316/0.31/0.58/0.00/0.39|Luxurious Script/handwriting/400/latin,latin-ext,vietnamese/1317/0.22/0.04/0.00/0.73|DynaPuff/display/400,500,600,700/cyrillic-ext,latin,latin-ext/1318/0.79/0.55/0.00/0.74|Amiri Quran/serif/400/arabic,latin/1319/0.30/0.47/0.00/0.73|Noto Sans Osmanya/sans-serif/400/latin,latin-ext,osmanya/1320/0.34/0.49/1.00/0.24|Diplomata SC/display/400/latin,latin-ext/1321/0.77/1.00/0.00/0.28|Luxurious Roman/display/400/latin,latin-ext,vietnamese/1322/0.33/0.66/0.00/0.56|Rubik Glitch/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1323/1.00/0.66/0.00/0.00|Hubballi/sans-serif/400/kannada,latin,latin-ext/1324/0.13/0.62/0.49/0.52|Noto Sans Lao/sans-serif/100,200,300,400,500,600,700,800,900/lao,latin,latin-ext/1325/0.35/0.47/1.00/0.34|Lakki Reddy/handwriting/400/latin,telugu/1326/0.58/0.46/0.00/0.68|Labrada/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,vietnamese/1327/0.40/0.46/0.00/0.58|Noto Serif Armenian/serif/100,200,300,400,500,600,700,800,900/armenian,latin,latin-ext/1328/0.38/0.52/0.00/0.33|Galindo/display/400/latin,latin-ext/1329/0.75/0.55/0.00/0.70|Flavors/display/400/latin,latin-ext/1330/0.61/0.20/0.00/0.66|Stalinist One/display/400/cyrillic,latin,latin-ext/1331/0.84/1.00/1.00/0.00|Plaster/display/400/latin,latin-ext/1332/0.62/0.84/1.00/0.04|Qahiri/sans-serif/400/arabic,latin/1333/0.34/0.00/1.00/0.22|Erica One/display/400/latin,latin-ext/1334/1.00/0.85/1.00/0.19|Hanalei Fill/display/400/latin,latin-ext/1335/1.00/0.52/0.00/0.40|Alumni Sans Inline One/display/400,400i/latin,latin-ext,vietnamese/1336/1.00/0.20/0.00/0.12|Gasoek One/sans-serif/400/korean,latin,latin-ext/1337/1.00/0.72/1.00/0.26|Gideon Roman/display/400/latin,latin-ext,vietnamese/1338/0.24/0.66/0.00/0.33|Aref Ruqaa Ink/serif/400,700/arabic,latin,latin-ext/1339/0.34/0.44/0.00/0.56|Inspiration/handwriting/400/latin,latin-ext,vietnamese/1340/0.05/0.00/0.00/0.68|Revalia/display/400/latin,latin-ext/1341/0.47/1.00/0.00/0.71|Noto Serif Tibetan/serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,tibetan/1342/0.38/0.51/0.00/0.32|Siemreap/sans-serif/400/khmer/1343/0.00/1.00/1.00/0.00|Single Day/display/400/korean/1344/0.40/0.41/0.00/0.64|Jacquarda Bastarda 9/display/400/latin,latin-ext,math,symbols/1345/0.35/0.74/0.00/0.00|Reem Kufi Ink/sans-serif/400/arabic,latin,latin-ext,vietnamese/1346/0.37/0.39/1.00/0.31|Federant/display/400/latin/1347/0.55/0.48/0.00/0.27|Ballet/handwriting/400/latin,latin-ext,vietnamese/1349/0.00/0.00/0.00/0.78|Honk/display/400/latin,latin-ext,math,symbols,vietnamese/1350/0.32/0.91/0.00/1.00|Castoro Titling/display/400/latin,latin-ext/1351/0.18/0.91/0.00/0.60|Grey Qo/handwriting/400/latin,latin-ext,vietnamese/1352/0.05/0.00/0.00/0.60|Mea Culpa/handwriting/400/latin,latin-ext,vietnamese/1353/0.19/0.02/0.00/0.68|Dr Sugiyama/handwriting/400/latin,latin-ext/1354/0.16/0.00/0.00/0.80|Noto Serif Sinhala/serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,sinhala/1355/0.31/0.63/0.00/0.33|Bonbon/handwriting/400/latin/1356/0.22/0.48/0.00/0.71|Teachers/sans-serif/400,500,600,700,800,400i,500i,600i,700i,800i/greek-ext,latin,latin-ext/1357/0.21/0.35/1.00/0.39|Caramel/handwriting/400/latin,latin-ext,vietnamese/1358/0.41/0.32/0.00/0.80|Rubik Wet Paint/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1360/1.00/0.53/0.00/0.46|Noto Sans Mongolian/sans-serif/400/latin,latin-ext,math,mongolian,symbols/1361/0.35/0.47/1.00/0.24|Reem Kufi Fun/sans-serif/400,500,600,700/arabic,latin,latin-ext,vietnamese/1362/0.37/0.39/1.00/0.29|Almendra Display/display/400/latin,latin-ext/1363/0.00/0.27/0.00/0.32|Aubrey/display/400/latin/1364/0.39/0.24/1.00/0.28|BioRhyme Expanded/serif/200,300,400,700,800/latin,latin-ext/1365/0.32/1.00/1.00/0.18|Emblema One/display/400/latin,latin-ext/1366/0.82/0.97/0.13/0.57|Mr Bedfort/handwriting/400/latin,latin-ext/1367/0.04/0.00/0.00/0.61|Tiro Devanagari Sanskrit/serif/400,400i/devanagari,latin,latin-ext/1368/0.38/0.46/0.00/0.58|Peddana/serif/400/latin,telugu/1369/0.43/0.57/0.00/0.17|Edu AU VIC WA NT Hand/handwriting/400,500,600,700/latin,latin-ext/1370/0.01/0.08/0.00/0.65|Dhurjati/sans-serif/400/latin,telugu/1371/0.79/0.77/1.00/0.02|Bagel Fat One/display/400/korean,latin,latin-ext/1372/1.00/0.46/0.02/0.55|Darumadrop One/display/400/japanese,latin,latin-ext/1373/0.81/0.56/0.00/0.56|Comme/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext/1374/0.33/0.46/1.00/0.38|Diplomata/display/400/latin,latin-ext/1375/0.55/1.00/0.00/0.35|Rubik Iso/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1376/0.33/0.63/0.00/0.00|Butcherman/display/400/latin,latin-ext/1377/0.93/0.59/0.00/0.09|Passero One/display/400/latin,latin-ext/1378/0.59/0.25/1.00/0.14|Jim Nightshade/handwriting/400/latin,latin-ext/1379/0.09/0.00/0.00/0.91|Sirin Stencil/display/400/latin/1380/0.33/0.23/0.00/0.49|Hedvig Letters Sans/sans-serif/400/latin,latin-ext,math,symbols/1381/0.41/0.48/1.00/0.27|Noto Serif Ethiopic/serif/100,200,300,400,500,600,700,800,900/ethiopic,latin,latin-ext/1382/0.38/0.52/0.00/0.33|Alumni Sans Pinstripe/sans-serif/400,400i/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/1383/0.00/0.21/1.00/0.29|Jacquard 12/display/400/latin,latin-ext,math,symbols/1384/0.60/0.75/0.00/0.00|Uchen/serif/400/latin,tibetan/1385/0.26/0.66/0.00/0.37|Island Moments/handwriting/400/latin,latin-ext,vietnamese/1386/0.06/0.28/0.00/0.47|Tiro Devanagari Marathi/serif/400,400i/devanagari,latin,latin-ext/1387/0.38/0.46/0.00/0.58|Rubik Beastly/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1388/1.00/0.42/0.00/0.61|Ga Maamli/display/400/latin,latin-ext,vietnamese/1389/0.55/0.68/0.00/0.70|Noto Serif Lao/serif/100,200,300,400,500,600,700,800,900/lao,latin,latin-ext/1390/0.38/0.52/0.00/0.33|Fruktur/display/400,400i/cyrillic-ext,latin,latin-ext,vietnamese/1391/1.00/0.35/0.00/0.63|M PLUS Code Latin/sans-serif/100,200,300,400,500,600,700/latin,latin-ext,vietnamese/1392/0.26/0.47/1.00/0.24|Butterfly Kids/handwriting/400/latin,latin-ext/1393/0.00/0.00/0.00/0.60|Sevillana/display/400/latin,latin-ext/1395/0.20/0.08/0.00/0.69|Neonderthaw/handwriting/400/latin,latin-ext,vietnamese/1396/0.20/0.29/0.00/0.74|Bacasime Antique/serif/400/latin,latin-ext/1398/0.24/0.60/0.00/0.45|Playwrite IS/handwriting/100,200,300,400/latin/1399/0.17/0.29/0.00/0.79|Bokor/display/400/khmer,latin/1400/0.78/0.18/0.05/0.29|Yuji Boku/serif/400/cyrillic,japanese,latin,latin-ext/1401/0.23/0.76/0.00/0.79|Ruwudu/serif/400,500,600,700/arabic,latin,latin-ext/1402/0.30/0.35/0.00/0.54|Tai Heritage Pro/serif/400,700/latin,latin-ext,tai-viet,vietnamese/1403/0.35/0.49/0.00/0.59|Rubik Glitch Pop/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext,math,symbols/1404/0.63/0.65/0.00/0.18|Freeman/display/400/latin,latin-ext,vietnamese/1405/0.88/0.34/1.00/0.30|Inclusive Sans/sans-serif/400,400i/latin,latin-ext,vietnamese/1406/0.37/0.54/1.00/0.33|Devonshire/handwriting/400/latin,latin-ext/1407/0.50/0.00/0.00/0.59|Reddit Sans Condensed/sans-serif/200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1409/0.42/0.31/1.00/0.24|Orbit/sans-serif/400/korean,latin,latin-ext/1410/0.18/0.76/1.00/0.18|Bruno Ace/display/400/latin,latin-ext/1411/0.42/1.00/1.00/0.27|Noto Sans Javanese/sans-serif/400,500,600,700/javanese,latin,latin-ext/1413/0.35/0.47/1.00/0.26|Miss Fajardose/handwriting/400/latin,latin-ext/1414/0.12/0.00/0.00/0.65|Purple Purse/display/400/latin,latin-ext/1415/0.49/0.52/0.00/0.59|Combo/display/400/latin,latin-ext/1416/0.28/0.28/0.65/0.83|LXGW WenKai Mono TC/monospace/300,400,700/chinese-hongkong,cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,lisu,vietnamese/1418/0.20/0.60/0.00/0.40|Suravaram/serif/400/latin,telugu/1419/0.44/0.59/0.06/0.23|Nuosu SIL/sans-serif/400/latin,latin-ext,yi/1420/0.34/0.47/0.00/0.13|Rubik Distressed/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1421/1.00/0.64/0.00/0.00|Nabla/display/400/cyrillic-ext,latin,latin-ext,math,vietnamese/1422/0.99/0.26/0.00/0.01|Trochut/display/400,400i,700/latin/1423/0.43/0.28/1.00/0.20|Kalnia Glaze/display/100,200,300,400,500,600,700/latin,latin-ext/1424/0.00/0.68/0.00/0.43|Chenla/display/400/khmer/1425/0.00/1.00/1.00/0.00|Bona Nova SC/serif/400,400i,700/cyrillic,cyrillic-ext,greek,hebrew,latin,latin-ext,vietnamese/1426/0.15/0.32/0.00/0.38|Sedan/serif/400,400i/latin,latin-ext/1427/0.22/0.37/0.00/0.63|Tiro Telugu/serif/400,400i/latin,latin-ext,telugu/1428/0.38/0.46/0.00/0.58|Sigmar/display/400/latin,latin-ext,vietnamese/1429/1.00/0.50/0.00/0.35|Noto Serif Balinese/serif/400/balinese,latin,latin-ext/1430/0.38/0.51/0.33/0.24|Alumni Sans Collegiate One/sans-serif/400,400i/cyrillic,latin,latin-ext,vietnamese/1431/1.00/0.18/0.00/0.14|Explora/handwriting/400/cherokee,latin,latin-ext,vietnamese/1432/0.00/0.03/0.00/0.64|Wittgenstein/serif/400,500,600,700,800,900,400i,500i,600i,700i,800i,900i/latin,latin-ext/1433/0.34/0.41/0.70/0.11|Tiny5/sans-serif/400/cyrillic,cyrillic-ext,greek,latin,latin-ext/1434/0.38/0.52/1.00/0.00|Taprom/display/400/khmer,latin/1435/0.23/0.06/0.00/0.38|Yuji Mai/serif/400/cyrillic,japanese,latin,latin-ext/1436/0.38/0.84/0.00/0.83|Rubik Vinyl/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1437/0.29/0.53/0.00/0.64|Hedvig Letters Serif/serif/400/latin,latin-ext,math,symbols/1438/0.30/0.42/0.01/0.25|Tiro Tamil/serif/400,400i/latin,latin-ext,tamil/1439/0.38/0.45/0.00/0.58|Love Light/handwriting/400/latin,latin-ext,vietnamese/1440/0.05/0.00/0.00/0.33|Bungee Tint/display/400/latin,latin-ext,vietnamese/1441/0.99/1.00/0.99/0.16|Noto Sans Adlam/sans-serif/400,500,600,700/adlam,latin,latin-ext/1442/0.36/0.47/1.00/0.26|Noto Serif Vithkuqi/serif/400,500,600,700/latin,latin-ext,vithkuqi/1443/0.38/0.51/0.21/0.26|Fleur De Leah/handwriting/400/latin,latin-ext,vietnamese/1444/0.20/0.00/0.00/0.60|Kablammo/display/400/cyrillic,cyrillic-ext,latin,latin-ext,vietnamese/1445/0.81/0.49/0.00/0.78|Anek Odia/sans-serif/100,200,300,400,500,600,700,800/latin,latin-ext,oriya/1446/0.44/0.52/1.00/0.19|Splash/handwriting/400/latin,latin-ext,vietnamese/1447/0.16/0.06/0.00/0.41|Matemasie/sans-serif/400/latin,latin-ext/1448/1.00/0.63/0.00/0.92|Diphylleia/serif/400/korean,latin,latin-ext/1449/0.22/0.53/0.00/0.70|Playwrite FR Moderne/handwriting/100,200,300,400/latin/1450/0.00/0.04/0.00/0.74|Tiro Gurmukhi/serif/400,400i/gurmukhi,latin,latin-ext/1451/0.38/0.45/0.00/0.58|Moulpali/sans-serif/400/khmer,latin/1452/0.41/0.39/1.00/0.29|Tsukimi Rounded/sans-serif/300,400,500,600,700/japanese,latin,latin-ext/1453/0.05/0.35/0.00/0.53|Konkhmer Sleokchher/display/400/khmer,latin,latin-ext/1454/0.74/0.57/1.00/0.24|Noto Serif Gujarati/serif/100,200,300,400,500,600,700,800,900/gujarati,latin,latin-ext,math,symbols/1456/0.37/0.54/0.00/0.32|Petemoss/handwriting/400/latin,latin-ext,vietnamese/1457/0.22/0.00/0.00/0.32|Jaro/sans-serif/400/latin,latin-ext,vietnamese/1458/1.00/0.48/0.84/0.07|Cactus Classical Serif/serif/400/chinese-hongkong,cyrillic,latin,latin-ext,vietnamese/1459/0.14/0.55/0.89/0.07|Jacquard 24/display/400/latin,latin-ext/1460/0.62/0.66/0.00/0.00|Big Shoulders Inline Display/display/100,200,300,400,500,600,700,800,900/latin,latin-ext,vietnamese/1461/0.54/0.00/0.00/0.34|Send Flowers/handwriting/400/latin,latin-ext,vietnamese/1462/0.15/0.24/0.00/0.38|Langar/display/400/gurmukhi,latin,latin-ext/1463/0.67/0.31/0.11/0.44|My Soul/handwriting/400/latin,latin-ext,vietnamese/1464/0.25/0.25/0.00/0.78|Dai Banna SIL/serif/300,300i,400,400i,500,500i,600,600i,700,700i/latin,latin-ext,new-tai-lue/1465/0.35/0.36/0.00/0.39|Noto Serif NP Hmong/serif/400,500,600,700/latin,nyiakeng-puachue-hmong/1466/0.38/0.51/0.21/0.26|Bahianita/display/400/latin,latin-ext,vietnamese/1467/0.75/0.00/1.00/0.00|Noto Sans Coptic/sans-serif/400/coptic,latin,latin-ext/1468/0.35/0.47/1.00/0.24|Noto Serif Myanmar/serif/100,200,300,400,500,600,700,800,900/myanmar/1469/0.00/1.00/1.00/0.00|Noto Sans Syloti Nagri/sans-serif/400/latin,latin-ext,syloti-nagri/1470/0.35/0.47/1.00/0.24|Sassy Frass/handwriting/400/latin,latin-ext,vietnamese/1471/0.17/0.00/0.00/0.72|Tiro Kannada/serif/400,400i/kannada,latin,latin-ext/1472/0.38/0.46/0.00/0.58|Oi/display/400/cyrillic,cyrillic-ext,greek,latin,latin-ext,tamil,vietnamese/1473/1.00/1.00/0.00/0.74|Tapestry/handwriting/400/latin,latin-ext,vietnamese/1474/0.40/0.47/0.00/0.66|Lunasima/sans-serif/400,700/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese/1475/0.31/0.56/1.00/0.24|Noto Sans Sora Sompeng/sans-serif/400,500,600,700/latin,latin-ext,sora-sompeng/1476/0.36/0.47/1.00/0.26|Playwrite AR/handwriting/100,200,300,400/latin/1477/0.09/0.13/0.00/0.96|Vibes/display/400/arabic,latin/1478/0.05/0.15/0.83/0.42|Sankofa Display/sans-serif/400/latin,latin-ext,vietnamese/1479/0.13/0.34/0.00/0.64|Kolker Brush/handwriting/400/latin,latin-ext,vietnamese/1480/0.30/0.12/0.00/0.25|Geostar/display/400/latin/1481/0.22/1.00/1.00/0.00|Noto Serif Tamil/serif/100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i/latin,latin-ext,tamil/1482/0.38/0.52/0.00/0.33|Noto Sans Carian/sans-serif/400/carian,latin,latin-ext/1483/0.35/0.47/1.00/0.24|Rubik Doodle Triangles/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext,math,symbols/1484/1.00/0.61/0.00/0.05|Noto Sans Tagalog/sans-serif/400/latin,latin-ext,tagalog/1485/0.35/0.47/1.00/0.24|Snowburst One/display/400/latin,latin-ext/1486/0.03/0.56/0.00/0.48|Beiruti/sans-serif/200,300,400,500,600,700,800,900/arabic,latin,latin-ext,vietnamese/1487/0.37/0.27/0.57/0.42|Palette Mosaic/display/400/japanese,latin/1488/0.40/0.79/0.00/0.54|Twinkle Star/handwriting/400/latin,latin-ext,vietnamese/1489/0.27/0.39/0.00/0.69|Playwrite GB S/handwriting/100,200,300,400,100i,200i,300i,400i/latin/1490/0.16/0.28/0.00/0.74|Noto Sans Tangsa/sans-serif/400,500,600,700/latin,latin-ext,tangsa/1491/0.35/0.47/1.00/0.26|Noto Rashi Hebrew/serif/100,200,300,400,500,600,700,800,900/greek-ext,hebrew,latin,latin-ext/1492/0.38/0.51/0.00/0.32|Grechen Fuemen/handwriting/400/latin,latin-ext,vietnamese/1494/0.21/0.68/0.00/0.76|Noto Serif Old Uyghur/serif/400/latin,latin-ext,old-uyghur/1495/0.41/0.49/0.33/0.24|Sixtyfour/monospace/400/latin,latin-ext,math,symbols/1496/0.37/1.00/0.00/0.70|Noto Sans Tai Viet/sans-serif/400/latin,latin-ext,tai-viet/1497/0.35/0.47/1.00/0.24|LXGW WenKai TC/handwriting/300,400,700/chinese-hongkong,cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,lisu,vietnamese/1498/0.20/0.67/0.18/0.46|Geostar Fill/display/400/latin/1499/0.36/1.00/1.00/0.00|Playwrite ES/handwriting/100,200,300,400/latin/1500/0.11/0.15/0.00/0.90|Noto Serif Tangut/serif/400/latin,latin-ext,tangut/1501/0.15/0.55/0.72/0.06|Workbench/monospace/400/latin,math,symbols/1503/0.56/0.48/0.00/0.70|Moirai One/display/400/korean,latin,latin-ext/1504/0.00/0.57/0.00/0.41|Edu QLD Beginner/handwriting/400,500,600,700/latin/1505/0.13/0.13/0.00/0.63|Zen Loop/display/400,400i/latin,latin-ext/1506/0.00/0.00/0.86/0.35|Noto Sans Canadian Aboriginal/sans-serif/100,200,300,400,500,600,700,800,900/canadian-aboriginal,latin,latin-ext,math,symbols/1507/0.34/0.49/1.00/0.31|Noto Sans Limbu/sans-serif/400/latin,latin-ext,limbu/1509/0.36/0.47/1.00/0.24|Playwrite BE VLG/handwriting/100,200,300,400/latin/1510/0.15/0.19/0.00/0.95|Rubik 80s Fade/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1511/1.00/0.68/0.00/0.00|Playwrite AU NSW/handwriting/100,200,300,400/latin/1512/0.07/0.13/0.00/0.78|Noto Sans Cypro Minoan/sans-serif/400/cypro-minoan,latin,latin-ext/1513/0.36/0.47/1.00/0.24|Playwrite AU VIC/handwriting/100,200,300,400/latin/1514/0.07/0.15/0.00/0.84|Annapurna SIL/serif/400,700/devanagari,latin,latin-ext,math,symbols/1515/0.39/0.50/0.93/0.14|Noto Sans Old Hungarian/sans-serif/400/latin,latin-ext,old-hungarian/1516/0.35/0.47/1.00/0.24|Noto Sans Hanunoo/sans-serif/400/hanunoo,latin,latin-ext/1517/0.35/0.47/1.00/0.24|Hanalei/display/400/latin,latin-ext/1518/0.48/0.52/0.00/0.59|Rubik Spray Paint/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1519/1.00/0.60/0.00/0.00|Noto Sans Vai/sans-serif/400/latin,latin-ext,vai/1520/0.35/0.47/1.00/0.24|Playwrite AU SA/handwriting/100,200,300,400/latin/1521/0.08/0.14/0.00/0.74|Estonia/handwriting/400/latin,latin-ext,vietnamese/1522/0.00/0.00/0.00/0.31|Moo Lah Lah/display/400/latin,latin-ext,vietnamese/1523/0.77/0.28/0.00/0.41|Playwrite US Modern/handwriting/100,200,300,400/latin/1524/0.10/0.21/0.00/0.76|Playwrite MX/handwriting/100,200,300,400/latin/1525/0.17/0.18/0.00/0.99|Slackside One/handwriting/400/japanese,latin,latin-ext/1526/0.25/0.68/0.00/0.65|Gajraj One/display/400/devanagari,latin,latin-ext/1527/1.00/0.99/1.00/0.26|Rock 3D/display/400/japanese,latin/1528/0.00/0.93/0.00/0.63|Ubuntu Sans Mono/monospace/400,500,600,700,400i,500i,600i,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext/1529/0.18/0.64/1.00/0.52|Noto Sans Thaana/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,thaana/1530/0.35/0.47/1.00/0.31|Warnes/display/400/latin,latin-ext/1531/0.29/0.71/0.00/0.39|Rubik Pixels/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1532/0.80/0.70/0.00/0.00|Grandiflora One/serif/400/korean,latin,latin-ext/1533/0.00/0.49/0.69/0.25|Syne Tactile/display/400/latin,latin-ext/1534/0.22/0.14/0.00/0.54|Rubik Microbe/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1535/0.61/0.70/0.00/0.07|Noto Sans Sharada/sans-serif/400/latin,latin-ext,sharada/1536/0.35/0.46/1.00/0.23|Ojuju/sans-serif/200,300,400,500,600,700,800/latin,latin-ext,math,symbols,vietnamese/1537/0.06/0.42/0.00/0.88|Are You Serious/handwriting/400/latin,latin-ext,vietnamese/1538/0.34/0.08/0.00/0.49|Ole/handwriting/400/latin,latin-ext,vietnamese/1539/0.08/0.04/0.00/0.31|Ingrid Darling/handwriting/400/latin,latin-ext,vietnamese/1540/0.20/0.00/0.00/0.67|Cherish/handwriting/400/latin,latin-ext,vietnamese/1541/0.28/0.04/0.00/0.39|Playwrite NL/handwriting/100,200,300,400/latin/1542/0.00/0.00/0.00/0.96|Kings/handwriting/400/latin,latin-ext,vietnamese/1543/0.33/0.27/0.00/0.60|Noto Serif Toto/serif/400,500,600,700/latin,latin-ext,toto/1544/0.38/0.51/0.21/0.26|Shizuru/display/400/japanese,latin/1545/0.04/0.63/0.00/0.74|Noto Serif Khitan Small Script/serif/400/khitan-small-script,latin,latin-ext/1546/0.29/0.67/0.33/0.24|Playwrite HR/handwriting/100,200,300,400/latin/1547/0.23/0.33/0.00/0.91|Noto Serif Ottoman Siyaq/serif/400/latin,latin-ext,ottoman-siyaq-numbers/1548/0.38/0.52/0.33/0.24|Noto Sans Nandinagari/sans-serif/400/latin,latin-ext,nandinagari/1549/0.35/0.49/1.00/0.24|Playwrite AT/handwriting/100,200,300,400,100i,200i,300i,400i/latin/1550/0.22/0.30/0.00/0.90|Noto Sans Deseret/sans-serif/400/deseret,latin,latin-ext/1551/0.35/0.47/1.00/0.24|Rubik Burned/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1552/0.34/0.55/0.00/0.67|Playwrite NG Modern/handwriting/100,200,300,400/latin/1553/0.04/0.13/0.00/0.74|Noto Sans Chorasmian/sans-serif/400/chorasmian,latin,latin-ext,math,symbols/1554/0.35/0.49/1.00/0.24|Rubik Puddles/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1555/0.01/0.36/0.00/0.63|Noto Sans Adlam Unjoined/sans-serif/400,500,600,700/adlam,latin,latin-ext/1556/0.35/0.47/1.00/0.26|Blaka Hollow/display/400/arabic,latin,latin-ext/1557/1.00/0.26/0.15/0.00|Rubik Marker Hatch/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1558/0.97/0.67/0.00/0.00|Playwrite CO/handwriting/100,200,300,400/latin/1559/0.15/0.16/0.00/0.96|Noto Traditional Nushu/sans-serif/300,400,500,600,700/latin,latin-ext,nushu/1560/0.25/0.63/1.00/0.28|Playwrite DK Uloopet/handwriting/100,200,300,400/latin/1561/0.18/0.27/0.00/0.77|Namdhinggo/serif/400,500,600,700,800/latin,latin-ext,limbu/1562/0.28/0.40/0.00/0.40|Playwrite HR Lijeva/handwriting/100,200,300,400/latin/1563/0.21/0.34/0.00/0.91|Maname/serif/400/latin,latin-ext,sinhala,vietnamese/1564/0.47/0.56/0.00/0.57|Noto Sans Khojki/sans-serif/400/khojki,latin,latin-ext/1565/0.35/0.47/1.00/0.24|Blaka Ink/display/400/arabic,latin,latin-ext/1566/1.00/0.26/1.00/0.00|Noto Sans Imperial Aramaic/sans-serif/400/imperial-aramaic,latin,latin-ext/1567/0.36/0.47/1.00/0.24|Rubik Maps/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext,math,symbols/1568/1.00/0.65/0.00/0.00|Yuji Hentaigana Akari/handwriting/400/japanese,latin,latin-ext/1569/0.19/1.00/0.00/0.79|Rubik Gemstones/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1570/1.00/0.60/0.00/0.00|Playwrite DK Loopet/handwriting/100,200,300,400/latin/1571/0.21/0.27/0.00/0.82|Playwrite PE/handwriting/100,200,300,400/latin/1572/0.15/0.21/0.00/0.98|Playwrite ZA/handwriting/100,200,300,400/latin/1573/0.14/0.17/0.00/0.95|Noto Sans Old Italic/sans-serif/400/latin,latin-ext,old-italic/1574/0.36/0.47/1.00/0.24|Lisu Bosa/serif/200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i/latin,latin-ext,lisu/1575/0.37/0.52/0.00/0.15|Playwrite NZ/handwriting/100,200,300,400/latin/1576/0.07/0.12/0.00/0.74|Noto Sans Syriac Eastern/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,syriac/1577/0.36/0.47/1.00/0.31|Noto Sans Miao/sans-serif/400/latin,latin-ext,miao/1578/0.36/0.47/1.00/0.24|Noto Serif Yezidi/serif/400,500,600,700/latin,latin-ext,yezidi/1579/0.38/0.52/0.21/0.26|Noto Sans Cham/sans-serif/100,200,300,400,500,600,700,800,900/cham,latin,latin-ext/1580/0.36/0.47/1.00/0.31|Playwrite ES Deco/handwriting/100,200,300,400/latin/1581/0.15/0.21/0.00/0.97|Noto Sans New Tai Lue/sans-serif/400,500,600,700/latin,latin-ext,new-tai-lue/1582/0.35/0.47/1.00/0.26|Playwrite CZ/handwriting/100,200,300,400/latin/1583/0.16/0.19/0.00/0.93|Noto Serif Gurmukhi/serif/100,200,300,400,500,600,700,800,900/gurmukhi,latin,latin-ext/1584/0.38/0.52/0.00/0.32|Playwrite CL/handwriting/100,200,300,400/latin/1585/0.06/0.08/0.00/0.96|Playwrite PT/handwriting/100,200,300,400/latin/1586/0.09/0.10/0.00/0.96|Playwrite BE WAL/handwriting/100,200,300,400/latin/1587/0.00/0.00/0.00/0.99|Playwrite IT Moderna/handwriting/100,200,300,400/latin/1588/0.15/0.29/0.00/0.75|Playwrite AU QLD/handwriting/100,200,300,400/latin/1589/0.07/0.15/0.00/0.82|Noto Sans Tifinagh/sans-serif/400/latin,latin-ext,tifinagh/1590/0.35/0.47/1.00/0.24|Noto Sans Bamum/sans-serif/400,500,600,700/bamum,latin,latin-ext/1591/0.35/0.47/1.00/0.26|Noto Sans Avestan/sans-serif/400/avestan,latin,latin-ext/1592/0.36/0.47/1.00/0.24|Noto Sans Vithkuqi/sans-serif/400,500,600,700/latin,latin-ext,vithkuqi/1593/0.36/0.47/1.00/0.26|Playwrite SK/handwriting/100,200,300,400/latin/1594/0.16/0.19/0.00/0.93|Noto Sans Cuneiform/sans-serif/400/cuneiform,latin,latin-ext/1595/0.35/0.47/1.00/0.24|Playwrite HU/handwriting/100,200,300,400/latin/1596/0.15/0.25/0.00/0.92|Noto Serif Grantha/serif/400/grantha,latin,latin-ext/1597/0.38/0.51/0.33/0.24|Jaini/display/400/devanagari,latin,latin-ext/1598/0.69/0.16/0.00/0.39|Noto Sans Batak/sans-serif/400/batak,latin,latin-ext/1599/0.35/0.47/1.00/0.24|Playwrite AU TAS/handwriting/100,200,300,400/latin/1600/0.07/0.12/0.00/0.74|Noto Sans Kawi/sans-serif/400,500,600,700/kawi,latin,latin-ext/1601/0.37/0.45/1.00/0.26|Noto Sans Tamil Supplement/sans-serif/400/latin,latin-ext,tamil-supplement/1602/0.35/0.47/1.00/0.24|Rubik Broken Fax/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext,math,symbols/1603/1.00/0.69/0.00/0.00|Noto Serif Ahom/serif/400/ahom,latin,latin-ext/1604/0.40/0.50/0.33/0.24|Noto Sans Lydian/sans-serif/400/latin,latin-ext,lydian/1605/0.35/0.47/1.00/0.24|Noto Sans Old North Arabian/sans-serif/400/latin,latin-ext,old-north-arabian/1606/0.35/0.47/1.00/0.24|Noto Sans Marchen/sans-serif/400/latin,latin-ext,marchen/1607/0.37/0.45/1.00/0.24|Noto Sans Egyptian Hieroglyphs/sans-serif/400/egyptian-hieroglyphs,latin,latin-ext/1608/0.36/0.46/1.00/0.24|Playwrite PL/handwriting/100,200,300,400/latin/1609/0.09/0.19/0.00/0.88|Noto Sans NKo/sans-serif/400/latin,latin-ext,nko/1610/0.35/0.47/1.00/0.24|Noto Sans Kaithi/sans-serif/400/kaithi,latin,latin-ext/1611/0.36/0.48/1.00/0.24|Danfo/serif/400/latin,latin-ext,vietnamese/1613/1.00/1.00/0.00/0.29|Noto Sans Old Persian/sans-serif/400/latin,latin-ext,old-persian/1614/0.35/0.47/1.00/0.24|Noto Sans Medefaidrin/sans-serif/400,500,600,700/latin,latin-ext,medefaidrin/1615/0.36/0.47/1.00/0.26|Noto Sans Tagbanwa/sans-serif/400/latin,latin-ext,tagbanwa/1616/0.35/0.47/1.00/0.24|Playwrite NO/handwriting/100,200,300,400/latin/1617/0.11/0.20/0.00/0.88|Noto Sans Siddham/sans-serif/400/latin,latin-ext,siddham/1618/0.37/0.45/1.00/0.24|Playwrite FR Trad/handwriting/100,200,300,400/latin/1619/0.00/0.00/0.00/0.98|Narnoor/serif/400,500,600,700,800/gunjala-gondi,latin,latin-ext,math,symbols/1620/0.37/0.54/1.00/0.27|Noto Sans Nag Mundari/sans-serif/400,500,600,700/latin,latin-ext,nag-mundari/1621/0.38/0.44/1.00/0.26|Noto Sans Tai Tham/sans-serif/400,500,600,700/latin,latin-ext,tai-tham/1622/0.32/0.53/1.00/0.26|Noto Sans Old Turkic/sans-serif/400/latin,latin-ext,old-turkic/1623/0.36/0.47/1.00/0.24|Noto Serif Makasar/serif/400/latin,latin-ext,makasar/1624/0.41/0.49/0.33/0.24|Jaini Purva/display/400/devanagari,latin,latin-ext/1625/0.69/0.16/0.00/0.39|Noto Sans Yi/sans-serif/400/latin,latin-ext,yi/1626/0.35/0.47/1.00/0.24|Noto Sans Osage/sans-serif/400/latin,latin-ext,osage/1627/0.35/0.47/1.00/0.24|Rubik Maze/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1628/0.92/0.68/0.00/0.00|Playwrite IE/handwriting/100,200,300,400/latin/1629/0.15/0.21/0.00/0.95|Puppies Play/handwriting/400/latin,latin-ext,vietnamese/1630/0.25/0.03/0.00/0.39|Playwrite RO/handwriting/100,200,300,400/latin/1632/0.17/0.18/0.00/0.95|Playwrite CA/handwriting/100,200,300,400/latin/1633/0.18/0.20/0.00/0.97|Playwrite VN/handwriting/100,200,300,400/latin/1635/0.00/0.00/0.00/0.98|Noto Sans Inscriptional Parthian/sans-serif/400/inscriptional-parthian,latin,latin-ext/1636/0.36/0.47/1.00/0.24|Playwrite GB J/handwriting/100,200,300,400,100i,200i,300i,400i/latin/1638/0.16/0.29/0.00/0.76|Rubik Lines/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext,math,symbols/1639/1.00/0.70/0.00/0.00|Noto Sans Brahmi/sans-serif/400/brahmi,latin,latin-ext,math,symbols/1640/0.35/0.47/1.00/0.24|Noto Sans Balinese/sans-serif/400,500,600,700/balinese,latin,latin-ext/1641/0.36/0.47/1.00/0.26|Playwrite ID/handwriting/100,200,300,400/latin/1642/0.00/0.00/0.00/0.94|Noto Sans Lisu/sans-serif/400,500,600,700/latin,latin-ext,lisu/1643/0.36/0.47/1.00/0.26|Noto Sans Warang Citi/sans-serif/400/latin,latin-ext,warang-citi/1645/0.35/0.49/1.00/0.24|Noto Sans Inscriptional Pahlavi/sans-serif/400/inscriptional-pahlavi,latin,latin-ext/1646/0.36/0.47/1.00/0.24|Playwrite IN/handwriting/100,200,300,400/latin/1647/0.14/0.17/0.00/0.97|Playwrite TZ/handwriting/100,200,300,400/latin/1648/0.17/0.18/0.00/0.96|Rubik Storm/display/400/cyrillic,cyrillic-ext,hebrew,latin,latin-ext/1649/1.00/0.63/0.00/0.00|Noto Sans Linear A/sans-serif/400/latin,latin-ext,linear-a/1650/0.35/0.47/1.00/0.24|Noto Sans Chakma/sans-serif/400/chakma,latin,latin-ext/1651/0.35/0.47/1.00/0.24|Noto Sans Ol Chiki/sans-serif/400,500,600,700/latin,latin-ext,ol-chiki/1652/0.35/0.47/1.00/0.26|Playwrite DE VA/handwriting/100,200,300,400/latin/1653/0.13/0.16/0.00/0.89|Playwrite DE LA/handwriting/100,200,300,400/latin/1654/0.21/0.27/0.00/0.94|Noto Sans Tai Le/sans-serif/400/latin,latin-ext,tai-le/1655/0.36/0.47/1.00/0.24|Noto Sans Rejang/sans-serif/400/latin,latin-ext,rejang/1656/0.35/0.47/1.00/0.24|Playwrite BR/handwriting/100,200,300,400/latin/1657/0.05/0.07/0.00/0.95|Playwrite DE SAS/handwriting/100,200,300,400/latin/1658/0.21/0.28/0.00/0.89|Noto Znamenny Musical Notation/sans-serif/400/latin,latin-ext,math,symbols,znamenny/1659/0.35/0.47/1.00/0.24|Noto Sans Multani/sans-serif/400/latin,latin-ext,multani/1661/0.35/0.47/1.00/0.24|Noto Sans Sundanese/sans-serif/400,500,600,700/latin,latin-ext,sundanese/1662/0.35/0.47/1.00/0.26|Playwrite IT Trad/handwriting/100,200,300,400/latin/1663/0.16/0.24/0.00/0.97|Noto Sans Takri/sans-serif/400/latin,latin-ext,takri/1664/0.35/0.47/1.00/0.24|Noto Sans Indic Siyaq Numbers/sans-serif/400/indic-siyaq-numbers,latin,latin-ext/1665/0.40/0.41/1.00/0.24|Noto Sans Old Permic/sans-serif/400/cyrillic-ext,latin,latin-ext,old-permic/1666/0.35/0.47/1.00/0.24|Noto Sans Hanifi Rohingya/sans-serif/400,500,600,700/hanifi-rohingya,latin,latin-ext/1667/0.35/0.47/1.00/0.26|Padyakke Expanded One/serif/400/kannada,latin,latin-ext/1668/0.00/1.00/0.74/0.26|Noto Sans Grantha/sans-serif/400/grantha,latin,latin-ext/1669/0.36/0.47/1.00/0.24|Noto Sans Mro/sans-serif/400/latin,latin-ext,mro/1670/0.35/0.47/1.00/0.24|Noto Sans Runic/sans-serif/400/latin,latin-ext,runic/1671/0.35/0.47/1.00/0.24|Noto Sans Duployan/sans-serif/400,700/duployan,latin,latin-ext/1672/0.36/0.47/1.00/0.24|Noto Sans Phoenician/sans-serif/400/latin,latin-ext,phoenician/1674/0.35/0.47/1.00/0.24|Noto Sans Bassa Vah/sans-serif/400,500,600,700/bassa-vah,latin,latin-ext/1675/0.32/0.51/1.00/0.26|Noto Sans Wancho/sans-serif/400/latin,latin-ext,wancho/1677/0.31/0.54/1.00/0.24|Noto Sans Old South Arabian/sans-serif/400/latin,latin-ext,old-south-arabian/1678/0.35/0.47/1.00/0.24|Noto Sans Palmyrene/sans-serif/400/latin,latin-ext,palmyrene/1679/0.35/0.47/1.00/0.24|Noto Sans Zanabazar Square/sans-serif/400/latin,latin-ext,zanabazar-square/1680/0.35/0.47/1.00/0.24|Yuji Hentaigana Akebono/handwriting/400/japanese,latin,latin-ext/1681/0.19/1.00/0.00/0.79|Noto Serif Dogra/serif/400/dogra,latin,latin-ext/1682/0.39/0.51/0.33/0.24|Noto Sans Mandaic/sans-serif/400/latin,latin-ext,mandaic/1684/0.36/0.47/1.00/0.24|Noto Sans Cypriot/sans-serif/400/cypriot,latin,latin-ext/1685/0.35/0.47/1.00/0.24|Noto Sans Nabataean/sans-serif/400/latin,latin-ext,nabataean/1686/0.35/0.47/1.00/0.24|Noto Sans Lycian/sans-serif/400/lycian/1687/0.08/0.78/1.00/0.00|Chokokutai/display/400/japanese,latin,latin-ext,vietnamese/1688/0.31/0.77/1.00/0.00|Noto Sans Mayan Numerals/sans-serif/400/latin,latin-ext,mayan-numerals/1689/0.35/0.47/1.00/0.24|Noto Sans Old Sogdian/sans-serif/400/latin,latin-ext,old-sogdian/1690/0.39/0.42/1.00/0.24|Noto Sans Caucasian Albanian/sans-serif/400/caucasian-albanian,latin,latin-ext/1691/0.35/0.49/1.00/0.24|Noto Sans Modi/sans-serif/400/latin,latin-ext,modi/1692/0.35/0.47/1.00/0.24|Noto Sans Shavian/sans-serif/400/latin,latin-ext,shavian/1693/0.35/0.47/1.00/0.24|Noto Sans Psalter Pahlavi/sans-serif/400/latin,latin-ext,psalter-pahlavi/1695/0.36/0.47/1.00/0.24|Noto Sans Syriac/sans-serif/100,200,300,400,500,600,700,800,900/latin,latin-ext,syriac/1696/0.35/0.47/1.00/0.31|Noto Sans Newa/sans-serif/400/latin,latin-ext,newa/1697/0.36/0.47/1.00/0.24|Noto Sans Sogdian/sans-serif/400/latin,latin-ext,sogdian/1698/0.39/0.42/1.00/0.24|Noto Sans Phags Pa/sans-serif/400/phags-pa/1699/0.01/1.00/1.00/0.00|Noto Sans Kayah Li/sans-serif/400,500,600,700/kayah-li,latin,latin-ext/1700/0.36/0.47/1.00/0.26|Noto Sans Mahajani/sans-serif/400/latin,latin-ext,mahajani/1701/0.36/0.47/1.00/0.24|Noto Sans Elymaic/sans-serif/400/elymaic,latin,latin-ext/1702/0.31/0.54/1.00/0.24|Noto Sans Pahawh Hmong/sans-serif/400/latin,latin-ext,pahawh-hmong/1703/0.36/0.47/1.00/0.24|Noto Sans Buginese/sans-serif/400/buginese,latin,latin-ext/1704/0.36/0.47/1.00/0.24|Noto Sans Gunjala Gondi/sans-serif/400,500,600,700/gunjala-gondi,latin,latin-ext/1705/0.35/0.48/1.00/0.26|Noto Sans Saurashtra/sans-serif/400/latin,latin-ext,saurashtra/1706/0.35/0.48/1.00/0.24|Noto Sans Khudawadi/sans-serif/400/khudawadi,latin,latin-ext/1707/0.36/0.47/1.00/0.24|Noto Sans Linear B/sans-serif/400/latin,latin-ext,linear-b/1710/0.35/0.47/1.00/0.24|Noto Sans Lepcha/sans-serif/400/latin,latin-ext,lepcha/1711/0.36/0.47/1.00/0.24|Noto Sans Nushu/sans-serif/400/latin,latin-ext,nushu/1712/0.35/0.47/1.00/0.24|Noto Sans Elbasan/sans-serif/400/elbasan,latin,latin-ext/1713/0.35/0.47/1.00/0.24|Noto Sans Hatran/sans-serif/400/hatran,latin,latin-ext/1714/0.35/0.47/1.00/0.24|Noto Sans Tirhuta/sans-serif/400/latin,latin-ext,tirhuta/1715/0.35/0.47/1.00/0.24|Noto Sans Soyombo/sans-serif/400/latin,latin-ext,soyombo/1716/0.36/0.47/1.00/0.24|Noto Sans Pau Cin Hau/sans-serif/400/latin,latin-ext,pau-cin-hau/1717/0.35/0.48/1.00/0.24|Noto Sans Manichaean/sans-serif/400/latin,latin-ext,manichaean/1718/0.35/0.47/1.00/0.24|Noto Sans SignWriting/sans-serif/400/latin,latin-ext,signwriting/1719/0.17/0.82/1.00/0.24|Noto Sans Mende Kikakui/sans-serif/400/latin,latin-ext,mende-kikakui/1720/0.35/0.47/1.00/0.24|Noto Sans Ogham/sans-serif/400/latin,latin-ext,ogham/1721/0.35/0.47/1.00/0.24|Noto Sans Masaram Gondi/sans-serif/400/latin,latin-ext,masaram-gondi/1722/0.32/0.53/1.00/0.24|Noto Sans Kharoshthi/sans-serif/400/kharoshthi,latin,latin-ext/1723/0.36/0.47/1.00/0.24|Noto Sans Bhaiksuki/sans-serif/400/bhaiksuki,latin,latin-ext/1724/0.37/0.46/1.00/0.24|Noto Sans Ugaritic/sans-serif/400/latin,latin-ext,ugaritic/1725/0.35/0.47/1.00/0.24|Noto Sans Meroitic/sans-serif/400/latin,latin-ext,meroitic,meroitic-cursive,meroitic-hieroglyphs/1726/0.35/0.47/1.00/0.24", Z = `Arial/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese|Comic Sans MS/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext|Courier New/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese|Georgia/serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext|Helvetica/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese|Impact/sans-serif/400/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext|Tahoma/sans-serif/400,700/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese|Times New Roman/serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese|Trebuchet MS/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext|Verdana/sans-serif/400,400i,700,700i/cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese
`, T = W.split("|").map(v.parse), J = Z.split("|").map(v.parse);
var g, p, B, O;
class k {
  static loaded(e) {
    return w(this, g).has(e);
  }
  static async load(e) {
    let i;
    const a = T.find((n) => n.name === e);
    a ? i = C(this, p, O).call(this, a) : i = Promise.resolve(), w(this, g).set(e, i), await i;
  }
}
g = new WeakMap(), p = new WeakSet(), B = async function(e) {
  const i = document.createElement("link");
  i.href = e, i.rel = "stylesheet", i.type = "text/css", document.head.append(i);
}, O = async function(e) {
  const i = new URL("https://fonts.googleapis.com/css"), a = e.name + ":" + e.variants.join(",");
  i.searchParams.set("family", a), i.searchParams.set("display", "swap"), C(this, p, B).call(this, i.toString()), await document.fonts.load(`1em "${e.name}"`);
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
    r(this, "opened", !1);
    r(this, "picker");
    r(this, "config");
    r(this, "modal");
    r(this, "observer");
    r(this, "selected");
    r(this, "hovered", null);
    r(this, "$modal");
    r(this, "$search");
    r(this, "$subset");
    r(this, "$categories");
    r(this, "$width");
    r(this, "$thickness");
    r(this, "$complexity");
    r(this, "$curvature");
    r(this, "$sort");
    r(this, "$sortOrder");
    r(this, "$preview");
    r(this, "$fonts");
    r(this, "$variants");
    r(this, "$cancelBtn");
    r(this, "$pickBtn");
  }
  connectedCallback() {
    this.createLayout(), this.modal = new _.Modal(this.$modal, { keyboard: !1 }), this.observer = new IntersectionObserver((i) => {
      for (const a of i) {
        if (a.intersectionRatio <= 0) return;
        const n = a.target, l = n.dataset.family;
        l && k.load(l), this.observer.unobserve(n);
      }
    });
  }
  createLayout() {
    this.innerHTML = j, this.$modal = this.querySelector("#fp__modal"), this.$search = this.querySelector("#fp__search"), this.$subset = this.querySelector("#fp__subsets"), this.$categories = this.querySelector("#fp__categories"), this.$width = this.querySelector("#fp__width"), this.$thickness = this.querySelector("#fp__thickness"), this.$complexity = this.querySelector("#fp__complexity"), this.$curvature = this.querySelector("#fp__curvature"), this.$sort = this.querySelector("#fp__sort"), this.$sortOrder = this.querySelector("#fp__sort-order"), this.$preview = this.querySelector("#fp__preview"), this.$fonts = this.querySelector("#fp__fonts"), this.$variants = this.querySelector("#fp__variants"), this.$cancelBtn = this.querySelector("#fp__cancel"), this.$pickBtn = this.querySelector("#fp__pick");
  }
  getElementFor(i) {
    const a = this.$fonts.querySelector(`[data-family="${i.name}"]`);
    if (!a) throw new Error(`Could not find element for '${i.name}'!`);
    return a;
  }
  getFamilyFor(i) {
    const a = i.dataset.family;
    return a ? this.picker.getFamily(a) : null;
  }
  getFamilies() {
    return Array.from(this.picker.families.values());
  }
  sortFamilies(i, a = !1) {
    const l = this.getFamilies().sort((o, c) => z(o, c, i));
    a && l.reverse();
    for (const o of l)
      this.$fonts.append(this.getElementFor(o));
    for (const o of this.picker.favourites) {
      const c = this.getElementFor(o);
      this.$fonts.prepend(c);
    }
    const s = this.getElementFor(this.selected.family);
    this.$fonts.prepend(s), this.$fonts.scrollTop = 0;
  }
  filterFamilies(i) {
    const l = this.getFamilies().filter((s) => U(s, i)).map((s) => s.name);
    for (const s of this.$fonts.children) {
      const o = s.dataset.family, c = !l.includes(o);
      s.classList.toggle("d-none", c);
    }
  }
  updateSort() {
    const i = this.$sort.value, a = this.$sortOrder.classList.contains("active");
    this.sortFamilies(i, a);
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
    const a = this.$variants.querySelector(`[value="${i.weight}"]`), n = this.$variants.querySelector("#fp__italic");
    if (!a) throw new Error("Could not find weight button for selected font.");
    if (!n) throw new Error("Could not find italic button for selected font.");
    a.checked = !0, n.classList.toggle("active", i.italic), this.updateVariant();
  }
  favouriteFont(i) {
    const n = this.getElementFor(i.family).classList.toggle("fp__fav");
    this.picker.markFavourite(i.family, n), this.updateSort();
  }
  updateVariant() {
    if (!this.config.variants) return;
    const i = this.$variants.querySelector(".fp__weight:checked"), a = this.$variants.querySelector("#fp__italic");
    if (!i) throw new Error("Could not find weight button for selected font.");
    if (!a) throw new Error("Could not find italic button for selected font.");
    let n = parseInt(i.value), l = a.classList.contains("active");
    const s = this.selected.family.variants.includes(`${n}`), o = this.selected.family.variants.includes(`${n}i`);
    a.disabled = !s || !o, s || (l = !0), o || (l = !1), a.classList.toggle("active", l), this.selected.weight = n, this.selected.italic = l, this.updatePreview();
  }
  createFonts() {
    for (const i of this.getFamilies()) {
      const a = R(i);
      this.$fonts.append(a), this.observer.observe(a);
    }
  }
  applyTranslations() {
    const i = Y[this.config.language];
    this.$search.placeholder = i.search, this.querySelector("#fp__title").textContent = i.selectFont, this.$subset.append(...y(i.subsets)), this.$categories.append(...I(i.categories)), this.$width.append(...y(i.widths)), this.$thickness.append(...y(i.thicknesses)), this.$complexity.append(...y(i.complexities)), this.$curvature.append(...y(i.curvatures)), this.$sort.append(...y(i.sorts)), this.$preview.textContent = this.config.previewText ?? i.sampleText, this.querySelector("#fp__t-filters").textContent = i.filters, this.querySelector("#fp__t-metrics").textContent = i.metrics, this.querySelector("#fp__t-sort").textContent = i.sort, this.querySelector("#fp__t-cancel").textContent = i.cancel, this.querySelector("#fp__t-pick").textContent = i.select;
  }
  onFontHover(i) {
    const a = this.getFamilyFor(i.target);
    a && (a === this.selected.family ? this.hovered = null : this.hovered = m.parse(a), this.updatePreview());
  }
  onFontUnhover(i) {
    this.getFamilyFor(i.target) && (this.hovered = null, this.updatePreview());
  }
  onFontClick(i) {
    const a = i.target;
    if (a.classList.contains("fp__heart")) {
      const l = this.getFamilyFor(a.parentElement);
      if (!l) return;
      const s = m.parse(l);
      this.selectFont(s), this.favouriteFont(s);
      return;
    }
    const n = this.getFamilyFor(a);
    !n || this.selected.family === n || this.selectFont(m.parse(n));
  }
  onFontDoubleClick(i) {
    this.getFamilyFor(i.target) && this.submit();
  }
  selectClosestFont(i, a, n) {
    let l = n || this.getElementFor(this.selected.family);
    for (; i || l.classList.contains("d-none"); ) {
      i = !1;
      const s = a ? l.previousElementSibling : l.nextElementSibling;
      if (!s) return;
      l = s;
    }
    l.click(), l.scrollIntoView({
      behavior: "instant",
      block: "center"
    });
  }
  selectClosestVariant(i) {
    var s, o;
    const a = this.$variants.querySelector(".fp__weight:checked"), n = i ? (s = a == null ? void 0 : a.previousElementSibling) == null ? void 0 : s.previousElementSibling : (o = a == null ? void 0 : a.nextElementSibling) == null ? void 0 : o.nextElementSibling;
    if (!n) return;
    const l = n;
    l.checked = !0, this.updateVariant();
  }
  toggleVariantItalic() {
    const i = this.$variants.querySelector("#fp__italic");
    i && (i.classList.toggle("active"), this.updateVariant());
  }
  onKeyPressed(i) {
    if (!this.opened) return;
    const a = i.target;
    if (a && a !== this.$modal && !this.$fonts.contains(a))
      return;
    let n = !0;
    i.key === "Escape" ? this.cancel() : i.key === "f" ? this.favouriteFont(this.selected) : i.key === "PageUp" ? this.selectClosestFont(!1, !1, this.$fonts.firstElementChild) : i.key === "PageDown" ? this.selectClosestFont(!1, !0, this.$fonts.lastElementChild) : i.key === "ArrowUp" ? this.selectClosestFont(!0, !0, null) : i.key === "ArrowDown" ? this.selectClosestFont(!0, !1, null) : i.key === "ArrowLeft" ? this.selectClosestVariant(!0) : i.key === "ArrowRight" ? this.selectClosestVariant(!1) : i.key === "i" ? this.toggleVariantItalic() : i.key === "/" ? this.$search.focus() : i.key === "Enter" ? this.submit() : n = !1, n && i.preventDefault();
  }
  bindEvents() {
    const i = () => this.updateFilter();
    this.$categories.addEventListener("click", i), this.$search.addEventListener("input", i), this.$subset.addEventListener("input", i), this.$width.addEventListener("input", i), this.$thickness.addEventListener("input", i), this.$complexity.addEventListener("input", i), this.$curvature.addEventListener("input", i);
    const a = () => this.updateSort();
    this.$sort.addEventListener("input", a), this.$sortOrder.addEventListener("click", a), this.$fonts.addEventListener("mouseover", (n) => this.onFontHover(n)), this.$fonts.addEventListener("mouseout", (n) => this.onFontUnhover(n)), this.$fonts.addEventListener("click", (n) => this.onFontClick(n)), this.$fonts.addEventListener("dblclick", (n) => this.onFontDoubleClick(n)), this.$variants.addEventListener("input", () => this.updateVariant()), this.$variants.addEventListener("click", () => this.updateVariant()), this.$pickBtn.addEventListener("click", () => this.submit()), this.$cancelBtn.addEventListener("click", () => this.cancel()), this.$modal.addEventListener("keydown", (n) => this.onKeyPressed(n));
  }
  assignDefaults() {
    H(this.$categories, this.config.defaultCategories), this.$subset.value = this.config.defaultSubset, this.$width.value = this.config.defaultWidth, this.$thickness.value = this.config.defaultThickness, this.$complexity.value = this.config.defaultComplexity, this.$curvature.value = this.config.defaultCurvature, this.$sort.value = this.config.sortBy, this.$sortOrder.classList.toggle("active", this.config.sortReverse), this.picker.favourites.forEach((i) => this.getElementFor(i).classList.add("fp__fav")), this.$variants.classList.toggle("d-none", !this.config.variants);
  }
  async open(i) {
    this.opened || (this.opened = !0, this.picker = i, this.config = this.picker.getConfig(), this.applyTranslations(), this.bindEvents(), this.modal.show(), this.createFonts(), this.selectFont(i.font), this.assignDefaults(), this.updateSort(), this.updateFilter(), this.picker.dispatchEvent(new Event("open")), await new Promise((a) => {
      this.$modal.addEventListener("shown.bs.modal", () => this.$modal.focus()), this.$modal.addEventListener("hidden.bs.modal", () => a());
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
    r(this, "initialized", !1);
    r(this, "_font");
    r(this, "_families");
    r(this, "_favourites");
    r(this, "_config", {
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
    const a = Object.keys(i);
    (!this.families || a.includes("googleFonts") || a.includes("systemFonts") || a.includes("extraFonts")) && this.updateFamilies(), (!this.font || a.includes("font")) && this.setFont(this._config.font), this.initialized || this.initialize();
  }
  initialize() {
    this.initialized = !0, this.disabled = !1;
    const i = this._config.favourites.slice();
    if (this._config.saveFavourites) {
      const a = localStorage.getItem(this._config.storageKey);
      a && i.push(...JSON.parse(a));
    }
    this._favourites = /* @__PURE__ */ new Set();
    for (const a of i)
      try {
        const n = this.getFamily(a);
        this._favourites.add(n);
      } catch {
        console.warn(`Font from favourites is not available: '${a}'!`);
      }
  }
  updateFamilies() {
    const i = [
      ...T.filter((a) => {
        var n;
        return ((n = this._config.googleFonts) == null ? void 0 : n.includes(a.name)) ?? !0;
      }),
      ...J.filter((a) => {
        var n;
        return ((n = this._config.systemFonts) == null ? void 0 : n.includes(a.name)) ?? !0;
      }),
      ...this._config.extraFonts.map((a) => new v(a))
    ];
    this._families = /* @__PURE__ */ new Map(), i.forEach((a) => this.families.set(a.name, a));
  }
  getFamily(i) {
    const a = this.families.get(i);
    if (!a) throw new Error(`Could not find font family '${i}'!`);
    return a;
  }
  setFont(i) {
    if (i instanceof m)
      this._font = i;
    else if (typeof i == "string") {
      const [a, n] = i.split(":"), l = this.getFamily(a);
      this._font = m.parse(l, n);
    } else
      this._font = m.parse(i);
    if (!this.font.family.variants.includes(this.font.variant))
      throw new Error(`Variant ${this.font.variant} not supported by '${this.font.family.name}'!`);
    this.textContent = this._config.verbose ? this.font.toString() : this.font.toId(), this.style.fontFamily = `${this.font.family}`, this.style.fontWeight = this.font.weight.toString(), this.style.fontStyle = this.font.style, k.load(this.font.family.name);
  }
  markFavourite(i, a) {
    if (a === void 0 && (a = !this.favourites.has(i)), a ? this.favourites.add(i) : this.favourites.delete(i), this._config.saveFavourites) {
      const n = Array.from(this.favourites).map((l) => l.name);
      localStorage.setItem(this._config.storageKey, JSON.stringify(n));
    }
    return a;
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
