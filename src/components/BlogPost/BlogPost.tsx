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

    //construct the inner html object
    const innnerHtml = { __html: props.entry.content }

    return (
        <div>
            <h1>{props.entry.title}</h1>
            <div dangerouslySetInnerHTML={innnerHtml}></div>
        </div>
    );
}