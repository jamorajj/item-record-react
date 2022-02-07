import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [ field ] = useField(props);

  return (
    <div className="mb-3">
      <DatePicker
        {...field}
        {...props}
        disabledKeyboardNavigation
        dateFormat="MM-dd-yyyy"
        className="w-full py-2 pl-3 bg-white"
        minDate={new Date()}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val) => {
          setFieldValue(field.name, val);
        }}
      />
      {!field?.value ? (
        <p className="text-red-500 text-left text-sm">Date is required</p>
      ) : null}
    </div>
  );
};

export default DatePickerField;