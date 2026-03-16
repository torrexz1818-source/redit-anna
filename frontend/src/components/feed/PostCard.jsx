
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";
import { formatDate } from "../../utils/formatDate";
import { truncateText } from "../../utils/truncateText";
const categoryLabels = {
  recommendation: "Recomendación",
  tip: "Tip",
  experience: "Experiencia",
  question: "Pregunta",
};

function PostCard({ post, onLike }) {
  return (
    <article className="post-card">
      <div className="post-card__left">
        <LikeButton likes={post.likes} onLike={() => onLike(post.id)} />
      </div>

      <div className="post-card__body">
        <div className="post-card__meta">
          <span className="post-card__category">
            {categoryLabels[post.category] || post.category}
          </span>
          <span className="post-card__dot">•</span>
          <span className="post-card__date">{formatDate(post.createdAt)}</span>
        </div>

        <h2 className="post-card__title">
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h2>

        <p className="post-card__content">
          {truncateText(post.content, 180)}
        </p>

        <div className="post-card__footer">
          <div className="post-card__author">
            <strong>{post.author.name}</strong>
            <span>
              {post.author.position} · {post.author.company}
            </span>
          </div>

          <div className="post-card__comments">
            💬 {post.commentsCount} comentarios
          </div>
        </div>
      </div>
    </article>
  );
}

export default PostCard;