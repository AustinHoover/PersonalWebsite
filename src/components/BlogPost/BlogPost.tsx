import { BlogEntry } from "../../pages/Blog/BlogPage";

/**
 * Props for the blog post component itself
 */
export interface DefaultBlogPostProps {
    /**
     * The blog entry data
     */
    entry: BlogEntry,
}

/**
 * The blog post component
 */
export const BlogPost = (props : DefaultBlogPostProps) => {

    const contentEls: JSX.Element[] = props.entry.content.map((content, i) => {
        return <div key={'content' + i}>{content.text}</div>
    })

    return (
        <div>
            <h1>{props.entry.title}</h1>
            {contentEls}
        </div>
    );
}