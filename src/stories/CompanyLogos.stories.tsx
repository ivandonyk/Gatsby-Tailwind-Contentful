import React from "react";
import CompanyLogosComponent from "../components/CompanyLogos";

export default {
  title: "CompanyLogos",
};

export const CompanyLogos = () => {
  return (
    <div className="bg-ar-dark p-10">
      <CompanyLogosComponent
        companyLogoHeading="Join 25,000 companies using the AccuRanker platform"
        companyLogos={mock as any}
      />
    </div>
  );
};

// this is the data that Contentful provides for the logo images. Gatsby and Storybook are hard to match
// Because gatsby uses static queries on build time and when running Storybook this data is not there
// This is not ideal, but will have to do for now, until there is a way to integrate both without bugs
const mock = [
  {
    title: "Ikea",
    gatsbyImageData: {
      images: {
        sources: [
          {
            srcSet:
              "//images.ctfassets.net/tdpyozytknjz/5xjvb12pspU3gl07bPeOYW/01400e84cd978563a16c07481496dd0e/Ikea.png?w=22&h=8&q=50&fm=webp 22w,\n//images.ctfassets.net/tdpyozytknjz/5xjvb12pspU3gl07bPeOYW/01400e84cd978563a16c07481496dd0e/Ikea.png?w=44&h=15&q=50&fm=webp 44w,\n//images.ctfassets.net/tdpyozytknjz/5xjvb12pspU3gl07bPeOYW/01400e84cd978563a16c07481496dd0e/Ikea.png?w=88&h=30&q=50&fm=webp 88w",
            sizes: "(min-width: 88px) 88px, 100vw",
            type: "image/webp",
          },
        ],
        fallback: {
          src:
            "//images.ctfassets.net/tdpyozytknjz/5xjvb12pspU3gl07bPeOYW/01400e84cd978563a16c07481496dd0e/Ikea.png?w=88&h=30&q=50&fm=png",
          srcSet:
            "//images.ctfassets.net/tdpyozytknjz/5xjvb12pspU3gl07bPeOYW/01400e84cd978563a16c07481496dd0e/Ikea.png?w=22&h=8&q=50&fm=png 22w,\n//images.ctfassets.net/tdpyozytknjz/5xjvb12pspU3gl07bPeOYW/01400e84cd978563a16c07481496dd0e/Ikea.png?w=44&h=15&q=50&fm=png 44w,\n//images.ctfassets.net/tdpyozytknjz/5xjvb12pspU3gl07bPeOYW/01400e84cd978563a16c07481496dd0e/Ikea.png?w=88&h=30&q=50&fm=png 88w",
          sizes: "(min-width: 88px) 88px, 100vw",
        },
      },
      layout: "constrained",
      backgroundColor: "#f8f8f8",
      width: 88,
      height: 30.000000000000004,
    },
  },
  {
    title: "jellyfish",
    gatsbyImageData: {
      images: {
        sources: [
          {
            srcSet:
              "//images.ctfassets.net/tdpyozytknjz/1K2OS91Kr3HErQk2reOSDm/f22fe5d2ece1e17d800674c8b59de8bd/jellyfish.png?w=6&h=12&q=50&fm=webp 6w,\n//images.ctfassets.net/tdpyozytknjz/1K2OS91Kr3HErQk2reOSDm/f22fe5d2ece1e17d800674c8b59de8bd/jellyfish.png?w=12&h=23&q=50&fm=webp 12w,\n//images.ctfassets.net/tdpyozytknjz/1K2OS91Kr3HErQk2reOSDm/f22fe5d2ece1e17d800674c8b59de8bd/jellyfish.png?w=24&h=46&q=50&fm=webp 24w",
            sizes: "(min-width: 24px) 24px, 100vw",
            type: "image/webp",
          },
        ],
        fallback: {
          src:
            "//images.ctfassets.net/tdpyozytknjz/1K2OS91Kr3HErQk2reOSDm/f22fe5d2ece1e17d800674c8b59de8bd/jellyfish.png?w=24&h=46&q=50&fm=png",
          srcSet:
            "//images.ctfassets.net/tdpyozytknjz/1K2OS91Kr3HErQk2reOSDm/f22fe5d2ece1e17d800674c8b59de8bd/jellyfish.png?w=6&h=12&q=50&fm=png 6w,\n//images.ctfassets.net/tdpyozytknjz/1K2OS91Kr3HErQk2reOSDm/f22fe5d2ece1e17d800674c8b59de8bd/jellyfish.png?w=12&h=23&q=50&fm=png 12w,\n//images.ctfassets.net/tdpyozytknjz/1K2OS91Kr3HErQk2reOSDm/f22fe5d2ece1e17d800674c8b59de8bd/jellyfish.png?w=24&h=46&q=50&fm=png 24w",
          sizes: "(min-width: 24px) 24px, 100vw",
        },
      },
      layout: "constrained",
      backgroundColor: "#080808",
      width: 24,
      height: 46,
    },
  },
  {
    title: "aira",
    gatsbyImageData: {
      images: {
        sources: [
          {
            srcSet:
              "//images.ctfassets.net/tdpyozytknjz/562sniD99Iuy7qzZJF8UmL/d63c6401fd8c02e93a03a15990b2577d/aira.png?w=24&h=24&q=50&fm=webp 24w,\n//images.ctfassets.net/tdpyozytknjz/562sniD99Iuy7qzZJF8UmL/d63c6401fd8c02e93a03a15990b2577d/aira.png?w=48&h=48&q=50&fm=webp 48w,\n//images.ctfassets.net/tdpyozytknjz/562sniD99Iuy7qzZJF8UmL/d63c6401fd8c02e93a03a15990b2577d/aira.png?w=96&h=96&q=50&fm=webp 96w",
            sizes: "(min-width: 96px) 96px, 100vw",
            type: "image/webp",
          },
        ],
        fallback: {
          src:
            "//images.ctfassets.net/tdpyozytknjz/562sniD99Iuy7qzZJF8UmL/d63c6401fd8c02e93a03a15990b2577d/aira.png?w=96&h=96&q=50&fm=png",
          srcSet:
            "//images.ctfassets.net/tdpyozytknjz/562sniD99Iuy7qzZJF8UmL/d63c6401fd8c02e93a03a15990b2577d/aira.png?w=24&h=24&q=50&fm=png 24w,\n//images.ctfassets.net/tdpyozytknjz/562sniD99Iuy7qzZJF8UmL/d63c6401fd8c02e93a03a15990b2577d/aira.png?w=48&h=48&q=50&fm=png 48w,\n//images.ctfassets.net/tdpyozytknjz/562sniD99Iuy7qzZJF8UmL/d63c6401fd8c02e93a03a15990b2577d/aira.png?w=96&h=96&q=50&fm=png 96w",
          sizes: "(min-width: 96px) 96px, 100vw",
        },
      },
      layout: "constrained",
      backgroundColor: "#080808",
      width: 96,
      height: 96,
    },
  },
  {
    title: "kinsta",
    gatsbyImageData: {
      images: {
        sources: [
          {
            srcSet:
              "//images.ctfassets.net/tdpyozytknjz/21wDclT2XO0pfd3mxm3coD/f35cb07faa68704220f56adb96883a96/kinsta.png?w=24&h=24&q=50&fm=webp 24w,\n//images.ctfassets.net/tdpyozytknjz/21wDclT2XO0pfd3mxm3coD/f35cb07faa68704220f56adb96883a96/kinsta.png?w=48&h=48&q=50&fm=webp 48w,\n//images.ctfassets.net/tdpyozytknjz/21wDclT2XO0pfd3mxm3coD/f35cb07faa68704220f56adb96883a96/kinsta.png?w=96&h=96&q=50&fm=webp 96w",
            sizes: "(min-width: 96px) 96px, 100vw",
            type: "image/webp",
          },
        ],
        fallback: {
          src:
            "//images.ctfassets.net/tdpyozytknjz/21wDclT2XO0pfd3mxm3coD/f35cb07faa68704220f56adb96883a96/kinsta.png?w=96&h=96&q=50&fm=png",
          srcSet:
            "//images.ctfassets.net/tdpyozytknjz/21wDclT2XO0pfd3mxm3coD/f35cb07faa68704220f56adb96883a96/kinsta.png?w=24&h=24&q=50&fm=png 24w,\n//images.ctfassets.net/tdpyozytknjz/21wDclT2XO0pfd3mxm3coD/f35cb07faa68704220f56adb96883a96/kinsta.png?w=48&h=48&q=50&fm=png 48w,\n//images.ctfassets.net/tdpyozytknjz/21wDclT2XO0pfd3mxm3coD/f35cb07faa68704220f56adb96883a96/kinsta.png?w=96&h=96&q=50&fm=png 96w",
          sizes: "(min-width: 96px) 96px, 100vw",
        },
      },
      layout: "constrained",
      backgroundColor: "#080808",
      width: 96,
      height: 96,
    },
  },
  {
    title: "koozai",
    gatsbyImageData: {
      images: {
        sources: [
          {
            srcSet:
              "//images.ctfassets.net/tdpyozytknjz/7MJe9lFCJurb6Hd5ozxjEs/008dfb5671b3b7ef16c64240950413ed/koozai.png?w=24&h=11&q=50&fm=webp 24w,\n//images.ctfassets.net/tdpyozytknjz/7MJe9lFCJurb6Hd5ozxjEs/008dfb5671b3b7ef16c64240950413ed/koozai.png?w=49&h=22&q=50&fm=webp 49w,\n//images.ctfassets.net/tdpyozytknjz/7MJe9lFCJurb6Hd5ozxjEs/008dfb5671b3b7ef16c64240950413ed/koozai.png?w=97&h=44&q=50&fm=webp 97w",
            sizes: "(min-width: 97px) 97px, 100vw",
            type: "image/webp",
          },
        ],
        fallback: {
          src:
            "//images.ctfassets.net/tdpyozytknjz/7MJe9lFCJurb6Hd5ozxjEs/008dfb5671b3b7ef16c64240950413ed/koozai.png?w=97&h=44&q=50&fm=png",
          srcSet:
            "//images.ctfassets.net/tdpyozytknjz/7MJe9lFCJurb6Hd5ozxjEs/008dfb5671b3b7ef16c64240950413ed/koozai.png?w=24&h=11&q=50&fm=png 24w,\n//images.ctfassets.net/tdpyozytknjz/7MJe9lFCJurb6Hd5ozxjEs/008dfb5671b3b7ef16c64240950413ed/koozai.png?w=49&h=22&q=50&fm=png 49w,\n//images.ctfassets.net/tdpyozytknjz/7MJe9lFCJurb6Hd5ozxjEs/008dfb5671b3b7ef16c64240950413ed/koozai.png?w=97&h=44&q=50&fm=png 97w",
          sizes: "(min-width: 97px) 97px, 100vw",
        },
      },
      layout: "constrained",
      backgroundColor: "#080808",
      width: 97,
      height: 44,
    },
  },
  {
    title: "hubspot",
    gatsbyImageData: {
      images: {
        sources: [
          {
            srcSet:
              "//images.ctfassets.net/tdpyozytknjz/FrEma4JWLbYUlHhjJ01oC/02f47264709a95a74c9859b5b2d0f69c/hubspot.png?w=22&h=7&q=50&fm=webp 22w,\n//images.ctfassets.net/tdpyozytknjz/FrEma4JWLbYUlHhjJ01oC/02f47264709a95a74c9859b5b2d0f69c/hubspot.png?w=43&h=13&q=50&fm=webp 43w,\n//images.ctfassets.net/tdpyozytknjz/FrEma4JWLbYUlHhjJ01oC/02f47264709a95a74c9859b5b2d0f69c/hubspot.png?w=86&h=26&q=50&fm=webp 86w",
            sizes: "(min-width: 86px) 86px, 100vw",
            type: "image/webp",
          },
        ],
        fallback: {
          src:
            "//images.ctfassets.net/tdpyozytknjz/FrEma4JWLbYUlHhjJ01oC/02f47264709a95a74c9859b5b2d0f69c/hubspot.png?w=86&h=26&q=50&fm=png",
          srcSet:
            "//images.ctfassets.net/tdpyozytknjz/FrEma4JWLbYUlHhjJ01oC/02f47264709a95a74c9859b5b2d0f69c/hubspot.png?w=22&h=7&q=50&fm=png 22w,\n//images.ctfassets.net/tdpyozytknjz/FrEma4JWLbYUlHhjJ01oC/02f47264709a95a74c9859b5b2d0f69c/hubspot.png?w=43&h=13&q=50&fm=png 43w,\n//images.ctfassets.net/tdpyozytknjz/FrEma4JWLbYUlHhjJ01oC/02f47264709a95a74c9859b5b2d0f69c/hubspot.png?w=86&h=26&q=50&fm=png 86w",
          sizes: "(min-width: 86px) 86px, 100vw",
        },
      },
      layout: "constrained",
      backgroundColor: "#080808",
      width: 86,
      height: 26,
    },
  },
];
