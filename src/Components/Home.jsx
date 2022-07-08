import { useState } from "react";
import {Blogs} from '../blogs';
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(Blogs);
    const title = "All Blogs!";

    return ( 
        <div className="home">
            <BlogList 
                blogs = {blogs}
                title = {title}
            />

            <BlogList 
                blogs = {blogs.filter((blog) => {return (blog.author === 'mario')})}
                title = "Mario's Blog"
            />
        </div>
     );
}
 
export default Home;