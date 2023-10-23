import React from 'react';

export default function CatFactComponent(props) {

	return (
		<div>
			{props.editable && <div className='edit'>
			<div className='edit_buttons' onClick={() => props.editHandler(props.catCardId)}>&#x270D;</div>
			<div className='delete_buttons' onClick={() => props.deleteHandler(props.catCardId)}>❌</div>
			</div>}
			<div id="cat_card">
				<h4 id="cat_fact">
					{props.catFact}
				</h4>
				<img id="cat_pic" src={props.imgUrl} alt="pic"></img>
				<span className="cat_caption">{props.caption}</span>
			</div>
		</div>
	);
}