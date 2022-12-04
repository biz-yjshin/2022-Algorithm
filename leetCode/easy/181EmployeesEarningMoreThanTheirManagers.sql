/**

  날짜 : 2022.12.04
  난이도 : Easy
  제목 : 181. Employees Earning More Than Their Managers
  URL : https://leetcode.com/problems/employees-earning-more-than-their-managers/
*/

SELECT emp.Name as Employee
FROM Employee emp 
INNER JOIN Employee mgr on emp.ManagerId = mgr.Id
WHERE emp.Salary > mgr.Salary;