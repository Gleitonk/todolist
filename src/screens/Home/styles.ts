import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 173,
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 32,
        width: 110,
    },
    form: {
        flexDirection: 'row',
        position: 'absolute',
        left: 24,
        right: 24,
        top: 142
    },
    inputText: {
        flex: 1,
        height: 54,
        backgroundColor: '#262626',
        borderWidth: 1,
        borderColor: 'black',
        marginRight: 4,
        borderRadius: 6,
        fontSize: 16,
        padding: 16,
        color: '#FFF',
    },
    button: {
        height: 54,
        width: 54,
        backgroundColor: '#1E6F9F',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        flex: 1,
        backgroundColor: '#262626',
        padding: 24
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 19,
        marginVertical: 24,
    },
    created: {
        width: 87,
        color: '#4EA8DE',
        fontSize: 14,
        fontWeight: 'bold'
    },
    done: {
        width: 87,
        color: '#8284FA',
        fontSize: 14,
        fontWeight: 'bold'
    },
    counter: {
        width: 25,
        color: '#FFF',
        backgroundColor: '#333333',
        borderRadius: 20
    },
    emptyView: {
        borderTopWidth: 2,
        borderTopColor: '#333333',
        justifyContent: 'center',
        alignItems: 'center'
    },
    listEmptyTitle: {
        color: '#808080',
        fontWeight: 'bold'
    },
    clipboard: {
        width: 56,
        height: 56,
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 40
    }
});