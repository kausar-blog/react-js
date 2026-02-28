import { useState, useEffect } from "react";

function DataFetching() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>Error Is{error.message}</div>;
  }

  return (
    <>
      <div>
        <h1>My Api Recent Posts</h1>
        {/*  <ul className="border border-red-500 p-5 m-2">
          {data.map((post) => (
            <li key={post.id} className="border m-1 p-1 bg-sky-500">
              <span className="bg-gray-50 block"> id: {post.id}. </span>
              <span className="bg-gray-300 block">title: {post.title}</span>
              <span className="bg-gray-500 block">body: {post.body}</span>
            </li>
          ))}
        </ul> */}
        <ul className="max-w-4xl mx-auto p-6 space-y-6">
          {data.map((post) => (
            <li
              key={post.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                  Post #{post.id}
                </span>
              </div>

              <h2 className="text-xl font-bold text-gray-800 mb-2 capitalize">
                {post.title}
              </h2>

              <p className="text-gray-600 leading-relaxed">{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default DataFetching;
