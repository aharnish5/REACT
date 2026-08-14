function Card({ username="_", designation="New Joinee", imgSrc="https://i.pinimg.com/236x/13/74/20/137420f5b9c39bc911e472f5d20f053e.jpg?nii=t"}) {
  return (
    <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 border border-gray-700 rounded-lg bg-gray-900">
      <img
        className="mx-auto block h-24 w-24 rounded-full sm:mx-0 sm:shrink-0"
        src={imgSrc}
        alt=""
      />

      <div className="space-y-2 text-center sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg font-semibold text-white">{username}</p>
          <p className="font-medium text-gray-500">{designation}</p>
        </div>

        <button className="rounded-full border border-purple-200 px-4 py-1 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700">
          Message
        </button>
      </div>
    </div>
  );
}

export default Card;