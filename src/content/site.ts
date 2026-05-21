export const PHONE = '304-667-9343';
export const PHONE_TEL = '+13046679343';
export const EMAIL = 'info@hobbscustombuilders.com';
export const ADDRESS_LINES = ['PO Box 46', 'White Sulphur Springs, WV 24986'] as const;
export const LICENSE = 'WV license #WV061746';
export const LICENSE_NUMBER = '061746';

export const services = [
  {
    title: 'Your Dream Home Here',
    description:
      'We combine your vision with our field experience to shape a home that feels personal, practical, and built for daily life.',
    image:
      'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/f158aff5-83e7-45cc-9f3e-05530b11cf00/public'
  },
  {
    title: 'Additions',
    description:
      'More room should feel like it belonged there from the start. We plan the tie ins, structure, finishes, and flow with that in mind.',
    image:
      'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/160df607-b778-4d99-4b7b-fcb2215a6200/public'
  },
  {
    title: 'Decks and porches',
    description:
      'Front porches, back decks, stairs, rails, and outdoor spaces built for mountain weather and everyday use.',
    image:
      'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/cd0ffdbe-ac03-40d3-5654-209da823be00/public'
  },
  {
    title: 'Signature custom projects',
    description:
      'Distinctive finish work, specialty spaces, and one-of-one details that make a custom home feel considered from end to end.',
    image:
      'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/817e324f-6387-41a0-c5e9-a67a15a65000/public'
  }
];

export const featuredProject = {
  title: 'Decks made for the view',
  category: 'Decks',
  description:
    'Outdoor spaces shaped for the view, the weather, and the way your family actually uses the home.',
  image:
    'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/f2b383bf-e22b-48f8-4d97-30d1c1995100/public'
};

export const projectGallery = [
  {
    title: 'Custom home exterior',
    category: 'Custom homes',
    image:
      'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/f158aff5-83e7-45cc-9f3e-05530b11cf00/public'
  },
  {
    title: 'Room to grow',
    category: 'Additions',
    image:
      'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/160df607-b778-4d99-4b7b-fcb2215a6200/public'
  },
  {
    title: 'Porch and entry refresh',
    category: 'Porches',
    image:
      'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/9d516828-ef70-495f-1f5b-80fe6f65c900/public'
  },
  {
    title: 'Signature finish detail',
    category: 'Specialty spaces',
    image:
      'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/817e324f-6387-41a0-c5e9-a67a15a65000/public'
  }
];

export const testimonials = [
  {
    name: 'Sarah Yates',
    role: 'Homeowner',
    ratingLabel: '5 out of 5',
    text: 'They built a beautiful front porch for us, put in a handicap shower, and laid flooring in our home. The crew was always respectful and highly knowledgeable in every job. I highly recommended them and will be using them always in the future.'
  },
  {
    name: 'Debbie Totten',
    role: 'Homeowner',
    ratingLabel: '5 out of 5',
    text: 'This group is excellent. They worked sunrise to sunset, rain and shine, not to mention hot hot weather and never complained. So friendly and did an excellent job!!! Our roof looks beautiful! Very pleased!'
  }
];

export const navItems = [
  { to: '/', label: 'Home' },
  { to: '/builds', label: 'Our Builds' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' }
] as const;

export const homeAnchors = [
  { href: '/#services', label: 'What we build' },
  { href: '/#projects', label: 'Featured project' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/#contact', label: 'Contact' }
] as const;
