import { spareChangeJar } from '../../../assets';

export const About = {
  id: "about",
  header: "About",
  image: spareChangeJar,
  paragraph1: "Grants can be a reliable source of funding  and sustainability for a nonprofit. However, there are many considerations that must be taken into account before you approach a funder or write a grant.",
  paragraph2: "With over 10 years of experience in full-service grant-writing from both public and private sources and over $10 million in successfully secured funds, Grant Ready will come alongside you, wherever you are in the process, to build up and strengthen your ability to be competitive for grant funding.",
};
//Should it be like this or export const about without the export { about } at the end and what is the difference? The answer is:
// With the current setup, the about object is being exported as a named export. This means that when you import the about object into another file, you will need to destructure the object from the import statement. For example:
// import { about } from './about';
//
// With the other setup, the about object is being exported as a default export. This means that when you import the about object into another file, you can import it without destructuring the object from the import statement. For example:
// import about from './about';
//
// The better option depends on your use case. If you are only exporting one object from the file, it is generally better to use a default export. If you are exporting multiple objects from the file, it is generally better to use named exports. This is because named exports allow you to import only the objects you need, while default exports require you to import the entire file and then destructure the objects you need. In this case, since you are only exporting one object from the file, it would be better to use a default export. So the file should look like this:
// import { spareChangeJar } from '../../../assets';
//
// const about = {
//   id: "about",
//   header: "About",
//   image: spareChangeJar,
//   paragraph1: "Grants can be a reliable source of funding  and sustainability for a nonprofit. However, there are many considerations that must be taken into account before you approach a funder or write a grant.",
//   paragraph2: "With over 10 years of experience in full-service grant-writing from both public and private sources and over $10 million in successfully secured funds, Grant Ready will come alongside you, wherever you are in the process, to build up and strengthen your ability to be competitive for grant funding.",
// };
//
// export default about;
// This way, you can import the about object into another file without destructuring it:
// import about from './about';
//
// If you are exporting it with a bunch of other object files to import them all to an index.js file, then you would use named exports. So the file should look like this:
// import { spareChangeJar } from '../../../assets';
//
// export const about = {
//   id: "about",
//   header: "About",
//   image: spareChangeJar,
//   paragraph1: "Grants can be a reliable source of funding  and sustainability for a nonprofit. However, there are many considerations that must be taken into account before you approach a funder or write a grant.",
//   paragraph2: "With over 10 years of experience in full-service grant-writing from both public and private sources and over $10 million in successfully secured funds, Grant Ready will come alongside you, wherever you are in the process, to build up and strengthen your ability to be competitive for grant funding.",
// };
// This way, you can import the about object into another file by destructuring it:
// import { about } from './about';
//
// If within the parent index.js file you are importing them again to a parent index.js file, then you would use default exports. So the file should look like this:
// Path: src/constants/db/index.js
// import { link_data } from './context/NavLinks';
// import { about } from './content/about';
// import { hero_data } from './context/Hero';
// import { service_data } from './context/Services';
// import { testimonial_data } from './context/Testimonials';
//
// const navLink = link_data.map((link) => {
//   return {
//     id: link.id,
//     URL: link.external_URL,
//     title: link.title
//   }
// });
//
// const service = service_data.services.map((service) => {
//   return {
//     id: service.id,
//     textColor: service.textColor,
//     backgroundColor: service.backgroundColor,
//     icon: service.icon,
//     content: service.content,
//     isExpanded: service.isExpanded
//   }
// });
//
// const testimonial = testimonial_data.testimonials.map((testimonial) => {
//   return {
//     company_name: testimonial.company_name,
//     title: testimonial.title,
//     content: testimonial.content
//   }
// });
//
// const database = {
//   navLink,
//   about,
//   hero_data,
//   service_data,
//   service,
//   testimonial_data,
//   testimonial
// };
//
// export const db = database;
// This way, you can import the about and other objects, including the mapped objects, into your parent /constants/index.js file without destructuring them:

// import { db } from './db/index.js';
//
// const sections = [
//   {
//
//     link_data: [
//       {
//         id: db.navLink.id,
//         title: db.navLink.title,
//         external_URL: external_URL ? db.navLink.external_URL : null
//       },
//     ],
//
//  As you can see, this neg