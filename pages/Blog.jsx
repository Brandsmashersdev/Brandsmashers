import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import blogsData from "../data/blogs";
import Image from "next/image";
import HeaderHorizontal from "../components/header/HeaderHorizontal";
import Link from "next/link";
import Footer from "../components/footer/Footer";


Modal.setAppElement("#__next");

const Blog = () => {

  const [isZoomed, setIsZoomed] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage, setBlogsPerPage] = useState(6);

  // Determine the number of blogs to display based on screen size
  useEffect(() => {
    const updateBlogsPerPage = () => {
      if (window.innerWidth <= 800) {
        setBlogsPerPage(3);
      } else {
        setBlogsPerPage(6);
      }
    };

    window.addEventListener('resize', updateBlogsPerPage);
    updateBlogsPerPage(); // Set initial value

    return () => window.removeEventListener('resize', updateBlogsPerPage);
  }, []);

  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <>
    <div id="blog">
        <HeaderHorizontal />
      <div className="background-image" >
        <h3 className="bloghead">Insights</h3>
        <p className="blogdesc">Delve into Our Expertise: In-Depth Blogs and Comprehensive Case Studies</p>
      </div>
      </div>
      <div className="blogs">
        <a href="/blogs/web-cookies" target="_blank">
        <div className="white-box"
          style={{
            transition: 'transform 0.3s', 
            transform: isZoomed ? 'scale(1.1)' : 'scale(1)',
          }}
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
        >
          <div className="featured-block">
            <p>Featured</p>
          </div>
            <h1 className="featured-head"> Web Cookies </h1>

            <p className="featured_para">Web cookies are small files created by a web server and stored by a web browser to track user activity and preferences. They are often used to remember items in shopping carts or keep users logged in during their session.</p>

          <div className="featured_top">
            <img src="/img/Design-updation/Blog/web icon.jpg" alt="Icon" />
            <span> Web Technology</span>
          </div>


          <img src="/img/Design-updation/Blog/4.jpg" alt="WebRTC"/>

        </div>
        </a>
      <h2 className="other-blogs-start">Latest Articles</h2>
      <div>
        <div className="blog-container">
          {currentBlogs.map((item, i) => (
            <Link key={i} href={`/blogs/${item.routeName}`} target="_blank">

                <div key={item.id} className="blog-card" >
                  <div className="blog-image" >
                    <Image
                      src={item.img}
                      height={200}
                      width={350}
                      style={{borderRadius: "10px 10px 0px 0px"}}
                    />
                  </div>

                  <div className="blog_details">
                    <h4 className="title" >{item.title}</h4>
                    <p className="description-style">{item.description}</p>
                  </div>

                </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
      <Pagination
        blogsPerPage={blogsPerPage}
        totalBlogs={blogsData.length}
        paginate={paginate}
      />
      <div className="footer-container blog_footer">
        <Footer />
      </div> 
    </>
  );
};


const Pagination = ({ blogsPerPage, totalBlogs, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Blog;
