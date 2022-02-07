import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useToggle from '../hooks/useToggle';
import ItemForm from '../components/ItemForm';
import ItemList from '../components/ItemList';
import ItemInfo from '../components/ItemInfo';
import Modal from 'react-modal';
import Button from '../components/Button';

function DashboardScreen() {
  const [itemList, setItemList] = useLocalStorage('item-record-list', []);
  const [showModal, setShowModal] = useToggle(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useDocumentTitle('Dashboard');

  const handleSubmitForm = (values) => {
    setItemList([...itemList, {
      ...values,
      id: values.itemDate.getTime(),
    }]);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const handleDeleteItem = () => {
    setItemList([ ...itemList.filter(item => item.itemDate !== selectedItem.itemDate) ]);
    setSelectedItem(null);
    setShowModal();
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  Modal.setAppElement('#root');

  const list = searchQuery === '' ? itemList : itemList.filter(item => item.itemName.includes(searchQuery));

  return (
    <>
      {itemList.length === 0 ? (
        <>
          <h3 className="text-center mb-8 text-2xl font-bold font-heading">There are no items yet...</h3>
          <ItemForm handleSubmit={handleSubmitForm} />
        </>
      ) : (
        <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
          <div className="w-full flex flex-col items-center md:w-1/2 px-4 mb-4 md:mb-0 order-2 md:order-1">
            <ItemList itemList={list} handleSelectItem={handleSelectItem} searchQuery={searchQuery} handleChangeQuery={handleSearch} />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 order-1 md:order-2">
            {selectedItem ? (
              <ItemInfo item={selectedItem} handleDeleteItem={setShowModal} />
            ) : (
              <h3 className="text-center mb-8 text-2xl font-bold font-heading">Select an item to view image</h3>
            )}
          </div>
        </div>
      )}
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal()}
        contentLabel='Delete Item'
        className='w-3/4 md:w-1/2 mx-auto relative top-1/2 -translate-y-1/2 bg-slate-100 text-center py-4 rounded'
      >
        <p className="mb-3">Confirm Delete of item <span className="font-semibold">"{selectedItem?.itemName}"</span></p>
        <ul className="flex justify-center">
          <li>
            <Button hoverColor='violet' handleClick={handleDeleteItem} text='Delete' />
          </li>
          <li className="mx-2">
            <Button hoverColor='red' handleClick={setShowModal} text='Cancel' />
          </li>
        </ul>
      </Modal>
    </>
  );
};

export default DashboardScreen;