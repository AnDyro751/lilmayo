export const EmptyComponent = ({ text = 'We can\'t find anything, try searching again.' }) => (
  <div className="text-center w-6/12 mx-auto">
    <img
      src="https://www.hyperui.dev/photos/confused-travolta.gif"
      alt="John Travolta confused"
      className="object-cover w-full h-72 rounded-lg"
    />

    <p className="mt-6 text-gray-500">{text}</p>
  </div>
)
