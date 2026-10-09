# Project conventions

- Add manufacturer overviews to the shared brand catalogue and `/brands/:slug` page; optional model imagery and partnership flags let new brands reuse the index, carousel and SEO without separate pages.

- Keep manufacturer probe price/specification rows in `src/data/micsigProducts.ts`, referenced from the Micsig brand entry, because the uploaded catalogue has many listings and the shared brand page renders them consistently.
- Use CDN asset pointers for manufacturer product imagery so official photos remain stable and do not depend on third-party hotlinking.