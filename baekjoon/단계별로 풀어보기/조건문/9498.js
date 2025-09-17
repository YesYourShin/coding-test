/*
  문제 링크 : https://www.acmicpc.net/problem/9498

  문제 :
  시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

  입력 :
  첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

  출력 :
  시험 성적을 출력한다.

  예제 입력 1 :
  100

  예제 출력 1 :
  A
*/

const stdin = '100';

const fs = require('fs');
// const input = Number(fs.readFileSync('/dev/stdin'));
const input = Number(stdin);

const answer = input >= 90 ? 'A' : input >= 80 ? 'B' : input >= 70 ? 'C' : input >= 60 ? 'D' : 'F';

console.log(answer);
