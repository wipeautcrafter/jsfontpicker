import * as bootstrap from 'bootstrap'

export class FontPickerDialogElement extends HTMLElement {
  static domContents = `
  <div class="modal fade" id="fp__modal" tabindex="-1">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="fp__title"></h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="row g-2 py-2 px-3 border border-bottom">
          <div class="col-sm-6">
            <input class="form-control" id="fp__search" />
          </div>
          <div class="col-sm-6">
            <select class="form-select" id="fp__languages"></select>
          </div>
          <div class="col-12 d-flex flex-wrap gap-2 justify-content-center" id="fp__categories"></div>
          <div class="col-12 text-center fs-5" id="fp__preview" contenteditable spellcheck="false"></div>
        </div>
        <div class="modal-body pt-2" id="fp__fonts"></div>
        <div class="py-2 px-3 border-top border-bottom d-flex flex-wrap gap-2 justify-content-center" id="fp__variants"></div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="fp__cancel"></button>
          <button type="button" class="btn btn-primary" id="fp__pick"></button>
        </div>
      </div>
    </div>
  </div>
  `

  #modal!: bootstrap.Modal

  constructor() {
    super()
  }

  show() {
    this.#modal.show()
  }
  hide() {
    this.#modal.hide()
  }
  toggle() {
    this.#modal.toggle()
  }

  connectedCallback() {
    // this.#shadow = this.attachShadow({ mode: 'open' })
    // this.#shadow.innerHTML = FontPickerDialogElement.domContents

    this.innerHTML = FontPickerDialogElement.domContents
    this.#modal = new bootstrap.Modal('#fp__modal')
  }
}
