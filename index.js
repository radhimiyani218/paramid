let data = process.argv
function triangle(row){
    let space = " "
    let star = "*"
    let pattern = ""

    for(let i = 1; i <= row; i++){
        for(let j = 1; j <= row - i; j++){
            pattern += space
        }

        for(let k = 1; k <= i * 2 - 1; k++){
            pattern += star
        }
        
        pattern += "\n"
    }
    return pattern
}
const numrow = 5
const pattern = triangle(numrow)
console.log(pattern);