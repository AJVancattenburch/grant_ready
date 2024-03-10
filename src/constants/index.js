import {
  grantReadyLogo,
  heroImage,
  spareChangeJar,
  handHeartIcon,
  prepIcon,
  operationsIcon
}
from '../assets';

import * as data from './data.json'

const links = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    icon: "mdi-linkedin",
    URL: "https://www.linkedin.com/in/brianna-richards-2012/"
  }
];

export const navLinks = links.map((link) => {
  return {
    id: link.id,
    URL: link.URL,
    title: link.title
  }
});

const heroSection = {
  id: "hero",
  icon: grantReadyLogo,
  backgroundImg: heroImage,
};

const aboutSection = {
  header: "About",
  image: spareChangeJar,
  paragraph1: "Grants can be a reliable source of funding  and sustainability for a nonprofit. However, there are many considerations that must be taken into account before you approach a funder or write a grant.",
  paragraph2: "With over 10 years of experience in full-service grant-writing from both public and private sources and over $10 million in successfully secured funds, Grant Ready will come alongside you, wherever you are in the process, to build up and strengthen your ability to be competitive for grant funding.",
}

const servicesSection = {
  header: "Services",
  services: [
    {
      header: "planning",
      textColor: "#ffecb4",
      backgroundColor: "#75c8ae",
      icon: handHeartIcon,
      content: "The first part of our process is an evaluation. We offer an organizational assessment tool for you to evaluate where you are at along the path to readiness, and then create a customized plan to build competency in key areas of grant readiness. This plan becomes our roadmap to success!",
      isExpanded: true,
    },
    {
      header: "building",
      textColor: "#75c8ae",
      backgroundColor: "#e57713",
      icon: prepIcon,
      content: "Based on the results of your Readiness Evaluation, Grant Ready will build a customized roadmap to success including technical assistance, templates, and standard documents. This can also include evaluation and build-out of finances and accounting process and procedures, website evaluation, setting up program outcomes and data measurement tools, and creating logic models and strategic plans. Grant Ready works with each client intentionally to provide not only the knowledge, but the person-power to get everything on the roadmap done.",
      isExpanded: false,
    },
    {
      header: "facilitating",
      textColor: "#e57713",
      backgroundColor: "#ffecb4",
      icon: operationsIcon,
      content: "Once everything on your roadmap is complete, or if you already have almost everything in the Building phase done when you come to us, Grant Ready will manage your grants program, at whatever level you prefer. Grant Ready offers full-cycle private and public grants management. This can include developing an easy-to-read grants calendar, sourcing opportunities that fit your desired program outcomes, applying to opportunities, managing restricted funds on your books, and reporting on spent funds. We will also offer coaching and/or training for someone internal to your organization to take over your grants program, once it’s been set up.",
      isExpanded: false,
    },
  ],
};

const testimonialsSection = {
  header: "Testimonials",
  testimonials: [
    {
      company_logo: "https://assets.visme.co/templates/banners/thumbnails/i_Nonprofit-Logo-full_1.jpg",
      name: "WeCare Foundation",
      content: "One of the best decisions we made was to hire Grant Ready. Not only did they help us in obtaining a $1.5 million grant, but they also helped us to build our capacity to be competitive for future grant funding. We highly recommend them to any organization looking to secure grant funding.",
    },
    {
      company_logo: "https://i.pinimg.com/originals/be/47/8f/be478fcd4db921fa838232f15bb646a5.png",
      name: "Mothers2Mothers",
      content: "Grant Ready has been a great asset to our organization. They have helped us secure over $2 million in grant funding. They are professional, knowledgeable, and a pleasure to work with. We highly recommend them to any organization looking to secure grant funding.",
    },
    {
      company_logo: "https://cdn.dribbble.com/users/319705/screenshots/1728695/screen_shot_2014-09-16_at_5.07.06_pm_1x.png",
      name: "Whole Hearted, Inc.",
      content: "We have had the pleasure of working with Grant Ready for the past 3 years. They have been instrumental in helping us secure over $1.5 million in grant funding. They are professional, knowledgeable, and a pleasure to work with. We highly recommend them to any organization looking to secure grant funding.",
    },
  ],
};

export {
  heroSection,
  aboutSection,
  servicesSection,
  testimonialsSection,
};