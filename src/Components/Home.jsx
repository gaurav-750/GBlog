import useFetch from '../useFetch';
import BlogList from "./BlogList";

const Home = () => {

    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    const handleDelete = (id) => {
        console.log('id in delete', id);
    }


    return ( 
        <div className="home">
            {error && <div style={{color:"red"}}> {error} </div> } 

            {isPending && <h1>Loading..</h1> }

            {blogs &&
                <BlogList 
                blogs = {blogs}
                title = "All Blogs!"
                handleDelete = {handleDelete}
            />
            }
        </div>
     );
}
 
export default Home;