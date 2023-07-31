const posts = [
  {
    title: "Post No. 1: Exploring the Enchanting Forest",
    slug: "exploring-the-enchanting-forest",
    content:
      "Today, I ventured into the mystical forest where the sunlight danced through the leaves, and the air was filled with the sweet scent of wildflowers. Birds chirped melodiously as I followed a hidden path that led me to an ancient tree with carvings that seemed to tell tales of forgotten civilizations...",
  },
  {
    title: "Post No. 2: A Culinary Adventure - Tasting Exotic Delicacies",
    slug: "a-culinary-adventure-tasting-exotic-delicacies",
    content:
      "In my quest for culinary delights, I found myself in a bustling street market, surrounded by sizzling pans and the aroma of spices. From savoring mouth-watering street food to trying unusual fruits, this adventure filled my taste buds with flavors from around the world...",
  },
  {
    title: "Post No. 3: A Night Under the Starlit Sky",
    slug: "a-night-under-the-starlit-sky",
    content:
      "Last night, I lay on a grassy knoll, gazing up at the vast expanse of the starlit sky. The constellations seemed to tell tales of ancient heroes and mythical creatures. As the night deepened, I felt a sense of awe and wonder, realizing how small yet connected we are to the universe...",
  },
  {
    title: "Post No. 4: Unraveling the Secrets of a Hidden Island",
    slug: "unraveling-the-secrets-of-a-hidden-island",
    content:
      "I embarked on a journey to an isolated island known only through legends. The shores revealed intricate seashells, and the dense jungle held mysteries waiting to be uncovered. Each step felt like a step into the unknown, and the island's secrets kept me captivated throughout my adventure...",
  },
  {
    title: "Post No. 5: A Melodic Encounter - Music of the Streets",
    slug: "a-melodic-encounter-music-of-the-streets",
    content:
      "As I strolled through the vibrant city streets, I was enchanted by the harmonious symphony of diverse musicians. From the rhythmic beats of drums to the soulful melodies of street performers, the city seemed alive with the soul-stirring sounds of music that touched my heart...",
  },
  {
    title: "Post No. 6: Serenity at the Seaside",
    slug: "serenity-at-the-seaside",
    content:
      "At the seaside, I found solace in the gentle caress of ocean waves and the soft, warm sand beneath my feet. The sea breeze carried away my worries, and the horizon seemed to hold the promise of new beginnings. In that moment, I felt truly connected to nature's eternal rhythm...",
  },
  {
    title: "Post No. 7: Reflections by the Riverside",
    slug: "reflections-by-the-riverside",
    content:
      "Sitting by the tranquil riverside, I watched as the water mirrored the beauty of the surrounding landscape. The river flowed with a sense of purpose, reminding me of life's constant changes. I immersed myself in the present, allowing the peaceful moment to wash away all distractions...",
  },
  {
    title: "Post No. 8: The Labyrinth of Books",
    slug: "the-labyrinth-of-books",
    content:
      "Lost in the labyrinth of books, I roamed through the aisles filled with literary treasures. Each book whispered stories of far-off lands and extraordinary adventures. The scent of ink and paper enveloped me, and I realized that within those pages lay a gateway to infinite knowledge...",
  },
  {
    title: "Post No. 9: Captivated by Fireflies",
    slug: "captivated-by-fireflies",
    content:
      "In the velvety darkness of the night, I was captivated by the mesmerizing dance of fireflies. Their soft glow illuminated the surroundings, turning the ordinary into something magical. Amidst the twinkling lights, I felt like I was part of a fairytale come to life...",
  },
  {
    title: "Post No. 10: The Art of Tea",
    slug: "the-art-of-tea",
    content:
      "Sipping tea in a quaint teahouse, I savored the delicate flavors that unfolded with every sip. The art of tea taught me the beauty of mindfulness and patience. In the serene ambiance, I discovered the art of living in the present moment...",
  },
  {
    title: "Post No. 11: A Day at the Zoo",
    slug: "a-day-at-the-zoo",
    content:
      "I spent a day at the zoo, where I saw all sorts of amazing animals. I learned about their habitats and their unique behaviors. I even got to feed some of them! It was a truly unforgettable experience.",
  },
  {
    title: "Post No. 12: Hiking in the Mountains",
    slug: "hiking-in-the-mountains",
    content:
      "I went hiking in the mountains, and it was an incredible experience. The views were breathtaking, and the fresh air was invigorating. I felt so alive and connected to nature. I can't wait to go back again soon!",
  },
  {
    title: "Post No. 13: Camping in the Great Outdoors",
    slug: "camping-in-the-great-outdoors",
    content:
      "I went camping in the great outdoors, and it was so much fun! I roasted marshmallows over the campfire, stargazed at night, and hiked through the woods. It was the perfect way to relax and disconnect from the hustle and bustle of everyday life.",
  },
  {
    title: "Post No. 14: Visiting a New City",
    slug: "visiting-a-new-city",
    content:
      "I visited a new city, and it was so exciting! I explored all the different neighborhoods, tried all the delicious food, and saw all the amazing sights. I can't wait to go back and explore more!",
  },
  {
    title: "Post No. 15: Learning a New Skill",
    slug: "learning-a-new-skill",
    content:
      "I learned a new skill, and it was so rewarding! I learned how to cook, how to play the guitar, and how to speak a new language. It was challenging, but it was also a lot of fun. I'm so glad I took the time to learn something new.",
  },
  {
    title: "Post No. 16: Traveling the World",
    slug: "traveling-the-world",
    content:
      "I traveled the world, and it was an amazing experience! I saw so many incredible places, met so many interesting people, and learned so much about different cultures. It was a truly life-changing experience.",
  },
  {
    title: "Post No. 17: Spending Time with Family and Friends",
    slug: "spending-time-with-family-and-friends",
    content:
      "I spent time with my family and friends, and it was so special! We laughed, we cried, we talked, and we just enjoyed each other's company. It was a reminder of how important the people in our lives are.",
  },
  {
    title: "Post No. 18: Helping Others",
    slug: "helping-others",
    content:
      "I helped others, and it was so fulfilling! I volunteered at a local soup kitchen, donated to charity, and just did my best to make a difference in the world. It was a great feeling to know that I was making a positive impact on someone else's life.",
  },
  {
    title: "Post No. 19: Pursuing My Dreams",
    slug: "pursuing-my-dreams",
    content:
      "I pursued my dreams, and it was worth it! I started my own business, wrote a book, and traveled the world. It was a lot of hard work, but it was also incredibly rewarding. I'm so glad I didn't give up on my dreams.",
  },
  {
    title: "Post No. 20: Living in the Present Moment",
    slug: "living-in-the-present-moment",
    content:
      "I learned to live in the present moment, and it was life-changing! I stopped worrying about the past and the future, and I just focused on enjoying the present moment. It was a much more peaceful and fulfilling way to live.",
  },
];

import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(posts);
}
