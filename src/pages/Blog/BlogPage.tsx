import { useNavigate, useParams } from "react-router-dom";
import { DefaultNavbar } from "../../components/DefaultNavbar/DefaultNavbar";
import { BlogPost } from "../../components/BlogPost/BlogPost";
import * as blogDefs from '../../assets/blog/blogDefs.json';
import React = require("react");

/**
 * A single blog entry
 */
export interface BlogEntry {
    /**
     * Title of the blog post
     */
    title: string,
    /**
     * Id of the blog entry
     */
    id: string,
    /**
     * The content of the blog post
     */
    content: string,
}

/**
 * The config file that stores all blog entries
 */
interface BlogFile {
    /**
     * The list of blog entries
     */
    entries: BlogEntry[],
}

/**
 * Displays a single blog entry
 */
const BlogPage = () => {
    const navigate = useNavigate()
    const { blogId } = useParams()
    const projectsFile = JSON.parse(blogDefs as any as string) as BlogFile
    const blogObj = projectsFile.entries.find(entry => entry.id === blogId + "")



    if(!blogObj){
        React.useEffect(()=>{
            navigate('/404')
        },[])
        return <div></div>
    }


    return (
        <div>
            <header>
                <DefaultNavbar/>
            </header>
            <main role="main">
                <div className="container text-center">
                    <BlogPost entry={blogObj}/>
                </div>
            </main>
        </div>
    );
}

export default BlogPage;