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
       bg-[#722548]
       hover:bg-[#8A3158]
        text-white
        transition
      "
    >
      {text}
    </button>
  );
}