import './search-box.style.css';

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
    <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler} //because its an event handler
    />
);

export default SearchBox;
