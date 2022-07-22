package com.techelevator.search;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


/**
 * The Search Domain is a list of files to be read and indexed by the Search Engine.
 * <p>
 * Folders are NOT recursively searched.
 */
public class SearchDomain {

	private String folder;
	private List<String> files;

	/**
	 * Create a Search Domain of a folder
	 *
	 * @param folder
	 * @throws SearchDomainException
	 */
	public SearchDomain(String folder) throws SearchDomainException {
		this.folder = folder;
		this.files = buildDomain();
	}

	public String getFolder() {
		return folder;
	}

	public List<String> getFiles() {
		return files;
	}

	@Override
	public String toString() {
		StringBuffer sb = new StringBuffer();
		for (String file : files) {
			sb.append(file);
			sb.append("\n");
		}
		return sb.toString();
	}

	/**
	 * Folders are NOT recursively searched.
	 *
	 * @return
	 * @throws SearchDomainException
	 */
	private List<String> buildDomain() throws SearchDomainException {
		// Step Three: Complete the buildDomain method
		File dir = new File(folder);
		ArrayList<String> fileNames = new ArrayList<>();

		if(dir.isDirectory()) {
			//gather the filenames
			for (File file : dir.listFiles()) {
				if (file.isFile()) {
					fileNames.add(file.getName());
				}
			}
		}
//
//        File[] listOfFiles = dir.listFiles();
//
//        if(listOfFiles != null){
//            for(File file : dir.listFiles()) {
//                fileNames.add(file.getName());
//            }
//        }
		return fileNames;
	}
}