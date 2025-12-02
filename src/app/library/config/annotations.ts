export interface Annotation {
  article_id: string;
  title: string;
  quote: string;
  context: string;
  concepts: string[];
}

export const annotations: Annotation[] = [
  {
    article_id: "1",
    title: "Racism is the other virus sweeping America during this pandemic",
    quote:
      "As Japanese Americans, they experienced as children the pain of internment during World War II, one of the terrible scars in our country's past that stemmed from fear, hate and racism.",
    context:
      "My parents have seen it all. As Japanese Americans, they experienced as children the pain of internment during World War II, one of the terrible scars in our country's past that stemmed from fear, hate and racism. They lived through the horrors of 9/11 and witnessed the discrimination against Muslims in the wake of those attacks. With the coronavirus pandemic today, they are hearing the all-too-familiar vitriol toward Asian Americans being spewed from the dark and angry corners of social media and beyond. Although they remained stoic and largely reserved in the decades that followed internment, their quiet resilience changed dramatically after 9/11.",
    concepts: ["Systematic racism"],
  },
  {
    article_id: "1",
    title: "Racism is the other virus sweeping America during this pandemic",
    quote:
      "With the coronavirus pandemic today, they are hearing the all-too-familiar vitriol toward Asian Americans being spewed from the dark and angry corners of social media and beyond.",
    context:
      "They lived through the horrors of 9/11 and witnessed the discrimination against Muslims in the wake of those attacks. With the coronavirus pandemic today, they are hearing the all-too-familiar vitriol toward Asian Americans being spewed from the dark and angry corners of social media and beyond. Although they remained stoic and largely reserved in the decades that followed internment, their quiet resilience changed dramatically after 9/11. They would begin to speak out against the injustices of that time, becoming activists in their own right. Now, as a Chicagoan who for nearly two decades worked for the Chicago Department of Public Health, I can't remain silent as I witness the bigotry that has percolated in Chicago and across the country in response to the novel coronavirus pandemic that began in Wuhan, China.",
    concepts: ["Online harassment", "Scapegoat"],
  },
  {
    article_id: "1",
    title: "Racism is the other virus sweeping America during this pandemic",
    quote:
      "Now, as a Chicagoan who for nearly two decades worked for the Chicago Department of Public Health, I can't remain silent as I witness the bigotry that has percolated in Chicago and across the country in response to the novel coronavirus pandemic that began in Wuhan, China.",
    context:
      "Although they remained stoic and largely reserved in the decades that followed internment, their quiet resilience changed dramatically after 9/11. They would begin to speak out against the injustices of that time, becoming activists in their own right. Now, as a Chicagoan who for nearly two decades worked for the Chicago Department of Public Health, I can't remain silent as I witness the bigotry that has percolated in Chicago and across the country in response to the novel coronavirus pandemic that began in Wuhan, China. Racism has its own virulence that is bad for the nation's soul and, as research has shown, is actually bad for the nation's health. My family's path to the Midwest began in those internment camps.",
    concepts: ["Bigotry/prejudice", "Scapegoat"],
  },
  {
    article_id: "1",
    title: "Racism is the other virus sweeping America during this pandemic",
    quote:
      "The resilience I learned from them has buoyed me and my three brothers, as we too have experienced racism, including crude and hateful remarks.",
    context:
      'Normally soft-spoken and unassuming, my parents shared their experiences in panel discussions, newsletters and as featured guests of a multimedia exhibit depicting the internment of Japanese Americans, "Then They Came for Me." The resilience I learned from them has buoyed me and my three brothers, as we too have experienced racism, including crude and hateful remarks. My parents taught us to turn the other cheek, to be confident in our identity and values, no matter the situation. Now, I must speak out in the face of new attacks on Asian Americans. A preliminary analysis, in fact, examined nearly 1 million tweets focused on racial minorities between November 2019 and March 2020 -- the period when the novel coronavirus went from outbreak to pandemic.',
    concepts: ["Verbal harassment"],
  },
  {
    article_id: "1",
    title: "Racism is the other virus sweeping America during this pandemic",
    quote:
      "The percentage of tweets involving negative speech against Asian Americans increased 70% during that period while falling 4% for all other racial minority groups.",
    context:
      "Now, I must speak out in the face of new attacks on Asian Americans. A preliminary analysis, in fact, examined nearly 1 million tweets focused on racial minorities between November 2019 and March 2020 -- the period when the novel coronavirus went from outbreak to pandemic. The percentage of tweets involving negative speech against Asian Americans increased 70% during that period while falling 4% for all other racial minority groups. (The research team was comprised of a group of doctors, including Gilbert Gee from UCLA along with Thu Nguyen of UCSF, Shanise Criss of Furman University, Quyen Nguyen of the University of Maryland and David Chae of Tulane.) This treatment of Asian Americans is immoral, but also dangerous to public health.",
    concepts: ["Online harassment"],
  },
  {
    article_id: "1",
    title: "Racism is the other virus sweeping America during this pandemic",
    quote:
      "This treatment of Asian Americans is immoral, but also dangerous to public health.",
    context:
      "The percentage of tweets involving negative speech against Asian Americans increased 70% during that period while falling 4% for all other racial minority groups. (The research team was comprised of a group of doctors, including Gilbert Gee from UCLA along with Thu Nguyen of UCSF, Shanise Criss of Furman University, Quyen Nguyen of the University of Maryland and David Chae of Tulane.) This treatment of Asian Americans is immoral, but also dangerous to public health. Research shows that hateful speech and other actions against racial and ethnic minorities -- even seemingly small slights -- might make people sick, contributing to heart disease, respiratory illness and other chronic diseases. In an environment where people of any race feel threatened, they might be less likely to seek treatment out of fear and distrust of our medical system.",
    concepts: ["Racial injustice/inequity and oppression"],
  },
  {
    article_id: "1",
    title: "Racism is the other virus sweeping America during this pandemic",
    quote:
      "Research shows that hateful speech and other actions against racial and ethnic minorities -- even seemingly small slights -- might make people sick, contributing to heart disease, respiratory illness and other chronic diseases.",
    context:
      "This treatment of Asian Americans is immoral, but also dangerous to public health. Research shows that hateful speech and other actions against racial and ethnic minorities -- even seemingly small slights -- might make people sick, contributing to heart disease, respiratory illness and other chronic diseases. In an environment where people of any race feel threatened, they might be less likely to seek treatment out of fear and distrust of our medical system. This is especially dangerous in the midst of a pandemic when we should be lowering barriers to care, not raising them. During and after this pandemic, we must treat Asian Americans not as enemies, but as fellow victims of this insidious virus that does not distinguish by place, race, age or gender.",
    concepts: ["Systematic racism"],
  },
  {
    article_id: "1",
    title: "Racism is the other virus sweeping America during this pandemic",
    quote:
      "During and after this pandemic, we must treat Asian Americans not as enemies, but as fellow victims of this insidious virus that does not distinguish by place, race, age or gender.",
    context:
      "Research shows that hateful speech and other actions against racial and ethnic minorities -- even seemingly small slights -- might make people sick, contributing to heart disease, respiratory illness and other chronic diseases. In an environment where people of any race feel threatened, they might be less likely to seek treatment out of fear and distrust of our medical system. This is especially dangerous in the midst of a pandemic when we should be lowering barriers to care, not raising them. During and after this pandemic, we must treat Asian Americans not as enemies, but as fellow victims of this insidious virus that does not distinguish by place, race, age or gender. This is the time to support our neighbors, not turn on them.",
    concepts: ["Scapegoat"],
  },
  {
    article_id: "1",
    title: "Racism is the other virus sweeping America during this pandemic",
    quote:
      "Racism has its own virulence that is bad for the nation's soul and, as research has shown, is actually bad for the nation's health.",
    context:
      "Now, as a Chicagoan who for nearly two decades worked for the Chicago Department of Public Health, I can't remain silent as I witness the bigotry that has percolated in Chicago and across the country in response to the novel coronavirus pandemic that began in Wuhan, China. Racism has its own virulence that is bad for the nation's soul and, as research has shown, is actually bad for the nation's health. My family's path to the Midwest began in those internment camps. In order to leave, family members secured employment in Chicago. Despite prejudice and fear among many Chicago businesses and their employees, my grandparents and parents were given opportunities at Wrap-on Tools and Edgewater Beach Hotel.",
    concepts: ["Systematic racism"],
  },
  {
    article_id: "1",
    title: "Racism is the other virus sweeping America during this pandemic",
    quote:
      "Now, I must speak out in the face of new attacks on Asian Americans.",
    context:
      "The resilience I learned from them has buoyed me and my three brothers, as we too have experienced racism, including crude and hateful remarks. My parents taught us to turn the other cheek, to be confident in our identity and values, no matter the situation. Now, I must speak out in the face of new attacks on Asian Americans. A preliminary analysis, in fact, examined nearly 1 million tweets focused on racial minorities between November 2019 and March 2020 -- the period when the novel coronavirus went from outbreak to pandemic. The percentage of tweets involving negative speech against Asian Americans increased 70% during that period while falling 4% for all other racial minority groups.",
    concepts: ["Anti-Asian hate crimes(general)"],
  },
  {
    article_id: "1",
    title: "Racism is the other virus sweeping America during this pandemic",
    quote:
      "In an environment where people of any race feel threatened, they might be less likely to seek treatment out of fear and distrust of our medical system.",
    context:
      "Research shows that hateful speech and other actions against racial and ethnic minorities -- even seemingly small slights -- might make people sick, contributing to heart disease, respiratory illness and other chronic diseases. In an environment where people of any race feel threatened, they might be less likely to seek treatment out of fear and distrust of our medical system. This is especially dangerous in the midst of a pandemic when we should be lowering barriers to care, not raising them. During and after this pandemic, we must treat Asian Americans not as enemies, but as fellow victims of this insidious virus that does not distinguish by place, race, age or gender. This is the time to support our neighbors, not turn on them.",
    concepts: ["Discrimination"],
  },
];
