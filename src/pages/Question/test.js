export default function Test() {
    return(
        <KeyboardAvoidingView 
            behavior={Platform.OS == 'ios' ? 'padding' : ''}
            style={ styles.background }
            enabled
        >
            <Header/>
            <View style={ styles.container }>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#eee',
    },
    container: {
        backgroundColor: '#fafafa',
        borderRadius: 8,
    }
})