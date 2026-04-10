
import animatesplash from '../assets/animatesplash.webm';

export default function Splash({ onEnter }) {
  return (
    <div onClick={onEnter} className="fixed inset-0 flex items-center justify-center z-50 ">
      <video 
        src={animatesplash}
        autoPlay
        muted
        playsInline
        className="max-w-xl"
      />
    </div>
  );
}