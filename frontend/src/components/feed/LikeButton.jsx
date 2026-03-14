function LikeButton({ likes, onLike }) {
  return (
    <button type="button" className="like-button" onClick={onLike}>
      <span className="like-button__icon">▲</span>
      <span className="like-button__count">{likes}</span>
    </button>
  );
}

export default LikeButton;