import React, { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import Header from '../Header/Header';
import Navigation from '../navigation/Navigation';
import styles from './Layout.styles';
import { SafeAreaView } from 'react-native-safe-area-context';

interface LayoutProps {
  children: ReactNode;
  showHeader?: boolean;
  showNavigation?: boolean;
  position?: 'start' | 'center' | 'end';
}

const Layout: React.FC<LayoutProps> = ({ children, showHeader = true, showNavigation = true, position = 'center' }) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
          {showHeader && <Header />}
          <View style={[styles.body, styles[position]]}>{children}</View>
        </ScrollView>
      </KeyboardAvoidingView>
      {showNavigation && <Navigation />}
    </SafeAreaView>
  );
};

export default Layout;
