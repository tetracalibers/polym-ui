import { $ } from './util-types';
export declare const Required: <T>(defaultV?: T) => {
    instance: $.PropTypeWrap<T>;
    default: T;
    required: true;
};
export declare const NotRequired: <T>(defaultV?: T) => {
    instance: $.PropTypeWrap<T>;
    default: T;
    required: false;
};
export declare const getDefaultProps: <T>(options: $.OptionRecord) => T;
export declare type getPropType<O extends $.OptionRecord> = $.PartialByKeys<$.getPropTypesMap<O>, $.GetOptionalKey<O>>;
//# sourceMappingURL=index.d.ts.map