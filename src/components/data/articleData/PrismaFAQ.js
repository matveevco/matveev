const articlePrismaFAQ = [
  {
    componentName: "HeaderArticle",
    linkButton: "/",
  },
  {
    imageSRC: "/images/articleContent/pl-a1-faq/iA1.webp",
    imageWidth: "3072px",
    imageHeight: "1520px",
    componentName: "Image",
  },
  {
    title: "The problem of «Understandability» in the product",
    content: [
      "It is known that users begin to have questions about using the product, the answers to which they can only get from tech support. But what if there are more than a million users and the support team runs out of resources for a quick response?",
      "Different solutions can be provided, depending on the type and frequency of the problem. However, if we generalise, we can be helped by Onboarding, Tooltips, Badges, Popups, and Bottom Sheets — any interaction that doesn't complicate the experience and informs the user about a feature as clearly as possible.",
      "Some will say that instead of information complications, it is better to make everything clear and convenient at once, but «Understandability» cannot be tracked either qualitatively or quantitatively. There is always a group of people who either don't understand what and how it works or aren't interested in how it can work.",
      "For this purpose, products develop a separate section dedicated to frequently asked questions, where information about the product and its functions is placed, i.e., F.A.Q.",
    ],
    componentName: "Paragraph",
  },
  {
    title: "Workload on tech support",
    content:
      "Lensa has a fairly simple editor interface, in which it is hard to get lost because of the familiar behavioural patterns of similar apps. By exploring the app in real time, and trying out certain features, it should be easy to learn it.",
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/pl-a1-faq/iA2.webp",
    imageWidth: "3072px",
    imageHeight: "1520px",
    componentName: "Image",
  },
  {
    content: [
      "However, it isn't that simple. The problem came about because of two factors.",
      "Firstly, the workload on the support team exceeded the acceptable capabilities. Secondly, there were many questions that couldn't be answered by the usual interaction, so the implementation of F.A.Q. was an elegant solution.",
    ],
    contentList: {
      content:
        "The final goal was to reduce the number of routine support tickets by developing a section in the settings where the user could find answers to the most popular questions:",
      list: [
        "How to edit photos;",
        "How to manage subscriptions;",
        "Why there are no necessary functions;",
        "Why something doesn't work.",
      ],
    },
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/pl-a1-faq/iA3.webp",
    imageWidth: "1520px",
    imageHeight: "1520px",
    componentName: "Paragraph_and_Image",
  },
  {
    title: "Foundations for creating F.A.Q",
    contentList: {
      content:
        "All requirements were formed based on F.A.Q. research of other applications:",
      list: [
        "Some divided support into sections (chat, feedback and questions/answers);",
        "Others used articles (what's new and searchable guides by topic).",
      ],
    },
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/pl-a1-faq/iA4.webp",
    imageWidth: "3072px",
    imageHeight: "1520px",
    componentName: "Image",
  },
  {
    contentList: {
      content: "We wanted something that:",
      list: [
        "Accessible in a minimum number of steps;",
        "Presents simply and straightforwardly;",
        "Presents in large units with topics, a list of questions and answers;",
        "Contains emoji as an evaluation metric;",
        "Drives the user to the support team if an answer hasn't been found;",
        "Can provide ongoing support and maintain relevance independent of release.",
      ],
    },
    componentName: "Paragraph",
  },
  {
    title: "Discussion of implementation",
    content:
      "By the time of discussions, all the copywriting for the F.A.Q. was already finished, so the main discussions were about implementation: whether to upload all the assets to the server or to store them in a downloadable build, and how to visualise them: a one-page sheet with a search or an accordion for each question.",
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/pl-a1-faq/iA5.webp",
    imageWidth: "3072px",
    imageHeight: "1520px",
    componentName: "Image",
  },
  {
    content:
      "While the benefits of keeping everything in the build exceeded the disadvantages, the visualisation bounced from one to the other until it was decided to use paginated navigation through grouped tables on iOS and lists on Android, replicating the native settings from which the questions were to be accessed.",
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/pl-a1-faq/iA6.webp",
    imageWidth: "3072px",
    imageHeight: "1520px",
    componentName: "Image",
  },
  {
    title: "Technical implementation",
    content:
      "The section was full of features: 5 topics that clearly explain all the features of the application, 17 questions, more than 30 answers and images available in a couple of actions.",
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/pl-a1-faq/iA7.webp",
    imageWidth: "3072px",
    imageHeight: "1520px",
    componentName: "Image",
  },
  {
    content: [
      "During the technical implementation, F.A.Q. managed to grow almost 2 times and got an additional functionality called «Question Tree», which helps to navigate through F.A.Q. topics faster and is activated only when the user communicates with the support team.",
      "In the future, it is planned to expand the functionality with experiments to improve user experience and work with commercial offers.",
    ],
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/pl-a1-faq/iA8.webp",
    imageWidth: "3072px",
    imageHeight: "1520px",
    componentName: "Image",
  },
  {
    title: "F.A.Q usage analysis",
    content: [
      "After the release of F.A.Q. it became much easier for the technical support to handle Lensa requests. The figures clearly show the number of requests for «Subscription is 2x less, from ~330 to ~130 tickets per month» and «Face Detection is 4x less, from ~40 to ~10 tickets per month».",
      "It also became known that between March and May, ~5,000 unique users clicked on at least one of the F.A.Q. questions. (that's about 2% of all active new users), while the cumulative number of visits to all topics and questions already exceeds 3,000,000 requests.",
    ],
    contentList: {
      content: "The most frequently read topics are:",
      list: [
        "Subscription - 39%;",
        "Get to know Lensa - 39%;",
        "I have a suggestion - 32%;",
        "Some features aren't active - 23%;",
        "Video - 17%.",
      ],
    },
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/pl-a1-faq/iA9.svg",
    imageWidth: "1278px",
    imageHeight: "432px",
    componentName: "Image",
  },
  {
    contentList: {
      content: "Inside the Subscription topic, the most popular questions are:",
      list: [
        "Cancellation (58% of those who have interacted with subscription units);",
        "The Trial (51% of those who have interacted with subscription units).",
      ],
    },
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/pl-a1-faq/iA10.svg",
    imageWidth: "1278px",
    imageHeight: "432px",
    componentName: "Image",
  },
  {
    content: [
      "Notably, of those who explored the Cancellation unit, 8% cancelled their subscription during the day (~100 out of ~1200).",
      "In addition, the average ARR app score increased after release from 3.44 to 3.55, although the ANR app score itself is still 4.9.",
    ],
    componentName: "Paragraph",
  },
  {
    componentName: "Separator",
  },
  {
    componentName: "Figma",
    shareLink:
      "https://www.figma.com/design/2DqkI2r83wguUSkcBrAbKI/Prisma-Labs%3A-Integrating-the-Frequently-Asked-Questions-section?node-id=1-131&t=E2GAWlLdNcV2dkau-1",
    iframeLink:
      "https://embed.figma.com/design/2DqkI2r83wguUSkcBrAbKI/Prisma-Labs%3A-Integrating-the-Frequently-Asked-Questions-section?node-id=1-131&embed-host=share&theme=dark&page-selector=false&footer=false",
  },
  {
    componentName: "Separator",
  },
  {
    componentName: "Credits",
    card: [
      {
        cardTitle: "Aleksei Matveev",
        cardDescription: "Senior Product Designer",
        link: "https://www.linkedin.com/in/matveevco/",
        cardLogos: [
          {
            src: "/images/articleAvatars/iA1.webp",
            alt: "photo",
            width: "288px",
            height: "288px",
          },
        ],
        cardCaption: "LinkedIn",
      },
      {
        cardTitle: "Sofiia Malyshko",
        cardDescription: "Customer Support Specialist",
        link: "https://www.linkedin.com/in/sofiia-malyshko/",
        cardLogos: [
          {
            src: "/images/articleAvatars/iA2.webp",
            alt: "photo",
            width: "288px",
            height: "288px",
          },
        ],
        cardCaption: "LinkedIn",
      },
      {
        cardTitle: "Aliaksei Keda",
        cardDescription: "Chief Design Officer",
        link: "https://www.linkedin.com/in/alexkeda/",
        cardLogos: [
          {
            src: "/images/articleAvatars/iA3.webp",
            alt: "photo",
            width: "288px",
            height: "288px",
          },
        ],
        cardCaption: "LinkedIn",
      },
      {
        cardTitle: "Aliona Slobodianiuk",
        cardDescription: "Chief Product Officer",
        link: "https://www.linkedin.com/in/aliona-slobodianiuk-product-lead/",
        cardLogos: [
          {
            src: "/images/articleAvatars/iA4.webp",
            alt: "photo",
            width: "288px",
            height: "288px",
          },
        ],
        cardCaption: "LinkedIn",
      },
    ],
  },
];

export default articlePrismaFAQ;
