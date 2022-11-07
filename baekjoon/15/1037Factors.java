/**
 *  번호: 1037
 *  날짜: 2022.11.07
 *  분류: 정수론 및 조합론
 *  제목: 약수
 *  링크: https://www.acmicpc.net/problem/1037
 * 
*/

import java.util.Scanner;
 
class Factors { 
	public static void main(String[] args) {
 
		Scanner sc = new Scanner(System.in);
        int N = sc.nextInt(); // 약수의 개수
        int[] M = new int[N];
        int min = 9999;
        int max = -1;
        for(int i = 0 ; i < N ; i++) {
            M[i] = sc.nextInt();
            if(M[i] < min) {
                min = M[i];
            }
            if(M[i] > max) {
                max = M[i];
            }
        }

        System.out.println(min * max);
	}
}