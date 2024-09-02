import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'; // Code example by Dr.Fuentes; May 21, 2023
export default class App extends Component {
    render() {
        return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                source={{ uri: 'https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/306439711_1397358467423266_7445948626779981381_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeENvt920aHtm208cFzetsmUVhqxfQnxLLhWGrF9CfEsuDABfDIeP8g_cWch9NVckWdRVJkFVRoeZZq1A7GB8Ocq&_nc_ohc=2A5HSpq1VnwQ7kNvgFjwLUb&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=ArmPPms_wAlgLWsP1v-m0mr&oh=00_AYD2aLL-UxcgPQKvxhwm8sScNArgr3kbHUXzP4qd2G9_jw&oe=66DB63D5' }}
                style={{ width: 200, height: 200 }}
                />
                <Text style={styles.text}>Ivan Karlo P. Dacnes</Text>
                <Text style={styles.text}>BSIT</Text>
                <Text style={styles.text}>Year Level-3</Text>
                </View>
                <View style={styles.container}>
                    <Image
                    source={{ uri: 'https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/306439711_1397358467423266_7445948626779981381_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeENvt920aHtm208cFzetsmUVhqxfQnxLLhWGrF9CfEsuDABfDIeP8g_cWch9NVckWdRVJkFVRoeZZq1A7GB8Ocq&_nc_ohc=2A5HSpq1VnwQ7kNvgFjwLUb&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=ArmPPms_wAlgLWsP1v-m0mr&oh=00_AYD2aLL-UxcgPQKvxhwm8sScNArgr3kbHUXzP4qd2G9_jw&oe=66DB63D5' }} //Pwede din any image dito
                    style={{ width: 200, height: 200 }}/>
                    <Text style={styles.text}>Welcome to my app!</Text>
                    </View>
                    </ScrollView>
                    );
                }
            }
            const styles = StyleSheet.create({
                container: {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginVertical: 20,
                },
                text: {
                    fontSize: 24,
                    color:'blue',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginVertical: 10,
                },
            });
