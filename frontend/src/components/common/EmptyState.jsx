function EmptyState({ title = "No hay resultados", message = "Intenta cambiar los filtros o la búsqueda." }) {
  return (
    <div className="empty-state">
      <h3 className="empty-state__title">{title}</h3>
      <p className="empty-state__message">{message}</p>
    </div>
  );
}

export default EmptyState;