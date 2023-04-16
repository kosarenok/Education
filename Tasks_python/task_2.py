"""
Задача 2 (3 балла):
Написать функцию, которая принимает на вход список чисел
любой ненулевой длины и возвращает отсортированный по возрастанию список. 
Встроенными библиотеками пользоваться нельзя, встроенной функцией sort() - тоже.
"""
def list_sort():
    try:
        array = input("Введите числа через запятую(без пробелов):").split(",")
        array = list(map(int, array))
        dlina = len(array)
    except ValueError:
        return print("Вы ввели неверный тип данных")

    for i in range(dlina - 1):
        for j in range(dlina - i - 1):
            if array[j] > array[j + 1]:
                b = array[j]
                array[j] = array[j + 1]
                array[j + 1] = b
    return print(array)

list_sort()