/**
 *  번호: 18870
 *  날짜: 2022.08.17
 *  제목: 좌표 압축
 *  링크: https://www.acmicpc.net/problem/18870
 * 
*/

/*
   1. 문제를 이해하기 어려웠다.
   그래서 다른 블로그의 도움을 받아 이해하니
   순위를 매겨서 가장 낮은 값이 가장 높은 우선 순위가 되었다.
   정렬에 포함된 문제이니 정렬하여 순위대로 출력하면 되는 문제였다.

   2. 순위를 매기는 부분에 Map을 사용해야했다.

   참고) https://st-lab.tistory.com/279
*/
import java.io.IOException;
import java.util.HashMap;
import java.util.Scanner;
import java.util.Arrays;

class CoordinatesCompress { // CoordinatesCompress
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[] origin = new int[N]; // 기존 배열
        int[] sorted = new int[N]; // 정렬할 배열
        HashMap<Integer, Integer> rankingBoard = new HashMap<Integer, Integer>();	// rank를 매길 HashMap, 순위표

        for(int i = 0; i < N; i++) {
            origin[i] = sc.nextInt();
        }

        sorted = origin.clone(); // sortArr = originArr는 얕은 복사이다.
        Arrays.sort(sorted);

        StringBuilder sb = new StringBuilder();

        int rank = 0;
        for(int sortedNum : sorted) {
            if(!rankingBoard.containsKey(sortedNum)) {
                rankingBoard.put(sortedNum, rank);
                rank++;
            }
        }

        for(int originNum : origin) {
            int ranking = rankingBoard.get(originNum);	// 원본 배열 원소(key)에 대한 순위(value)를 갖고온다.
            sb.append(ranking).append(' ');
        }
        System.out.println(sb);
    }
}
