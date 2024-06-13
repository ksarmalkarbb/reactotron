import { Linking } from "react-native"
import { Button, H1, Image, Text, XStack, YStack } from "tamagui"
import { reactotronLogo } from "../assets/images"
import NativeSampleModule from "../tm/NativeSampleModule"

// TODO: add connections here?

export function HomeScreen() {
  const openDocs = () => Linking.openURL("https://github.com/infinitered/reactotron")

  return (
    <YStack bg="$background" f={1} ai="center" jc="center">
      <Image source={reactotronLogo} h={128} w={128} mb="$2" />
      <H1 mb="$4">Welcome to Reactotron!</H1>
      <Text lh="$4">Connect a device or simulator to get started.</Text>
      <Text lh="$4" mb="$6">
        Need to set up your app to use Reactotron?
      </Text>
      <Button onPress={openDocs}>Check out the docs here!</Button>

      {/* TODO: remove temp code testing websockets */}
      <XStack m="$4">
        <Button onPress={NativeSampleModule.createServer}>Start Server</Button>
        <Button onPress={NativeSampleModule.stopServer}>Stop Server</Button>
      </XStack>
    </YStack>
  )
}
