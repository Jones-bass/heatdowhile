import React from 'react';
import { ScrollView, } from 'react-native';
import { Message } from '../Message';
import { styles } from './styles';


export function MessageList() {
  const message = {
    id: '1',
    text: 'Testando Mensagem',
    user: {
      name: 'Jones Bass',
      avatar_url: 'https://github.com/Jones-bass.png',
    }
  }

  return (
      <ScrollView style={styles.container}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="never" //para quando clicar fora o teclado fechar 
      >
        <Message data={message} />
        <Message data={message} />
        <Message data={message} />
        <Message data={message} />
      </ScrollView>
  );
}

