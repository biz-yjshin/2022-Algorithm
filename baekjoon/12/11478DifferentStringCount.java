/**
 *  번호: 11478
 *  날짜: 2022.08.30 - 2022.09.01
 *  제목: 서로 다른 부분 문자열의 개수
 *  링크: https://www.acmicpc.net/problem/11478
 * 
*/

import java.io.*;
import java.util.*;

class DifferentStringCount { // DifferentStringCount
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String s = br.readLine();
        int len = s.length();

        br.close();

        Map<String, Integer> partStrMap = new HashMap<>();

        for (int i = 1; i <= len; i++) {
            for (int j = 0; j <= len - i ; j++) {
                String partStr = s.substring(j, j + i);
                if (!partStrMap.containsKey(partStr)) {
                    partStrMap.put(partStr, 0);
                }
            }
        }
        System.out.print(partStrMap.size());
    }
}
