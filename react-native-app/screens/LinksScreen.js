import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Button } from "react-native-elements";

export default class LinksScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            actions: [{
                text: 'Accessibility',
                name: 'bt_accessibility'
            }]
        }
    }

    static navigationOptions = {
        title: 'Performance',
    };

    run() {
        let array = [];
        for (let i = 0; i < 20; i++) {
            let start = new Date();
            const result = this.calculatePi();
            let finish = new Date();
            array.push({
                data: result,
                time: finish - start
            });
        }
        this.setState({
            results: array
        });
    }

    calculatePi() {
        let result = 0;
        for(var i = 0; i < 10000; i++){
            result += this.pi(i);
        }
        return result;
    }

    pi(i) {
        return (1/Math.pow(16, i))*(4/(8*i + 1) - 2/(8*i + 4) - 1/(8*i + 5) - 1/(8*i + 6));
    }

    render() {
        return (
            <ScrollView>
                {
                    this.state.results.map((v, i) => {
                        return (
                            <View key={i} style={{flexDirection: "row"}}>
                                <Text style={{flex: 2}}>{v.data}:</Text>
                                <Text style={{flex: 1, backgroundColor: "red"}}>{v.time}</Text>
                            </View>
                        );
                    })
                }
                <Button
                    onPress={
                        () => {
                            this.run();
                        }
                    }
                    title="+"
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
        justifyContent: 'flex-start'
    },
});
