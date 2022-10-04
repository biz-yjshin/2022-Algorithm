/**
 *  번호: 15649
 *  날짜: 2022.09.29
 *  분류: 백트레킹
 *  제목: N과 M(1)
 *  링크: https://www.acmicpc.net/problem/15649
 * 
*/

/**
 * 백트레킹을 브루트포스와 헷갈렸다.
 * 브루트포스 : 모든 경우의 수를 도는 것이다.
 * 백트레킹 : 해당 범위 내에서 조건을 추가하여 값의 유망성을 판단한다. 가능한 경우의 수만 도는 것이다.
 * DFS(깊이우선탐색) : 트리순회의 한 형태. 하나의 순회 알고리즘으로 백트래킹에 사용하는 대표적인 탐색 알고리즘
 * 
 * 백트레킹의 대표적인 방법이 깊이우선탐색이다.
 * 
 * 참고) https://st-lab.tistory.com/114
 * 
*/

import java.util.Scanner;
 
class NandM {
 
	public static int[] arr;
	public static boolean[] visit;
 
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
 
		int N = in.nextInt();
		int M = in.nextInt();
 
		arr = new int[M];
		visit = new boolean[N];
		dfs(N, M, 0);
	}
 
	public static void dfs(int N, int M, int depth) {
		if (depth == M) { // 재귀 깊이가 M과 같아지면 탐색과정에서 담았던 배열을 출력
			for (int val : arr) {
				System.out.print(val + " ");
			}
			System.out.println();
			return;
		}
 
		for (int i = 0; i < N; i++) {
			if (!visit[i]) {
				visit[i] = true;		// 해당 노드를 방문상태로 변경
                arr[depth] = i + 1;		// 해당 깊이를 index로 하여 i + 1 값 저장
                dfs(N, M, depth + 1);	// 다음 자식 노드 방문을 위해 depth 1 증가시키면서 재귀호출			
				visit[i] = false;       // 자식노드 방문이 끝나고 돌아오면 방문노드를 방문하지 않은 상태로 변경
			}
		}
	} 
}
