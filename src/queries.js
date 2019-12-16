import gpl from "graphql-tag";

export const GET_NOTES = gpl`
    {
        notes @client {
            id
            title
            content
        }
    }
`;