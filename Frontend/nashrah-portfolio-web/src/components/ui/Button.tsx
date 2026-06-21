type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <button
      className="
        px-4
        py-2
        rounded-lg
        bg-blue-600
        text-white
        hover:bg-blue-700
        transition
      "
    >
      {text}
    </button>
  );
}