function ShopPoster({ url, alt, src }) {
  return (
    <section>
      <img className="item-poster" src={src || url} alt={alt} />
      {/* <source
        srcSet={url ? url : 'https://picsum.photos/300/300'}
        media="(min-width: 450px)"
      />
      <img className="item-poster" src={src} alt={alt} /> */}
    </section>
  );
}

export default ShopPoster;
