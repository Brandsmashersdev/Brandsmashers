import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import blogsData from "../../data/blogs";
import Social from "../Social";
import Image from "next/image";

import blogShowcaseData from "../../data/blogs-showcase"
import Link from "next/link";


Modal.setAppElement("#__next");

const Blog = () => {

  const [isZoomed, setIsZoomed] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage, setBlogsPerPage] = useState(6);

  // Determine the number of blogs to display based on screen size
  useEffect(() => {
    const updateBlogsPerPage = () => {
      if (window.innerWidth <= 768) {
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

      <div className="background-image">
        <p className="bloghead">Insights</p>
        <h1 className="blogdesc">Delve into Our Expertise: In-Depth Blogs and Comprehensive Case Studies</h1>

        <div className="white-box"
          style={{
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.3s', 
            transform: isZoomed ? 'scale(1.1)' : 'scale(1)',
          }}
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
        >
          <div className="featured-block"><p>Featured</p></div>
          <h1 className="featured-head"> Web Cookies </h1>

          <p style={{ textAlign: 'left', fontSize: '15px' }}>Web cookies are small files created by a web server and stored by a web browser to track user activity and preferences. They are often used to remember items in shopping carts or keep users logged in during their session.</p>

          <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
            <img src="/img/Design-updation/Blog/web icon.jpg" alt="Icon" style={{ width: '25px', height: '25px', display: 'block' }} />
            <span style={{ color: "black", marginLeft: "10px" }}> Web Technology</span>
          </div>


          <img src="/img/Design-updation/Blog/4.jpg" alt="WebRTC" style={{ width: '100%', height: '70%', marginTop: '10px' }} />

        </div>

      </div>
      <h2 className="other-blogs-start">Latest Articles</h2>
      <div>
        <div className="blog-container">
          {currentBlogs.map((item, i) => (
            <Link key={i} href={`/blogs/${item.routeName}`} target="_blank">

                <div key={item.id} className="blog-card" >
                  <div className="blog-image" >
                    <Image
                      src={item.img}
                      height={250}
                      width={400}
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
      <Pagination
        blogsPerPage={blogsPerPage}
        totalBlogs={blogsData.length}
        paginate={paginate}
      />
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
