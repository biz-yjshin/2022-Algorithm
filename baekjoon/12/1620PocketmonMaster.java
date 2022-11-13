/**
 *  번호: 1620
 *  날짜: 2022.09.13
 *  제목: 나는야 포켓몬 마스터 이다솜
 *  링크: https://www.acmicpc.net/problem/1620
 * 
*/

import java.io.*;
import java.util.*;

class PocketmonMaster { // PocketmonMaster
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st;
        
        // 포켓몬 이름 및 출력 시 개수 입력
        st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        Map<String, String> names = new HashMap<String, String>(); // <순서, 이름>

        for(int i = 1; i <= N ; i++) {
            // String name = br.readLine(); // 포켓몬 이름
            names.put(Integer.toString(i), br.readLine());
        }

        for(int i = 0; i <= M ; i++) {
            String inputStr = br.readLine(); // 포켓몬 이름

            
            if(names.containsKey(inputStr)) {
                bw.write(names.get(inputStr) + " \n");
            } else if(names.containsValue(inputStr)) {
                bw.write(getKey(names, inputStr) + " \n");
            }
        }

        bw.flush();
        bw.close();
        br.close();
    }
}