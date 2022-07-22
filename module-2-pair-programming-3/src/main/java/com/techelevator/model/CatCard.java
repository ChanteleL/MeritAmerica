package com.techelevator.model;

import javax.validation.constraints.NotEmpty;

public class CatCard {

	public Long catCardId;
	@NotEmpty
	public String catFact;
	@NotEmpty
	public String imgUrl;
	@NotEmpty
	public String caption;


	public CatCard(Long catCardId, String catFact, String imgUrl, String caption) {
		this.catCardId = catCardId;
		this.catFact = catFact;
		this.imgUrl = imgUrl;
		this.caption = caption;
	}

	public CatCard() {

	}


	public Long getCatCardId() {
		return catCardId;
	}
	public void setCatCardId(Long catCardId) {
		this.catCardId = catCardId;
	}
	
	public String getCatFact() {
		return catFact;
	}
	public void setCatFact(String catFact) {
		this.catFact = catFact;
	}
	
	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	
	public String getCaption() {
		return caption;
	}
	public void setCaption(String caption) {
		this.caption = caption;
	}
	
}
