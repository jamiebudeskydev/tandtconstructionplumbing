export interface ServiceArea {
  slug: string;
  name: string;
  state: string;
  county: string;
  zipCodes: string[];
  population: number;
  distanceFromNewville: number;
  tier: 1 | 2 | 3;
  geo: { lat: number; lng: number };
  localContext: string;
  landmarks: string[];
  commonServices: string[];
  nearbyAreas: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
  contractorMeta: {
    metaTitle: string;
    metaDescription: string;
    localContext: string;
    commonServices: string[];
    faqs: { question: string; answer: string }[];
  };
}

export const SERVICE_AREAS: ServiceArea[] = [
  // ── Tier 1 — High Priority ──────────────────────────────────────
  {
    slug: "carlisle-pa",
    name: "Carlisle",
    state: "PA",
    county: "Cumberland",
    zipCodes: ["17013", "17015"],
    population: 22500,
    distanceFromNewville: 11,
    tier: 1,
    geo: { lat: 40.2015, lng: -77.1886 },
    localContext:
      "Carlisle is the county seat of Cumberland County and one of the largest communities we serve. Home to Dickinson College, the U.S. Army War College, and a thriving downtown historic district, the borough features a wide mix of housing — from colonial-era row homes along High Street to newer developments near the Carlisle Pike corridor. Many older homes in the borough center need updated plumbing, electrical panels, and bathroom remodels to match modern standards.",
    landmarks: [
      "Dickinson College",
      "U.S. Army War College",
      "Carlisle Fairgrounds",
      "Bosler Memorial Library",
    ],
    commonServices: [
      "Plumbing repair & service",
      "Bathroom remodeling",
      "Electrician services",
      "Drain cleaning",
      "Water heater replacement",
      "General contractor services",
      "Home additions",
      "Handyman services",
    ],
    nearbyAreas: [
      "boiling-springs-pa",
      "mount-holly-springs-pa",
      "plainfield-pa",
      "mechanicsburg-pa",
    ],
    faqs: [
      {
        question: "How far is T&T from Carlisle?",
        answer:
          "We're based in Newville, about 11 miles west of Carlisle along Route 11. We can typically be on-site within 20 minutes for standard calls and faster for emergencies.",
      },
      {
        question: "Do you work on older homes in downtown Carlisle?",
        answer:
          "Yes. Many homes in Carlisle's historic district were built before modern plumbing and electrical codes. We have extensive experience updating these older systems while respecting the character of the home.",
      },
      {
        question: "Can you handle commercial plumbing in Carlisle?",
        answer:
          "We primarily serve residential customers, but we do take on light commercial plumbing projects for small businesses in the Carlisle area. Call us to discuss your project.",
      },
    ],
    metaTitle:
      "Plumber in Carlisle, PA | Electrician & Contractor",
    metaDescription:
      "Licensed plumber in Carlisle, PA — bathroom remodeling, drain cleaning, electrician services, water heater repair & general contractor work. 4.8-star rated, family-owned since 2006. Free estimates — (717) 776-7319.",
    contractorMeta: {
      metaTitle:
        "Contractor in Carlisle, PA | Remodeling & Construction",
      metaDescription:
        "Licensed general contractor in Carlisle, PA — bathroom remodeling, kitchen renovation, home additions, deck building, basement finishing & drywall. Family-owned since 2006. Free estimates — (717) 776-7319.",
      localContext:
        "Carlisle's diverse housing stock — from colonial-era row homes near High Street to mid-century ranches along the Carlisle Pike corridor — keeps our construction crew busy year-round. We handle bathroom and kitchen remodels in historic downtown properties, build additions and decks in the surrounding neighborhoods, and take on basement finishing projects for homes throughout the borough. As a licensed general contractor just 11 miles from Carlisle, we're close enough for quick site visits and responsive project management.",
      commonServices: [
        "Bathroom remodeling",
        "Kitchen remodeling",
        "Home additions",
        "Deck building",
        "Basement finishing",
        "Drywall & painting",
        "General contractor services",
        "Handyman services",
      ],
      faqs: [
        {
          question: "Are you a licensed general contractor serving Carlisle?",
          answer:
            "Yes. T&T Construction & Plumbing holds PA License #PA001752. We've been a licensed general contractor since 2006, serving Carlisle and the entire Cumberland Valley.",
        },
        {
          question: "What types of remodeling do you do in Carlisle?",
          answer:
            "We handle full bathroom and kitchen remodels, home additions, basement finishing, deck building, drywall, painting, and general renovation work. We're experienced with both Carlisle's older downtown homes and newer suburban construction.",
        },
        {
          question: "Can you add a room to my Carlisle home?",
          answer:
            "Absolutely. Home additions are one of our specialties. We handle design, permitting, foundation, framing, plumbing, electrical, and all finish work — one contractor from start to finish.",
        },
      ],
    },
  },
  {
    slug: "mechanicsburg-pa",
    name: "Mechanicsburg",
    state: "PA",
    county: "Cumberland",
    zipCodes: ["17050", "17055"],
    population: 10085,
    distanceFromNewville: 25,
    tier: 1,
    geo: { lat: 40.2143, lng: -76.9986 },
    localContext:
      "Mechanicsburg sits in the eastern part of Cumberland County along the busy Carlisle Pike commercial corridor. The borough blends older residential neighborhoods near Main Street with expanding suburban developments to the west. Homeowners here often need plumbing upgrades in older row homes, sump pump installations for basement water issues common in the area's clay-heavy soil, and bathroom or kitchen remodels in mid-century homes.",
    landmarks: [
      "Jubilee Day",
      "Messiah University (nearby)",
      "Williams Grove Speedway",
      "Mechanicsburg Museum",
    ],
    commonServices: [
      "Plumbing repair & service",
      "Bathroom remodeling",
      "Electrician services",
      "Handyman services",
      "General contractor services",
      "Home remodeling",
      "Sump pump installation",
      "Drain cleaning",
    ],
    nearbyAreas: [
      "camp-hill-pa",
      "shiremanstown-pa",
      "carlisle-pa",
      "dillsburg-pa",
      "enola-pa",
    ],
    faqs: [
      {
        question: "Do you serve the Mechanicsburg area regularly?",
        answer:
          "Yes. While our shop is in Newville (about 25 miles west), we serve Mechanicsburg and the surrounding east Cumberland County area regularly. Many of our customers are along the Route 11/Carlisle Pike corridor.",
      },
      {
        question: "Can you fix basement water problems in Mechanicsburg?",
        answer:
          "Absolutely. Mechanicsburg's clay-heavy soil makes basement water intrusion common. We install sump pumps, French drains, and waterproofing solutions to keep your basement dry.",
      },
      {
        question:
          "What's the best way to schedule work in the Mechanicsburg area?",
        answer:
          "Call us at (717) 776-7319 or email reesepandh@embarqmail.com. We schedule Mechanicsburg jobs to make efficient use of our time in the eastern part of the county, so we can often group multiple nearby calls.",
      },
    ],
    metaTitle:
      "Plumber in Mechanicsburg, PA | Electrician & Handyman",
    metaDescription:
      "Licensed plumber in Mechanicsburg, PA — electrician, handyman, bathroom remodeling, drain cleaning, sump pumps & general contractor. 4.8-star rated since 2006. Free estimates — (717) 776-7319.",
    contractorMeta: {
      metaTitle:
        "Contractor in Mechanicsburg, PA | Remodeling & Additions",
      metaDescription:
        "Licensed general contractor in Mechanicsburg, PA — home remodeling, bathroom & kitchen renovation, additions, basement finishing, decks & handyman services. Family-owned since 2006. Free estimates — (717) 776-7319.",
      localContext:
        "Mechanicsburg homeowners along Main Street and the surrounding neighborhoods frequently invest in bathroom and kitchen remodels, basement finishing, and additions. The borough's mid-century housing stock offers plenty of renovation opportunity, and newer developments to the west need decks, patios, and custom finish work. As a licensed general contractor serving eastern Cumberland County, we bring the same quality craftsmanship to Mechanicsburg that we deliver across the valley.",
      commonServices: [
        "Home remodeling",
        "Bathroom remodeling",
        "Kitchen remodeling",
        "Basement finishing",
        "Home additions",
        "Deck building",
        "Handyman services",
        "Drywall & painting",
      ],
      faqs: [
        {
          question: "Do you take on construction projects in Mechanicsburg?",
          answer:
            "Yes. We serve Mechanicsburg and the eastern Cumberland County area regularly. As a licensed general contractor (PA #PA001752), we handle remodels, additions, decks, and finish work throughout the area.",
        },
        {
          question: "Can you finish my basement in Mechanicsburg?",
          answer:
            "Absolutely. Basement finishing is one of our most popular services. We handle framing, insulation, drywall, flooring, electrical, plumbing, and all finish work to turn your basement into usable living space.",
        },
        {
          question: "Do you offer handyman services in the Mechanicsburg area?",
          answer:
            "Yes. From drywall repair and painting to fixture installation and general maintenance, we handle a wide range of smaller projects in addition to our larger construction and remodeling work.",
        },
      ],
    },
  },
  {
    slug: "camp-hill-pa",
    name: "Camp Hill",
    state: "PA",
    county: "Cumberland",
    zipCodes: ["17011"],
    population: 8230,
    distanceFromNewville: 28,
    tier: 1,
    geo: { lat: 40.2398, lng: -76.9197 },
    localContext:
      "Camp Hill is an established residential borough directly across the Susquehanna River from Harrisburg. Known for its excellent school district and tree-lined streets, the borough has a housing stock that ranges from 1920s–1940s colonials near Market Street to mid-century ranches and Cape Cods farther out. Many homeowners need bathroom and kitchen updates, plumbing system modernization, and electrical upgrades for these well-maintained but aging homes.",
    landmarks: [
      "Camp Hill Shopping Center",
      "Sporting Hill Park",
      "Cedar Cliff High School",
      "Fredricksen Library",
    ],
    commonServices: [
      "Plumbing repair & service",
      "Bathroom remodeling",
      "Electrician services",
      "Handyman services",
      "Kitchen remodeling",
      "Drain cleaning",
      "Water heater replacement",
      "Home additions",
    ],
    nearbyAreas: [
      "lemoyne-pa",
      "mechanicsburg-pa",
      "wormleysburg-pa",
      "new-cumberland-pa",
      "shiremanstown-pa",
    ],
    faqs: [
      {
        question: "Do you travel to Camp Hill from Newville?",
        answer:
          "Yes. Camp Hill is about 28 miles east of our shop. We serve Camp Hill and the West Shore communities regularly and can typically schedule work within a few days of your call.",
      },
      {
        question:
          "Can you update plumbing in Camp Hill's older homes without tearing up walls?",
        answer:
          "We always minimize disruption. For older homes, we assess the existing plumbing and recommend the least invasive approach. In many cases, we can re-pipe or repair without major wall or floor demolition.",
      },
      {
        question: "Do you handle electrical work in Camp Hill too?",
        answer:
          "Yes. We do electrical panel upgrades, new circuit installation, wiring for remodels, and code-compliance updates — all common needs in Camp Hill's mid-century housing stock.",
      },
    ],
    metaTitle:
      "Plumber in Camp Hill, PA | Electrician & Handyman",
    metaDescription:
      "Licensed plumber in Camp Hill, PA — electrician, handyman, bathroom & kitchen remodeling, drain cleaning, water heater service. Family-owned since 2006. Free estimates — (717) 776-7319.",
    contractorMeta: {
      metaTitle:
        "Contractor in Camp Hill, PA | Kitchen & Bath Remodeling",
      metaDescription:
        "Licensed general contractor in Camp Hill, PA — kitchen remodeling, bathroom renovation, home additions, handyman services, deck building & electrical upgrades. Since 2006. Free estimates — (717) 776-7319.",
      localContext:
        "Camp Hill's 1920s–1940s colonials and mid-century Cape Cods are prime candidates for kitchen and bathroom remodels, home additions, and finish upgrades. Homeowners in this established West Shore borough invest in their properties to maintain property values and modernize aging systems. We bring licensed general contractor expertise to Camp Hill renovation projects — handling everything from design through punch list so homeowners deal with one team, not a dozen subcontractors.",
      commonServices: [
        "Kitchen remodeling",
        "Bathroom remodeling",
        "Home additions",
        "Handyman services",
        "Deck building",
        "Drywall & painting",
        "Basement finishing",
        "Electrical upgrades",
      ],
      faqs: [
        {
          question: "Are you a licensed contractor serving Camp Hill?",
          answer:
            "Yes. We hold PA License #PA001752 and have served Camp Hill homeowners since 2006. We handle full remodels, additions, and general construction work.",
        },
        {
          question: "Can you remodel a kitchen in an older Camp Hill home?",
          answer:
            "Absolutely. Many Camp Hill kitchens are in homes from the 1930s–1960s. We modernize layouts, update plumbing and electrical, install new cabinetry and countertops, and handle all finish work.",
        },
        {
          question: "Do you handle permits for Camp Hill construction projects?",
          answer:
            "Yes. We pull all necessary permits for Camp Hill and Cumberland County. This includes building permits, electrical permits, and plumbing permits as required by the project scope.",
        },
      ],
    },
  },
  {
    slug: "shippensburg-pa",
    name: "Shippensburg",
    state: "PA",
    county: "Cumberland",
    zipCodes: ["17257"],
    population: 5900,
    distanceFromNewville: 11,
    tier: 1,
    geo: { lat: 40.0507, lng: -77.5197 },
    localContext:
      "Shippensburg straddles the Cumberland-Franklin county line and is home to Shippensburg University. The town features a mix of student rental properties, historic downtown row homes, and newer residential neighborhoods on the outskirts. Landlords and homeowners alike call on us for plumbing repairs, water heater replacements, and bathroom remodels. The older housing stock in the borough center regularly needs drain clearing and pipe repair.",
    landmarks: [
      "Shippensburg University",
      "Shippensburg Historical Society",
      "King Street corridor",
      "Shippensburg Fair",
    ],
    commonServices: [
      "Drain clearing",
      "Water heater replacement",
      "Bathroom remodeling",
      "Faucet and fixture repair",
      "Emergency plumbing",
      "Drywall and painting",
    ],
    nearbyAreas: [
      "newburg-pa",
      "walnut-bottom-pa",
      "plainfield-pa",
    ],
    faqs: [
      {
        question: "How quickly can you get to Shippensburg?",
        answer:
          "Shippensburg is about 11 miles south of our Newville shop. We can reach most Shippensburg addresses in 15–20 minutes, making same-day emergency calls very doable.",
      },
      {
        question: "Do you work on rental properties in the Shippensburg area?",
        answer:
          "Yes. We work with several landlords and property managers in the Shippensburg area, especially near the university. We understand the quick turnaround needed for rental maintenance and repairs.",
      },
      {
        question: "Can you remodel a bathroom in a Shippensburg row home?",
        answer:
          "Absolutely. We've done many bathroom remodels in Shippensburg's downtown row homes. We're experienced with the compact layouts and older plumbing typical in these properties.",
      },
    ],
    metaTitle:
      "Plumber in Shippensburg, PA | Electrician & Contractor",
    metaDescription:
      "Licensed plumber in Shippensburg, PA — electrician, drain cleaning, water heater replacement, bathroom remodels & emergency plumbing. 15 minutes from our shop. Free estimates — (717) 776-7319.",
    contractorMeta: {
      metaTitle:
        "Contractor in Shippensburg, PA | Remodeling & Decks",
      metaDescription:
        "Licensed general contractor in Shippensburg, PA — bathroom remodeling, drywall, painting, deck building & rental property renovation. Just 15 minutes from our shop. Free estimates — (717) 776-7319.",
      localContext:
        "Shippensburg's mix of student rental properties, historic downtown row homes, and newer residential neighborhoods creates steady demand for construction and remodeling. Landlords call us for rental turnover renovations, while homeowners invest in bathroom remodels, deck projects, and additions. Our shop is just 11 miles away, so we can manage Shippensburg construction projects with minimal drive time — keeping costs lower and project timelines tighter.",
      commonServices: [
        "Bathroom remodeling",
        "Drywall & painting",
        "Deck building",
        "Rental property renovation",
        "Kitchen remodeling",
        "General contractor services",
      ],
      faqs: [
        {
          question: "Do you do renovation work for Shippensburg rental properties?",
          answer:
            "Yes. We work with several landlords near Shippensburg University. We handle bathroom and kitchen updates, drywall repair, painting, flooring, and general renovation to keep rental properties in top shape between tenants.",
        },
        {
          question: "Can you build a deck at my Shippensburg home?",
          answer:
            "Absolutely. We design and build custom decks for homes throughout Shippensburg. We handle permitting, materials, and construction — including composite and pressure-treated options.",
        },
        {
          question: "How quickly can you start a construction project in Shippensburg?",
          answer:
            "Given our proximity (just 11 miles away), we can do site visits quickly and typically begin scheduled projects within 1–2 weeks depending on scope and permitting requirements.",
        },
      ],
    },
  },

  // ── Tier 2 — Medium Priority ─────────────────────────────────────
  {
    slug: "boiling-springs-pa",
    name: "Boiling Springs",
    state: "PA",
    county: "Cumberland",
    zipCodes: ["17007"],
    population: 3670,
    distanceFromNewville: 12,
    tier: 2,
    geo: { lat: 40.1492, lng: -77.1283 },
    localContext:
      "Boiling Springs is a small, scenic village centered around the natural spring-fed Children's Lake. A designated historic district, the community is known for fly fishing along the Yellow Breeches Creek and its well-preserved 19th-century homes. Many properties here require careful plumbing and renovation work that respects the character of the historic structures while bringing systems up to code.",
    landmarks: [
      "Children's Lake",
      "Yellow Breeches Creek",
      "Allenberry Resort",
      "Appalachian Trail (nearby)",
    ],
    commonServices: [
      "Plumbing repair & service",
      "Well pump service",
      "Bathroom remodeling",
      "Water treatment systems",
      "Water line repair",
      "Emergency plumbing",
    ],
    nearbyAreas: [
      "carlisle-pa",
      "mount-holly-springs-pa",
      "plainfield-pa",
    ],
    faqs: [
      {
        question: "Do you serve the Boiling Springs area?",
        answer:
          "Yes. Boiling Springs is only about 12 miles from our Newville shop. We serve homeowners throughout the South Middleton Township area.",
      },
      {
        question:
          "Can you work on well water systems in Boiling Springs?",
        answer:
          "Absolutely. Many homes outside the village center rely on well water. We install and service well pumps, pressure tanks, and water treatment systems.",
      },
      {
        question:
          "Do you have experience with historic homes in Boiling Springs?",
        answer:
          "Yes. We've worked on several older properties in the Boiling Springs historic district. We understand the need to preserve original character while updating plumbing and electrical systems to modern standards.",
      },
    ],
    metaTitle:
      "Plumber in Boiling Springs, PA | Well Pump & Remodel",
    metaDescription:
      "Licensed plumber in Boiling Springs, PA — well pump service, water treatment, bathroom remodeling & historic home plumbing. Just 12 miles from our shop. Free estimates — (717) 776-7319.",
    contractorMeta: {
      metaTitle:
        "Contractor in Boiling Springs, PA | Historic Renovation",
      metaDescription:
        "Licensed contractor in Boiling Springs, PA — historic home renovation, bathroom remodeling, deck building & custom construction. Experienced with the historic district. Free estimates — (717) 776-7319.",
      localContext:
        "Boiling Springs' historic district and 19th-century homes require a contractor who understands preservation and period-appropriate renovation. We handle bathroom remodels, additions, and structural repairs that respect the character of these older properties while bringing systems up to code. For newer homes outside the village center, we build decks, finish basements, and take on full remodeling projects.",
      commonServices: [
        "Historic home renovation",
        "Bathroom remodeling",
        "Deck building",
        "Structural repairs",
        "Drywall & painting",
        "Custom carpentry",
      ],
      faqs: [
        {
          question: "Do you have experience with historic homes in Boiling Springs?",
          answer:
            "Yes. We've renovated several properties in the Boiling Springs historic district. We understand how to update homes while preserving their original character — from careful plaster work to period-appropriate materials.",
        },
        {
          question: "Can you build a deck near Children's Lake?",
          answer:
            "Absolutely. We build custom decks throughout the Boiling Springs area. We'll work within any local zoning or setback requirements, including those near the lake and creek areas.",
        },
        {
          question: "Do you handle permits for Boiling Springs construction?",
          answer:
            "Yes. We pull all necessary permits through South Middleton Township. For work in the historic district, we're familiar with any additional review requirements.",
        },
      ],
    },
  },
  {
    slug: "mount-holly-springs-pa",
    name: "Mount Holly Springs",
    state: "PA",
    county: "Cumberland",
    zipCodes: ["17065"],
    population: 2330,
    distanceFromNewville: 8,
    tier: 2,
    geo: { lat: 40.1187, lng: -77.1900 },
    localContext:
      "Mount Holly Springs is a small borough nestled at the base of South Mountain. The community has a mix of older homes along Baltimore Avenue and newer construction in the surrounding township. Its proximity to both the mountain and local streams means homeowners often deal with water management issues — sump pump needs, drainage problems, and well water systems are common service calls.",
    landmarks: [
      "South Mountain",
      "Mountain Creek (ski resort nearby)",
      "Pine Grove Furnace State Park (nearby)",
      "Holly Gap",
    ],
    commonServices: [
      "Plumbing repair & service",
      "Sump pump installation",
      "Drain clearing",
      "Well pump service",
      "Bathroom remodeling",
      "Deck building",
    ],
    nearbyAreas: [
      "carlisle-pa",
      "boiling-springs-pa",
      "walnut-bottom-pa",
    ],
    faqs: [
      {
        question: "How far are you from Mount Holly Springs?",
        answer:
          "We're only about 8 miles from Mount Holly Springs — one of the closest communities to our Newville shop. We can respond quickly for both scheduled and emergency work.",
      },
      {
        question:
          "Do you handle drainage issues common in the Mount Holly Springs area?",
        answer:
          "Yes. The terrain near South Mountain creates natural water flow challenges. We install French drains, sump pumps, and grading solutions to keep basements dry and foundations protected.",
      },
      {
        question: "Can you build a deck at my Mount Holly Springs home?",
        answer:
          "Absolutely. We build custom decks to suit the hilly terrain common in the Mount Holly Springs area. We handle everything from design and permitting to construction.",
      },
    ],
    metaTitle:
      "Plumber in Mount Holly Springs, PA | Sump Pumps & Drains",
    metaDescription:
      "Licensed plumber in Mount Holly Springs, PA — sump pump installation, drain clearing, well pump service, bathroom remodeling & deck building. 8 miles from our shop. Free estimates — (717) 776-7319.",
    contractorMeta: {
      metaTitle:
        "Contractor in Mount Holly Springs, PA | Decks & Remodel",
      metaDescription:
        "Licensed contractor in Mount Holly Springs, PA — deck building, bathroom remodeling, foundation work, basement waterproofing & custom construction. 8 miles from our shop. Free estimates — (717) 776-7319.",
      localContext:
        "Mount Holly Springs' location at the base of South Mountain makes it ideal for outdoor living projects — decks, patios, and screened porches that take advantage of the mountain views. The hilly terrain also means foundation and drainage work is common. We build custom decks suited to sloped lots, handle bathroom and kitchen remodels, and take on foundation repair and waterproofing for homes dealing with mountain runoff.",
      commonServices: [
        "Deck building",
        "Bathroom remodeling",
        "Foundation work",
        "Basement waterproofing",
        "Kitchen remodeling",
        "Drywall & painting",
      ],
      faqs: [
        {
          question: "Can you build a deck on a sloped lot in Mount Holly Springs?",
          answer:
            "Yes. Many Mount Holly Springs properties have sloped terrain near South Mountain. We design and build decks that work with the grade, using proper footings and framing to create level, safe outdoor living spaces.",
        },
        {
          question: "Do you handle foundation work in the Mount Holly Springs area?",
          answer:
            "Absolutely. The terrain and water flow near South Mountain can create foundation challenges. We do foundation repairs, waterproofing, and drainage solutions to protect your home.",
        },
        {
          question: "How close are you to Mount Holly Springs?",
          answer:
            "Just 8 miles — one of the closest communities to our Newville shop. We can do site visits and start projects quickly, with minimal travel overhead keeping your costs down.",
        },
      ],
    },
  },
  {
    slug: "enola-pa",
    name: "Enola",
    state: "PA",
    county: "Cumberland",
    zipCodes: ["17025"],
    population: 5910,
    distanceFromNewville: 22,
    tier: 2,
    geo: { lat: 40.2901, lng: -76.9335 },
    localContext:
      "Enola is an unincorporated community in East Pennsboro Township, situated along the Susquehanna River just north of Camp Hill. Originally a railroad town built around the massive Enola rail yard, the community retains much of its early-to-mid 20th century housing stock. Homeowners frequently need plumbing modernization, water heater upgrades, and remodeling work in these well-built but aging homes.",
    landmarks: [
      "Enola Rail Yard",
      "East Pennsboro Township",
      "Summerdale Plaza",
      "Susquehanna River access",
    ],
    commonServices: [
      "Plumbing repair & service",
      "Home remodeling",
      "Water heater replacement",
      "Bathroom remodeling",
      "Drain clearing",
      "Electrical panel upgrades",
    ],
    nearbyAreas: [
      "camp-hill-pa",
      "lemoyne-pa",
      "mechanicsburg-pa",
      "new-cumberland-pa",
    ],
    faqs: [
      {
        question: "Do you regularly serve the Enola area?",
        answer:
          "Yes. Enola is about 22 miles east of our shop. We serve customers throughout East Pennsboro Township and the West Shore corridor on a regular basis.",
      },
      {
        question: "Can you update plumbing in Enola's older railroad-era homes?",
        answer:
          "Absolutely. Many homes in Enola were built in the early-to-mid 1900s and have original plumbing that's due for replacement. We modernize these systems while working efficiently to minimize disruption.",
      },
      {
        question:
          "Do you offer emergency plumbing in Enola?",
        answer:
          "Yes. For plumbing emergencies in Enola, call us at (717) 776-7319. We respond as quickly as possible, including evenings and weekends.",
      },
    ],
    metaTitle:
      "Plumber in Enola, PA | Water Heater & Remodeling",
    metaDescription:
      "Licensed plumber in Enola, PA — water heater replacement, home remodeling, bathroom renovation, drain clearing & electrical upgrades. Family-owned since 2006. Free estimates — (717) 776-7319.",
    contractorMeta: {
      metaTitle:
        "Contractor in Enola, PA | Remodeling & Renovation",
      metaDescription:
        "Licensed general contractor in Enola, PA — home remodeling, bathroom renovation, basement finishing, electrical panel upgrades & drywall. Family-owned since 2006. Free estimates — (717) 776-7319.",
      localContext:
        "Enola's early-to-mid 20th century housing stock — originally built for railroad workers and their families — presents great renovation opportunities. These well-built homes benefit from updated bathrooms and kitchens, finished basements, and modernized electrical panels. As a licensed general contractor, we handle full interior renovations that transform these classic homes into modern, comfortable living spaces while preserving their solid construction.",
      commonServices: [
        "Home remodeling",
        "Bathroom remodeling",
        "Basement finishing",
        "Kitchen remodeling",
        "Electrical panel upgrades",
        "Drywall & painting",
      ],
      faqs: [
        {
          question: "Do you do remodeling work in Enola?",
          answer:
            "Yes. We serve Enola and East Pennsboro Township regularly. As a licensed general contractor, we handle bathroom and kitchen remodels, basement finishing, and full home renovations.",
        },
        {
          question: "Can you finish a basement in an Enola home?",
          answer:
            "Absolutely. Many Enola homes have unfinished basements with good ceiling height. We handle framing, insulation, drywall, flooring, electrical, and plumbing to create a finished living space.",
        },
        {
          question: "Do you renovate older railroad-era homes in Enola?",
          answer:
            "Yes. We have experience updating early 1900s homes. We modernize layouts, upgrade electrical and plumbing systems, and handle all finish work while working with the solid construction these homes are known for.",
        },
      ],
    },
  },
  {
    slug: "new-cumberland-pa",
    name: "New Cumberland",
    state: "PA",
    county: "Cumberland",
    zipCodes: ["17070"],
    population: 7530,
    distanceFromNewville: 30,
    tier: 2,
    geo: { lat: 40.2326, lng: -76.8845 },
    localContext:
      "New Cumberland is a well-established West Shore borough along the Susquehanna River, known for its walkable downtown, family-friendly neighborhoods, and easy access to Interstate 83. The housing stock includes early 1900s row homes near Bridge Street, mid-century homes in the central borough, and newer construction toward the township line. Water and sewer issues are common in the older sections, and homeowners regularly invest in kitchen and bathroom updates.",
    landmarks: [
      "New Cumberland Borough Park",
      "Defense Distribution Center (DLA)",
      "West Shore Farmers Market (nearby)",
      "Bridge Street corridor",
    ],
    commonServices: [
      "Plumbing repair & service",
      "Kitchen remodeling",
      "Bathroom remodeling",
      "Sewer line service",
      "Water line repair",
      "Home additions",
    ],
    nearbyAreas: [
      "lemoyne-pa",
      "camp-hill-pa",
      "wormleysburg-pa",
      "enola-pa",
    ],
    faqs: [
      {
        question: "Do you serve New Cumberland?",
        answer:
          "Yes. New Cumberland is about 30 miles from our shop, but we serve the entire West Shore area regularly. We schedule eastern Cumberland County jobs efficiently to keep costs reasonable.",
      },
      {
        question:
          "Can you replace a sewer line in New Cumberland?",
        answer:
          "Yes. We handle sewer line repairs and replacements. For older New Cumberland homes, we assess the existing line condition and recommend the most cost-effective solution.",
      },
      {
        question:
          "Do you do kitchen remodels in the New Cumberland area?",
        answer:
          "Absolutely. Kitchen remodels are one of our specialties. We handle plumbing, electrical, drywall, flooring, and finish work — giving you a single contractor for the entire project.",
      },
    ],
    metaTitle:
      "Plumber in New Cumberland, PA | Kitchen & Bath Remodel",
    metaDescription:
      "Licensed plumber in New Cumberland, PA — kitchen remodeling, bathroom renovation, sewer line repair, water line service & home additions. 4.8-star rated since 2006. Free estimates — (717) 776-7319.",
    contractorMeta: {
      metaTitle:
        "Contractor in New Cumberland, PA | Remodeling & Additions",
      metaDescription:
        "Licensed general contractor in New Cumberland, PA — kitchen remodeling, home additions, bathroom renovation, basement finishing & deck building. Since 2006. Free estimates — (717) 776-7319.",
      localContext:
        "New Cumberland homeowners invest heavily in kitchen and bathroom remodels, home additions, and outdoor living spaces. The borough's walkable downtown, family-friendly neighborhoods, and proximity to I-83 make it a desirable place to improve rather than move. From early 1900s row homes near Bridge Street to mid-century homes in the central borough, we bring licensed general contractor expertise to renovation projects of every size.",
      commonServices: [
        "Kitchen remodeling",
        "Home additions",
        "Bathroom remodeling",
        "Basement finishing",
        "Deck building",
        "Drywall & painting",
      ],
      faqs: [
        {
          question: "Can you remodel a kitchen in New Cumberland?",
          answer:
            "Yes. Kitchen remodels are one of our specialties. We handle design, demo, plumbing, electrical, cabinetry, countertops, flooring, and finish work — one licensed contractor for the whole project.",
        },
        {
          question: "Do you build home additions in New Cumberland?",
          answer:
            "Absolutely. We've built additions for families who need more space without leaving their New Cumberland neighborhood. We handle permitting, foundation, framing, and all finish trades.",
        },
        {
          question: "Are you licensed for construction work in New Cumberland?",
          answer:
            "Yes. We hold PA License #PA001752 and have been a licensed general contractor since 2006. We pull all required permits through the borough for every project.",
        },
      ],
    },
  },
  {
    slug: "lemoyne-pa",
    name: "Lemoyne",
    state: "PA",
    county: "Cumberland",
    zipCodes: ["17043"],
    population: 4700,
    distanceFromNewville: 27,
    tier: 2,
    geo: { lat: 40.2409, lng: -76.8948 },
    localContext:
      "Lemoyne is a compact West Shore borough situated between Camp Hill and the Susquehanna River. The community features a mix of early 20th century homes, post-war bungalows, and some newer townhouse developments. Its location along major transportation routes makes it convenient to serve. Homeowners frequently need plumbing repairs, water heater service, and updates to older electrical and plumbing systems.",
    landmarks: [
      "West Shore Plaza",
      "Lemoyne Borough Park",
      "Market Street corridor",
      "Susquehanna River waterfront",
    ],
    commonServices: [
      "Plumbing repair & service",
      "Water heater replacement",
      "Drain clearing",
      "Bathroom remodeling",
      "Electrical upgrades",
      "Emergency plumbing",
    ],
    nearbyAreas: [
      "camp-hill-pa",
      "wormleysburg-pa",
      "new-cumberland-pa",
      "enola-pa",
    ],
    faqs: [
      {
        question: "How quickly can you respond to Lemoyne?",
        answer:
          "Lemoyne is about 27 miles from our shop. For scheduled work, we group West Shore calls for efficiency. For emergencies, we respond as fast as possible — call (717) 776-7319.",
      },
      {
        question:
          "Do you work on townhouses in Lemoyne?",
        answer:
          "Yes. We've done plumbing and remodeling work in townhouses and row homes throughout Lemoyne. We're experienced with the shared-wall construction and compact layouts common in these properties.",
      },
      {
        question: "Can you replace my water heater in Lemoyne?",
        answer:
          "Absolutely. Water heater replacement is one of our most common calls. We install both tank and tankless units and can usually complete the work in a single visit.",
      },
    ],
    metaTitle:
      "Plumber in Lemoyne, PA | Water Heater & Drain Service",
    metaDescription:
      "Licensed plumber in Lemoyne, PA — water heater replacement, drain clearing, bathroom remodeling, electrical upgrades & emergency plumbing. Family-owned since 2006. Free estimates — (717) 776-7319.",
    contractorMeta: {
      metaTitle:
        "Contractor in Lemoyne, PA | Bathroom Remodeling & Renovation",
      metaDescription:
        "Licensed contractor in Lemoyne, PA — bathroom remodeling, kitchen renovation, electrical upgrades, drywall, painting & general construction. Family-owned since 2006. Free estimates — (717) 776-7319.",
      localContext:
        "Lemoyne's compact borough features early 20th century homes, post-war bungalows, and newer townhouse developments that all benefit from renovation and remodeling. Bathroom updates, kitchen refreshes, and general maintenance are the most common contractor needs. We serve Lemoyne alongside neighboring Camp Hill and Wormleysburg, grouping West Shore projects for efficient scheduling.",
      commonServices: [
        "Bathroom remodeling",
        "Kitchen remodeling",
        "Electrical upgrades",
        "Drywall & painting",
        "General contractor services",
        "Handyman services",
      ],
      faqs: [
        {
          question: "Do you take on construction projects in Lemoyne?",
          answer:
            "Yes. We serve Lemoyne and the West Shore area regularly. We handle bathroom and kitchen remodels, drywall work, electrical upgrades, and general renovation projects.",
        },
        {
          question: "Can you remodel a bathroom in a Lemoyne townhouse?",
          answer:
            "Absolutely. We're experienced with the shared-wall construction and compact layouts common in Lemoyne townhouses. We maximize space and modernize finishes while working within the existing footprint.",
        },
        {
          question: "Do you offer handyman services in Lemoyne?",
          answer:
            "Yes. From drywall repair and painting to trim work and fixture installation, we handle smaller projects alongside our larger remodeling and construction work.",
        },
      ],
    },
  },

  // ── Tier 3 — Growth Targets ──────────────────────────────────────
  {
    slug: "dillsburg-pa",
    name: "Dillsburg",
    state: "PA",
    county: "York",
    zipCodes: ["17019"],
    population: 2650,
    distanceFromNewville: 22,
    tier: 3,
    geo: { lat: 40.1112, lng: -77.0345 },
    localContext:
      "Dillsburg is a small borough in northern York County, known for its annual Farmers Fair and Pickle Festival. While technically in York County, it sits right on the Cumberland County border and many residents look to Cumberland Valley contractors for service. The town has a traditional small-town downtown with older homes that often need plumbing and construction updates, along with newer developments on the outskirts.",
    landmarks: [
      "Dillsburg Farmers Fair",
      "Pickle Festival",
      "Northern York County",
      "Williams Grove (nearby)",
    ],
    commonServices: [
      "Plumbing repair & service",
      "Bathroom remodeling",
      "Drain clearing",
      "Water heater replacement",
      "Deck building",
      "Drywall and painting",
    ],
    nearbyAreas: [
      "mechanicsburg-pa",
      "carlisle-pa",
      "shiremanstown-pa",
    ],
    faqs: [
      {
        question: "Do you serve Dillsburg even though it's in York County?",
        answer:
          "Yes. Dillsburg is right on the Cumberland-York county line, and we serve customers there regularly. It's about 22 miles from our shop — an easy drive along Route 15.",
      },
      {
        question: "Can you build a deck at my Dillsburg home?",
        answer:
          "Absolutely. We build custom decks throughout the region. We handle permits, design, and construction from start to finish.",
      },
      {
        question:
          "Do you offer free estimates in Dillsburg?",
        answer:
          "Yes. We offer free estimates on all projects, regardless of location. Call (717) 776-7319 to schedule.",
      },
    ],
    metaTitle:
      "Plumber in Dillsburg, PA | Bath Remodel & Drain Service",
    metaDescription:
      "Licensed plumber in Dillsburg, PA — bathroom remodeling, water heater replacement, drain clearing, deck building & drywall repair. Serving northern York County since 2006. Free estimates — (717) 776-7319.",
    contractorMeta: {
      metaTitle:
        "Contractor in Dillsburg, PA | Remodeling & Decks",
      metaDescription:
        "Licensed contractor in Dillsburg, PA — bathroom remodeling, deck building, drywall & painting, kitchen renovation & general construction. Serving northern York County. Free estimates — (717) 776-7319.",
      localContext:
        "Dillsburg sits right on the Cumberland-York county border, and many homeowners look to Cumberland Valley contractors for construction work. The town's traditional downtown has older homes ready for remodeling, while newer developments on the outskirts often need decks, patios, and finish work. We serve Dillsburg via Route 15 — an easy 22-mile drive from our shop.",
      commonServices: [
        "Bathroom remodeling",
        "Deck building",
        "Drywall & painting",
        "Kitchen remodeling",
        "General contractor services",
        "Handyman services",
      ],
      faqs: [
        {
          question: "Do you serve Dillsburg even though it's in York County?",
          answer:
            "Yes. Dillsburg is right on the Cumberland-York county line. We serve customers there regularly — it's about 22 miles from our shop via Route 15.",
        },
        {
          question: "Can you remodel a bathroom in a Dillsburg home?",
          answer:
            "Absolutely. We handle full bathroom remodels including demolition, plumbing, electrical, tile, drywall, and fixture installation. One contractor from start to finish.",
        },
        {
          question: "Do you build decks in the Dillsburg area?",
          answer:
            "Yes. We build custom decks in composite and pressure-treated lumber. We handle design, permitting through the borough, and construction.",
        },
      ],
    },
  },
  {
    slug: "shiremanstown-pa",
    name: "Shiremanstown",
    state: "PA",
    county: "Cumberland",
    zipCodes: ["17011"],
    population: 1670,
    distanceFromNewville: 25,
    tier: 3,
    geo: { lat: 40.2176, lng: -76.9548 },
    localContext:
      "Shiremanstown is one of the smallest boroughs in Cumberland County, covering just a few blocks between Mechanicsburg and Camp Hill. Despite its size, the community has a tight-knit residential character with homes dating from the early 1900s through the post-war era. Its compact geography means plumbing and construction needs are similar to neighboring Mechanicsburg and Camp Hill — older systems needing updates and bathrooms ready for remodeling.",
    landmarks: [
      "Shiremanstown Borough Park",
      "Lisburn Road",
      "Adjacent to Mechanicsburg",
    ],
    commonServices: [
      "Plumbing repair & service",
      "Bathroom remodeling",
      "Drain clearing",
      "Water heater replacement",
      "Electrical upgrades",
      "Drywall and painting",
    ],
    nearbyAreas: [
      "mechanicsburg-pa",
      "camp-hill-pa",
      "lemoyne-pa",
    ],
    faqs: [
      {
        question: "Do you serve Shiremanstown?",
        answer:
          "Yes. Shiremanstown is right between Mechanicsburg and Camp Hill — two areas we serve frequently. When we're in the area, Shiremanstown is just a short detour away.",
      },
      {
        question: "Can you update old plumbing in Shiremanstown homes?",
        answer:
          "Absolutely. Many Shiremanstown homes have aging plumbing systems. We assess, repair, or replace plumbing to bring it up to current code while keeping costs manageable.",
      },
      {
        question: "Do you offer emergency service to Shiremanstown?",
        answer:
          "Yes. For plumbing emergencies, call (717) 776-7319. We serve the entire West Shore area for urgent calls.",
      },
    ],
    metaTitle:
      "Plumber in Shiremanstown, PA | Remodeling & Electrical",
    metaDescription:
      "Licensed plumber in Shiremanstown, PA — bathroom remodeling, drain clearing, water heater replacement, electrical upgrades & plumbing repair. Family-owned since 2006. Free estimates — (717) 776-7319.",
    contractorMeta: {
      metaTitle:
        "Contractor in Shiremanstown, PA | Remodeling & Renovation",
      metaDescription:
        "Licensed contractor in Shiremanstown, PA — bathroom remodeling, electrical upgrades, drywall, painting & general renovation. Between Mechanicsburg & Camp Hill. Free estimates — (717) 776-7319.",
      localContext:
        "Shiremanstown's compact residential borough sits between Mechanicsburg and Camp Hill, with homes dating from the early 1900s through the post-war era. Renovation work here mirrors the neighboring boroughs — bathroom remodels, electrical upgrades, and general finish work keep older homes comfortable and up to code. We serve Shiremanstown whenever we're in the area for Mechanicsburg and Camp Hill projects.",
      commonServices: [
        "Bathroom remodeling",
        "Electrical upgrades",
        "Drywall & painting",
        "Kitchen remodeling",
        "General contractor services",
        "Handyman services",
      ],
      faqs: [
        {
          question: "Do you serve Shiremanstown for construction work?",
          answer:
            "Yes. Shiremanstown is right between Mechanicsburg and Camp Hill — two areas we serve frequently. We handle remodeling and renovation projects throughout the borough.",
        },
        {
          question: "Can you update an older Shiremanstown home?",
          answer:
            "Absolutely. Many Shiremanstown homes have aging finishes and systems. We do bathroom and kitchen remodels, electrical panel upgrades, drywall work, and general renovation to modernize these properties.",
        },
        {
          question: "Do you offer free estimates in Shiremanstown?",
          answer:
            "Yes. We offer free estimates on all projects, regardless of location. Call (717) 776-7319 to schedule.",
        },
      ],
    },
  },
  {
    slug: "newburg-pa",
    name: "Newburg",
    state: "PA",
    county: "Cumberland",
    zipCodes: ["17240"],
    population: 350,
    distanceFromNewville: 9,
    tier: 3,
    geo: { lat: 40.1334, lng: -77.5557 },
    localContext:
      "Newburg is a quiet rural borough just south of Newville along Big Spring Creek. With only a few hundred residents, it's one of the smallest communities we serve — and one of the closest. The rural setting means many homes rely on well water and septic systems. Homeowners in and around Newburg call us for everything from well pump repair to small construction projects and emergency plumbing.",
    landmarks: [
      "Big Spring Creek",
      "Rural Cumberland County",
      "Adjacent to Newville",
    ],
    commonServices: [
      "Well pump service",
      "Water treatment systems",
      "Emergency plumbing",
      "Bathroom remodeling",
      "Deck building",
      "Faucet and fixture repair",
    ],
    nearbyAreas: [
      "shippensburg-pa",
      "walnut-bottom-pa",
      "plainfield-pa",
    ],
    faqs: [
      {
        question: "How close are you to Newburg?",
        answer:
          "Newburg is only about 9 miles from our shop in Newville — one of the closest communities we serve. We can be there in minutes.",
      },
      {
        question: "Do you service well pumps in the Newburg area?",
        answer:
          "Yes. Many rural homes near Newburg rely on well water. We install, repair, and maintain well pumps and pressure tanks.",
      },
      {
        question: "Can you help with a plumbing emergency in Newburg?",
        answer:
          "Absolutely. Given our proximity, Newburg is one of the fastest areas for us to reach. Call (717) 776-7319 for any plumbing emergency.",
      },
    ],
    metaTitle:
      "Plumber in Newburg, PA | Well Pump & Emergency Service",
    metaDescription:
      "Licensed plumber in Newburg, PA — well pump service, water treatment, emergency plumbing, bathroom remodeling & deck building. Just 9 miles from our shop. Free estimates — (717) 776-7319.",
    contractorMeta: {
      metaTitle:
        "Contractor in Newburg, PA | Decks & Bath Remodeling",
      metaDescription:
        "Licensed contractor in Newburg, PA — deck building, bathroom remodeling, custom carpentry, drywall & painting. Just 9 miles from our shop. Free estimates — (717) 776-7319.",
      localContext:
        "Newburg is one of the closest communities to our Newville shop — just 9 miles south along Big Spring Creek. The rural setting features farmsteads and single-family homes on larger lots, making it well-suited for outdoor construction projects like decks, additions, and outbuildings. We're close enough for same-day site visits, and the short drive keeps project costs competitive.",
      commonServices: [
        "Deck building",
        "Bathroom remodeling",
        "Custom carpentry",
        "Drywall & painting",
        "Home additions",
        "General contractor services",
      ],
      faqs: [
        {
          question: "Can you build a deck in the Newburg area?",
          answer:
            "Yes. Rural properties near Newburg are great for decks and outdoor living spaces. We handle design, permitting, and construction in both composite and pressure-treated lumber.",
        },
        {
          question: "How close are you to Newburg for construction work?",
          answer:
            "Just 9 miles. Newburg is one of the closest communities we serve, which means quick site visits, responsive project management, and lower travel overhead.",
        },
        {
          question: "Do you handle bathroom remodels in Newburg?",
          answer:
            "Absolutely. We do full bathroom remodels including demo, plumbing, electrical, tile, drywall, and fixture installation.",
        },
      ],
    },
  },
  {
    slug: "plainfield-pa",
    name: "Plainfield",
    state: "PA",
    county: "Cumberland",
    zipCodes: ["17081"],
    population: 1800,
    distanceFromNewville: 6,
    tier: 3,
    geo: { lat: 40.1945, lng: -77.2889 },
    localContext:
      "Plainfield is a small community in West Pennsboro Township, sitting right along Route 11 between Newville and Carlisle. Its central location in the Cumberland Valley makes it an easy service area for us. Homes range from older farmhouses to newer single-family construction. Residents often need well pump work, general plumbing maintenance, and construction projects like additions and decks.",
    landmarks: [
      "Route 11 corridor",
      "West Pennsboro Township",
      "Cumberland Valley farmland",
    ],
    commonServices: [
      "Well pump service",
      "Faucet and fixture repair",
      "Home additions",
      "Deck building",
      "Drain clearing",
      "Emergency plumbing",
    ],
    nearbyAreas: [
      "carlisle-pa",
      "walnut-bottom-pa",
      "newburg-pa",
      "boiling-springs-pa",
    ],
    faqs: [
      {
        question: "How far is Plainfield from your shop?",
        answer:
          "Plainfield is only about 6 miles from our Newville shop — one of the closest areas we serve. We're right down Route 11.",
      },
      {
        question: "Do you build home additions in the Plainfield area?",
        answer:
          "Yes. We've built additions for several homes in the Plainfield and West Pennsboro Township area. We handle everything from foundation to finish.",
      },
      {
        question: "Can you work on farmhouse plumbing near Plainfield?",
        answer:
          "Absolutely. We have extensive experience with older farmhouse plumbing, including well systems, galvanized pipe replacement, and bringing rural properties up to modern code.",
      },
    ],
    metaTitle:
      "Plumber in Plainfield, PA | Well Pump & Additions",
    metaDescription:
      "Licensed plumber in Plainfield, PA — well pump service, home additions, deck building, drain clearing & emergency plumbing. Just 6 miles from our shop. Free estimates — (717) 776-7319.",
    contractorMeta: {
      metaTitle:
        "Contractor in Plainfield, PA | Additions & Decks",
      metaDescription:
        "Licensed contractor in Plainfield, PA — home additions, deck building, bathroom remodeling, custom carpentry & general construction. Just 6 miles from our shop. Free estimates — (717) 776-7319.",
      localContext:
        "Plainfield sits right along Route 11 between Newville and Carlisle — just 6 miles from our shop. Homes range from older farmhouses to newer single-family construction, and larger rural lots provide room for additions, decks, garages, and outbuildings. Our proximity makes Plainfield one of the easiest communities for us to serve with minimal drive time and quick project turnaround.",
      commonServices: [
        "Home additions",
        "Deck building",
        "Bathroom remodeling",
        "Custom carpentry",
        "Drywall & painting",
        "General contractor services",
      ],
      faqs: [
        {
          question: "Can you build an addition on my Plainfield home?",
          answer:
            "Yes. We build additions for homes throughout the Plainfield and West Pennsboro Township area. We handle everything from foundation to finish — one contractor for the whole project.",
        },
        {
          question: "How close are you to Plainfield?",
          answer:
            "Just 6 miles down Route 11. Plainfield is one of our closest service areas, which keeps project costs competitive and allows for quick site visits.",
        },
        {
          question: "Do you build garages or outbuildings near Plainfield?",
          answer:
            "Yes. The larger rural lots in the Plainfield area are well-suited for detached garages, workshops, and storage buildings. We handle permitting, foundation, and construction.",
        },
      ],
    },
  },
  {
    slug: "walnut-bottom-pa",
    name: "Walnut Bottom",
    state: "PA",
    county: "Cumberland",
    zipCodes: ["17266"],
    population: 500,
    distanceFromNewville: 3,
    tier: 3,
    geo: { lat: 40.1120, lng: -77.4190 },
    localContext:
      "Walnut Bottom is a small unincorporated community in South Newton Township, just 3 miles from our Newville shop. This rural area features scattered farmsteads and single-family homes with large lots. Most properties rely on well water and septic systems. As our closest service area, we can respond to Walnut Bottom calls almost immediately — making us the go-to contractor for everything from emergency plumbing to weekend deck projects.",
    landmarks: [
      "South Newton Township",
      "Walnut Bottom Road",
      "Rural Cumberland Valley",
    ],
    commonServices: [
      "Well pump service",
      "Water treatment systems",
      "Emergency plumbing",
      "Deck building",
      "Excavation",
      "Foundation work",
    ],
    nearbyAreas: [
      "shippensburg-pa",
      "newburg-pa",
      "plainfield-pa",
      "mount-holly-springs-pa",
    ],
    faqs: [
      {
        question: "How close are you to Walnut Bottom?",
        answer:
          "Walnut Bottom is only about 3 miles from our shop — the closest community we serve. We can be on-site in minutes.",
      },
      {
        question: "Do you do excavation work in the Walnut Bottom area?",
        answer:
          "Yes. We handle excavation for foundations, utility lines, drainage, and grading. The rural lots in the Walnut Bottom area often need site prep work before construction.",
      },
      {
        question: "Can you install a water treatment system at my Walnut Bottom home?",
        answer:
          "Absolutely. Most homes in Walnut Bottom are on well water. We install water softeners, filtration systems, and UV treatment to ensure clean, safe water for your family.",
      },
    ],
    metaTitle:
      "Plumber in Walnut Bottom, PA | 3 Miles From Our Shop",
    metaDescription:
      "Licensed plumber in Walnut Bottom, PA — well pump service, water treatment, emergency plumbing, excavation & deck building. Our closest service area, just 3 miles away. Free estimates — (717) 776-7319.",
    contractorMeta: {
      metaTitle:
        "Contractor in Walnut Bottom, PA | Just 3 Miles From Our Shop",
      metaDescription:
        "Licensed contractor in Walnut Bottom, PA — deck building, excavation, foundation work, bathroom remodeling & custom construction. Our closest service area. Free estimates — (717) 776-7319.",
      localContext:
        "Walnut Bottom is our closest service area — just 3 miles from our Newville shop. This rural South Newton Township community features scattered farmsteads and single-family homes on large lots, making it ideal for outdoor construction projects. We handle deck building, excavation, foundation work, and additions with virtually zero drive time, which translates to lower project costs and faster turnaround for Walnut Bottom homeowners.",
      commonServices: [
        "Deck building",
        "Excavation",
        "Foundation work",
        "Bathroom remodeling",
        "Home additions",
        "Custom carpentry",
      ],
      faqs: [
        {
          question: "How close are you to Walnut Bottom?",
          answer:
            "Just 3 miles — we're the closest licensed contractor to Walnut Bottom. This means fast response times, lower travel costs, and easy project management.",
        },
        {
          question: "Do you do excavation work near Walnut Bottom?",
          answer:
            "Yes. We handle excavation for foundations, utility lines, drainage, and grading. Rural lots in the Walnut Bottom area often need site preparation before construction.",
        },
        {
          question: "Can you build a deck or addition at my Walnut Bottom property?",
          answer:
            "Absolutely. The larger lots in Walnut Bottom provide great opportunities for decks, additions, and outbuildings. We handle design, permitting, and construction.",
        },
      ],
    },
  },
  {
    slug: "wormleysburg-pa",
    name: "Wormleysburg",
    state: "PA",
    county: "Cumberland",
    zipCodes: ["17043"],
    population: 3060,
    distanceFromNewville: 29,
    tier: 3,
    geo: { lat: 40.2593, lng: -76.9010 },
    localContext:
      "Wormleysburg is a small borough on the west bank of the Susquehanna River, directly across from Harrisburg. The community features river-adjacent homes, a walkable main street, and a mix of Victorian-era and mid-century housing. Its proximity to the state capital makes it a desirable residential area. Homeowners here frequently invest in bathroom and kitchen remodels, and the older housing stock creates steady demand for plumbing repairs and electrical updates.",
    landmarks: [
      "Susquehanna River waterfront",
      "Walnut Street Bridge (view)",
      "Market Street Bridge",
      "West Shore communities",
    ],
    commonServices: [
      "Plumbing repair & service",
      "Bathroom remodeling",
      "Kitchen remodeling",
      "Water heater replacement",
      "Drain clearing",
      "Electrical upgrades",
    ],
    nearbyAreas: [
      "lemoyne-pa",
      "camp-hill-pa",
      "enola-pa",
      "new-cumberland-pa",
    ],
    faqs: [
      {
        question: "Do you travel to Wormleysburg from Newville?",
        answer:
          "Yes. Wormleysburg is about 29 miles east of our shop. We serve the entire West Shore regularly and schedule Wormleysburg calls alongside nearby Camp Hill, Lemoyne, and Enola work.",
      },
      {
        question: "Can you remodel a kitchen in Wormleysburg?",
        answer:
          "Absolutely. Kitchen remodels are one of our specialties. We handle plumbing, electrical, drywall, flooring, and all the finish work — a single contractor for the whole project.",
      },
      {
        question: "Do you work on Victorian-era homes in Wormleysburg?",
        answer:
          "Yes. We have experience updating plumbing, electrical, and finishes in older homes while preserving their character. We'll recommend the best approach for your specific property.",
      },
    ],
    metaTitle:
      "Plumber in Wormleysburg, PA | Kitchen & Bathroom Remodeling",
    metaDescription:
      "Licensed plumber in Wormleysburg, PA — bathroom remodeling, kitchen renovation, water heater replacement, drain clearing & electrical upgrades. Family-owned since 2006. Free estimates — (717) 776-7319.",
    contractorMeta: {
      metaTitle:
        "Contractor in Wormleysburg, PA | Kitchen & Bath Remodel",
      metaDescription:
        "Licensed general contractor in Wormleysburg, PA — kitchen remodeling, bathroom renovation, Victorian home restoration, electrical upgrades & drywall. Since 2006. Free estimates — (717) 776-7319.",
      localContext:
        "Wormleysburg's river-adjacent homes and Victorian-era properties are prime candidates for kitchen and bathroom remodels, period-appropriate renovation, and electrical upgrades. The borough's desirable location across from Harrisburg means homeowners invest in their properties to maximize both comfort and resale value. We bring full general contractor capabilities — from demo through punch list — so Wormleysburg homeowners deal with one licensed team.",
      commonServices: [
        "Kitchen remodeling",
        "Bathroom remodeling",
        "Victorian home renovation",
        "Electrical upgrades",
        "Drywall & painting",
        "General contractor services",
      ],
      faqs: [
        {
          question: "Do you renovate Victorian-era homes in Wormleysburg?",
          answer:
            "Yes. We have experience updating older homes while preserving their character. We handle plumbing, electrical, drywall, trim, and finish work with attention to period-appropriate details.",
        },
        {
          question: "Can you remodel a kitchen in Wormleysburg?",
          answer:
            "Absolutely. Kitchen remodels are one of our specialties. We handle design, demo, plumbing, electrical, cabinetry, countertops, flooring, and all finish work.",
        },
        {
          question: "Are you licensed for construction in Wormleysburg?",
          answer:
            "Yes. We hold PA License #PA001752 and have been a licensed general contractor since 2006. We pull all required permits for Wormleysburg projects.",
        },
      ],
    },
  },
];

/** Look up a city by its URL slug */
export function getAreaBySlug(slug: string): ServiceArea | undefined {
  return SERVICE_AREAS.find((area) => area.slug === slug);
}

/** Get all slugs for generateStaticParams */
export function getAllAreaSlugs(): string[] {
  return SERVICE_AREAS.map((area) => area.slug);
}

/** Get areas filtered by tier */
export function getAreasByTier(tier: 1 | 2 | 3): ServiceArea[] {
  return SERVICE_AREAS.filter((area) => area.tier === tier);
}

/** Get nearby areas for a given slug */
export function getNearbyAreas(slug: string): ServiceArea[] {
  const area = getAreaBySlug(slug);
  if (!area) return [];
  return area.nearbyAreas
    .map((nearbySlug) => getAreaBySlug(nearbySlug))
    .filter((a): a is ServiceArea => a !== undefined);
}
