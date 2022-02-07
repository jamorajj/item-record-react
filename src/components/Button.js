import { Link } from 'react-router-dom';

const Button = ({ hoverColor, handleClick, type, to, text }) => {
  const classes = `block px-3 py-2 text-sm text-gray-500 hover:text-${hoverColor}-700 font-bold border border-gray-100 hover:border-${hoverColor}-200`;

  if (type === 'link') {
    return (
      <Link className={classes} to={to}>
        {text}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={() => handleClick()}>
      {text}
    </button>
  );
};

export default Button;