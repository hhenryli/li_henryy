import Nav from "../../Nav";
import { rpgPosts } from "./rpgPosts";
import DevlogRow from "../DevlogRow.jsx";

export default function RPGDevlog() {
  const posts = Object.entries(rpgPosts) // [ [id, post], ... ]
    .map(([id, post]) => ({ id, ...post }))
    .sort((a, b) => Number(b.id) - Number(a.id)); // newest first

  return (
    <div>
      <Nav />
      <div className="max-w-4xl mx-auto px-6 py-20 h-screen">
        <h1 className="font-garamond text-3xl mb-6">MouseStopper Devlog</h1>

        <div className="mb-2 text-neutral-400 tracking-widest text-m">2025</div>

        {posts.map((post) => (
          <DevlogRow
            key={post.id}
            index={`#${post.id}`}
            title={post.title}
            date={post.date}
            to={`/devlog/rpg/${post.id}`}
          />
        ))}
      </div>
    </div>
  );
}