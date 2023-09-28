import { Image, TouchableOpacity, StyleSheet, Text, SafeAreaView, TextInput, View } from 'react-native';
import Materialicons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Login() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBox}>
                <Image style={styles.login}
                    source={require('../assets/imagens/login.png')}
                />
            </View>
            {/* TÍTULO DE LOGIN */}
            <Text style={styles.text}>LOGIN</Text>

            {/* TEXT INPUT DE EMAIL */}
            <View style={styles.containerTextInput}>
                <Materialicons name='email' size={20} color={'white'}/>
                <TextInput style={styles.textInput} placeholderTextColor={'white'} placeholder='EMAIL' keyboardType='email-address' />
            </View>

            {/* TEXT INPUT DE SENHA */}
            <View style={styles.containerTextInput}>
                <Materialicons name='form-textbox-password' size={20} color={'white'}/>
                <TextInput style={styles.textInput} placeholderTextColor={'white'} placeholder='SENHA' secureTextEntry={true} />
            </View>

            {/* TEXT INPUT DE SENHA */}
            <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.txtLogin}>
                    Login
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#161c3d',
        padding: 16
    },
    topBox: {
        alignItems: 'center',
    },
    login: {
        width: 350,
    },
    text: {
        fontSize: 28,
        fontWeight: '500',
        color: '#ffffff',
        marginBottom: 30,
        marginLeft: 15
    },
    containerTextInput: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
        alignItems: 'center',
    },
    textInput:{
        padding: 10,
        color: 'white',
        fontSize: 12
    },
    btnLogin: {
        backgroundColor: '#28326b',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
    },
    txtLogin: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        color: 'white'
    }
});