import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import {s} from "react-native-size-matters"

const UserAvatar = () => {
  return (
    <Image
    source={{uri:"https://tse4.mm.bing.net/th/id/OIP.dzAFA0penTdNr4uOQ4i5OgHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"}}
    style={styles.image}
    />
  )

}

const styles=StyleSheet.create({
    image:{
        width:s(40),
        height:s(40),
        borderRadius:s(20),
    }
})

export default UserAvatar