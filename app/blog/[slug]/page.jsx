
import { react } from 'next/navigation';

const blogPosts = {
  'introduction-to-health-tracking': {
    title: 'Introduction to Health Tracking',
    content: 'Tracking your health regularly helps prevent illness and ensures better outcomes',
  },
  'why-keep-medical-records': {
    title: 'Why Keep Medical Records?',
    content: 'Medical records provide history that can help doctors make better decisions',
  },
};

export default function BlogPost({ params }) {
  const { slug } = params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-700">{post.title}</h1>
      <p className="mt-4 text-base leading-relaxed text-gray-700">{post.content}</p>
    </main>
  );
}

