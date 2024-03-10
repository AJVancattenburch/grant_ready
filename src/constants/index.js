import {
  grantReadyLogo,
  heroImage,
  spareChangeJar,
  handHeartIcon,
  prepIcon,
  operationsIcon
}
from '../assets';

import { db } from './db/index.js';

const sections = [
  {

    link_data: [
      {
        id: db.navLink.id,
        title: db.navLink.title,
        external_URL: external_URL ? db.navLink.external_URL : null
      },
    ],

    hero_data: {
      id: "hero",
      icon: grantReadyLogo,
      backgroundImg: heroImage,
    },

    about_data: {
      id: "about",
      header: "About",
      image: spareChangeJar,
      paragraph1: "Grants can be a reliable source of funding  and sustainability for a nonprofit. However, there are many considerations that must be taken into account before you approach a funder or write a grant.",
      paragraph2: "With over 10 years of experience in full-service grant-writing from both public and private sources and over $10 million in successfully secured funds, Grant Ready will come alongside you, wherever you are in the process, to build up and strengthen your ability to be competitive for grant funding.",
    },

    service_data: {
      id: db.service_data.id,
      header: db.service_data.header,
      services: [
        {
          header: db.service.header,
          textColor: db.service.textColor,
          backgroundColor: db.service.backgroundColor,
          icon: db.service.icon,
          content: db.service.content,
          isExpanded: true,
        }
      ],
    },

    testimonial_data: {
      id: db.testimonial_data.id,
      header: db.testimonial_data.header,
      testimonials: [
        {
          company_logo: db.testimonial.company_logo,
          name: db.testimonial.name,
          content: db.testimonial.content,
        },
      ],
    },
  },
];

export {
  sections
};