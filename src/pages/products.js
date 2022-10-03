import React, { useState } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { graphql } from "gatsby";

import "../styles/ProductPage.css";

import { content } from "../content/languages";
import { Helmet } from "react-helmet";

const ProductsPage = (props) => {
  let { language, setLanguage, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  const { data } = props;

  const allProducts = data.allContentfulProduct.nodes;

  const emptyQuery = "";

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  });

  const handleInputChange = (event) => {
    const query = event.target.value;
    const { data } = props;

    const products = data.allContentfulProduct.nodes || [];

    const filteredData = products.filter((product) => {
      const { productCategory } = product;
      return productCategory === query;
    });
    setState({
      query,
      filteredData,
    });
  };

  const { filteredData, query } = state;
  const hasSearchResults = filteredData && query !== emptyQuery;
  const products = hasSearchResults ? filteredData : allProducts;

  const productList = products.map((product) => {
    return (
      <div key={product.id}>
        <h2 className="product-name">{product.productName}</h2>
        <div
          className="product-card"
          style={{
            backgroundImage: `url(${product.productImage.file.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <span className="product-price">{product.productPrice}</span>
          {language === "french" ? (
            <p className="product-description">
              {product.productDescriptionFrench}
            </p>
          ) : (
            <p className="product-description">{product.productDescription}</p>
          )}
        </div>
      </div>
    );
  });

  return (
    <>
      <Helmet>
        <title>Products</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Children's Illustrations for all ages made by Claire Turner, in Talloires, France."
        />
        <meta
          name="keywords"
          content="children's illustrations, animal illustrations, Talloires, France, Shell and Shanties, watercolors, digital prints, ink drawing, acrylic, bunting"
        />
        <link rel="canonical" href="https://www.claireturner-design.com/" />
      </Helmet>
      <Header language={language} languageToUse={languageToUse} />
      <div className="product-category-selection">
        <button
          className="category-select-button"
          onClick={handleInputChange}
          value="watercolors"
        >
          {language === "french" ? "Aquarelles" : "Watercolors"}
        </button>
        <button
          className="category-select-button"
          onClick={handleInputChange}
          value="digital prints"
        >
          {language === "french" ? "Impressions Numériques" : "Digital Prints"}
        </button>
        <button
          className="category-select-button"
          onClick={handleInputChange}
          value="ink drawings"
        >
          {language === "french" ? "Sessins à l'encre" : "Ink Drawing"}
        </button>
        <button
          className="category-select-button"
          onClick={handleInputChange}
          value="acrylic"
        >
          {language === "french" ? "Acrylique" : "Acrylic"}
        </button>
        <button
          className="category-select-button"
          onClick={handleInputChange}
          value="bunting"
        >
          {language === "french" ? "Guirlande" : "Bunting"}
        </button>
        <button
          className="category-select-button"
          onClick={handleInputChange}
          value="shells"
        >
          Shells and Shanties
        </button>
        <button
          className="category-select-button"
          onClick={handleInputChange}
          value=""
        >
          {language === "french" ? "Tout" : " All"}
        </button>
      </div>
      <div className="product-page">{productList}</div>
      <Footer
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
    </>
  );
};
export const productQuery = graphql`
  query productQuery {
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
        productPrice
        productCategory
        id
      }
    }
  }
`;

ProductsPage.Layout = Layout;
export default ProductsPage;
