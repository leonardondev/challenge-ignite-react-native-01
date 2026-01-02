import { useState } from "react";
import { Alert, FlatList, Image, Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native";

import clipboardImg from '../../assets/clipboard.png';
import Logo from "../../assets/logo.svg";
import Plus from "../../assets/plus.svg";
import { TaskCard } from "../../components/Task";
import { colors } from "../../theme/colors";
import { styles } from "./styles";

interface Task {
  name: string
  done: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskName, setTaskName] = useState<string>("")
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [tasksDoneCount, setTasksDoneCount] = useState(0);

  function handleTaskAdd() {
    if (tasks.some(task => task.name === taskName)) {
      return Alert.alert("Tarefa duplicada", "Já existe um tarefa na lista com esse nome.")
    }

    setTasks(prevSate => [...prevSate, { name: taskName, done: false }])
    setTaskName("")
    Keyboard.dismiss()
  }

  function handleTaskRemove(name: string) {
    Alert.alert("Remover", `Remover a tarefa "${name}"?`, [
      {
        text: "Sim",
        onPress: () => setTasks(prevSate => {
          const newState = prevSate.filter(task => task.name !== name)
          setTasksDoneCount(newState.filter(task => task.done).length)
          return newState
        }
        )
      },
      {
        text: "Não",
        style: 'cancel'
      }
    ])
  }

  function handleTaskCheck(name: string) {
    const taskIndex = tasks.findIndex(task => task.name === name)
    const task = tasks[taskIndex]

    setTasks(prevSate => {
      prevSate.splice(taskIndex, 1, { name: task.name, done: !task.done })
      return prevSate
    })
    setTasksDoneCount(tasks.filter(task => task.done).length)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo width={112} height={32} />
      </View>

      <View style={styles.form}>
        <TextInput
          style={[
            styles.input,
            isInputFocused && styles.inputFocused
          ]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors.gray300}
          value={taskName}
          onChangeText={setTaskName}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleTaskAdd}
        >
          <Plus />
        </TouchableOpacity>
      </View>


      <View style={styles.counters}>
        <View style={styles.conter}>
          <Text style={[styles.counterText, { color: colors.blue }]}>Criadas</Text>
          <Text style={styles.counterValue}>{tasks.length}</Text>
        </View>

        <View style={styles.conter}>
          <Text style={[styles.counterText, { color: colors.purple }]}>Concluídas</Text>
          <Text style={styles.counterValue}>{tasksDoneCount}</Text>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={item => item.name}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TaskCard
            name={item.name}
            checked={item.done}
            onPressCheckbox={() => handleTaskCheck(item.name)}
            onPressTrash={() => handleTaskRemove(item.name)}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.listEmptyContainer}>
            <Image source={clipboardImg} style={styles.listEmptyImage} />
            <Text style={[styles.listEmptyText, { fontWeight: 'bold' }]} >Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.listEmptyText} >Crie tarefas e organize seus itens a fazer</Text>
          </View>
        )}
      />
    </View>
  );
}
