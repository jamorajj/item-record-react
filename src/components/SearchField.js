const SearchField = ({ searchQuery, handleChange }) => {
  return (
    <input
      className="w-full lg:w-3/4 py-2 pl-3 mb-4 bg-gray-100 rounded-lg"
      type="text"
      placeholder="Filter"
      onChange={handleChange}
      value={searchQuery}
    />
  );
};

export default SearchField;