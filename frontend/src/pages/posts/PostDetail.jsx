import { useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { formatDate } from "../../utils/formatDate";
import { usePosts } from "../../context/PostContext";

const categoryLabels = {
  recommendation: "Recomendación",
  tip: "Tip",
  experience: "Experiencia",
  question: "Pregunta",
};

function PostDetail() {
  const { id } = useParams();
  const { getPostById } = usePosts();

  const post = getPostById(id);

  if (!post) {
    return (
      <MainLayout>
        <section className="post-detail">
          <div className="page-block">
            <h1>Publicación no encontrada</h1>
            <p>No pudimos encontrar el post que estás buscando.</p>
          </div>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="post-detail">
        <article className="post-detail__card">
          <div className="post-detail__meta">
            <span className="post-detail__category">
              {categoryLabels[post.category] || post.category}
            </span>
            <span>•</span>
            <span>{formatDate(post.createdAt)}</span>
          </div>

          <h1 className="post-detail__title">{post.title}</h1>

          <div className="post-detail__author">
            <strong>{post.author.name}</strong>
            <span>
              {post.author.position} · {post.author.company}
            </span>
          </div>

          <p className="post-detail__content">{post.content}</p>

          <div className="post-detail__stats">
            <span>▲ {post.likes} likes</span>
            <span>💬 {post.commentsCount} comentarios</span>
          </div>
        </article>
      </section>
    </MainLayout>
  );
}

export default PostDetail;