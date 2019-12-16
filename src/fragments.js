import gpl from "graphql-tag";

export const NOTE_FRAGMENT = gpl`
  fragment Notepars on Note {
      id
      title
      content
  }  
`;