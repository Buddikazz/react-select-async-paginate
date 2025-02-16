import type { ReactElement, Ref } from 'react';
import type { GroupBase, OptionsOrGroups, InputActionMeta, SelectInstance, Props as SelectProps } from 'react-select';
export declare type RequestOptionsCallerType = 'autoload' | 'menu-toggle' | 'input-change' | 'menu-scroll';
export declare type ReduceOptions<OptionType, Group extends GroupBase<OptionType>, Additional> = (prevOptions: OptionsOrGroups<OptionType, Group>, loadedOptions: OptionsOrGroups<OptionType, Group>, additional: Additional | undefined) => OptionsOrGroups<OptionType, Group>;
export declare type OptionsCacheItem<OptionType, Group extends GroupBase<OptionType>, Additional> = {
    isFirstLoad: boolean;
    isLoading: boolean;
    options: OptionsOrGroups<OptionType, Group>;
    hasMore: boolean;
    additional?: Additional;
};
export declare type OptionsCache<OptionType, Group extends GroupBase<OptionType>, Additional> = {
    [key: string]: OptionsCacheItem<OptionType, Group, Additional>;
};
export declare type ShouldLoadMore = (scrollHeight: number, clientHeight: number, scrollTop: number) => boolean;
export declare type Response<OptionType, Group extends GroupBase<OptionType>, Additional> = {
    options: OptionsOrGroups<OptionType, Group>;
    hasMore?: boolean;
    additional?: Additional;
};
export declare type LoadOptions<OptionType, Group extends GroupBase<OptionType>, Additional> = (inputValue: string, options: OptionsOrGroups<OptionType, Group>, additional?: Additional) => Response<OptionType, Group, Additional> | Promise<Response<OptionType, Group, Additional>|any>;
export declare type FilterOption = ((option: any, rawInput: string) => boolean) | null;
export declare type UseAsyncPaginateBaseResult<OptionType, Group extends GroupBase<OptionType>> = {
    handleScrolledToBottom: () => void;
    shouldLoadMore: ShouldLoadMore;
    isLoading: boolean;
    isFirstLoad: boolean;
    options: OptionsOrGroups<OptionType, Group>;
    filterOption: FilterOption;
};
export declare type UseAsyncPaginateResult<OptionType, Group extends GroupBase<OptionType>> = UseAsyncPaginateBaseResult<OptionType, Group> & {
    inputValue: string;
    menuIsOpen: boolean;
    onInputChange: (inputValue: string, actionMeta: InputActionMeta) => void;
    onMenuClose: () => void;
    onMenuOpen: () => void;
};
export declare type UseAsyncPaginateParams<OptionType, Group extends GroupBase<OptionType>, Additional> = {
    loadOptions: LoadOptions<OptionType, Group, Additional>|any;
    options?: OptionsOrGroups<OptionType, Group>;
    defaultOptions?: boolean | OptionsOrGroups<OptionType, Group>;
    additional?: Additional;
    defaultAdditional?: Additional;
    loadOptionsOnMenuOpen?: boolean;
    debounceTimeout?: number;
    reduceOptions?: ReduceOptions<OptionType, Group, Additional>;
    shouldLoadMore?: ShouldLoadMore;
    filterOption?: FilterOption;
    inputValue?: string;
    menuIsOpen?: boolean;
    defaultInputValue?: string;
    defaultMenuIsOpen?: boolean;
    onInputChange?: (newValue: string, actionMeta: InputActionMeta) => void;
    onMenuClose?: () => void;
    onMenuOpen?: () => void;
};
export declare type UseAsyncPaginateBaseParams<OptionType, Group extends GroupBase<OptionType>, Additional> = UseAsyncPaginateParams<OptionType, Group, Additional> & {
    inputValue: string;
    menuIsOpen: boolean;
};
export declare type ComponentProps<OptionType, Group extends GroupBase<OptionType>, IsMulti extends boolean> = {
    selectRef?: Ref<SelectInstance<OptionType, IsMulti, Group>>;
    cacheUniqs?: ReadonlyArray<any>;
};
export declare type AsyncPaginateProps<OptionType, Group extends GroupBase<OptionType>, Additional, IsMulti extends boolean> = SelectProps<OptionType, IsMulti, Group> & UseAsyncPaginateParams<OptionType, Group, Additional> & ComponentProps<OptionType, Group, IsMulti>;
export declare type WithAsyncPaginateType = <OptionType, Group extends GroupBase<OptionType>, Additional, IsMulti extends boolean = false>(props: AsyncPaginateProps<OptionType, Group, Additional, IsMulti>) => ReactElement;
