import React from 'react';
import CatFactComponent from './CatFactComponent';

export default function CollectionsComponent(props) {

	return (
		<div>
			<h2>Your Collection</h2>
			<div id="collection">
				{props.collection.map(card => 
				<CatFactComponent 
					catFact={card.catFact} 
					imgUrl={card.imgUrl} 
					caption={card.caption} 
					editable={true}
					catCardId={card.catCardId}
					key={card.catCardId} 
					editHandler={props.editHandler}
					deleteHandler={props.deleteHandler}
					/>
				)}
			</div>
		</div>
	);
}