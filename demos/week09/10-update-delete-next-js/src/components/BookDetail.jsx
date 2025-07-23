import Image from "next/image";

export function BookDetail({ book }) {
  console.log(book)
    return (
      <div className="min-h-1/2 px-40 flex justify-center items-center p-10">
          <Image
                    className={"p-4 hover:scale-110 w-[300px] h-auto"}
                    src={book.img_url}
                    width={200}
                    height={300}
                    alt={book.title}
                  />
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-bold">{book.title}</h1>
            <p className="text-gray-700">
              {book.name}
            </p>
            <p className="text-gray-800">{book.description}</p>
            <p>{book.genres.length > 1 ? book.genres.join(', ') : 'no genres'}</p>
          </div>
  
          <div className="flex flex-col items-end">
            <h2 className="text-lg font-semibold">Rating</h2>
            <p className="text-2xl font-bold">3.1</p>
          </div>
        </div>
    );
  }