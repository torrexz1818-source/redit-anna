function SearchBar({ value, onChange, placeholder = "Buscar publicaciones..." }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        className="searchbar__input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchBar;