import GQLQuery from "@helpers/GQLQuery";
import { menuFragment } from "./dataFragments";

export async function getMenu(location = "MAIN_NAV") {
    const query = {
        query: `
          query {
            menuItems(first: 1000,where: {location: ${location}}) {
              nodes {
                ${menuFragment}
              }
            }
          }
      `,
    };
    const responseBody = await GQLQuery(query, {});

    return responseBody;
}
