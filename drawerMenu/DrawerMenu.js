import { Image, StyleSheet, Text, View } from 'react-native';
import MyDrawer from "./MyDrawer";

//CRIAÇÃO DO NAVIGATOR DO DRAWER MENU
export default function DrawerMenu() {
    return (
        <MyDrawer/>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161c3d',
        alignItems: 'center',
        justifyContent: 'center',
    },
});