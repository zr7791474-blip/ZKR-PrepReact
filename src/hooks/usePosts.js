import { useEffect, useState } from "react";

/**
 * Hook personnalise - PDF page 252
 * Le nom commence par "use" par convention.
 */
export default function usePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let annule = false;

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((response) => {
        if (!annule) setPosts(response);
      })
      .catch(() => {
        if (!annule) setPosts([]);
      });

    return () => {
      annule = true;
    };
  }, []);

  return posts;
}
