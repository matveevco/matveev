const articlePrismaOnboarding = [
  {
    componentName: "HeaderArticle",
    linkButton: "/",
    content: [
      "After installing the app, the user goes through a certain journey to payment. There is a good chance that the user solving his/her task and finding value in the app will return periodically and eventually make a purchase. But how to explain the value of the product if it isn't visible or hardly noticeable at the first interaction? Through activation, or more specifically onboarding.",
    ],
  },
  {
    imageSRC: "/images/articleContent/pl-a2-onboarding/iA1.svg",
    imageWidth: "1278px",
    imageHeight: "432px",
    imageMargin: "oi-around",
    componentName: "Image",
  },
  {
    content: [
      "The success of onboarding (aka First-Time User Experience, FTUE) is determined by the percentage of users who figure out how to use the app in the first session (the audience that interacts with onboarding is 100%).",
      "Therefore, in order to tell more about the app's functionality and motivate users to use it, we decided to experiment with the new onboarding in Prisma, in which we chose to display not only styles but also additional features of the app - frames, background replacement, segmentation, with a special focus on the presence of unique portrait styles.",
    ],
    componentName: "Paragraph",
  },
  {
    title: "User motivation hypothesis",
    content: [
      "From the current data, we knew that Prisma onboarding was most often interacted with in the second and third steps by 40.5% and 25.9% of users, respectively.",
      "We planned to continue to track CR (Conversion Rate) in the progression up to the trial subscription. We were also interested in the impact of the updated version on interaction with the app's functionality, such as whether photo saves increase using the tools.",
    ],
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/pl-a2-onboarding/iA2.webp",
    imageWidth: "1260px",
    imageHeight: "1178px",
    imageMargin: "oi-full-short",
    componentName: "Image",
  },
  {
    content: [
      "So, we put together an interactive prototype with a visualisation of the features. Taking into account that the application's functionality has expanded, it was very important for us to explain it all in a simple and understandable language.",
      "Our main hypothesis was that the user would be more interested in passing through the steps, loyal to the purchase decision, and motivated to use the photo adjustments for better results if he or she could easily try the app's tools right at the onboarding steps.",
    ],
    contentList: {
      content: "The hypothesis was originally approached because of:",
      list: [
        "A successful experiment with onboarding in Lensa;",
        "Good performance in using the new portrait styles (And we wanted to tell everyone who hadn't tried them yet);",
        "Concerns about the dramatic effect of traffic acquisition.",
      ],
    },
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/pl-a2-onboarding/iA3.webp",
    imageWidth: "2556px",
    imageHeight: "1326px",
    imageMargin: "oi-full-bottom",
    componentName: "Image",
  },
  {
    title: "Interaction experience",
    content: [
      "For a more appropriate view of the changes in the photo, we chose cards that replace each other with active actions while going through the scenario, so that it wouldn't be static and boring. Although the onboarding was rebuilt from scratch, it still replicated the classic interaction experience, so negative consequences from the update, like getting lost and misunderstanding, could well be excluded.",
      "In addition to telling the story of the tools visually, copywriting was also optimised and descriptions were added to explain the features of the product to new users, but in limited quantities. As we knew from previous experiments, almost no one from our audience read long texts, and even if they did, they didn't remember the information we wanted to deliver.",
    ],
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/pl-a2-onboarding/iA4.webp",
    imageWidth: "2556px",
    imageHeight: "1326px",
    imageMargin: "oi-full-bottom",
    componentName: "Image",
  },
  {
    title: "Reducing CR in the trial subscription",
    content: [
      "We ran the experiment on 50% of the audience in the form of an A/B test that ran for 3 weeks and affected around 600k users. The results didn't match expectations, but to understand what exactly went wrong, we should look at the numbers.",
      "We noticed a strong increase in onboarding skipping from the second and third steps by 1.39x from 56% to 78% and 1.09x from 83% to 91% respectively. This was likely affected by informing users of the steps with dots at the bottom of the screen. Many customers don't want to go into details and instead have a desire to start using the app as soon as possible, so this is normal behaviour.",
      "This skipping of steps also caused a 2.62x decrease in CR for trial subscriptions, from 13.1% to 5%, because users couldn't assess whether they should sign up for an app they weren't even familiar with yet.",
    ],
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/pl-a2-onboarding/iA5.svg",
    imageWidth: "1278px",
    imageHeight: "432px",
    imageMargin: "oi-around",
    componentName: "Image",
  },
  {
    content:
      "But there were also good results associated with an audience that was onboarded completely. For example, users who had seen how features were applied in the editor were more likely to save photos using the tools and subsequently had a positive impact on RR (Retention Rate).",
    contentList: {
      content:
        "When comparing the general data and the data from this group, an increase in the following metrics can be seen:",
      list: [
        "Applying a style to a photo by 1.04x from 79% to 82.4%;",
        "Using portrait styles 1.31x from 19% to 25%;",
        "Using frames 1.2x from 9% to 11%;",
        "Using segmentation 1.1x from 51% to 57%;",
        "Changing backgrounds 1.06x from 47% to 50%.",
      ],
    },
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/pl-a2-onboarding/iA6.svg",
    imageWidth: "1278px",
    imageHeight: "432px",
    imageMargin: "oi-around",
    componentName: "Image",
  },
  {
    title: "Integrating internal onboarding",
    content: [
      "The experiment was a failure because we were losing a large percentage of customers who skipped the tutorial. This update was negatively impacting both business and product metrics, but we couldn't get customers to stop, or remove the skip button, because the main goal of product design at Prisma Labs was product friendliness and responsiveness.",
      "So, we decided to launch a second experiment that had been in the backlog for a long time and only needed minor modifications. It hadn't been accepted for a long time because of the huge backlog for testing, but at that moment everything worked out perfectly.",
    ],
    contentList: {
      content:
        "The experiment consisted of removing external onboarding, which is missed by most users, and integrating internal onboarding, which immersed the customer in the application functionality by the hands of the customer. It is human nature to memorise things in practice, so the hypothesis consisted of several stages:",
      list: [
        "The user enters the app without an enforced tutorial or subscription purchase;",
        "The user selects a photo they want to edit;",
        "The user enters the editor where we help him/her to enhance the photo with different features;",
        "The user memorises what and where is located by clicking on tools and applying them;",
        "The user saves the result, shares it with friends and starts the cycle all over again, but without our hints, because they have already figured it all out;",
        "Experiments with photos cause positive emotions in the user and when he/she reaches certain limits in the application he/she subscribes for a trial period or buys a full subscription.",
      ],
    },
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/pl-a2-onboarding/iA7.webp",
    imageWidth: "2556px",
    imageHeight: "1326px",
    imageMargin: "oi-bottom",
    componentName: "Image",
  },
  {
    content:
      "The photo instruction flow was redesigned for the current version of the product and launched for 4-week A/B tests on 50% of the audience. We also decided to track the same metrics, as they were predicted to grow significantly.",
    componentName: "Paragraph",
  },
  {
    title: "Successful onboarding without skipping steps",
    content:
      "In this version, onboarding didn't include skipping a step or trial subscription, so there was no point in tracking these metrics. But the trial subscription increased 1.35x from 13.1% to 17.8%, and the bounce rate after the trial decreased 1.29x from 42% to 32.5%.",
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/pl-a2-onboarding/iA8.svg",
    imageWidth: "1278px",
    imageHeight: "432px",
    imageMargin: "oi-around",
    componentName: "Image",
  },
  {
    contentList: {
      content: "Conversion has increased in both subscriptions and tool usage:",
      list: [
        "Applying a style to a photo by 1.12x from 79% to 89.1%;",
        "Using portrait styles 2.21x from 19% to 42%;",
        "Using frames 1.9x from 9% to 17%;",
        "Using segmentation 1.35x from 51% to 69.2%;",
        "Changing backgrounds 1.31x from 47% to 62%.",
      ],
    },
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/pl-a2-onboarding/iA9.svg",
    imageWidth: "1278px",
    imageHeight: "432px",
    imageMargin: "oi-around",
    componentName: "Image",
  },
  {
    content:
      "As a result, we succeeded not only in increasing our performance but also in proving that it is possible to approach the problem from different directions. We will be able to find out how this solution will show itself when the functionality of the product is increased only in the future.",
    componentName: "Paragraph",
  },
  {
    componentName: "Credits",
    card: [
      {
        cardTitle: "Aleksei Matveev",
        cardDescription: "Senior Product Designer",
        link: "https://www.linkedin.com/in/aeeeae/",
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
  {
    componentName: "Figma",
    iframeLink:
      "https://embed.figma.com/design/bS5XlxRwiWZpffYuScZfHT/Prisma-Labs%3A-Updating-onboarding-through-an-experiment?node-id=0-1&embed-host=share&theme=dark&page-selector=false&footer=false",
  },
];

export default articlePrismaOnboarding;
