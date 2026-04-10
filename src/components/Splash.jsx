export default function Splash({ onEnter }) {
  return (
    <div className="fixed inset-0 bg-[#EEEEEE] flex flex-col items-center justify-center z-50">
      <h1 className="text-6xl font-garamond mb-8">henry li</h1>
      <button 
        onClick={onEnter}
        className="border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
      >
        enter
      </button>
    </div>
  );
}