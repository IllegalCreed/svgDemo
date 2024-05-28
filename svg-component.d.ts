
declare module '~virtual/svg-component' {
  const SvgIcon: import("vue").DefineComponent<{
      name: {
          type: import("vue").PropType<"icon-album" | "icon-all-match" | "icon-battery-charging-30" | "icon-book-4-outline" | "icon-build-circle" | "icon-category-rounded" | "icon-colors-sharp" | "icon-dentistry">;
          default: string;
          required: true;
      };
  }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
      name: {
          type: import("vue").PropType<"icon-album" | "icon-all-match" | "icon-battery-charging-30" | "icon-book-4-outline" | "icon-build-circle" | "icon-category-rounded" | "icon-colors-sharp" | "icon-dentistry">;
          default: string;
          required: true;
      };
  }>>, {
      name: "icon-album" | "icon-all-match" | "icon-battery-charging-30" | "icon-book-4-outline" | "icon-build-circle" | "icon-category-rounded" | "icon-colors-sharp" | "icon-dentistry";
  }>;
  export const svgNames: ["icon-album" , "icon-all-match" , "icon-battery-charging-30" , "icon-book-4-outline" , "icon-build-circle" , "icon-category-rounded" , "icon-colors-sharp" , "icon-dentistry"];
  export type SvgName = "icon-album" | "icon-all-match" | "icon-battery-charging-30" | "icon-book-4-outline" | "icon-build-circle" | "icon-category-rounded" | "icon-colors-sharp" | "icon-dentistry";
  export default SvgIcon;
}
