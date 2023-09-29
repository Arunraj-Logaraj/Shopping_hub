import React, { useEffect } from "react";
import Slider from "../../components/Slider/Slider";
import "./HomePage.scss";
import Category from "./../../components/Category/Category";
import { useDispatch, useSelector } from "react-redux";
import SingleCategory from "./../../components/SingleCategory/SingleCategory";
import {
  fetchCategories,
  fetchProductsByCategory,
} from "../../store/categoriesSlice";
import { fetchProducts } from "../../store/productSlice";
import ProductList from "../../components/ProductList/ProductList";

const HomePage = () => {
  const dispatch = useDispatch();
  const { data: categories, status: categoryStatus } = useSelector(
    (state) => state.category
  );
  const { catProductAll: productsByCategory, catProductAllStatus } =
    useSelector((state) => state.category);

  const { data: products, status: productsStatus } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchProductsByCategory(1, "all"));
    dispatch(fetchProductsByCategory(1, "all"));
  }, []);

  return (
    <div className="home-page">
      <Slider />
      <Category categories={categories} status={categoryStatus} />
      <ProductList products={products} status={productsStatus} />

      {/* category is one product  */}
      {productsByCategory[0] && (
        <SingleCategory
          products={productsByCategory[0]}
          status={catProductAllStatus}
        />
      )}

      {/* category two product */}
      {/* {productsByCategory[1] && (
        <SingleCategory
          products={productsByCategory[1]}
          status={catProductAllStatus}
        />
      )} */}
    </div>
  );
};

export default HomePage;
