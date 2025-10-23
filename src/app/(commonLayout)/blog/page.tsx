import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

// Define a type for our blog post structure for better TypeScript support
type Post = {
  category: string;
  title: string;
  excerpt?: string; // Excerpt is now optional
  author: string;
  date: string;
  comments: number;
  imageUrl: string;
  featured?: boolean;
};

// Sample data for blog posts, updated to match the design (last 3 posts have no excerpt)
const blogPosts: Post[] = [
  {
    category: 'TIPS & ADVICE',
    title: "The Stalker's Guide to Highly Effective Guest Posting",
    excerpt: 'No cat nor ultrices ac some. Pellentesque id semper iaculis scelerisque etiam egestas interdum proin sit. Ornare venenatis, ullamcorper amet arcu ipsum ut morbi enim. Senectus quam egestas facilisi enim diam posuere ultricies interdum sed. Amet, risus eros cursus vitae, sit?',
    author: 'Md Shakil',
    date: 'Jan 20',
    comments: 0,
    imageUrl: '/Fake.jpg', // TBD: Replace with your actual image path
    featured: true,
  },
  {
    category: 'LIFESTYLE',
    title: 'How to Help a Struggling New Manager',
    excerpt: 'I hate it, because I put it on the moss and love it. Nisl rutrum morbi tempor, ligula velit justo, morbi lorem. Vestibulum at volutpat sit cursus. Aenean tincidunt integer...',
    author: 'Md Shakil',
    date: 'Jan 20',
    comments: 0,
    imageUrl: '/white-car.jpeg', // TBD: Replace with your actual image path
  },
  {
    category: 'LIFESTYLE',
    title: 'How to Help a Struggling New Manager',
    excerpt: 'I hate it, because I put it on the moss and love it. Nisl rutrum morbi tempor, ligula velit justo, morbi lorem. Vestibulum at volutpat sit cursus. Aenean tincidunt integer...',
    author: 'Md Shakil',
    date: 'Jan 20',
    comments: 0,
    imageUrl: '/fir-car.jpg', // TBD: Replace with your actual image path
  },
  {
    category: 'GUIDES',
    title: 'You Are Never "Done" Innovating',
    author: 'Md Shakil',
    date: 'Jan 20',
    comments: 0,
    imageUrl: '/gold-car.jpeg', // TBD: Replace with your actual image path
  },
  {
    category: 'GUIDES',
    title: 'How to Walk Around the Office',
    author: 'Md Shakil',
    date: 'Jan 20',
    comments: 0,
    imageUrl: '/fir-car.jpg', // TBD: Replace with your actual image path
  },
  {
    category: 'GUIDES',
    title: 'The Daring Gmail Strategy',
    author: 'Md Shakil',
    date: 'Jan 20',
    comments: 0,
    imageUrl: '/white-car.jpeg', // TBD: Replace with your actual image path
  },
];

const BlogPage: NextPage = () => {
  // Separate the posts based on their role in the layout
  const featuredPost = blogPosts.find(p => p.featured);
  const regularPosts = blogPosts.filter(p => !p.featured);
  const twoPostRow = regularPosts.slice(0, 2);
  const threePostRow = regularPosts.slice(2, 5);

  return (
    <div className="bg-white">
      <Head>
        <title>Blog Posts - My Car Website</title>
        <meta name="description" content="Latest blog posts from My Car Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-teal-600 text-white text-center py-20">
        <h1 className="text-5xl font-bold">Blog Posts</h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-200">
          For no time wise pregnant until for itself porta justo congue pure pretium ligula
        </p>
        <nav className="mt-6 text-sm">
          <a href="#" className="hover:underline">Home</a>
          <span className="mx-2">&gt;</span>
          <span>Blog</span>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Featured Post */}
        {featuredPost && (
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="rounded-lg overflow-hidden">
                <Image src={featuredPost.imageUrl} alt={featuredPost.title} width={800} height={600} className="w-full h-full object-cover"/>
            </div>
            <div>
              <p className="text-teal-500 font-semibold text-sm">{featuredPost.category}</p>
              <h2 className="text-3xl font-bold mt-2 text-gray-800">{featuredPost.title}</h2>
              <p className="text-gray-600 mt-4">{featuredPost.excerpt}</p>
              <div className="flex items-center mt-6">
                <Image src="/profile-blog.jpeg" alt={featuredPost.author} width={40} height={40} className="rounded-full w-10 h-10"/>
                <div className="ml-4 text-sm">
                  <p className="font-semibold text-gray-800">{featuredPost.author}</p>
                  <p className="text-gray-500">{featuredPost.date} &middot; {featuredPost.comments} comments</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Row of 2 Posts */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {twoPostRow.map((post) => (
            <div key={post.title} className="flex flex-col">
                <div className="rounded-lg overflow-hidden mb-4">
                    <Image src={post.imageUrl} alt={post.title} width={600} height={400} className="w-full h-[380px] object-cover"/>
                </div>
                <p className="text-teal-500 font-semibold text-sm">{post.category}</p>
                <h3 className="text-xl font-bold mt-2 text-gray-800">{post.title}</h3>
                {post.excerpt && <p className="text-gray-600 mt-2 flex-grow">{post.excerpt}</p>}
                <div className="flex items-center mt-4">
                  <Image src="/profile-blog.jpeg" alt={post.author} width={40} height={40} className="rounded-full w-10 h-10"/>
                  <div className="ml-4 text-sm">
                    <p className="font-semibold text-gray-800">{post.author}</p>
                    <p className="text-gray-500">{post.date} &middot; {post.comments} comments</p>
                  </div>
                </div>
            </div>
          ))}
        </div>

        {/* Row of 3 Posts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {threePostRow.map((post) => (
            <div key={post.title} className="flex flex-col">
                <div className="rounded-lg overflow-hidden mb-4">
                    <Image src={post.imageUrl} alt={post.title} width={600} height={400} className="w-full h-[300px] object-cover"/>
                </div>
                <p className="text-teal-500 font-semibold text-sm">{post.category}</p>
                <h3 className="text-xl font-bold mt-2 text-gray-800">{post.title}</h3>
                <div className="flex items-center mt-4">
                  <Image src="/profile-blog.jpeg" alt={post.author} width={40} height={40} className="rounded-full w-10 h-10"/>
                  <div className="ml-4 text-sm">
                    <p className="font-semibold text-gray-800">{post.author}</p>
                    <p className="text-gray-500">{post.date} &middot; {post.comments} comments</p>
                  </div>
                </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <nav className="flex justify-center items-center space-x-2 mt-16">
          <span className="bg-teal-500 text-white w-8 h-8 rounded-md flex items-center justify-center">1</span>
          <a href="#" className="text-gray-600 hover:bg-gray-200 w-8 h-8 rounded-md flex items-center justify-center">2</a>
          <a href="#" className="text-gray-600 hover:bg-gray-200 w-8 h-8 rounded-md flex items-center justify-center">3</a>
          <span className="text-gray-600">...</span>
          <a href="#" className="text-gray-600 hover:bg-gray-200 w-8 h-8 rounded-md flex items-center justify-center">8</a>
          <a href="#" className="text-gray-600 hover:bg-gray-200 w-8 h-8 rounded-md flex items-center justify-center">&gt;</a>
        </nav>
      </main>
    </div>
  );
};

export default BlogPage;