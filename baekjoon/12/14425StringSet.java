/**
 *  번호: 14425
 *  날짜: 2022.08.18 - 24, 30
 *  제목: 문자열 집합
 *  링크: https://www.acmicpc.net/problem/14425
 * 
*/

import java.io.*;
import java.util.*;

class StringSet { // StringSet
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());

        Map<String, Integer> map = new HashMap<>();

        for (int i = 0; i < n; i++) {
            map.put(br.readLine(), 0);
        }

        int count = 0;

        // m에 대해 입력받으면서 키 중복을 보며 같은 키이면 카운팅하였다.
        for (int i = 0; i < m; i++) {
            if (map.containsKey(br.readLine())) count++;
        }

        System.out.print(count);
    }
}
