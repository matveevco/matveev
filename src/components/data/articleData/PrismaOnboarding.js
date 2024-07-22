const articlePrismaOnboarding = [
  {
    componentName: "HeaderArticle",
    linkButton: "/",
  },
  {
    componentName: "Image",
    imageSRC: "/images/articles/prisma-faq/iA1.webp",
    imageWidth: "3072px",
    imageHeight: "1520px",
  },
  {
    componentName: "Paragraph",
    title: "Title",
    content: ["Description.", "Description."],
    contentList: {
      content: "Description to list:",
      list: ["list;", "list;", "list;", "list;", "list."],
    },
  },
  {
    componentName: "Paragraph_and_Image",
    imageSRC: "/images/articles/prisma-faq/iA8.webp",
    imageWidth: "1520px",
    imageHeight: "1520px",
    title: "Title",
    content: ["Description.", "Description."],
    contentList: {
      content: "Description to list:",
      list: ["list;", "list;", "list;", "list;", "list."],
    },
  },
  {
    componentName: "Separator",
  },
  {
    componentName: "Figma",
    shareLink: "link",
    iframeLink: "embedLink",
  },
  {
    componentName: "Separator",
  },
  {
    componentName: "Credits",
    card: [
      {
        cardLogos: [
          {
            alt: "photo",
            src: "images/avatars/ava-am.webp",
            width: "240px",
            height: "240px",
          },
        ],
        link: "https://www.linkedin.com/in/matveevco/",
        cardTitle: "Aleksei Matveev",
        cardDescription: "Senior Product Designer",
        cardCaption: "LinkedIn",
      },
    ],
  },
];

export default articlePrismaOnboarding;
