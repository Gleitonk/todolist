import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: '#333333',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#454545'
    },
    name: {
        flex: 1,
        color: '#FFF',
        fontSize: 16,
        marginLeft: 12
    },
    nameRisked: {
        flex: 1,
        color: '#FFF',
        fontSize: 16,
        marginLeft: 12,
        textDecorationLine: 'line-through',
         textDecorationStyle: 'solid'
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 20,
        borderColor: '#4EA8DE',
        margin: 15
    }
});