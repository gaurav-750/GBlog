import { useState, useEffect } from "react";
import {Blogs} from '../blogs';
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(Blogs);
    const title = "All Blogs!";

    const handleDelete = (id) => {
        setBlogs(blogs.filter((blog) => {
            return (
                blog.id != id
            )
        }))
    }

    //We can use useEffect to fire a function everytime the component renders itself!
    useEffect(() => { //This function is going to load everytime the component renders
        console.log('USEEFFECT!')
    }, []); //Whatever you put in the dependency array, if that changes, useEffect will taka place
    //i.e it'll invoke the function inside it

    return ( 
        <div className="home">
            <BlogList 
                blogs = {blogs}
                title = {title}
                handleDelete = {handleDelete}
            />
        </div>
     );
}
 
export default Home;