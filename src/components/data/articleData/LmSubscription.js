const articleLmSubscription = [
  {
    componentName: "HeaderArticle",
    linkButton: "/",
    content: [
      "After four years of the product's operation, the team had an idea to change the service from a completely free model to a freemium one. The motivation was the desire to validate the hypothesis about the product's value for the audience.",
      "The idea included expanding and simplifying the functionality, as well as designing the pricing, analysing the user experience and rethinking the logic.",
    ],
  },
  {
    imageSRC: "/images/articleContent/lm-a5-subscription/iA1.webp",
    imageWidth: "2556px",
    imageHeight: "1326px",
    imageMargin: "oi-top",
    componentName: "Image",
  },
  {
    title: "Psychology of pricing",
    content: [
      "In simple words, a subscription is a recurring payment from the user for extra services, and specific items, as well as expansion of capabilities on information and entertainment services.",
      "If there is sufficient product functionality to allocate restrictions, paid services usually start with two or more pricing plans. This approach sets them apart from competitors who don't give users flexible choice, customisation and switching (Upgrade, Downgrade).",
    ],
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/lm-a5-subscription/iA2.webp",
    imageWidth: "2556px",
    imageHeight: "1326px",
    imageMargin: "oi-top",
    componentName: "Image",
  },
  {
    content: [
      "In addition, companies often use marketing tricks to create a perception of benefit to users, such as giving discounts or using odd prices that create the illusion of paying less.",
      "Odd prices are part of the psychology of pricing. The psychology of pricing, in turn, has the purpose of keeping the product within the «Mental Boundaries» of the customers by means of a slight decrease in price.",
    ],
    componentName: "Paragraph",
  },
  {
    title: "Product upgrade process",
    contentList: {
      content:
        "We started the work on the update with a discussion. The main issues we planned to solve included:",
      list: [
        "Working out the interconnections with the current functionality;",
        "Working out pricing based on our value in the market as well as competitors' value;",
        "Warming audience interest in the upcoming update;",
        "Determining deadlines;",
        "Implementation.",
      ],
    },
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/lm-a5-subscription/iA3.svg",
    imageWidth: "1278px",
    imageHeight: "432px",
    imageMargin: "oi-around",
    componentName: "Image",
  },
  {
    content: [
      "We decided to start by studying direct and indirect competitors to identify repeatable patterns that would form the basis of our functionality.",
      "In addition to the analysis, we needed to identify the capabilities of our payment system to cover most of the obvious user issues in the first version. Such as «Changing payment details when a card is blocked or lost». In addition, it was necessary to find the points of interaction between clients and subscriptions and connect the subscription with the other product functionality.",
      "When the minimum task description was formed, including system behaviour and user actions, we had all the necessary data to specify the scope of the tasks.",
    ],
    componentName: "Paragraph",
  },
  {
    title: "Psychology of choice and pricing strategy",
    content: [
      "In the process of implementing a paid subscription, we couldn't miss the opportunity to check the impact of the plan name on the purchase decision.",
      "The decision to name the minimum plan «Amateur» wasn't accidental. According to our hypothesis, this name should have motivated users, who were mostly actors and models, to buy the «Premium» plan, which in their mind would represent their level of professionalism.",
    ],
    contentList: {
      content:
        "Thus, dividing users by professional levels, we identified 3 plans:",
      list: [
        "«Amateur» for beginners;",
        "«Standard» for specialists;",
        "«Premium» for professionals.",
      ],
    },
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/lm-a5-subscription/iA4.webp",
    imageWidth: "2556px",
    imageHeight: "1326px",
    imageMargin: "oi-top",
    componentName: "Image",
  },
  {
    contentList: {
      content:
        "The basic prices were calculated based on monthly traffic, revenue, value of provided services and service commission. The monthly costs of the «Standard» and «Premium» plans were $1.99 and $4.15 respectively. The «Premium» plan in turn was divided into several periods:",
      list: [
        "$4.99 for a monthly subscription;",
        "$29.90 for a half-year subscription ($4.98 per month);",
        "$49.90 for a year subscription ($4.15 per month).",
      ],
    },
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/lm-a5-subscription/iA5.webp",
    imageWidth: "2556px",
    imageHeight: "1326px",
    imageMargin: "oi-top",
    componentName: "Image",
  },
  {
    content:
      "In order for the user to see a greater benefit in the «Premium» plan for the half-year and year, we made the decision to display the monthly billing and the discount percentage. However, in reality, the discount was so small that we decided to revise the prices to increase the discounts and consequently the average user's cheque.",
    contentList: {
      content:
        "As a result, the prices for the «Premium» plan have been re-formatted:",
      list: [
        "$4.99 when subscribing for a month;",
        "$26.94 for a half-year subscription ($4.49 per month);",
        "$47.88 for a year subscription ($3.99 per month).",
      ],
    },
    componentName: "Paragraph",
  },
  {
    title: "Scenarios, user experience and clarity of information",
    content: [
      "We started working on the subscription model by designing the logic and creating scenarios that helped us find and finalise states.",
      "To make it easy to select and pay for a favourite plan, we used pop-ups, so that any action that came under the restrictions of the free plan was a trigger to purchase. We didn't redirect the user to another section, the choice was left to the user: upgrade the plan or close the window and complete an action that didn't require an investment.",
      "When we started designing, we proceeded from the principle of consistency and reusing existing patterns so people wouldn't get lost in the new functionality. After finalising sections and notifications, we built the overall flow and conducted hallway usability testing for failure rates and task success.",
    ],
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/lm-a5-subscription/iA6.webp",
    imageWidth: "2556px",
    imageHeight: "1326px",
    imageMargin: "oi-top",
    componentName: "Image",
  },
  {
    content:
      "We reserved a separate time for copywriting edits. To reduce the number of potential technical support tickets in the future, we worked out the information in the payment confirmation section, highlighting items such as Options, Payment Period, Discounts, Confirmation, Hints, and Features received from an upgrade.",
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/lm-a5-subscription/iA7.webp",
    imageWidth: "2556px",
    imageHeight: "1326px",
    imageMargin: "oi-top",
    componentName: "Image",
  },
  {
    title: "Solutions",
    content:
      "We didn't forget to spend time on informative pop-ups, which told about the limitations and features of the plans.",
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/lm-a5-subscription/iA8.webp",
    imageWidth: "2556px",
    imageHeight: "1326px",
    imageMargin: "oi-top",
    componentName: "Image",
  },
  {
    content:
      "And we worked on the mobile version for easy access to the subscription from the user's side.",
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/lm-a5-subscription/iA9.webp",
    imageWidth: "2556px",
    imageHeight: "1326px",
    imageMargin: "oi-top",
    componentName: "Image",
  },
  {
    title: "That's not all",
    content: [
      "To significantly reduce negative user feedback when we launched the subscription model, we told the audience how useful subscriptions are and how they work everywhere.",
      "We didn't forget about people who might be coming to us for the first time and people who might doubt the usefulness of upgrading their plan, so we added a promo code for 7 free days of the «Premium» plan.",
    ],
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/lm-a5-subscription/iA10.webp",
    imageWidth: "1260px",
    imageHeight: "1178px",
    imageMargin: "oi-full-short",
    componentName: "Image",
  },
  {
    content: [
      "We tested the new functionality for a month and had positive results. With industry-standard metrics where average conversion to purchase is 1-2% and high 3-5%, our subscriber conversion was 1.5% of the monthly audience and was ~230 purchases with an ARPU of $4.99/month. Retention Rate was higher than expected at 82%, with a benchmark of 75-85%.",
    ],
    componentName: "Paragraph",
  },
  {
    imageSRC: "/images/articleContent/lm-a5-subscription/iA11.svg",
    imageWidth: "1278px",
    imageHeight: "432px",
    imageMargin: "oi-around",
    componentName: "Image",
  },
  {
    content: [
      "There was no clear gradation, people bought «Standard» for a month, «Premium» for a year, or used a promo code for a week, so we will be able to give a forecast on further purchases only after a while. For now, we need to test new hypotheses and not stop at the achieved result.",
    ],
    componentName: "Paragraph",
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
    ],
  },
  {
    componentName: "Figma",
    iframeLink:
      "https://embed.figma.com/design/5XT2IbDalaUnGdt72WVM3v/Linkmuse%3A-Experimenting-with-the-subscription-model?node-id=0-1&embed-host=share&theme=dark&page-selector=false&footer=false",
  },
];

export default articleLmSubscription;
