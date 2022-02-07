import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from './forms/TextField';
import { urlPattern } from '../constants';
import DatePickerField from './forms/DatePickerField';

const ItemForm = ({ type = "add", handleSubmit, values }) => {
  return (
    <div className="container px-4 mx-auto">
      <div className="max-w-md mx-auto py-8 px-8 bg-gray-100 rounded-lg text-center">
        <h3 className="mb-8 text-xl font-bold font-heading uppercase">{type} an Item</h3>
        <Formik
          initialValues={
            values ? {
              ...values,
              itemDate: new Date(values.itemDate),
            } : {
              itemName: '',
              itemDescription: '',
              itemImageLink: '',
              itemDate: new Date(),
            }
          }
          validationSchema={Yup.object({
            itemName: Yup
              .string()
              .required('Enter item name'),
            itemImageLink: Yup
              .string()
              .required('Enter item image link')
              .matches(urlPattern, 'Enter a valid item url'),
            itemDate: Yup
              .date()
              .required('Enter date')
          })}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {formik => (
            <form onSubmit={formik.handleSubmit}>
              <TextField
                field="itemName"
                placeholder="Name"
                formik={formik}
                required
              />
              <TextField
                field="itemDescription"
                placeholder="Description"
                formik={formik}
              />
              <TextField
                field="itemImageLink"
                placeholder="Image Link"
                formik={formik}
                required
              />
              <DatePickerField
                name="itemDate"
              />
              <button
                className="w-full inline-block px-6 py-3 mb-4 text-sm text-white font-bold leading-loose bg-gray-500 hover:bg-gray-600 uppercase"
                type="submit"
              >
                  Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ItemForm;