import * as React from 'react';
import { BlogEntry } from "../../pages/Blog/BlogPage";
import { getAssetUrl } from "../../utils/staticAssetMap";

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
    const [content, setContent] = React.useState<string>('')

    //get url for the blog content
    const blogContentUrl: string = getAssetUrl(props.entry.contentPath)
    console.log('blogContentUrl',blogContentUrl)

    //query for content
    React.useEffect(()=>{
        fetch(blogContentUrl).then(response => {
            return response.text()
        }).then(text => {
            setContent(text)
            console.log('content',text)
        })
    },[blogContentUrl])

    //construct the inner html object
    const innnerHtml = { __html: content }

    return (
        <div>
            <h1>{props.entry.title}</h1>
            <div dangerouslySetInnerHTML={innnerHtml}></div>
        </div>
    );
}