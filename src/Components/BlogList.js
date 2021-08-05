import { Link } from "react-router-dom";

const BookList = ({ blogs, title }) => {
  
  return (
    <div className="blog-list">
      <h2>{title}</h2>

      {blogs.map((b) => (
        <div className="blog-preview" key={b.id}>
          <Link>
            {/* <img src={b.image} alt="random pic"/> */}
            <h2>{b.title}</h2>
            <p>Author: {b.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default BookList;