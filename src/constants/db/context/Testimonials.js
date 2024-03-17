const style = {
  // bgColor: var(--shadow-retro-red)
  bgColor: "var(--shadow-retro-red)"

}

const Testimonial_data = {
  id: "testimonials",
  header: "Testimonials",
  testimonials: [
    {
      company_logo: "https://assets.visme.co/templates/banners/thumbnails/i_Nonprofit-Logo-full_1.jpg",
      name: "WeCare Foundation",
      content: "One of the best decisions we made was to hire Grant Ready. Not only did they help us in obtaining a $1.5 million grant, but they also helped us to build our capacity to be competitive for future grant funding. We highly recommend them to any organization looking to secure grant funding.",
      rating: 5
    },
    {
      company_logo: "https://i.pinimg.com/originals/be/47/8f/be478fcd4db921fa838232f15bb646a5.png",
      name: "Mothers2Mothers",
      content: "Grant Ready has been a great asset to our organization. They have helped us secure over $2 million in grant funding. They are professional, knowledgeable, and a pleasure to work with. We highly recommend them to any organization looking to secure grant funding.",
      rating: 5
    },
    {
      company_logo: "https://cdn.dribbble.com/users/319705/screenshots/1728695/screen_shot_2014-09-16_at_5.07.06_pm_1x.png",
      name: "Whole Hearted, Inc.",
      content: "We have had the pleasure of working with Grant Ready for the past 3 years. They have been instrumental in helping us secure over $1.5 million in grant funding. They are professional, knowledgeable, and a pleasure to work with. We highly recommend them to any organization looking to secure grant funding.",
      rating: 5
    }
  ]
};

const testimonial_data = Testimonial_data

const mappedTestimonials = testimonial_data.testimonials.map((testimonial) => {
  return {
    company_logo: testimonial.company_logo,
    name: testimonial.name,
    content: testimonial.content,
    rating: testimonial.rating
  };
});

export const testimonial_section = {
  id: testimonial_data.id,
  header: testimonial_data.header,
  testimonials: mappedTestimonials
};