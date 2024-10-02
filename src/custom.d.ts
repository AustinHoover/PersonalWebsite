declare module "!@svgr/webpack?modules!*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}
declare module "*.svg" {
    const content: string;
    export default content;
}