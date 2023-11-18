### Add Two Numbers

[Leetcode](https://leetcode.com/problems/add-two-numbers/)

Задача опирается на принцип математического сложения в столбик. В математике такое сложение происходит начиная с младшего разряда, благо авторы задачи позаботились об этом и предоставляют входные и выходные данные в виде перевернутого связоного списка. Делаем while цикл, где выполняем действие до тех пор, пока существуют переменные первой и второй ноды. Внутри цикла создаем переменную sum, в которой храним остаток после сложения. Затем проверяем каждую ноду, если нода не равна null, то прибавляем к сумме её значение. После высчитвания суммы нам надо найти остаток от деления на разрядность, в данном случае 10тичная система. Для этого делим полученную сумму на 10 и записываем в переменную carry. В новую ноду в результат идет остаток от деления на 10.