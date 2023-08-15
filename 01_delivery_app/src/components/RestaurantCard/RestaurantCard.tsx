import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import images from "../../assets/images";
import styles from "./styles";
type Props = {
    id: string;
    imgUrl: string;
    title: string;
    lat: number;
    long: number;
    dishes: number;
    short_description: string;
    genre: string;
    address: string;
    rating: number;
};
const RestaurantCard = function ({
    id,
    imgUrl,
    title,
    lat,
    long,
    dishes,
    short_description,
    genre,
    address,
    rating,
}: Props) {
    const navigation: any = useNavigation();
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={images.logo} />
            <View style={styles.inner}>
                <Text style={styles.title}>{title || "One Title"}</Text>
                <View style={styles.content}>
                    <AntDesign name="star" size={20} color={"#00CCBB"} />
                    <Text style={styles.genre}>
                        <Text style={styles.rating}>{rating}</Text>
                        {" . "}
                        {genre || "Genre"}
                    </Text>
                </View>
                <View style={styles.location}>
                    <Entypo name="lock" size={20} color={"gray"} />
                    <Text style={styles.address}>
                        Nearby . {address || "Ha noi"}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default RestaurantCard;
