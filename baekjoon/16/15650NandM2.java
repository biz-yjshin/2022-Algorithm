/**
 *  번호: 15650
 *  날짜: 2022.10.05
 *  분류: 백트레킹
 *  제목: N과 M(2)
 *  링크: https://www.acmicpc.net/problem/15650
 * 
*/
 
// 15649번과 다른 점 : 고른 수열은 오름차순이어야 한다.

import java.util.Scanner;
 
class NandM2 {
 
	public static int[] arr;
	public static int N, M;
 
	public static void main(String[] args) {
 
		Scanner in = new Scanner(System.in);
 
		N = in.nextInt();
		M = in.nextInt();
 
		arr = new int[M];
        
		dfs(1, 0);
 
	}
 
	public static void dfs(int at, int depth) {
 
		if (depth == M) {
			for (int val : arr) {
				System.out.print(val + " ");
			}
			System.out.println();
			return;
		}
        
		for (int i = at; i <= N; i++) {
 
			arr[depth] = i;
			dfs(i + 1, depth + 1);
 
		}
	}
}