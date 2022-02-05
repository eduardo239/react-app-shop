import ShopPoster from './ShopPoster';

function UserWrapper() {
  return (
    <main>
      <h1>user name</h1>
      <p>
        <small># id</small>
      </p>
      <ShopPoster />
      {/* FIXME:: */}
      <ul>
        <li>
          <a href="/">orders</a>
        </li>
        <li>
          <a href="/">favorites</a>
        </li>
        <li>
          <a href="/">xxx</a>
        </li>
      </ul>
    </main>
  );
}

export default UserWrapper;
