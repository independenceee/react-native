import React, { useState, useLayoutEffect } from "react";
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import images from "../../assets/images";
import styles from "./styles";
import Categories from "../../components/Categories/Categories";
import Featured from "../../components/Featured/Featured";

type Props = {};
const Home = function ({}: Props) {
    const navigation = useNavigation();
    useLayoutEffect(function () {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={images.logo} style={styles.logoImage} />
                </TouchableOpacity>
                <View style={styles.logoContent}>
                    <Text style={styles.hashTag}>Deliver Now !</Text>
                    <Text style={styles.location}>
                        Current Location{" "}
                        <Entypo
                            name="chevron-down"
                            size={20}
                            color={"#00CCBB"}
                        />
                    </Text>
                </View>
                <TouchableOpacity>
                    <AntDesign name={"user"} size={30} color={"#00CCBB"} />
                </TouchableOpacity>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchInner}>
                    <TouchableOpacity>
                        <EvilIcons
                            style={styles.searchIcon}
                            color={"#00CCBB"}
                            size={25}
                            name={"search"}
                        />
                    </TouchableOpacity>
                    <TextInput placeholder="Search" />
                </View>
                <AntDesign size={30} color={"#00CCBB"} name={"bars"} />
            </View>
            <ScrollView style={styles.container}>
                <Categories />
                <Featured
                    id=""
                    title="Features"
                    description="If the network activity indicator should be visible."
                />
                <Featured
                    id=""
                    title="Features"
                    description="If the network activity indicator should be visible."
                />
                <Featured
                    id=""
                    title="Features"
                    description="If the network activity indicator should be visible."
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
