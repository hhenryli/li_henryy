import { useParams } from "react-router-dom";
import { plinkyPosts } from "./PlinkyPosts";
import Nav from "../../Nav";

export default function PlinkyPost() {
  const { id } = useParams();
  const post = plinkyPosts[id];

  if (!post) return <div>Not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Nav />
      <h1 className="text-4xl font-garamond">#{id} — {post.title}</h1>
      <div className="mt-2 text-neutral-400">{post.date}</div>

      <div className="mt-10 space-y-10">
        {post.sections.map((s, i) => (
          <div key={i}>
            {s.h && <h2 className="text-xl font-semibold mt-2">{s.h}</h2>}
            {s.p && <p className="mt-3 text-neutral-700 font-garamond text-lg leading-7">{s.p}</p>}
            {s.img && (
              <figure className="mt-4">
                <img className="rounded-xl border" src={s.img} alt={s.cap || ""} />
                {s.cap && <figcaption className="mt-2 text-sm text-neutral-500">{s.cap}</figcaption>}
              </figure>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}