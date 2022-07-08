

const BlogList = (props) => {

    const {blogs, title} = props;

    return (  
       <div>
            <h3> {title} </h3>
            {blogs.map((blog) => {
                return (
                    <div className="blog-preview" key={blog.id}>
                       <h2>{blog.title}</h2>
                       <p style={{color : "grey"}}>Written by: {blog.author}</p>
                    </div>
                )
            })}
       </div> 
    );
}

export default BlogList; 