import { Category as Category_2 } from '../types/translations';
import { Criterion } from '../types/translations';
import { default as default_2 } from 'events';
import { FamilyProps as FamilyProps_2 } from '../types/fonts';
import { Language } from '../types/translations';
import { Metric } from '../types/translations';
import { Subset as Subset_2 } from '../types/translations';

declare type Category = 'serif' | 'sans-serif' | 'display' | 'handwriting' | 'monospace';

declare type Criterion_2 = 'name' | 'popularity' | 'width' | 'thickness' | 'complexity' | 'curvature';

declare interface FamilyProps {
    name: string;
    variants: string[];
    category?: Category;
    subsets?: Subset[];
    popularity?: number;
    metrics?: {
        width: number;
        thickness: number;
        complexity: number;
        curvature: number;
    };
    url?: string;
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

declare class FontLoader {
    #private;
    static loaded(name: string): boolean;
    static load(font: string | FontFamily): Promise<void>;
}

declare class FontPicker extends default_2<{
    open: [];
    pick: [font: Font];
    cancel: [];
    close: [];
}> {
    static FontLoader: typeof FontLoader;
    private $el;
    private $inputEl;
    private orgInputType;
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
        previewText: string | null;
        font: string;
        verbose: boolean;
        variants: boolean;
        favourites: string[];
        saveFavourites: boolean;
        storageKey: string;
        defaultSubset: Subset_2;
        defaultCategories: Category_2[];
        defaultWidth: Metric;
        defaultThickness: Metric;
        defaultComplexity: Metric;
        defaultCurvature: Metric;
        sortBy: Criterion;
        sortReverse: boolean;
        googleFonts: string[] | null;
        systemFonts: string[] | null;
        extraFonts: FamilyProps_2[];
    };
    private clickHandler?;
    private changeHandler?;
    constructor(el: HTMLButtonElement | HTMLInputElement | string, config?: Partial<PickerConfig>);
    configure(options: Partial<PickerConfig>): void;
    private initialize;
    private updateFamilies;
    getFamily(name: string): FontFamily;
    setFont(font: Font | FontFamily | string, emit?: boolean): void;
    markFavourite(family: FontFamily, value?: boolean): boolean;
    open(): Promise<Font>;
    close(): Promise<void>;
    destroy(): void;
}
export default FontPicker;

declare type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

declare type Language_2 = 'en' | 'nl' | 'de' | 'es' | 'fr';

declare type Metric_2 = 'all' | '0!' | '1!' | '2!' | '3!' | '4!';

declare interface PickerConfig {
    language: Language_2;
    container: HTMLElement;
    previewText: string | null;
    font: string;
    verbose: boolean;
    variants: boolean;
    favourites: string[];
    saveFavourites: boolean;
    storageKey: string;
    defaultSubset: Subset;
    defaultCategories: Category[];
    defaultWidth: Metric_2;
    defaultThickness: Metric_2;
    defaultComplexity: Metric_2;
    defaultCurvature: Metric_2;
    sortBy: Criterion_2;
    sortReverse: boolean;
    googleFonts: string[] | null;
    systemFonts: string[] | null;
    extraFonts: FamilyProps[];
}

declare type Subset = 'all' | 'arabic' | 'bengali' | 'chinese-hongkong' | 'chinese-simplified' | 'chinese-traditional' | 'cyrillic' | 'cyrillic-ext' | 'devanagari' | 'greek' | 'greek-ext' | 'gujarati' | 'gurmukhi' | 'hebrew' | 'japanese' | 'kannada' | 'khmer' | 'korean' | 'latin' | 'latin-ext' | 'malayalam' | 'myanmar' | 'oriya' | 'sinhala' | 'tamil' | 'telugu' | 'thai' | 'tibetan' | 'vietnamese';

export { }
