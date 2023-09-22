import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';

const API_URL = `https://api.coingecko.com/api/v3`;

const App = () => {
  const [coinMarketData, setCoinMarketData] = useState([]);
  const [priceChanges, setPriceChanges] = useState({});

  const fetchCoinMarketData = async () => {
    try {
      const response = await axios.get(`${API_URL}/coins/markets`, {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 100,
          page: 1,
          sparkline: false,
        },
      });
      const data = response.data;
      setCoinMarketData(data);
    } catch (error) {
      console.error('Error fetching coin market data:', error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(fetchCoinMarketData, 60000);
    fetchCoinMarketData(); // Fetching coin market data when the component mounts
    return () => clearInterval(intervalId); // Clearing the interval when unmounting
  }, []);

  const renderCoinItem = ({ item }) => {
    const price = item.current_price ? item.current_price.toFixed(2) : 'N/A';
    const coinId = item.id;
    const priceChange = priceChanges[coinId];
    const priceChangeColor = priceChange >= 0 ? 'green' : 'red';

    return (
      <TouchableOpacity
      >
        <Card elevation={3} style={styles.coinCard}>
          <View style={styles.coinCardContent}>
            <Image source={{ uri: item.image }} style={styles.coinImage} />
            <View style={styles.coinInfo}>
              <Text style={styles.coinName}>{item.symbol.toUpperCase()}</Text>
              <Text style={styles.coinPrice}>${price}</Text>
              <View style={styles.priceChange}>
                <Text
                  style={[
                    styles.priceChangeText,
                    { color: priceChangeColor },
                  ]}
                >
                  {item.price_change_percentage_24h.toFixed(2)}%
                </Text>
                <Text style={styles.changeArrow}>
                  {priceChange >= 0 ? '▲' : '▼'}
                </Text>
              </View>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#3949ab" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Real-Time Price Ticker</Text>
      </View>
      <FlatList
        data={coinMarketData}
        renderItem={renderCoinItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#3949ab',
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  coinCard: {
    margin: 8,
    borderRadius: 12,
    backgroundColor: 'white',
    elevation: 5,
  },
  coinCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  coinImage: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  coinInfo: {
    flex: 1,
    flexDirection: 'column',
  },
  coinName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  coinPrice: {
    fontSize: 18,
    color: '#3949ab',
  },
  priceChange: {
    fontSize: 18,
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceChangeText: {
    marginLeft: 4,
    fontSize: 18,
  },
  changeArrow: {
    fontSize: 18,
  },
});

export default App;
