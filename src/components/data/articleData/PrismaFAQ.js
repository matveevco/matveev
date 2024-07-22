const articlePrismaFAQ = [
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
    title: "The user's path to payment",
    content:
      "Once the user installs the app, there is a definite path to payment, with the user's objectives and value identified, there is a good chance that they will come back to the app and eventually make a payment. But how do you explain the value of a product if it's not visible or little noticeable at the first interaction? Through activation, more specifically onboarding.",
  },
  {
    componentName: "Image",
    imageSRC: "/images/articles/prisma-faq/iA2.svg",
    imageWidth: "1278px",
    imageHeight: "432px",
  },
  {
    componentName: "Paragraph",
    content: [
      "The success of onboarding (aka First-Time User Experience, FTUE) is determined by the percentage of users who figure out how to use the app in the first session (The audience that interacts with onboarding is 100%).",
      "Therefore, in order to better communicate the functionality of the app and motivate people to use it, we resorted to experimenting with new onboarding in Prisma, where we decided to display not only styles, but also additional features of the app - frames, background swapping, segmentation, with a separate focus on having unique portrait styles.",
    ],
  },
  {
    componentName: "Paragraph_and_Image",
    imageSRC: "/images/articles/prisma-faq/iA3.webp",
    imageWidth: "1520px",
    imageHeight: "1520px",
    title: "Hypothesis about user motivation",
    content: [
      "We knew from current data that Prisma onboarding was most often interacted with in step two and step three by 40.5% and 25.9% of users respectively.",
      "We planned to continue tracking CR (Conversion Rate) in the walkthrough up to the trial subscription. We were also curious about the impact of the updated version on the interaction with the app's functionality, such as whether saving photos using the tools increases.",
    ],
  },
  {
    componentName: "Paragraph",
    content: [
      "So, we put together an interactive prototype with feature visualisations. Given that the toolset of the app had time to expand, it was crucial for us to explain all this in simple and clear language.",
      "Our main hypothesis was that the user would be more interested in going through the steps, more loyal to the purchase decision, and more motivated to use the photo settings for a better result if they could try out the application tools right in the onboarding stages without much difficulty.",
    ],
  },
  {
    componentName: "Paragraph_and_Image",
    imageSRC: "/images/articles/prisma-faq/iA4.webp",
    imageWidth: "1520px",
    imageHeight: "1520px",
    title: "The hypothesis was initially arrived at because of:",
    contentList: {
      list: [
        "A successful experiment with onboarding in Lensa;",
        "Good performance in using the new portrait styles (And we wanted to tell everyone who hasn't tried them yet);",
        "Fears of a dramatic effect with the purchase of traffic.",
      ],
    },
  },
  {
    componentName: "Paragraph_and_Image",
    imageSRC: "/images/articles/prisma-faq/iA5.webp",
    imageWidth: "1520px",
    imageHeight: "1520px",
    title: "Interaction experience",
    content: [
      "For a more appropriate view of the changes in the photo, cards were chosen, alternating active actions as the scenario unfolded, so as not to be static and boring. And although the onboarding was rebuilt from scratch, it still replicated the classic interaction experience, making the negative consequences of the update, like getting lost and misunderstood, quite impossible for us to avoid.",
      "In addition to telling the story of the tools visually, copywriting was also promoted and descriptions were added to reveal product features to new users, but in moderation. As we knew from previous experiments, almost no one in our audience read long texts, and if they did, they ended up not remembering the information we wanted to convey to them.",
    ],
  },
  {
    componentName: "Paragraph",
    title: "Reducing CR in trial subscriptions",
    content: [
      "We ran the experiment on 50% of the audience as an A/B test, which ran for 3 weeks and affected around 600k users. The expected results didn't materialise, but to understand what exactly went wrong we should look at the numbers.",
      "We noticed a strong increase in onboarding skips from the second and third step by a factor of 1.39 from 56% to 78% and 1.09 from 83% to 91% respectively. This was most likely influenced by informing users about the steps with dots at the bottom of the screen. Many customers don't want to go into detail, but instead have a desire to start using the app as soon as possible, so this is perfectly normal behaviour.",
      "Skipping steps like this also led to a 2.62x reduction in trial subscription CR, from 13.1% to 5%, because users couldn't assess whether to subscribe to an app, they weren't even familiar with yet.",
    ],
  },
  {
    componentName: "Image",
    imageSRC: "/images/articles/prisma-faq/iA6.svg",
    imageWidth: "1278px",
    imageHeight: "432px",
  },
  {
    componentName: "Paragraph",
    contentList: {
      content:
        "But there were some good results related to the audience who had gone through onboarding in full. For example, users who viewed how features were applied in the editor were more likely to save photos using the tools and subsequently had a positive RR (Retention Rate). When comparing the overall data and the data of this group, we can see an increase in the following metrics:",
      list: [
        "Applying style to the photo by a factor of 1.04 from 79% to 82.4%;",
        "Use of portrait styles 1.31 times from 19% to 25%;",
        "Use of frames 1.2 times from 9% to 11%;",
        "Use of segmentation 1.1 times from 51% to 57%;",
        "Changing backgrounds 1.06 times from 47% to 50%.",
      ],
    },
  },
  {
    componentName: "Image",
    imageSRC: "/images/articles/prisma-faq/iA7.svg",
    imageWidth: "1278px",
    imageHeight: "432px",
  },
  {
    componentName: "Paragraph",
    title: "Integration of internal onboarding",
    content: [
      "The experiment was unsuccessful because we were losing a large proportion of clients who missed the training. This update was negatively impacting both business and product metrics, but we couldn't get customers to stop, or remove the skip button, because the main goal of product design at Prisma Labs was product friendliness and responsiveness.",
      "So, we decided to launch a second experiment afterwards, which had been lying on the shelf for a long time and needed only minor tweaks. They didn't want to take it on for a long time because of the large backlog for testing, but at that moment everything worked out perfectly.",
      "The experiment consisted of removing external onboarding, which most users miss, and integrating internal onboarding, which immersed the client into the application's functionality with the client's own hands.",
    ],
  },
  {
    componentName: "Paragraph_and_Image",
    imageSRC: "/images/articles/prisma-faq/iA8.webp",
    imageWidth: "1520px",
    imageHeight: "1520px",
    title:
      "Humans tend to remember things in practice, so the hypothesis consisted of several steps:",
    contentList: {
      list: [
        "The user enters the app without an imposed instruction or subscription sale;",
        "The user selects the photo they want to edit;",
        "The user enters the editor where we help them diversify the photo with different features;",
        "The user remembers what is where by clicking on the tools and applying them;",
        "The user saves the result, shares it with their friends and starts the circle all over again, but without our tips because they've got it all figured out;",
        "Experiments with photos evoke positive emotions in the user, and when they reach certain limits in the app, they sign up for a trial period or buy a full subscription.",
      ],
    },
  },
  {
    componentName: "Paragraph",
    content:
      "The Photo Instruction Flow was redesigned for the current version of the product and ran a 4-week A/B test on 50% of the audience. Metrics decided to track the same, as these were the ones predicted to grow significantly.",
  },
  {
    componentName: "Paragraph",
    title: "Successful onboarding without skipping steps",
    content:
      "In this version, onboarding did not involve skipping steps and trial subscriptions, so there was no point in tracking these metrics. But trial subscriptions increased 1.35-fold from 13.1% to 17.8%, and bounce rates after the trial decreased 1.29-fold from 42% to 32.5%.",
  },
  {
    componentName: "Image",
    imageSRC: "/images/articles/prisma-faq/iA9.svg",
    imageWidth: "1278px",
    imageHeight: "432px",
  },
  {
    componentName: "Paragraph",
    contentList: {
      content:
        "Not only did conversion to subscriptions increase, but also tool usage:",
      list: [
        "Applying a style to a photo 1.12x from 79% to 89.1%;",
        "Use of portrait styles 2.21 times from 19% to 42%;",
        "Use of frames 1.9 times from 9% to 17%;",
        "Use of segmentation 1.35 times from 51% to 69.2%;",
        "Change of background 1.31 times from 47% to 62%.",
      ],
    },
  },
  {
    componentName: "Image",
    imageSRC: "/images/articles/prisma-faq/iA10.svg",
    imageWidth: "1278px",
    imageHeight: "432px",
  },
  {
    componentName: "Paragraph",
    content:
      "As a result, we were able not only to increase the figures, but also to prove that it is possible to approach the problem from different angles. We will be able to find out how this solution will prove itself when increasing the functionality in the product only in the future.",
  },
  {
    componentName: "Separator",
  },
  {
    componentName: "Figma",
    shareLink:
      "https://www.figma.com/design/2DqkI2r83wguUSkcBrAbKI/Prisma-Labs%3A-Why-F.A.Q.-is-important-and-how-we-have-integrated-it.?node-id=1-131&t=YjbVdia0B9dDREE2-1",
    iframeLink:
      // "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F2DqkI2r83wguUSkcBrAbKI%2FPrisma-Labs%253A-Why-F.A.Q.-is-important-and-how-we-have-integrated-it.%3Fnode-id%3D1-131%26t%3DWN3qp109FIQGi79o-1",
      "",
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
      {
        cardLogos: [
          {
            alt: "photo",
            src: "images/avatars/ava-ak.webp",
            width: "240px",
            height: "240px",
          },
        ],
        link: "https://www.linkedin.com/in/alexkeda/",
        cardTitle: "Aliaksei Keda",
        cardDescription: "Chief Design Officer",
        cardCaption: "LinkedIn",
      },
      {
        cardLogos: [
          {
            alt: "photo",
            src: "images/avatars/ava-as.webp",
            width: "240px",
            height: "240px",
          },
        ],
        link: "https://www.linkedin.com/in/alena-slobodianiuk-a3250794/",
        cardTitle: "Alena Slobodianiuk",
        cardDescription: "Chief Product Officer",
        cardCaption: "LinkedIn",
      },
    ],
  },
];

export default articlePrismaFAQ;
