import { createContext, useContext, useMemo, useState } from "react";
import mockPosts from "../data/mockPosts";

const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setPosts] = useState(mockPosts);

  const addPost = ({ title, content, category, author }) => {
    const newPost = {
      id: crypto.randomUUID(),
      title,
      content,
      category,
      author,
      likes: 0,
      commentsCount: 0,
      createdAt: new Date().toISOString(),
    };

    setPosts((prev) => [newPost, ...prev]);
    return newPost;
  };

  const likePost = (postId) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const getPostById = (postId) => {
    return posts.find((post) => post.id === postId);
  };

  const value = useMemo(
    () => ({
      posts,
      addPost,
      likePost,
      getPostById,
    }),
    [posts]
  );

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

export function usePosts() {
  return useContext(PostContext);
}
