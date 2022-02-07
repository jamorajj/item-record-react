import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import useDocumentTitle from '../hooks/useDocumentTitle';
import ItemForm from '../components/ItemForm';

function AddItemScreen() {
  const [itemList, setItemList] = useLocalStorage('item-record-list', []);

  const navigate = useNavigate();

  useDocumentTitle('Add Item');

  const handleSubmitForm = (values) => {
    setItemList([...itemList, {
      ...values,
      id: values.itemDate.getTime(),
    }]);
    navigate('/');
  };

  return (
    <ItemForm handleSubmit={handleSubmitForm} />
  );
};

export default AddItemScreen;