
// package main
// import (
// 	"fmt"
// 	"math"
// )

// func main() {
// 	const IMTPower = 2
// 	fmt.Println("Калькулятор ИМТ_")
// 	userKg, userHeight := getUserInput()
// 	IMT := calculateIMT(userKg, userHeight)
// 	// userKg / math.Pow(userHeight/100, IMTPower)
// 	outputresult((IMT))
// 	// result := fmt.Sprintf("Ваш индекс массы тела: %.0f", IMT)
// 	// fmt.Print(result)
// }

// func outputresult(IMT float64) {
// 	result := fmt.Sprintf("Ваш индекс массы тела: %.0f", IMT)
// 	fmt.Print(result)
// }

// func calculateIMT(userKg float64, userHeight float64) float64 {
// 	const IMTPower = 2
// 	IMT := userKg / math.Pow(userHeight/100, IMTPower)
// 	return IMT
// }

// func getUserInput() (float64, float64) {
// 	var userHeight float64
// 	var userKg float64
// 	fmt.Print("Введите свой рост в см: ")
// 	fmt.Scan(&userHeight)
// 	fmt.Print("Введите свой вес: ")
// 	fmt.Scan(&userKg)
// 	return userKg, userHeight
// }

// package main

// import (
// 	"fmt"
// )

// func main() {
// 	const book string = "- лучшая книга!"
// 	var name string
// 	fmt.Scan(&name)
// 	fmt.Println(name, book)
// }

// package main

// import (
// 	"bufio"
// 	"fmt"
// 	"os"
// )

//	func main() {
//		const book string = "- лучшая книга!"
//		scanner := bufio.NewScanner(os.Stdin)
//		scanner.Scan()
//		name := scanner.Text()
//		fmt.Println(name, book)
//	}
// package main

// import (
// 	"bufio"
// 	"fmt"
// 	"os"
// )

// func main() {
// 	fmt.Println()

// 	var line1, line2, line3 string
// 	scanner := bufio.NewScanner(os.Stdin)
// 	scanner.Scan()
// 	line1 = scanner.Text()

// 	scanner.Scan()
// 	line2 = scanner.Text()

// 	scanner.Scan()
// 	line3 = scanner.Text()

//		fmt.Println(line3)
//		fmt.Println(line2)
//		fmt.Println(line1)
//	}
// package main

// import (
// 	"bufio"
// 	"fmt"
// 	"os"
// )

// func main() {
// 	fmt.Println()
// 	var line1, line2, line3 string
// 	scanner := bufio.NewScanner(os.Stdin)

// 	scanner.Scan()
// 	delimiter := scanner.Text()

// 	scanner.Scan()
// 	line1 = scanner.Text()

// 	scanner.Scan()
// 	line2 = scanner.Text()

// 	scanner.Scan()
// 	line3 = scanner.Text()

// 	fmt.Println(line1 + delimiter + line2 + delimiter + line3)
// }

// package main

// import (
// 	"fmt"
// )

// func main() {
// 	var a float64 = 6.7
// 	b := int(a)
// 	fmt.Println(b)
// }

// package main

// import (
// 	"bufio"
// 	"fmt"
// 	"os"
// 	"strconv"
// )

// func main() {
// 	scanner := bufio.NewScanner(os.Stdin)
// 	fmt.Println()
// 	scanner.Scan()
// 	input := scanner.Text()

// 	number, err := strconv.Atoi(input)
// 	if err != nil { - СПРОСИТЬ ПРО  НИЛ-------------------------------NIL
// 		fmt.Println("Ошибка: введите целое число!")
// 		return
// 	}
// 	fmt.Println(number * number)
// }

package main

import (
	"fmt"
)

func main() {
	meters := getUserInput()
	kilometers := int64(meters) / 1000
	outputResult(kilometers)
}

func outputResult(kilometers int64) {
	result := fmt.Sprintf("%d\n", kilometers)
	fmt.Print(result)
}

func getUserInput() int64 {
	var meters int64
	fmt.Print()
	fmt.Scan(&meters)

	return meters
}
qq