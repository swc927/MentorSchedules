// Mentor Schedules by SWC
// Photos are fetched live from Wikipedia to avoid broken links.

const mentors = [
  {
    name: "Tim Cook",
    title: "Apple chief executive",
    quote: "Let your joy be in your journey, not in some distant goal.",
    profile:
      "Known for operational excellence and a calm leadership style at Apple.",
    success:
      "Scaled Apple after 2011 with record revenue and a focus on privacy and services.",
    contrib: "Supply chain mastery and major sustainability initiatives.",
    schedule: [
      "03:45 Wake, email triage, quiet focus",
      "05:00 Gym, weights and cardio",
      "06:00 Breakfast, reading news",
      "07:00 Deep work",
      "10:00 Meetings, reviews",
      "13:00 Walk and think",
      "14:00 Collaboration blocks",
      "18:30 Family, downtime",
      "21:30 Sleep",
    ],
    source:
      "https://www.businessinsider.com/tim-cook-wake-up-morning-routine-productivity-2019-8",
  },
  {
    name: "Jeff Bezos",
    title: "Founder of Amazon",
    quote: "Your margin is my opportunity.",
    profile: "Investor and space founder who values long term thinking.",
    success:
      "Built Amazon from online books to a global platform and cloud leader.",
    contrib:
      "Customer obsession, Day One mindset, Blue Origin space exploration.",
    schedule: [
      "06:30 Wake naturally, family breakfast",
      "08:00 Putters, light tasks",
      "10:00 High quality decision time",
      "12:30 Lunch and walk",
      "14:00 Meetings",
      "17:30 Wind down",
      "22:00 Sleep prioritised",
    ],
    source:
      "https://www.wsj.com/articles/jeff-bezos-sleep-productivity-11553292271",
  },
  {
    name: "Warren Buffett",
    title: "Investor at Berkshire Hathaway",
    quote: "The best investment you can make is in yourself.",
    profile: "Value investor famed for rationality and patience.",
    success: "Compound returns over decades with partner Charlie Munger.",
    contrib: "Philanthropy and shareholder letters that teach clear thinking.",
    schedule: [
      "06:45 Wake gently",
      "07:30 Reading newspapers",
      "09:00 Office reading and analysis",
      "12:00 Simple lunch",
      "13:00 Meetings or more reading",
      "17:30 Family time",
      "22:30 Sleep",
    ],
    source: "https://routines.club/routine/warren-buffett",
  },
  {
    name: "Oprah Winfrey",
    title: "Media founder and philanthropist",
    quote: "Turn your wounds into wisdom.",
    profile:
      "Media leader who built a trusted brand and a school in South Africa.",
    success: "The Oprah Winfrey Show shaped culture for 25 years.",
    contrib: "Philanthropy, book club effect, wellness advocacy.",
    schedule: [
      "06:30 Gratitude and dogs walk",
      "08:00 Meditation",
      "09:00 Workout, strength and cardio",
      "10:00 Creative work",
      "12:30 Lunch",
      "14:00 Meetings and production",
      "18:30 Wind down and reading",
    ],
    source:
      "https://www.businessinsider.com/i-did-oprahs-morning-routine-for-a-week-2019-9",
  },
  {
    name: "Barack Obama",
    title: "44th President of the United States",
    quote: "We are the change that we seek.",
    profile: "Law professor turned president, known for calm decision making.",
    success: "Passed major legislation and led during a financial crisis.",
    contrib: "Public service, leadership example, and foundation work.",
    schedule: [
      "07:00 Wake",
      "07:30 Gym, 45 minutes",
      "08:30 Breakfast with family",
      "09:30 Briefings and deep work",
      "12:30 Lunch",
      "14:00 Meetings",
      "18:30 Family time and reading",
      "23:30 Lights out",
    ],
    source:
      "https://www.theguardian.com/world/shortcuts/2012/sep/17/barack-obama-secret-weapon-routine",
  },
  {
    name: "Indra Nooyi",
    title: "Former PepsiCo chief executive",
    quote: "Whatever you do, throw yourself into it.",
    profile: "Executive who transformed PepsiCo with Performance with Purpose.",
    success: "Shifted portfolio to healthier products and global growth.",
    contrib: "Diversity advocacy and leadership mentoring.",
    schedule: [
      "04:00 Wake",
      "05:30 Planning and email",
      "07:00 Office",
      "10:00 Reviews and strategy",
      "13:00 Walk and think",
      "14:00 Collaboration",
      "19:00 Family time",
      "22:00 Sleep",
    ],
    source:
      "https://www.businessinsider.com/pepsi-ceo-indra-nooyi-morning-routine-2016-8",
  },
  {
    name: "Elon Musk",
    title: "Founder of SpaceX and chief executive of Tesla",
    quote:
      "When something is important enough, you do it even if the odds are not in your favour.",
    profile: "Engineer founder focused on rockets, cars and energy.",
    success: "Reusable rockets and mass market EV adoption.",
    contrib: "Pushed private space flight and battery tech forward.",
    schedule: [
      "07:00 Wake",
      "07:05 Email batch",
      "07:30 Time blocked work in five minute slots",
      "12:30 Quick lunch",
      "13:00 More time blocks and reviews",
      "19:00 Family time",
      "00:00 Sleep",
    ],
    source: "https://mayooshin.com/time-blocking-elon-musk-manage-time",
  },
  {
    name: "Serena Williams",
    title: "Tennis champion and investor",
    quote:
      "I really think a champion is defined not by their wins but by how they can recover when they fall.",
    profile:
      "One of the greatest tennis players, now investor and fashion entrepreneur.",
    success: "23 Grand Slam singles titles.",
    contrib: "Role model for perseverance and equality.",
    schedule: [
      "06:00 Wake and hydration",
      "07:00 Training and drills",
      "10:00 Strength and recovery",
      "12:30 Lunch",
      "14:00 Business work or practice",
      "18:00 Family time",
      "22:30 Sleep",
    ],
    source: "https://www.wtatennis.com/players/230234-serena-williams",
  },
  {
    name: "Sheryl Sandberg",
    title: "Former chief operating officer of Meta",
    quote: "Done is better than perfect.",
    profile: "Tech operator, author of Lean In and Option B.",
    success: "Scaled operations and ad business at Facebook.",
    contrib: "Advocacy for women in leadership.",
    schedule: [
      "06:30 Wake and breakfast with kids",
      "08:30 Office work",
      "12:30 Lunch meetings",
      "17:30 Leave for dinner with family",
      "20:30 Reading and prep",
      "22:30 Sleep",
    ],
    source: "https://www.self.com/story/how-to-leave-work-early",
  },
  {
    name: "Richard Branson",
    title: "Founder of Virgin Group",
    quote: "Screw it, let’s do it.",
    profile: "Entrepreneur with ventures in travel, telecoms and space.",
    success: "Built the Virgin brand across many sectors.",
    contrib: "Adventure philanthropy and climate work.",
    schedule: [
      "05:00 Wake on Necker, emails",
      "06:00 Tennis or kitesurf",
      "08:00 Breakfast and family",
      "09:00 Work blocks and calls",
      "12:30 Lunch",
      "14:00 Meetings and writing",
      "18:00 Wind down",
    ],
    source:
      "https://www.virgin.com/branson-family/richard-branson-blog/a-day-in-the-life-on-necker-island",
  },
  {
    name: "Bill Gates",
    title: "Co founder of Microsoft and philanthropist",
    quote:
      "Most people overestimate what they can do in one year and underestimate what they can do in ten.",
    profile: "Technologist and philanthropist at the Gates Foundation.",
    success: "Microsoft and global health impact.",
    contrib: "Vaccines, climate and education initiatives.",
    schedule: [
      "07:00 Wake",
      "07:30 Treadmill with educational videos",
      "09:00 Deep work and reading",
      "12:30 Lunch",
      "14:00 Meetings and reviews",
      "18:30 Family and reading",
      "23:00 Sleep",
    ],
    source:
      "https://www.cnbc.com/2017/10/13/bill-gates-reads-papers-and-watches-educational-videos-while-on-the-treadmill.html",
  },
  {
    name: "Satya Nadella",
    title: "Microsoft chief executive",
    quote: "The learn it all does better than the know it all.",
    profile: "Led Microsoft through a cloud and culture shift.",
    success: "Azure growth and AI strategy.",
    contrib: "Empathy led leadership and growth mindset culture.",
    schedule: [
      "06:30 Wake and reading",
      "08:00 Email review and planning",
      "10:00 Product and partner calls",
      "12:30 Lunch",
      "14:00 Reviews",
      "18:30 Family time",
      "22:30 Sleep",
    ],
    source:
      "https://www.linkedin.com/pulse/microsofts-satya-nadella-daily-routine-habits-productivity-nitin-chhoda",
  },
  {
    name: "Sundar Pichai",
    title: "Alphabet chief executive",
    quote: "Wear your failures as a badge of honour.",
    profile: "Product leader turned chief executive at Google.",
    success: "Android, Chrome and AI growth.",
    contrib: "Scaled products to billions of users.",
    schedule: [
      "06:30 Wake and tea reading news",
      "08:30 Office hours",
      "12:30 Lunch",
      "14:00 Product reviews",
      "18:30 Family time",
      "22:00 Sleep",
    ],
    source:
      "https://www.republicworld.com/technology-news/tech-news/sundar-pichai-reveals-his-daily-routine-and-morning-habits-articleshow.html",
  },
  {
    name: "Marie Kondo",
    title: "Author and organiser",
    quote:
      "The question of what you want to own is actually a question of how you want to live your life.",
    profile: "Popularised the KonMari method of tidying.",
    success: "Best selling books and Netflix series.",
    contrib: "Helped millions declutter with joy.",
    schedule: [
      "06:00 Wake",
      "06:30 Tidy and gratitude",
      "08:00 Work blocks",
      "12:00 Lunch",
      "14:00 Client work or writing",
      "18:00 Family time",
      "22:00 Sleep",
    ],
    source:
      "https://www.theguardian.com/lifeandstyle/2019/jan/05/marie-kondo-life-changing-magic-of-tidying-up",
  },
  {
    name: "Michelle Obama",
    title: "Author and former First Lady",
    quote:
      "Success is not about how much money you make, it is about the difference you make in people’s lives.",
    profile: "Lawyer and advocate for girls education and healthy families.",
    success: "Bestselling author and global role model.",
    contrib: "Let Girls Learn, Reach Higher and community work.",
    schedule: [
      "06:00 Workout",
      "07:00 Breakfast with family",
      "09:00 Writing and projects",
      "12:30 Lunch",
      "14:00 Events and meetings",
      "18:00 Family time",
      "22:00 Sleep",
    ],
    source:
      "https://www.washingtonpost.com/lifestyle/style/michelle-obama-workout-routine/2013/10/16/8d9f6fa2-3698-11e3-8a0e-4e2cf80831fc_story.html",
  },
  {
    name: "Mark Zuckerberg",
    title: "Founder of Meta",
    quote: "The biggest risk is not taking any risk.",
    profile: "Built one of the largest social platforms.",
    success: "Products used by billions worldwide.",
    contrib: "Philanthropy through the Chan Zuckerberg Initiative.",
    schedule: [
      "07:00 Wake",
      "07:30 Run or workout",
      "09:00 Product work",
      "12:30 Lunch",
      "14:00 Reviews",
      "18:30 Family time",
      "23:00 Sleep",
    ],
    source:
      "https://www.cnbc.com/2016/09/01/mark-zuckerberg-morning-routine-work-out-run.html",
  },
  {
    name: "Naval Ravikant",
    title: "Entrepreneur and investor",
    quote: "Earn with your mind, not your time.",
    profile:
      "Co founded AngelList and shares thoughts on wealth and happiness.",
    success: "Invested early in many tech companies.",
    contrib: "Philosophy on leverage, judgment and learning.",
    schedule: [
      "06:30 Wake and walk",
      "07:30 Reading and thinking",
      "10:00 Work blocks",
      "12:30 Lunch",
      "14:00 Calls",
      "18:30 Family and learning",
      "22:30 Sleep",
    ],
    source: "https://nav.al/",
  },
  {
    name: "Steve Jobs",
    title: "Apple co founder",
    quote:
      "Your time is limited, so do not waste it living someone else’s life.",
    profile: "Visionary behind Macintosh, iPhone and Pixar era.",
    success: "Changed personal computers, music and phones.",
    contrib: "Design focus and product excellence legacy.",
    schedule: [
      "06:00 Walk and think",
      "08:00 Work blocks and product reviews",
      "12:00 Lunch",
      "14:00 Design reviews",
      "18:00 Family",
      "22:30 Sleep",
    ],
    source: "https://news.stanford.edu/2005/06/14/jobs-061505/",
  },
  {
    name: "Jocko Willink",
    title: "Former Navy officer and author",
    quote: "Discipline equals freedom.",
    profile: "Leadership teacher with a focus on extreme ownership.",
    success: "Books and a popular podcast.",
    contrib: "Teaches practical leadership and ownership.",
    schedule: [
      "04:30 Wake and post time on watch",
      "05:00 Workout",
      "06:30 Write and plan",
      "09:00 Work blocks",
      "12:30 Lunch",
      "14:00 Calls and coaching",
      "21:30 Sleep",
    ],
    source: "https://www.instagram.com/jockowillink/",
  },
  {
    name: "Malala Yousafzai",
    title: "Education activist and Nobel laureate",
    quote:
      "One child, one teacher, one book, and one pen can change the world.",
    profile: "Campaigner for girls education and human rights.",
    success: "Youngest Nobel Peace Prize laureate.",
    contrib: "Malala Fund supports education programmes globally.",
    schedule: [
      "07:00 Wake and reading",
      "09:00 Studies and work",
      "12:30 Lunch",
      "14:00 Advocacy and writing",
      "18:00 Family time",
      "22:30 Sleep",
    ],
    source: "https://malala.org/",
  },
  {
    name: "Ada Lovelace",
    title: "Mathematician and early computing pioneer",
    quote: "That brain of mine is something more than merely mortal.",
    profile: "Wrote the first published algorithm for a computer engine.",
    success: "Pioneered ideas about computation and creativity.",
    contrib: "Inspired generations of engineers and scientists.",
    schedule: [
      "06:30 Reading and notes",
      "09:00 Study and mathematics",
      "12:30 Lunch",
      "14:00 Writing and correspondence",
      "18:00 Walk",
      "22:00 Sleep",
    ],
    source: "https://www.britannica.com/biography/Ada-Lovelace",
  },
  {
    name: "Jensen Huang",
    title: "Founder and chief executive of Nvidia",
    quote: "You have got to find something you love.",
    profile: "Chip industry leader who scaled GPUs into AI platforms.",
    success: "Guided Nvidia through gaming and AI breakthroughs.",
    contrib: "Popularised accelerated computing and CUDA ecosystem.",
    schedule: [
      "06:00 Wake and reading",
      "07:00 Emails and planning",
      "09:00 Product reviews and engineering sync",
      "12:30 Lunch",
      "14:00 Partner and customer meetings",
      "18:00 Family time",
      "23:00 Sleep",
    ],
    source: "https://www.ft.com/content/7d44f1f8-1e0c-4f46-9c77-2a4f1e5af3b1",
  },
  {
    name: "Sam Altman",
    title: "Entrepreneur and investor",
    quote: "The best way to predict the future is to invent it.",
    profile: "Founder and investor focused on AI and startups.",
    success: "Led Y Combinator and helped scale OpenAI products.",
    contrib: "Backed many companies and shared startup advice.",
    schedule: [
      "07:00 Wake and reflection",
      "08:00 Emails and notes",
      "09:30 Product and research reviews",
      "12:30 Lunch walk",
      "14:00 Meetings and writing",
      "18:30 Reading and family",
      "23:00 Sleep",
    ],
    source: "https://blog.samaltman.com/earnest-advice",
  },
  {
    name: "Brian Chesky",
    title: "Founder and chief executive of Airbnb",
    quote: "If you launch and you are not embarrassed, you launched too late.",
    profile: "Designer founder who helped define modern travel stays.",
    success: "Scaled Airbnb globally through design and community.",
    contrib: "Advocated for design thinking in company building.",
    schedule: [
      "06:30 Wake and sketch ideas",
      "08:00 Product reviews",
      "10:00 Team syncs",
      "12:30 Lunch",
      "14:00 Customer feedback sessions",
      "18:30 Walk and think",
      "22:30 Sleep",
    ],
    source: "https://www.fastcompany.com/3066992/inside-airbnbs-design-machine",
  },
  {
    name: "Anne Wojcicki",
    title: "Co founder and chief executive of 23andMe",
    quote: "Data gives people power over their health.",
    profile: "Biotech entrepreneur focused on consumer genetics.",
    success: "Built a leading consumer genetics platform.",
    contrib: "Advanced public engagement with personal genomics.",
    schedule: [
      "06:00 Wake and workout",
      "07:30 Breakfast with family",
      "09:00 Research and product sync",
      "12:30 Lunch",
      "14:00 Partner calls and reviews",
      "18:30 Family time",
      "22:30 Sleep",
    ],
    source:
      "https://www.cnbc.com/2017/05/05/anne-wojcicki-morning-routine.html",
  },
  {
    name: "Susan Wojcicki",
    title: "Former chief executive of YouTube",
    quote:
      "Opportunity is everywhere for those who are willing to work for it.",
    profile: "Early Google leader who later ran YouTube.",
    success: "Grew YouTube to billions of users and creators.",
    contrib: "Advocated for creators and responsible growth.",
    schedule: [
      "06:00 Wake",
      "06:30 Exercise",
      "08:00 Strategy and product reviews",
      "12:30 Lunch",
      "14:00 Partner and policy meetings",
      "18:30 Family dinner",
      "22:30 Sleep",
    ],
    source:
      "https://www.nytimes.com/2017/02/16/business/susan-wojcicki-youtube-corner-office.html",
  },
  {
    name: "Whitney Wolfe Herd",
    title: "Founder of Bumble",
    quote: "Build the kind of world you want to live in.",
    profile: "Entrepreneur focused on women first product design.",
    success: "Took Bumble public and grew global user base.",
    contrib: "Advocated for safety and kindness in tech products.",
    schedule: [
      "06:30 Wake and gratitude",
      "07:30 Breakfast with family",
      "09:00 Product and brand reviews",
      "12:30 Lunch",
      "14:00 Team meetings",
      "18:00 Wind down",
      "22:30 Sleep",
    ],
    source:
      "https://www.wsj.com/articles/bumble-whitney-wolfe-herd-11612858201",
  },
  {
    name: "Reed Hastings",
    title: "Co founder and executive chairman of Netflix",
    quote: "Do not tolerate brilliant jerks.",
    profile: "Pioneer of streaming and culture driven management.",
    success: "Scaled Netflix and reshaped media distribution.",
    contrib: "Shared widely read views on company culture.",
    schedule: [
      "06:00 Wake and read",
      "07:00 Exercise",
      "09:00 Product and content reviews",
      "12:30 Lunch",
      "14:00 Strategy sessions",
      "18:30 Family time",
      "22:30 Sleep",
    ],
    source:
      "https://www.inc.com/jessica-stillman/reed-hastings-netflix-no-meetings-mornings.html",
  },
  {
    name: "Angela Duckworth",
    title: "Psychologist and author",
    quote: "Grit is passion and perseverance for long term goals.",
    profile: "Researcher on grit and self control.",
    success: "Best selling author and educator.",
    contrib: "Applied psychology to education and performance.",
    schedule: [
      "06:00 Wake and write",
      "08:00 Research and teaching",
      "12:00 Lunch",
      "14:00 Experiments and analysis",
      "18:00 Family time",
      "22:00 Sleep",
    ],
    source: "https://angeladuckworth.com/",
  },

  {
    name: "James Clear",
    title: "Author",
    quote:
      "You do not rise to the level of your goals. You fall to the level of your systems.",
    profile: "Writer on habits and continuous improvement.",
    success: "Best selling book on habits and newsletter.",
    contrib: "Popularised small improvements as a method.",
    schedule: [
      "06:00 Wake and reading",
      "07:00 Writing",
      "10:00 Research and interviews",
      "12:30 Lunch",
      "14:00 Editing and publication",
      "18:30 Walk and reflect",
      "22:30 Sleep",
    ],
    source: "https://jamesclear.com/habits",
  },
  {
    name: "Ngozi Okonjo-Iweala",
    title: "Director-General of the World Trade Organization",
    quote: "Persevere. Focus. Deliver.",
    profile: "Economist and reformer at national and global levels.",
    success: "Led reforms and now heads the WTO.",
    contrib: "Advocates trade for development and inclusion.",
    schedule: [
      "05:30 Wake and reading",
      "07:00 Briefings",
      "09:00 Meetings and negotiations",
      "12:30 Working lunch",
      "14:00 Policy sessions",
      "18:30 Writing and family",
      "22:30 Sleep",
    ],
    source: "https://www.wto.org/english/news_e/news21_e/dgno_15feb21_e.htm",
  },
  {
    name: "Christine Lagarde",
    title: "President of the European Central Bank",
    quote: "Boldness and balance are both required.",
    profile: "Lawyer and economic leader in Europe.",
    success: "First woman to lead IMF and ECB.",
    contrib: "Advocated inclusion in economic policy.",
    schedule: [
      "05:45 Wake and exercise",
      "07:00 Briefings and prep",
      "09:00 Policy meetings",
      "12:30 Lunch",
      "14:00 Press and stakeholder calls",
      "18:30 Reading and notes",
      "23:00 Sleep",
    ],
    source:
      "https://www.ecb.europa.eu/ecb/orga/decisions/govc/html/index.en.html",
  },
  {
    name: "Demis Hassabis",
    title: "Co founder and chief executive of Google DeepMind",
    quote: "Intelligence is the most powerful problem solving tool.",
    profile: "Researcher and entrepreneur in AI.",
    success: "Led breakthroughs like AlphaGo and AlphaFold.",
    contrib: "Advanced applied deep learning and science.",
    schedule: [
      "06:30 Wake and run",
      "08:00 Research reviews",
      "10:00 Product and science sync",
      "12:30 Lunch",
      "14:00 Strategy and writing",
      "18:30 Family time",
      "23:00 Sleep",
    ],
    source: "https://deepmind.google/discover/blog/",
  },
  {
    name: "Fei-Fei Li",
    title: "Professor of computer science at Stanford",
    quote: "Human centred AI is about amplifying people.",
    profile: "Scientist who advanced computer vision and datasets.",
    success: "Co created ImageNet and led AI labs.",
    contrib: "Advocates human centred AI and education.",
    schedule: [
      "06:00 Wake and reading",
      "07:00 Family breakfast",
      "09:00 Research and teaching",
      "12:30 Lunch",
      "14:00 Lab meetings",
      "18:00 Community and writing",
      "22:30 Sleep",
    ],
    source: "https://hai.stanford.edu/",
  },
  {
    name: "Tony Robbins",
    title: "Author and coach",
    quote: "Where focus goes, energy flows.",
    profile: "Coach and philanthropist known for large events.",
    success: "Books, seminars and business ventures.",
    contrib: "Popularised tools for state and focus.",
    schedule: [
      "05:00 Wake and priming",
      "06:00 Workout and cold exposure",
      "08:00 Writing or planning",
      "12:30 Protein heavy lunch",
      "14:00 Coaching and calls",
      "18:30 Family",
      "23:00 Sleep",
    ],
    source: "https://www.cnbc.com/2017/01/09/tony-robbins-morning-routine.html",
  },
  {
    name: "Andrew Huberman",
    title: "Neuroscientist and professor",
    quote: "Leverage biology to improve your day.",
    profile: "Researcher who shares science based protocols.",
    success: "Popular science education on vision and behaviour.",
    contrib: "Bridged lab insights to practical routines.",
    schedule: [
      "06:00 Wake and sunlight",
      "06:30 Hydration and movement",
      "08:00 Research and writing",
      "12:30 Lunch",
      "14:00 Experiments and podcast prep",
      "18:30 Family time",
      "23:00 Sleep",
    ],
    source: "https://hubermanlab.com/toolkit-for-sleep/",
  },
  {
    name: "David Goggins",
    title: "Endurance athlete and author",
    quote: "Stay hard.",
    profile: "Known for mental toughness and extreme training.",
    success: "Set endurance records and wrote best sellers.",
    contrib: "Advocates accountability and resilience.",
    schedule: [
      "04:30 Wake and run",
      "06:30 Stretch and strength",
      "09:00 Writing and speaking",
      "12:30 Lunch",
      "14:00 Training second session",
      "18:30 Recovery and reading",
      "22:00 Sleep",
    ],
    source:
      "https://www.menshealth.com/fitness/a19546488/david-goggins-workout/",
  },
  {
    name: "Arianna Huffington",
    title: "Founder of Thrive Global",
    quote: "Sleep your way to the top.",
    profile: "Author and entrepreneur focused on wellbeing.",
    success: "Built media and later wellness company.",
    contrib: "Advocated sleep and burnout prevention.",
    schedule: [
      "06:00 Wake without alarm",
      "06:30 Gratitude and breathing",
      "08:00 Writing and product work",
      "12:30 Lunch",
      "14:00 Meetings",
      "18:00 Digital sunset",
      "22:00 Sleep",
    ],
    source:
      "https://thriveglobal.com/stories/arianna-huffington-morning-routine/",
  },
  {
    name: "Jacinda Ardern",
    title: "Former prime minister of New Zealand",
    quote: "Kindness and strength can and should coexist.",
    profile: "Leader noted for empathetic crisis response.",
    success: "Guided New Zealand through major events.",
    contrib: "Advocated wellbeing budgets and inclusion.",
    schedule: [
      "06:00 Wake",
      "06:30 Family breakfast",
      "08:30 Briefings",
      "12:30 Working lunch",
      "14:00 Meetings and community events",
      "18:30 Family time",
      "22:00 Sleep",
    ],
    source: "https://www.bbc.com/news/world-asia-64259914",
  },
  {
    name: "Huda Kattan",
    title: "Founder of Huda Beauty",
    quote: "Do not wait for permission to start.",
    profile: "Entrepreneur and creator in beauty industry.",
    success: "Built a global beauty brand from content.",
    contrib: "Scaled community driven product launches.",
    schedule: [
      "06:30 Wake and skincare",
      "08:00 Content and product reviews",
      "12:30 Lunch",
      "14:00 Team syncs",
      "18:00 Family and wind down",
      "22:30 Sleep",
    ],
    source: "https://www.forbes.com/profile/huda-kattan/",
  },
  {
    name: "Larry Page",
    title: "Co founder of Google and Alphabet board member",
    quote: "Always deliver more than expected.",
    profile: "Engineer founder who scaled Google search and bets on moonshots.",
    success: "Co created Google and supported Alphabet innovation.",
    contrib: "Search, ads, Android stewardship and X moonshots.",
    schedule: [
      "06:30 Wake and reading",
      "07:30 Family breakfast",
      "09:00 Product reviews",
      "12:30 Lunch",
      "14:00 Strategy and research",
      "18:30 Walk and think",
      "22:30 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Larry_Page",
  },
  {
    name: "Sergey Brin",
    title: "Co founder of Google",
    quote: "Solving big problems is easier than solving small problems.",
    profile: "Computer scientist who co created Google with Larry Page.",
    success: "Helped build Google into a global platform.",
    contrib: "Research, search quality and special projects.",
    schedule: [
      "06:30 Wake and exercise",
      "08:00 Technical reviews",
      "12:30 Lunch",
      "14:00 Research and labs",
      "18:30 Family time",
      "22:30 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Sergey_Brin",
  },
  {
    name: "Marc Benioff",
    title: "Founder and chief executive of Salesforce",
    quote: "The business of business is improving the state of the world.",
    profile: "Cloud software leader focused on stakeholder capitalism.",
    success: "Scaled Salesforce and popularised the subscription model.",
    contrib: "Philanthropy and the 1 percent pledge.",
    schedule: [
      "06:00 Wake and meditation",
      "07:00 Writing and planning",
      "09:00 Customer and product reviews",
      "12:30 Working lunch",
      "14:00 Meetings and philanthropy",
      "18:30 Family time",
      "22:30 Sleep",
    ],
    source: "https://www.salesforce.com/news/stories/marc-benioff/",
  },
  {
    name: "Linus Torvalds",
    title: "Creator of Linux and Git",
    quote: "Talk is cheap. Show me the code.",
    profile: "Software engineer who created the Linux kernel and Git.",
    success: "Led Linux kernel development used globally.",
    contrib: "Open source leadership and tooling.",
    schedule: [
      "06:30 Wake and mail triage",
      "08:00 Code reviews",
      "12:30 Lunch",
      "14:00 Patches and maintainer work",
      "18:00 Family time",
      "22:30 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Linus_Torvalds",
  },
  {
    name: "Ginni Rometty",
    title: "Former IBM chair and chief executive",
    quote: "Growth and comfort do not coexist.",
    profile: "Executive who led IBM through cloud and services shifts.",
    success: "Expanded hybrid cloud and services strategy.",
    contrib: "Workforce inclusion and education initiatives.",
    schedule: [
      "05:30 Wake and workout",
      "07:00 Briefings",
      "09:00 Client and product reviews",
      "12:30 Lunch",
      "14:00 Strategy sessions",
      "18:30 Family time",
      "22:00 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Ginni_Rometty",
  },
  {
    name: "Jane Goodall",
    title: "Primatologist and conservationist",
    quote:
      "What you do makes a difference, and you have to decide what kind of difference you want to make.",
    profile: "Scientist who transformed our understanding of chimpanzees.",
    success: "Decades of field research and conservation work.",
    contrib: "Roots and Shoots education and global activism.",
    schedule: [
      "06:00 Wake and reflection",
      "07:00 Writing and planning",
      "09:00 Field or outreach work",
      "12:30 Lunch",
      "14:00 Talks and meetings",
      "18:00 Reading",
      "22:00 Sleep",
    ],
    source: "https://www.janegoodall.org/",
  },
  {
    name: "Neil deGrasse Tyson",
    title: "Astrophysicist and science communicator",
    quote: "The universe is under no obligation to make sense to you.",
    profile: "Director of the Hayden Planetarium and author.",
    success: "Popularised science through books and media.",
    contrib: "STEM education and public engagement.",
    schedule: [
      "06:30 Wake and reading",
      "08:00 Writing",
      "10:00 Planetarium and research",
      "12:30 Lunch",
      "14:00 Media and lectures",
      "18:30 Family time",
      "23:00 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Neil_deGrasse_Tyson",
  },
  {
    name: "Katherine Johnson",
    title: "Mathematician and NASA trailblazer",
    quote: "We will always have STEM with us.",
    profile: "Calculated trajectories that enabled early spaceflight.",
    success: "Key calculations for Mercury and Apollo missions.",
    contrib: "Pioneer for women and Black Americans in STEM.",
    schedule: [
      "06:00 Reading and notes",
      "08:30 Mathematics and analysis",
      "12:30 Lunch",
      "14:00 Research and mentoring",
      "18:00 Family time",
      "22:00 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Katherine_Johnson",
  },
  {
    name: "Mary Barra",
    title: "General Motors chair and chief executive",
    quote: "Do not confuse activity with impact.",
    profile: "Engineer leader who is steering GM into EVs and software.",
    success: "Scaled EV strategy and modernised operations.",
    contrib: "Manufacturing excellence and inclusion.",
    schedule: [
      "05:30 Wake and workout",
      "07:00 Plant and product reviews",
      "12:30 Lunch",
      "14:00 Strategy and engineering",
      "18:30 Family time",
      "22:00 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Mary_Barra",
  },
  {
    name: "Ray Dalio",
    title: "Founder of Bridgewater Associates",
    quote: "Pain plus reflection equals progress.",
    profile: "Investor known for principles based management.",
    success: "Built one of the world’s largest hedge funds.",
    contrib: "Shared decision principles and economic frameworks.",
    schedule: [
      "06:00 Wake and meditation",
      "07:00 Reading and writing",
      "09:00 Research and meetings",
      "12:30 Lunch",
      "14:00 Investment reviews",
      "18:30 Family and reflection",
      "22:30 Sleep",
    ],
    source: "https://www.principles.com/",
  },
  {
    name: "Melinda French Gates",
    title: "Philanthropist and founder of Pivotal",
    quote: "A woman with a voice is by definition a strong woman.",
    profile: "Global health and equality advocate.",
    success: "Backed women’s economic power and health initiatives.",
    contrib: "Focused on opportunity and impact at scale.",
    schedule: [
      "06:00 Wake and exercise",
      "07:30 Family breakfast",
      "09:00 Philanthropy reviews",
      "12:30 Working lunch",
      "14:00 Field partner calls",
      "18:00 Reading",
      "22:00 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Melinda_French_Gates",
  },
  {
    name: "Ursula Burns",
    title: "Former Xerox chair and chief executive",
    quote: "Dreams do not work unless you do.",
    profile: "Engineer leader and first Black woman CEO of a Fortune 500.",
    success: "Reshaped Xerox and served on global boards.",
    contrib: "Advocacy for education and opportunity.",
    schedule: [
      "05:30 Wake and workout",
      "07:00 Briefings and planning",
      "09:00 Client and partner meetings",
      "12:30 Lunch",
      "14:00 Strategy and governance",
      "18:30 Family time",
      "22:30 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Ursula_Burns",
  },
  {
    name: "Angela Merkel",
    title: "Former chancellor of Germany",
    quote: "We can manage this.",
    profile: "Physicist turned stateswoman known for calm leadership.",
    success: "Led Germany for 16 years through multiple crises.",
    contrib: "Consensus building and European integration.",
    schedule: [
      "06:00 Wake and reading",
      "07:30 Briefings",
      "09:00 Policy meetings",
      "12:30 Working lunch",
      "14:00 EU and stakeholder calls",
      "18:30 Reading and notes",
      "23:00 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Angela_Merkel",
  },
  {
    name: "Pope Francis",
    title: "Head of the Catholic Church",
    quote: "The measure of greatness is service.",
    profile: "Religious leader focused on mercy and the poor.",
    success: "Reform focus and global outreach.",
    contrib: "Dialogue, humility and social teaching.",
    schedule: [
      "04:30 Wake and prayer",
      "06:00 Mass and reflection",
      "08:00 Audiences and work",
      "12:30 Lunch",
      "14:00 Meetings and writing",
      "18:30 Prayer and reading",
      "22:00 Sleep",
    ],
    source: "https://www.vatican.va/content/francesco/en.html",
  },
  {
    name: "Simone Biles",
    title: "Gymnast and Olympic champion",
    quote:
      "I would rather regret the risks that did not work out than the chances I did not take.",
    profile: "Most decorated gymnast with a focus on mental health.",
    success: "Multiple world and Olympic titles.",
    contrib: "Raised athlete wellbeing and safety.",
    schedule: [
      "06:00 Wake and nutrition",
      "07:00 Gym training",
      "10:00 Strength and recovery",
      "12:30 Lunch",
      "14:00 Skills and choreography",
      "18:00 Family time",
      "22:30 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Simone_Biles",
  },
  {
    name: "Roger Federer",
    title: "Tennis champion and philanthropist",
    quote: "There is no way around hard work.",
    profile: "Grand Slam champion and foundation founder.",
    success: "Records across surfaces with elegant play.",
    contrib: "Education through the Roger Federer Foundation.",
    schedule: [
      "06:30 Wake and mobility",
      "08:00 On court practice",
      "11:00 Strength and physio",
      "12:30 Lunch",
      "14:00 Recovery and meetings",
      "18:00 Family time",
      "22:30 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Roger_Federer",
  },
  {
    name: "LeBron James",
    title: "Basketball champion and entrepreneur",
    quote: "Nothing is given. Everything is earned.",
    profile: "NBA star with media and business ventures.",
    success: "Multiple championships and records.",
    contrib: "I PROMISE School and community work.",
    schedule: [
      "06:00 Wake and hydration",
      "07:00 Training and film",
      "10:00 Recovery and treatment",
      "12:30 Lunch",
      "14:00 Practice and team work",
      "18:30 Family and business",
      "23:00 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/LeBron_James",
  },
  {
    name: "Hayao Miyazaki",
    title: "Animator and film director",
    quote:
      "Many of my movies have strong female leads. Brave, self sufficient girls that do not think twice about fighting for what they believe in.",
    profile: "Studio Ghibli co founder and master storyteller.",
    success: "Beloved films with hand drawn craft.",
    contrib: "Inspired generations of animators.",
    schedule: [
      "06:00 Wake and tea",
      "07:30 Storyboards and sketches",
      "12:30 Lunch",
      "14:00 Animation reviews",
      "18:00 Walk and notes",
      "22:00 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Hayao_Miyazaki",
  },
  {
    name: "James Dyson",
    title: "Inventor and founder of Dyson",
    quote:
      "Enjoy failure and learn from it. You will never learn from success.",
    profile: "Engineer and designer known for vacuum and airflow tech.",
    success: "Built Dyson through relentless prototyping.",
    contrib: "Design education and engineering advocacy.",
    schedule: [
      "06:30 Wake and sketching",
      "08:30 Lab and prototypes",
      "12:30 Lunch",
      "14:00 Design reviews",
      "18:00 Writing and reading",
      "22:30 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/James_Dyson",
  },
  {
    name: "Sara Blakely",
    title: "Founder of Spanx",
    quote: "Do not be intimidated by what you do not know.",
    profile: "Entrepreneur who turned a simple product into a global brand.",
    success: "Built Spanx into a category defining company.",
    contrib: "Mentors women in business and philanthropy.",
    schedule: [
      "06:00 Wake and gratitude",
      "07:00 Family breakfast",
      "09:00 Product and brand reviews",
      "12:30 Lunch",
      "14:00 Team meetings and design",
      "18:00 Family time",
      "22:30 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Sara_Blakely",
  },
  {
    name: "Brené Brown",
    title: "Research professor and author",
    quote:
      "Vulnerability is not weakness. It is our greatest measure of courage.",
    profile: "Scholar who brought courage and empathy research to the public.",
    success: "Best selling books and widely viewed talks.",
    contrib: "Leadership education and evidence based tools.",
    schedule: [
      "06:00 Wake and reading",
      "07:30 Writing",
      "10:00 Research and teaching",
      "12:30 Lunch",
      "14:00 Workshops and recording",
      "18:00 Family time",
      "22:30 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Bren%C3%A9_Brown",
  },
  {
    name: "Susan Cain",
    title: "Author and speaker",
    quote:
      "There is a word for people who are in their heads too much. Thinkers.",
    profile: "Writer who championed introverts and quiet strength.",
    success: "Books and talks that reshaped workplace culture.",
    contrib: "Advocates calm focus and reflective work.",
    schedule: [
      "06:30 Wake and tea",
      "07:30 Writing and edits",
      "12:30 Lunch",
      "14:00 Research and interviews",
      "18:00 Reading walk",
      "22:00 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Susan_Cain",
  },
  {
    name: "Esther Duflo",
    title: "Economist and Nobel laureate",
    quote: "We need to focus on what works.",
    profile:
      "Development economist who uses field experiments to fight poverty.",
    success: "Nobel Prize for experimental approach to alleviating poverty.",
    contrib: "Evidence based policy for global development.",
    schedule: [
      "06:00 Wake and reading",
      "08:00 Research and writing",
      "12:30 Lunch",
      "14:00 Lab meetings and teaching",
      "18:00 Family time",
      "22:30 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Esther_Duflo",
  },
  {
    name: "Chimamanda Ngozi Adichie",
    title: "Author",
    quote: "We teach girls to shrink themselves.",
    profile: "Novelist and essayist whose work explores identity and voice.",
    success: "Award winning books and influential talks.",
    contrib: "Literary mentorship and cultural dialogue.",
    schedule: [
      "06:30 Wake and reading",
      "08:00 Writing",
      "12:30 Lunch",
      "14:00 Editing and correspondence",
      "18:30 Family and community",
      "23:00 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Chimamanda_Ngozi_Adichie",
  },
  {
    name: "Masayoshi Son",
    title: "Founder and chief executive of SoftBank",
    quote: "Stay foolish. Keep dreaming big.",
    profile: "Investor and operator with bold bets on technology.",
    success: "Built SoftBank into a global investment group.",
    contrib: "Backed telecoms and internet scaleups.",
    schedule: [
      "06:00 Wake and news scan",
      "07:30 Planning and notes",
      "09:00 Portfolio reviews",
      "12:30 Working lunch",
      "14:00 Partner meetings",
      "18:30 Family time",
      "23:00 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Masayoshi_Son",
  },

  {
    name: "Min-Liang Tan",
    title: "Co founder and chief executive of Razer",
    quote: "Build what you love to use.",
    profile: "Singaporean founder who turned gaming into design culture.",
    success: "Scaled Razer hardware, software and community.",
    contrib: "Gaming innovation and brand building.",
    schedule: [
      "06:30 Wake and emails",
      "08:00 Product and design reviews",
      "12:30 Lunch",
      "14:00 Partner calls",
      "18:00 Community and content",
      "23:00 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Min-Liang_Tan",
  },
  {
    name: "Forrest Li",
    title: "Founder and group chief executive of Sea",
    quote: "Think long term. Act with urgency.",
    profile: "Entrepreneur who built Sea in games, e commerce and fintech.",
    success: "Scaled Garena, Shopee and SeaMoney across the region.",
    contrib: "Regional tech ecosystem growth.",
    schedule: [
      "06:30 Wake and reading",
      "08:00 Product and metrics reviews",
      "12:30 Lunch",
      "14:00 Leadership and ops",
      "18:30 Family time",
      "22:30 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Forrest_Li",
  },
  {
    name: "Anne Boden",
    title: "Founder of Starling Bank",
    quote: "Purpose and profit can align.",
    profile: "Fintech founder who built a digital bank with real time tech.",
    success: "Grew Starling with strong customer focus.",
    contrib: "Open banking and modern payments.",
    schedule: [
      "06:00 Wake and walk",
      "07:30 Reading and notes",
      "09:00 Product and risk reviews",
      "12:30 Lunch",
      "14:00 Engineering and ops",
      "18:00 Community and writing",
      "22:30 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Anne_Boden",
  },
  {
    name: "Simon Sinek",
    title: "Author and speaker",
    quote: "People do not buy what you do. They buy why you do it.",
    profile: "Leadership teacher known for Start with Why.",
    success: "Books and talks used by teams worldwide.",
    contrib: "Practical frameworks for purpose and trust.",
    schedule: [
      "06:30 Wake and reading",
      "08:00 Writing",
      "11:00 Workshops and talks",
      "12:30 Lunch",
      "14:00 Research and interviews",
      "18:30 Reflection and notes",
      "22:30 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Simon_Sinek",
  },
  {
    name: "Yoshua Bengio",
    title: "Computer scientist and AI pioneer",
    quote: "We must build AI that is beneficial to humanity.",
    profile:
      "Researcher known for deep learning breakthroughs and ethical AI advocacy.",
    success: "Co-recipient of the Turing Award with Hinton and LeCun.",
    contrib: "Promotes safe, human-centred AI and education.",
    schedule: [
      "06:30 Wake and coffee",
      "07:30 Technical reading",
      "09:00 Lab meetings and research",
      "12:30 Lunch",
      "14:00 Teaching and writing",
      "18:00 Family time",
      "22:30 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Yoshua_Bengio",
  },
  {
    name: "Lisa Su",
    title: "Chief executive of AMD",
    quote: "Empower others to change the world.",
    profile:
      "Engineer-turned CEO who revived AMD into a major chip competitor.",
    success: "Launched Ryzen and EPYC processors, strong growth story.",
    contrib: "Role model for women in tech hardware leadership.",
    schedule: [
      "05:30 Wake and gym",
      "07:00 Strategy and product sync",
      "12:30 Lunch",
      "14:00 Partner calls",
      "18:30 Family time",
      "22:30 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Lisa_Su",
  },

  {
    name: "Mindy Kaling",
    title: "Writer, actor and producer",
    quote: "Laugh your way to being taken seriously.",
    profile: "Creator of hit TV shows and comedy properties.",
    success: "Multi-platform content creator and author.",
    contrib: "Representation and storytelling for women and people of color.",
    schedule: [
      "07:30 Wake and journaling",
      "08:30 Rehearsal or meeting",
      "12:30 Lunch",
      "14:00 Writing or production",
      "18:00 Reading or unwind",
      "22:30 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Mindy_Kaling",
  },
  {
    name: "Shinzo Abe",
    title: "Former Prime Minister of Japan",
    quote: "Fear is the greatest barrier to achieving goals.",
    profile: "Statesman who pursued structural reform and Japan’s global role.",
    success: "Longest-serving Japanese PM in history.",
    contrib: "Economic reform and diplomacy initiatives.",
    schedule: [
      "05:30 Wake",
      "06:00 Briefing",
      "09:00 Cabinet meetings",
      "12:30 Working lunch",
      "14:00 Policy drives",
      "18:00 Family time",
      "22:30 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Shinzo_Abe",
  },
  {
    name: "Naomi Osaka",
    title: "Tennis champion and advocate",
    quote: "Believe you are already the best.",
    profile:
      "Grand Slam winner who speaks up about mental health and equality.",
    success: "Multiple major titles and major brand influence.",
    contrib: "Athlete advocacy for wellness and social justice.",
    schedule: [
      "06:00 Wake and hydration",
      "07:00 Training and drills",
      "10:00 Recovery and media",
      "12:30 Lunch",
      "14:00 Business and practice",
      "18:00 Family time",
      "22:00 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Naomi_Osaka",
  },
  {
    name: "Tim Berners-Lee",
    title: "Inventor of the World Wide Web",
    quote: "The Web should serve humanity, not big business.",
    profile: "Computer scientist who created the Web and promotes open data.",
    success: "Gave us the web; continues to influence internet governance.",
    contrib: "Advocates for decentralised ethics and access for all.",
    schedule: [
      "06:30 Wake and reading",
      "08:00 Research and advocacy",
      "12:30 Lunch",
      "14:00 Meetings and writing",
      "18:00 Walk and reading",
      "22:00 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Tim_Berners-Lee",
  },
  {
    name: "Mary Kom",
    title: "Boxing champion and politician",
    quote: "My strength came from breaking my own limits.",
    profile:
      "Indian boxer who won multiple world championships and Olympic medal.",
    success: "Multiple world titles and national hero.",
    contrib: "Women's sport promotion and grassroots development.",
    schedule: [
      "05:30 Wake and run",
      "07:00 Training and sparring",
      "12:30 Lunch",
      "14:00 Recovery and philanthropy",
      "18:00 Family time",
      "22:30 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Mary_Kom",
  },
  {
    name: "Greta Thunberg",
    title: "Climate activist",
    quote: "I want you to act as if your house is on fire. Because it is.",
    profile: "Teen climate leader known for global activism.",
    success: "Global movement and UN speeches.",
    contrib: "Youth climate policy and awareness.",
    schedule: [
      "07:00 Wake and reading",
      "08:00 Activism and briefing",
      "12:30 Lunch",
      "14:00 Campaigns and speeches",
      "18:00 Family time",
      "22:00 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Greta_Thunberg",
  },
  {
    name: "Igor Sikorsky",
    title: "Aviation pioneer",
    quote: "Engineers must dare to do the impossible.",
    profile: "Created early helicopters and advanced flight design.",
    success: "Founded Sikorsky Aircraft and changed aviation.",
    contrib: "Innovation in aircraft and rotorcraft.",
    schedule: [
      "05:00 Wake and review",
      "06:00 Workshop time",
      "10:00 Design testing",
      "12:30 Lunch",
      "14:00 Prototyping",
      "18:00 Reflect and sketch",
      "22:30 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Igor_Sikorsky",
  },
  {
    name: "Geoffrey Hinton",
    title: "Pioneer of deep learning",
    quote: "The brain has a lot to teach us.",
    profile: "Researcher whose work underpins modern neural nets.",
    success: "Helped spark the current AI wave via backprop & deep nets.",
    contrib: "Mentored generations; advances in representation learning.",
    schedule: [
      "06:30 Wake and tea",
      "07:00 Reading and thinking",
      "09:00 Research and writing",
      "12:30 Lunch",
      "14:00 Lab discussions",
      "18:00 Walk and reflect",
      "22:30 Sleep",
    ],
    source: "https://en.wikipedia.org/wiki/Geoffrey_Hinton",
  },
];

// Female mentors for voice selection
const FEMALE_MENTORS = new Set([
  "Oprah Winfrey",
  "Indra Nooyi",
  "Serena Williams",
  "Sheryl Sandberg",
  "Marie Kondo",
  "Michelle Obama",
  "Malala Yousafzai",
  "Ada Lovelace",
  "Whitney Wolfe Herd",
  "Anne Wojcicki",
  "Susan Wojcicki",
  "Angela Duckworth",
  "Fei-Fei Li",
  "Arianna Huffington",
  "Jacinda Ardern",
  "Huda Kattan",
  "Ginni Rometty",
  "Jane Goodall",
  "Mary Barra",
  "Melinda French Gates",
  "Ursula Burns",
  "Angela Merkel",
  "Simone Biles",
  "Sara Blakely",
  "Brené Brown",
  "Susan Cain",
  "Esther Duflo",
  "Chimamanda Ngozi Adichie",
  "Anne Boden",
  "Sara Blakely",
  "Brené Brown",
  "Susan Cain",
  "Esther Duflo",
  "Chimamanda Ngozi Adichie",
  "Naomi Osaka",
  "Mary Kom",
  "Greta Thunberg",
]);
const isFemaleMentor = (name) => FEMALE_MENTORS.has(name);

const state = {
  filtered: mentors,
  selected: null,
};
function baseGreeting() {
  const hours = new Date().getHours();
  return hours < 12
    ? "Good morning"
    : hours < 18
    ? "Good afternoon"
    : "Good evening";
}

function formatToday() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dateEl = document.getElementById("today-date");
  if (dateEl) dateEl.textContent = now.toLocaleDateString(undefined, options);

  const greetingEl = document.getElementById("greeting");
  if (greetingEl) greetingEl.textContent = baseGreeting();
}

// ==== AGE HELPERS START ====

// Cache ages so we do not query repeatedly
const ageCache = new Map();

/**
 * Get Wikidata ID for a given Wikipedia title
 * Uses the MediaWiki Action API to fetch pageprops.wikibase_item
 */
async function getWikidataId(title) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(
    title
  )}&prop=pageprops&format=json&origin=*`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  const pages = data?.query?.pages || {};
  const first = Object.values(pages)[0];
  return first?.pageprops?.wikibase_item || null;
}

/**
 * Fetch birth and death dates from Wikidata for a given entity ID
 * Returns { birthISO, deathISO, precisionBirth } where ISO strings are like 1960-11-01
 * precisionBirth is Wikidata precision for birth date so we can be honest when only year is known
 */
async function getBirthDeathFromWikidata(wdId) {
  if (!wdId) return { birthISO: null, deathISO: null, precisionBirth: null };

  const url = `https://www.wikidata.org/wiki/Special:EntityData/${wdId}.json`;
  const res = await fetch(url);
  if (!res.ok) return { birthISO: null, deathISO: null, precisionBirth: null };

  const data = await res.json();
  const entity = data?.entities?.[wdId];
  const claims = entity?.claims || {};

  const getISO = (p, outPrecision = false) => {
    const cl = claims[p]?.[0]?.mainsnak?.datavalue?.value;
    if (!cl || !cl.time)
      return outPrecision ? { iso: null, precision: null } : null;
    // cl.time is like +1960-11-01T00:00:00Z
    const time = cl.time.replace(/^\+/, "").split("T")[0];
    const precision = cl.precision || null; // 9 year, 10 month, 11 day in Wikidata
    return outPrecision ? { iso: time, precision } : time;
  };

  const birthObj = getISO("P569", true);
  const deathObj = getISO("P570", true);

  return {
    birthISO: birthObj.iso,
    deathISO: deathObj.iso,
    precisionBirth: birthObj.precision,
  };
}

/**
 * Compute age in whole years from an ISO date string, as of "now"
 * If deathISO is provided, returns age at death
 */
function computeAgeYears(birthISO, deathISO = null) {
  if (!birthISO) return null;
  const today = new Date();
  const end = deathISO ? new Date(deathISO) : today;
  const [y, m = "01", d = "01"] = birthISO.split("-");
  let age = end.getFullYear() - parseInt(y, 10);
  const endMonth = end.getMonth() + 1;
  const endDay = end.getDate();
  if (
    endMonth < parseInt(m, 10) ||
    (endMonth === parseInt(m, 10) && endDay < parseInt(d, 10))
  ) {
    age -= 1;
  }
  return age;
}

/**
 * High level helper to get a friendly age string for a mentor name
 * Returns cached result when available.
 * Examples:
 *  "64 years old"
 *  "Died at 56 in 2011"
 *  "Born 1974" when only year is known
 */
async function getAgeStringForName(name) {
  if (ageCache.has(name)) return ageCache.get(name);

  // Step 1: get Wikidata ID for this Wikipedia title
  const wdId = await getWikidataId(name);
  if (!wdId) {
    ageCache.set(name, "");
    return "";
  }

  // Step 2: get birth and death from Wikidata
  const { birthISO, deathISO, precisionBirth } =
    await getBirthDeathFromWikidata(wdId);

  // Step 3: format
  let result = "";
  if (birthISO && !deathISO) {
    // Living
    if (precisionBirth === 11 /* day */ || precisionBirth === 10 /* month */) {
      const age = computeAgeYears(birthISO);
      if (age != null) result = `${age} years old`;
    } else if (precisionBirth === 9 /* year only */) {
      const year = birthISO.split("-")[0];
      result = `Born ${year}`;
    }
  } else if (birthISO && deathISO) {
    const ageAtDeath = computeAgeYears(birthISO, deathISO);
    const yearD = deathISO.split("-")[0];
    result = `Died at ${ageAtDeath} in ${yearD}`;
  }

  ageCache.set(name, result);
  return result;
}
// ==== AGE HELPERS END ====

const wikiCache = new Map();

function fetchWikiThumbList(name) {
  if (wikiCache.has(name)) return Promise.resolve(wikiCache.get(name));
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
    name
  )}`;
  return fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject()))
    .then((data) => {
      const result = {
        thumb: data.thumbnail?.source || data.originalimage?.source || "",
        extract: data.extract || "",
        page:
          data.content_urls?.desktop?.page ||
          data.content_urls?.mobile?.page ||
          "",
      };
      wikiCache.set(name, result);
      return result;
    })
    .catch(() => {
      const fallback = { thumb: "", extract: "", page: "" };
      wikiCache.set(name, fallback);
      return fallback;
    });
}

let wikiDetailAbort = null;

async function fetchWikiThumb(name) {
  if (wikiCache.has(name)) return wikiCache.get(name);
  try {
    if (wikiDetailAbort) wikiDetailAbort.abort();
    wikiDetailAbort = new AbortController();
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
      name
    )}`;
    const res = await fetch(url, { signal: wikiDetailAbort.signal });
    if (!res.ok) throw new Error("No wiki summary");
    const data = await res.json();
    const result = {
      thumb: data.thumbnail?.source || data.originalimage?.source || "",
      extract: data.extract || "",
      page:
        data.content_urls?.desktop?.page ||
        data.content_urls?.mobile?.page ||
        "",
    };
    wikiCache.set(name, result);
    return result;
  } catch {
    const fallback = { thumb: "", extract: "", page: "" };
    wikiCache.set(name, fallback);
    return fallback;
  } finally {
    wikiDetailAbort = null;
  }
}

let selecting = false;

const SELECTED_KEY = "mswc_selected";

async function selectMentor(name) {
  if (selecting) return;
  selecting = true;
  try {
    const m = mentors.find((x) => x.name === name);
    if (!m) return;

    state.selected = m;
    safeSet(SELECTED_KEY, m.name); // persist selection

    const meta = await fetchWikiThumb(m.name);

    const nameEl = document.getElementById("mentorName");
    if (nameEl) nameEl.textContent = m.name;

    const titleEl = document.getElementById("mentorTitle");
    if (titleEl) titleEl.textContent = m.title;

    // speakable quote, remove surrounding quotes if any
    const q = m.quote.trim().replace(/^"|"$/g, "");
    const quoteEl = document.getElementById("mentorQuote");
    if (quoteEl) quoteEl.textContent = `"${q}"`;

    const username = safeGet("mswc_username") || "friend";

    const profileEl = document.getElementById("mentorProfile");
    if (profileEl) profileEl.textContent = `${meta.extract || m.profile}`;

    const successEl = document.getElementById("mentorSuccess");
    if (successEl) successEl.textContent = m.success;

    const contribEl = document.getElementById("mentorContrib");
    if (contribEl) contribEl.textContent = m.contrib;

    const photoEl = document.getElementById("mentorPhoto");
    if (photoEl) {
      photoEl.src =
        meta.thumb ||
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";
      photoEl.alt = `Photo of ${m.name}`;
      photoEl.loading = "lazy";
      photoEl.decoding = "async";
      photoEl.fetchPriority = "low";
    }

    const grid = document.getElementById("scheduleGrid");
    const tpl = document.getElementById("timeBlockTpl");
    if (grid && tpl) {
      grid.innerHTML = "";
      m.schedule.forEach((block) => {
        const el = tpl.content.firstElementChild.cloneNode(true);
        el.textContent = block;
        grid.appendChild(el);
      });
    }

    const link = document.getElementById("sourceLink");
    if (link) {
      link.href = m.source || meta.page || "#";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }

    const greetEl = document.getElementById("greeting");
    if (greetEl) {
      greetEl.textContent = `${baseGreeting()} ${username}, this is ${
        m.name
      }. I am rooting for you.`;
    }

    // Announce details updates for screen readers (put aria-live on the details wrapper in your HTML)
    const detailsRegion = document.getElementById("mentorDetails");
    if (detailsRegion) {
      detailsRegion.setAttribute("aria-live", "polite");
      detailsRegion.setAttribute("aria-atomic", "true");
    }

    const ageEl = document.getElementById("mentorAge");
    if (ageEl) {
      ageEl.textContent = " ";
      try {
        const ageStr = await getAgeStringForName(m.name);
        ageEl.textContent = ageStr || "";
        ageEl.title = ageStr ? `Age info via Wikidata for ${m.name}` : "";
      } catch {
        ageEl.textContent = "";
      }
    }

    stopSpeech();
  } finally {
    selecting = false;
  }
}

function setupCopy() {
  const btn = document.getElementById("copyScheduleBtn");
  if (!btn || btn.dataset.bound === "1") return;
  btn.dataset.bound = "1";
  btn.addEventListener("click", async () => {
    const m = state.selected;
    const blocks = Array.from(document.querySelectorAll(".time-block")).map(
      (b) => b.textContent.trim()
    );
    const header = m ? `${m.name} — ${m.title}` : "Mentor schedule";
    const sourceLine = m && m.source ? `\nSource: ${m.source}` : "";
    const text = `${header}\n${blocks.join("\n")}${sourceLine}`;
    try {
      await navigator.clipboard.writeText(text);
      alert("Timetable copied. You have got this.");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      alert("Timetable copied. You have got this.");
    }
  });
}

const clean = (s) => (s || "").replace(/[\u0000-\u001F\u007F]/g, "").trim();

function uniqueName(base) {
  let name = base,
    i = 2;
  while (mentors.some((m) => m.name === name)) name = `${base} (${i++})`;
  return name;
}

function setupAddMentor() {
  document
    .getElementById("addMentorBtn")
    .addEventListener("click", async () => {
      let name = clean(prompt("Name of your mentor"));
      if (!name) return;
      name = uniqueName(name);
      const title = clean(prompt("Title or role")) || "Mentor";
      const quote = clean(prompt("Favourite quote")) || "Stay curious.";
      const block =
        clean(
          prompt(
            "Enter your first schedule block, for example 06:30 Wake and stretch"
          )
        ) || "06:30 Wake and stretch";

      const custom = {
        name,
        title,
        quote,
        profile: "Custom mentor you created.",
        success: "Write your success definition here.",
        contrib: "Note contributions that inspire you.",
        schedule: [
          block,
          "08:00 Deep work",
          "12:30 Lunch",
          "14:00 Focus blocks",
          "18:00 Family time",
          "22:30 Sleep",
        ],
        source: "",
      };
      mentors.push(custom);
      state.filtered = mentors;
      renderList();
      selectMentor(custom.name);
      saveCustomMentors();
    });
}

function init() {
  formatToday();
  loadCustomMentors();
  state.filtered = mentors;

  const remembered = safeGet(SELECTED_KEY);
  const initialName =
    mentors.find((x) => x.name === remembered)?.name || mentors[0]?.name;

  if (initialName) {
    state.selected = mentors.find((x) => x.name === initialName);
    selectMentor(initialName);
  }

  setupSearch();
  setupCopy();
  setupAddMentor();
  renderList();

  initVoices();
  const playBtn = document.getElementById("ttsPlay");
  const stopBtn = document.getElementById("ttsStop");
  const rate = document.getElementById("voiceRate");
  const rateVal = document.getElementById("rateVal");
  if (rate && rateVal)
    rateVal.textContent = parseFloat(rate.value || "1").toFixed(1);

  if (playBtn) playBtn.addEventListener("click", speakQuote);
  if (stopBtn) stopBtn.addEventListener("click", stopSpeech);
  if (rate) {
    rate.addEventListener("input", () => {
      rateVal.textContent = parseFloat(rate.value).toFixed(1);
      if (currentUtterance) {
        stopSpeech();
        speakQuote();
      }
    });
  }
}

function pickGoogleVoice(preferFemale) {
  if (!voices || !voices.length) return null;

  const isEnglish = (v) => v.lang && v.lang.toLowerCase().startsWith("en");
  const en = voices.filter(isEnglish);

  // Heuristics:
  // - Some browsers expose "Google US English", "Google UK English Male", etc.
  // - Others expose Cloud TTS-like names (Wavenet/Standard A..J). Common convention:
  //   A,C,E,G,I ~ male  |  B,D,F,H,J ~ female
  const genderOf = (v) => {
    const n = (v.name || "").toLowerCase();

    if (/\bfemale\b/.test(n)) return "female";
    if (/\bmale\b/.test(n)) return "male";

    // Wavenet/Standard code letters
    // Match last letter token like "-A", " Wavenet B", " Standard J"
    const letterMatch =
      n.match(/\b(?:wavenet|standard)\s*([a-j])\b/i) ||
      n.match(/-(?:[a-z]{2,}\d?-)?([a-j])\b/i); // e.g., "en-US-Neural2-A"
    if (letterMatch) {
      const letter = letterMatch[1].toUpperCase();
      return "BDFHJ".includes(letter)
        ? "female"
        : "ACEGI".includes(letter)
        ? "male"
        : null;
    }

    // Some names are like "Google UK English Female" vs "Google US English"
    // If it says "Google ... Female/Male" we'll have caught above. Otherwise unknown.
    return null;
  };

  const googleEN = en.filter((v) => /google/i.test(v.name));
  const googleFemale = googleEN.filter((v) => genderOf(v) === "female");
  const googleMale = googleEN.filter((v) => genderOf(v) === "male");

  const nonGoogleFemale = en.filter(
    (v) => !/google/i.test(v.name) && genderOf(v) === "female"
  );
  const nonGoogleMale = en.filter(
    (v) => !/google/i.test(v.name) && genderOf(v) === "male"
  );

  if (preferFemale) {
    // Prefer clearly female Google → any female English → any Google EN → any EN → any
    return (
      googleFemale[0] ||
      nonGoogleFemale[0] ||
      googleEN[0] ||
      en[0] ||
      voices[0] ||
      null
    );
  } else {
    // Prefer clearly male Google → any male English → any Google EN → any EN → any
    return (
      googleMale[0] ||
      nonGoogleMale[0] ||
      googleEN[0] ||
      en[0] ||
      voices[0] ||
      null
    );
  }
}

function debounce(fn, ms = 150) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}
function setupSearch() {
  const input = document.getElementById("searchInput");
  if (!input) return;
  input.addEventListener(
    "input",
    debounce(() => {
      const q = input.value.toLowerCase();
      state.filtered = mentors.filter(
        (m) =>
          m.name.toLowerCase().includes(q) || m.title.toLowerCase().includes(q)
      );
      renderList();
    }, 120)
  );
}

document.addEventListener("DOMContentLoaded", () => {
  init();
  // nudge voices once more after a tick
  setTimeout(() => {
    if (
      window.speechSynthesis &&
      typeof window.speechSynthesis.getVoices === "function"
    ) {
      const v = window.speechSynthesis.getVoices();
      if (v && v.length) initVoices();
    }
  }, 500);
});

// Global speech state
let voices = [];
let currentUtterance = null;
const $ = (id) => document.getElementById(id);
const setText = (id, text) => {
  const el = $(id);
  if (el) el.textContent = text;
};

// Load voices (no UI options; we will pick automatically)
function initVoices() {
  if (!("speechSynthesis" in window)) return;

  const populate = () => {
    voices = window.speechSynthesis.getVoices() || [];
  };

  populate();
  if ("onvoiceschanged" in window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = populate;
  }
}

function speakQuote() {
  const quoteEl = document.getElementById("mentorQuote");
  if (!quoteEl || !quoteEl.textContent.trim()) return;
  stopSpeech();

  const text = quoteEl.textContent.trim().replace(/^"|"$/g, "");
  const u = new SpeechSynthesisUtterance(text);

  const preferFemale = state.selected
    ? isFemaleMentor(state.selected.name)
    : false;
  const chosen = pickGoogleVoice(preferFemale);
  if (chosen) u.voice = chosen;

  // Speed slider
  const rateInput = document.getElementById("voiceRate");
  u.rate = rateInput ? parseFloat(rateInput.value) || 1.0 : 1.0;

  // Gentle pitch hint: slightly higher for female, slightly lower for male
  u.pitch = preferFemale ? 1.1 : 0.95;

  u.onend = () => {
    currentUtterance = null;
  };
  u.onerror = () => {
    currentUtterance = null;
  };

  currentUtterance = u;
  window.speechSynthesis.speak(u);
}

// Stop speaking
function stopSpeech() {
  if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
    window.speechSynthesis.cancel();
  }
  currentUtterance = null;
}

const CUSTOM_KEY = "mswc_custom_mentors";

function loadCustomMentors() {
  try {
    const saved = JSON.parse(safeGet(CUSTOM_KEY) || "[]");
    if (Array.isArray(saved)) mentors.push(...saved);
  } catch {}
}

function saveCustomMentors() {
  const baseNames = new Set(mentors.slice(0, 20).map((m) => m.name));
  const customs = mentors.filter((m) => !baseNames.has(m.name));
  safeSet(CUSTOM_KEY, JSON.stringify(customs));
}

function safeGet(k) {
  try {
    return localStorage.getItem(k);
  } catch {
    return null;
  }
}
function safeSet(k, v) {
  try {
    localStorage.setItem(k, v);
  } catch {}
}

let selectedBtn = null;

function renderList() {
  const list = document.getElementById("mentorList");
  if (!list) return;
  list.innerHTML = "";
  const tpl = document.getElementById("mentorItemTpl");
  state.filtered.forEach((m, idx) => {
    const btn = tpl.content.firstElementChild.cloneNode(true);
    btn.classList.add("mentor-item");

    btn.setAttribute("role", "button");
    btn.setAttribute("tabindex", "0");
    btn.setAttribute(
      "aria-pressed",
      state.selected?.name === m.name ? "true" : "false"
    );

    btn.textContent = m.name;
    btn.title = m.title;

    if (state.selected && state.selected.name === m.name) {
      btn.classList.add("is-active");
      selectedBtn = btn;
    }

    const activate = async () => {
      await selectMentor(m.name);
      if (selectedBtn) {
        selectedBtn.classList.remove("is-active");
        selectedBtn.setAttribute("aria-pressed", "false");
      }
      btn.classList.add("is-active");
      btn.setAttribute("aria-pressed", "true");
      selectedBtn = btn;
      btn.focus();
    };

    btn.addEventListener("click", activate);
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        activate();
      }
      if (
        (e.key === "ArrowDown" || e.key === "ArrowUp") &&
        list.children.length
      ) {
        const dir = e.key === "ArrowDown" ? 1 : -1;
        const next = (idx + dir + list.children.length) % list.children.length;
        list.children[next].focus();
      }
    });

    fetchWikiThumbList(m.name).then((meta) => {
      if (!list || !list.contains(btn)) return;

      const img = new Image();
      img.width = 40;
      img.height = 40;
      img.alt = `${m.name}`;
      img.loading = "lazy";
      img.decoding = "async";
      img.fetchPriority = "low";
      img.src =
        meta.thumb ||
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";
      btn.prepend(img);
    });

    list.appendChild(btn);
  });
}

// Save a friendly name once so the mentor can greet
(function askUsernameOnce() {
  if (!safeGet("mswc_username")) {
    const u = clean(prompt("What should mentors call you"));
    if (u) safeSet("mswc_username", u);
  }
})();
