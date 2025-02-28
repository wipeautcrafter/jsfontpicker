import EventEmitter from 'events'

export class Modal extends EventEmitter<{
  opening: []
  opened: []
  closing: []
  closed: []
}> {
  $el: HTMLElement

  constructor($el: HTMLElement) {
    super()
    this.$el = $el
  }

  get isOpen() {
    return this.$el.classList.contains('fpb__open')
  }

  toggle(force?: boolean) {
    const open = this.$el.classList.toggle('fpb__open', force)
    this.emit(open ? 'opening' : 'closing')
    setTimeout(() => this.emit(open ? 'opened' : 'closed'), 500)
  }

  open() {
    if (!this.isOpen) this.toggle(true)
  }

  close() {
    if (this.isOpen) this.toggle(false)
  }
}

export class Accordion {
  $el: HTMLElement

  constructor($el: HTMLElement) {
    this.$el = $el

    this.$el.addEventListener('click', (event) => {
      const $target = event.target as HTMLElement

      const $accordionToggle = $target.closest<HTMLElement>('.fpb__accordion-toggle')
      if ($accordionToggle) this.toggleItem($accordionToggle.parentElement!)
    })
  }

  private getItems() {
    return this.$el.querySelectorAll<HTMLElement>('.fpb__accordion-item')
  }

  private _toggle($item: HTMLElement, force?: boolean) {
    const $content = $item.querySelector<HTMLElement>('.fpb__accordion-content')!
    const height = $content.children[0].clientHeight + 'px'

    $content.style.setProperty('--fpb-height', height)
    setTimeout(() => {
      const open = $item.classList.toggle('fpb__open', force)
      setTimeout(() => $content.style.removeProperty('--fpb-height'), open ? 500 : 0)
    }, 1)

    return open
  }

  private toggleItem($item: HTMLElement) {
    const open = this._toggle($item)
    if (!open) return
    this.getItems().forEach(($otherItem) => {
      if ($otherItem !== $item) this._toggle($otherItem, false)
    })
  }
}
