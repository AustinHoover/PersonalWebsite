
//SVGR images are bundled as actual react components instead of urls
declare module "!@svgr/webpack?modules!*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

//all other svgs are bundled as URLs
declare module "*.svg" {
    const content: string;
    export default content;
}
