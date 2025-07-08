export default function MainImage({images, index, setIndex}) {
    
  function handlePrevious() {
    if (index > 0) {
      setIndex(index - 1)
    } else {
      setIndex(images.length - 1)
    }
  }

  function handleNext() {
    if (index < images.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }
    return (
      <div>
        <button onClick={handlePrevious}>left</button>
        {images.length > 0 ? (
          <img src={images[index].urls.small} />
        ) : (
          <p>no images</p>
        )}
        <button onClick={handleNext}>right</button>
      </div>
    )
}