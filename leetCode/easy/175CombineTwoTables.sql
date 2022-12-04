/**

  날짜 : 2022.12.04
  난이도 : Easy
  제목 : 175. Combine Two Tables
  URL : https://leetcode.com/problems/combine-two-tables/
*/

# Write your MySQL query statement below

select a.firstName, a.lastName, b.city, b.state
from Person a
left outer join Address b on a.personId = b.personId