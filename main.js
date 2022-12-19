// Bài 1: Hãy nhập vào một đoạn văn, đếm xem trong đoạn văn đó có bao nhiêu từ.
function main() {
    let input = prompt("Nhập vào chuỗi", 0)
    input = ' ' + input
    let soTu = 0
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] == ' ' && input[i + 1] != ' ') {
        soTu++
      }
    }

    console.log({ soTu })
  }
  main()
// Bài 2: Cho một chuỗi là đường dẫn của một file trong máy tính. Đường dẫn đúng là đường dẫn không có các dấu gạch chéo (/) ở đầu, ở cuối, và ở giữa các folder chỉ có duy nhất một dấu gạch chéo để phân tách. Hãy xóa các dấu gạch chéo thừa để được một đường dẫn đúng.



// Bài 3: Nhập vào một chuỗi. Kiểm tra xem chuỗi đó có chứa tất cả là số hay không.
function main() {
  let input = prompt("Nhập vào chuỗi", '123123').split('')
  for (let i = 0; i < input.length; i++) {
    if (input[i] != Number(input[i])) {
      console.log('FALSE')
      return
    }
  }

  console.log('TRUE')
}
main()
// Bài 4: Nhập vào một chuỗi. Đổi tất cả các chữ cái đầu câu thành hoa, các chữ khác thành chữ thường theo đúng chính tả. Chuỗi không chứa danh từ riêng, không chứa các dấu cách thừa. Các dấu câu có thể có gồm chấm (.), hỏi chấm (?), chấm than (!).
function main() {
    // split với tham số là '' (string rỗng), sẽ tách chuỗi thành một mảng các ký tự
    let input = prompt("Nhập vào chuỗi", '////laptrinh//////code//////chuanhoa.cpp/////').split('')
        let i = 0
}






// Bài 5: Nhập vào họ tên của một người. Tách ra tên của người đó. Chuỗi nhập vào coi như đã được chuẩn hóa.
function main() {
  let input = prompt("Nhập vào chuỗi", 'Phạm Quốc Anh')
  let personName = ''

  for (let i = input.length - 1; i >= 0; i--) {
    if (input[i] == ' ') {
      break
    }
    personName = input[i] + personName
  }
  console.log(personName)
}
main()



// Bài 6: Nhập vào một chuỗi và một ký tự. Đếm số lần xuất hiện của ký tự đó trong chuỗi đã cho và không phân biệt chữ hoa chữ thường.
function main() {
  let string = prompt("Nhập vào chuỗi", 'Pham Quoc Anh')
  let char = prompt("Ký tự cần đếm", 'a')
  let soLanXuaHien = 0
  let lowerChar = char.toLocaleLowerCase()
  let lowerString = string.toLocaleLowerCase()

  for (let i = lowerString.length - 1; i >= 0; i--) {
    let char = lowerString[i]
    if (char == lowerChar) {
      soLanXuaHien++
    }
  }

  console.log({ soLanXuaHien })
}
main()