import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

import "../styles/ProductPage.css";

const Products = ({ language, setLanguage, languageToUse, productsData }) => {
  const allProducts = productsData;

  const emptyQuery = "";

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  });

  const handleInputChange = (event) => {
    const query = event.target.value;

    const filteredData = allProducts.filter((product) => {
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
            backgroundImage: product.productImage?.file?.url
              ? `url(${product.productImage.file.url})`
              : "none",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <span className="product-price">
            {product.priceTo
              ? `€${product.priceFrom} – €${product.priceTo}`
              : `€${product.priceFrom}`}
          </span>

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
      <Helmet
        htmlAttributes={{
          lang: language === "french" ? "fr" : "en",
        }}
      >
        <title>{language === "french" ? "Produits" : "Products"}</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Children's Illustrations for all ages made by Claire Turner, in Talloires, France."
        />
        <meta
          name="keywords"
          content="children's illustrations, animal illustrations, Talloires, France, fine art prints, original paintings, murals, children's prints"
        />
        <link rel="canonical" href="https://www.claireturner-design.com/" />
      </Helmet>

      <Header
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />

      <div className="product-category-selection">
        <button
          className="category-select-button"
          onClick={handleInputChange}
          value="fine art"
        >
          {language === "french" ? "Tirages Fine Art" : "Fine Art prints"}
        </button>

        <button
          className="category-select-button"
          onClick={handleInputChange}
          value="originals"
        >
          {language === "french"
            ? "Peintures originales"
            : "Original Paintings"}
        </button>

        <button
          className="category-select-button"
          onClick={handleInputChange}
          value="murals"
        >
          {language === "french" ? "Fresque murale" : "Art Murals"}
        </button>

        <button
          className="category-select-button"
          onClick={handleInputChange}
          value="childrens"
        >
          {language === "french" ? "Art pour enfants" : "Children’s prints"}
        </button>

        <button
          className="category-select-button"
          onClick={handleInputChange}
          value=""
        >
          {language === "french" ? "Tout" : "All"}
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

export default Products;
