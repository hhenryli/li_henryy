import { Link } from "react-router-dom";

export default function DevlogRow({ index, title, date, to }) {
  return (
    <>
      <div className="grid grid-cols-[20px_1fr_80px] gap-6 items-baseline">
        {/* Index */}
        <div className="text-neutral-500 text-sm">{index}</div>
        {/* Title */}
        <Link
          to={to}
          className="hover:underline underline-offset-4 font-garamond"
        >
          {title}
        </Link>

        {/* Date */}
        <div className="text-neutral-400 text-right tracking-widest">
          {date}
        </div>
      </div>

      <hr className="border-dashed border-neutral-300 mt-3 mb-2" />
    </>
  );
}