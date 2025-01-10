# React Native FlatList Performance Issue

This repository demonstrates a common performance issue encountered when using the FlatList component in React Native with a large dataset. The problem is that FlatList, by default, renders all items, regardless of their visibility on the screen. This results in significant performance degradation, especially on lower-end devices.

The `FlatListBug.js` file showcases the issue.  The `FlatListSolution.js` file demonstrates a solution using techniques such as `keyExtractor`, `ItemSeparatorComponent`, `removeClippedSubviews`, and `initialNumToRender` to improve performance.

## Solutions

* **`keyExtractor`**:  Provides a unique key for each item, crucial for efficient updates and rendering.
* **`ItemSeparatorComponent`**: Improves rendering efficiency by separating items with a reusable component.
* **`removeClippedSubviews`**: Optimizes rendering by removing off-screen items from the rendering tree.
* **`initialNumToRender`**: Controls the number of items initially rendered, reducing initial load time.

By implementing these optimizations, the performance of FlatList with large datasets can be significantly improved.