import { useState, useEffect } from "react";
import {Blogs} from '../blogs';
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
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
        console.log('useEffect!');

        fetch('http://localhost:8000/blogs')
            .then((res) => {return res.json()})
            .then((data) => {
                console.log('data', data);
                setBlogs(data);
            })


    }, []); 
    //Whatever you put in the dependency array, if that changes, useEffect will take place
    //i.e it'll invoke the function inside it

    return ( 
        <div className="home">
            {blogs ?
                <BlogList 
                blogs = {blogs}
                title = {title}
                handleDelete = {handleDelete}
            /> : <h1>Loading..</h1>
            }
        </div>
     );
}
 
export default Home;