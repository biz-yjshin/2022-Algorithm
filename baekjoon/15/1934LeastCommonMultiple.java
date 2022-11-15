/**
 *  번호: 1934
 *  날짜: 2022.11.15
 *  분류: 정수론 및 조합론
 *  제목: 최소공배수
 *  링크: https://www.acmicpc.net/problem/1934
 * 
*/

import java.util.Scanner;
 
class GreatestCommonFactorAndLeastCommonMultiple { 
	public static void main(String[] args) {
 
		Scanner in = new Scanner(System.in);
		
		int a = in.nextInt();
		int b = in.nextInt();
 
		int d = gcd(a, b);	// 최대공약수
 
		System.out.println(d);
		System.out.println(a * b / d);
 
	}
 
	// 최대공약수 반복문 방식
	public static int gcd(int a, int b) {
 
		while (b != 0) {
			int r = a % b; // 나머지를 구해준다.
 
			// GCD(a, b) = GCD(b, r)이므로 변환한다.
			a = b;
			b = r;
		}
		return a;
	}
}