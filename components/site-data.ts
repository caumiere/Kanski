export type PortfolioEntry = {
  slug: string;
  order: string;
  title: string;
  kind: "video" | "article";
  category: string;
  blurb: string;
  dateLabel: string;
  clientLabel: string;
  durationLabel: string;
  locationLabel: string;
  sourceUrl: string;
  videoId?: string;
  startAt?: number;
  thumbnailUrl?: string;
};

export type FaqEntry = {
  id: string;
  question: string;
  answer: string;
};

export const contactEmail = "kandonfears16@gmail.com";

export const portfolioEntries: PortfolioEntry[] = [
  {
    slug: "word-around-campus-segment-one",
    order: "01",
    title: "Word Around Campus",
    kind: "video",
    category: "Broadcast Hosting",
    blurb: "I hosted and co-produced this Word Around Campus segment.",
    dateLabel: "Broadcast Sample",
    clientLabel: "Word Around Campus",
    durationLabel: "Starts at 22:38",
    locationLabel: "Florida A&M University",
    sourceUrl: "https://www.youtube.com/watch?v=ZHt5kP0NDow&t=1358s",
    videoId: "ZHt5kP0NDow",
    startAt: 1358,
    thumbnailUrl: "https://i.ytimg.com/vi/ZHt5kP0NDow/hqdefault.jpg",
  },
  {
    slug: "word-around-campus-segment-two",
    order: "02",
    title: "Word Around Campus",
    kind: "video",
    category: "Broadcast Hosting",
    blurb: "This second Word Around Campus sample highlights more of my hosting and co-producing work.",
    dateLabel: "Broadcast Sample",
    clientLabel: "Word Around Campus",
    durationLabel: "Starts at 26:42",
    locationLabel: "Florida A&M University",
    sourceUrl: "https://www.youtube.com/watch?v=xEiCUbH1E2o&t=1602s",
    videoId: "xEiCUbH1E2o",
    startAt: 1602,
    thumbnailUrl: "https://i.ytimg.com/vi/xEiCUbH1E2o/hqdefault.jpg",
  },
  {
    slug: "venom-affairs",
    order: "03",
    title: "Venom Affairs",
    kind: "video",
    category: "Program Hosting",
    blurb: "This Venom Affairs sample shows my work as a program host.",
    dateLabel: "Broadcast Sample",
    clientLabel: "Venom Affairs",
    durationLabel: "Starts at 04:23",
    locationLabel: "Florida A&M University",
    sourceUrl: "https://www.youtube.com/watch?v=L9EYuktKvrM&t=263s",
    videoId: "L9EYuktKvrM",
    startAt: 263,
    thumbnailUrl: "https://i.ytimg.com/vi/L9EYuktKvrM/hqdefault.jpg",
  },
  {
    slug: "student-senate-conducts-lengthy-meeting",
    order: "04",
    title: "Student Senate conducts lengthy meeting",
    kind: "article",
    category: "Campus Politics",
    blurb: "I covered a marathon senate session shaped by leadership changes and impeachment debate.",
    dateLabel: "March 20, 2024",
    clientLabel: "The FAMUAN",
    durationLabel: "Published Article",
    locationLabel: "Tallahassee, Florida",
    sourceUrl: "https://www.thefamuanonline.com/2024/03/20/famu-senate-conducts-lengthy-meeting/",
  },
  {
    slug: "freshman-senators-sworn-in",
    order: "05",
    title: "Freshman senators sworn in",
    kind: "article",
    category: "Campus News",
    blurb: "I reported on the induction of new senators and the priorities they brought into student government.",
    dateLabel: "October 4, 2023",
    clientLabel: "The FAMUAN",
    durationLabel: "Published Article",
    locationLabel: "Tallahassee, Florida",
    sourceUrl: "https://www.thefamuanonline.com/2023/10/04/freshman-senators-sworn-in/",
  },
  {
    slug: "we-have-more-but-we-are-doing-less",
    order: "06",
    title: "We have more, but we are doing less",
    kind: "article",
    category: "Campus Politics",
    blurb: "I reported on concern and confusion surrounding student government funds and the investigation that followed.",
    dateLabel: "November 8, 2023",
    clientLabel: "The FAMUAN",
    durationLabel: "Published Article",
    locationLabel: "Tallahassee, Florida",
    sourceUrl: "https://www.thefamuanonline.com/2023/11/08/we-have-more-but-we-are-doing-less/",
  },
  {
    slug: "the-off-campus-experience",
    order: "07",
    title: "The off campus experience",
    kind: "article",
    category: "Student Life",
    blurb: "I explored off-campus living and the tradeoffs that come with it in this student-life story.",
    dateLabel: "January 26, 2024",
    clientLabel: "The FAMUAN",
    durationLabel: "Published Article",
    locationLabel: "Tallahassee, Florida",
    sourceUrl: "https://www.thefamuanonline.com/2024/01/26/the-off-campus-experience/",
  },
  {
    slug: "back-to-the-basics-greenwise-to-publix",
    order: "08",
    title: "Back to the basics: Greenwise to Publix",
    kind: "article",
    category: "Community",
    blurb: "I reported on how the Greenwise-to-Publix conversion changed a student-facing space near campus.",
    dateLabel: "March 5, 2024",
    clientLabel: "The FAMUAN",
    durationLabel: "Published Article",
    locationLabel: "Tallahassee, Florida",
    sourceUrl: "https://www.thefamuanonline.com/2024/03/05/back-to-the-basics-greenwise-to-publix/",
  },
  {
    slug: "fraternity-at-odds-with-city-leadership",
    order: "09",
    title: "Fraternity at odds with city leadership",
    kind: "article",
    category: "City Politics",
    blurb: "I covered a zoning fight that put a fraternity property dispute before city leadership.",
    dateLabel: "October 12, 2023",
    clientLabel: "The FAMUAN",
    durationLabel: "Published Article",
    locationLabel: "Tallahassee, Florida",
    sourceUrl: "https://www.thefamuanonline.com/2023/10/12/fraternity-at-odds-with-city-leadership/",
  },
  {
    slug: "sga-graduate-affairs-gets-a-proven-leader",
    order: "10",
    title: "SGA’s Graduate Affairs gets a proven leader",
    kind: "article",
    category: "Campus Politics",
    blurb: "I reported on the confirmation of a new Secretary of Graduate Affairs.",
    dateLabel: "September 19, 2023",
    clientLabel: "The FAMUAN",
    durationLabel: "Published Article",
    locationLabel: "Tallahassee, Florida",
    sourceUrl: "https://www.thefamuanonline.com/2023/09/19/48846/",
  },
  {
    slug: "passport-fair-to-expand-global-opportunities",
    order: "11",
    title: "Passport Fair to expand global opportunities",
    kind: "article",
    category: "Campus News",
    blurb: "I covered FAMU's passport fair and how it expanded study-abroad opportunities for students.",
    dateLabel: "April 6, 2024",
    clientLabel: "The FAMUAN",
    durationLabel: "Published Article",
    locationLabel: "Tallahassee, Florida",
    sourceUrl:
      "https://www.thefamuanonline.com/2024/04/06/florida-am-university-hosts-second-passport-fair-to-expand-global-opportunities-for-students/",
  },
  {
    slug: "hbcu-coaching-staffs-consistently-in-headlines",
    order: "12",
    title: "HBCU coaching staffs consistently in headlines",
    kind: "article",
    category: "Sports Commentary",
    blurb: "In this commentary piece, I examined the attention surrounding HBCU coaching staffs.",
    dateLabel: "January 29, 2023",
    clientLabel: "The FAMUAN",
    durationLabel: "Published Article",
    locationLabel: "Tallahassee, Florida",
    sourceUrl: "https://www.thefamuanonline.com/2023/01/29/hbcu-coaching-staffs-consistently-in-headlines/",
  },
  {
    slug: "jeffrey-francis-youth-on-the-rise",
    order: "13",
    title: "Jeffrey Francis: Youth on the rise",
    kind: "article",
    category: "Profile",
    blurb: "I profiled student leader Jeffrey Francis and the themes behind his run for office.",
    dateLabel: "February 20, 2023",
    clientLabel: "The FAMUAN",
    durationLabel: "Published Article",
    locationLabel: "Tallahassee, Florida",
    sourceUrl: "https://www.thefamuanonline.com/2023/02/20/youth-on-the-rise/",
  },
  {
    slug: "the-14th-is-for-men-too",
    order: "14",
    title: "The 14th is for men too",
    kind: "article",
    category: "Opinion",
    blurb: "In this opinion piece, I wrote about emotional vulnerability, masculinity, and Valentine's Day.",
    dateLabel: "February 14, 2023",
    clientLabel: "The FAMUAN",
    durationLabel: "Published Article",
    locationLabel: "Tallahassee, Florida",
    sourceUrl: "https://www.thefamuanonline.com/2023/02/14/the-14th-is-for-men-too/",
  },
];

export const faqEntries: FaqEntry[] = [
  {
    id: "01",
    question: "What kind of work is included here?",
    answer:
      "I combine broadcast hosting samples, co-produced segments, and individually linked published writing here.",
  },
  {
    id: "02",
    question: "Where were the articles originally published?",
    answer: "My writing archive links to stories originally published by The FAMUAN.",
  },
  {
    id: "03",
    question: "What video work is featured?",
    answer:
      "I currently feature Word Around Campus hosting samples and a Venom Affairs hosting segment.",
  },
  {
    id: "04",
    question: "Are the videos embedded from their original source?",
    answer: "Yes. I embed the original YouTube videos on the package pages using the provided timestamps.",
  },
  {
    id: "05",
    question: "Can more stories and packages be added later?",
    answer:
      "Yes. I set up the content model so I can add more articles and creative work without rebuilding the layout.",
  },
  {
    id: "06",
    question: "What does this portfolio highlight most?",
    answer:
      "It highlights my broadcast presence, newsroom reporting, and published campus and community journalism.",
  },
];

export const featuredEntries = portfolioEntries.slice(0, 5);
export const galleryEntries = portfolioEntries.slice(0, 8);

export function getEntryBySlug(slug: string) {
  return portfolioEntries.find((entry) => entry.slug === slug);
}
