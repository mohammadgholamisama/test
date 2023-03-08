let testM = []

fetch('https://react-b2956-default-rtdb.firebaseio.com/courses.json')
.then(res => res.json())
.then(data => {
    testM.push(data)
})

export default testM