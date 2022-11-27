/**
 *  번호: 10773
 *  날짜: 2022-11-26
 *  제목: 스택
 *  링크: https://www.acmicpc.net/problem/10773
 * 
 */

import java.util.Scanner;
import java.util.Stack;
	
public class Zero {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Stack<Integer> stack = new Stack<Integer>();

		int cnt = sc.nextInt();
		int sum=0;

		for(int i=0;i<cnt;i++){
			int num = sc.nextInt();

			if(num == 0){
			sum -= stack.isEmpty()? 0: stack.pop();
			}else{
			stack.push(num);
			sum+=num;  
			}
		}
		System.out.println(sum);
	}
}