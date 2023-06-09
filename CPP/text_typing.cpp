// Печать текста
// Напишите программу, печатающую на экране первые строчки со страницы Бьярне Страуструпа про C++:

// C++ is a general-purpose programming language with a bias towards systems programming that
//   - is a better C
//   - supports data abstraction
//   - supports object-oriented programming
//   - supports generic programming.
// Не потеряйте парные пробелы в начале строк и переносы в конце строк.

# include <iostream>

using namespace std;

int main() {
    cout << "C++ is a general-purpose programming language with a bias towards systems \n programming that \n";
    cout << "  - is a better C \n";
    cout << "  - supports data abstraction \n";
    cout << "  - supports data abstraction \n";
    cout << "  - supports generic programming.";
}