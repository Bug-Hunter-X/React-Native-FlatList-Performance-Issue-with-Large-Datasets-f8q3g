This solution addresses the performance issue by using several optimization techniques:

1. **`keyExtractor`**: A unique key is provided for each item to improve rendering efficiency.
2. **`ItemSeparatorComponent`**: A separator component is used to improve rendering performance.
3. **`removeClippedSubviews`**: This prop is set to true to remove off-screen items from the rendering tree, significantly improving performance.
4. **`initialNumToRender`**: This controls the number of initially rendered items, reducing initial load time.

```javascript
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, text: `Item ${i}` }));

const FlatListSolution = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <View style={styles.item}><Text>{item.text}</Text></View>}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      removeClippedSubviews={true}
      initialNumToRender={10}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
  },
});

export default FlatListSolution;
```