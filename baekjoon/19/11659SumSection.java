/**
 *  번호: 11659
 *  날짜: 2022-11-29
 *  제목: 구간 합 구하기 4
 *  링크: https://www.acmicpc.net/problem/11659
 * 
 */

/*
* 아래와 같이 주석 처리된 코드를 짰을 때는 시간 초과 결과가 나왔다.
* => 이를 해결하기 위해서 sums 배열에 더한 값을 미리 작성한 뒤 sums[y] - sums[x - 1]로 하면 x부터 y구간의 합을 구할 수 있다.
*
*/ 

import java.util.Scanner;

class SumSection {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int N = sc.nextInt();
		int M = sc.nextInt();
		int[] nums = new int[N + 1];
		int[] sums = new int[N + 1];

		nums[0] = 0; 
		sums[0] = 0;

		for(int i = 1; i <= N; i++) {
			nums[i] = sc.nextInt();
			sums[i] = sums[i-1] + nums[i];
		}

		for(int i = 0; i < M; i++) {
			int x = sc.nextInt();
			int y = sc.nextInt();
			System.out.println(sums[y] - sums[x - 1]);
		}
	}
}

// import java.lang.reflect.Array;
// import java.util.Scanner;

// class SumSection {

// 	public static void main(String[] args) {
// 		Scanner sc = new Scanner(System.in);
		
// 		int N = sc.nextInt();
// 		int M = sc.nextInt();
// 		int[] nums = new int[N];

// 		for(int i = 0; i < N; i++) {
// 			nums[i] = sc.nextInt();
// 		}

// 		for(int i = 0; i < M; i++) {
// 			int x = sc.nextInt();
// 			int y = sc.nextInt();
			
// 			int sum = 0;
// 			for(int j = x - 1; j < y ; j++) {
// 				sum += nums[j];
// 			}
// 			System.out.println(sum);
// 		}
// 	}
// }