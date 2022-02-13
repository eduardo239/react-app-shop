function StorageSelect({ item, setStorage }) {
  return (
    <section>
      <span>Cores</span>
      <div className="card-configuration">
        {item.storages.map((storage) => (
          <div
            key={storage}
            style={{ backgroundColor: storage }}
            className={`color-select bg--${storage}`}
            onClick={() => setStorage(storage)}
          >
            {storage}GB
          </div>
        ))}
      </div>
    </section>
  );
}

export default StorageSelect;
