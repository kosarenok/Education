# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

def create_phone_number(numbers):
    numbers = "".join([str(i) for i in numbers])
    return print(f"({numbers[0:3]}) {numbers[3:6]}-{numbers[6:10]}")

create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])