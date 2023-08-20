import React, { useEffect, useLayoutEffect } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

import styles from "./styles";
import images from "../../assets/images";

type Props = {};

const Restaurant = function ({}: Props) {
    const navigation: any = useNavigation();
    useLayoutEffect(function () {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    // const {
    //     params: {
    //         id,
    //         imgUrl,
    //         title,
    //         lat,
    //         long,
    //         dishes,
    //         short_description,
    //         genre,
    //         address,
    //         rating,
    //     },
    // }: any = useRoute();

    return (
        <React.Fragment>
            <ScrollView style={styles.container}>
                <View>
                    <Image source={images.logo} style={styles.image} />
                    <TouchableOpacity
                        style={styles.goBackIcon}
                        onPress={function () {
                            return navigation.goBack();
                        }}
                    >
                        <AntDesign
                            name={"arrowleft"}
                            size={20}
                            color={"#00CCBB"}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.barIcon}
                        onPress={function () {
                            return navigation.goBack();
                        }}
                    >
                        <Entypo
                            name={"dots-three-vertical"}
                            size={20}
                            color={"#00CCBB"}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.outer}>
                    <View style={styles.inner}>
                        <Text style={styles.title}>Store</Text>
                        <View style={styles.review}>
                            <View style={styles.evaluate}>
                                <AntDesign
                                    color={"#00CCBB"}
                                    name={"star"}
                                    size={22}
                                />
                                <Text style={styles.genre}>
                                    <Text style={styles.rank}>4.5</Text> . genre
                                </Text>
                            </View>
                            <View style={styles.evaluate}>
                                <Entypo
                                    color={"gray"}
                                    name={"lock"}
                                    size={22}
                                />
                                <Text style={styles.genre}>
                                    Nearby . Ha Noi - Viet Nam
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.description}>
                            short_description
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.questions}>
                        <AntDesign
                            color={"#00CCBB"}
                            name="questioncircle"
                            size={20}
                        />
                        <Text style={styles.questTionText}>
                            Have a food allergy ?
                        </Text>
                        <Entypo
                            size={20}
                            name="chevron-right"
                            color={"#00CCBB"}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <Text style={styles.menu}>Menu</Text>
                </View>
            </ScrollView>
        </React.Fragment>
    );
};

export default Restaurant;
