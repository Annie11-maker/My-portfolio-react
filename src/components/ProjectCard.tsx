export default function ProjectCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <div className="border p-5 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <a href={link} className="text-blue-500 mt-2 inline-block">View Project →</a>
    </div>
  );
}
