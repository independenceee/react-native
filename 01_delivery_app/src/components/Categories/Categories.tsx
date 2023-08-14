import React from "react";
import { ScrollView } from "react-native";
import styles from "./styles";
import CategoryCard from "../CategoryCard/CategoryCard";

type Props = {};
const Categories = function ({}: Props) {
    return (
        <ScrollView
            contentContainerStyle={styles.wrapper}
            showsHorizontalScrollIndicator={false}
            horizontal
        >
            <CategoryCard imgUrl="" title="Delivery"/>
            <CategoryCard imgUrl="" title="Delivery"/>
            <CategoryCard imgUrl="" title="Delivery"/>
            <CategoryCard imgUrl="" title="Delivery"/>
            <CategoryCard imgUrl="" title="Delivery"/>
            <CategoryCard imgUrl="" title="Delivery"/>
            <CategoryCard imgUrl="" title="Delivery"/>
        </ScrollView>
    );
};

export default Categories;
