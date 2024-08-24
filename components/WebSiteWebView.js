import React from "react"
import { View } from "react-native"
import { WebView } from 'react-native-webview'

const WebsiteWebView = () => {
    return (<WebView source={{ uri:"https://reactnative.dev/" }} />)


}

export default WebsiteWebView