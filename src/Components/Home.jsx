import { useState, useEffect } from "react";
import {Blogs} from '../blogs';
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState('');

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
            .then((res) => {
                if (!res.ok) { //if the req.cannot be fetched, throw an error => it'll go in catch block
                    throw Error("Oops! Could not fetch the request!");
                }

                return res.json();
            })
            .then((data) => {
                // console.log('data', data);
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
            })


    }, []); 
    //Whatever you put in the dependency array, if that changes, useEffect will take place
    //i.e it'll invoke the function inside it

    return ( 
        <div className="home">
            {error && <div style={{color:"red"}}> {error} </div> } 

            {isPending && <h1>Loading..</h1> }

            {blogs &&
                <BlogList 
                blogs = {blogs}
                title = {title}
                handleDelete = {handleDelete}
            />
            }
        </div>
     );
}
 
export default Home;