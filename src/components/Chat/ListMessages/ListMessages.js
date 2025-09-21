import { FlatList, StyleSheet, View, Text } from 'react-native'
import { styles } from "./ListMessages.styles"
import { ItemText } from './ItemText'
import { ItemImage } from './ItemImage'
import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import { DateTime } from 'luxon'

const dateSeparatorStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 5,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
});

export const ListMessages = forwardRef(({
  messages,
  onLoadMore,
  hasMore,
  loadingMore,
}, ref) => {

  const flatListRef = useRef(null)

  useImperativeHandle(ref, () => ({
    scrollToBottom: () => {
      if (flatListRef.current) {
        flatListRef.current.scrollToOffset({ offset: 0, animated: true })
      }
    }
  }))

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: 0, animated: false })
    }
  }, [])

  const renderItem = ({ item, index }) => {

    const isFirstItem = index === 0;

    const showDateSeparator = (() => {
      if (isFirstItem) {
        return true;
      }

      const nextMessage = messages[index + 1];
      if (!nextMessage) {
        return false;
      }

      const currentMessageDate = DateTime.fromISO(item.createdAt);
      const nextMessageDate = DateTime.fromISO(nextMessage.createdAt);

      return currentMessageDate.toFormat('dd/MM/yyyy') !== nextMessageDate.toFormat('dd/MM/yyyy');
    })();

    const formattedDate = (() => {
      const messageDate = DateTime.fromISO(item.createdAt);
      const today = DateTime.local().startOf('day');
      const yesterday = today.minus({ days: 1 });
      const fiveDaysAgo = today.minus({ days: 6 });

      // 1. Si es hoy
      if (messageDate.startOf('day').toMillis() === today.toMillis()) {
        return 'Hoy';
        // 2. Si es ayer
      } else if (messageDate.startOf('day').toMillis() === yesterday.toMillis()) {
        return 'Ayer';
        // 3. Si está entre ayer y hace 5 días
      } else if (messageDate >= fiveDaysAgo && messageDate < yesterday) {
        // Usa toLocaleString con el idioma 'es-ES' y luego capitaliza la primera letra
        const dayName = messageDate.setLocale('es-ES').toLocaleString({ weekday: 'long' });
        return dayName.charAt(0).toUpperCase() + dayName.slice(1);
        // 4. Si es más antiguo
      } else {
        return messageDate.toFormat('dd/MM/yyyy');
      }
    })();

    const messageComponent = (() => {
      if (item.type === 'TEXT') return <ItemText message={item} />;
      if (item.type === 'IMAGE') return <ItemImage message={item} />;
      return null;
    })();

    return (
      <View>
        {(showDateSeparator && index > 0) && (
          <View style={dateSeparatorStyles.container}>
            <Text style={dateSeparatorStyles.text}>{formattedDate}</Text>
          </View>
        )}
        {messageComponent}
      </View>
    );
  };

  return (
    <FlatList
      ref={flatListRef}
      inverted
      style={styles.container}
      data={messages}
      keyExtractor={item => item._id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'flex-end',
        paddingVertical: 10,
      }}
      ListFooterComponent={<View style={{ marginTop: 30 }} />}
      onEndReached={() => hasMore && onLoadMore()}
      onEndReachedThreshold={0.1}
    />
  );
});