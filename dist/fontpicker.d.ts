declare type Category = 'serif' | 'sans-serif' | 'display' | 'handwriting' | 'monospace';

declare type Criterion = 'name' | 'popularity' | 'width' | 'thickness' | 'complexity' | 'curvature';

declare interface FamilyProps {
    name: string;
    category: Category;
    variants: string[];
    subsets: Subset[];
    popularity?: number;
    metrics?: {
        width: number;
        thickness: number;
        complexity: number;
        curvature: number;
    };
}

declare class Font {
    static weightNames: {
        [weight in FontWeight]: string;
    };
    family: FontFamily;
    weight: FontWeight;
    italic: boolean;
    constructor(family: FontFamily, weight: FontWeight, italic: boolean);
    get style(): "italic" | "normal";
    get variant(): string;
    toId(): string;
    toString(): string;
    static parse(family: FontFamily, variant?: string): Font;
}

declare interface FontFamily extends FamilyProps {
}

declare class FontFamily {
    constructor(family: FamilyProps);
    toString(): string;
    getDefaultVariant(): string;
    static parse(raw: string): FontFamily;
}

export declare class FontLoader {
    #private;
    static loaded(name: string): boolean;
    static load(name: string): Promise<void>;
}

export declare interface FontPicker {
    addEventListener<K extends keyof PickerEventMap>(type: K, listener: (this: FontPicker, ev: PickerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
}

export declare class FontPicker extends HTMLButtonElement {
    private initialized;
    private _font;
    get font(): Font;
    private _families;
    get families(): Map<string, FontFamily>;
    private _favourites;
    get favourites(): Set<FontFamily>;
    private _config;
    getConfig(): {
        language: Language;
        container: HTMLElement;
        previewText?: string;
        font: string;
        verbose: boolean;
        variants: boolean;
        favourites: string[];
        saveFavourites: boolean;
        storageKey: string;
        defaultSubset: Subset;
        defaultCategories: Category[];
        defaultWidth: Metric;
        defaultThickness: Metric;
        defaultComplexity: Metric;
        defaultCurvature: Metric;
        sortBy: Criterion;
        sortReverse: boolean;
        googleFonts: string[] | null;
        systemFonts: string[] | null;
        extraFonts: FamilyProps[];
    };
    connectedCallback(): void;
    configure(options: Partial<PickerConfig>): void;
    private initialize;
    private updateFamilies;
    getFamily(name: string): FontFamily;
    setFont(font: Font | FontFamily | string): void;
    markFavourite(family: FontFamily, value?: boolean): boolean;
    open(): Promise<Font>;
    close(): Promise<void>;
}

declare type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

declare type Language = 'en' | 'nl' | 'de' | 'es' | 'fr';

declare type Metric = 'all' | '0.1' | '0.3' | '0.5' | '0.7' | '0.9';

export declare interface PickerConfig {
    language: Language;
    container: HTMLElement;
    previewText?: string;
    font: string;
    verbose: boolean;
    variants: boolean;
    favourites: string[];
    saveFavourites: boolean;
    storageKey: string;
    defaultSubset: Subset;
    defaultCategories: Category[];
    defaultWidth: Metric;
    defaultThickness: Metric;
    defaultComplexity: Metric;
    defaultCurvature: Metric;
    sortBy: Criterion;
    sortReverse: boolean;
    googleFonts: string[] | null;
    systemFonts: string[] | null;
    extraFonts: FamilyProps[];
}

declare interface PickerEventMap extends HTMLElementEventMap {
    open: Event;
    pick: Event;
    cancel: Event;
    close: Event;
}

declare type Subset = 'all' | 'arabic' | 'bengali' | 'chinese-hongkong' | 'chinese-simplified' | 'chinese-traditional' | 'cyrillic' | 'cyrillic-ext' | 'devanagari' | 'greek' | 'greek-ext' | 'gujarati' | 'gurmukhi' | 'hebrew' | 'japanese' | 'kannada' | 'khmer' | 'korean' | 'latin' | 'latin-ext' | 'malayalam' | 'myanmar' | 'oriya' | 'sinhala' | 'tamil' | 'telugu' | 'thai' | 'tibetan' | 'vietnamese';

export { }
