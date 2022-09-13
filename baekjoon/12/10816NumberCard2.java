/**
 *  번호: 10816
 *  날짜: 2022.09.08 - 2022.09.13
 *  제목: 숫자카드2
 *  링크: https://www.acmicpc.net/problem/10816
 * 
*/

// import java.io.*;
// import java.util.*;

// class NumberCard2 { // NumberCard2
//     public static void main(String[] args) throws IOException {
//         BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//         BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
//         StringTokenizer st;

//         int N = Integer.parseInt(br.readLine());
//         st = new StringTokenizer(br.readLine());

//         Map<Integer, Integer> haveCard = new HashMap<>(); // 상근이가 가지고 있는 숫자 카드
        
//         for(int i = 0; i < N; i++) {
//             int haveCardNum = Integer.parseInt(st.nextToken());
//             haveCard.put(i, haveCardNum);
//         }
        

//         int M = Integer.parseInt(br.readLine());
//         st = new StringTokenizer(br.readLine());

//         for(int i = 0; i < M; i++) {
//             int ipCardNum = Integer.parseInt(st.nextToken());
//             int count = 0;

//             for(int haveNum : haveCard.values()) {
//                 if(haveNum == ipCardNum) {
//                     count++;
//                 }
//             } 
//             bw.write(count + " ");
//             count = 0;
//         }

//         bw.flush();
//         bw.close();
//         br.close();
//     }
// }


// 시간 초과 - 이진탐색으로 풀라는 풀이가 많았지만 맵 단계에 있으니 찾아보고 맵으로 풀어보고자 한다.

import java.io.*;
import java.util.*;

class NumberCard2 { // NumberCard2
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st;

        int N = Integer.parseInt(br.readLine());
        st = new StringTokenizer(br.readLine());

        Map<Integer, Integer> haveCard = new HashMap<>(); // 상근이가 가지고 있는 숫자 카드
        
        for(int i = 0; i < N; i++) {
            int haveCardNum = Integer.parseInt(st.nextToken());
            // 위 코드에서는 모든 값을 맵에 넣어주었는데 key를 입력값으로, value를 count로 정하여 풀었다.
            if(!haveCard.containsKey(haveCardNum)) {
                haveCard.put(haveCardNum, 1);
            } else {
                int cnt = haveCard.get(haveCardNum);
                haveCard.put(haveCardNum, cnt + 1);
            }
        }
        
        int M = Integer.parseInt(br.readLine());
        st = new StringTokenizer(br.readLine());

        for(int i = 0; i < M; i++) {
            int ipCardNum = Integer.parseInt(st.nextToken());

            if(haveCard.containsKey(ipCardNum)) {
                bw.write(haveCard.get(ipCardNum) + " ");
            } else {
                bw.write("0 ");
            }
        }

        bw.flush();
        bw.close();
        br.close();
    }
}