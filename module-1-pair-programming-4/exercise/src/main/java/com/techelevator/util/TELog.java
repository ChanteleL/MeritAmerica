package com.techelevator.util;

import java.io.*;

public class TELog {
    private static PrintWriter pw = null;

    public static void log(String message) throws IOException{
        String logPath = "./exercise/logs/search.log";
        File logFile = new File(logPath);
        try {
//            if (pw == null) {
//                pw = new PrintWriter(new FileWriter(logFile));
            pw = new PrintWriter(new FileOutputStream(logFile, true));
//            }
            pw.println(message);
            pw.flush();
        }
        catch(FileNotFoundException e){
            throw new TELogException(e.getMessage());
        }

    }
}
