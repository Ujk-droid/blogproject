import { client } from "@/app/lib/sanity";
import Image from "next/image";

async function getData(slug: string) {
    const query = `*[_type == "blog" && slug.current == $slug]{
        "currentslug": slug.current,
        title,
        content,
        image
    }[0]`;

    // Fetch data from Sanity using the slug
    const data = await client.fetch(query, { slug });
    return data;
}

export default async function blogArtical({ params }: { params: { slug: string } }) {
    const { slug } = params; // Extract slug from params
    console.log("Slug Received:", slug); // Log the slug for debugging

    // Fetch data based on the slug
    const data = await getData(slug);

    // Handle case where no data is found
    if (!data) {
        return <h1>No Data Found for {slug}</h1>;
    }

    // Render the blog content
    return (
        <div>
            <h1>{data.title}</h1>
            {data.image?.url && <Image src={data.image.url} alt={data.title} width={300} height={300} />}
            <p>{data.content}</p>
        </div>
    );
}
