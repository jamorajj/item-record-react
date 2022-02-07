import ItemCard from './ItemCard';
import SearchField from './SearchField';

const ItemList = ({ itemList, handleSelectItem, searchQuery, handleChangeQuery }) => {
  return (
    <>
      <SearchField searchQuery={searchQuery} handleChange={handleChangeQuery} />
      {itemList.length === 0 ? (
        <h1>no result</h1>
      ) : (
        itemList.sort((a, b) => new Date(b.itemDate).getTime() - new Date(a.itemDate).getTime()).map(item =>
          <ItemCard
            key={item.id}
            item={item}
            handleSelectItem={handleSelectItem}
          />
        )
      )}
    </>
  );
};

export default ItemList;