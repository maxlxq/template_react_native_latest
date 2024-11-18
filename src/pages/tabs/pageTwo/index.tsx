import { Span } from '@/styled/base';
import React, { useState, useEffect } from 'react';
import { MasonryFlashList } from '@shopify/flash-list';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { ItemITF, ListITF } from '@/interface/list';
import { CommonStyles } from '@/styled/baseStyle';

const generateData = (number: number) => {
  return new Promise((resolve: (res: ListITF) => void) => {
    setTimeout(() => {
      resolve({
        list: new Array(number)
          .fill(0)
          .map((_) => ({
            id: Math.random().toString(36).substring(2, 10),
            name: `name ${Math.random().toString(36).substring(2, 10)}`,
            height: parseInt(`${Math.random() * 100}`, 10) + 120,
          })),
      });
    }, 1000);
  });
};

const PageTwo = () => {
  const [list, setList] = useState<ItemITF[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    onLoadFirst();
  }, []);

  const onLoadFirst = () => {
    setRefreshing(true);
    generateData(100).then((res) => {
      setList(res.list);
    }).finally(() => setRefreshing(false));
  };

  const onEndReached = () => {
    if (refreshing || loading) {
      return;
    }
    setLoading(true);
    generateData(100).then((res) => {
      setList(pre => ([...pre, ...res.list]));
    }).finally(() => setLoading(false));
  };

  const renderItem = ({ item }: { item: ItemITF }) => {
    return (
      <View style={[CommonStyles.center, { height: item.height, backgroundColor: item.height > 170 ? '#f05421' : '#99f0aa' }]}>
        <Span>{item.name}</Span>
      </View>
    );
  };

  return (
    <MasonryFlashList
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      estimatedItemSize={200}
      numColumns={2}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      onRefresh={onLoadFirst}
      refreshing={refreshing}
      ListFooterComponent={loading ? <View style={styles.h60}><ActivityIndicator size="small" /></View> : null}
    />
  );
};

export default PageTwo;

const styles = StyleSheet.create({
  h60: {
    height: 60,
  },
});
