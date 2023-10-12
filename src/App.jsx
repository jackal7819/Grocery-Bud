import { useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import Items from './Items';

const getLocalStorage = () => {
	let list = localStorage.getItem('list');
	if (list) {
		list = JSON.parse(list);
	} else {
		list = [];
	}
	return list;
};

const setLocalStorage = (items) => {
	localStorage.setItem('list', JSON.stringify(items));
};

const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

const App = () => {
	const [items, setItems] = useState(defaultList);

	const addItem = (itemName) => {
		const newItem = {
			name: itemName,
			completed: false,
			id: nanoid(),
		};
		const newItems = [...items, newItem];
		setItems(newItems);
		setLocalStorage(newItems);
	};

	const removeItem = (itemId) => {
		const updatedItems = items.filter((item) => item.id !== itemId);
		setItems(updatedItems);
		setLocalStorage(updatedItems);
	};

	const editItem = (itemId) => {
		const newItems = items.map((item) => {
			if (item.id === itemId) {
				const newItem = { ...item, completed: !item.completed };
				return newItem;
			}
			return item;
		});
		setItems(newItems);
		setLocalStorage(newItems);
	};

	return (
		<section className='section-center'>
			<Form addItem={addItem} />
			<Items items={items} removeItem={removeItem} editItem={editItem} />
		</section>
	);
};

export default App;
