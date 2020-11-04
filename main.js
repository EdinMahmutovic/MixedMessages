
const firstPart = ['Jordan Peterson is',
                    'The old man said that he was',
                    'I was once told that Donald Trump was',
                    'I once heard that Michael Jackson was']

const secondPart = [' an old and gruggy man',
                    ' the most beautiful princess',
                    ' a former NFL quarterback',
                    ' an olympic athlete']

const thirdPart = [' who enjoys hunting bears!',
                    ' who once fought an army of ants!',
                    ' who once won a beauty contest!',
                    ' who once ate 10 big macs in 3 minutes!']

const randomFirstPart = () => {
    const randomNumber = Math.floor(Math.random()*firstPart.length)
    return firstPart[randomNumber]
}
const randomSecondPart = () => {
    const randomNumber = Math.floor(Math.random()*secondPart.length)
    return secondPart[randomNumber]
}
const randomThirdPart = () => {
    const randomNumber = Math.floor(Math.random()*thirdPart.length)
    return thirdPart[randomNumber]
}

const generateRandomMessage = () => {
    return randomFirstPart() + randomSecondPart() + randomThirdPart()
}

console.log(generateRandomMessage());

