import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { content } from "../content/languages";
import Products from "../components/Products";

const ProductsPage = ({ data }) => {
  const language = "english";
  const languageToUse = content.english;

  return (
    <Products
      language={language}
      languageToUse={languageToUse}
      productsData={data.allContentfulProduct.nodes}
    />
  );
};

export const query = graphql`
  query {
    allContentfulProduct {
      nodes {
        productDescription
        productDescriptionFrench
        productImage {
          file {
            url
          }
        }
        productName
        priceFrom
        priceTo
        productCategory
        id
      }
    }
  }
`;

ProductsPage.Layout = Layout;
export default ProductsPage;
