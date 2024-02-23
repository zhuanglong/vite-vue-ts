
declare module '~virtual/svg-component' {
  const SvgIcon: import("vue").DefineComponent<{
      name: {
          type: import("vue").PropType<"bangbangtang" | "baomihua" | "bingqilin" | "hanbao" | "pintu" | "react" | "sanmingzhi">;
          default: string;
          required: true;
      };
  }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
      name: {
          type: import("vue").PropType<"bangbangtang" | "baomihua" | "bingqilin" | "hanbao" | "pintu" | "react" | "sanmingzhi">;
          default: string;
          required: true;
      };
  }>>, {
      name: "bangbangtang" | "baomihua" | "bingqilin" | "hanbao" | "pintu" | "react" | "sanmingzhi";
  }>;
  export const svgNames: ["bangbangtang" , "baomihua" , "bingqilin" , "hanbao" , "pintu" , "react" , "sanmingzhi"];
  export type SvgName = "bangbangtang" | "baomihua" | "bingqilin" | "hanbao" | "pintu" | "react" | "sanmingzhi";
  export default SvgIcon;
}
