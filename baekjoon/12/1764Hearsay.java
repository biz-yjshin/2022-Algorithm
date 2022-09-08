/**
 *  번호: 1764
 *  날짜: 2022.09.01
 *  제목: 듣보잡
 *  링크: https://www.acmicpc.net/problem/1764
 * 
*/

// 마지막에 순서 정렬도 필요함!

import java.io.*;
import java.util.*;

class HearSay { // HearSay
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int count = 0;

        int n = Integer.parseInt(st.nextToken()); // 듣지 못한 사람
        int m = Integer.parseInt(st.nextToken()); // 보지 못한 사람

        HashSet<String> nSet = new HashSet<>(); 
        HashSet<String> mSet = new HashSet<>(); 

        for (int i = 0; i < n; i++) {
            nSet.add(br.readLine());
        }

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < m; i++) {
            String inputStr = br.readLine();
            if (nSet.contains(inputStr)) {
                mSet.add(inputStr);
                count++;
            }
        }

        System.out.println(count);

        // 방법 1. HashSet을 ArrayList로 변경하여 정렬
        // ArrayList<String> list = new ArrayList<>(mSet);
        // Collections.sort(list);
        
        // for(String name : list) {
        //     System.out.println(name);
        // }

        // 방법 2. HashSet을 stream으로 변경하여 정렬
        mSet.stream().sorted().forEach((name) -> {
            System.out.println(name);
        });

        br.close();
    }
}
