export default function Thumnails({images, handleChangeImage}) {
    return (
      <div className="flex overflow-scroll flex-row h-[96px] w-1/2">
        {images.map((image, index) => (
          <img
            src={image.urls.small}
            alt={image.alt_description}
            key={image.id}
            onClick={() => {handleChangeImage(index)}}
          />
        ))}
      </div>
    )
}