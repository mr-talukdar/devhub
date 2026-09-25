import "./SearchInput.css";

export default function SearchInput() {
  return (
    <div className="input-container">
      <img
        src="https://img.icons8.com/?size=100&id=3FpbhaZa80Rh&format=png&color=000000"
        alt="Search"
        className="search-icon"
      />

      {/* 2. The Input Field */}
      <input
        type="text"
        id="search-field"
        className="search-input"
        placeholder=" " /* Keep this space! It helps style the floating label */
      />

      {/* 3. The Label Inside */}
      <label htmlFor="search-field" className="search-label">
        Quick Jump or command using CMD+K
      </label>
    </div>
  );
}
