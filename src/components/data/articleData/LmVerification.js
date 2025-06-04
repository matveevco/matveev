const articleLmVerification = [
  {
    componentName: "HeaderArticle",
    linkButton: "/",
    content: [
      "As the base of performers (actors and models) expanded, customers (casting directors and agents) encountered a lack of profile moderation. Their castings were often visited by people who made up appearances and modified photos.",
      "A lot of complaints and suggestions inspired the team to start working on a portfolio verification system, the development of which has taken two years, moving from one functionality to another, but let's talk about everything in order.",
    ],
  },
  {
    imageSRC: "/images/articleContent/lm-a4-verification/iA1.webp",
    imageWidth: "2556px",
    imageHeight: "1326px",
    imageMargin: "oi-bottom",
    componentName: "Image",
  },
  {
    title: "Key verification criteria",
    content:
      "Verification is some kind of check, confirmation or method of proof by comparing some evidence with others to see if it matches the truth. In our case, we assumed verification of basic criteria - photos, body parameters and appearance.",
    componentName: "Paragraph",
  },
  {
    title: "Basic questions before implementation",
    content:
      "The answers to a few key questions subsequently formulated not only a common understanding of the challenge but also the goals the product had to achieve. These included aggregating talent in the media space, finding them quickly with filtering and access, security for both parties, partner programmes and more. While the team was working on this challenge, the massive opportunities to change the business model of the product were already visible.",
    contentList: {
      content: "We had to answer a few questions for ourselves:",
      list: [
        "How will this help customers and performers?",
        "What will the customer journey be like?",
        "Who will moderate it?",
        "What additional costs would be required?",
        "How will the product profit from this?",
      ],
    },
    componentName: "Paragraph",
  },
  {
    title: "Launch of the first version of verification",
    content: [
      "First of all, we always thought about our clients, and how useful the implemented functionality would be for them, so we were sure that verification would open up opportunities for customers that they didn't have before. From appearance-based searches to reducing casting costs.",
      "It was also important to us how convenient the interaction would be on both sides. However, in favour of speed, the first version of verification was launched without any preliminary tests. For this reason, the performers' user flow was overgrown with a lot of trivial functions, and its steps included not only ordering a service and paying for it, but also searching for a photographer, communicating with a manager, and setting up the display.",
      "The product was supposed to make money from this, but a simple check of photos and parameters by moderators wouldn't have been able to recoup all the costs of this task. Among other things, we wouldn't have been able to give guarantees to customers that they wouldn't be visited by a scammer pretending to be someone else.",
      "That's why we decided to partner with photo studios and do turnkey verification. Thanks to this, we couldn't only control all the processes but also sell them at a more profitable cost. Thus, the client got the professional work of the photographer and manager when ordering the service.",
    ],
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/lm-a4-verification/iA2.webp",
    imageWidth: "2556px",
    imageHeight: "1326px",
    imageMargin: "oi-top",
    componentName: "Image",
  },
  {
    content: [
      "While the photographer only had to take photos and measurements, the manager had to check the measurements according to the guidelines with the details from the profile.",
      "The problem with this version was the high costs, which included paying for the promotion of the service, the studio, the time of the photographer, the manager and the whole team behind the development. To achieve zero or plus profitability, it was necessary to maintain sales, not dropping them below 15 applications per week.",
    ],
    componentName: "Paragraph",
  },
  {
    componentName: "Image",
    imageSRC: "/images/articleContent/lm-a4-verification/iA3.svg",
    imageWidth: "1278px",
    imageHeight: "432px",
    imageMargin: "oi-around",
  },
  {
    title: "Interface complexity and time costs",
    content:
      "The first version of the verification process was released in the summer of 2018. It included customisation of the performer profile, a feed of studios, photographer profiles, an internal messenger and various edge cases. The client's journey started with the ribbon, where he/she learnt about the opportunities that would open up to him/her after verification.",
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/lm-a4-verification/iA4.webp",
    imageWidth: "2556px",
    imageHeight: "1326px",
    imageMargin: "oi-top",
    componentName: "Image",
  },
  {
    content:
      "Next, he/she had the opportunity to select a studio and a photographer based on the available portfolios. After paying for the order, he/she was directed to a separate section where the status of the service was tracked.",
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/lm-a4-verification/iA5.webp",
    imageWidth: "2556px",
    imageHeight: "1326px",
    imageMargin: "oi-top",
    componentName: "Image",
  },
  {
    content: [
      "Inside the order, there was a messenger, which was accessed not only by the client but also by the photographer. It was used to coordinate the dates of photo shoots, review the quality of images and solve possible disputes with the support of a manager.",
      "The last step for the client was to confirm the publication of the photos in a separate section of his profile, which were previously uploaded by the photographer.",
    ],
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/lm-a4-verification/iA6.webp",
    imageWidth: "2556px",
    imageHeight: "1326px",
    imageMargin: "oi-top",
    componentName: "Image",
  },
  {
    content:
      "The whole process took up to 3-5 days. The service was attractive, but the time spent was a serious disadvantage, though not the only one. Clients were lost in the interface because of many functions that had no impact on the verification of profiles.",
    componentName: "Paragraph",
  },
  {
    title: "New guidelines and recommendations",
    content: [
      "We weren't going to stop there, which is why after the first release we immediately got busy fixing major bugs. So, in the winter of 2019, the verification update was released.",
      "In the six months that we had, we made a decision to cut off partnerships with studios and outsourced photographers due to their disinterest in the result. So, our team was expanded with an in-house photographer who has his studio. In addition to updating the photographers' work guidelines and verifying managers, client recommendations were also added.",
    ],
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/lm-a4-verification/iA7.webp",
    imageWidth: "2556px",
    imageHeight: "1326px",
    imageMargin: "oi-top",
    componentName: "Image",
  },
  {
    content:
      "To find barriers and problems in the interface and scenarios, we built CJMs. Thanks to them, ideas to simplify the functionality went beyond discussions and into the new release.",
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/lm-a4-verification/iA8.webp",
    imageWidth: "2556px",
    imageHeight: "1326px",
    imageMargin: "oi-top",
    componentName: "Image",
  },
  {
    content:
      "However, due to the seasonality of casting, verification sales began to drop, the service started to make losses, and this pushed the team to think further.",
    componentName: "Paragraph",
  },
  {
    title: "Growth of organic traffic and engagement",
    content: [
      "The summer of 2019 defined a new stage of service development. This time we spent time on usability tests, in-depth interviews, surveys and gathering feedback from technical support. In addition to understanding what customers expected from us in the new version, we decided to change the development vector we were moving on earlier.",
      "In the second version, we decided against outsourcing photographers, in the third version we decided against an in-house team. Early hypotheses on how we could build customer loyalty through in-house verification centres and photographers didn't meet financial expectations.",
    ],
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/lm-a4-verification/iA9.webp",
    imageWidth: "2556px",
    imageHeight: "1326px",
    imageMargin: "oi-top",
    componentName: "Image",
  },
  {
    content: [
      "A year after the first release, customers got comfortable with the minor difference between profile details and reality, which led us to hypothesise self-made shoots and personal portfolios.",
      "With the new verification format, we still had a manager, but already as a technical support, who checked self-made photos for correctness of elementary recommendations (Quality of photo, Number of photos, Posing).",
      "In addition to publishing photos in the professionals' catalogue, we decided to offer a stand-alone personal portfolio site without branding, linked to the product only by a subdomain and a mini footer.",
    ],
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/lm-a4-verification/iA10.webp",
    imageWidth: "2556px",
    imageHeight: "1326px",
    imageMargin: "oi-top",
    componentName: "Image",
  },
  {
    content:
      "The demand for this service exceeded the team's expectations, with more than 20 requests per week. The new concept, in addition to simplifying the interaction to just paying for the service, also allowed clients to publish a link to the portfolio on their social networks and agencies. This helped us increase our monthly organic traffic and engagement by 2.7x to ~8000 visits and 1.6x to ~15000 unique users respectively.",
    componentName: "Paragraph",
  },
  {
    componentName: "Image",
    imageSRC: "/images/articleContent/lm-a4-verification/iA11.svg",
    imageWidth: "1278px",
    imageHeight: "432px",
    imageMargin: "oi-around",
  },
  {
    title: "Enhance user experience",
    content: [
      "The latest release, which took place in late autumn 2019, helped offload tech support at the necessary photo verification stage. Since then, recommendations have been given directly when filling out the form for the profession. This feature was only possible because of the updated profiles.",
      "Profiles, recommendations, and personal portfolio website layouts have also been updated.",
    ],
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/lm-a4-verification/iA12.webp",
    imageWidth: "2556px",
    imageHeight: "1326px",
    imageMargin: "oi-top",
    componentName: "Image",
  },
  {
    title: "Communication tools",
    content:
      "As a result, we had functioning versions of portfolios for performers to share with agents and casting directors.",
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/lm-a4-verification/iA13.webp",
    imageWidth: "2556px",
    imageHeight: "1326px",
    imageMargin: "oi-top",
    componentName: "Image",
  },
  {
    content:
      "We also had an established process for registering a professional as a verification specialist to communicate with performers.",
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/lm-a4-verification/iA14.webp",
    imageWidth: "2556px",
    imageHeight: "1326px",
    imageMargin: "oi-top",
    componentName: "Image",
  },
  {
    componentName: "Credits",
    card: [
      {
        cardLogos: [
          {
            alt: "photo",
            src: "/images/articleAvatars/iA1.webp",
            width: "288px",
            height: "288px",
          },
        ],
        link: "https://www.linkedin.com/in/aeeeae/",
        cardTitle: "Aleksei Matveev",
        cardDescription: "Senior Product Designer",
        cardCaption: "LinkedIn",
      },
      {
        cardLogos: [
          {
            alt: "photo",
            src: "/images/articleAvatars/iA9.webp",
            width: "288px",
            height: "288px",
          },
        ],
        link: "https://www.linkedin.com/in/olia-chupakhina/",
        cardTitle: "Olia Chupakhina",
        cardDescription: "Product Designer",
        cardCaption: "LinkedIn",
      },
      {
        cardLogos: [
          {
            alt: "photo",
            src: "/images/articleAvatars/iA10.webp",
            width: "288px",
            height: "288px",
          },
        ],
        link: "https://www.linkedin.com/in/tshestakova/",
        cardTitle: "Tatiana Shestakova",
        cardDescription: "Marketing Manager",
        cardCaption: "LinkedIn",
      },
      {
        cardLogos: [
          {
            alt: "photo",
            src: "/images/articleAvatars/iA11.webp",
            width: "288px",
            height: "288px",
          },
        ],
        link: "https://www.linkedin.com/in/dima-melentev-7557635a/",
        cardTitle: "Dima Melentev",
        cardDescription: "UX Researcher",
        cardCaption: "LinkedIn",
      },
      {
        cardLogos: [
          {
            alt: "photo",
            src: "/images/articleAvatars/iA13.webp",
            width: "288px",
            height: "288px",
          },
        ],
        link: "https://www.linkedin.com/in/artemtaranov/",
        cardTitle: "Artem Taranov",
        cardDescription: "Head of Product",
        cardCaption: "LinkedIn",
      },
      {
        cardLogos: [
          {
            alt: "photo",
            src: "/images/articleAvatars/iA12.webp",
            width: "288px",
            height: "288px",
          },
        ],
        cardTitle: "Dmitry Kuznetsov",
        cardDescription: "Project Manager",
        cardCaption: "LinkedIn",
      },
    ],
  },
  {
    componentName: "Figma",
    iframeLink:
      "https://embed.figma.com/design/2bIigARL5oJ2qzr9QuWkON/Linkmuse%3A-Implementing-portfolio-and-profile-verification?node-id=1-2&embed-host=share&theme=dark&page-selector=false&footer=false",
  },
];

export default articleLmVerification;
