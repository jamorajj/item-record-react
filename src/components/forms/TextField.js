const TextField = ({
  field,
  placeholder,
  formik,
  required,
}) => {
  return (
    <div className="mb-3">
      <input
        className="w-full py-2 pl-3 bg-white"
        type="text"
        id={field}
        name={field}
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[field]}
      />
      {(required && formik.touched[field] && formik.errors[field]) ? (
        <p className="text-red-500 text-left text-sm">{formik.errors[field]}</p>
      ) : null}
    </div>
  );
};

export default TextField;