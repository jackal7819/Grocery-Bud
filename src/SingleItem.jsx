import { useState } from 'react';

const SingleItem = ({ item, removeItem, editItem }) => {

	const handleCheckboxChange = () => {
		editItem(item.id);
	};

	const handleRemoveItem = () => {
		removeItem(item.id);
	};

	return (
		<div className='single-item'>
			<input
				type='checkbox'
				checked={item.completed}
				onChange={handleCheckboxChange}
			/>
			<p
				style={{
					textTransform: 'capitalize',
					textDecoration: item.completed && 'line-through',
				}}>
				{item.name}
			</p>
			<button className='btn remove-btn' onClick={handleRemoveItem}>
				remove
			</button>
		</div>
	);
};

export default SingleItem;
