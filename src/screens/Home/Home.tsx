import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

import { styles } from './styles';

import Logo from '../../assets/Logo.png';
import Clipboard from '../../assets/Clipboard.png';

import { useState } from 'react';
import { Task } from '../../components/Task';

export function Home() {



  const [taskName, setTaskName] = useState('');
  const [createdTasks, setCreatedTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);


  function handleAddTask() {
    if (createdTasks.includes(taskName)) {
      return;
    }

    setCreatedTasks(prevState => [...prevState, taskName]);
    setTaskName('');
  }

  function handleCompleteTask(item: string) {
    if (completedTasks.includes(item)) {
      setCompletedTasks(prevState => prevState.filter(task => task !== item));
      return setCreatedTasks(prevState => [...prevState, item]);
    }

    setCreatedTasks(prevState => prevState.filter(task => task !== item));
    setCompletedTasks(prevState => [...prevState, item]);
  }

  function handleDeleteTask(item: string) {
    setCreatedTasks(prevState => prevState.filter(task => task !== item));
    setCompletedTasks(prevState => prevState.filter(task => task !== item));
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={Logo}
        />
      </View>


      <View style={styles.content}>

        <View style={styles.info}>
          <Text style={styles.created}>
            Criadas
            <Text style={styles.counter}>{createdTasks.length}</Text>
          </Text>

          <Text style={styles.done}>
            Concluídas
            <Text style={styles.counter}>{completedTasks.length}</Text>
          </Text>
        </View>


        <FlatList
          data={createdTasks}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Task
              key={item}
              name={item}
              checked={false}
              onComplete={() => handleCompleteTask(item)}
              onDelete={() => handleDeleteTask(item)}
            />
          )}

          ListEmptyComponent={() => (
            <View style={styles.emptyView}>
              <Image
                style={styles.clipboard}
                source={Clipboard}
              />


              <Text style={styles.listEmptyTitle}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmptyTitle}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />

        <FlatList
          data={completedTasks}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Task
              key={item}
              name={item}
              checked={true}
              onComplete={() => handleCompleteTask(item)}
              onDelete={() => handleDeleteTask(item)}
            />
          )}
        />


      </View >




      <View style={styles.form}>
        <TextInput
          style={styles.inputText}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor="#808080"
          value={taskName}
          onChangeText={e => setTaskName(e)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleAddTask}
        >
          <AntDesign
            name="pluscircleo"
            size={16}
            color='white'
          />
        </TouchableOpacity>
      </View>

    </View >
  );
}