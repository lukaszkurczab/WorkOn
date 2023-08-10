import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './articlesListScreen.styles';
import ArticleTile from '../../components/tiles/articleTile/articleTile';

const ArticlesListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Articles</Text>
      <ScrollView style={styles.articlesNavigation} horizontal={true}>
        <TouchableOpacity>
          <Text style={styles.navigationText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navigationText}>Calistenic</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navigationText}>Crossfit</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navigationText}>Diet</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navigationText}>Gym</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navigationText}>Health</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navigationText}>Mindfullness</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.articlesWrapper}>
        <ArticleTile title='10-minute morning routine' desc='Stretch and Breathe' image='article_morning.png'/>
        <ArticleTile title='Yoga terapy' desc='Pile and Twist' image='article_yoga.png'/>
      </View>
    </View>
  );
};

export default ArticlesListScreen;