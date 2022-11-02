/**
 *  번호: 5086
 *  날짜: 2022.11.02
 *  분류: 정수론 및 조합론
 *  제목: 배수와 약수
 *  링크: https://www.acmicpc.net/problem/5086
 * 
*/

import java.util.Scanner;
 
class FactorsAndMultiples { 
	public static void main(String[] args) {
 
		Scanner sc = new Scanner(System.in);
        while(true) {
            int firstNum = sc.nextInt();
            int secondNum = sc.nextInt();

            if(firstNum == 0 && secondNum == 0) {
                break;
            }

            getFactorAndMulti(firstNum, secondNum);
        };
	}
 
	public static void getFactorAndMulti(int firstNum, int secondNum) {
        if(firstNum % secondNum == 0) {
            System.out.println("multiple");
            return;
        } else if(secondNum % firstNum == 0 ) {
            System.out.println("factor");
            return;
        }
        System.out.println("neither");
	}
	// public static void getFactorAndMulti(int firstNum, int secondNum) {
    //     if(firstNum > secondNum) {
    //         if(firstNum % secondNum == 0) {
    //             System.out.println("multiple");
    //             return;
    //         }
    //     } else {
    //         if(secondNum % firstNum == 0 ) {
    //             System.out.println("factor");
    //             return;
    //         }
    //     }
    //     System.out.println("neither");
	// }
}