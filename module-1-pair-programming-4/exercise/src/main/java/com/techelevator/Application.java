package com.techelevator;


import com.techelevator.search.SearchDomain;
import com.techelevator.search.SearchEngine;
import com.techelevator.util.TELog;

import java.util.List;

public class Application {

	public static void main(String[] args) {

		try {

			// Step Two: Create TELog, and log the start of the application
			TELog log = new TELog();
			TELog.log("Search application started");

			// Step Four: Instantiate a Search Domain
			//
			SearchDomain searchDomain = new SearchDomain(".//exercise//data");
			TELog.log("\nIndexed Files: \n"+ searchDomain.toString() + "\n");



			// Step Six: Single word search
			//
			SearchEngine searchEngine = new SearchEngine(searchDomain);
			searchEngine.indexFiles();

//			List<String> searchedWords = searchEngine.search("Larry");
//			if (searchedWords.size() == 0){
//				noFileFoundMessage();
//			}
//			for (String s : searchedWords){
//				System.out.println(s);
//			}



			// Step Seven: Multiple word search
			//
			List<String> searchedWords = searchEngine.search("telephone line");
			if (searchedWords.size() == 0){
				noFileFoundMessage();
			}
			for (String s : searchedWords){
				System.out.println(s);
			}



		}
		catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void noFileFoundMessage() {
		String message = "These aren't the droids you're looking for. Word not found please try your search again.";
		System.out.println(message);
	}
}
