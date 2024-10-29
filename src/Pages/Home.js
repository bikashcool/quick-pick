import React, { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import Products from "../Components/Products"

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      alert("Products Data not available");
      setPosts([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <Products key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div>No Data Found</div>
      )}
    </div>
  );
};

export default Home;
