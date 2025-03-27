# Documentation

- [Documentation](#documentation)
  - [(class) FontPicker](#class-fontpicker)
    - [Constructor](#constructor)
    - [Methods](#methods)
      - [getConfig](#getconfig)
      - [configure](#configure)
      - [setFont](#setfont)
      - [clear](#clear)
      - [open](#open)
      - [close](#close)
      - [destroy](#destroy)
    - [Properties](#properties)
      - [font](#font)
      - [families](#families)
      - [favourites](#favourites)
    - [Events](#events)
      - [open](#open-1)
      - [opened](#opened)
      - [close](#close-1)
      - [closed](#closed)
      - [pick](#pick)
      - [clear](#clear-1)
      - [cancel](#cancel)
  - [(class) Font](#class-font)
    - [Methods](#methods-1)
      - [toId](#toid)
      - [toConcise](#toconcise)
      - [toString](#tostring)
    - [Properties](#properties-1)
      - [family](#family)
      - [weight](#weight)
      - [italic](#italic)
      - [style](#style)
      - [variant](#variant)
  - [(class) FontFamily](#class-fontfamily)
    - [Methods](#methods-2)
      - [toString](#tostring-1)
      - [getDefaultVariant](#getdefaultvariant)
- [Types](#types)
  - [(interface) PickerConfig](#interface-pickerconfig)
  - [(interface) FamilyProps](#interface-familyprops)
  - [(type) Language](#type-language)
  - [(type) Subset](#type-subset)
  - [(type) Category](#type-category)
  - [(type) Metric](#type-metric)
  - [(type) Criterion](#type-criterion)
  - [(type) FontWeight](#type-fontweight)

## (class) FontPicker

### Constructor

Creates a new FontPicker instance.

```js
new FontPicker(element, config)
```

**Arguments**

> **element**  
> The (query for a) button or input element to bind to  
> **Type:** [`HTMLButtonElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement) | [`HTMLInputElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) | `string`

> **config** _(partial, optional)_  
> Picker configuration options.  
> **Type:** [`PickerConfig`](#interface-pickerconfig)

### Methods

#### getConfig

Gets the current picker configuration.

```js
.getConfig()
```

**Returns**

> The current configuration object.  
> **Type:** [`PickerConfig`](#interface-pickerconfig)

#### configure

Sets the picker configuration.

```js
.configure(config)
```

**Arguments**

> **config** _(partial)_  
> Picker configuration options.  
> **Type:** [`PickerConfig`](#interface-pickerconfig)

#### setFont

Sets the currently selected font.

```js
.setFont(font, [emit])
```

**Arguments**

> **font**  
> Font family name, optionally with variant.  
> **Type:** [`Font`](#class-font) | [`FontFamily`](#class-fontfamily) | `string` | `null`

> **emit**  
> Emit an event?  
> **Type:** `boolean`  
> **Default:** `false`

#### clear

Clears the picker, so no font is currently selected.

```js
.clear([emit])
```

**Arguments**

> **emit**  
> Emit an event?  
> **Type:** `boolean`  
> **Default:** `false`

#### open

Opens the font picker dialog.

```js
.open()
```

**Returns**

> Promise with the picked font.  
> **Type:** [`Promise<Font | null>`](#class-font)

#### close

Closes the font picker dialog.

```js
.close()
```

**Returns**

> Empty promise.  
> **Type:** `Promise<void>`

#### destroy

Destroys the font picker dialog.

```js
.destroy()
```

### Properties

#### font

> _(readonly)_  
> The currently selected font.  
> **Type:** [`Font`](#class-font) | `null`

#### families

> _(readonly)_  
> A list of available font families.  
> **Type:** [`Map<string, FontFamily>`](#class-fontfamily)

#### favourites

> _(readonly)_  
> A list of favourited font families.  
> **Type:** [`Set<FontFamily>`](#class-fontfamily)

### Events

#### open

Fires when the font picker dialog starts opening.

```
.on('open', () => ...)
```

#### opened

Fires when the font picker dialog has finished opening.

```
.on('opened', () => ...)
```

#### close

Fires when the font picker dialog starts closing.

```
.on('close', () => ...)
```

#### closed

Fires when the font picker dialog has finished closing.

```
.on('closed', () => ...)
```

#### pick

Fires when a font is succesfully picked.

```
.on('pick', (font) => ...)
```

**Arguments**

> **font**  
> The picked font.  
> **Type:** [`Font`](#class-font) | `null`

#### clear

Fires when font is cleared.

```
.on('clear', () => ...)
```

#### cancel

Fires when font selection is cancelled.

```
.on('cancel', () => ...)
```

## (class) Font

### Methods

#### toId

Get the font's ID string.

```js
.toId()
```

**Returns**

> The font's ID string.  
> **Type:** `string`

#### toConcise

Get the font's concise name string.

```js
.toConcise()
```

**Returns**

> The font's concise name string.  
> **Type:** `string`

#### toString

Get the font's verbose name string.

```js
.toString()
```

**Returns**

> The font's verbose name string.  
> **Type:** `string`

### Properties

#### family

> _(readonly)_  
> The font family.  
> **Type:** [`FontFamily`](#class-fontfamily)

#### weight

> _(readonly)_  
> The font weight.  
> **Type:** [`FontWeight`](#type-fontweight)

#### italic

> _(readonly)_  
> Whether the font is italic.  
> **Type:** `boolean`

#### style

> _(readonly)_  
> The font style.  
> **Type:** `'normal' | 'italic'`

#### variant

> _(readonly)_  
> The font variant.  
> **Type:** `string`

## (class) FontFamily

### Methods

#### toString

Get the font family's name.

```js
.toString()
```

**Returns**

> The font family's name.  
> **Type:** `string`

#### getDefaultVariant

Gets the default variant for the font family.

```js
.getDefaultVariant()
```

**Returns**

> The font family's default variant.  
> **Type:** `string`

# Types

## (interface) PickerConfig

A FontPicker configuration object.

> **language**  
> Language to use for the interface.  
> **Type:** [`Language`](#type-language)

> **container**  
> Container to place the modal in.  
> **Type:** [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

> **previewText**  
> Override for the font preview translation.  
> **Type:** `string | null`

> **font**  
> Default font family and variant.  
> **Type:** `string | null`

> **verbose**  
> Show the full variant name on the picker button?  
> **Type:** `boolean`

> **variants**  
> Allow the user to choose font variants?  
> **Type:** `boolean`

> **favourites**  
> Names of default favourite font families.  
> **Type:** `string[]`

> **saveFavourites**  
> Save favourites to localStorage?  
> **Type:** `boolean`

> **storageKey**  
> Key to use for accessing localStorage.  
> **Type:** `string`

> **defaultSubset**  
> Default subset filter.  
> **Type:** [`Subset`](#type-subset)

> **defaultCategories**  
> Default category filters.  
> **Type:** [`Category[]`](#type-category)

> **defaultWidth**  
> Default metric filter width.  
> **Type:** [`Metric`](#type-metric)

> **defaultThickness**  
> Default metric filter thickness.  
> **Type:** [`Metric`](#type-metric)

> **defaultComplexity**  
> Default metric filter complexity.  
> **Type:** [`Metric`](#type-metric)

> **defaultCurvature**  
> Default metric filter curvature.  
> **Type:** [`Metric`](#type-metric)

> **sortBy**  
> Default sorting criterion.  
> **Type:** [`Criterion`](#type-criterion)

> **sortReverse**  
> Reverse search order?  
> **Type:** `boolean`

> **googleFonts**  
> Whitelist for Google Fonts.  
> **Type:** `string[] | null`

> **systemFonts**  
> Whitelist for System Fonts.  
> **Type:** `string[] | null`

> **extraFonts**  
> Extra fonts to also include in the picker.  
> **Type:** [`FamilyProps[]`](#interface-familyprops)

> **showCancelButton**  
> Show the cancel button?  
> **Type:** `boolean`

> **showClearButton**  
> Show the clear button?  
> **Type:** `boolean`

## (interface) FamilyProps

An object representing a Font Family.

> **name**  
> Font family name.  
> **Type:** `string`

> **variants**  
> Variants supported by the font family.  
> **Type:** `string[]`

> **category** _(optional)_  
> Font family category.  
> **Type:** [`Category`](#category)

> **subsets** _(optional)_  
> Subsets supported by the font family.  
> **Type:** [`Subset[]`](#subset)

> **popularity** _(optional)_  
> Font family popularity index.  
> **Type:** `number`

> **metrics** _(optional)_  
> Font family metrics properties.  
> **Type:** `Object`
>
> > **width**  
> > Font family width metric value.  
> > **Type:** `number`
>
> > **thickness**  
> > Font family thickness metric value.  
> > **Type:** `number`
>
> > **complexity**  
> > Font family complexity metric value.  
> > **Type:** `number`
>
> > **curvature**  
> > Font family curvature metric value.  
> > **Type:** `number`

> **url** _(optional)_
> URL to load the font family from.
> **Type:** `string`

## (type) Language

A translation language key.

`'en' | 'nl' | 'de' | 'es' | 'fr'`

## (type) Subset

A subset to filter fonts by.

`'all' | 'arabic' | 'bengali' | 'chinese-hongkong' | 'chinese-simplified' | 'chinese-traditional' | 'cyrillic' | 'cyrillic-ext' | 'devanagari' | 'greek' | 'greek-ext' | 'gujarati' | 'gurmukhi' | 'hebrew' | 'japanese' | 'kannada' | 'khmer' | 'korean' | 'latin' | 'latin-ext' | 'malayalam' | 'myanmar' | 'oriya' | 'sinhala' | 'tamil' | 'telugu' | 'thai' | 'tibetan' | 'vietnamese'`

## (type) Category

A category to filter fonts by.

`'serif' | 'sans-serif' | 'display' | 'handwriting' | 'monospace'`

## (type) Metric

A metrics options key to filter fonts by.

`'all' | '0!' | '1!' | '2!' | '3!' | '4!'`

## (type) Criterion

A criterion to sort fonts by.

`'name' | 'popularity' | 'width' | 'thickness' | 'complexity' | 'curvature'`

## (type) FontWeight

A font weight.

`100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900`
