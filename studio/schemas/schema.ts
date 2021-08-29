import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// DOCUMENTS
import category from "./documents/category";
import post from "./documents/article";
import author from "./documents/author";
import pin from "./documents/pin";
const documents = [category, post, author, pin];

// PORTABLE TEXTS
import articlePortableText from "./portableText/articlePortableText";
import descriptionPortableText from "./portableText/descriptionPortableText";
import blockContent from "./portableText/blockContent";
const portableTexts = [
  articlePortableText,
  descriptionPortableText,
  blockContent,
];

// OBJECTS
import externalLink from "./objects/externalLink";
import internalLink from "./objects/internalLink";
import figure from "./objects/figure";
const objects = [externalLink, internalLink, figure];

export default createSchema({
  name: "default",
  types: schemaTypes.concat([...documents, ...portableTexts, ...objects]),
});
