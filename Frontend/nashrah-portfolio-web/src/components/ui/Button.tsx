type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <button
      style={{
        backgroundColor: "var(--primary)",
        color: "var(--text)",
      }}
      className="
        px-4
        py-2
        rounded-lg
        transition-all
        duration-300
        hover:opacity-90
      "
    >
      {text}
    </button>
  );
}