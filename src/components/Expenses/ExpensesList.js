import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
    // 필터에 해당하는 내용이 없을 경우에만 출력
    if (props.items.length === 0) {
        return (<h2 className='expenses-list__fallback'>Found no expenses.</h2>);
    }

    return (
        <ul className='expenses-list'>
            {props.items.map((expense) => (
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            ))}
        </ul>
    );
};

export default ExpensesList;