
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import ViewDemo from './src/components/ViewDemo';
import TextDemo from './src/components/TextDemo';
import ImageDemo from './src/components/ImageDemo';
import ImageBackgroundDemo from './src/components/ImageBackgroundDemo';
import TextInputDemo from './src/components/TextInputDemo';
import TouchableOpacityDemo from './src/components/TouchableOpacityDemo';
import TouchableHighlightDemo from './src/components/TouchableHighlightDemo';
import ButtonDemo from './src/components/ButtonDemo';
import PressableDemo from './src/components/PressableDemo';
import ScrollViewDemo from './src/components/ScrollViewDemo';
import FlatList from './src/components/FlatListDemo';
import SectionListDemo from './src/components/SectionListDemo';
import ModalDemo from './src/components/ModalDemo';
import SwitchDemo from './src/components/SwitchDemo';
import PersonalInfo from './src/components/PersonalInfo';

import TestApi from './src/components/TestApi';

import Anim1 from './src/anim/Anim1';
import Anim2 from './src/anim/Anim2';
import Anim3 from './src/anim/Anim3';
import Anim4 from './src/anim/Anim4';
import Anim5 from './src/anim/Anim5';
import Anim6 from './src/anim/Anim6';
import Anim7 from './src/anim/Anim7';
import Anim8 from './src/anim/Anim8';
import FollowScroll from './src/anim/FollowScroll';
import Anim9 from './src/anim/Anim9';
import Anim10 from './src/anim/Anim10';
import AnimShow from './src/anim/AnimShow';

import TSDemo from './src/ts/TSDemo';

import RootView from './src/context/RootView';
import InfoView from './src/hoc/InfoView';
import MemoPage from './src/memo/MemoPage';
import RefDemo from './src/ref/RefDemo';
import NativePage from './src/native/NativePage';

const App = () => {

  return (
    <SafeAreaView>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='#FFFFFF'
      />
      <View style={styles.container}>
        {/* <ViewDemo /> */}
        {/* <TextDemo /> */}
        {/* <ImageDemo /> */}
        {/* <ImageBackgroundDemo /> */}
        {/* <TextInputDemo /> */}
        {/* <TouchableOpacityDemo /> */}
        {/* <TouchableHighlightDemo /> */}
        {/* <ButtonDemo /> */}
        {/* <PressableDemo /> */}
        {/* <ScrollViewDemo /> */}
        {/* <FlatList /> */}
        {/* <SectionListDemo /> */}
        {/* <ModalDemo /> */}
        {/* <SwitchDemo /> */}
        {/* <PersonalInfo /> */}

        {/* <TestApi /> */}
        
        {/* <Anim1 /> */}
        {/* <Anim2 /> */}
        {/* <Anim3 /> */}
        {/* <Anim4 /> */}
        {/* <Anim5 /> */}
        {/* <Anim6 /> */}
        {/* <Anim7 /> */}
        {/* <Anim8 /> */}
        {/* <FollowScroll /> */}
        {/* <Anim9 /> */}
        {/* <Anim10 /> */}
        {/* <AnimShow /> */}

        {/* <TSDemo /> */}

        {/* <RootView /> */}
        {/* <InfoView/> */}
        {/* <MemoPage /> */}
        {/* <RefDemo /> */}
        <NativePage />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default App;