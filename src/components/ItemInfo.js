import { Link } from 'react-router-dom';
import { useState } from 'react';
import { formatDate } from '../utils/format';
import Button from './Button';

const ItemInfo = ( { handleDeleteItem, item } ) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="w-full lg:w-3/4 bg-gray-50 mx-auto p-6 rounded">
      <div className="w-full px-4 mb-2">
        <img
          className={`w-full h-52 object-cover rounded-lg ${!imageLoaded ? 'hidden' : ''}`}
          src={item.itemImageLink}
          alt={item.itemName}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <h3 className="text-2xl font-bold font-heading mb-1 text-center text-gray-400">Loading image...</h3>
        )}
        <h3 className="text-2xl font-bold font-heading mb-1">{item.itemName}</h3>
        <p className="mb-2 text-lg text-gray-400">{formatDate(item.itemDate)}</p>
        <p className="text-lg text-gray-500 leading-loose">{item.itemDescription === '' ? 'No Description Added' : item.itemDescription}</p>
      </div>
      <div className="w-full px-4">
        <ul className="flex justify-end">
          <li>
            <Button hoverColor='blue' type='link' to={`/edit/${item.id}`} text='Edit' />
          </li>
          <li className="mx-2">
            <Button hoverColor='red' handleClick={handleDeleteItem} text='Delete' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ItemInfo;