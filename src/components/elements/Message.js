function Menu({ message, type }) {
  return <div className={`message message-${type}`}>{message}</div>;
}

export default Menu;
