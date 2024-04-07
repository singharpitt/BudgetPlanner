// screens/BudgetScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addBudget } from './budgetReducer';

const BudgetScreen = () => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();
  const budgets = useSelector(state => state.budgets);

  const handleAddBudget = () => {
    if (!category.trim() || !amount.trim()) return;
    dispatch(addBudget({ category, amount: parseFloat(amount) }));
    setCategory('');
    setAmount('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Budget Planner</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Category"
          value={category}
          onChangeText={setCategory}
          style={styles.input}
        />
        <TextInput
          placeholder="Amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          style={styles.input}
        />
        <Button title="Add Budget" onPress={handleAddBudget} />
      </View>
      <View>
        <Text style={styles.subheading}>Budgets:</Text>
        {budgets.map((budget, index) => (
          <Text key={index}>{budget.category}: ${budget.amount}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default BudgetScreen;
