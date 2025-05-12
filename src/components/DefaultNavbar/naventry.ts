/**
 * An entry in the navbar
 */
export interface NavEntry {

    /**
     * The displayed name of the nav item
     */
    name : string,

    /**
     * The link of the nav item
     */
    link : string,

    /**
     * True if the nav entry links to something outside the app (an asset or foreign site)
     */
    external : boolean,

    /**
     * True if the display name is a bootstrap icon instead of text
     */
    isIcon : boolean,

}


/**
 * The list of all nav entries for the navbar
 */
export const defaultEntries : NavEntry[] = [
    {
        name: "Home",
        link: "/",
        external : false,
        isIcon : false,
    },
    {
        name: "Projects",
        link: "/projects",
        external : false,
        isIcon : false,
    },
    {
        name: "Blog",
        link: "/blog/1",
        external : false,
        isIcon : false,
    },
    {
        name: "Contact",
        link: "/contact",
        external : false,
        isIcon : false,
    },
    {
        name: "Resume",
        link: "/AustinHooverResume.pdf",
        external : true,
        isIcon : false,
    },
    {
        name: "GameDev",
        link: "/gamedev",
        external: false,
        isIcon : false,
    },
    {
        name: "bi bi-github",
        link: "https://github.com/AustinHoover/",
        external: true,
        isIcon: true,
    },
    {
        name: "bi bi-linkedin",
        link: "https://www.linkedin.com/in/austin-hoover-b4a30b182/",
        external: true,
        isIcon: true,
    },
    {
        name: "bi bi-twitter",
        link: "https://twitter.com/railgunsr/",
        external: true,
        isIcon: true,
    },
    {
        name: "bi bi-envelope-fill",
        link: "mailto:austinwhoover@gmail.com",
        external: true,
        isIcon: true,
    }
];
