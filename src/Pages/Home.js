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
        <div
          className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
        gap-y-8 max-w-6xl p-6 mx-auto my-7 min-h-[80vh]"
        >
          {posts.map((post) => (
            <Products key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center h-screen w-screen items-center">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
