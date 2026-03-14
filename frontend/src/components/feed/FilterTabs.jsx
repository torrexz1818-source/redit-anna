function FilterTabs({ categories, activeCategory, onChangeCategory }) {
  return (
    <div className="filter-tabs">
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          className={`filter-tabs__item ${activeCategory === category.value ? "filter-tabs__item--active" : ""}`}
          onClick={() => onChangeCategory(category.value)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;