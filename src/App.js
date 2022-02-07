import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AddItemScreen from './screens/AddItemScreen';
import EditItemScreen from './screens/EditItemScreen';
import DashboardScreen from './screens/DashboardScreen';
import NotFoundScreen from './screens/NotFoundScreen';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DashboardScreen />} />
        <Route path="add" element={<AddItemScreen />} />
        <Route path="edit/:id" element={<EditItemScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Route>
    </Routes>
  );
};

export default App;
