import React, { useEffect, useState } from "react";
import axios from "axios";
import PageBanner from "../components/PageBanner";
import Postitems from "./Postitems";
import './postitems.scss'


function Blog() {
  document.title = "Blog - Power Funnels";
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let url = "https://www.power-funnels.com/wp-json/wp/v2/posts?per_page=100";
    axios.get(url).then((res) => {
      setPosts(res.data);
    });
     
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <PageBanner image="/images/Blog-page-banner.webp" title={<>Blogs</>} />
      <div className="container blog-post">
        <div className="row">
        {posts &&
      posts.map((post) => {
        return (<div className="col-md-4 my-3" key={post.id}>
        <Postitems  
        title={post.title.rendered}
        image={post.featured_media}
        excerpt={post.excerpt.rendered.slice(3, 100).split(/\s+/).slice(0, 15).join(" ")}
        date={post.date}
        link={post.link}
        />
        </div>
        );
      })}
        </div>
      </div>
      
    </div>
  );
}

export default Blog;
