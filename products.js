/* ============================================================
   PIPO — PRODUCT CATALOG
   ============================================================
   This is the ONLY file you need to touch to add, remove or
   edit products. The website reads this file automatically —
   you never have to touch index.html, style.css or app.js.

   HOW TO ADD A NEW PRODUCT:
   1. Copy one whole block below, from the opening { to the
      closing },
   2. Paste it right after the last product in the list,
   3. Change the values between the quotes.

   FIELD GUIDE:
   - id            → any unique text, e.g. "07". Just don't
                      repeat one that's already used.
   - name          → product title, shown on the card and the
                      detail view.
   - price         → shown as plain text, e.g. "$19.00" or
                      "£19.00" — write it exactly how you want
                      it to appear.
   - image         → a direct link to a product photo
                      (must end in .jpg / .png / .webp etc, or
                      be a working image URL).
   - description   → a few sentences about the product. This
                      is shown when someone clicks the product.
   - affiliateLink → the URL the big "Buy now" button opens.
                      Put YOUR affiliate link here.
   ============================================================ */

const PRODUCTS = [
  {
    id: "01",
    name: "Wobble Desk Companion",
    price: "$18.00",
    image: "https://picsum.photos/seed/pipo-wobble/900/900",
    description:
      "A small weighted figure that rocks gently whenever your desk gets bumped. No batteries, no app — just a satisfying wobble that settles your nerves between meetings. Comes in matte ceramic, about the size of a fist.",
    affiliateLink: "https://example.com/your-affiliate-link-1"
  },
  {
    id: "02",
    name: "Field Notes Tote",
    price: "$26.00",
    image: "https://picsum.photos/seed/pipo-tote/900/900",
    description:
      "Heavyweight canvas tote with a flat base so it actually stands up on its own. Fits a laptop, a water bottle and whatever you picked up at the farmer's market. The strap is long enough to wear cross-body.",
    affiliateLink: "https://example.com/your-affiliate-link-2"
  },
  {
    id: "03",
    name: "Slow Morning Candle",
    price: "$22.00",
    image: "https://picsum.photos/seed/pipo-candle/900/900",
    description:
      "Soy wax candle scented like cedar, wet stone and the first coffee of the day. Burns cleanly for about 40 hours in a reusable stoneware cup you'll want to keep long after the wax is gone.",
    affiliateLink: "https://example.com/your-affiliate-link-3"
  },
  {
    id: "04",
    name: "Two-Tone Speckle Mug",
    price: "$16.00",
    image: "https://picsum.photos/seed/pipo-mug/900/900",
    description:
      "A stoneware mug with a speckled glaze that comes out slightly different every time it's fired, so no two are quite alike. Holds a generous 12oz and is safe for the microwave and dishwasher.",
    affiliateLink: "https://example.com/your-affiliate-link-4"
  },
  {
    id: "05",
    name: "Pocket Notebook Trio",
    price: "$14.00",
    image: "https://picsum.photos/seed/pipo-notebook/900/900",
    description:
      "Three dot-grid notebooks, small enough to live in a jacket pocket. Thread-stitched, lay-flat binding, and a spare elastic loop on the back cover to hold a pen or a folded receipt.",
    affiliateLink: "https://example.com/your-affiliate-link-5"
  },
  {
    id: "06",
    name: "Tiny Terracotta Planter",
    price: "$12.00",
    image: "https://picsum.photos/seed/pipo-planter/900/900",
    description:
      "An unglazed terracotta pot with a drainage hole and a matching saucer, sized for a single small succulent or a cutting you're trying to root. It weathers and pales beautifully with age.",
    affiliateLink: "https://example.com/your-affiliate-link-6"
  }
];
