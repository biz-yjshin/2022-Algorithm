/**

  날짜 : 2022.12.04
  난이도 : Easy
  제목 : 182. Duplicate Emails
  URL : https://leetcode.com/problems/duplicate-emails/
*/

# Write your MySQL query statement below

select cust.name as Customers
from Customers cust
left outer join Orders orders on cust.id = orders.customerId
where orders.customerId is null