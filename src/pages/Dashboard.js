import React, { useState, useEffect } from 'react';
import '../styles/Dashboard.css';
import RightSidebar from "../components/RightSidebar";

const Dashboard = () => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('income');
    const [description, setDescription] = useState('');

    const addTransaction = () => {
        const amountValue = parseFloat(amount);

        if (!isNaN(amountValue) && (type === 'income' || type === 'expense')) {
            if (type === 'income') {
                setIncomes((prevIncomes) => [...prevIncomes, amountValue]);
            } else {
                setExpenses((prevExpenses) => [...prevExpenses, amountValue]);
            }

            const newTransaction = {
                type,
                amount: amountValue,
                date: new Date(),
                description,
            };

            setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
            setAmount('');
            setType('income');
            setDescription('');
        }
    };

    useEffect(() => {
        updateTransactionTable();
        updateSummary();
    }, [transactions, incomes, expenses]);

    const updateSummary = () => {
        const totalIncome = incomes.reduce((acc, income) => acc + income, 0);
        const totalExpense = expenses.reduce((acc, expense) => acc + expense, 0);
        const totalIncomeElement = document.getElementById('totalIncome');
        const totalExpenseElement = document.getElementById('totalExpense');
        const balanceElement = document.getElementById('balance');
        const maxIncomeElement = document.getElementById('maxIncome');
        const minIncomeElement = document.getElementById('minIncome');
        const maxExpenseElement = document.getElementById('maxExpense');
        const minExpenseElement = document.getElementById('minExpense');

        if (totalIncomeElement && totalExpenseElement && balanceElement && maxIncomeElement && minIncomeElement && maxExpenseElement && minExpenseElement) {
            totalIncomeElement.innerHTML = totalIncome.toFixed(2);
            totalExpenseElement.innerHTML = totalExpense.toFixed(2);
            balanceElement.innerHTML = (totalIncome - totalExpense).toFixed(2);
            maxIncomeElement.innerHTML = Math.max(...incomes).toFixed(2);
            minIncomeElement.innerHTML = Math.min(...incomes).toFixed(2);
            maxExpenseElement.innerHTML = Math.max(...expenses).toFixed(2);
            minExpenseElement.innerHTML = Math.min(...expenses).toFixed(2);
        }
    };

    const updateTransactionTable = () => {
        const transactionTable = document.getElementById('transactionTable');
        if (transactionTable) {
            transactionTable.innerHTML = '';

            for (let i = Math.max(0, transactions.length - 5); i < transactions.length; i++) {
                const transaction = transactions[i];
                const row = transactionTable.insertRow();
                row.innerHTML = `
                    <td>${transaction.date.toLocaleDateString()}</td>
                    <td>${transaction.type === 'income' ? 'Income' : 'Expense'}</td>
                    <td>${transaction.amount.toFixed(2)}</td>
                    <td>${transaction.description}</td>
                `;
            }
        }
    };

    return (
        <div className="dashboard-content">
        <h1>Expense Tracker Dashboard</h1>
        <div className="transaction-input">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="amount">Enter Amount (₹):</label>
                            <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                        </td>
                        <td>
                            <label htmlFor="type">Type:</label>
                            <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                                <option value="income">Income</option>
                                <option value="expense">Expense</option>
                            </select>
                        </td>
                        <td>
                            <label htmlFor="description">Description:</label>
                            <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </td>
                        <td>
                            <button onClick={addTransaction}>Add</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="summary">
            <h2>Summary:</h2>
            <p>Total Income: ₹<span id="totalIncome">0.00</span></p>
            <p>Total Expenses: ₹<span id="totalExpense">0.00</span></p>
            <p>Balance: ₹<span id="balance">0.00</span></p>
            <p>Max Income: ₹<span id="maxIncome">0.00</span></p>
            <p>Min Income: ₹<span id="minIncome">0.00</span></p>
            <p>Max Expense: ₹<span id="maxExpense">0.00</span></p>
            <p>Min Expense: ₹<span id="minExpense">0.00</span></p>
        </div>
        <div className="transactions">
            <h2>Recent Transactions:</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Amount (₹)</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody id="transactionTable">
                
                </tbody>
            </table>
        </div>
        <RightSidebar />
    </div>
    

    
    );
};

export default Dashboard;