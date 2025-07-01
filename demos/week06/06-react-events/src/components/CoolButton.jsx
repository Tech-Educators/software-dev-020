export default function CoolButton() {
  return (
    <button
      onClick={() => {
        console.log("This is the cool button");
      }}
    >
      This button is so cool
    </button>
  );
}
