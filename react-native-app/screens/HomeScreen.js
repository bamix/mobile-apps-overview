import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import {Card, Text, Image } from 'react-native-elements';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Cards',
    };

    render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            {
              new Array(100).fill(0).map((e, i)=> {
                return (
                    <Card wrapperStyle={{flex: 1, flexDirection: 'row'}} key={i}>
                        <Image
                            containerStyle={{flex: 1}}
                            source={{ uri: "https://picsum.photos/200/200/?image=" + i }}
                            style={styles.image}
                        />
                        <Text style={styles.text}>{i}</Text>
                    </Card>
                );
              })
            }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
    text: {
        flex: 2,
        paddingLeft: 10
    },
    image: {
        height: 100,
        borderRadius: 50
    }
});
