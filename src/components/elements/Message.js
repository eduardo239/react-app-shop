function Menu({ message, type, absolute = false }) {
  return (
    <div
      className={`message message-${type} ${
        absolute ? 'message-absolute' : ''
      }`}
    >
      {message}
    </div>
  );
}

export default Menu;
