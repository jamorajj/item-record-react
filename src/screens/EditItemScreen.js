import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import useDocumentTitle from '../hooks/useDocumentTitle';
import ItemForm from '../components/ItemForm';

function EditItemScreen() {
  const [itemList, setItemList] = useLocalStorage('item-record-list', []);

  const navigate = useNavigate();
  const params = useParams();

  useDocumentTitle('Edit Item');

  const toEdit = itemList.find(item => item.id === +params.id);

  const handleSubmitForm = (values) => {
    console.log(values);
    const tempItems = [...itemList];
    tempItems.splice(itemList.findIndex(item => item.id === toEdit.id), 1, values);
    setItemList([...tempItems]);
    navigate('/');
  };

  return (
    <ItemForm type="edit" handleSubmit={handleSubmitForm} values={toEdit} />
  );
};

export default EditItemScreen;