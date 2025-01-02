export const blog = {
    name: 'blog',
    type: 'document',
    title: 'blog',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title of Blog Article',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug of Your Article',
        options: {
          source: 'title',
        },
      },
      {
        title: 'Image',
        name: 'image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            title: 'alt',
            type: 'string',
          },
        ],
      },
      {
        name: 'smallDescription',
        type: 'text',
        title: 'Small Description',
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
          {
            type: 'block',
          },
        ],
      },
    ],
  };