import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import Trash from '../../assets/trash.svg';
import { Checkbox } from "../Checkbox";
import { styles } from "./styles";

interface TaskProps {
  name: string;
  checked: boolean;
  onPressCheckbox: () => void
  onPressTrash: () => void
}

export function TaskCard({ name, checked, onPressCheckbox, onPressTrash }: TaskProps) {
  const [isChecked, setChecked] = useState(checked)

  function handlePressCheckbox() {
    setChecked(prevState => !prevState)
    onPressCheckbox()
  }

  return (
    <View style={styles.container}>
      <Checkbox value={isChecked} onPress={handlePressCheckbox} />
      <Text style={[styles.taskName, isChecked && styles.taskNameDone]}>
        {name}
      </Text>
      <TouchableOpacity
        style={styles.trashButton}
        activeOpacity={0.7}
        onPress={onPressTrash}
      >
        <Trash />
      </TouchableOpacity>
    </View>
  )
}