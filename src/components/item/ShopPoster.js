function ShopPoster({ url, alt, src }) {
  return (
    <picture>
      <source
        srcSet={url ? url : 'https://picsum.photos/300/300'}
        media="(min-width: 300px)"
      />
      <img className="item-poster" src={src} alt={alt} />
    </picture>
  );
}

export default ShopPoster;
