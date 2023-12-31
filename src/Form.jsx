import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Form = ({ addItem }) => {
	const [newItemName, setNewItemName] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!newItemName) {
            toast.error('please enter an item name');
			return;
		}
		addItem(newItemName);
		setNewItemName('');
	};

	const handleAddNewItem = (event) => {
		setNewItemName(event.target.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h4>grocery bud</h4>
			<div className='form-control'>
				<input
					type='text'
					className='form-input'
					value={newItemName}
					onChange={handleAddNewItem}
				/>
				<button type='submit' className='btn'>
					add item
				</button>
			</div>
		</form>
	);
};

export default Form;
