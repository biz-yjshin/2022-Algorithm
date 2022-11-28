/**
 *  번호: 9012
 *  날짜: 2022-11-28
 *  제목: 괄호
 *  링크: https://www.acmicpc.net/problem/9012
 * 
 */

import java.util.Scanner;
import java.util.Stack;
	
class Bucket {
	public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        String[] strArr = new String[N];

        for(int i = 0 ; i < N ; i++) {
            strArr[i] = sc.next();
        }

        for(int i = 0 ; i < N ; i++) {
            Boolean isCollect = true;
            String[] str = strArr[i].split("");
            Stack<String> bracketStack = new Stack<String>();
            
            for(int j = 0 ; j < str.length ; j++) {
                if(str[j].equals("(")) {
                    bracketStack.push("(");
                } else {
                    if(!bracketStack.isEmpty()) { // EmptyStack으로 예외처리
                        bracketStack.pop();
                    } else {
                        isCollect = false;
                        break;
                    }
                }
            }
            if(isCollect && bracketStack.size() == 0) {
                System.out.println("YES");
            } else {
                System.out.println("NO");
            }
        }
    }
}