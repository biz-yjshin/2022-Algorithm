/**
 *  번호: 14425
 *  날짜: 2022.08.30
 *  제목: 대칭 차집합
 *  링크: https://www.acmicpc.net/problem/1269
 * 
*/

import java.io.*;
import java.util.*;

class SymmetryDifferenceOfSet { // SymmetryDifferenceOfSet
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int a = Integer.parseInt(st.nextToken());
        int b = Integer.parseInt(st.nextToken());

        Map<String, Integer> aMap = new HashMap<>();
        Map<String, Integer> bMap = new HashMap<>();

        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < a; i++) {
            aMap.put(st.nextToken(), 0);
        }

        int aCount = 0;
        int bCount = 0;

        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < b; i++) {
            String bKey = st.nextToken();
            bMap.put(bKey, 0);
            if (!aMap.containsKey(bKey)) aCount++;
        }

        for(String aKey : aMap.keySet()) {
            if (!bMap.containsKey(aKey)) bCount++;
        }

        System.out.print(aCount + bCount);
    }
}
