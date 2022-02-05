function API() {
  return (
    <main>
      <h1>API</h1>
      <ul className="list-code">
        <li>
          <span>GET/all items</span>{' '}
          http://localhost:3002/api/item/61fbc058e96a679a157f4fb2
        </li>
        <li>
          <span>POST/new item</span> http://localhost:3002/api/new
        </li>

        <li>
          <span>DEL/item by id</span>{' '}
          http://localhost:3002/api/item/61fbc058e96a679a157f4fb2
        </li>

        <li>
          <span>UPDATE/update item</span>{' '}
          http://localhost:3002/api/update/61fbb5870fb02e464356a6f7
        </li>

        <li>
          <span>GET/item by id</span>{' '}
          http://localhost:3002/api/item/61fbb5870fb02e464356a6f7
        </li>
        <hr />
        <li>
          <span>POST/new user info</span> http://localhost:3002/api/user/new
        </li>
        <hr />
        <li>
          <span>POST/new order with user id</span>{' '}
          http://localhost:3002/api/order/add
        </li>

        <li>
          <span>GET/all order items by user id</span>{' '}
          http://localhost:3002/api/order/all/MhCYe3vRDfNtThhRn7ljlNqxHx02
        </li>

        <li>
          <span>DEL/delete order item by id</span>{' '}
          http://localhost:3002/api/order/item/61fd0aa0882836db4f86523e
        </li>
      </ul>
    </main>
  );
}

export default API;
