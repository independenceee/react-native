import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import images from "../../assets/images";

type Props = {
    imgUrl: string;
    title: string;
};
const CategoryCard = function ({ imgUrl, title }: Props) {
    return (
        <TouchableOpacity style={styles.wrapper}>
            <Image style={styles.image} source={images.logo} />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CategoryCard;
