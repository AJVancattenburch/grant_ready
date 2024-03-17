// import { handHeartIcon, prepIcon, operationsIcon } from '../../../assets';
import { handHeartIcon } from "../../../assets/index.js";
import { prepIcon } from "../../../assets/index.js";
import { operationsIcon } from "../../../assets/index.js";

const Service_data = {
  id: "services",
  header: "Services",
  services: [
    {
      id: 1,
      name: "planning",
      textColor: "#ffecb4",
      backgroundColor: "#75c8ae",
      icon: handHeartIcon,
      content: "The first part of our process is an evaluation. We offer an organizational assessment tool for you to evaluate where you are at along the path to readiness, and then create a customized plan to build competency in key areas of grant readiness. This plan becomes our roadmap to success!",
      isExpanded: true,
    },
    {
      id: 2,
      name: "building",
      textColor: "#75c8ae",
      backgroundColor: "#e57713",
      icon: prepIcon,
      content: "Based on the results of your Readiness Evaluation, Grant Ready will build a customized roadmap to success including technical assistance, templates, and standard documents. This can also include evaluation and build-out of finances and accounting process and procedures, website evaluation, setting up program outcomes and data measurement tools, and creating logic models and strategic plans. Grant Ready works with each client intentionally to provide not only the knowledge, but the person-power to get everything on the roadmap done.",
      isExpanded: false,
    },
    {
      id: 3,
      name: "facilitating",
      textColor: "#e57713",
      backgroundColor: "#ffecb4",
      icon: operationsIcon,
      content: "Once everything on your roadmap is complete, or if you already have almost everything in the Building phase done when you come to us, Grant Ready will manage your grants program, at whatever level you prefer. Grant Ready offers full-cycle private and public grants management. This can include developing an easy-to-read grants calendar, sourcing opportunities that fit your desired program outcomes, applying to opportunities, managing restricted funds on your books, and reporting on spent funds. We will also offer coaching and/or training for someone internal to your organization to take over your grants program, once it’s been set up.",
      isExpanded: false,
    }
  ]
};

const service_data = Service_data

export const service_section = {
  id: service_data.id,
  header: service_data.header,
  services: service_data.services
};