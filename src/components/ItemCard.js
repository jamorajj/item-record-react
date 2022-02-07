import { formatDate } from '../utils/format';

const ItemCard = ({ item, handleSelectItem }) => {
  return (
    <>
      <div className="w-full lg:w-3/4 cursor-pointer mb-2" onClick={() => handleSelectItem(item)}>
        <div className="bg-gray-50 p-2 text-center hover:bg-blue-50">
          <p className="text-xl font-bold font-heading">{item.itemName}</p>
          <p className="text-md text-gray-500">{formatDate(item.itemDate)}</p>
        </div>
      </div>
    </>
  );
};

export default ItemCard;