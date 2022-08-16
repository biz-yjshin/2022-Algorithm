/**
 *  번호: 11650
 *  날짜: 2022-08-12 ~ 2022.08.16
 *  제목: 좌표 정렬하기
 *  링크: https://www.acmicpc.net/problem/11650
 * 
 */

/*

중첩 for문으로 데이터를 비교하니 시간 초과가 되었다.
다른 블로그를 참고하니 Arrays.sort() 함수를 사용하여 해당 문제를 풀었다.

Arrays.sort()는 일차원 배열은 가능하지만 이차원 배열은 불가능하기에 람다식을 사용하여 Arrays.sort() 확장할 수 있어야 한다.

1. Scanner + println
2. Scanner + StringBuilder

참고 ) https://st-lab.tistory.com/110

*/
import java.util.Scanner;
import java.io.IOException;
import java.util.Arrays;

class CoordinatesSort { // CoordinatesSort
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[][] coordinates = new int[N][2];

		for(int i = 0; i < N; i++) {
			coordinates[i][0] = sc.nextInt();
			coordinates[i][1] = sc.nextInt();
		}

        Arrays.sort(coordinates, (e1, e2) -> {
            if(e1[0] == e2[0]) {
                return e1[1] - e2[1];
            } else {
                return e1[0] - e2[0];
            }
        });

        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < N; i++){
            sb.append(coordinates[i][0] + " " + coordinates[i][1]).append("\n");
        }
        System.out.println(sb);
    }
}

/*
// 처음 푼 방법 - 시간 초과
import java.util.Scanner;
import java.io.IOException;
import java.util.Arrays;

class CoordinatesSort { // CoordinatesSort
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[][] coordinates = new int[N][2];

		for(int i = 0; i < N; i++) {
			coordinates[i][0] = sc.nextInt();
			coordinates[i][1] = sc.nextInt();
		}

        for(int i = 0; i < N - 1; i++) {
            for(int j = 0; j < N; j++) {
                if(coordinates[i][0] > coordinates[j][0]) {
                    int[] temp = new int[2];
                    temp = coordinates[i];
                    coordinates[i] = coordinates[j];
                    coordinates[j] = temp;
                }
                if(coordinates[i][0] == coordinates[j][0]) {
                    if(coordinates[i][1] > coordinates[j][1]) {
                        int[] temp = new int[2];
                        temp = coordinates[i];
                        coordinates[i] = coordinates[j];
                        coordinates[j] = temp;
                    }
                }
            }
        }

        for(int i = 0; i < N; i++){
            System.out.println(coordinates[i][0] + " " + coordinates[i][1]);
        }
    }
}
 */