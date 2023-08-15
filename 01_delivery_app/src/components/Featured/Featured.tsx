import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./styles";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
type Props = {
    id: string;
    title: string;
    description: string;
};
const Featured = function ({ id, title, description }: Props) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.heading}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity>
                    <AntDesign
                        color={"#00CCBB"}
                        name={"arrowright"}
                        size={22}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.description}>{description}</Text>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                <RestaurantCard
                    id=""
                    address=""
                    dishes={10}
                    genre=""
                    imgUrl=""
                    lat={100}
                    long={200}
                    rating={4.5}
                    short_description=""
                    title=""
                />

                <RestaurantCard
                    id=""
                    address=""
                    dishes={10}
                    genre=""
                    imgUrl=""
                    lat={100}
                    long={200}
                    rating={4.5}
                    short_description=""
                    title=""
                />
                <RestaurantCard
                    id=""
                    address=""
                    dishes={10}
                    genre=""
                    imgUrl=""
                    lat={100}
                    long={200}
                    rating={4.5}
                    short_description=""
                    title=""
                />
                <RestaurantCard
                    id=""
                    address=""
                    dishes={10}
                    genre=""
                    imgUrl=""
                    lat={100}
                    long={200}
                    rating={4.5}
                    short_description=""
                    title=""
                />
                
            </ScrollView>
        </View>
    );
};

export default Featured;
