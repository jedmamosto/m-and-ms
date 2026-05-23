export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  region: string;
  maker: string;
  description: string;
  makerStory: string;
  keyAttribute: "heritage" | "flavor" | "utility";
  rating: number;
  reviewsCount: number;
  imageBg: string; // Tailwind color gradient for brand placement pattern
}

export const PRODUCTS: Product[] = [
  {
    id: "inabel-runner",
    name: "Inabel Handwoven Table Runner",
    price: 850,
    category: "Artisan Crafts",
    region: "Ilocos Region",
    maker: "Abel Weavers of Vigan",
    description: "Threads of thick hand-spun local cotton are woven together on century-old wooden looms. The runner features the historic geometric 'binakol' pattern, creating a soft, textured shield that protects your wooden surfaces while carrying the touch of multi-generational weavers.",
    makerStory: "Nanay Rosa has spent 42 years sitting at her family loom in Ilocos, working cotton threads with pedal-powered rhythm. By sourcing this table runner, you keep three weavers in her cooperative fully employed this season, preserving a cotton-weaving heritage that dates back to the 16th century.",
    keyAttribute: "heritage",
    rating: 4.9,
    reviewsCount: 38,
    imageBg: "from-amber-500 to-amber-600",
  },
  {
    id: "davao-chocolate",
    name: "Single-Origin Davao Dark Chocolate (70%)",
    price: 350,
    category: "Food Products",
    region: "Davao Region",
    maker: "Malagos Cacao Farmers",
    description: "Deep, earthy cocoa aroma carrying notes of ripe red cherries and toasted walnuts. This 70% dark chocolate bar is slowly conched in small batches, offering a velvety melt that showcases the volcanic soils of Mt. Talomo.",
    makerStory: "Grown by the farming families on the foothills of Mt. Talomo, Davao. The cooperative ensures direct-trade premiums that pay farmers 30% above standard market rates, funding clean water systems and secondary school tuition for farmers' children.",
    keyAttribute: "flavor",
    rating: 4.8,
    reviewsCount: 64,
    imageBg: "from-rose-700 to-rose-900",
  },
  {
    id: "batangas-barako",
    name: "Batangas Ground Kapeng Barako",
    price: 280,
    category: "Food Products",
    region: "Calabarzon",
    maker: "Lipa Coffee Growers Coop",
    description: "A dark-roasted, woody grind that releases a strong, smoky aroma when hot water hits. Made from pure Liberica beans, this coffee packs a thick, heavy-bodied punch with sweet, anise-like undertones.",
    makerStory: "Mang Cardo and his cooperative in Lipa harvest these rare, high-canopy Liberica beans by hand. Your purchase supports active replanting efforts to restore Batangas as the premier heritage coffee capital of the region.",
    keyAttribute: "flavor",
    rating: 4.7,
    reviewsCount: 112,
    imageBg: "from-stone-700 to-stone-900",
  },
  {
    id: "yakan-sling-bag",
    name: "Yakan Handwoven Sling Bag",
    price: 1850,
    category: "Fashion & Accessories",
    region: "Zamboanga Peninsula",
    maker: "Yakan Weavers of Basilan",
    description: "Vibrant yellow and turquoise geometric thread blocks cross to form a durable canvas. Features a heavy-duty brass zipper and a long, adjustable strap, blending ancient tribal signifier patterns with daily utility.",
    makerStory: "Woven in the Yakan tradition by sisters Elsa and Amina in Zamboanga. Every design reflects natural island elements—bamboo panels, diamonds, and fish scales—capturing Basilan's visual culture in a bag that takes three full days to weave.",
    keyAttribute: "heritage",
    rating: 5.0,
    reviewsCount: 22,
    imageBg: "from-indigo-600 to-violet-700",
  },
  {
    id: "paete-salad-bowl",
    name: "Paete Acacia Salad Bowl",
    price: 1200,
    category: "Artisan Crafts",
    region: "Calabarzon",
    maker: "Woodcarvers of Paete",
    description: "Smooth, heavy acacia wood hand-carved from a single timber block. Finished with organic food-safe beeswax, exposing the rich contrasting light and dark woodgrains that make every bowl unique.",
    makerStory: "Carved by Mang Kiko, a master artisan in Paete, Laguna—the carving capital of the Philippines. He hand-selects sustainable, fallen acacia wood and turns it on a foot-lathe, supporting a workshop that trains local out-of-school youth.",
    keyAttribute: "utility",
    rating: 4.9,
    reviewsCount: 45,
    imageBg: "from-amber-800 to-yellow-900",
  },
  {
    id: "benguet-honey",
    name: "Benguet Wildflower Honey",
    price: 480,
    category: "Food Products",
    region: "Cordillera",
    maker: "Benguet Apiculture Coop",
    description: "Unfiltered, golden-amber forest nectar with a floral, herbal sweetness. Harvested raw from hives in pine-covered highlands, retaining all natural pollen grains and enzymes.",
    makerStory: "Local beekeepers in the Cordillera mountains collect this wildflower honey during dry season blooms. The cooperative practices sustainable bee conservation, protecting mountain pine forests while providing secondary income for upland vegetable farmers.",
    keyAttribute: "flavor",
    rating: 4.8,
    reviewsCount: 57,
    imageBg: "from-yellow-500 to-amber-500",
  },
  {
    id: "vco-soaps",
    name: "VCO Handcrafted Soap Set",
    price: 390,
    category: "Health & Beauty",
    region: "Eastern Visayas",
    maker: "Leyte Coco-Growers Assoc",
    description: "Three organic, cold-processed soap bars rich in virgin coconut oil. Lathers into a thick cream that hydrates dry skin, infused with therapeutic essential oils of local calamansi, lemongrass, and moringa.",
    makerStory: "Hand-blended by a women's farming cooperative in Leyte using fresh, cold-pressed coconut oil. This direct enterprise empowers Yolanda-surviving agricultural families with value-adding coconut processing income.",
    keyAttribute: "utility",
    rating: 4.9,
    reviewsCount: 73,
    imageBg: "from-emerald-500 to-teal-600",
  },
  {
    id: "romblon-beach-hat",
    name: "Romblon Abaca Sun Hat",
    price: 950,
    category: "Fashion & Accessories",
    region: "Mimaropa",
    maker: "Romblon Weavers Guild",
    description: "A wide-brimmed, breathable sun hat tightly hand-braided from natural abaca and buri palm fibers. Offers UPF protection while remaining lightweight and packable for tropical travels.",
    makerStory: "Hand-braided by Romblon weavers using locally harvested buri leaves. Guild members work from home, allowing them to tend to their family farms while earning fair-trade income from weaving.",
    keyAttribute: "utility",
    rating: 4.6,
    reviewsCount: 29,
    imageBg: "from-yellow-700 to-orange-800",
  },
];
