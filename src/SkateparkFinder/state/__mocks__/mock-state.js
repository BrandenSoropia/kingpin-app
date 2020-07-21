export const mockSelectedSkateparkId = "ca-on-toronto-2";

export const mockFormattedSkateparksState = {
  "ca-on-toronto-1": {
    name: "Ashbridges Bay Skatepark / Beaches Skatepark",
    image: "",
    address: {
      street: "1420 Lake Shore Blvd E.",
      city: "Toronto",
      province: "ON",
      postal_code: "M4L6T1",
      country: "CA",
    },
    contact: {
      phone: "+14163926828",
      email: null,
      website: null,
    },

    description:
      "Toronto’s only regional scale skatepark, and the largest concrete skatepark in Ontario. Plaza style street skatepark, with ledges, banks, stairs, rails, hubbas and gaps. The plaza area has a lot of street style skateboarding variety, including some granite capped ledges and several replicas of famous downtown Toronto skatespots like the ‘Commerce Court Circle’. The skatepark also has a full size 11’ deep kidney bowl. This replica ‘California Pool’ includes actual pool coping for grinding and a stair channel for a challenging bowl ride.\n\nPortable washroom at Ashbridges Bay changehouse, along beach boardwalk on the south side of Lakeshore Blvd. E.",
    price: 0,
    hours: "Sunrise to Sunset",
  },
  "ca-on-toronto-2": {
    name: "Dunbat Skatepark",
    image: "",
    address: {
      street: "707 Dundas Street West",
      city: "Toronto",
      province: "ON",
      postal_code: "M5T2W6",
      country: "CA",
    },
    contact: {
      phone: "+14163920335",
      email: null,
      website: null,
    },
    description:
      "Spacious skatepark on super smooth concrete ground featuring wooden elements that are redesigned and rebuilt annually by local skateboarders. The layout changes every year, but usually includes several ledges, manual pads, banks and a 5' mini ramp. Great for late night sessions on a hot summer day.\n\nTemporary skatepark, open spring to fall, with lights on until 11pm.\n\nWashroom available onsite at community centre during operating hours.",
    price: 0,
    hours: "Sunset to Sunrise",
  },
  "ca-on-toronto-3": {
    name: "West Lodge Skatepark/Lansdown Skatepark",
    image: "",
    address: {
      street: "150 West Lodge Ave.",
      city: "Toronto",
      province: "ON",
      postal_code: "M6K2W1",
      country: "CA",
    },
    contact: {
      phone: null,
      email: null,
      website: null,
    },
    description:
      "Also known as the Parkdale Skatepark. Concrete community sized skatepark mostly street style. The skatepark includes a quarterpipe, bank, flatbar, two small ledges and a fun wavy ledge.",
    price: 0,
    hours: "Sunset to Sunrise",
  },
  "ca-on-toronto-4": {
    name: "Underpass Skatepark",
    image: "",
    address: {
      street: "33 St Lawrence St.",
      city: "Toronto",
      province: "ON",
      postal_code: null,
      country: "CA",
    },
    contact: {
      phone: null,
      email: null,
      website: null,
    },
    description:
      "Modular skatepark under the overpass provides a sanctuary from the rain. The skatepark includes various pre-fabricated ledges and manual pads, rails and some small banks, set on a concrete pad. Lights turn on after dusk.\n\nNo washrooms on site.",
    price: 0,
    hours: "24 Hrs with lights",
  },
  "ca-on-toronto-5": {
    name: "Dufferin Grove Skatepark",
    image: "",
    address: {
      street: "875 Dufferin St.",
      city: "Toronto",
      province: "ON",
      postal_code: "M6H4J3",
      country: "CA",
    },
    contact: {
      phone: null,
      email: null,
      website: null,
    },
    description:
      "Modular skatepark under the overpass provides a sanctuary from the rain. The skatepark includes various pre-fabricated ledges and manual pads, rails and some small banks, set on a concrete pad. Lights turn on after dusk.\n\nNo washrooms on site.",
    price: 0,
    hours: "Sunset to Sunrise",
  },
  "ca-on-toronto-6": {
    name: "CJs Skatepark",
    image: "",
    address: {
      street: "60 Horner Avenue",
      city: "Etobicoke",
      province: "ON",
      postal_code: "M8Z4X3",
      country: "CA",
    },
    contact: {
      phone: "+14162596888",
      email: "info@cjskateboardpark.com",
      website: null,
    },
    description:
      "Indoor skatepark, 28,000 square feet; featuring full sized vert ramp, foam pit, several mini ramps, and flow/street style course. Offers private, group and special needs classes for all skill levels!\n\nBMX on Wednesday and Sunday nights from 6:30pm to 10:00pm.",
    price: 22,
    hours: "Sunset to Sunrise",
  },
};

export const mockAppState = {
  skateparkFinder: {
    skateparks: mockFormattedSkateparksState,
    selectedSkateparkId: mockSelectedSkateparkId,
  },
};
