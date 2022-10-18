/**
 *  번호: 9012
 *  날짜: 2022-07-25
 *  제목: 괄호
 *  링크: https://www.acmicpc.net/problem/9012
 * 
 */

// import java.io.IOException;
// import java.util.*;

// class IsCollectBracket { // IsCollectBracket
//     public static void main(String[] args) throws IOException {
//         Scanner sc = new Scanner(System.in);
//         int N = sc.nextInt();
//         String[] strArr = new String[N];

//         for(int i = 0 ; i < N ; i++) {
//             strArr[i] = sc.next();
//         }

//         for(int i = 0 ; i < N ; i++) {
//             Boolean isCollect = true;
//             String[] str = strArr[i].split("");
//             Stack<String> bracketStack = new Stack<String>();
            
//             for(int j = 0 ; j < str.length ; j++) {
//                 if(str[j].equals("(")) {
//                     bracketStack.push("(");
//                 } else {
//                     if(!bracketStack.isEmpty()) { // EmptyStack으로 예외처리
//                         bracketStack.pop();
//                     } else {
//                         isCollect = false;
//                         break;
//                     }
//                 }
//             }
//             if(isCollect && bracketStack.size() == 0) {
//                 System.out.println("YES");
//             } else {
//                 System.out.println("NO");
//             }
//         }
//     }
// }

/**
 * 
 
 진행 중 과정

 1. EmptyStack으로 예외처리
 - pop / peek 등 함수

 2. java에서 문자열 비교 시 == 사용하지 않기
 - equals을 사용하여 문자를 비교해야한다.

 * 
 */

// import java.util.*;
// import java.io.*;
// import java.lang.String;

// class Main { // IsCollectBracket
//     public static void main(String[] args) throws IOException {
//         BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//         int N = Integer.parseInt(br.readLine());
//         String[] strArr = new String[N];

//         for(int i = 0 ; i < N ; i++) {
//            strArr[i] = br.readLine();
            
//         }

//         for(int i = 0 ; i < N ; i++) {
//             Stack<Character> bracketStack = new Stack<Character>();
//             Boolean isCollect = true;
            
//             for(int j = 0 ; j < strArr[i].length() ; j++) {
//                 char ch = strArr[i].charAt(j);
//                 char openBracket = ("(").charAt(0);
//                 if(ch == openBracket) {
//                     bracketStack.push(ch);
//                 } else {
//                     if(!bracketStack.isEmpty()) { // EmptyStack으로 예외처리
//                         bracketStack.pop();
//                     } else {
//                         isCollect = false;
//                         break;
//                     }
//                 }
//             }
//             if(isCollect && bracketStack.size() == 0) {
//                 System.out.println("YES");
//             } else {
//                 System.out.println("NO");
//             }
//         }
//     }
// }
// *********************************************************************************************************
import java.util.Scanner;
import java.util.Stack;

public class Main {

	public static void main(String[] args) {

		Scanner in = new Scanner(System.in);
		
		int T = in.nextInt();
		
		for(int i = 0; i < T; i++) {
			System.out.println(solve(in.next()));	// nextLine()쓰면 안된다.
		}
	}

	public static String solve(String s) {

		Stack<Character> stack = new Stack<>();

		for (int i = 0; i < s.length(); i++) {

			char c = s.charAt(i);

			// 여는 괄호일 경우 스택에 넣는다.
			if (c == '(') {
				stack.push(c);
			}

			// 아래는 모두 닫는 괄호 일 경우들이다.

			// 스택이 비어있는 경우. 즉, 닫는 괄호를 입력받았으나 pop할 원소가 없을 경우
			else if (stack.empty()) {
				return "NO";
			}
			// 그 외의 경우 stack 원소를 pop 한다.
			else {
				stack.pop();
			}
		}

		/*
		 * 모든 검사 마치고 스택에 잔여 요소가 있으면 여는 괄호가 많은 경우는 "NO" 
		 * 스택이 비어있으면 온전한 수식이므로 "YES" 이다.
		 */

		if (stack.empty()) {
			return "YES";
		} 
		else {
			return "NO";
		}
	}
}