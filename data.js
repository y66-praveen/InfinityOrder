// MCU Watch Order Guide — data
// Each item: saga, title, type ("movie" | "show"), year, month (1-12, null if TBA), desc (spoiler-free)

const DATA = {
  "Main MCU": [
    { title: "Iron Man", type: "movie", year: 2008, month: 5, desc: "A billionaire inventor builds a powerful suit of armor after a life changing event and decides to use his technology to protect others." },

    { title: "The Incredible Hulk", type: "movie", year: 2008, month: 6, desc: "A scientist searches for a cure while staying one step ahead of those who want to turn his condition into a weapon." },

    { title: "Iron Man 2", type: "movie", year: 2010, month: 5, desc: "As new enemies emerge and political pressure grows, Tony Stark faces challenges that test both his technology and himself." },

    { title: "Thor", type: "movie", year: 2011, month: 5, desc: "A proud prince is cast out of his kingdom and must learn humility before he can reclaim his place." },

    { title: "Captain America: The First Avenger", type: "movie", year: 2011, month: 7, desc: "A determined young man becomes a super soldier during World War II and fights a dangerous enemy organization." },

    { title: "The Avengers", type: "movie", year: 2012, month: 5, desc: "Earth's greatest heroes unite for the first time to stop an invasion that threatens the entire planet." },

    { title: "Iron Man 3", type: "movie", year: 2013, month: 5, desc: "Haunted by recent events, Tony Stark must rely on his ingenuity after a mysterious terrorist attacks his world." },

    { title: "Thor: The Dark World", type: "movie", year: 2013, month: 11, desc: "Thor faces an ancient enemy whose return threatens the Nine Realms and everyone he cares about." },

    { title: "Captain America: The Winter Soldier", type: "movie", year: 2014, month: 4, desc: "Steve Rogers uncovers a dangerous conspiracy hidden within the organization he trusts most." },

    { title: "Guardians of the Galaxy", type: "movie", year: 2014, month: 8, desc: "A group of unlikely outlaws joins forces to protect a mysterious object from falling into the wrong hands." },

    { title: "Avengers: Age of Ultron", type: "movie", year: 2015, month: 5, desc: "An attempt to create global peace instead unleashes a powerful new threat that endangers humanity." },

    { title: "Ant-Man", type: "movie", year: 2015, month: 7, desc: "A skilled thief receives incredible technology and a chance to become an unexpected hero." },

    { title: "Captain America: Civil War", type: "movie", year: 2016, month: 5, desc: "Political conflict divides the Avengers and forces old friends onto opposing sides." },

    { title: "Doctor Strange", type: "movie", year: 2016, month: 11, desc: "After a devastating accident, a brilliant surgeon enters a hidden world of magic and ancient knowledge." },

    { title: "Guardians of the Galaxy Vol. 2", type: "movie", year: 2017, month: 5, desc: "The Guardians face new dangers while uncovering long buried truths about one of their own." },

    { title: "Spider-Man: Homecoming", type: "movie", year: 2017, month: 7, desc: "Peter Parker balances high school life with the responsibility of proving himself as a superhero." },

    { title: "Thor: Ragnarok", type: "movie", year: 2017, month: 11, desc: "Thor must escape a distant world and stop an ancient force before his home is destroyed." },

    { title: "Black Panther", type: "movie", year: 2018, month: 2, desc: "The new king of Wakanda returns home to defend his nation from a powerful challenger." },

    { title: "Avengers: Infinity War", type: "movie", year: 2018, month: 4, desc: "Heroes from across the universe unite against a cosmic warlord seeking ultimate power." },

    { title: "Ant-Man and the Wasp", type: "movie", year: 2018, month: 7, desc: "A rescue mission draws Scott Lang and Hope van Dyne into the mysterious Quantum Realm." },

    { title: "Captain Marvel", type: "movie", year: 2019, month: 3, desc: "A powerful warrior uncovers the truth about her past while caught in an intergalactic conflict." },

    { title: "Avengers: Endgame", type: "movie", year: 2019, month: 4, desc: "The surviving heroes come together for one final mission to restore what was lost." },

    { title: "Spider-Man: Far From Home", type: "movie", year: 2019, month: 7, desc: "Peter Parker's European vacation is interrupted by unexpected threats and a mysterious new ally." },

    { title: "WandaVision", type: "show", year: 2021, month: 1, desc: "Wanda Maximoff and Vision find themselves living an unusual suburban life where reality does not seem quite right." },

    { title: "The Falcon and the Winter Soldier", type: "show", year: 2021, month: 3, desc: "Sam Wilson and Bucky Barnes embark on a global mission while confronting the legacy of Captain America." },

    { title: "Loki Season 1", type: "show", year: 2021, month: 6, desc: "An alternate version of Loki is recruited by a mysterious organization responsible for protecting the timeline." },

    { title: "Black Widow", type: "movie", year: 2021, month: 7, desc: "Natasha Romanoff reunites with figures from her past while confronting a dangerous conspiracy." },

    { title: "Shang-Chi and the Legend of the Ten Rings", type: "movie", year: 2021, month: 9, desc: "A skilled martial artist is drawn back into the secretive world he tried to leave behind." },

    { title: "Eternals", type: "movie", year: 2021, month: 11, desc: "A hidden group of immortal heroes reunites after centuries to face an ancient threat." },

    { title: "Hawkeye", type: "show", year: 2021, month: 11, desc: "Clint Barton teams up with a determined young archer during an eventful holiday season." },

    { title: "Spider-Man: No Way Home", type: "movie", year: 2021, month: 12, desc: "A magical spell has unexpected consequences that change Peter Parker's life forever." },

    { title: "Moon Knight", type: "show", year: 2022, month: 3, desc: "A man struggling with mysterious blackouts discovers he is connected to an ancient Egyptian power." },

    { title: "Doctor Strange in the Multiverse of Madness", type: "movie", year: 2022, month: 5, desc: "Doctor Strange journeys across dangerous realities to protect a young girl with extraordinary abilities." },

    { title: "Ms. Marvel", type: "show", year: 2022, month: 6, desc: "A teenager and lifelong superhero fan discovers that she has powers of her own." },

    { title: "Thor: Love and Thunder", type: "movie", year: 2022, month: 7, desc: "Thor reunites with old friends to stop a dangerous enemy who is hunting gods across the universe." },

    { title: "She-Hulk: Attorney at Law", type: "show", year: 2022, month: 8, desc: "A lawyer gains Hulk like abilities while trying to balance her professional and personal life." },

    { title: "Werewolf by Night", type: "movie", year: 2022, month: 10, desc: "Monster hunters gather for a deadly competition after the death of their legendary leader." },

    { title: "Black Panther: Wakanda Forever", type: "movie", year: 2022, month: 11, desc: "Wakanda faces powerful new threats while honoring the legacy of its fallen king." },

    { title: "The Guardians of the Galaxy Holiday Special", type: "movie", year: 2022, month: 11, desc: "The Guardians set out to give Peter Quill an unforgettable holiday celebration." },

    { title: "Ant-Man and the Wasp: Quantumania", type: "movie", year: 2023, month: 2, desc: "A family adventure leads deep into the Quantum Realm where a dangerous new enemy awaits." },

    { title: "Guardians of the Galaxy Vol. 3", type: "movie", year: 2023, month: 5, desc: "The Guardians undertake one final mission to save one of their own." },

    { title: "Secret Invasion", type: "show", year: 2023, month: 6, desc: "Nick Fury uncovers a secret infiltration that threatens the safety of Earth." },

    { title: "Loki Season 2", type: "show", year: 2023, month: 10, desc: "Loki and his allies race to prevent the collapse of the timelines." },

    { title: "The Marvels", type: "movie", year: 2023, month: 11, desc: "Three heroes discover their powers have become mysteriously connected, forcing them to work together." },

    { title: "Echo", type: "show", year: 2024, month: 1, desc: "Maya Lopez returns home and confronts the consequences of her past." },

    { title: "Deadpool & Wolverine", type: "movie", year: 2024, month: 7, desc: "Deadpool's ordinary life is disrupted when he is pulled into an unexpected mission alongside Wolverine." },

    { title: "Agatha All Along", type: "show", year: 2024, month: 9, desc: "Agatha Harkness embarks on a dangerous journey to regain what she has lost." },

    { title: "Captain America: Brave New World", type: "movie", year: 2025, month: 2, desc: "Sam Wilson faces an international crisis that places him at the center of a dangerous global conspiracy." },

    { title: "Daredevil: Born Again Season 1", type: "show", year: 2025, month: 3, desc: "Matt Murdock returns to the streets of New York as his personal and professional lives collide with an old enemy." },

    { title: "Thunderbolts*", type: "movie", year: 2025, month: 5, desc: "A group of unlikely antiheroes is brought together for a mission that forces them to confront their pasts." },

    { title: "Ironheart", type: "show", year: 2025, month: 6, desc: "A brilliant young inventor builds an advanced suit of armor and finds herself caught between technology and magic." },

    { title: "The Fantastic Four: First Steps", type: "movie", year: 2025, month: 7, desc: "Marvel's first family begins a new adventure as they face a threat unlike anything they have encountered before." },

    { title: "Wonder Man", type: "show", year: 2026, month: 1, desc: "An aspiring Hollywood actor unexpectedly finds himself connected to the world of superheroes." },

    { title: "Vision Quest", type: "show", year: 2026, month: 9, desc: "Vision continues his search for identity while trying to understand who he truly is." },

    { title: "Daredevil: Born Again Season 2", type: "show", year: 2026, month: 3, desc: "Matt Murdock's story continues as new challenges await both the lawyer and the vigilante." },

    { title: "Punisher: One Last Kill", type: "show", year: 2026, month: 5, desc: "Frank Castle searches for meaning beyond revenge, until an unexpected force pulls him back into the fight." },

    { title: "Spider-Man: Brand New Day", type: "movie", year: 2026, month: 7, desc: "Peter Parker begins a new chapter as Spider-Man while facing new responsibilities and new threats." },

    { title: "Avengers: Doomsday", type: "movie", year: 2026, month: 12, desc: "Heroes from across the Marvel Cinematic Universe unite against a powerful new enemy that threatens everything." },

    { title: "Avengers: Secret Wars", type: "movie", year: 2027, month: 12, desc: "The Multiverse Saga reaches its climactic conclusion as heroes from across realities fight for the fate of existence." }

  ],

  "Netflix Saga": [
    { title: "Daredevil Season 1", type: "show", year: 2015, month: 4, desc: "A blind lawyer by day becomes a masked vigilante by night to clean up the crime-ridden streets of his neighborhood." },
    { title: "Jessica Jones Season 1", type: "show", year: 2015, month: 11, desc: "A hard-drinking private investigator with hidden powers is pulled back into a nightmare from her past." },
    { title: "Daredevil Season 2", type: "show", year: 2016, month: 3, desc: "A vigilante's methods are challenged by a lethal new player and a former ally with a very different code." },
    { title: "Luke Cage Season 1", type: "show", year: 2016, month: 9, desc: "A man with unbreakable skin and super strength tries to keep a low profile, but his neighborhood needs a protector." },
    { title: "Iron Fist Season 1", type: "show", year: 2017, month: 3, desc: "A man believed dead for years returns home with a mystical martial arts power and a company to reclaim." },
    { title: "The Defenders", type: "show", year: 2017, month: 8, desc: "Four street-level heroes reluctantly join forces to stop a secretive organization from destroying their city." },
    { title: "The Punisher Season 1", type: "show", year: 2017, month: 11, desc: "A former soldier wages a brutal one-man war against the criminals responsible for his family's death." },
    { title: "Jessica Jones Season 2", type: "show", year: 2018, month: 3, desc: "An investigator digs into the origins of her powers, unearthing secrets she isn't prepared for." },
    { title: "Luke Cage Season 2", type: "show", year: 2018, month: 6, desc: "A hero's grip on his neighborhood is tested by a ruthless new rival and painful family history." },
    { title: "Iron Fist Season 2", type: "show", year: 2018, month: 9, desc: "A martial artist faces a challenger for his title while trying to protect the people he cares about." },
    { title: "Daredevil Season 3", type: "show", year: 2018, month: 10, desc: "Physically and emotionally shattered, a vigilante must rebuild himself while his greatest enemy walks free." },
    { title: "The Punisher Season 2", type: "show", year: 2019, month: 1, desc: "A vigilante's attempt at a quiet life is upended when he's drawn into protecting a stranger from a new threat." },
    { title: "Jessica Jones Season 3", type: "show", year: 2019, month: 6, desc: "An investigator faces a killer whose ambitions push her toward a line she has always tried not to cross." },
  ],
  "MCU Animated": [
    { title: "What If...? Season 1", type: "show", year: 2021, month: 8, desc: "An all-powerful watcher explores an anthology of pivotal moments unfolding very differently than expected." },
    { title: "What If...? Season 2", type: "show", year: 2023, month: 12, desc: "The multiverse of possibilities continues with more familiar heroes facing unfamiliar, twisted circumstances." },
    { title: "What If...? Season 3", type: "show", year: 2024, month: 12, desc: "The anthology series wraps up its exploration of the multiverse with a run of standalone alternate stories." },
    { title: "Marvel Zombies", type: "show", year: 2024, month: 10, desc: "A group of survivors bands together against a horde of the infected in a dark, action-horror spinoff." },
    { title: "Eyes of Wakanda", type: "show", year: 2025, month: 8, desc: "An anthology following Wakandan warriors on covert, dangerous missions across different eras of history." },
  ],
  "Alternate Animated": [
    { title: "X-Men '97", type: "show", year: 2024, month: 3, desc: "A beloved animated team of mutants continues its story into new territory, honoring its 90s roots." },
    { title: "Your Friendly Neighborhood Spider-Man Season 1", type: "show", year: 2025, month: 1, desc: "A fresh animated take on a young hero's earliest days learning what it means to wear the mask." },
  ],
  "Fox X-Men Universe": [
    { title: "X-Men", type: "movie", year: 2000, month: 7, desc: "A group of mutants with extraordinary abilities bands together to prevent an all-out war between mutants and humans." },
    { title: "X2: X-Men United", type: "movie", year: 2003, month: 5, desc: "A dangerous new enemy forces former rivals to work together to save both mutants and humankind." },
    { title: "X-Men: The Last Stand", type: "movie", year: 2006, month: 5, desc: "A cure for mutation sparks a divisive conflict, forcing a team to fight for its very survival." },
    { title: "X-Men Origins: Wolverine", type: "movie", year: 2009, month: 5, desc: "A clawed mutant's brutal past comes back to haunt him as he seeks revenge against those who wronged him." },
    { title: "X-Men: First Class", type: "movie", year: 2011, month: 6, desc: "Two young mutants forge an unlikely friendship before ideological differences set them on opposing paths." },
    { title: "The Wolverine", type: "movie", year: 2013, month: 7, desc: "A reluctant hero is drawn into a dangerous plot in Japan involving an old friend and a powerful enemy." },
    { title: "X-Men: Days of Future Past", type: "movie", year: 2014, month: 5, desc: "A mutant is sent back in time to prevent a chain of events that leads to a devastating future." },
    { title: "Deadpool", type: "movie", year: 2016, month: 2, desc: "A wisecracking mercenary gains accelerated healing powers and sets out on a personal quest for revenge." },
    { title: "X-Men: Apocalypse", type: "movie", year: 2016, month: 5, desc: "An ancient, immensely powerful mutant awakens and recruits followers to reshape the world in his image." },
    { title: "Logan", type: "movie", year: 2017, month: 3, desc: "An aging, weary hero cares for an ailing mentor while protecting a young girl with a familiar and dangerous gift." },
    { title: "Deadpool 2", type: "movie", year: 2018, month: 5, desc: "A mercenary assembles a ragtag team to protect a young mutant from a relentless time-traveling soldier." },
    { title: "Dark Phoenix", type: "movie", year: 2019, month: 6, desc: "A powerful mutant's abilities spiral out of control after a cosmic force awakens something within her." },
    { title: "The New Mutants", type: "movie", year: 2020, month: 8, desc: "A group of young mutants held in a secretive facility must confront their pasts and their own abilities." },
  ],
  "Spider Nexus": [
    { title: "Spider-Man", type: "movie", year: 2002, month: 5, group: "🕷️ Raimi Universe (Earth-96283) — Tobey Maguire", desc: "A shy high schooler gains extraordinary abilities and learns that great power comes with great responsibility." },
    { title: "Spider-Man 2", type: "movie", year: 2004, month: 6, group: "🕷️ Raimi Universe (Earth-96283) — Tobey Maguire", desc: "Torn between his personal life and his duty as a hero, a young man faces a brilliant scientist turned villain." },
    { title: "Spider-Man 3", type: "movie", year: 2007, month: 5, group: "🕷️ Raimi Universe (Earth-96283) — Tobey Maguire", desc: "A hero is pushed to his darkest limits by an alien symbiote and a growing list of enemies from his past." },
    { title: "The Amazing Spider-Man", type: "movie", year: 2012, month: 7, group: "🕸️ The Amazing Spider-Man Universe (Earth-120703) — Andrew Garfield", desc: "A teenager investigates his parents' disappearance and gains powers that lead him toward a reptilian threat." },
    { title: "The Amazing Spider-Man 2", type: "movie", year: 2014, month: 5, group: "🕸️ The Amazing Spider-Man Universe (Earth-120703) — Andrew Garfield", desc: "A hero balances a serious relationship while facing an old friend and an electrically-charged new enemy." },
    { title: "Venom", type: "movie", year: 2018, month: 10, group: "🕷️ Sony's Spider-Man Universe (SSU)", desc: "An investigative journalist becomes host to an alien symbiote that grants him violent new abilities." },
    { title: "Venom: Let There Be Carnage", type: "movie", year: 2021, month: 10, group: "🕷️ Sony's Spider-Man Universe (SSU)", desc: "A journalist and his symbiote must contend with an unstable serial killer who gains powers of his own." },
    { title: "Morbius", type: "movie", year: 2022, month: 4, group: "🕷️ Sony's Spider-Man Universe (SSU)", desc: "A biochemist suffering from a rare blood disease turns to a dangerous cure that transforms him into a vampiric being." },
    { title: "Madame Web", type: "movie", year: 2024, month: 2, group: "🕷️ Sony's Spider-Man Universe (SSU)", desc: "A paramedic develops clairvoyant abilities and must protect three young women from a mysterious threat." },
    { title: "Venom: The Last Dance", type: "movie", year: 2024, month: 10, group: "🕷️ Sony's Spider-Man Universe (SSU)", desc: "Hunted from all sides, a man and his symbiote go on the run as their bond is tested like never before." },
    { title: "Kraven the Hunter", type: "movie", year: 2024, month: 12, group: "🕷️ Sony's Spider-Man Universe (SSU)", desc: "A young man's complicated relationship with his ruthless father sets him on a path to becoming a legendary hunter." },
    { title: "Spider-Man: Into the Spider-Verse", type: "movie", year: 2018, month: 12, group: "🕸️ Spider-Verse Universe (Animated)", desc: "A teenager becomes his reality's Spider-Man and crosses paths with counterparts from other dimensions." },
    { title: "Spider-Man: Across the Spider-Verse", type: "movie", year: 2023, month: 6, group: "🕸️ Spider-Verse Universe (Animated)", desc: "A young hero journeys across the multiverse and clashes with a society of spider-people over its rules." },
    { title: "Spider-Man: Beyond the Spider-Verse", type: "movie", year: 2027, month: null, group: "🕸️ Spider-Verse Universe (Animated)", desc: "TBA — the animated trilogy's conclusion has not yet received a confirmed release date." },
    { title: "Spider-Man: Homecoming", type: "movie", year: 2017, month: 7, group: "🕷️ Marvel Cinematic Universe (MCU) — Tom Holland", desc: "A young hero balances high school life with the pressure to prove himself against a dangerous new threat in his city.", linkSaga: "Main MCU" },
    { title: "Spider-Man: Far From Home", type: "movie", year: 2019, month: 7, group: "🕷️ Marvel Cinematic Universe (MCU) — Tom Holland", desc: "A young hero's school trip abroad is interrupted when he's recruited to face a new elemental threat.", linkSaga: "Main MCU" },
    { title: "Spider-Man: No Way Home", type: "movie", year: 2021, month: 12, group: "🕷️ Marvel Cinematic Universe (MCU) — Tom Holland", desc: "A spell gone wrong tears open the multiverse, bringing new dangers and unexpected faces into a young hero's life.", linkSaga: "Main MCU" },
    { title: "Spider-Man: Brand New Day", type: "movie", year: 2026, month: 7, group: "🕷️ Marvel Cinematic Universe (MCU) — Tom Holland", desc: "A young hero's world shifts again as he navigates new relationships and a fresh set of threats.", linkSaga: "Main MCU" },
  ],
  "Ultimate Brand New Day Watch Order": [
    { title: "Captain America: Civil War", type: "movie", year: 2016, month: 5, group: "⭐⭐⭐⭐⭐ Required", order: 1, desc: "A rift among heroes over accountability and freedom forces old allies onto opposing sides of a devastating conflict.", linkSaga: "Main MCU" },
    { title: "Spider-Man: Homecoming", type: "movie", year: 2017, month: 7, group: "⭐⭐⭐⭐⭐ Required", order: 2, desc: "A young hero balances high school life with the pressure to prove himself against a dangerous new threat in his city.", linkSaga: "Main MCU" },
    { title: "Avengers: Infinity War", type: "movie", year: 2018, month: 4, group: "⭐⭐⭐⭐⭐ Required", order: 3, desc: "Heroes from across the galaxy unite to stop a powerful being from acquiring all six Infinity Stones.", linkSaga: "Main MCU" },
    { title: "Avengers: Endgame", type: "movie", year: 2019, month: 4, group: "⭐⭐⭐⭐⭐ Required", order: 4, desc: "The remaining heroes attempt one last mission to undo the devastation caused by their greatest defeat.", linkSaga: "Main MCU" },
    { title: "Spider-Man: Far From Home", type: "movie", year: 2019, month: 7, group: "⭐⭐⭐⭐⭐ Required", order: 5, desc: "A young hero's school trip abroad is interrupted when he's recruited to face a new elemental threat.", linkSaga: "Main MCU" },
    { title: "Spider-Man: No Way Home", type: "movie", year: 2021, month: 12, group: "⭐⭐⭐⭐⭐ Required", order: 6, desc: "A spell gone wrong tears open the multiverse, bringing new dangers and unexpected faces into a young hero's life.", linkSaga: "Main MCU" },

    { title: "Daredevil Season 1", type: "show", year: 2015, month: 4, group: "⭐⭐⭐⭐ Strongly Recommended", order: 7, desc: "A blind lawyer by day becomes a masked vigilante by night to clean up the crime-ridden streets of his neighborhood.", linkSaga: "Netflix Saga" },
    { title: "Daredevil Season 2", type: "show", year: 2016, month: 3, group: "⭐⭐⭐⭐ Strongly Recommended", order: 8, desc: "A vigilante's methods are challenged by a lethal new player and a former ally with a very different code.", linkSaga: "Netflix Saga" },
    { title: "The Defenders", type: "show", year: 2017, month: 8, group: "⭐⭐⭐⭐ Strongly Recommended", order: 9, desc: "Four street-level heroes reluctantly join forces to stop a secretive organization from destroying their city.", linkSaga: "Netflix Saga" },
    { title: "Daredevil Season 3", type: "show", year: 2018, month: 10, group: "⭐⭐⭐⭐ Strongly Recommended", order: 10, desc: "Physically and emotionally shattered, a vigilante must rebuild himself while his greatest enemy walks free.", linkSaga: "Netflix Saga" },
    { title: "Hawkeye", type: "show", year: 2021, month: 11, group: "⭐⭐⭐⭐ Strongly Recommended", order: 11, desc: "A veteran archer teams up with a determined young protégé while untangling a dangerous mess from his past.", linkSaga: "Main MCU" },
    { title: "Echo", type: "show", year: 2024, month: 1, group: "⭐⭐⭐⭐ Strongly Recommended", order: 12, desc: "A deaf woman with a troubled past returns to her hometown and must confront old ties to the criminal underworld.", linkSaga: "Main MCU" },
    { title: "Daredevil: Born Again Season 1", type: "show", year: 2025, month: 3, group: "⭐⭐⭐⭐ Strongly Recommended", order: 13, desc: "A lawyer by day and vigilante by night finds his double life colliding once again with an old enemy turned politician.", linkSaga: "Main MCU" },
    { title: "Daredevil: Born Again Season 2", type: "show", year: 2026, month: 3, group: "⭐⭐⭐⭐ Strongly Recommended", order: 14, desc: "Matt Murdock's story continues as new challenges await both the lawyer and the vigilante.", linkSaga: "Main MCU" },
    { title: "The Punisher Season 1", type: "show", year: 2017, month: 11, group: "⭐⭐⭐⭐ Strongly Recommended", order: 15, desc: "A former soldier wages a brutal one-man war against the criminals responsible for his family's death.", linkSaga: "Netflix Saga" },
    { title: "The Punisher Season 2", type: "show", year: 2019, month: 1, group: "⭐⭐⭐⭐ Strongly Recommended", order: 16, desc: "A vigilante's attempt at a quiet life is upended when he's drawn into protecting a stranger from a new threat.", linkSaga: "Netflix Saga" },
    { title: "Punisher: One Last Kill", type: "show", year: 2026, month: 5, group: "⭐⭐⭐⭐ Strongly Recommended", order: 17, desc: "Frank Castle searches for meaning beyond revenge, until an unexpected force pulls him back into the fight.", linkSaga: "Main MCU" },

    { title: "Spider-Man", type: "movie", year: 2002, month: 5, group: "⭐⭐ Optional", order: 18, desc: "A shy high schooler gains extraordinary abilities and learns that great power comes with great responsibility.", linkSaga: "Spider-Verse" },
    { title: "Spider-Man 2", type: "movie", year: 2004, month: 6, group: "⭐⭐ Optional", order: 19, desc: "Torn between his personal life and his duty as a hero, a young man faces a brilliant scientist turned villain.", linkSaga: "Spider-Verse" },
    { title: "Spider-Man 3", type: "movie", year: 2007, month: 5, group: "⭐⭐ Optional", order: 20, desc: "A hero is pushed to his darkest limits by an alien symbiote and a growing list of enemies from his past.", linkSaga: "Spider-Verse" },
    { title: "The Amazing Spider-Man", type: "movie", year: 2012, month: 7, group: "⭐⭐ Optional", order: 21, desc: "A teenager investigates his parents' disappearance and gains powers that lead him toward a reptilian threat.", linkSaga: "Spider-Verse" },
    { title: "The Amazing Spider-Man 2", type: "movie", year: 2014, month: 5, group: "⭐⭐ Optional", order: 22, desc: "A hero balances a serious relationship while facing an old friend and an electrically-charged new enemy.", linkSaga: "Spider-Verse" },
    { title: "She-Hulk: Attorney at Law", type: "show", year: 2022, month: 8, group: "⭐⭐ Optional", order: 23, desc: "A lawyer must balance her career and personal life after gaining powerful abilities of her own.", linkSaga: "Main MCU" },
    { title: "The Incredible Hulk", type: "movie", year: 2008, month: 6, group: "⭐⭐ Optional", order: 24, desc: "A scientist on the run tries to control the rage-fueled creature within him while evading a relentless military pursuit.", linkSaga: "Main MCU" },
    { title: "Iron Fist Season 1", type: "show", year: 2017, month: 3, group: "⭐⭐ Optional", order: 25, desc: "A man believed dead for years returns home with a mystical martial arts power and a company to reclaim.", linkSaga: "Netflix Saga" },
    { title: "Iron Fist Season 2", type: "show", year: 2018, month: 9, group: "⭐⭐ Optional", order: 26, desc: "A martial artist faces a challenger for his title while trying to protect the people he cares about.", linkSaga: "Netflix Saga" },
    { title: "Luke Cage Season 1", type: "show", year: 2016, month: 9, group: "⭐⭐ Optional", order: 27, desc: "A man with unbreakable skin and super strength tries to keep a low profile, but his neighborhood needs a protector.", linkSaga: "Netflix Saga" },
    { title: "Luke Cage Season 2", type: "show", year: 2018, month: 6, group: "⭐⭐ Optional", order: 28, desc: "A hero's grip on his neighborhood is tested by a ruthless new rival and painful family history.", linkSaga: "Netflix Saga" },
    { title: "Jessica Jones Season 1", type: "show", year: 2015, month: 11, group: "⭐⭐ Optional", order: 29, desc: "A hard-drinking private investigator with hidden powers is pulled back into a nightmare from her past.", linkSaga: "Netflix Saga" },
    { title: "Jessica Jones Season 2", type: "show", year: 2018, month: 3, group: "⭐⭐ Optional", order: 30, desc: "An investigator digs into the origins of her powers, unearthing secrets she isn't prepared for.", linkSaga: "Netflix Saga" },
    { title: "Jessica Jones Season 3", type: "show", year: 2019, month: 6, group: "⭐⭐ Optional", order: 31, desc: "An investigator faces a killer whose ambitions push her toward a line she has always tried not to cross.", linkSaga: "Netflix Saga" },
  ]
};