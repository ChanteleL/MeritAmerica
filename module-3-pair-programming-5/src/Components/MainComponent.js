import React from 'react';
import CatFactComponent from './CatFactComponent';
import CollectionsComponent from './CollectionsComponent';

const API_BASE = 'http://localhost:8081/api/cards';

class MainComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			cardData: {
				catFact: "For a cat at rest, the average heart rate usually is between 150 and 180 bpm, more than twice that of a human, which averages 70 bom.",
				imgUrl: "https://cat-data.netlify.app/images/siamese_cat-600x600.jpg",
				caption: ''
			},
			collection: []
		};
		this.getNewCard.bind(this);
		this.saveCard.bind(this);
		this.refreshCollection.bind(this);
		this.editHandler.bind(this);
		this.deleteHandler.bind(this);
	}

	componentDidMount() {
		this.refreshCollection();
	}

	getNewCard() {	
		fetch(API_BASE + '/random')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.setState({cardData: {
					catFact: data.catFact,
					imgUrl: data.imgUrl,
					caption: ''
				}});
			});
	}

	saveCard() {
		const caption = document.getElementById('caption_box');
		let cardData = {
			catCardId: this.state.cardData.catCardId,
			catFact: this.state.cardData.catFact,
			imgUrl: this.state.cardData.imgUrl,
			caption: caption.value
		};
	
		if( cardData.catCardId != undefined ) {
			// update
			fetch(API_BASE + '/' + cardData.catCardId, {
				method: 'PUT',
				cache: 'no-cache',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(cardData)
			})
				.then((response) => {
					if( response.ok ) {
						alert('Saved!');
						this.refreshCollection();
					}
				})
				.catch((err) => {
					console.error(err);
					alert('Could not save card!');
				});
		} else {
			// save
			fetch(API_BASE, {
				method: 'POST',
				cache: 'no-cache',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(cardData)
			})
				.then((response) => {
					if( response.ok ) {
						alert('Saved!');
						this.refreshCollection();
					}
				})
				.catch((err) => {
					console.error(err);
					alert('Could not save card!');
				});
		}
	
		this.getNewCard();
	}

	refreshCollection() {
		//Build it up
		fetch(API_BASE)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.setState({collection: data});
			});
	}

	editHandler = (id) => {
		fetch(API_BASE + '/' + id)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				let cardData = {};
				cardData['catCardId'] = data.catCardId;
				cardData['catFact'] = data.catFact;
				cardData['imgUrl'] = data.imgUrl;
				cardData['caption'] = data.caption;
				this.setState({cardData: cardData});
			});
	}

	deleteHandler = (id) => {
		fetch(API_BASE + '/' + id, {
			method: 'DELETE',
		})
		.then((response) => {
			return response.text();
		})
		.then((data) => {
			console.log(data);
			alert('Cat Card deleted!');
			this.refreshCollection();
		})
		.catch((err) => {
			console.error(err);
			alert('Could not delete Cat Card!');
		});
	}

	render() { return(
		<div>
			<h1>Welcome to Cat Cards</h1>
			<div id="card_side">
				<CatFactComponent 
					catFact={this.state.cardData.catFact} 
					imgUrl={this.state.cardData.imgUrl}
				/>
				<div className='input'>
					<input id="caption_box" type="text" placeholder="Caption me!" 
						value={this.state.cardData.caption} 
						onChange={(event)=>{
							let cardData = this.state.cardData;
							cardData.caption = event.target.value;
							this.setState({cardData: cardData});
						}}
					/>
					<div id="button_holder">
						<button id="save_btn" type="button" onClick={() => this.saveCard()}>💾 Save To Collection</button>
						<button id="next_btn" type="button" onClick={() => this.getNewCard()}>Get Next Card ➡️</button>
					</div>
				</div>
			</div>
			<CollectionsComponent 
				collection={this.state.collection}
				editHandler={this.editHandler}
				deleteHandler={this.deleteHandler}
			/>
		</div>
	)};
}

export default MainComponent;