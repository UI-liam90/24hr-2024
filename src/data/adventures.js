import { imageFragment, seoFragment } from "./dataFragments";
import { heroBlockFields } from "@components/FlexibleContent/HeroBlock/query";
import GQLQuery from "@helpers/GQLQuery";

const pageQuery = `
    id
    databaseId
    content
    title
    date
    excerpt

    featuredImage {
        node {
          ${imageFragment}
        }
    }
    adventureFields {
        maxPlayers
        bannerImage {
            ${imageFragment}
        }
        adventureTags {
            title
            value
        }
    }
    seo {
        ${seoFragment}
    }
`;

export async function getAdventure(uri) {
    const query = {
        query: `
        query GetAdventureByUri {
            adventure(id: "${uri}", idType: URI) {
                ${pageQuery}
            }
        }
    `,
    };
    const responseBody = await GQLQuery(query);

    return responseBody.adventure;
}

export async function getBids(id, limit = 6, order = "DESC") {
    const query = {
        query: `
        query getBids {
            bids(where: {adventureId: ${id}, sortByBidAmount: "${order}"}, first: ${limit} ) {
              nodes {
                title
                bidFields {
                  attachedAdventure {
                    ... on Adventure {
                      id
                      databaseId
                    }
                  }
                  bidAmount
                  bidName
                }
              }
            }
          }
    `,
    };
    const responseBody = await GQLQuery(query);

    return responseBody.bids;
}

export async function getAdventureSlugs() {
    const query = {
        query: `query getAdventureSlugs {
            adventures(first: 10000) {
          nodes {
            slug
          }
        }
      }`,
    };
    const responseBody = await GQLQuery(query);

    return responseBody.adventures;
}
