import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react"; // Import the PortableText component

async function getData(slug: string) {
    const query = `*[_type == "blog" && slug.current == $slug]{
        "currentslug": slug.current,
        title,
        content,
        image
    }[0]`;

    const data = await client.fetch(query, { slug });
    return data;
}

export default async function blogArtical({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = await getData(slug);

    return (
        <div className="mt-10">
            <h1>
                <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase font-serif sm:text-4xl text-[#9A7E6F]">
                    Ujk blogs
                </span>
                <span className="mt-4 block text-3xl text-center leading-8 font-bold font-serif text-[#1E3E62]">
                    {data.title}
                </span>
            </h1>
            <Image
                src={urlFor(data.image).url()}
                alt="titleimage"
                width={700}
                height={700}
                className="rounded-lg mt-8 border"
                priority
            />
            <div className="mt-16 prose prose-blue prose-xl dark:prose-invert  prose-headings:underline prose-li:marker:text-[#4B5945]
            prose-a:text-[#5f7158]  prose-headings:text-[#638C6D] ">
                {/* Render the Portable Text content */}
                <PortableText   value={data.content}    />
            </div>
        </div>
    );
}