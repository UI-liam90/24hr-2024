import { imageFragment } from "@data/dataFragments";
export const globalFields = /* GraphQL */ `
acfOptionsContactDetails {
    contactDetails {
        address
        emailAddresses {
            email
        }
        telephoneNumbers {
            number
            prefix
        }
    }
}
posts {
   nodes {
        title
        uri
        featuredImage {
            node {
                ${imageFragment}
            }
        }
   }
}
`;
