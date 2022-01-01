type FunctionalComponentStatic<props, static> = React.FC<props> & static;

type CommonProperties = React.FC<{
    width?: string | number;
    height?: string | number;
    className?: string;
    "aria-hidden"?: string;
    onClick?(event: React.MouseEvent): void;
    [key: string]: any
}>

declare module "@discord/icons" {
    export const Caret: FunctionalComponentStatic<CommonProperties & {direction: string;}, {
        displayName: "Caret";
        Directions: {DOWN: string; LEFT: string; RIGHT: string; UP: string;};
    }>;

    export const Gear: CommonProperties;
    export const Bell: CommonProperties;
    export const ShieldStar: CommonProperties;
    export const At: CommonProperties;
    export const People: CommonProperties;
    export const Trash: CommonProperties;
    export const ArrowLeft: CommonProperties;
    export const EmojiTravelCategory: CommonProperties;
    export const Search: CommonProperties;
    export const Pencil: CommonProperties;
    export const Timer: CommonProperties;
    export const ChatBubble: CommonProperties;
    export const DropdownArrow: CommonProperties;
    export const OpenExternal: CommonProperties;
    export const Launch: CommonProperties;
    export const Replay: CommonProperties;
    export const Help: CommonProperties;
    export const HelpOutline: CommonProperties;
}