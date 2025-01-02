import { client } from '@/sanity/lib/client';
// import { SimpleBlogCard } from './lib/interface';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
// import { urlFor } from './lib/sanity';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { urlFor } from '../lib/sanity';
import { SimpleBlogCard } from '../lib/interface';

async function getData() {
  const query = `*[_type=='blog']{
    title,
    smallDescription,
    "currentSlug": slug.current,
    alt,
    "titleImage": image.asset->url,
    _id,
    _createdAt,
    _updatedAt
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: SimpleBlogCard[] = await getData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
      {data.map((blog, idx) => {
        const imageUrl =
          typeof blog.titleImage === 'string'
            ? urlFor(blog.titleImage)?.url() || '/default-image.png'
            : '/default-image.png';

        return (
          <Card
            key={blog._id || idx}
            className="p-2 max-w-[350px] mx-auto transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            {imageUrl && (
              <>
                <Image
                  src={imageUrl}
                  alt={blog.alt || 'Blog Image'}
                  width={350}
                  height={200}
                  className="rounded-t-lg object-cover"
                  priority
                />
                <CardContent>
                  <h2 className="text-md line-clamp-2 font-bold mt-2 text-[#2A3335]">
                    {blog.title || 'Untitled'}
                  </h2>
                  <p className="line-clamp-3 mt-2 text-sm text-[#4C585B]">
                    {blog.smallDescription || 'No description available.'}
                  </p>
                  <Button asChild className="w-full mt-5 bg-[#9d4dba] hover:bg-[#5e376c]">
                    {/* Corrected the Link to use template literal */}
                    <Link href={`/blog/${blog.currentSlug}`}>Read more</Link>
                  </Button>
                </CardContent>
              </>
            )}
          </Card>
        );
      })}
    </div>
  );
}
