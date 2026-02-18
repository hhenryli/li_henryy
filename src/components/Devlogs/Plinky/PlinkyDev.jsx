import Nav from "../../Nav";
import { plinkyPosts } from "./PlinkyPosts";
import DevlogRow from "../DevlogRow";

export default function PlinkyDevlog() {
  const posts = Object.entries(plinkyPosts) // [ [id, post], ... ]
    .map(([id, post]) => ({ id, ...post }))
    .sort((a, b) => Number(b.id) - Number(a.id)); // newest first

  return (
    <div>
      <Nav />
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="font-garamond text-3xl mb-6">PlinkyPlights Devlog</h1>

        <div className="mb-2 text-neutral-400 tracking-widest text-m">2024</div>

          {posts.map((post) => (
            <DevlogRow
              key={post.id}
              index={`#${post.id}`}
              title={post.title}
              date={post.date}
              to={`/devlog/plinky/${post.id}`}
            />
          ))}
      </div>
    </div>
  );
}

