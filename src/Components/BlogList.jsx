import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Link } from 'react-router-dom';

const BlogList = (props) => {

    const {blogs, title} = props;

    return (  
       <div>
            <h3> {title} </h3>
            {blogs.map((blog) => {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <div className='blog-content'>
                            <Link to={`/create/${blog.id}`} style={{textDecoration:'none'}}>
                                <h2>{blog.title}</h2>
                                <p style={{color : "grey"}}>Written by: {blog.author}</p>
                            </Link>
                        </div>
                        
                        <div style={{marginTop:'auto'}} onClick={() => {
                            props.handleDelete(blog.id);
                        }}> 
                            <DeleteForeverOutlinedIcon fontSize='large'/>
                        </div>
                    </div>
                )
            })}
       </div> 
    );
}

export default BlogList; 