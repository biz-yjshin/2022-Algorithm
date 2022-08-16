/**
 *  번호: 11650
 *  날짜: 2022-08-12 ~ 2022.08.16
 *  제목: 좌표 정렬하기
 *  링크: https://www.acmicpc.net/problem/11650
 * 
 */

import java.io.IOException;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Arrays;

class CoordinatesSort { // CoordinatesSort
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        int N = Integer.parseInt(br.readLine());
        int[][] coordinates = new int[N][2];

        for(int i = 0; i < N; i++){
            coordinates[i] = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
        }

        // for(int i = 0; i < N; i++){
        //     int temp = -1;
        //     for(int j = i + 1; j < N; j++) {
        //         if(sortArr[i] > sortArr[j]) {
        //             temp = sortArr[i];
        //             sortArr[i] = sortArr[j];
        //             sortArr[j] = temp;
        //         }
        //     }
        //     sb.append(sortArr[i]).append('\n');
        // }
        // System.out.println(sb);
    }
}