import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DATA = [
  {
    id: '1',
    title: 'Ingeniero/a de software',
    userType: 'Usuario estándar',
    location: 'Cerca de ti',
    price: '300',
    fast: true,
    icon: 'handshake',
    isFontAwesome: true,
  },
  {
    id: '2',
    title: 'Limpiador/a',
    userType: 'Usuario estándar',
    location: 'Cerca de ti',
    price: '80',
    fast: true,
    icon: 'handshake',
    isFontAwesome: true,
  },
  {
    id: '3',
    title: 'Masajista',
    userType: 'Usuario estándar',
    location: 'Cerca de ti',
    price: '150',
    fast: true,
    icon: 'handshake',
    isFontAwesome: true,
  },
  {
    id: '4',
    title: 'Ingeniero industrial',
    userType: 'Usuario',
    location: 'Dénia, Spain (0.3km de ti)',
    price: '270',
    rating: '4,9',
    image: 'https://cdn.pixabay.com/photo/2016/11/18/19/07/man-1836502_1280.jpg',
  },
  {
    id: '5',
    title: 'Mecánico',
    userType: 'Usuario',
    location: 'Jávea, Spain (7.8km de ti)',
    price: '210',
    rating: '4,0',
    image: 'https://cdn.pixabay.com/photo/2016/11/21/12/46/man-1845814_1280.jpg',
  },
  {
    id: '6',
    title: 'Ingeniera de sistemas',
    userType: 'Usuario',
    location: 'Moraira, Spain (21km de ti)',
    price: '285',
    rating: '4,8',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/07/49/woman-1868840_1280.jpg',
    filter: true,
  },
  {
    id: '7',
    title: 'Diseñador gráfico',
    userType: 'Oferta de empleo',
    location: 'Madrid, Spain',
    price: '2.500',
    icon: 'briefcase',
    isFontAwesome: true,
    options: true,
  },
];

const renderItem = ({ item }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <View style={styles.profileContainer}>
        {item.image ? (
          <Image source={{ uri: item.image }} style={styles.profileImage} />
        ) : item.icon ? (
          <View style={styles.iconBackground}>
            {item.isFontAwesome ? (
              <FontAwesomeIcon name={item.icon} size={24} color="#615bf1" />
            ) : (
              <Icon name={item.icon} size={24} color="#615bf1" />
            )}
          </View>
        ) : null}
        {item.rating && (
          <View style={styles.ratingBadge}>
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.userType}>{item.userType}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{item.price}/h</Text>
        {item.fast && (
          <View style={styles.fastBadge}>
            <Icon name="flash" size={12} color="#fff" />
            <Text style={styles.fastText}>FAST</Text>
          </View>
        )}
      </View>
    </View>
    <View style={styles.locationContainer}>
      <Icon name="location" size={16} color="#888" />
      <Text style={styles.locationText}>{item.location}</Text>
      {item.filter && (
        <Icon name="filter" size={20} color="#615bf1" style={styles.filterIcon} />
      )}
      {item.options && (
        <MaterialCommunityIcons name="dots-vertical" size={20} color="#888" style={styles.optionsIcon} />
      )}
    </View>
  </View>
);

export function BuscarScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="view-grid" size={24} color="#615bf1" />
        <Text style={styles.headerTitle}>Explore</Text>
        <Icon name="person-circle" size={32} color="#615bf1" />
      </View>
      <View style={styles.searchBarContainer}>
        <Icon name="search" size={20} color="#888" />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar"
          placeholderTextColor="#888"
        />
        <Icon name="mic-circle-outline" size={24} color="#615bf1" />
      </View>
      <View style={styles.mapToggleButton}>
        <Text style={styles.toggleText}>Explorar</Text>
        <Text style={[styles.toggleText, styles.activeToggleText]}>Mapa</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {DATA.map((item) => renderItem({ item }))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#615bf1',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6e6fa',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: '#333',
  },
  mapToggleButton: {
    flexDirection: 'row',
    backgroundColor: '#e6e6fa',
    borderRadius: 25,
    marginHorizontal: '30%',
    padding: 5,
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  toggleText: {
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 15,
    color: '#615bf1',
  },
  activeToggleText: {
    backgroundColor: '#fff',
    borderRadius: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileContainer: {
    position: 'relative',
    marginRight: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  iconBackground: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e6e6fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingBadge: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    backgroundColor: '#615bf1',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  ratingText: {
    color: '#fff',
    fontSize: 12,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userType: {
    fontSize: 14,
    color: '#888',
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#615bf1',
  },
  fastBadge: {
    flexDirection: 'row',
    backgroundColor: '#615bf1',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginTop: 5,
    alignItems: 'center',
  },
  fastText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 3,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#888',
  },
  filterIcon: {
    marginLeft: 'auto',
  },
  optionsIcon: {
    marginLeft: 'auto',
  },
});