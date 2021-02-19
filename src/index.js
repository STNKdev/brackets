module.exports = function check(str, bracketsConfig) {
    if (str === undefined
        || bracketsConfig === undefined
        || str.length === 0
        || bracketsConfig.length === 0
    ) {
        return false;
    }

    if (str.length % 2 !== 0) {
        return false;
    }

    let stack = [];
    for (let index = 0; index < str.length; ++index) {
        bracketsConfig.forEach((pair) => {
            if (str[index] === pair[0]) {
                if (pair[0] === pair[1]
                    && index !== 0
                    && stack[stack.length - 1] === pair[1]
                ) {
                    stack.pop();
                    return;
                }
                stack.push(str[index]);
            } else if (str[index] === pair[1]) {
                if (stack[stack.length - 1] === pair[0]) {
                    stack.pop();
                }
            }
        });
    }
    return stack.length === 0;
}
