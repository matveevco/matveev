const articlePrismaOnboarding = [
  {
    componentName: "HeaderArticle",
    linkButton: "/some-link",
  },
  {
    componentName: "Image",
    imageSRC: "/images/articles/prisma-faq/iA1.png",
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
    imageSRC: "/images/articles/prisma-faq/iA8.png",
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
            src: "images/avatars/ava-am.png",
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
