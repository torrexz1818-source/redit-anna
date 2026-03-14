import PostCard from "./PostCard";
import EmptyState from "../common/EmptyState";

function PostList({ posts, onLike }) {
  if (!posts.length) {
    return (
      <EmptyState
        title="No encontramos publicaciones"
        message="Prueba con otra búsqueda o cambia la categoría seleccionada."
      />
    );
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onLike={onLike} />
      ))}
    </div>
  );
}

export default PostList;